// Stage three: the Sky Gate court, a white-jade platform on a summit above a sea of clouds at golden dusk.
// A storm gathers when the boss turns (setMood). Same arena size and collision rules as the other stages.
import * as THREE from 'three';
import { colliders } from './world.js';

const rnd = (() => { let s = 31337; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();

function jadeTexture() {
  const S = 2048, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'), R = S / 2;
  g.fillStyle = '#5a554a'; g.fillRect(0, 0, S, S);
  const rings = [0, .16, .3, .44, .58, .72, .86, 1];
  for (let i = 1; i < rings.length; i++) { const r0 = rings[i - 1] * R, r1 = rings[i] * R, n = i === 1 ? 1 : Math.round((r0 + r1) * Math.PI / 190), off = rnd() * 6.28;
    for (let j = 0; j < n; j++) { const a0 = off + j / n * 6.2832, a1 = off + (j + 1) / n * 6.2832, v = rnd(); g.beginPath(); g.arc(R, R, r1, a0, a1); g.arc(R, R, r0, a1, a0, true); g.closePath(); g.fillStyle = `hsl(${40 + v * 14},${10 + v * 8}%,${31 + v * 8}%)`; g.fill(); g.strokeStyle = 'rgba(40,30,12,.8)'; g.lineWidth = 4; g.stroke(); } }
  for (let i = 0; i < 90; i++) {      /* marble veining */
    let x = rnd() * S, y = rnd() * S, a = rnd() * 6.28; g.strokeStyle = rnd() > .5 ? 'rgba(255,252,240,.22)' : 'rgba(70,64,52,.16)'; g.lineWidth = 1.5 + rnd() * 3; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 14; k++) { a += (rnd() - .5) * .7; x += Math.cos(a) * 40; y += Math.sin(a) * 40; g.lineTo(x, y); } g.stroke(); }
  // gold inlay: rings, a ring of thunder-meander marks, and an eight-pointed star at the centre
  g.strokeStyle = '#c79a36'; g.lineCap = 'round';
  for (const [r, lw] of [[.155, 10], [.44, 7], [.585, 5], [.86, 12]]) { g.lineWidth = lw; g.beginPath(); g.arc(R, R, R * r, 0, 6.2832); g.stroke(); }
  g.lineWidth = 6; for (let i = 0; i < 36; i++) { const a = i / 36 * 6.2832, ra = R * .47, rb = R * .56; g.save(); g.translate(R + Math.cos(a) * (ra + rb) / 2, R + Math.sin(a) * (ra + rb) / 2); g.rotate(a); g.strokeRect(-18, -14, 36, 28); g.strokeRect(-8, -5, 16, 10); g.restore(); }
  g.lineWidth = 8; g.beginPath(); for (let i = 0; i <= 16; i++) { const a = i / 16 * 6.2832, r = R * (i % 2 ? .06 : .145); i ? g.lineTo(R + Math.cos(a) * r, R + Math.sin(a) * r) : g.moveTo(R + Math.cos(a) * r, R + Math.sin(a) * r); } g.stroke();
  for (let i = 0; i < 20000; i++) { g.fillStyle = rnd() > .5 ? 'rgba(255,255,255,.035)' : 'rgba(0,0,0,.04)'; g.fillRect(rnd() * S, rnd() * S, 2 + rnd() * 3, 2 + rnd() * 3); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function buildWorld3(scene) {
  const root = new THREE.Group(), own = []; root.visible = false; scene.add(root);
  const bg = new THREE.Color(0x4a3038), fogObj = new THREE.FogExp2(0x5a3a3c, .011);
  const M = (c, r = .9, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: r, ...extra });
  const add = (geo, mat, x, y, z, o = {}) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = o.cast !== false; m.receiveShadow = true; if (o.rot) m.rotation.set(...o.rot); if (o.s) m.scale.set(...o.s); (o.parent || root).add(m); return m; };

  // the court: jade floor, gold-banded rim, and the rock of the summit hanging below it
  add(new THREE.CircleGeometry(14.4, 96), new THREE.MeshStandardMaterial({ map: jadeTexture(), roughness: .42, metalness: .08 }), 0, 0, 0, { cast: false, rot: [-Math.PI / 2, 0, 0] });
  const gold = M(0x9a7a2c, .4, { metalness: .85 }), jade = M(0x8a8676, .5), rock = M(0x5a5048, .95, { flatShading: true });
  add(new THREE.CylinderGeometry(14.4, 14.6, .5, 96, 1, true), gold, 0, -.25, 0); add(new THREE.CylinderGeometry(14.6, 13.4, 2.2, 48, 1, true), jade, 0, -1.6, 0);
  add(new THREE.ConeGeometry(13.6, 15, 9, 3), rock, 0, -10.2, 0, { rot: [Math.PI, .4, 0], cast: false });
  for (let i = 0; i < 26; i++) { const a = rnd() * 6.2832, r = 22 + rnd() * 34, s = 2 + rnd() * 5, y = -5 + rnd() * 9; if (Math.cos(a) * r > 10 && Math.abs(Math.sin(a) * r) < 30) continue; add(new THREE.DodecahedronGeometry(s, 0), rock, Math.sin(a) * r, y, Math.cos(a) * r, { s: [1.3, .8 + rnd() * .7, 1.1], rot: [rnd(), rnd() * 6, rnd()], cast: false }); add(new THREE.CylinderGeometry(s * .8, s * .95, .3, 9), jade, Math.sin(a) * r, y + s * .62, Math.cos(a) * r, { cast: false }); }

  // sea of clouds far below
  const cloudMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uStorm: { value: 0 } },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      varying vec3 vW; uniform float uTime, uStorm;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<5;i++){ s += a*noise(p); p = p*2.02 + 5.3; a *= .5; } return s; }
      void main(){
        vec2 p = vW.xz * .028 + vec2(uTime * .012, uTime * .006);
        float n = fbm(p + fbm(p * 1.7 - uTime * .01) * .9), puff = smoothstep(.32, .78, n);
        vec3 lit = mix(vec3(.85,.46,.22), vec3(.3,.27,.45), uStorm), shade = mix(vec3(.2,.1,.14), vec3(.05,.05,.12), uStorm);
        vec3 c = mix(shade, lit, puff) * (.75 + .5 * fbm(p * 3.));
        float d = length(vW.xz); c = mix(c, mix(vec3(.36,.22,.22), vec3(.1,.08,.16), uStorm), smoothstep(60., 150., d));
        gl_FragColor = vec4(c, 1.);
      }`,
  });
  const clouds = new THREE.Mesh(new THREE.CircleGeometry(170, 48), cloudMat); clouds.rotation.x = -Math.PI / 2; clouds.position.y = -8; root.add(clouds);

  // light: low gold sun, warm sky, a violet fill that takes over in the storm
  const hemi = new THREE.HemisphereLight(0xffd0a8, 0x352a48, .5); root.add(hemi);
  const sun = new THREE.DirectionalLight(0xffb870, 2.6); sun.position.set(-17, 15, -9); sun.castShadow = true; const sm = matchMedia('(pointer: coarse)').matches ? 1024 : 2048; sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 4, far: 70 }); sun.shadow.bias = -.0006; sun.shadow.normalBias = .03; sun.shadow.radius = 3; root.add(sun);
  const fill = new THREE.DirectionalLight(0x9aa0ff, .4); fill.position.set(6, 12, 16); root.add(fill);

  // code-built stand-ins for the generated props
  const groups = {}, spec = { pillars: [], bell: [{ x: -9.6, z: -6.6 }], gate: [{ x: 0, z: -20 }] }, grp = (n) => (groups[n] = new THREE.Group(), root.add(groups[n]), groups[n]);
  let G0 = grp('pillars');
  for (let i = 0; i < 8; i++) { const a = (i + .5) / 8 * 6.2832, x = Math.sin(a) * 12.7, z = Math.cos(a) * 12.7, far = z < -1, h = far ? 6.5 : z < 6 ? 3 : 1.4; spec.pillars.push({ x, z, h, ry: rnd() * 6 }); add(new THREE.CylinderGeometry(.42, .5, h, 10), jade, x, h / 2, z, { parent: G0 }); add(new THREE.CylinderGeometry(.7, .7, .3, 10), gold, x, .15, z, { parent: G0 }); own.push({ x, z, r: .8, tag: 'pillars' }); }
  G0 = grp('bell'); add(new THREE.CylinderGeometry(.9, 1.2, 1.8, 14), M(0x6a5a34, .5, { metalness: .8 }), -9.6, 1.4, -6.6, { parent: G0 }); add(new THREE.BoxGeometry(3, .3, .5), jade, -9.6, 2.9, -6.6, { parent: G0 }); own.push({ x: -9.6, z: -6.6, r: 1.5, tag: 'bell' });
  G0 = grp('gate'); for (const sx of [-1, 1]) add(new THREE.BoxGeometry(1.4, 12, 1.4), jade, sx * 5, 6, -20, { parent: G0 }); add(new THREE.BoxGeometry(14, 1.2, 2.4), gold, 0, 12.4, -20, { parent: G0 });
  add(new THREE.CylinderGeometry(8.5, 6, 3, 9), rock, 0, -1.6, -20.5, { cast: false }); add(new THREE.CylinderGeometry(8.4, 8.5, .3, 24), jade, 0, .05, -20.5, { cast: false });
  for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(5.2, .2, .9), jade, 0, .05, -14.6 - i * .95, { cast: false });

  function put(gltf, o) {
    const m = gltf.scene.clone(true), g = new THREE.Group(); m.traverse((n) => { if (n.isMesh) n.castShadow = n.receiveShadow = true; });
    g.add(m); g.updateMatrixWorld(true); let b = new THREE.Box3().setFromObject(m); const size = b.getSize(new THREE.Vector3()); m.scale.multiplyScalar(o.size / (o.fit === 'wide' ? Math.max(size.x, size.z) : size.y)); g.updateMatrixWorld(true);
    b = new THREE.Box3().setFromObject(m); m.position.set(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2); g.position.set(o.x, o.y ?? 0, o.z); g.rotation.y = o.ry ?? 0; root.add(g); return { g, r: Math.max(b.max.x - b.min.x, b.max.z - b.min.z) / 2 };
  }
  const drop = (tag) => { for (let i = own.length - 1; i >= 0; i--) if (own[i].tag === tag) own.splice(i, 1); };
  function useProps(P) {
    if (P.jadepillar) { groups.pillars.visible = false; drop('pillars'); for (const s of spec.pillars) { const { r } = put(P.jadepillar, { x: s.x, z: s.z, size: s.h, ry: s.ry }); own.push({ x: s.x, z: s.z, r: Math.max(.5, Math.min(.9, r * .75)), tag: 'pillars' }); } }
    if (P.bell) { groups.bell.visible = false; drop('bell'); const { r } = put(P.bell, { x: -9.6, z: -6.6, size: 3.4, ry: .9 }); own.push({ x: -9.6, z: -6.6, r: Math.min(1.7, r * .8), tag: 'bell' }); }
    if (P.skygate) { groups.gate.visible = false; put(P.skygate, { x: 0, z: -20.5, y: .1, size: 15, fit: 'wide' }); }
  }
  const mood = { k: 0, to: 0 };
  return {
    root, lanterns: [], useProps,
    activate() { scene.background = bg; scene.fog = fogObj; colliders.length = 0; colliders.push(...own); },
    setMood(v) { mood.to = v; },
    update(dt, t) {
      mood.k += (mood.to - mood.k) * Math.min(1, dt * 1.1); const k = mood.k; cloudMat.uniforms.uTime.value = t; cloudMat.uniforms.uStorm.value = k;
      sun.intensity = 2.6 - k * 1.6; sun.color.setRGB(1, .72 - .15 * k, .44 + .4 * k); hemi.intensity = .5 - .15 * k; fill.intensity = .4 + .9 * k;
      bg.setRGB(.29 - .2 * k, .19 - .12 * k, .22 - .04 * k); fogObj.color.setRGB(.35 - .25 * k, .23 - .15 * k, .24 - .04 * k);
    },
  };
}
