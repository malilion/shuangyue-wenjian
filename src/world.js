// The arena: a ruined sword-sect training platform at night. Everything here is code-built; generated props replace pieces later.
import * as THREE from 'three';

export const ARENA_R = 13.6;
export const colliders = [];      // { x, z, r } static circles inside the walkable disc

const rnd = (() => { let s = 20261112; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();
const canvas = (S) => { const c = document.createElement('canvas'); c.width = c.height = S; return c; };

function slabTextures() {
  const S = 2048, c = canvas(S), h = canvas(S), g = c.getContext('2d'), k = h.getContext('2d'), R = S / 2;
  g.fillStyle = '#23272c'; g.fillRect(0, 0, S, S); k.fillStyle = '#202020'; k.fillRect(0, 0, S, S);
  const rings = [0, .13, .25, .38, .51, .64, .77, .89, 1];
  for (let i = 1; i < rings.length; i++) {
    const r0 = rings[i - 1] * R, r1 = rings[i] * R, n = i === 1 ? 1 : Math.round((r0 + r1) * Math.PI / 150), off = rnd() * 6.28;
    for (let j = 0; j < n; j++) {
      const a0 = off + j / n * 6.2832, a1 = off + (j + 1) / n * 6.2832, v = rnd();
      for (const [ctx, fill, stroke, lw] of [[g, `hsl(${205 + v * 20},${5 + v * 5}%,${27 + v * 11}%)`, '#14171b', 5], [k, `rgb(${[0, 0, 0].map(() => 150 + v * 60 | 0)})`, '#181818', 9]]) {
        ctx.beginPath(); ctx.arc(R, R, r1, a0, a1); ctx.arc(R, R, r0, a1, a0, true); ctx.closePath();
        ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke();
      }
    }
  }
  // worn carving at the centre: a sword laid across two interlocked rings, plus a ring of short strokes
  for (const [ctx, col] of [[g, 'rgba(10,12,14,.55)'], [k, 'rgba(40,40,40,.9)']]) {
    ctx.strokeStyle = col; ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(R, R, R * .105, 0, 6.2832); ctx.stroke();
    ctx.beginPath(); ctx.arc(R, R - R * .052, R * .052, -Math.PI / 2, Math.PI / 2); ctx.arc(R, R + R * .052, R * .052, -Math.PI / 2, Math.PI / 2, true); ctx.stroke();
    for (let i = 0; i < 24; i++) { const a = i / 24 * 6.2832, ra = R * .30, rb = R * (i % 3 ? .325 : .345); ctx.beginPath(); ctx.moveTo(R + Math.cos(a) * ra, R + Math.sin(a) * ra); ctx.lineTo(R + Math.cos(a) * rb, R + Math.sin(a) * rb); ctx.stroke(); }
    ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(R, R, R * .585, 0, 6.2832); ctx.stroke();
  }
  for (let i = 0; i < 26000; i++) { const x = rnd() * S, y = rnd() * S, d = rnd(); g.fillStyle = d > .5 ? 'rgba(255,255,255,.035)' : 'rgba(0,0,0,.07)'; g.fillRect(x, y, 2 + d * 3, 2 + d * 3); k.fillStyle = d > .5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.08)'; k.fillRect(x, y, 3, 3); }
  for (let i = 0; i < 46; i++) {     // moss and damp stains, denser toward the rim
    const a = rnd() * 6.2832, rr = R * (.35 + .65 * Math.sqrt(rnd())), x = R + Math.cos(a) * rr, y = R + Math.sin(a) * rr, s = 50 + rnd() * 190;
    const gr = g.createRadialGradient(x, y, 0, x, y, s); gr.addColorStop(0, rnd() > .45 ? 'rgba(52,78,50,.42)' : 'rgba(8,10,14,.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - s, y - s, s * 2, s * 2);
  }
  for (let i = 0; i < 34; i++) {     // cracks
    let x = rnd() * S, y = rnd() * S, a = rnd() * 6.28;
    for (const [ctx, col, lw] of [[g, 'rgba(8,9,11,.8)', 2.5], [k, 'rgba(10,10,10,.95)', 5]]) {
      let px = x, py = y, pa = a; ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(px, py);
      for (let s = 0; s < 9; s++) { pa += (Math.sin(i * 7 + s * 3.1) * .7); px += Math.cos(pa) * 26; py += Math.sin(pa) * 26; ctx.lineTo(px, py); } ctx.stroke();
    }
  }
  const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  const bump = new THREE.CanvasTexture(h); bump.anisotropy = 8;
  return { map, bump };
}

function earthTexture() {
  const S = 512, c = canvas(S), g = c.getContext('2d'); g.fillStyle = '#10171a'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) { const v = rnd(); g.fillStyle = `hsla(${120 + v * 60},${10 + v * 18}%,${5 + v * 11}%,.5)`; const s = 2 + v * 9; g.fillRect(rnd() * S, rnd() * S, s, s * (.5 + rnd())); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(14, 14); return t;
}

export function buildWorld(scene) {
  const root = new THREE.Group(), own = []; scene.add(root);      /* everything of this stage hangs under one group so stages can be swapped */
  const bg = new THREE.Color(0x05090f), fogObj = new THREE.FogExp2(0x070d16, .021);
  const stone = (c, r = .9) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
  const add = (geo, mat, x, y, z, o = {}) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = o.cast !== false; m.receiveShadow = true; if (o.rot) m.rotation.set(...o.rot); (cur || root).add(m); return m; };
  /* code-built props live in named groups so a generated model can replace a whole category (see useProps) */
  let cur = null; const groups = {}, spec = { pillars: [], fallen: [], lanterns: [] }, grp = (n) => { cur = groups[n] = new THREE.Group(); root.add(cur); };

  // ground
  const { map, bump } = slabTextures();
  const top = add(new THREE.CircleGeometry(14.4, 96), new THREE.MeshStandardMaterial({ map, bumpMap: bump, bumpScale: 2.2, roughness: .86 }), 0, 0, 0, { cast: false, rot: [-Math.PI / 2, 0, 0] });
  add(new THREE.CylinderGeometry(14.4, 14.75, .5, 96, 1, true), stone(0x2a2f35), 0, -.25, 0);
  add(new THREE.CylinderGeometry(15.5, 15.9, .22, 96), stone(0x24292e), 0, -.4, 0);
  add(new THREE.CircleGeometry(90, 48), new THREE.MeshStandardMaterial({ map: earthTexture(), roughness: 1 }), 0, -.5, 0, { cast: false, rot: [-Math.PI / 2, 0, 0] });

  // lights: cold moon key, warm lantern pools
  root.add(new THREE.HemisphereLight(0x5b7fb5, 0x0b0f12, .85));
  const moon = new THREE.DirectionalLight(0xa9c4ff, 2.3); moon.position.set(-15, 26, -11); moon.castShadow = true;
  moon.shadow.mapSize.set(matchMedia('(pointer: coarse)').matches ? 1024 : 2048, matchMedia('(pointer: coarse)').matches ? 1024 : 2048); Object.assign(moon.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 4, far: 70 }); moon.shadow.bias = -.0006; moon.shadow.normalBias = .03; moon.shadow.radius = 3;
  root.add(moon);
  const fill = new THREE.DirectionalLight(0xc9d6ff, .85); fill.position.set(5, 12, 16); root.add(fill);   /* camera-side fill so characters read from above */

  // rim pillars: tall on the far side, broken stumps toward the camera so nothing hides the fight
  const pillarMat = stone(0x4a5058), capMat = stone(0x393e45); grp('pillars');
  for (let i = 0; i < 10; i++) {
    const a = (i + .5) / 10 * 6.2832, x = Math.sin(a) * 12.55, z = Math.cos(a) * 12.55, far = z < -2;
    const h = far ? 3.2 + rnd() * 1.6 : z < 5 ? 1.4 + rnd() * 1.2 : .5 + rnd() * .5;
    add(new THREE.CylinderGeometry(.42, .5, h, 10), pillarMat, x, h / 2, z, { rot: [0, rnd() * 3, far ? 0 : (rnd() - .5) * .06] });
    add(new THREE.CylinderGeometry(.62, .62, .22, 10), capMat, x, .11, z);
    if (far && h > 4) add(new THREE.BoxGeometry(1.15, .26, 1.15), capMat, x, h + .13, z);
    else add(new THREE.DodecahedronGeometry(.36 + rnd() * .12, 0), pillarMat, x + (rnd() - .5) * 1.6, .2, z + (rnd() - .2) * 1.2, { rot: [rnd() * 3, rnd() * 3, 0] });
    own.push({ x, z, r: .78, tag: 'pillars' }); spec.pillars.push({ x, z, h, far, ry: rnd() * 6.28 });
  }
  // two fallen pieces inside the ring split the floor a little
  grp('fallen');
  for (const [x, z, ry] of [[-6.4, -2.6, .5], [6.9, 2.2, -1.1]]) {
    spec.fallen.push({ x, z, ry });
    add(new THREE.CylinderGeometry(.5, .5, 2.3, 10), pillarMat, x, .46, z, { rot: [Math.PI / 2, 0, ry] });
    add(new THREE.DodecahedronGeometry(.42, 0), pillarMat, x + .9, .24, z + .7, { rot: [1, 2, 0] });
    own.push({ x: x - Math.sin(ry) * .6, z, r: .8, tag: 'fallen' }, { x: x + Math.sin(ry) * .6, z, r: .8, tag: 'fallen' });
  }
  // toppled incense burner
  grp('burner');
  const bronze = new THREE.MeshStandardMaterial({ color: 0x4d5a4c, roughness: .55, metalness: .7 });
  add(new THREE.CylinderGeometry(.75, .5, 1.1, 14, 1, true), bronze, 3.4, .62, -8.6, { rot: [1.25, .4, 0] }).material.side = THREE.DoubleSide;
  add(new THREE.TorusGeometry(.75, .07, 6, 18), bronze, 3.52, .95, -8.12, { rot: [1.25 - Math.PI / 2, .4, 0] });
  own.push({ x: 3.4, z: -8.6, r: 1.0, tag: 'burner' });

  // stone lanterns
  grp('lanterns');
  const lanterns = [], glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.5, .5) });
  for (const a of [.62, 2.2, 3.95, 5.6]) {
    const x = Math.sin(a) * 11.2, z = Math.cos(a) * 11.2;
    add(new THREE.CylinderGeometry(.16, .24, 1.2, 8), capMat, x, .6, z); add(new THREE.BoxGeometry(.62, .1, .62), capMat, x, 1.24, z);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(.4, .4, .4), glowMat); glow.position.set(x, 1.5, z); root.add(glow); spec.lanterns.push({ x, z, glow });
    add(new THREE.ConeGeometry(.56, .36, 4), capMat, x, 1.9, z, { rot: [0, Math.PI / 4, 0] });
    const l = new THREE.PointLight(0xff9440, 46, 17, 1.9); l.position.set(x, 1.6, z); root.add(l);
    lanterns.push({ l, base: 46, ph: rnd() * 9 }); own.push({ x, z, r: .5, tag: 'lanterns' });
  }

  // gate arch on the far side
  grp('gate');
  const wood = stone(0x2a1f1c, .8), tile = stone(0x1b2026, .7);
  for (const sx of [-1, 1]) { add(new THREE.CylinderGeometry(.38, .44, 6.4, 10), wood, sx * 3.4, 2.7, -17.2); add(new THREE.BoxGeometry(1.1, .5, 1.1), capMat, sx * 3.4, -.25, -17.2); }
  add(new THREE.BoxGeometry(9.4, .5, .6), wood, 0, 5.1, -17.2); add(new THREE.BoxGeometry(8.2, .34, .5), wood, 0, 4.3, -17.2);
  add(new THREE.BoxGeometry(10.8, .3, 2.2), tile, 0, 6.05, -17.2, { rot: [0, 0, 0] }); add(new THREE.BoxGeometry(11.4, .16, 2.7), tile, 0, 5.85, -17.2);
  add(new THREE.BoxGeometry(2.2, .8, .12), stone(0x15191d), 0, 4.72, -16.86);
  cur = null;
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(6.4 + i * .5, .2, .7), capMat, 0, -.1 - i * .1, -14.9 - i * .62);

  // bamboo grove (kept away from the camera side): jointed tapering culms, leaf sprays on alpha-tested cards, wind sway in the vertex shader
  const stalks = [], sprays = [];
  for (let i = 0; i < 1400 && stalks.length < 520; i++) {
    const a = rnd() * 6.2832, r = 17.2 + Math.pow(rnd(), 1.5) * 30, x = Math.sin(a) * r, z = Math.cos(a) * r;
    if (z > 7 && Math.abs(x) < 30) continue; if (Math.abs(x) < 5 && z < -15 && z > -32) continue;
    const h = 8 + rnd() * 9, lean = (rnd() - .5) * .16, ry = rnd() * 6.28; stalks.push({ x, z, h, lean, ry, w: .8 + rnd() * .7 });
    for (let j = 0; j < 7; j++) { const t = .42 + rnd() * .58, out = .5 + rnd() * 1.0, a2 = rnd() * 6.2832; sprays.push({ x: x + Math.sin(a2) * out * .5, y: h * t - .5, z: z + Math.cos(a2) * out * .5, ry: a2, tilt: -.25 - rnd() * .7, s: 1.5 + rnd() * 1.6, c: .7 + rnd() * .5 }); }
  }
  const culmTex = (() => { const c = canvas(64), g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 64, 0); gr.addColorStop(0, '#2c4a2c'); gr.addColorStop(.45, '#6f9a58'); gr.addColorStop(1, '#27422a'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); g.fillStyle = 'rgba(210,225,170,.75)'; g.fillRect(0, 0, 64, 3); g.fillStyle = 'rgba(15,30,15,.7)'; g.fillRect(0, 3, 64, 3); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 14); return t; })();
  const leafTex = (() => { const c = document.createElement('canvas'); c.width = 256; c.height = 128; const g = c.getContext('2d');
    for (let i = 0; i < 9; i++) { const a = (i / 8 - .5) * 1.5 + (rnd() - .5) * .15, len = 150 + rnd() * 95, w = 9 + rnd() * 6; g.save(); g.translate(6, 64); g.rotate(a); const gr = g.createLinearGradient(0, 0, len, 0); gr.addColorStop(0, '#2d5a2c'); gr.addColorStop(.6, i % 2 ? '#5b9048' : '#467c3c'); gr.addColorStop(1, '#8fb468'); g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(len * .4, -w, len, 0); g.quadraticCurveTo(len * .4, w, 0, 0); g.fill(); g.restore(); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const wind = { value: 0 }, sway = (mat, leaf) => { mat.onBeforeCompile = (sh) => { sh.uniforms.uWind = wind; sh.vertexShader = 'uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 io = instanceMatrix[3].xyz; float hgt = ${leaf ? 'clamp(io.y / 14., 0., 1.) + position.x * .05' : 'position.y + .5'};
        float ph = uWind * 1.1 + io.x * .21 + io.z * .17; vec2 off = vec2(sin(ph) + .4 * sin(ph * 2.3 + 1.), cos(ph * .8)) * hgt * hgt * ${leaf ? '.55' : '.5'};
        ${leaf ? 'off += vec2(sin(uWind * 3.1 + io.x + position.x * 2.), 0.) * .06 * position.x;' : ''}
        transformed.xz += (inverse(mat3(instanceMatrix)) * vec3(off.x, 0., off.y)).xz;
      #endif`); }; return mat; };
  const culmGeo = new THREE.CylinderGeometry(.045, .085, 1, 7, 10);
  const sm = new THREE.InstancedMesh(culmGeo, sway(new THREE.MeshStandardMaterial({ map: culmTex, roughness: .55 })), stalks.length);
  const leafGeo = new THREE.PlaneGeometry(1, .5, 4, 1); leafGeo.translate(.5, 0, 0); { const p = leafGeo.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, -p.getX(i) * p.getX(i) * .22); leafGeo.computeVertexNormals(); }
  const lm = new THREE.InstancedMesh(leafGeo, sway(new THREE.MeshStandardMaterial({ map: leafTex, alphaTest: .45, side: THREE.DoubleSide, roughness: .8 }), true), sprays.length);
  const d = new THREE.Object3D(), col = new THREE.Color();
  stalks.forEach((s, i) => { d.position.set(s.x, s.h / 2 - .5, s.z); d.rotation.set(s.lean, s.ry, s.lean * .6); d.scale.set(s.w, s.h, s.w); d.updateMatrix(); sm.setMatrixAt(i, d.matrix); });
  sprays.forEach((s, i) => { d.position.set(s.x, s.y, s.z); d.rotation.set(0, 0, 0); d.rotation.order = 'YZX'; d.rotation.set(rnd() * .8 - .4, s.ry, s.tilt); d.scale.set(s.s, s.s, s.s); d.updateMatrix(); lm.setMatrixAt(i, d.matrix); lm.setColorAt(i, col.setRGB(s.c * .8, s.c, s.c * .75)); });
  sm.castShadow = lm.castShadow = true; lm.customDepthMaterial = sway(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: leafTex, alphaTest: .45 }), true); sm.frustumCulled = lm.frustumCulled = false; root.add(sm, lm);
  for (let i = 0; i < 46; i++) { const a = rnd() * 6.2832, r = 16.6 + rnd() * 14, s = .4 + rnd() * 1.1; add(new THREE.DodecahedronGeometry(s, 0), stone(0x2b3137), Math.sin(a) * r, -.5 + s * .35, Math.cos(a) * r, { rot: [rnd() * 3, rnd() * 3, 0] }); }

  // low drifting ground fog, thicker outside the platform
  const fogMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(.34, .46, .62) } },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      varying vec3 vW; uniform float uTime; uniform vec3 uColor;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 7.1; a *= .5; } return s; }
      void main(){
        vec2 p = vW.xz; float r = length(p);
        float n = fbm(p * .11 + vec2(uTime * .035, -uTime * .02)) * fbm(p * .05 - uTime * .012 + 3.);
        float a = smoothstep(.16, .55, n * 1.9) * (.1 + .5 * smoothstep(9., 20., r)) * smoothstep(80., 40., r);
        gl_FragColor = vec4(uColor, a * .6);
      }`,
  });
  const fog = new THREE.Mesh(new THREE.CircleGeometry(85, 40), fogMat); fog.rotation.x = -Math.PI / 2; fog.position.y = .55; fog.renderOrder = 2; root.add(fog);

  const mood = { k: 0, to: 0 };
  // Place a generated prop: scale so its `fit` dimension (height by default) matches, sit it on the ground.
  function put(gltf, o) {
    const m = gltf.scene.clone(true), g = new THREE.Group(); m.traverse((n) => { if (n.isMesh) { n.castShadow = n.receiveShadow = true; } });
    if (o.pre) m.rotation.set(...o.pre); g.add(m); g.updateMatrixWorld(true);
    let b = new THREE.Box3().setFromObject(m); const size = b.getSize(new THREE.Vector3()), k = o.size / (o.fit === 'long' ? Math.max(size.x, size.z) : o.fit === 'wide' ? size.x : size.y); m.scale.multiplyScalar(k); g.updateMatrixWorld(true);
    b = new THREE.Box3().setFromObject(m); m.position.set(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2);
    g.position.set(o.x, o.y ?? 0, o.z); g.rotation.y = o.ry ?? 0; root.add(g); g.userData.half = { x: (b.max.x - b.min.x) / 2, z: (b.max.z - b.min.z) / 2 }; return g;
  }
  // Collision follows the placed model's footprint: one circle for roundish props, a row of circles (a capsule) for long ones.
  function collide(tag, g, o = {}) {
    const h = g.userData.half, long = Math.max(h.x, h.z), short = Math.min(h.x, h.z), ry = g.rotation.y, ax = h.x >= h.z ? [Math.cos(ry), -Math.sin(ry)] : [Math.sin(ry), Math.cos(ry)];
    if (long < short * 1.5) { own.push({ x: g.position.x, z: g.position.z, r: (o.k ?? .8) * (long + short) / 2, tag }); return; }
    const r = short * (o.k ?? .9), n = Math.max(2, Math.ceil((long - r) / (r * .8)) + 1); for (let i = 0; i < n; i++) { const t = (i / (n - 1) * 2 - 1) * (long - r); own.push({ x: g.position.x + ax[0] * t, z: g.position.z + ax[1] * t, r, tag }); }
  }
  const drop = (tag) => { for (let i = own.length - 1; i >= 0; i--) if (own[i].tag === tag) own.splice(i, 1); };
  function useProps(P) {
    if (P.pillar_tall && P.pillar_broken) { groups.pillars.visible = false; drop('pillars'); for (const s of spec.pillars) collide('pillars', s.far ? put(P.pillar_tall, { x: s.x, z: s.z, size: s.h + 1.2, ry: s.ry }) : put(P.pillar_broken, { x: s.x, z: s.z, size: Math.max(1.1, s.h), ry: s.ry }), { k: .78 }); }
    if (P.pillar_fallen) { groups.fallen.visible = false; drop('fallen'); for (const s of spec.fallen) collide('fallen', put(P.pillar_fallen, { x: s.x, z: s.z, size: 2.9, fit: 'long', ry: s.ry })); }
    if (P.burner) { groups.burner.visible = false; drop('burner'); collide('burner', put(P.burner, { x: 3.4, z: -8.6, size: 1.5, ry: .6 }), { k: .78 }); }
    if (P.lantern) { groups.lanterns.visible = false; drop('lanterns'); for (const s of spec.lanterns) { collide('lanterns', put(P.lantern, { x: s.x, z: s.z, size: 2.3, ry: Math.atan2(-s.x, -s.z) }), { k: .62 }); s.glow.scale.setScalar(.72); s.glow.position.y = 1.35; } }
    if (P.gate) { groups.gate.visible = false; put(P.gate, { x: 0, z: -17.4, y: -.5, size: 11.5, fit: 'wide' }); }
  }
  return {
    top, moon, lanterns, useProps, root,
    activate() { scene.background = bg; scene.fog = fogObj; colliders.length = 0; colliders.push(...own); },
    setMood(v) { mood.to = v; },
    update(dt, t) {
      fogMat.uniforms.uTime.value = t; wind.value = t; mood.k += (mood.to - mood.k) * Math.min(1, dt * 1.2);
      for (const L of lanterns) { L.l.intensity = L.base * (.86 + .1 * Math.sin(t * 7 + L.ph) + .06 * Math.sin(t * 17.3 + L.ph * 2)) * (1 + mood.k * .25); L.l.color.setRGB(1, .58 - .42 * mood.k, .25 - .2 * mood.k); }
      glowMat.color.setRGB(3.2, 1.5 - 1.1 * mood.k, .5 - .35 * mood.k);
      moon.intensity = 2.3 - mood.k * .25;
    },
  };
}

// Push a circle out of the rim and the static colliders. Returns the corrected position in place.
export function clampToArena(pos, r) {
  for (let it = 0; it < 2; it++) {
    for (const c of colliders) { const dx = pos.x - c.x, dz = pos.z - c.z, d = Math.hypot(dx, dz), m = c.r + r; if (d < m && d > 1e-4) { pos.x = c.x + dx / d * m; pos.z = c.z + dz / d * m; } }
    const d = Math.hypot(pos.x, pos.z), m = ARENA_R - r; if (d > m) { pos.x *= m / d; pos.z *= m / d; }
  }
  return pos;
}
