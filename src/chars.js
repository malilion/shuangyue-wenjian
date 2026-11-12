// Generated, rigged characters (Hyper3D Rodin, Mixamo-style bone names). Same interface as the stand-in bodies in
// body.js: { root, mats, s, pose(actor, dt) }. Locomotion, hit, death and roll come from the preset clips; sword
// moves have no preset, so they are posed here by two-bone IK from hand targets written in character space
// (+Y up, +Z forward, right hand at -X, metres for a 1.75 m body).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder), cache = new Map();
// single-file build: assets live in window.__A as data URLs (see tools/build.mjs); harmless in development
if (typeof window !== 'undefined' && window.__A) THREE.DefaultLoadingManager.setURLModifier((u) => window.__A[String(u).replace(/^\.\//, '').split('?')[0]] || u);
export function loadGLB(url) {
  if (!cache.has(url)) cache.set(url, fetch(url, { method: 'HEAD' }).then((r) => (r.ok ? loader.loadAsync(url) : null)).catch(() => null));
  return cache.get(url);
}

const V = () => new THREE.Vector3(), Qn = () => new THREE.Quaternion();
const a0 = V(), a1 = V(), a2 = V(), a3 = V(), q0 = Qn(), q1 = Qn(), q2 = Qn(), UP = new THREE.Vector3(0, 1, 0);

// Clips: drop scale tracks, and pin the hips' horizontal travel (the game moves the actor, not the clip).
function prepClips(gltf) {
  if (gltf.userData.clips) return gltf.userData.clips;
  const hips = gltf.scene.getObjectByName('Hips'); gltf.scene.updateMatrixWorld(true);
  const pq = hips.parent.getWorldQuaternion(Qn()), pqi = pq.clone().invert(), rest = hips.position.clone().applyQuaternion(pq), out = {};
  for (const c of gltf.animations) {
    const tracks = c.tracks.filter((t) => !t.name.endsWith('.scale') && (!t.name.endsWith('.position') || t.name === 'Hips.position'));
    for (const t of tracks) if (t.name === 'Hips.position') for (let i = 0; i < t.values.length; i += 3) { a0.fromArray(t.values, i).applyQuaternion(pq); a0.x = rest.x; a0.z = rest.z; a0.applyQuaternion(pqi).toArray(t.values, i); }
    out[c.name] = new THREE.AnimationClip(c.name, c.duration, tracks);
  }
  return (gltf.userData.clips = out);
}

// Rotate `bone` so the direction to `child` points along world direction `dir`.
function aim(bone, child, dir) {
  bone.getWorldPosition(a0); child.getWorldPosition(a1); a1.sub(a0).normalize(); q0.setFromUnitVectors(a1, dir);
  bone.getWorldQuaternion(q1).premultiply(q0); bone.parent.getWorldQuaternion(q2); bone.quaternion.copy(q2.invert().multiply(q1)); bone.updateWorldMatrix(false, true);
}
function ik(upper, lower, hand, target, pole) {
  upper.getWorldPosition(a2); lower.getWorldPosition(a3); const l1 = a2.distanceTo(a3); hand.getWorldPosition(a0); const l2 = a3.distanceTo(a0);
  const to = a3.copy(target).sub(a2), d = Math.min(Math.max(to.length(), Math.abs(l1 - l2) + .01), (l1 + l2) * .995); to.normalize();
  const c = Math.min(1, Math.max(-1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))), perp = a0.copy(pole).addScaledVector(to, -pole.dot(to)).normalize();
  const elbowDir = V().copy(to).multiplyScalar(c).addScaledVector(perp, Math.sqrt(1 - c * c)).normalize();
  aim(upper, lower, elbowDir); lower.getWorldPosition(a2); aim(lower, hand, V().copy(target).sub(a2).normalize());
}

// o: { h, clips:{idle,guard,run,hit,death,roll}, runTs, weapon: gltf|null, weaponLen, grip }
export function makeCharBody(gltf, o) {
  const inner = SkeletonUtils.clone(gltf.scene), fit = new THREE.Group(), root = new THREE.Group(), mats = [], B = {}; root.add(fit); fit.add(inner);
  inner.traverse((n) => { if (n.isBone) B[n.name] = n; if (n.isMesh) { n.castShadow = true; n.frustumCulled = false; n.material = n.material.clone(); n.material.envMapIntensity = .6; mats.push(n.material); } });
  // face +Z (from the hip bones), scale to the requested height, feet on the ground
  root.updateMatrixWorld(true); const L = B.LeftUpLeg.getWorldPosition(V()), Rr = B.RightUpLeg.getWorldPosition(V()), fwd = V().crossVectors(UP, Rr.sub(L)).normalize();
  fit.rotation.y = -Math.atan2(fwd.x, fwd.z); root.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(inner); const k = o.h / (box.max.y - box.min.y); fit.scale.setScalar(k); root.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(inner); fit.position.set(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2);
  const s = o.h / 1.75, mixer = new THREE.AnimationMixer(inner), clips = prepClips(gltf), acts = {};
  for (const [name, id] of Object.entries(o.clips)) if (clips[id]) acts[name] = mixer.clipAction(clips[id]);

  // weapon: a holder under the right hand whose world orientation we set directly from a blade direction
  const holder = new THREE.Group(); let bladeMat = null;
  if (o.weapon) {
    const w = o.weapon.scene.clone(true); w.traverse((n) => { if (n.isMesh) { n.castShadow = true; n.material = n.material.clone(); bladeMat = n.material; } });
    const wb = new THREE.Box3().setFromObject(w), len = wb.max.y - wb.min.y, sc = o.weaponLen / len; w.scale.setScalar(sc); w.position.y = -(wb.min.y + len * (o.grip ?? .17)) * sc;
    if (o.flip) { w.rotation.z = Math.PI; w.position.y = (wb.max.y - len * (o.grip ?? .17)) * sc; }
    holder.add(w); holder.scale.setScalar(1 / k); B.RightHand.add(holder);
  }
  const cur = { hand: V(), blade: new THREE.Vector3(0, -.5, .85), w: 0, cy: 0, lw: 0, init: false }, tgt = { hand: V(), blade: V(), lhand: V() };
  const toWorld = (v, out) => out.copy(v).multiplyScalar(s).applyMatrix4(root.matrixWorld), dirWorld = (v, out) => out.copy(v).transformDirection(root.matrixWorld);
  const saved = ['Spine1', 'RightArm', 'RightForeArm', 'LeftArm', 'LeftForeArm'].map((n) => [B[n], Qn()]);
  let now = null, last = '';
  function play(name, { fade = .14, once = false, ts = 1, at = 0 } = {}) {
    const A = acts[name] || acts.idle; if (!A) return;
    if (A === now && !once) { A.timeScale = ts; return; }
    A.reset(); A.time = at; A.timeScale = ts; A.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); A.clampWhenFinished = once; A.play();
    if (now && now !== A) now.crossFadeTo(A, fade, false); now = A;
  }
  function pose(a, dt) {
    const st = a.anim, fresh = st !== last; last = st; const p = Math.min(1, Math.max(0, a.animP || 0)), e = 1 - Math.pow(1 - p, 4), d = a.swingDir || 1, mix = (x, y, t) => x + (y - x) * t;
    let w = 0, lw = 0, cy = 0, snap = false; tgt.blade.set(-.1 * 1, -.62, .78);
    switch (st) {
      case 'run': play('run', { ts: o.runTs ?? 1 }); tgt.blade.set(-.25, -.2, -.95); break;
      case 'hurt': if (fresh) play('hit', { once: true, ts: 1.6, at: .12, fade: .06 }); tgt.blade.set(-.4, -.7, .5); break;
      case 'dead': if (fresh) play('death', { once: true, ts: 1.5, fade: .1 }); tgt.blade.set(-.6, -.2, .6); break;
      case 'dodge': if (fresh) play('roll', { once: true, ts: 2.1, fade: .05 }); tgt.blade.set(-.3, .1, -.9); break;
      case 'windup': case 'swing': {
        play('guard', { fade: .1 }); w = 1; snap = st === 'swing';
        if (a.tilt) { const f = st === 'windup' ? mix(.9, -.55, p) : mix(-.55, 2.05, e); tgt.blade.set(-.12 * d, Math.cos(f), Math.sin(f)); tgt.hand.set(-.16, 1.36 + .46 * Math.cos(f), .12 + .42 * Math.sin(f)); cy = st === 'swing' ? .1 : -.25 * p; }
        else { const th = (st === 'windup' ? mix(-.5, -2.15, p) : mix(-2.15, 1.25, e)) * d; tgt.blade.set(Math.sin(th), st === 'windup' ? .25 * p : .12 - .25 * e, Math.cos(th)); tgt.hand.set(-.12 + .5 * Math.sin(th), 1.3 - (st === 'swing' ? .14 * e : 0), .08 + .46 * Math.cos(th)); cy = (st === 'windup' ? -.75 * p : mix(-.75, .85, e)) * d; }
        break; }
      case 'block': play('guard', { fade: .08 }); w = 1; tgt.hand.set(.04, 1.24, .4); tgt.blade.set(.72, .66, .12); lw = 1; tgt.lhand.set(.3, 1.34, .44); break;
      case 'cast': play('guard', { fade: .1 }); w = 1; lw = 1; tgt.hand.set(-.4, 1.5 + .3 * Math.min(1, p * 2.5), -.1); tgt.blade.set(-.25, .95, -.1); tgt.lhand.set(.12, 1.36, .62); cy = .35; break;
      case 'leap': play('guard', { fade: .1 }); w = 1; tgt.hand.set(-.2, 1.98, -.08); tgt.blade.set(-.1, .8, -.6); cy = -.2; break;
      default: play(a.guard ? 'guard' : 'idle', { fade: .22 });
    }
    mixer.update(dt); root.updateWorldMatrix(true, true);
    const kk = 1 - Math.exp(-dt * 20); tgt.blade.normalize();
    if (!cur.init || snap) { cur.hand.copy(tgt.hand); cur.blade.copy(tgt.blade); cur.init = true; } else { if (w) cur.hand.lerp(tgt.hand, kk); cur.blade.lerp(tgt.blade, kk).normalize(); }
    cur.w += (w - cur.w) * (1 - Math.exp(-dt * 16)); cur.lw += (lw - cur.lw) * (1 - Math.exp(-dt * 14)); cur.cy += (cy - cur.cy) * (snap ? 1 : kk);
    if (cur.w > .01 || cur.lw > .01) {
      for (const [b, q] of saved) q.copy(b.quaternion);
      if (Math.abs(cur.cy) > .01) { const b = B.Spine1; q0.setFromAxisAngle(UP, cur.cy * Math.max(cur.w, cur.lw)); b.getWorldQuaternion(q1).premultiply(q0); b.parent.getWorldQuaternion(q2); b.quaternion.copy(q2.invert().multiply(q1)); b.updateWorldMatrix(false, true); }
      const T = V(), Pl = V();
      if (cur.w > .01) { ik(B.RightArm, B.RightForeArm, B.RightHand, toWorld(cur.hand, T), dirWorld(Pl.set(-.55, -.7, -.45), Pl)); if (cur.w < .99) { saved[1][0].quaternion.slerpQuaternions(saved[1][1], saved[1][0].quaternion.clone(), cur.w); saved[2][0].quaternion.slerpQuaternions(saved[2][1], saved[2][0].quaternion.clone(), cur.w); } }
      if (cur.lw > .01) { ik(B.LeftArm, B.LeftForeArm, B.LeftHand, toWorld(tgt.lhand, T), dirWorld(Pl.set(.55, -.7, -.45), Pl)); if (cur.lw < .99) { saved[3][0].quaternion.slerpQuaternions(saved[3][1], saved[3][0].quaternion.clone(), cur.lw); saved[4][0].quaternion.slerpQuaternions(saved[4][1], saved[4][0].quaternion.clone(), cur.lw); } }
      root.updateWorldMatrix(true, true);
    }
    if (o.weapon) { dirWorld(cur.blade, a0); q0.setFromUnitVectors(UP, a0); B.RightHand.getWorldQuaternion(q1); holder.quaternion.copy(q1.invert().multiply(q0)); }
  }
  return { root, mats, s, pose, bones: B, weapon: { userData: { blade: bladeMat } }, acts, isChar: true };
}
