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
  varying vec2 vUv; uniform float uP, uTime, uFade, uLine; uniform vec3 uColor;
  void main(){
    float r = vUv.y, lat = abs(vUv.x - .5) * 2.;
    float shape = mix(1., step(lat, 1. - smoothstep(.72, 1., r)), uLine);              /* line telegraphs taper to a blade tip */
    float side = mix(1., smoothstep(1., .8, lat) * .6 + .4, uLine);
    float stripes = smoothstep(.5, .95, fract(r * 5. - uTime * 1.6));
    float rim = smoothstep(.92, .975, r) * (1. - uLine) + smoothstep(.86, .97, lat) * uLine;
    float prog = smoothstep(.045, 0., abs(r - uP));
    float a = (.1 + .13 * stripes * r + rim * .55 + prog * .9 + step(r, uP) * .16) * shape * side * uFade;
    gl_FragColor = vec4(uColor * (1. + prog * 1.4 + rim * .4), a);
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
    const m = new THREE.Mesh(geo, this._mat(TELE_FRAG, { uP: { value: 0 }, uTime: { value: 0 }, uFade: { value: 0 }, uLine: { value: line ? 1 : 0 }, uColor: { value: new THREE.Vector3(...(o.color ?? [1.5, .5, .15])) } }, false));
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
  fallSword(pos, color, dur, scale = 1) {
    const s = swordMesh(color, 3); s.scale.setScalar(scale); s.rotation.z = .22; s.visible = false; const linger = .55, fade = .3, fall = .16;
    this._add(s, dur + linger + fade, (it) => {
      const t = it.t; s.visible = t > dur - fall;
      if (t < dur) { const k = 1 - (dur - t) / fall; s.position.set(pos.x - (1 - k) * 3.2, (1 - k) * 15, pos.z); if (s.visible) this.p.spawn(s.position.x, s.position.y + 2, s.position.z, 0, 0, 0, .25, .5, color[0], color[1], color[2]); }
      else { s.position.set(pos.x, -.25, pos.z); const q = Math.max(0, (t - dur - linger) / fade); s.scale.set(scale * (1 - q), scale, scale * (1 - q)); s.position.y = -.25 - q * 2.6 * scale; }
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
