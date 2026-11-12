// Effects: blade arcs, ground telegraphs, shock rings, falling swords, and one ring-buffer particle system.
import * as THREE from 'three';

const NOISE = /* glsl */`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
  float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 3.7; a *= .5; } return s; }`;
const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }';

// Flat ring sector in XZ centred on +Z. uv.x runs along the arc (0 at the -X end), uv.y from inner to outer radius.
function sectorGeo(arc, r0 = 0, seg = 56) {
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= seg; i++) { const u = i / seg, a = (u - .5) * arc, s = Math.sin(a), c = Math.cos(a); pos.push(s * r0, 0, c * r0, s, 0, c); uv.push(u, 0, u, 1); }
  for (let i = 0; i < seg; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); return g;
}
function lineGeo() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-.5, 0, 0, .5, 0, 0, -.5, 0, 1, .5, 0, 1], 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 1, 1], 2)); g.setIndex([0, 2, 1, 1, 2, 3]); return g;
}
const geoCache = new Map();
const cached = (key, make) => { if (!geoCache.has(key)) geoCache.set(key, make()); return geoCache.get(key); };

const SLASH_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uDir, uSeed, uAlpha, uStatic; uniform vec3 uColor; ${NOISE}
  void main(){
    float u = clamp(uDir > 0. ? vUv.x : 1. - vUv.x, 0., 1.), vy = clamp(vUv.y, 0., 1.);   /* pow() of a slightly negative varying is NaN, and bloom spreads NaN over the whole frame */
    float head = uT * 2.4, behind = head - u;
    float trail = mix(step(0., behind) * exp(-max(behind, 0.) * 2.4), 1., uStatic);
    float tip = pow(max(sin(3.14159 * u), 0.), .55);                                   /* both ends taper to a point */
    float core = pow(vy, 10.), body = pow(vy, 2.4) * .5;
    float n = fbm(vec2(u * 7. - uT * 5., vy * 3.5 + uSeed));
    float erode = mix(smoothstep(uT * 1.2 - .3, uT * 1.2 + .02, n * .75 + trail * .55), .65 + .5 * n, uStatic);
    float a = min((core * 1.5 + body * (.4 + 1.1 * n)) * trail * tip * erode, 1.3) * uAlpha;
    gl_FragColor = vec4(uColor * a * 1.9 + vec3(.9) * core * trail * tip * erode * uAlpha * .55, 1.);
  }`;
const INK_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uDir, uSeed; ${NOISE}
  void main(){
    float u = uDir > 0. ? vUv.x : 1. - vUv.x; float tip = pow(max(sin(3.14159 * u), 0.), .7);
    float n = fbm(vec2(u * 5. + uSeed, vUv.y * 3.));
    float a = pow(clamp(vUv.y, 0., 1.), 1.6) * tip * step(u, uT * 3.) * smoothstep(uT * 1.1 - .15, uT * 1.1 + .15, n + .25) * .55;
    gl_FragColor = vec4(vec3(.01, .02, .03), a);
  }`;
const TELE_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uP, uTime, uFade, uLine, uSide; uniform vec3 uColor; ${NOISE}
  void main(){
    float r = clamp(vUv.y, 0., 1.), lat = abs(vUv.x - .5) * 2., a; vec3 col = uColor;
    if (uLine > .5) {
      /* aiming line: a hair-thin core with dashes running toward the target and a faint halo; it tightens and brightens as the shot nears */
      float core = smoothstep(.11, 0., lat), halo = smoothstep(1., 0., lat) * .16, dash = .35 + .65 * step(.4, fract(r * 11. - uTime * 3.));
      float len = smoothstep(0., .03, r) * smoothstep(1., .5, r), hot = pow(uP, 5.);
      a = (core * dash * (.3 + .5 * uP) + halo * (.15 + .85 * uP) + core * hot) * len * uFade; col *= 1. + hot * 1.6;
    } else {
      /* area warning: quiet ink wash, a crisp thin outline, and one bright front sweeping outward as the timer runs */
      float grain = .78 + .22 * noise(vec2(vUv.x * 46., r * 5.));
      float rim = smoothstep(.972, .988, r) + uSide * smoothstep(.975, .995, lat) * smoothstep(.02, .1, r);
      float front = smoothstep(.07, 0., abs(r - uP)) * step(r, uP + .01), wash = (.035 + .08 * r * r) * grain, filled = step(r, uP) * .07 * grain;
      a = (wash + filled + rim * .55 + front * .5) * uFade * (1. - uSide * smoothstep(.995, 1., lat)); col *= 1. + front * .9 + rim * .5;
    }
    gl_FragColor = vec4(col, a);
  }`;
const RING_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${NOISE}
  void main(){
    float r = vUv.y, front = 1. - pow(max(1. - uT, 0.), 3.);
    float n = fbm(vec2(vUv.x * 26. + uSeed, r * 4. - uT * 3.));
    float band = smoothstep(.16, 0., front - r) * step(r, front) * (.5 + n);
    float a = band * pow(max(1. - uT, 0.), 1.5);
    gl_FragColor = vec4(uColor * a * 1.8, 1.);
  }`;
const CRACK_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${NOISE}
  void main(){
    float r = vUv.y, ang = vUv.x * 6.2832;
    float rays = pow(abs(sin(ang * 5. + uSeed + fbm(vec2(r * 3., uSeed)) * 3.)), 26.) * smoothstep(1., .25, r);
    float scorch = smoothstep(.75, .0, r) * .5;
    float glow = rays * smoothstep(1., 0., uT * 1.6);
    gl_FragColor = vec4(mix(vec3(.01), uColor * 2.2, glow), (scorch + rays * .8) * smoothstep(1., .6, uT));
  }`;

const SIGIL_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uTime; uniform vec3 uColor; ${NOISE}
  float ring(float r, float c, float w){ return smoothstep(w, 0., abs(r - c)); }
  float poly(float a, float r, float n, float d, float w){ float s = 6.2832 / n; return smoothstep(w, 0., abs(cos(floor(.5 + a / s) * s - a) * r - d)); }
  void main(){
    float reveal = smoothstep(0., .22, uT), rr = vUv.y / max(reveal, .001), a = vUv.x * 6.2832; if (rr > 1.) discard;
    float v = ring(rr, .975, .008) + ring(rr, .9, .004) + ring(rr, .62, .006) + ring(rr, .3, .004) + ring(rr, .12, .007);
    float ang = a + uTime * .45, cells = 30., ci = floor(ang / 6.2832 * cells), h = hash(vec2(ci, 3.));          /* rune band: one glyph of two or three strokes per cell */
    vec2 cu = vec2(fract(ang / 6.2832 * cells), (rr - .66) / .2);
    float glyph = step(.22, cu.x) * step(cu.x, .78) * step(.12, cu.y) * step(cu.y, .88) * min(1., step(abs(cu.y - .2 - .6 * h), .07) + step(abs(cu.x - .3 - .4 * fract(h * 7.)), .06) + step(abs(cu.y - .8 + .5 * fract(h * 13.)), .06) * step(h, .65));
    v += glyph * step(.66, rr) * step(rr, .86) * .85;
    v += (poly(a - uTime * .7, rr, 6., .5, .006) + poly(a + uTime * .35 + .52, rr, 3., .27, .005) + poly(a + uTime * .35 + 1.57, rr, 3., .27, .005)) * step(rr, .62);
    v += step(.905, rr) * step(rr, .93) * step(.5, fract(a / 6.2832 * 90.)) * .55;
    float fade = smoothstep(1., .82, uT) * (.8 + .2 * sin(uTime * 7.));
    gl_FragColor = vec4(uColor * (min(v, 1.3) * .42 + (1. - rr) * .02) * fade, 1.);
  }`;

const MOON_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${NOISE}
  void main(){
    float r = clamp(vUv.y, 0., 1.), a = vUv.x * 6.2832; vec2 p = vec2(cos(a), sin(a)) * r;
    float maria = fbm(p * 2.4 + uSeed), limb = mix(.7, 1., sqrt(max(1. - r * r, 0.)));
    float v = (.5 + .55 * smoothstep(.32, .68, maria)) * limb * smoothstep(1., .965, r), halo = smoothstep(.86, .985, r) * smoothstep(1., .985, r);
    gl_FragColor = vec4(uColor * (v * .075 + halo * .22) * smoothstep(0., .28, uT) * smoothstep(1., .78, uT), 1.);
  }`;
const BLADE_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT; uniform vec3 uColor;
  void main(){
    float lat = abs(vUv.x - .5) * 2., al = clamp(vUv.y, 0., 1.), taper = max(pow(max(sin(3.14159 * al), 0.), .45), .001);
    float core = smoothstep(.2 * taper, 0., lat), glow = smoothstep(1., 0., lat / taper) * .22;
    gl_FragColor = vec4((uColor * (core * 1.5 + glow) + vec3(.6) * core) * step(al, uT * 4.) * smoothstep(1., .3, uT), 1.);
  }`;
const BEAM_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${NOISE}
  void main(){
    float h = clamp(vUv.y, 0., 1.), n = noise(vec2(vUv.x * 9. + uSeed, h * 5. - uT * 9.));
    float a = pow(1. - h, 1.6) * (.55 + .6 * n) * smoothstep(0., .12, uT) * smoothstep(1., .25, uT);
    gl_FragColor = vec4(uColor * a, 1.);
  }`;

class Particles {
  constructor(scene, cap = 1400) {
    this.cap = cap; this.i = 0; this.pos = new Float32Array(cap * 3); this.col = new Float32Array(cap * 4); this.size = new Float32Array(cap);
    this.vel = new Float32Array(cap * 3); this.life = new Float32Array(cap); this.max = new Float32Array(cap); this.grav = new Float32Array(cap); this.drag = new Float32Array(cap); this.rgb = new Float32Array(cap * 3);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('aCol', new THREE.BufferAttribute(this.col, 4)); g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uH: { value: 600 } },
      vertexShader: 'attribute vec4 aCol; attribute float aSize; uniform float uH; varying vec4 vC; void main(){ vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = aSize * uH / -mv.z; gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'varying vec4 vC; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .1, d) * vC.a; gl_FragColor = vec4(vC.rgb * a, 1.); }',
    });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 6; scene.add(this.pts);
  }
  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, grav = 0, drag = 0) {
    const i = this.i; this.i = (i + 1) % this.cap;
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3); this.rgb.set([r, g, b], i * 3); this.life[i] = this.max[i] = life; this.size[i] = size; this.grav[i] = grav; this.drag[i] = drag;
  }
  update(dt) {
    const { pos, vel, life, max, col, rgb, grav, drag } = this;
    for (let i = 0; i < this.cap; i++) {
      if (life[i] <= 0) { col[i * 4 + 3] = 0; continue; }
      life[i] -= dt; const j = i * 3, k = Math.exp(-drag[i] * dt);
      vel[j] *= k; vel[j + 1] = vel[j + 1] * k - grav[i] * dt; vel[j + 2] *= k;
      pos[j] += vel[j] * dt; pos[j + 1] += vel[j + 1] * dt; pos[j + 2] += vel[j + 2] * dt;
      if (pos[j + 1] < .03 && grav[i] > 0) { pos[j + 1] = .03; vel[j + 1] *= -.35; }
      const a = Math.max(0, life[i] / max[i]); col[i * 4] = rgb[j]; col[i * 4 + 1] = rgb[j + 1]; col[i * 4 + 2] = rgb[j + 2]; col[i * 4 + 3] = a * a;
    }
    this.geo.attributes.position.needsUpdate = this.geo.attributes.aCol.needsUpdate = this.geo.attributes.aSize.needsUpdate = true;
  }
}

export function swordMesh(color = [.5, 1.6, 1.8], len = 3) {
  const g = new THREE.Group(), glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(...color) }), dark = new THREE.MeshStandardMaterial({ color: 0x20262c, metalness: .7, roughness: .4 });
  const blade = new THREE.Mesh(new THREE.CylinderGeometry(.11, .11, len, 4), glow); blade.scale.z = .28; blade.position.y = len / 2 + .12; g.add(blade);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(.11, .5, 4), glow); tip.scale.z = .28; tip.rotation.x = Math.PI; tip.position.y = -.13; g.add(tip);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(.62, .1, .16), dark); guard.position.y = len + .14; g.add(guard);
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .6, 6), dark); grip.position.y = len + .5; g.add(grip);
  g.userData.glow = glow; return g;
}

export class FX {
  constructor(scene) { this.scene = scene; this.items = []; this.time = 0; this.p = new Particles(scene); }
  setView(h, fov) { this.p.mat.uniforms.uH.value = h / (2 * Math.tan(fov * Math.PI / 360)); }
  _mat(frag, uniforms, additive) { return new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending }); }
  _add(mesh, dur, tick) { this.scene.add(mesh); const it = { mesh, t: 0, dur, tick, dead: false }; this.items.push(it); return it; }

  // Blade arc. o: { pos, yaw, radius, arc, dir, color:[r,g,b], dur, tilt, y, width }
  slash(o) {
    const arc = o.arc ?? 2.3, w = o.width ?? .5, geo = cached('s' + arc.toFixed(2) + w, () => sectorGeo(arc, 1 - w)), seed = Math.random() * 20;
    const mk = (frag, add, extra) => { const m = new THREE.Mesh(geo, this._mat(frag, { uT: { value: 0 }, uDir: { value: o.dir ?? 1 }, uSeed: { value: seed }, uAlpha: { value: 1 }, uStatic: { value: 0 }, uColor: { value: new THREE.Vector3(...(o.color ?? [.45, 1.25, 1.4])) } }, add)); m.rotation.order = 'YXZ'; m.rotation.set(0, o.yaw, o.tilt ?? 0); m.position.set(o.pos.x, (o.y ?? 1.05) + extra, o.pos.z); m.scale.setScalar(o.radius ?? 2.8); m.renderOrder = add ? 5 : 3; return m; };
    const blade = mk(SLASH_FRAG, true, 0), dur = o.dur ?? .3;
    this._add(blade, dur, (it, p) => { blade.material.uniforms.uT.value = p; });
    if (!o.tilt) { const ink = mk(INK_FRAG, false, -.95); ink.position.y = .04; this._add(ink, dur * 2.6, (it, p) => { ink.material.uniforms.uT.value = p; }); }
  }
  // A crescent that the caller moves itself (sword-qi waves). Returns { mesh, kill() }.
  crescent(o) {
    const arc = o.arc ?? 1.9, geo = cached('s' + arc.toFixed(2) + .5, () => sectorGeo(arc, .5));
    const m = new THREE.Mesh(geo, this._mat(SLASH_FRAG, { uT: { value: 0 }, uDir: { value: 1 }, uSeed: { value: Math.random() * 20 }, uAlpha: { value: 1 }, uStatic: { value: 1 }, uColor: { value: new THREE.Vector3(...o.color) } }, true));
    m.rotation.order = 'YXZ'; m.scale.setScalar(o.radius ?? 1.6); m.renderOrder = 5;
    const it = this._add(m, 99, (it2, p, dt) => { m.material.uniforms.uT.value += dt; });
    return { mesh: m, kill: () => { it.dur = it.t + .12; it.tick = (i2, p) => { m.material.uniforms.uAlpha.value = Math.max(0, (it.dur - it.t) / .12); }; } };
  }
  // Ground warning. o: { kind:'fan'|'circle'|'line', pos, yaw, radius, arc, length, width, dur, color }
  telegraph(o) {
    const line = o.kind === 'line', arc = o.kind === 'circle' ? Math.PI * 2 : (o.arc ?? 2);
    const geo = line ? cached('line', lineGeo) : cached('t' + arc.toFixed(2), () => sectorGeo(arc, 0, 64));
    const m = new THREE.Mesh(geo, this._mat(TELE_FRAG, { uP: { value: 0 }, uTime: { value: 0 }, uFade: { value: 0 }, uLine: { value: line ? 1 : 0 }, uSide: { value: o.kind === 'fan' ? 1 : 0 }, uColor: { value: new THREE.Vector3(...(o.color ?? [1.5, .5, .15])) } }, false));
    if (line) m.scale.set(o.width, 1, o.length); else m.scale.setScalar(o.radius);
    m.position.set(o.pos.x, .05, o.pos.z); m.rotation.y = o.yaw ?? 0; m.renderOrder = 4;
    const it = this._add(m, o.dur, (i2, p) => { const u = m.material.uniforms; u.uP.value = p; u.uTime.value = this.time; u.uFade.value = Math.min(1, i2.t / .12) * Math.min(1, (i2.dur - i2.t) / .06 + .2); });
    return { mesh: m, cancel: () => { it.dead = true; }, set: (pos, yaw) => { m.position.x = pos.x; m.position.z = pos.z; if (yaw !== undefined) m.rotation.y = yaw; } };
  }
  ring(pos, radius, color = [1, .8, .5], dur = .5, y = .08) {
    const m = new THREE.Mesh(cached('t6.28', () => sectorGeo(Math.PI * 2, 0, 64)), this._mat(RING_FRAG, { uT: { value: 0 }, uSeed: { value: Math.random() * 9 }, uColor: { value: new THREE.Vector3(...color) } }, true));
    m.position.set(pos.x, y, pos.z); m.scale.setScalar(radius); m.renderOrder = 5; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; });
  }
  crack(pos, radius, color = [1, .5, .2], dur = 2.4) {
    const m = new THREE.Mesh(cached('t6.28', () => sectorGeo(Math.PI * 2, 0, 64)), this._mat(CRACK_FRAG, { uT: { value: 0 }, uSeed: { value: Math.random() * 9 }, uColor: { value: new THREE.Vector3(...color) } }, false));
    m.position.set(pos.x, .035, pos.z); m.scale.setScalar(radius); m.renderOrder = 3; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; });
  }
  // A sword that drops out of the sky and lands exactly when `dur` ends, then lingers and sinks.
  fallSword(pos, color, dur, scale = 1, linger = .55) {
    const s = swordMesh(color, 3); s.scale.setScalar(scale); s.rotation.z = .22; s.visible = false; const fade = .3, fall = Math.min(.16, dur);
    this._add(s, dur + linger + fade, (it) => {
      const t = it.t; s.visible = t > dur - fall;
      if (t < dur) { const k = 1 - (dur - t) / fall; s.position.set(pos.x - (1 - k) * 3.2, (1 - k) * 15, pos.z); if (s.visible) this.p.spawn(s.position.x, s.position.y + 2, s.position.z, 0, 0, 0, .25, .5, color[0], color[1], color[2]); }
      else { s.position.set(pos.x, -.25, pos.z); const q = Math.max(0, (t - dur - linger) / fade); s.scale.set(scale * (1 - q), scale, scale * (1 - q)); s.position.y = -.25 - q * 2.6 * scale; }
    });
  }
  // A huge pale moon lying on the floor, as if the courtyard had turned into still water.
  moon(pos, radius, color = [.8, .9, 1], dur = 3) {
    const m = new THREE.Mesh(cached('t6.28', () => sectorGeo(Math.PI * 2, 0, 64)), this._mat(MOON_FRAG, { uT: { value: 0 }, uSeed: { value: Math.random() * 9 }, uColor: { value: new THREE.Vector3(...color) } }, true));
    m.position.set(pos.x, .045, pos.z); m.scale.setScalar(radius); m.renderOrder = 3; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; });
  }
  // A straight cut: a thin tapered blade of light drawn across the field in an instant. `mid` is its centre.
  lineSlash(mid, yaw, length, width, color = [.6, 1.3, 1.5], dur = .32, y = 1) {
    const m = new THREE.Mesh(cached('line', lineGeo), this._mat(BLADE_FRAG, { uT: { value: 0 }, uColor: { value: new THREE.Vector3(...color) } }, true));
    m.scale.set(width, 1, length); m.rotation.y = yaw; m.position.set(mid.x - Math.sin(yaw) * length / 2, y, mid.z - Math.cos(yaw) * length / 2); m.renderOrder = 6; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; });
  }
  // Pillar of light shooting up from a point.
  beam(pos, height, radius, color = [.5, 1.4, 1.6], dur = .6) {
    const geo = cached('beam', () => { const g = new THREE.CylinderGeometry(1, 1, 1, 14, 1, true); g.translate(0, .5, 0); return g; });
    const m = new THREE.Mesh(geo, this._mat(BEAM_FRAG, { uT: { value: 0 }, uSeed: { value: Math.random() * 9 }, uColor: { value: new THREE.Vector3(...color) } }, true));
    m.position.set(pos.x, 0, pos.z); m.renderOrder = 5; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; const e = 1 - Math.pow(1 - p, 3); m.scale.set(radius * (1.4 - .9 * e), height * (.25 + .75 * e), radius * (1.4 - .9 * e)); });
  }
  // Rune circle on the ground: unfolds from the centre, rings and polygons counter-rotate, fades at the end.
  sigil(pos, radius, color = [.4, 1.2, 1.4], dur = 2.5) {
    const m = new THREE.Mesh(cached('t6.28', () => sectorGeo(Math.PI * 2, 0, 64)), this._mat(SIGIL_FRAG, { uT: { value: 0 }, uTime: { value: 0 }, uColor: { value: new THREE.Vector3(...color) } }, true));
    m.position.set(pos.x, .06, pos.z); m.scale.setScalar(radius); m.renderOrder = 4; this._add(m, dur, (it, p) => { m.material.uniforms.uT.value = p; m.material.uniforms.uTime.value = it.t; });
  }
  // A ring of swords that condense one by one above a point, hang turning slowly, and leave at the given times.
  swordHalo(o) {
    const g = new THREE.Group(), n = o.n, sw = []; g.position.set(o.pos.x, o.y ?? 4.2, o.pos.z);
    for (let i = 0; i < n; i++) { const s = swordMesh(o.color ?? [.5, 1.5, 1.7], 1.9), a = i / n * Math.PI * 2; s.position.set(Math.sin(a) * o.radius, 0, Math.cos(a) * o.radius); s.rotation.set(Math.cos(a) * .35, 0, -Math.sin(a) * .35); s.scale.setScalar(.001); g.add(s); sw.push(s); }
    const last = Math.max(...o.release) + .2, spin = o.spin ?? .9;
    this._add(g, last, (it) => {
      const t = it.t; g.rotation.y = t * spin;
      sw.forEach((s, i) => { const born = i / n * o.appear, k = Math.min(1, Math.max(0, (t - born) / .16)), gone = Math.min(1, Math.max(0, (t - o.release[i]) / .08)), e = 1 - Math.pow(1 - k, 3);
        s.scale.setScalar(Math.max(.001, e * (1 + .35 * Math.sin(Math.min(1, k) * Math.PI)) * (1 - gone))); s.position.y = Math.sin(t * 3 + i) * .12 + gone * 1.5;
        if (k > 0 && k < 1 && Math.random() < .5) this.p.spawn(g.position.x + s.position.x * Math.cos(g.rotation.y) + s.position.z * Math.sin(g.rotation.y), g.position.y + 1, g.position.z + s.position.z * Math.cos(g.rotation.y) - s.position.x * Math.sin(g.rotation.y), 0, 1.5, 0, .4, .25, .5, 1.5, 1.7); });
    });
  }
  sparks(pos, ang, n, color = [2.2, 1.5, .7], speed = 9, spread = .7) {
    for (let i = 0; i < n; i++) { const a = ang + (Math.random() - .5) * spread * 2, v = speed * (.35 + Math.random() * .9); this.p.spawn(pos.x, pos.y ?? 1.1, pos.z, Math.sin(a) * v, 1 + Math.random() * 4, Math.cos(a) * v, .22 + Math.random() * .3, .09 + Math.random() * .1, color[0], color[1], color[2], 16, 2.5); }
  }
  burst(pos, n, color, speed = 4, up = 2, size = .22, life = .6, y = .8) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.2832, v = speed * (.3 + Math.random() * .8); this.p.spawn(pos.x + Math.sin(a) * .2, y + Math.random() * .6, pos.z + Math.cos(a) * .2, Math.sin(a) * v, up * (.3 + Math.random()), Math.cos(a) * v, life * (.5 + Math.random() * .7), size * (.6 + Math.random() * .8), color[0], color[1], color[2], 0, 3); }
  }
  update(dt) {
    this.time += dt;
    for (const it of this.items) { if (it.dead) continue; it.t += dt; if (it.t >= it.dur) { it.dead = true; continue; } it.tick && it.tick(it, it.t / it.dur, dt); }
    for (let i = this.items.length - 1; i >= 0; i--) if (this.items[i].dead) { const m = this.items[i].mesh; this.scene.remove(m); m.traverse?.((c) => { if (c.material && c.material.isShaderMaterial) c.material.dispose(); }); this.items.splice(i, 1); }
    this.p.update(dt);
  }
}
