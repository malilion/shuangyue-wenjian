// Stage two: the Sword Tomb on the frozen tarn, at dawn, in falling snow. Same arena size and collision rules as stage one.
import * as THREE from 'three';
import { colliders } from './world.js';

const rnd = (() => { let s = 77012; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();

function iceTexture() {
  const S = 2048, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'), R = S / 2;
  const gr = g.createRadialGradient(R, R, 0, R, R, R); gr.addColorStop(0, '#1f4560'); gr.addColorStop(.55, '#356a86'); gr.addColorStop(1, '#6f9db2'); g.fillStyle = gr; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 26; i++) {      /* old swords frozen under the surface */
    const a = rnd() * 6.28, r = R * (.15 + rnd() * .8), x = R + Math.cos(a) * r, y = R + Math.sin(a) * r, L = 90 + rnd() * 120; g.save(); g.translate(x, y); g.rotate(rnd() * 6.28); g.fillStyle = 'rgba(14,30,44,.32)'; g.fillRect(-L / 2, -5, L, 10); g.fillRect(-L / 2 + L * .22, -16, 8, 32); g.restore();
  }
  for (let i = 0; i < 70; i++) {      /* long branching cracks: a white frost line with a darker depth line beside it */
    let x = rnd() * S, y = rnd() * S, a = rnd() * 6.28; const pts = [[x, y]]; for (let k = 0; k < 10 + rnd() * 10; k++) { a += (rnd() - .5) * .9; x += Math.cos(a) * 46; y += Math.sin(a) * 46; pts.push([x, y]); }
    for (const [col, lw, off] of [['rgba(10,34,52,.5)', 5, 3], ['rgba(235,250,255,.75)', 2.2, 0]]) { g.strokeStyle = col; g.lineWidth = lw; g.beginPath(); pts.forEach(([px, py], k) => (k ? g.lineTo(px + off, py + off) : g.moveTo(px + off, py + off))); g.stroke(); }
  }
  for (let i = 0; i < 9; i++) { g.strokeStyle = 'rgba(230,246,252,.16)'; g.lineWidth = 3 + rnd() * 5; g.beginPath(); g.arc(R, R, R * (.12 + i * .1), rnd() * 6, rnd() * 6 + 3 + rnd() * 3); g.stroke(); }
  for (let i = 0; i < 60; i++) { const a = rnd() * 6.28, r = R * Math.sqrt(rnd()), x = R + Math.cos(a) * r, y = R + Math.sin(a) * r, s = 40 + rnd() * 170, q = g.createRadialGradient(x, y, 0, x, y, s); q.addColorStop(0, 'rgba(240,250,255,.16)'); q.addColorStop(1, 'rgba(240,250,255,0)'); g.fillStyle = q; g.fillRect(x - s, y - s, s * 2, s * 2); }
  for (let i = 0; i < 22000; i++) { g.fillStyle = rnd() > .5 ? 'rgba(255,255,255,.06)' : 'rgba(0,20,40,.05)'; g.fillRect(rnd() * S, rnd() * S, 2 + rnd() * 3, 2 + rnd() * 3); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function swordGeo() {      /* one merged low-poly sword, point down, for the hundreds planted in the snow */
  const parts = [[.09, 1.5, .02, 0, .95, 0], [.36, .06, .06, 0, 1.72, 0], [.05, .34, .05, 0, 1.92, 0]], pos = [], idx = []; let base = 0;
  for (const [w, h, d, x, y, z] of parts) { const b = new THREE.BoxGeometry(w, h, d); b.translate(x, y, z); pos.push(...b.attributes.position.array); for (const i of b.index.array) idx.push(i + base); base += b.attributes.position.count; }
  const tip = new THREE.ConeGeometry(.045, .22, 4); tip.rotateX(Math.PI); tip.scale(1, 1, .25); tip.translate(0, .09, 0); pos.push(...tip.attributes.position.array); for (const i of tip.index.array) idx.push(i + base);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

export function buildWorld2(scene) {
  const root = new THREE.Group(), own = []; root.visible = false; scene.add(root);
  const bg = new THREE.Color(0x3b4d66), fogObj = new THREE.FogExp2(0x485c76, .019);
  const M = (c, r = .9, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: r, ...extra });
  const add = (geo, mat, x, y, z, o = {}) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = o.cast !== false; m.receiveShadow = true; if (o.rot) m.rotation.set(...o.rot); if (o.s) m.scale.set(...o.s); (o.parent || root).add(m); return m; };

  add(new THREE.CircleGeometry(14.4, 96), new THREE.MeshStandardMaterial({ map: iceTexture(), roughness: .28, metalness: .15 }), 0, 0, 0, { cast: false, rot: [-Math.PI / 2, 0, 0] });
  add(new THREE.CircleGeometry(90, 48), M(0x7e93a8, 1), 0, -.35, 0, { cast: false, rot: [-Math.PI / 2, 0, 0] });
  const snow = M(0x9db0c2, 1), rock = M(0x56616d, .95);
  for (let i = 0; i < 64; i++) { const a = i / 64 * 6.2832 + rnd() * .08, r = 14.8 + rnd() * 1.6, s = .9 + rnd() * 1.3; add(new THREE.DodecahedronGeometry(s, 1), snow, Math.sin(a) * r, -.35 + s * .2, Math.cos(a) * r, { s: [1.3, .5, 1.1], rot: [0, rnd() * 6, 0] }); }
  for (let i = 0; i < 40; i++) { const a = rnd() * 6.2832, r = 17 + rnd() * 20, s = .6 + rnd() * 1.6; add(new THREE.DodecahedronGeometry(s, 0), rock, Math.sin(a) * r, s * .2 - .3, Math.cos(a) * r, { rot: [rnd() * 3, rnd() * 3, 0] }); }

  // light: a low rose-gold sun from the far side, cold sky fill
  root.add(new THREE.HemisphereLight(0xbcd3f5, 0x34425a, .7));
  const sun = new THREE.DirectionalLight(0xffd0b0, 2.1); sun.position.set(16, 17, -15); sun.castShadow = true; const sm = matchMedia('(pointer: coarse)').matches ? 1024 : 2048; sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 4, far: 70 }); sun.shadow.bias = -.0006; sun.shadow.normalBias = .03; sun.shadow.radius = 3; root.add(sun);
  const fill = new THREE.DirectionalLight(0xbcd0ff, .45); fill.position.set(-5, 12, 16); root.add(fill);

  // code-built stand-ins for the generated props, in named groups so useProps can replace them
  const groups = {}, spec = { crystals: [], steles: [], monument: [{ x: 0, z: -18.5 }] }, grp = (n) => (groups[n] = new THREE.Group(), root.add(groups[n]), groups[n]);
  const ice = new THREE.MeshStandardMaterial({ color: 0x9fd4ea, roughness: .15, metalness: .1, transparent: true, opacity: .82, emissive: 0x16384a });
  let G0 = grp('crystals');
  for (const [x, z, s] of [[-7.2, -4.5, 1.1], [6.4, -6.8, 1.25], [7.4, 3.4, 1], [-5.6, 5.8, .9], [0.6, -10.6, 1.2]]) { spec.crystals.push({ x, z, s, ry: rnd() * 6 }); for (let k = 0; k < 4; k++) add(new THREE.ConeGeometry(.35 * s, (1.4 + rnd() * 1.6) * s, 5), ice, x + (rnd() - .5) * .8, .7 * s, z + (rnd() - .5) * .8, { parent: G0, rot: [(rnd() - .5) * .6, rnd() * 3, (rnd() - .5) * .6] }); own.push({ x, z, r: .95 * s, tag: 'crystals' }); }
  G0 = grp('steles'); const stone = M(0x6b7682, .9);
  for (const a of [.5, 1.9, 3.5, 4.6, 5.6]) { const x = Math.sin(a) * 12.3, z = Math.cos(a) * 12.3, far = z < 0; spec.steles.push({ x, z, ry: Math.atan2(-x, -z), h: far ? 2.6 : 1.5 }); add(new THREE.BoxGeometry(.9, far ? 2.4 : 1.3, .3), stone, x, (far ? 1.2 : .65), z, { parent: G0, rot: [0, Math.atan2(-x, -z), (rnd() - .5) * .1] }); own.push({ x, z, r: .7, tag: 'steles' }); }
  G0 = grp('monument'); add(new THREE.BoxGeometry(1.6, 13, .5), stone, 0, 6.5, -18.5, { parent: G0 }); add(new THREE.BoxGeometry(5, .7, .9), stone, 0, 9.5, -18.5, { parent: G0 });

  // the tomb: swords planted everywhere beyond the ice, a few on it
  const sg = swordGeo(), planted = [];
  for (let i = 0; i < 900 && planted.length < 300; i++) { const a = rnd() * 6.2832, r = 15.6 + Math.pow(rnd(), 1.3) * 26, x = Math.sin(a) * r, z = Math.cos(a) * r; if (z > 9 && Math.abs(x) < 26) continue; planted.push({ x, z, y: -.55 - rnd() * .35, s: .9 + rnd() * 1.5, rx: (rnd() - .5) * .5, rz: (rnd() - .5) * .5, ry: rnd() * 6 }); }
  for (const [x, z] of [[-3.2, -7.6], [3.9, 6.6], [-9.3, 1.2], [9.8, -1.8], [-1.6, 9.4], [4.6, -2.2]]) { planted.push({ x, z, y: -.5, s: 1.25, rx: (rnd() - .5) * .3, rz: (rnd() - .5) * .3, ry: rnd() * 6 }); own.push({ x, z, r: .32 }); }
  const im = new THREE.InstancedMesh(sg, new THREE.MeshStandardMaterial({ color: 0x5b6672, roughness: .5, metalness: .75 }), planted.length), d = new THREE.Object3D();
  planted.forEach((s, i) => { d.position.set(s.x, s.y * s.s, s.z); d.rotation.set(s.rx, s.ry, s.rz); d.scale.setScalar(s.s); d.updateMatrix(); im.setMatrixAt(i, d.matrix); }); im.castShadow = true; im.frustumCulled = false; root.add(im);
  // far ice spires fading into the mist
  const spires = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 5), new THREE.MeshStandardMaterial({ color: 0x6f8fa8, roughness: .5, flatShading: true }), 46);
  for (let i = 0; i < 46; i++) { const a = rnd() * 6.2832, r = 30 + rnd() * 30, h = 9 + rnd() * 20; if (Math.cos(a) * r > 12 && Math.abs(Math.sin(a) * r) < 34) { d.scale.setScalar(0); } else { d.position.set(Math.sin(a) * r, h / 2 - 1, Math.cos(a) * r); d.rotation.set((rnd() - .5) * .2, rnd() * 6, (rnd() - .5) * .2); d.scale.set(2 + rnd() * 3, h, 2 + rnd() * 3); } d.updateMatrix(); spires.setMatrixAt(i, d.matrix); }
  spires.frustumCulled = false; root.add(spires);

  // snowfall: points in a box that follows the camera focus
  const N = matchMedia('(pointer: coarse)').matches ? 700 : 1500, sp = new Float32Array(N * 3), sv = new Float32Array(N);
  for (let i = 0; i < N; i++) { sp[i * 3] = (rnd() - .5) * 46; sp[i * 3 + 1] = rnd() * 16; sp[i * 3 + 2] = (rnd() - .5) * 40; sv[i] = 1.6 + rnd() * 1.8; }
  const sgeo = new THREE.BufferGeometry(); sgeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const flakes = new THREE.Points(sgeo, new THREE.PointsMaterial({ color: 0xdde8f2, size: .09, transparent: true, opacity: .7, depthWrite: false, sizeAttenuation: true })); flakes.frustumCulled = false; root.add(flakes);

  function put(gltf, o) {
    const m = gltf.scene.clone(true), g = new THREE.Group(); m.traverse((n) => { if (n.isMesh) { n.castShadow = n.receiveShadow = true; if (o.ice) { n.material = n.material.clone(); n.material.transparent = true; n.material.opacity = .9; n.material.roughness = .2; n.material.emissive = new THREE.Color(0x15384a); } } });
    g.add(m); g.updateMatrixWorld(true); let b = new THREE.Box3().setFromObject(m); const size = b.getSize(new THREE.Vector3()); m.scale.multiplyScalar(o.size / (o.fit === 'wide' ? Math.max(size.x, size.z) : size.y)); g.updateMatrixWorld(true);
    b = new THREE.Box3().setFromObject(m); m.position.set(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2); g.position.set(o.x, o.y ?? 0, o.z); g.rotation.y = o.ry ?? 0; root.add(g); return { g, r: Math.max(b.max.x - b.min.x, b.max.z - b.min.z) / 2 };
  }
  const drop = (tag) => { for (let i = own.length - 1; i >= 0; i--) if (own[i].tag === tag) own.splice(i, 1); };
  function useProps(P) {
    if (P.crystal) { groups.crystals.visible = false; drop('crystals'); for (const s of spec.crystals) { const { r } = put(P.crystal, { x: s.x, z: s.z, size: 2.6 * s.s, ry: s.ry, ice: true }); own.push({ x: s.x, z: s.z, r: r * .72, tag: 'crystals' }); } }
    if (P.stele) { groups.steles.visible = false; drop('steles'); for (const s of spec.steles) { const { r } = put(P.stele, { x: s.x, z: s.z, size: s.h, ry: s.ry }); own.push({ x: s.x, z: s.z, r: Math.min(.9, r * .7), tag: 'steles' }); } }
    if (P.monument) { groups.monument.visible = false; put(P.monument, { x: 0, z: -19, y: -.6, size: 15, ry: 0 }); }
  }
  const mood = { k: 0, to: 0 };
  return {
    root, lanterns: [], useProps,
    activate() { scene.background = bg; scene.fog = fogObj; colliders.length = 0; colliders.push(...own); },
    setMood(v) { mood.to = v; },
    update(dt, t, focus) {
      mood.k += (mood.to - mood.k) * Math.min(1, dt * 1.2); sun.intensity = 2.1 - mood.k * .9; sun.color.setRGB(1, .82 - .25 * mood.k, .69 + .25 * mood.k); bg.setRGB(.23 - .07 * mood.k, .3 - .13 * mood.k, .4 - .08 * mood.k); fogObj.color.setRGB(.28 - .08 * mood.k, .36 - .14 * mood.k, .46 - .07 * mood.k);
      const fxp = focus ? focus.x : 0, fz = focus ? focus.z : 0, wx = Math.sin(t * .3) * .8 + .6;
      for (let i = 0; i < N; i++) { const j = i * 3; sp[j] += wx * dt; sp[j + 1] -= sv[i] * dt * (1 + mood.k); sp[j + 2] += .3 * dt; if (sp[j + 1] < 0) { sp[j + 1] = 16; sp[j] = fxp + (rnd() - .5) * 46; sp[j + 2] = fz + (rnd() - .5) * 40; } }
      sgeo.attributes.position.needsUpdate = true;
    },
  };
}
