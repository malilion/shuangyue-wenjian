// STAND-IN bodies. Jointed primitives posed by code so combat can be built and tuned before the generated,
// rigged characters arrive. Everything outside this file only touches { root, mats } and poseBody(), so a
// GLB-backed body can replace it without changing game logic. Character space: +Y up, +Z forward, right hand at -X.
import * as THREE from 'three';

export function makeBody(o) {
  const s = o.h / 1.75, b = o.bulk || 1, mats = [];
  const M = (c, extra = {}) => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: .82, ...extra }); mats.push(m); return m; };
  const robe = M(o.robe, { side: THREE.DoubleSide }), trim = M(o.trim), skin = M(o.skin), dark = M(o.dark ?? 0x1d2128), metal = M(o.metal ?? 0x3a3f46, { metalness: .7, roughness: .45 });
  const mesh = (geo, mat, parent, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
  const root = new THREE.Group(), hips = new THREE.Group(), chest = new THREE.Group(); root.add(hips); hips.add(chest);
  mesh(new THREE.CapsuleGeometry(.19 * b * s, .36 * s, 4, 12), robe, chest, 0, .33 * s, 0);
  mesh(new THREE.CylinderGeometry(.205 * b * s, .215 * b * s, .1 * s, 12), trim, chest, 0, .05 * s, 0);
  mesh(new THREE.CylinderGeometry(.2 * b * s, .37 * b * s, .52 * s, 12, 1, true), robe, hips, 0, -.23 * s, 0);
  mesh(new THREE.SphereGeometry(.125 * s, 14, 12), skin, chest, 0, .77 * s, 0);
  if (o.bun) { mesh(new THREE.SphereGeometry(.132 * s, 12, 10, 0, 6.3, 0, 1.7), dark, chest, 0, .785 * s, -.02 * s); mesh(new THREE.SphereGeometry(.055 * s, 8, 8), dark, chest, 0, .93 * s, -.02 * s); }
  if (o.hat) mesh(new THREE.CylinderGeometry(.07 * s, .12 * s, .34 * s, 8), dark, chest, 0, 1.02 * s, 0);
  if (o.talisman) mesh(new THREE.BoxGeometry(.07 * s, .2 * s, .01), M(0xd9d2a8, { emissive: 0x2c5a22 }), chest, 0, .8 * s, .128 * s);
  if (o.pauldron) for (const sx of [-1, 1]) mesh(new THREE.SphereGeometry(.17 * b * s, 10, 8, 0, 6.3, 0, 1.6), metal, chest, sx * .3 * b * s, .56 * s, 0);
  if (o.horn) { const h = mesh(new THREE.ConeGeometry(.035 * s, .22 * s, 6), metal, chest, .07 * s, .93 * s, .05 * s); h.rotation.z = -.5; mesh(new THREE.SphereGeometry(.09 * s, 8, 6), M(0xd8d8d8), chest, 0, .66 * s, .09 * s).scale.set(1, 1.5, .6); }
  const arm = (sx) => { const g = new THREE.Group(); g.position.set(sx * .27 * b * s, .56 * s, 0); chest.add(g); mesh(new THREE.CapsuleGeometry(.06 * b * s, .44 * s, 3, 8), robe, g, 0, -.26 * s, 0); mesh(new THREE.SphereGeometry(.062 * b * s, 8, 8), o.pauldron ? metal : skin, g, 0, -.55 * s, 0); return g; };
  const leg = (sx) => { const g = new THREE.Group(); g.position.set(sx * .1 * b * s, 0, 0); hips.add(g); mesh(new THREE.CapsuleGeometry(.072 * b * s, .66 * s, 3, 8), dark, g, 0, -.45 * s, 0); return g; };
  const armR = arm(-1), armL = arm(1), legR = leg(-1), legL = leg(1);
  const weapon = new THREE.Group(); weapon.position.y = -.55 * s; armR.add(weapon);
  if (o.weapon) {
    const w = o.weapon, blade = M(w.color, { metalness: .85, roughness: .28, emissive: w.glow ?? 0x000000 });
    mesh(new THREE.BoxGeometry(w.w, .025, w.len), blade, weapon, 0, 0, w.len / 2 + .1); mesh(new THREE.BoxGeometry(w.w * 3.2, .05, .05), metal, weapon, 0, 0, .09); mesh(new THREE.CylinderGeometry(.022, .022, .22, 6), dark, weapon, 0, 0, -.03).rotation.x = Math.PI / 2;
    weapon.userData.blade = blade;
  }
  return { root, hips, chest, armR, armL, legR, legL, weapon, mats, s, cur: null };
}

const KEYS = ['hy', 'hx', 'hY', 'cy', 'arx', 'arz', 'alx', 'alz', 'lr', 'll', 'wx'];
export function poseBody(B, a, dt) {
  const T = { hy: 0, hx: 0, hY: 0, cy: 0, arx: -.3, arz: 0, alx: 0, alz: 0, lr: 0, ll: 0, wx: .5 };
  const p = Math.min(1, Math.max(0, a.animP || 0)), e = 1 - Math.pow(1 - p, 4), d = a.swingDir || 1, mix = (x, y, k) => x + (y - x) * k; let snap = false;
  switch (a.anim) {
    case 'run': { const s = Math.sin(a.phase); T.lr = s * .85; T.ll = -s * .85; T.alx = s * .6; T.arx = -.5 - s * .15; T.hx = .17; T.hY = -.03 + Math.abs(Math.cos(a.phase)) * .045; break; }
    case 'windup': if (a.tilt) { T.arx = -2.95 * p; T.alx = -2.2 * p; T.hx = -.14 * p; T.wx = .15; T.hY = -.06 * p; } else { T.cy = .8 * d * p; T.arx = -1 - 1.4 * p; T.arz = -.55 * d * p; T.wx = .3; T.hx = -.06 * p; T.hY = -.05 * p; } break;
    case 'swing': if (a.tilt) { T.arx = mix(-2.95, -.7, e); T.alx = mix(-2.2, -.6, e); T.hx = .32 * e; T.wx = 1.3; T.lr = .4 * e; T.ll = -.5 * e; T.hY = -.1 * e; } else { T.cy = mix(.8, -1, e) * d; T.arx = mix(-2.4, -1.3, e); T.arz = mix(-.55, .65, e) * d; T.wx = 1.3; T.hx = .2 * e; T.lr = .35 * e; T.ll = -.45 * e; T.hY = -.06; } break;
    case 'block': T.arx = -1.4; T.arz = .8; T.alx = -1.15; T.alz = -.5; T.wx = -.55; T.hY = -.07; T.lr = .28; T.ll = -.3; break;
    case 'dodge': T.hx = p * Math.PI * 2; T.hY = -.4 * Math.sin(p * Math.PI); T.lr = T.ll = -1.2; T.arx = T.alx = -1; snap = true; break;
    case 'hurt': T.hx = -.38; T.cy = .3; T.arx = .35; T.alx = .4; T.hY = -.04; break;
    case 'dead': T.hx = -1.52 * e; T.hY = -.74 * e; T.arx = .6; T.alx = .7; T.alz = .5; T.lr = .15; break;
    case 'cast': T.alx = -1.7; T.arx = -2.7 * Math.min(1, p * 2.5); T.wx = .15; T.hx = -.1; break;
    case 'leap': T.arx = -3; T.alx = -2.7; T.lr = -.8; T.ll = .5; T.hx = .35 * p; T.wx = .1; break;
    default: T.hY = Math.sin((a.idleT || 0) * 2) * .008; T.arx = -.3 + Math.sin((a.idleT || 0) * 2) * .02;
  }
  const c = B.cur || (B.cur = { ...T }), k = 1 - Math.exp(-dt * 22);
  for (const key of KEYS) c[key] = snap && key === 'hx' ? T[key] : (Math.abs(c[key] - T[key]) > Math.PI ? T[key] : c[key] + (T[key] - c[key]) * k);
  const s = B.s; B.hips.position.y = (.93 + c.hY) * s; B.hips.rotation.set(c.hx, c.hy, 0); B.chest.rotation.y = c.cy;
  B.armR.rotation.set(c.arx, 0, c.arz); B.armL.rotation.set(c.alx, 0, c.alz); B.legR.rotation.x = c.lr; B.legL.rotation.x = c.ll; B.weapon.rotation.x = c.wx;
}
