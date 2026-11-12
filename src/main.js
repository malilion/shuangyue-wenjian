// 霜月問劍 — top-down wuxia action: one arena, one wave, one boss.
import * as THREE from 'three';
import { keys, pressed, mouse, endFrame, debugPanel } from './input.js';
import { createRender } from './render.js';
import { buildWorld, clampToArena, ARENA_R } from './world.js';
import { buildWorld2 } from './world2.js';
import { buildWorld3 } from './world3.js';
import { FX, swordMesh } from './fx.js';
import { makeBody, poseBody } from './body.js';
import { initAudio, sfx, music, musicState, audioProbe } from './audio.js';
import { loadGLB, makeCharBody, makeBeast, makeQuadBody } from './chars.js';
import { T, initTouch, isPortrait } from './touch.js';

const Q = new URLSearchParams(location.search), $ = (id) => document.getElementById(id);
const R = createRender($('c')), { scene, camera } = R;
const W1 = buildWorld(scene), W2 = buildWorld2(scene), W3 = buildWorld3(scene), fx = new FX(scene); let world = W1; W1.activate();
const setView = () => fx.setView(R.view.h, camera.fov); setView(); addEventListener('resize', setView);

// ---------- helpers (everything is 2D on the XZ plane; yaw 0 faces +Z) ----------
const TAU = Math.PI * 2;
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const angTo = (a, b) => Math.atan2(b.x - a.x, b.z - a.z);
const angDiff = (a, b) => { let d = (a - b) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; };
const turn = (a, b, k) => a + angDiff(b, a) * Math.min(1, k);
const inFan = (src, yaw, tgt, range, arc, pad = 0) => { const d = dist(src, tgt); return d <= range + pad && (d < .7 + pad || Math.abs(angDiff(angTo(src, tgt), yaw)) <= arc / 2); };
const move = (a, dx, dz) => { a.pos.x += dx; a.pos.z += dz; clampToArena(a.pos, a.r); };
const TEAL = [.4, 1.25, 1.4], AMBER = [1.6, .62, .16], CRIM = [1.7, .16, .22], GOLD = [1.8, 1.3, .55];

const G = window.G = { loaded: 0, mode: 'title', phase: 'wave', time: 0, shake: 0, slow: 0, tokens: [], tokenCd: 0, waveIdx: 0, enemies: [], projs: [], timers: [], boss: null, god: Q.has('god'), zoom: 1, flash: 0, shock: 0, fx, focus: new THREE.Vector3(0, 0, 3), intro: 0 };
const after = (t, fn) => G.timers.push({ t, fn });

// ---------- generated characters (fall back to the stand-in bodies when a file is missing) ----------
const CH = {
  player: { h: 1.78, runTs: .95, weapon: 'w_jian', weaponLen: 1.2, clips: { idle: 'human_000090', guard: 'human_000040', run: 'human_000067', hit: 'human_000026', death: 'human_000068', roll: 'human_000042' } },
  melee: { h: 1.75, runTs: 1.65, borrow: (GL) => ({ run: [GL.ranged, 'human_000089'] }), weapon: 'w_dao', weaponLen: 1.05, clips: { idle: 'human_000071', guard: 'human_000040', run: 'human_000053', hit: 'human_000026', death: 'human_000011' } },
  elite: { model: 'melee', h: 2.15, runTs: 1.25, weapon: 'w_dao', weaponLen: 1.35, borrow: (GL) => ({ run: [GL.ranged, 'human_000089'] }), clips: { idle: 'human_000040', guard: 'human_000040', hit: 'human_000026', death: 'human_000011' } },
  thunder: { model: 'ranged', h: 1.8, runTs: 1.6, clips: { idle: 'human_000090', guard: 'human_000090', run: 'human_000089', hit: 'human_000026', death: 'human_000081' } },
  guard: { h: 2.08, runTs: 1.4, weapon: 'w_great', weaponLen: 2.0, borrow: (GL) => ({ run: [GL.ranged, 'human_000089'] }), clips: { idle: 'human_000040', guard: 'human_000040', hit: 'human_000026', death: 'human_000011' } },
  hawk: { quad: true, span: true, length: 2.9, s: .5, clips: { idle: 'bird_000003', run: 'bird_000001', lunge: 'bird_000002' } },
  boss3: { h: 2.95, runTs: 1.25, weapon: 'w_great', weaponLen: 3.0, clips: { idle: 'human_000040', guard: 'human_000040', run: 'human_000089', hit: 'human_000003', death: 'human_000074' } },
  frost: { model: 'ranged', h: 1.78, runTs: 1.6, clips: { idle: 'human_000090', guard: 'human_000090', run: 'human_000089', hit: 'human_000026', death: 'human_000081' } },
  spirit: { h: 1.98, runTs: 1.5, weapon: 'w_jian', weaponLen: 1.35, borrow: (GL) => ({ run: [GL.ranged, 'human_000089'] }), clips: { idle: 'human_000040', guard: 'human_000040', hit: 'human_000026', death: 'human_000011' } },
  wolf: { quad: true, length: 2.3, s: .62, clips: { idle: 'canine_000001', run: 'canine_000002', lunge: 'canine_000015', hit: 'canine_000013', death: 'canine_000018' } },
  boss2: { h: 2.0, runTs: 1.9, weapon: 'w_jian', weaponLen: 1.5, clips: { idle: 'human_000090', guard: 'human_000040', run: 'human_000089', hit: 'human_000026', death: 'human_000081' } },
  ranged: { h: 1.72, runTs: 1.6, clips: { idle: 'human_000090', guard: 'human_000090', run: 'human_000089', hit: 'human_000026', death: 'human_000081' } },
  boss: { h: 2.6, runTs: 1.3, weapon: 'w_great', weaponLen: 2.5, clips: { idle: 'human_000040', guard: 'human_000040', run: 'human_000089', hit: 'human_000003', death: 'human_000074' } },
};
const GL = {};
const S1 = ['player', 'melee', 'ranged', 'boss', 'w_jian', 'w_dao', 'w_great', 'lantern', 'pillar_tall', 'pillar_broken', 'pillar_fallen', 'burner', 'gate', 'beast'], S2 = ['boss2', 'spirit', 'wolf', 'crystal', 'stele', 'monument'], S3 = ['boss3', 'guard', 'hawk', 'skygate', 'jadepillar', 'bell'];
const loadSet = (names, onEach) => Promise.all(names.map(async (n) => { GL[n] = await loadGLB(`assets/models/${n}.glb`); onEach && onEach(); }));
/* stage one is needed to start; stage two streams in behind it (or first, when the URL jumps straight there) */
const jump = Q.get('stage') || '', early = /^(2|boss2)$/.test(jump) ? S2 : /^(3|boss3)$/.test(jump) ? S3 : [], first = S1.concat(early);
if (!Q.has('standin')) { await loadSet(first, () => { $('go').textContent = `載入中 ${++G.loaded} / ${first.length}`; });
  loadSet(S2.filter((n) => !first.includes(n))).then(() => { W2.useProps(GL); if (G.stage === 2) world.activate(); return loadSet(S3.filter((n) => !first.includes(n))); }).then(() => { W3.useProps(GL); if (G.stage === 3) world.activate(); G.s2ready = true; }); }
const bodyFor = (kind, standIn) => (CH[kind].quad && GL[kind] ? makeQuadBody(GL[kind], CH[kind]) : GL[CH[kind].model || kind] ? makeCharBody(GL[CH[kind].model || kind], { ...CH[kind], weapon: GL[CH[kind].weapon] || null, borrow: CH[kind].borrow ? CH[kind].borrow(GL) : null }) : makeBody(standIn));
G.GL = GL; W1.useProps(GL); W2.useProps(GL); W3.useProps(GL);
function setStage(n) { const WS = [W1, W2, W3]; G.stage = n; world = WS[n - 1] || W1; WS.forEach((w) => { w.root.visible = w === world; }); world.activate(); world.setMood(0); }
setStage(1);

// ---------- player ----------
const ATK = [
  { dur: .42, hit: .12, cancel: .25, range: 2.75, arc: 2.3, dmg: 14, lunge: 2.4, stop: .065, kb: 1.0, dir: 1 },
  { dur: .44, hit: .12, cancel: .26, range: 2.85, arc: 2.4, dmg: 15, lunge: 2.4, stop: .065, kb: 1.2, dir: -1 },
  { dur: .72, hit: .27, cancel: .52, range: 3.3, arc: 1.3, dmg: 30, lunge: 3.2, stop: .12, kb: 3.0, dir: -1, tilt: 1.32, heavy: true },
];
const P = G.player = {
  pos: new THREE.Vector3(0, 0, 7), yaw: Math.PI, r: .45, hp: 150, maxHp: 150, st: 100, qi: 30, state: 'idle', t: 0, dur: 0, combo: 0, hitstop: 0, iframe: 0,
  orbitT: 0, cdF: 0, cdC: 0, cdV: 0, lean: 0, flyV: new THREE.Vector3(), ult: Q.has('ult') ? 100 : 0, buf: null, bufT: 0, parryT: 9, counterT: 0, counterFrom: null, cdQ: 0, cdE: 0, kb: new THREE.Vector3(), anim: 'idle', animP: 0, phase: 0, idleT: 0, y: 0,
  body: bodyFor('player', { h: 1.75, robe: 0xdde6e8, trim: 0x2b7480, skin: 0xd8b99b, dark: 0x1c2230, bun: true, weapon: { len: 1.15, w: .05, color: 0xcfe9ee, glow: 0x0c3a40 } }),
};
scene.add(P.body.root);
const ray = new THREE.Raycaster(), ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), aim = new THREE.Vector3(0, 0, 0), m2 = new THREE.Vector2();
function updateAim() {
  if (T.on) {      /* no pointer on a phone: aim at the nearest enemy, else along the stick, else straight ahead */
    let t = null, bd = 15; for (const e of G.enemies) if (!e.dead && e.spawnT <= 0) { const d = dist(P.pos, e.pos); if (d < bd) { bd = d; t = e; } }
    if (t) aim.copy(t.pos); else if (T.mx || T.mz) aim.set(P.pos.x + T.mx * 6, 0, P.pos.z + T.mz * 6); else aim.set(P.pos.x + Math.sin(P.yaw) * 6, 0, P.pos.z + Math.cos(P.yaw) * 6); return;
  }
  m2.set(mouse.x, mouse.y); ray.setFromCamera(m2, camera); if (!ray.ray.intersectPlane(ground, aim)) aim.copy(P.pos);
}
const setBuf = (b) => { P.buf = b; P.bufT = .28; };
const alive = () => G.enemies.filter((e) => !e.dead && e.spawnT <= 0);

function pickTarget(yaw, maxD = 6.5) {
  let best = null, bs = 1e9;
  for (const e of alive()) { const d = dist(P.pos, e.pos) - e.r, da = Math.abs(angDiff(angTo(P.pos, e.pos), yaw)); if (d > maxD || (da > 1.15 && d > 2.2) || da > 2.3) continue; const s = d + da * 3.2; if (s < bs) { bs = s; best = e; } }
  return best;
}
function startAttack(i) {
  const A = ATK[i], tgt = pickTarget(angTo(P.pos, aim));
  P.state = 'attack'; P.t = 0; P.combo = i; P.hitDone = false; P.tgt = tgt; P.yaw = tgt ? angTo(P.pos, tgt.pos) : angTo(P.pos, aim);
  P.lunge = tgt ? Math.max(0, Math.min(A.lunge, dist(P.pos, tgt.pos) - tgt.r - A.range * .62)) : A.lunge * .35;
  sfx(A.heavy ? 'heavy' : 'swing');
}
function startDodge(mx, mz) {
  const l = Math.hypot(mx, mz); P.dx = l ? mx / l : Math.sin(P.yaw); P.dz = l ? mz / l : Math.cos(P.yaw); P.yaw = Math.atan2(P.dx, P.dz);
  P.state = 'dodge'; P.t = 0; P.lean = 0; P.iframe = .3; P.st -= 18; P.hitstop = 0; P.perfect = false; P.buf = null; sfx('dodge');
  for (let i = 0; i < 8; i++) fx.p.spawn(P.pos.x, .15, P.pos.z, (Math.random() - .5) * 2, .6, (Math.random() - .5) * 2, .5, .5, .25, .3, .36, 0, 2);
}
function startCounter() {
  const e = P.counterFrom, a = angTo(e.pos, P.pos); P.pos.set(e.pos.x + Math.sin(a) * (e.r + 1.25), 0, e.pos.z + Math.cos(a) * (e.r + 1.25)); clampToArena(P.pos, P.r);
  P.yaw = angTo(P.pos, e.pos); P.state = 'counter'; P.t = 0; P.hitDone = false; P.iframe = .6; P.counterT = 0; G.slow = .2; sfx('heavy');
  fx.ring(P.pos, 2.2, GOLD, .35);
}
function playerHit(A, yaw, target) {
  let any = false; const o = { from: P.pos, heavy: A.heavy, stop: A.stop, kb: A.kb, dir: A.dir, poise: A.poise };
  for (const e of [...G.enemies]) if (!e.dead && (e === target || inFan(P.pos, yaw, e.pos, A.range, A.arc, e.r))) any = damageEnemy(e, A.dmg, o) || any;
  for (const b of G.projs) if (b.team === 'e' && b.cut && inFan(P.pos, yaw, b.pos, A.range, A.arc, .3)) { b.life = 0; fx.sparks({ x: b.pos.x, y: 1.1, z: b.pos.z }, yaw, 14, CRIM, 7, 1.6); any = true; P.qi = Math.min(100, P.qi + 4); }
  if (any) { P.hitstop = A.stop; G.shake = Math.max(G.shake, A.heavy ? .32 : .12); P.qi = Math.min(100, P.qi + 3); gainUlt(A.heavy ? 8 : 5); sfx(A.heavy ? 'hitHeavy' : 'hit'); }
}

function updatePlayer(dt) {
  const B = P.body; P.idleT += dt;
  if (P.state !== 'fly' && P.state !== 'dive' && P.state !== 'ult') { P.y = Math.max(0, (P.y || 0) - dt * 9); P.lean = 0; }      /* anything that ends flight drops him back to the ground */
  if (P.state === 'dead') { P.t += dt; P.anim = 'dead'; P.animP = P.t / .7; return; }
  if (pressed.has('LMB')) setBuf('atk'); if (pressed.has('Space')) setBuf('dodge'); if (pressed.has('KeyQ')) setBuf('q'); if (pressed.has('KeyE')) setBuf('e'); if (pressed.has('KeyR')) setBuf('r'); if (pressed.has('KeyF')) setBuf('f'); if (pressed.has('KeyC')) setBuf('c'); if (pressed.has('KeyV')) setBuf('v');
  P.bufT -= dt; if (P.bufT <= 0) P.buf = null;
  P.iframe = Math.max(0, P.iframe - dt); P.cdQ = Math.max(0, P.cdQ - dt); P.cdE = Math.max(0, P.cdE - dt); P.cdF = Math.max(0, P.cdF - dt); P.cdC = Math.max(0, P.cdC - dt); P.cdV = Math.max(0, P.cdV - dt); if (P.state !== 'fly') P.qi = Math.min(100, P.qi + 1.7 * dt); P.counterT = Math.max(0, P.counterT - dt);
  const mx = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0) + T.mx, mz = (keys.has('KeyS') ? 1 : 0) - (keys.has('KeyW') ? 1 : 0) + T.mz, ml = Math.hypot(mx, mz), aimYaw = angTo(P.pos, aim);
  if (P.buf === 'dodge' && P.st >= 18 && P.state !== 'hurt' && P.state !== 'counter' && P.state !== 'dodge' && P.state !== 'ult') startDodge(mx, mz);     // dodge cuts through everything, hitstop included
  if (P.hitstop > 0) { P.hitstop -= dt; return; }
  if (P.kb.lengthSq() > .02) { move(P, P.kb.x * dt, P.kb.z * dt); P.kb.multiplyScalar(Math.exp(-9 * dt)); }
  const regen = (k) => { P.st = Math.min(100, P.st + k * dt); };
  const tryActions = () => {
    if (P.buf === 'r' && P.ult >= 100) { startUlt(); return true; }
    if (P.buf === 'atk') { P.buf = null; if (P.counterT > 0 && P.counterFrom && !P.counterFrom.dead) startCounter(); else startAttack(0); return true; }
    if (P.buf === 'q' && P.cdQ <= 0 && P.qi >= 25) { P.buf = null; P.qi -= 25; P.cdQ = 3.5; P.state = 'skill'; P.skill = 'q'; P.t = 0; P.hitDone = false; P.yaw = aimYaw; sfx('cast'); return true; }
    if (P.buf === 'e' && P.cdE <= 0 && P.qi >= 50) { P.buf = null; P.qi -= 50; P.cdE = 8; P.state = 'skill'; P.skill = 'e'; P.t = 0; P.hitDone = false; P.yaw = aimYaw; sfx('cast'); return true; }
    if (P.buf === 'f' && P.cdF <= 0 && P.qi >= 30) { P.buf = null; P.qi -= 30; P.cdF = 6; P.state = 'skill'; P.skill = 'f'; P.t = 0; P.hitDone = false; P.yaw = aimYaw; sfx('cast'); return true; }
    if (P.buf === 'v' && P.cdV <= 0 && P.qi >= 45 && GL.beast) { P.buf = null; P.qi -= 45; P.cdV = 20; summonBeast(); return true; }
    if (P.buf === 'c' && P.cdC <= 0 && P.qi >= 35) { P.buf = null; P.qi -= 35; P.cdC = 12; P.orbitT = ORBIT; sfx('cast'); sfx('ring'); fx.ring(P.pos, 3.2, ICE, .5); return true; }
    return false;
  };
  const shift = keys.has('ShiftLeft') || keys.has('ShiftRight'), rim = () => { const d = Math.hypot(P.pos.x, P.pos.z), m = ARENA_R - P.r; if (d > m) { P.pos.x *= m / d; P.pos.z *= m / d; } };
  switch (P.state) {
    case 'idle':
      if (tryActions()) break;
      if (!shift) P.noFly = false;
      if (shift && !P.noFly && P.qi >= 8) { P.state = 'fly'; P.t = 0; P.flyV.set(0, 0, 0); sfx('dodge'); sfx('ring'); fx.ring(P.pos, 2.2, ICE, .4); break; }      /* mount the sword */
      if (keys.has('RMB') && P.st > 0) { P.state = 'block'; P.parryT = 0; break; }
      if (ml > 0) { move(P, mx / ml * 6.2 * dt, mz / ml * 6.2 * dt); P.yaw = turn(P.yaw, Math.atan2(mx, mz), dt * 14); P.anim = 'run'; P.phase += dt * 12; if (Math.random() < dt * 9) fx.p.spawn(P.pos.x, .08, P.pos.z, 0, .5, 0, .5, .35, .16, .19, .23, 0, 2); }
      else P.anim = 'idle';
      regen(30); break;
    case 'attack': {
      const A = ATK[P.combo]; P.t += dt; P.swingDir = A.dir; P.tilt = A.tilt;
      if (P.t < A.hit) { const step = Math.min(P.lunge, 18 * dt, P.tgt && !P.tgt.dead ? Math.max(0, dist(P.pos, P.tgt.pos) - P.tgt.r - 1.0) : 99); P.lunge -= step; move(P, Math.sin(P.yaw) * step, Math.cos(P.yaw) * step); P.anim = 'windup'; P.animP = P.t / A.hit; }
      else {
        P.anim = 'swing'; P.animP = (P.t - A.hit) / .14;
        if (!P.hitDone) { P.hitDone = true; fx.slash({ pos: P.pos, yaw: P.yaw, radius: A.range, arc: A.heavy ? 2.6 : A.arc, dir: A.dir, tilt: A.tilt, dur: A.heavy ? .36 : .28, color: TEAL, width: A.heavy ? .6 : .5 }); playerHit(A, P.yaw); if (A.heavy) { const f = { x: P.pos.x + Math.sin(P.yaw) * 2.2, z: P.pos.z + Math.cos(P.yaw) * 2.2 }; fx.ring(f, 1.8, TEAL, .4); fx.crack(f, 1.3, TEAL, 1.6); } }
      }
      if (P.t >= A.cancel && P.buf === 'atk' && P.combo < 2) { P.buf = null; startAttack(P.combo + 1); break; }
      if (P.t >= A.cancel && (P.buf === 'q' || P.buf === 'e' || (P.buf === 'r' && P.ult >= 100))) { P.state = 'idle'; tryActions(); break; }
      if (P.t >= A.dur) P.state = 'idle';
      regen(12); break; }
    case 'counter':
      P.t += dt; P.swingDir = 1; P.tilt = 0; P.anim = P.t < .12 ? 'windup' : 'swing'; P.animP = P.t < .12 ? P.t / .12 : (P.t - .12) / .14;
      if (P.t >= .12 && !P.hitDone) { P.hitDone = true; fx.slash({ pos: P.pos, yaw: P.yaw, radius: 3.8, arc: 3, dir: 1, dur: .4, color: GOLD, width: .65 }); playerHit({ range: 3.8, arc: 2.6, dmg: 52, stop: .14, kb: 3.4, heavy: true, dir: 1, poise: 34 }, P.yaw, P.counterFrom); }
      if (P.t >= .5) P.state = 'idle'; break;
    case 'dodge': { P.t += dt; const p = P.t / .42; move(P, P.dx * 15 * (1 - p * .78) * dt, P.dz * 15 * (1 - p * .78) * dt); P.anim = 'dodge'; P.animP = p; if (p >= 1) P.state = 'idle'; break; }
    case 'block':
      P.parryT += dt; P.yaw = turn(P.yaw, aimYaw, dt * 16); P.anim = 'block'; if (ml > 0) move(P, mx / ml * 2.2 * dt, mz / ml * 2.2 * dt);
      if (P.buf === 'atk' || P.buf === 'q' || P.buf === 'e' || (P.buf === 'r' && P.ult >= 100)) { P.state = 'idle'; tryActions(); break; }
      if (!keys.has('RMB')) P.state = 'idle'; regen(8); break;
    case 'hurt': P.t += dt; P.anim = 'hurt'; if (P.t >= P.dur) P.state = 'idle'; break;
    case 'fly': {       /* riding the sword: fast, above melee reach and obstacles, drains qi */
      P.t += dt; P.qi = Math.max(0, P.qi - 8 * dt); const up = Math.min(1, P.t / .3); P.y = 1.25 * up * (2 - up) + Math.sin(G.time * 3) * .06;
      const k = 1 - Math.exp(-dt * 5); P.flyV.x += ((ml ? mx / ml * 10.5 : 0) - P.flyV.x) * k; P.flyV.z += ((ml ? mz / ml * 10.5 : 0) - P.flyV.z) * k; P.pos.x += P.flyV.x * dt; P.pos.z += P.flyV.z * dt; rim();
      const v = Math.hypot(P.flyV.x, P.flyV.z); if (v > 1) P.yaw = turn(P.yaw, Math.atan2(P.flyV.x, P.flyV.z), dt * 10); P.anim = 'fly'; P.lean = .1 + v * .022;
      if (Math.random() < dt * (20 + v * 6)) fx.p.spawn(P.pos.x - Math.sin(P.yaw) * 1.2 + (Math.random() - .5) * .3, P.y + .05, P.pos.z - Math.cos(P.yaw) * 1.2 + (Math.random() - .5) * .3, 0, .2, 0, .45, .28, .35, 1.2, 1.4, 0, 1);
      if (P.buf === 'atk') { P.buf = null; P.state = 'dive'; P.t = 0; P.yaw = aimYaw; P.diveHit = new Set(); P.diveFrom = P.pos.clone(); P.iframe = .55; sfx('heavy'); break; }
      if (!shift || P.qi <= 0) { P.state = 'idle'; P.noFly = true; clampToArena(P.pos, P.r); fx.ring(P.pos, 1.8, ICE, .35); }
      break; }
    case 'dive': {      /* sword-borne lunge: a straight piercing dash that ends the flight */
      P.t += dt; const p = Math.min(1, P.t / .3), st = 27 * dt; P.pos.x += Math.sin(P.yaw) * st; P.pos.z += Math.cos(P.yaw) * st; rim(); P.y = 1.25 * (1 - p) + .2; P.lean = .65; P.anim = 'windup'; P.animP = 1; P.swingDir = 1; P.tilt = 0;
      for (let i = 0; i < 3; i++) fx.p.spawn(P.pos.x + (Math.random() - .5) * .5, P.y + Math.random(), P.pos.z + (Math.random() - .5) * .5, 0, .5, 0, .35, .3, .4, 1.4, 1.6, 0, 1);
      for (const e of [...G.enemies]) if (!e.dead && !P.diveHit.has(e) && dist(P.pos, e.pos) < 1.7 + e.r) { P.diveHit.add(e); if (damageEnemy(e, 34, { from: P.diveFrom, heavy: true, stop: .08, kb: 3, poise: 22 })) { sfx('hitHeavy'); gainUlt(8); P.qi = Math.min(100, P.qi + 3); G.shake = Math.max(G.shake, .35); } }
      if (p >= 1) { const d = dist(P.diveFrom, P.pos), mid = { x: (P.diveFrom.x + P.pos.x) / 2, z: (P.diveFrom.z + P.pos.z) / 2 }; clampToArena(P.pos, P.r);
        fx.lineSlash(mid, P.yaw, d + 3, .8, [.8, 1.6, 1.8], .38); fx.lineSlash(mid, P.yaw, d + 3, 2, [.1, .32, .38], .5, .08); fx.ring(P.pos, 3.4, ICE, .45); fx.crack(P.pos, 1.7, TEAL, 2.2); G.shake = Math.max(G.shake, .45); sfx('hitHeavy'); P.state = 'idle'; P.noFly = true; }      /* Shift must be pressed again to remount */
      break; }
    case 'ult': {
      P.t += dt; const t = P.t, up = Math.min(1, t / .55), k = up * up * (3 - 2 * up); P.hidden = t >= ULT.cut && t < ULT.fin - .07;
      if (t < ULT.fin - .1) { P.y = .95 * k + Math.sin(t * 4) * .04; P.anim = 'leap'; P.animP = up; if (Math.random() < dt * 60) { const a = Math.random() * TAU, r = 1 + Math.random() * 8; fx.p.spawn(P.ultC.x + Math.sin(a) * r, .1, P.ultC.z + Math.cos(a) * r, 0, 2.5 + Math.random() * 3.5, 0, .8, .13, .4, 1.2, 1.4, 0, .5); } }
      else { const q = Math.min(1, (t - ULT.fin + .1) / .1); P.y = .95 * (1 - q); P.swingDir = 1; P.tilt = 0; P.anim = t < ULT.fin ? 'windup' : 'swing'; P.animP = t < ULT.fin ? q : (t - ULT.fin) / .2; if (t >= ULT.fin) { const sp = Math.min(1, (t - ULT.fin) / .32); P.yaw = P.ultYaw + TAU * (1 - Math.pow(1 - sp, 3)); } }
      if (t >= ULT.fin && !P.finDone) {       /* the full-moon cut that closes it: every planted sword answers with a pillar of light */
        P.finDone = true; const c = P.ultC;
        fx.slash({ pos: c, yaw: P.ultYaw, radius: 10.5, arc: TAU, dir: 1, dur: .65, color: [.22, .6, .72], width: .2 }); fx.slash({ pos: c, yaw: P.ultYaw + 2, radius: 6.8, arc: TAU, dir: -1, dur: .5, color: [.6, .5, .28], width: .26, y: 1.3 });
        fx.slash({ pos: c, yaw: P.ultYaw + 4, radius: 13.5, arc: TAU, dir: 1, dur: .8, color: [.16, .42, .5], width: .12, y: .6 });
        fx.ring(c, 13, [.18, .45, .55], .75); fx.ring(c, 7, [.5, .38, .16], .5, .12); fx.ring(c, 16, [.08, .2, .26], 1.1); fx.crack(c, 5, [.25, .7, .8], 4); fx.burst(c, 80, [.3, .9, 1], 13, 7, .24, 1.2, .4);
        P.pins.forEach((pin, i) => after(i * .012, () => { fx.beam(pin, 8 + Math.random() * 4, .4, [.15, .42, .5], .7); fx.burst(pin, 5, [.3, .9, 1], 4, 6, .2, .6, .3); }));
        fx.beam(c, 15, 1.1, [.1, .26, .32], .9); G.flash = .42; G.shock = 1; G.shake = 1.1; G.slow = .55; sfx('boom'); sfx('parry'); sfx('heavy'); sfx('roar');
        for (const e of [...G.enemies]) if (!e.dead && dist(c, e.pos) < 10.5 + e.r) damageEnemy(e, 80, { from: c, heavy: true, stop: .2, kb: 4.5, poise: 45 });
      }
      if (t >= ULT.end) { P.state = 'idle'; P.y = 0; P.hidden = false; P.iframe = Math.max(P.iframe, .4); }
      break; }
    case 'skill':
      P.t += dt; P.anim = 'cast'; P.animP = P.t / .2;
      if (P.t >= .16 && !P.hitDone) {
        P.hitDone = true;
        if (P.skill === 'q') { const c = fx.crescent({ color: TEAL, radius: 1.9, arc: 1.9 }); G.projs.push({ team: 'p', pos: P.pos.clone().add(new THREE.Vector3(Math.sin(P.yaw), 0, Math.cos(P.yaw))), yaw: P.yaw, speed: 24, r: 1.5, dmg: 26, life: .7, pierce: true, hit: new Set(), fxh: c, color: TEAL }); sfx('heavy'); }
        else if (P.skill === 'f') { for (let i = -1; i <= 1; i++) { const g = new THREE.Group(), sm = swordMesh([.5, 1.6, 1.8], 1.3); sm.rotation.x = -Math.PI / 2; sm.position.z = .8; g.add(sm); scene.add(g);
          G.projs.push({ team: 'p', homing: true, sword: true, pos: P.pos.clone(), yaw: P.yaw + i * .95, speed: 17, r: .75, dmg: 10, life: 2.7, pierce: true, hit: new Set(), hitT: .55, mesh: g, color: TEAL }); } sfx('swing'); sfx('ring'); }
        else { const d = Math.min(10, dist(P.pos, aim)), tp = new THREE.Vector3(P.pos.x + Math.sin(P.yaw) * d, 0, P.pos.z + Math.cos(P.yaw) * d); clampToArena(tp, .2); fx.telegraph({ kind: 'circle', pos: tp, radius: 3.3, dur: .5, color: TEAL }); fx.fallSword(tp, [.5, 1.7, 1.9], .5, 1.25);
          after(.5, () => { fx.ring(tp, 4.6, TEAL, .55); fx.crack(tp, 3.3, TEAL, 3); fx.burst(tp, 30, TEAL, 7, 5, .3, .7, .3); G.shake = .5; sfx('boom'); for (const e of [...G.enemies]) if (!e.dead && dist(tp, e.pos) < 3.3 + e.r) damageEnemy(e, 58, { from: tp, heavy: true, stop: .12, kb: 3, poise: 30 }); }); }
      }
      if (P.t >= .36) P.state = 'idle'; break;
  }
}

// ---------- ultimate: rune circle and a halo of swords (charge) -> fourteen swords nail the enemies (burst) -> one full-moon cut (finish)
const ULT = { charge: .85, gap: .05, n: 22, cut: 2.1, cuts: 8, cutGap: .045, fin: 2.52, end: 3.3 };
const gainUlt = (v) => { if (P.state !== 'ult') P.ult = Math.min(100, P.ult + v); };
const ICE = [.25, .8, .9];
function startUlt() {
  P.buf = null; P.ult = 0; P.state = 'ult'; P.t = 0; P.finDone = false; P.iframe = ULT.end + .4; P.hitstop = 0; P.kb.set(0, 0, 0); P.counterT = 0; P.ultYaw = P.yaw; P.pins = []; const c = P.ultC = P.pos.clone();
  for (const e of G.enemies) if (!e.dead) { cancelSeq(e); e.stun = Math.max(e.stun, .35); }                /* everything they were doing is cut off */
  for (const b of G.projs) if (b.team === 'e') b.life = 0;
  fx.moon(c, 9.3, [.8, .9, 1], ULT.end + .4); fx.sigil(c, 9.5, [.32, 1.05, 1.25], ULT.end + .5); fx.ring(c, 5, ICE, .55); fx.ring(c, 9, [.15, .45, .55], .8); sfx('ultCharge'); G.shake = .3;
  const rel = (i) => ULT.charge + i * ULT.gap - .14;                                                         /* two rings of swords turning against each other */
  fx.swordHalo({ pos: c, n: 12, radius: 2.5, y: 4.7, appear: .6, release: Array.from({ length: 12 }, (_, i) => rel(i * 2)) });
  fx.swordHalo({ pos: c, n: 10, radius: 4.3, y: 3.5, appear: .7, spin: -.75, release: Array.from({ length: 10 }, (_, i) => rel(i * 2 + 1)) });
  for (let i = 0; i < ULT.n; i++) after(ULT.charge + i * ULT.gap - .16, () => {
    const L = alive().filter((e) => dist(c, e.pos) < 11), tgt = L.length && i % 3 !== 2 ? L[i % L.length] : null, a = Math.random() * TAU, o = tgt ? Math.random() * .7 : 2 + Math.random() * 6;
    const tp = clampToArena(new THREE.Vector3((tgt ? tgt.pos.x : c.x) + Math.sin(a) * o, 0, (tgt ? tgt.pos.z : c.z) + Math.cos(a) * o), .2); P.pins.push(tp);
    fx.fallSword(tp, [.5, 1.7, 1.9], .16, .9, ULT.fin - P.t - .1);                                           /* it stays planted until the final cut */
    after(.16, () => { fx.ring(tp, 2.3, ICE, .32); fx.sparks({ x: tp.x, y: .5, z: tp.z }, Math.random() * TAU, 9, TEAL, 8, 3.2); G.shake = Math.max(G.shake, .24); sfx('hit'); sfx('ultHit');
      for (const e of [...G.enemies]) if (!e.dead && dist(tp, e.pos) < 1.7 + e.r) damageEnemy(e, 11, { from: { x: tp.x - Math.sin(a), z: tp.z - Math.cos(a) }, heavy: true, stop: .05, kb: .3, poise: 4 }); });
  });
  for (let j = 0; j < ULT.cuts; j++) after(ULT.cut + j * ULT.cutGap, () => {                                /* the unseen cuts: he is gone, only lines of light cross the yard */
    const yaw = j * 2.4 + Math.random() * .5, o = Math.random() * 3, a = Math.random() * TAU, mid = { x: c.x + Math.sin(a) * o, z: c.z + Math.cos(a) * o };
    fx.lineSlash(mid, yaw, 21, .6, [1.6, 2.4, 2.6], .34); fx.lineSlash(mid, yaw, 21, 1.6, [.1, .3, .36], .5, .08); G.shake = Math.max(G.shake, .36); sfx('swing'); sfx('ultHit');
    for (const e of [...G.enemies]) if (!e.dead && dist(c, e.pos) < 10.5 + e.r) damageEnemy(e, 5, { from: mid, heavy: true, stop: .03, kb: .2, poise: 2, dir: j % 2 ? 1 : -1 });
  });
}

// ---------- sword array (C): four blades circle him, cutting whatever they touch and swatting bolts out of the air
const ORBIT = 6.5, orbit = Array.from({ length: 4 }, () => { const s = swordMesh([.5, 1.5, 1.7], 1.5); s.visible = false; scene.add(s); return s; });
function updateOrbit(dt) {
  const on = P.orbitT > 0 && P.state !== 'dead'; if (on) P.orbitT -= dt; const k = on ? Math.min(1, (ORBIT - P.orbitT) / .3, P.orbitT / .4) : 0;
  orbit.forEach((s, i) => {
    s.visible = k > .01; if (!s.visible) return; const a = G.time * 5.2 + i * TAU / 4, r = 2.3; s.position.set(P.pos.x + Math.sin(a) * r, (P.y || 0) + .55 + Math.sin(G.time * 3 + i) * .1, P.pos.z + Math.cos(a) * r); s.rotation.set(Math.cos(a) * .3, 0, -Math.sin(a) * .3); s.scale.setScalar(Math.max(.01, k));
    if (Math.random() < dt * 18) fx.p.spawn(s.position.x, s.position.y + .8, s.position.z, 0, .3, 0, .3, .22, .35, 1.2, 1.4, 0, 1);
    for (const e of [...G.enemies]) if (!e.dead && e.spawnT <= 0 && (e.orbitCd || 0) <= G.time && dist(s.position, e.pos) < .8 + e.r) { e.orbitCd = G.time + .45; if (damageEnemy(e, 7, { from: P.pos, stop: .03, kb: .7, poise: 3, noChain: true, stun: .14 })) { sfx('hit'); gainUlt(1); } }
  });
  if (on) for (const b of G.projs) if (b.team === 'e' && b.cut && dist(b.pos, P.pos) < 2.8) { b.life = 0; fx.sparks({ x: b.pos.x, y: 1.1, z: b.pos.z }, b.yaw + Math.PI, 10, CRIM, 6, 1.5); }
}
// ---------- spirit beast (V): a white tiger of spirit matter fights beside him for a while
let beast = null;
function summonBeast() {
  if (!beast) { beast = { body: makeBeast(GL.beast, { length: 3, clips: { idle: 'canine_000001', run: 'canine_000002', atk1: 'canine_000011', atk2: 'canine_000012', lunge: 'canine_000015' } }), pos: new THREE.Vector3(), yaw: 0, side: 1 }; scene.add(beast.body.root); }
  const b = beast, a = P.yaw + Math.PI / 2; b.pos.set(P.pos.x + Math.sin(a) * 2, 0, P.pos.z + Math.cos(a) * 2); clampToArena(b.pos, .6); b.yaw = P.yaw; b.life = 12; b.atk = 0; b.cd = .35; b.k = 0; b.on = true;
  fx.sigil(b.pos, 2.8, [.3, 1, 1.2], 1.2); fx.ring(b.pos, 3.4, ICE, .5); fx.beam(b.pos, 8, 1, [.16, .5, .6], .8); fx.burst(b.pos, 26, [.3, .9, 1], 5, 5, .3, .8, .3); sfx('roar'); sfx('cast'); G.shake = Math.max(G.shake, .3);
}
function updateBeast(dt) {
  const b = beast; if (!b) return; if (!b.on || G.mode !== 'play') { b.on = false; b.body.root.visible = false; return; }
  b.life -= dt; b.k = Math.min(1, b.k + dt * 4); b.cd -= dt; const R0 = b.body.root; R0.visible = true; R0.scale.setScalar(Math.max(.01, b.k * Math.min(1, b.life / .35)));
  if (b.life <= 0) { b.on = false; R0.visible = false; fx.burst(b.pos, 24, [.3, .9, 1], 4, 5, .3, .8, .5); fx.ring(b.pos, 2.5, ICE, .4); return; }
  let t = null, bd = 1e9; for (const e of G.enemies) if (!e.dead && e.spawnT <= 0) { const d = dist(b.pos, e.pos); if (d < bd) { bd = d; t = e; } }
  const go = (a, step) => { b.pos.x += Math.sin(a) * step; b.pos.z += Math.cos(a) * step; clampToArena(b.pos, .5); };
  if (b.atk > 0) {
    b.atk -= dt; if (!b.hit && b.atk < .33) { b.hit = true; fx.slash({ pos: b.pos, yaw: b.yaw, radius: 2.7, arc: 1.7, dir: b.side, color: [.4, 1.2, 1.3], dur: .26, width: .5, y: .9 }); fx.slash({ pos: b.pos, yaw: b.yaw + .25 * b.side, radius: 2.3, arc: 1.5, dir: b.side, color: [.3, .9, 1], dur: .3, width: .4, y: 1.2 });
      if (b.tgt && !b.tgt.dead && dist(b.pos, b.tgt.pos) < 2.9 + b.tgt.r && damageEnemy(b.tgt, 18, { from: b.pos, heavy: true, stop: .07, kb: 2, poise: 12 })) { sfx('hitHeavy'); gainUlt(3); G.shake = Math.max(G.shake, .22); } }
  } else if (t) {
    const reach = 1.9 + t.r, a = angTo(b.pos, t.pos); b.yaw = turn(b.yaw, a, dt * 11);
    if (bd > reach) { go(b.yaw, Math.min(12.5 * dt, bd - reach + .05)); b.body.play('run', { ts: 1.5 }); }
    else if (b.cd <= 0) { b.tgt = t; b.side = -b.side; b.atk = .55; b.hit = false; b.cd = .9; b.body.play(b.side > 0 ? 'atk1' : 'atk2', { once: true, ts: 1.8, fade: .06 }); sfx('swing'); }
    else b.body.play('idle');
  } else { const d = dist(b.pos, P.pos); if (d > 3.2) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 9); go(b.yaw, Math.min(9 * dt, d - 2.6)); b.body.play('run', { ts: 1.2 }); } else b.body.play('idle'); }
  if (Math.random() < dt * 22) fx.p.spawn(b.pos.x + (Math.random() - .5) * 1.4, .3 + Math.random() * 1.2, b.pos.z + (Math.random() - .5) * 1.4, 0, .8, 0, .5, .22, .35, 1.1, 1.3, 0, 1);
  R0.position.set(b.pos.x, 0, b.pos.z); R0.rotation.y = b.yaw; b.body.update(dt);
}
G.beast = () => beast;
// the sword he rides
const board = new THREE.Group(); { const bs = swordMesh([.55, 1.7, 1.9], 2.1); bs.rotation.x = -Math.PI / 2; bs.position.z = 1.25; board.add(bs); board.visible = false; scene.add(board); }

// Something hits the player. o: { from, src (attacker), unblockable, proj }. Returns 'hit' | 'block' | 'parry' | 'miss'.
function damagePlayer(dmg, o) {
  if (P.state === 'dead') return 'miss';
  if (P.iframe > 0) { if (P.state === 'dodge' && !P.perfect) { P.perfect = true; gainUlt(8); P.qi = Math.min(100, P.qi + 12); P.st = Math.min(100, P.st + 18); G.slow = .16; fx.ring(P.pos, 1.8, TEAL, .35); } return 'miss'; }
  const a = angTo(P.pos, o.from);
  if (P.state === 'block' && !o.unblockable && Math.abs(angDiff(a, P.yaw)) < 1.75) {
    const c = { x: P.pos.x + Math.sin(a) * .7, y: 1.2, z: P.pos.z + Math.cos(a) * .7 };
    if (P.parryT < .24) {
      fx.sparks(c, a, 26, GOLD, 11, 1.4); fx.ring(P.pos, 2.4, GOLD, .4); sfx('parry'); G.shake = .22; G.slow = .12; gainUlt(14); P.qi = Math.min(100, P.qi + 18); P.hitstop = .08;
      if (o.src && !o.src.dead) { P.counterT = 1.25; P.counterFrom = o.src; if (o.src.isBoss) { o.src.poise -= 36; o.src.hitstop = .16; if (o.src.poise <= 0) breakBoss(o.src); else if (!o.proj) { cancelSeq(o.src); o.src.stun = .9; } } else if (!o.proj) { cancelSeq(o.src); o.src.stun = 1.5; o.src.hitstop = .12; } }
      return 'parry';
    }
    P.st -= dmg * 1.5; P.kb.set(-Math.sin(a) * 4, 0, -Math.cos(a) * 4); fx.sparks(c, a, 9, [1.6, 1.5, 1.3], 6, 1.2); sfx('block'); G.shake = .1;
    if (P.st <= 0) { P.st = 0; P.state = 'hurt'; P.t = 0; P.dur = .8; sfx('hurt'); } else if (o.src && !o.src.dead && !o.proj) { P.counterT = .85; P.counterFrom = o.src; }
    return 'block';
  }
  if (!G.god) P.hp -= dmg;
  P.state = 'hurt'; P.t = 0; P.dur = .32; P.iframe = 1.0; P.kb.set(-Math.sin(a) * 7, 0, -Math.cos(a) * 7); G.shake = .4; G.hurtFlash = 1; sfx('hurt'); P.counterT = 0;
  fx.sparks({ x: P.pos.x, y: 1.1, z: P.pos.z }, a + Math.PI, 10, [1.8, .25, .2], 6, 1.2);
  if (P.hp <= 0) { P.hp = 0; P.state = 'dead'; P.t = 0; G.slow = .6; sfx('die'); after(1.6, () => setMode('dead')); }
  return 'hit';
}

// ---------- enemies ----------
const KINDS = {
  guard: { hp: 105, speed: 2.8, r: .6, body: { h: 2.05, bulk: 1.2, robe: 0xe6e0cc, trim: 0xb08a2e, skin: 0xcaa24a, weapon: { len: 1.8, w: .1, color: 0xd8c27a } } },
  hawk: { hp: 44, speed: 6.0, r: .6, fly: true, body: { h: 1.0, bulk: 1.4, robe: 0xeee6d0, trim: 0x7a5fc0, skin: 0xcaa24a } },
  thunder: { hp: 55, speed: 2.9, r: .45, body: { h: 1.72, bulk: .86, robe: 0x6a5a34, trim: 0xcaa24a, skin: 0xe6e2da, hat: true } },
  boss3: { hp: 2400, speed: 3.5, r: 1.05, poise: 110, body: { h: 2.9, bulk: 1.45, robe: 0xe8e2cc, trim: 0xb08a2e, skin: 0xb59a86, dark: 0x4a3f70, metal: 0xb08a2e, pauldron: true, weapon: { len: 2.6, w: .18, color: 0xd8c27a, glow: 0x3a2a05 } } },
  wolf: { hp: 50, speed: 5.2, r: .6, body: { h: 1.1, bulk: 1.3, robe: 0xd8dde2, trim: 0x9fb4c8, skin: 0xcfd6dc } },
  spirit: { hp: 100, speed: 3.1, r: .55, body: { h: 1.95, bulk: 1.15, robe: 0x8fa9bd, trim: 0x5e7890, skin: 0x9fb4c8, weapon: { len: 1.2, w: .07, color: 0xbfe3f0 } } },
  frost: { hp: 50, speed: 2.9, r: .45, body: { h: 1.7, bulk: .86, robe: 0x5e6f8c, trim: 0x9fd4ea, skin: 0xe6eef2, hat: true } },
  boss2: { hp: 2300, speed: 4.0, r: .75, poise: 100, body: { h: 1.95, bulk: .95, robe: 0xe6e9f2, trim: 0x9a8fd0, skin: 0xe8dcd4, dark: 0xd8dde8, bun: true, weapon: { len: 1.4, w: .05, color: 0xdfeaff, glow: 0x2a2a66 } } },
  elite: { hp: 120, speed: 2.6, r: .65, body: { h: 2.1, bulk: 1.25, robe: 0x5a3030, trim: 0x8c1f2a, skin: 0x9a8a80, talisman: true, weapon: { len: 1.2, w: .1, color: 0x6d6258 } } },
  melee: { hp: 60, speed: 2.9, r: .5, body: { h: 1.72, bulk: 1.05, robe: 0x55594f, trim: 0x6a4a35, skin: 0x8d978a, talisman: true, weapon: { len: .95, w: .08, color: 0x6d6258 } } },
  ranged: { hp: 40, speed: 2.9, r: .45, body: { h: 1.66, bulk: .86, robe: 0x40203f, trim: 0x8c1f2a, skin: 0xe6e2da, hat: true } },
  boss: { hp: 1500, speed: 3.4, r: 1.0, poise: 100, body: { h: 2.55, bulk: 1.38, robe: 0x1d1418, trim: 0x7d1a22, skin: 0xa58d80, dark: 0x15131a, metal: 0x2b2a30, pauldron: true, horn: true, weapon: { len: 2.3, w: .17, color: 0x26242b, glow: 0x3a0508 } } },
};
function spawn(kind, x, z) {
  const D = KINDS[kind];
  const e = { kind, pos: new THREE.Vector3(x, 0, z), yaw: angTo({ x, z }, P.pos), r: D.r, hp: D.hp, maxHp: D.hp, speed: D.speed, poise: D.poise || 0, maxPoise: D.poise || 0, stun: 0, hitstop: 0, flash: 0, kb: new THREE.Vector3(),
    seq: null, si: 0, t: 0, cd: .6 + Math.random() * 1.6, anim: 'idle', animP: 0, phase: Math.random() * 6, idleT: Math.random() * 6, y: 0, isBoss: /^boss/.test(kind), fly: !!D.fly, spawnT: /^boss/.test(kind) ? 0 : .9, strafe: Math.random() < .5 ? 1 : -1, dead: false, deadT: 0, body: bodyFor(kind, D.body), last: '', hits: 0, chain: 0 };
  scene.add(e.body.root);
  if (kind === 'elite' && e.body.isChar) for (const m of e.body.mats) m.color.setRGB(1.25, .6, .52);
  if (kind === 'frost' && e.body.isChar) for (const m of e.body.mats) m.color.setRGB(.6, .85, 1.25);
  if (kind === 'thunder' && e.body.isChar) for (const m of e.body.mats) m.color.setRGB(1.35, 1.05, .5);
  if (!e.isBoss) {
    const bg = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x06090c, opacity: .75, transparent: true, depthTest: false })), fill = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xc8463c, depthTest: false }));
    bg.center.set(0, .5); fill.center.set(0, .5); bg.scale.set(1.04, .1, 1); fill.scale.set(1, .06, 1); bg.renderOrder = 8; fill.renderOrder = 9; scene.add(bg, fill); e.bar = [bg, fill];
    fx.ring(e.pos, 1.6, [.35, 1.1, .4], .8); fx.burst(e.pos, 16, [.12, .3, .14], 1.6, 2.2, .5, 1, .1);
  }
  G.enemies.push(e); return e;
}
G.spawn = spawn;
function cancelSeq(e) { if (e.cage) { e.cage.kill(); e.cage = null; } if (e.tele) { e.tele.cancel(); e.tele = null; } if (e.teles) { e.teles.forEach((t) => t.cancel()); e.teles = null; } e.seq = null; e.y = 0; const ti = G.tokens.indexOf(e); if (ti >= 0) { G.tokens.splice(ti, 1); G.tokenCd = .7; } }
function startSeq(e, seq, name) { e.seq = seq; e.si = 0; e.t = 0; e.fresh = true; e.last = name || ''; }
function runSeq(e, dt) {
  const s = e.seq[e.si]; if (!s) { const cd = e.seq.cd ?? 1; cancelSeq(e); e.cd = cd; return; }
  if (e.fresh) { e.fresh = false; s.start && s.start(e); }
  e.t += dt; const p = Math.min(1, e.t / s.dur); e.anim = s.anim || 'idle'; e.animP = p; e.swingDir = s.dir || 1; e.tilt = s.tilt || 0;
  s.tick && s.tick(e, p, dt);
  if (e.t >= s.dur) { s.end && s.end(e); if (e.seq) { e.si++; e.t = 0; e.fresh = true; } }
}
// Sequence steps
const wind = (dur, tele, o = {}) => ({
  dur, anim: 'windup', dir: o.dir, tilt: o.tilt,
  start(e) { e.yaw = angTo(e.pos, P.pos); e.tele = fx.telegraph({ ...tele, pos: e.pos, yaw: e.yaw, dur }); },
  tick(e, p, dt) { if (p < (o.track ?? .55)) { e.yaw = turn(e.yaw, angTo(e.pos, P.pos), dt * 7); e.tele && e.tele.set(e.pos, e.yaw); } if (e.isBoss && e.body.weapon.userData.blade) { const m = e.body.weapon.userData.blade; if (e.kind === 'boss2') m.emissive.setRGB(.12 * p, .16 * p, .5 * p); else if (e.kind === 'boss3') m.emissive.setRGB(.5 * p, .36 * p, .06 * p); else m.emissive.setRGB(.5 * p, .03 * p, .04 * p); } },
  end(e) { e.tele = null; },
});
const strike = (o) => ({
  dur: o.dur ?? .22, anim: 'swing', dir: o.dir, tilt: o.tilt,
  start(e) {
    if (o.step) move(e, Math.sin(e.yaw) * o.step, Math.cos(e.yaw) * o.step);
    fx.slash({ pos: e.pos, yaw: e.yaw, radius: o.range, arc: o.arc, dir: o.dir ?? 1, tilt: o.tilt, color: o.color ?? AMBER, dur: .3, width: o.width ?? .45, y: e.isBoss ? 1.5 : 1.05 }); sfx(e.isBoss ? 'heavy' : 'swing');
    if (P.state !== 'fly' && P.state !== 'dive' && inFan(e.pos, e.yaw, P.pos, o.range, o.arc, .35)) { const r = damagePlayer(o.dmg, { from: e.pos, src: e }); if (r === 'hit') e.hitstop = .07; }
    if (e.isBoss && e.body.weapon.userData.blade) e.body.weapon.userData.blade.emissive.setRGB(0, 0, 0);
  },
});
const rest = (dur) => ({ dur, anim: 'idle' });

function meleeSeq(e) {
  if (e && e.kind === 'elite') {      /* the big one: three heavier swings, the last an overhead chop */
    const t = { kind: 'fan', radius: 3.5, arc: 2.1, color: AMBER }, k = { range: 3.5, arc: 2.1, dmg: 10 };
    const s = [wind(.62, t, { dir: 1 }), strike({ ...k, dir: 1, step: .7 }), wind(.42, t, { dir: -1, track: .4 }), strike({ ...k, dir: -1, step: .9 }), wind(.55, { kind: 'fan', radius: 4, arc: 1.1, color: AMBER }, { tilt: 1, track: .5 }), strike({ range: 4, arc: 1.1, dmg: 13, dir: -1, tilt: 1.35, step: 1, width: .55 }), rest(1.5)]; s.cd = 1.1; return s;
  }
  if (e && e.kind === 'guard') {      /* sky gate guard: a long thrust down a line, then a wide sweep */
    const s = [{ dur: .62, anim: 'windup', dir: 1, start(b) { b.yaw = angTo(b.pos, P.pos); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: 6, width: 1.5, dur: .62, color: STORM }); }, tick(b, p, dt) { if (p < .55) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 6); b.tele && b.tele.set(b.pos, b.yaw); } }, end(b) { b.tele = null; } },
      { dur: .22, anim: 'swing', dir: 1, start(b) { const to = { x: b.pos.x + Math.sin(b.yaw) * 6, z: b.pos.z + Math.cos(b.yaw) * 6 }; fx.lineSlash({ x: (b.pos.x + to.x) / 2, z: (b.pos.z + to.z) / 2 }, b.yaw, 6, .7, [1.9, 1.4, .5], .3, 1.1); sfx('heavy'); if (P.state !== 'fly' && P.state !== 'dive' && segDist(P.pos, b.pos, to) < .8 + P.r) damagePlayer(11, { from: b.pos, src: b }); } },
      wind(.58, { kind: 'fan', radius: 3.6, arc: 2.6, color: STORM }, { dir: -1, track: .4 }), strike({ range: 3.6, arc: 2.6, dmg: 10, dir: -1, step: .6, color: [1.6, 1.2, .5] }), rest(1.1)]; s.cd = 1.3; return s;
  }
  if (e && e.kind === 'spirit') {      /* frost wraith: two cuts, the second throws a blade of ice */
    const t = { kind: 'fan', radius: 3.1, arc: 2, color: LAV }, k = { range: 3.1, arc: 2, dmg: 11, color: [.7, 1.1, 1.9] };
    const s = [wind(.6, t, { dir: 1 }), strike({ ...k, dir: 1, step: .6 }), wind(.48, t, { dir: -1, track: .45 }), strike({ ...k, dir: -1, step: .8 }),
      { dur: .05, anim: 'swing', start(b) { const c = fx.crescent({ color: [.7, 1.1, 2], radius: 1.7, arc: 1.5 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw: b.yaw, speed: 12, r: .9, dmg: 9, life: 1, fxh: c, color: LAV, big: true }); } }, rest(1.1)]; s.cd = 1.4; return s;
  }
  const t = { kind: 'fan', radius: 2.7, arc: 1.9, color: AMBER }, s = [wind(.7, t, { dir: 1 }), strike({ range: 2.7, arc: 1.9, dmg: 8, dir: 1, step: .5 }), wind(.48, t, { dir: -1, track: .4 }), strike({ range: 2.7, arc: 1.9, dmg: 8, dir: -1, step: .7 }), rest(1.1)]; s.cd = 1.6; return s;
}
function fireBolt(e, yaw, o = {}) {
  let mesh; if (o.sword) { mesh = new THREE.Group(); const sm = swordMesh(o.color, 1.2); sm.rotation.x = -Math.PI / 2; sm.position.z = .7; mesh.add(sm); } else mesh = new THREE.Mesh(new THREE.OctahedronGeometry(o.size ?? .22, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(...(o.color ?? [2.4, .35, .3])) })); scene.add(mesh);
  G.projs.push({ team: 'e', src: e, pos: new THREE.Vector3(e.pos.x + Math.sin(yaw) * (e.r + .5), 0, e.pos.z + Math.cos(yaw) * (e.r + .5)), yaw, speed: o.speed ?? 11, r: o.r ?? .35, dmg: o.dmg ?? 8, life: 3, cut: true, mesh, sword: !!o.sword, color: o.color ? o.color.map((v) => Math.min(1.4, v)) : CRIM }); sfx('bolt');
}
function rangedSeq(e0) { const frost = e0 && e0.kind === 'frost', s = [wind(.95, { kind: 'line', length: 13, width: .7, color: frost ? LAV : CRIM }, { track: .72 }), { dur: .3, anim: 'cast', start(e) { if (frost) for (const k of [-.24, 0, .24]) fireBolt(e, e.yaw + k, { color: [.9, 1.3, 2.2], dmg: 8 }); else fireBolt(e, e.yaw); } }, rest(.5)]; s[0].anim = 'cast'; s.cd = (G.stage === 1 ? 3.4 : 2.4) + Math.random(); return s; }

function walk(e, ang, speed, dt) { move(e, Math.sin(ang) * speed * dt, Math.cos(ang) * speed * dt); e.anim = 'run'; e.phase += dt * speed * 2.6; }
const LAV = [1.15, .8, 1.9], GOLDC = [1.9, 1.4, .5], STORM = [.85, .75, 2.1];
// a bolt from the sky on a marked circle
const thunder = (tp, r, dmg, lead) => { fx.telegraph({ kind: 'circle', pos: tp, radius: r, dur: lead, color: STORM });
  after(lead, () => { fx.beam(tp, 16, r * .3, [.55, .42, .2], .32); fx.beam(tp, 16, r * .1, [1.6, 1.45, 1.1], .22); fx.ring(tp, r * 1.5, [.9, .65, .25], .4); fx.crack(tp, r, [1.4, 1, .4], 2); fx.burst(tp, 10, [1.8, 1.5, .6], 7, 5, .22, .5, .2); G.flash = Math.max(G.flash, r > 3 ? .4 : .1); G.shake = Math.max(G.shake, r > 3 ? .9 : .25); sfx('boom'); if (dist(tp, P.pos) < r + P.r * .5) damagePlayer(dmg, { from: tp, unblockable: true }); }); };
const AI = {
  elite(e, dt) { AI.melee(e, dt); }, spirit(e, dt) { AI.melee(e, dt); }, frost(e, dt) { AI.ranged(e, dt); }, guard(e, dt) { AI.melee(e, dt); },
  thunder(e, dt) {      /* keeps away and calls two bolts down on wherever you stand */
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.yaw = turn(e.yaw, a, dt * 8);
    if (e.cd <= 0 && d < 14) { const s = [{ dur: 1.5, anim: 'cast', start(b) { thunder(clampToArena(P.pos.clone(), .2), 2.1, 9, 1.05); after(.6, () => { if (!b.dead) thunder(clampToArena(P.pos.clone(), .2), 2.1, 9, 1.05); }); } }, rest(.4)]; s.cd = 3.8 + Math.random() * 1.4; startSeq(e, s, 'bolt'); return; }
    if (d < 6) walk(e, a + Math.PI + e.strafe * .5, e.speed, dt); else if (d > 11) walk(e, a, e.speed, dt); else { walk(e, a + e.strafe * Math.PI / 2, e.speed * .45, dt); if (Math.random() < dt * .4) e.strafe *= -1; }
  },
  hawk(e, dt) {      /* circles overhead, then stoops along a marked line */
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.y += (2.4 - e.y) * Math.min(1, dt * 3);
    if (e.cd <= 0 && d < 11 && d > 3) { const s = [
      { dur: .65, anim: 'windup', start(b) { b.yaw = angTo(b.pos, P.pos); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: 11, width: 1.5, dur: .65, color: STORM }); }, tick(b, p, dt2) { if (p < .6) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt2 * 6); b.tele && b.tele.set(b.pos, b.yaw); } b.y += (2.9 - b.y) * Math.min(1, dt2 * 4); }, end(b) { b.tele = null; } },
      { dur: .44, anim: 'swing', start(b) { b.bit = false; sfx('swing'); }, tick(b, p, dt2) { move(b, Math.sin(b.yaw) * 25 * dt2, Math.cos(b.yaw) * 25 * dt2); b.y = 2.9 - 1.9 * Math.sin(p * Math.PI); if (!b.bit && P.state !== 'dive' && dist(b.pos, P.pos) < 1.4) { b.bit = true; fx.slash({ pos: b.pos, yaw: b.yaw, radius: 1.9, arc: 1.7, dir: 1, color: [1.8, 1.4, .6], dur: .22, width: .5, y: 1.2 }); damagePlayer(8, { from: b.pos, src: b }); } } },
      rest(.6)]; s.cd = 3.2 + Math.random() * 2; startSeq(e, s, 'stoop'); return; }
    const ta = a + e.strafe * 1.35, rad = d > 8 ? 1 : d < 6 ? -1 : 0; e.yaw = turn(e.yaw, ta, dt * 6);
    move(e, (Math.sin(a) * rad * .7 + Math.sin(ta) * .8) * e.speed * dt, (Math.cos(a) * rad * .7 + Math.cos(ta) * .8) * e.speed * dt); e.anim = 'run'; if (Math.random() < dt * .3) e.strafe *= -1;
  },
  boss3(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos), p2 = e.p2; e.yaw = turn(e.yaw, a, dt * 6);
    if (e.cd > 0) { if (d > 3.6) walk(e, a, e.speed * (p2 ? 1.15 : 1), dt); else walk(e, a + e.strafe * Math.PI / 2, e.speed * .35, dt); return; }
    const opts = d < 5.5 ? [['combo', 3], ['dashes', 1.2], ['chain', 1]] : [['dashes', 2.4], ['waves', 2], ['chain', 1.8], ['combo', d < 8 ? 1 : 0]]; if (p2) opts.push(['storm', e.rainCd > 0 ? 0 : 2.4]);
    let tot = 0; for (const o of opts) { if (o[0] === e.last) o[1] *= .25; tot += o[1]; } let r = Math.random() * tot, pick = opts[0][0]; for (const o of opts) { r -= o[1]; if (r <= 0) { pick = o[0]; break; } }
    startSeq(e, BOSS3[pick](e), pick);
  },
  wolf(e, dt) {      /* circles fast, then marks a line and pounces along it */
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos);
    if (e.cd <= 0 && d < 7.5 && d > 2) { const s = [
      { dur: .62, anim: 'windup', start(b) { b.yaw = angTo(b.pos, P.pos); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: 7, width: 1.6, dur: .62, color: AMBER }); }, tick(b, p, dt2) { if (p < .6) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt2 * 6); b.tele && b.tele.set(b.pos, b.yaw); } }, end(b) { b.tele = null; } },
      { dur: .3, anim: 'swing', start(b) { b.bit = false; sfx('swing'); }, tick(b, p, dt2) { move(b, Math.sin(b.yaw) * 22 * dt2, Math.cos(b.yaw) * 22 * dt2); if (!b.bit && P.state !== 'fly' && P.state !== 'dive' && dist(b.pos, P.pos) < 1.35) { b.bit = true; fx.slash({ pos: b.pos, yaw: b.yaw, radius: 1.8, arc: 1.6, dir: 1, color: [1.2, 1.3, 1.5], dur: .22, width: .5, y: .8 }); damagePlayer(9, { from: b.pos, src: b }); } } },
      rest(.7)]; s.cd = 2.8 + Math.random() * 1.8; startSeq(e, s, 'pounce'); return; }
    const ta = a + e.strafe * 1.25, rad = d > 6 ? 1 : d < 4 ? -1 : 0; e.yaw = turn(e.yaw, rad ? a + (rad < 0 ? Math.PI : 0) * 0 : ta, dt * 9);
    move(e, (Math.sin(a) * rad * .8 + Math.sin(ta) * .7) * e.speed * dt, (Math.cos(a) * rad * .8 + Math.cos(ta) * .7) * e.speed * dt); e.anim = 'run'; e.phase += dt * 10; if (Math.random() < dt * .5) e.strafe *= -1;
  },
  boss2(e, dt) {      /* keeps her distance and fights with thrown swords; closes only by blinking in */
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos), p2 = e.p2; e.yaw = turn(e.yaw, a, dt * 8);
    if (e.cd > 0) { const ta = a + e.strafe * Math.PI / 2, rad = d > 9 ? 1 : d < 5 ? -1 : 0; move(e, (Math.sin(a) * rad + Math.sin(ta) * .7) * e.speed * .75 * dt, (Math.cos(a) * rad + Math.cos(ta) * .7) * e.speed * .75 * dt); e.anim = 'run'; e.phase += dt * 8; if (Math.random() < dt * .5) e.strafe *= -1; return; }
    const opts = d < 5 ? [['blink', 2], ['ring', 2.2], ['volley', 1]] : [['volley', 3], ['ring', 1.4], ['blink', 2.2]]; if (p2) opts.push(['pillars', e.rainCd > 0 ? 0 : 2.4]);
    let tot = 0; for (const o of opts) { if (o[0] === e.last) o[1] *= .25; tot += o[1]; } let r = Math.random() * tot, pick = opts[0][0]; for (const o of opts) { r -= o[1]; if (r <= 0) { pick = o[0]; break; } }
    startSeq(e, BOSS2[pick](e), pick);
  },
  melee(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.yaw = turn(e.yaw, a, dt * 8);
    if (!G.tokens.includes(e) && G.tokens.length < (G.stage === 1 ? 1 : 2) && G.tokenCd <= 0 && e.cd <= 0 && d < 10) G.tokens.push(e);       /* up to two melee attackers at once; the rest circle */
    if (G.tokens.includes(e)) { if (d > (e.kind === 'elite' ? 2.5 : 2.0)) walk(e, a, e.speed, dt); else startSeq(e, meleeSeq(e)); return; }
    const want = 4.9, rad = d > want + .5 ? 1 : d < want - .5 ? -1 : 0, ta = a + e.strafe * Math.PI / 2;
    move(e, (Math.sin(a) * rad * .9 + Math.sin(ta) * .55) * e.speed * .6 * dt, (Math.cos(a) * rad * .9 + Math.cos(ta) * .55) * e.speed * .6 * dt); e.anim = 'run'; e.phase += dt * 6;
    if (Math.random() < dt * .3) e.strafe *= -1;
  },
  ranged(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.yaw = turn(e.yaw, a, dt * 8);
    if (e.cd <= 0 && d < 13) { startSeq(e, rangedSeq(e)); return; }
    if (d < 5.5) walk(e, a + Math.PI + e.strafe * .5, e.speed, dt); else if (d > 10.5) walk(e, a, e.speed, dt); else { walk(e, a + e.strafe * Math.PI / 2, e.speed * .45, dt); if (Math.random() < dt * .4) e.strafe *= -1; }
  },
  boss(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos), p2 = e.p2; e.yaw = turn(e.yaw, a, dt * 6);
    if (e.cd > 0) { if (d > 3.4) walk(e, a, e.speed * (p2 ? 1.15 : 1), dt); else { walk(e, a + e.strafe * Math.PI / 2, e.speed * .35, dt); } return; }
    const opts = []; if (d < 5.2) opts.push(['combo', 3], ['slam', 1], ['blink', .8]); else opts.push(['slam', 1.6], ['waves', 2], ['blink', 2.2], ['combo', d < 8 ? 1 : 0]);
    if (p2) opts.push(['rain', e.rainCd > 0 ? 0 : 2.4]);
    let tot = 0; for (const o of opts) { if (o[0] === e.last) o[1] *= .25; tot += o[1]; } let r = Math.random() * tot, pick = opts[0][0]; for (const o of opts) { r -= o[1]; if (r <= 0) { pick = o[0]; break; } }
    startSeq(e, BOSS[pick](e), pick);
  },
};
const BOSS = {
  combo(e) {
    const f = e.p2 ? .82 : 1, t = { kind: 'fan', radius: 4.4, arc: 2.2, color: AMBER }, k = { range: 4.4, arc: 2.2, dmg: 12, width: .5 };
    const s = [wind(.8 * f, t, { dir: 1 }), strike({ ...k, dir: 1, step: 1.3 }), wind(.56 * f, t, { dir: -1, track: .45 }), strike({ ...k, dir: -1, step: 1.5 }),
      wind(.72 * f, { kind: 'fan', radius: 5, arc: 1.1, color: AMBER }, { tilt: 1, track: .5 }), strike({ range: 5, arc: 1.1, dmg: 17, dir: -1, tilt: 1.35, step: 1.6, width: .6, dur: .3 }),
      { dur: .05, anim: 'swing', start(b) { const c = fx.crescent({ color: [1.7, .3, .2], radius: 2.4, arc: 1.5 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw: b.yaw, speed: 15, r: 1.2, dmg: 14, life: 1.1, fxh: c, color: CRIM, big: true }); fx.crack({ x: b.pos.x + Math.sin(b.yaw) * 3, z: b.pos.z + Math.cos(b.yaw) * 3 }, 2, CRIM, 2.5); G.shake = Math.max(G.shake, .4); } }, rest(1.2 * f)];
    s.cd = e.p2 ? .5 : .9; return s;
  },
  slam(e) {
    const s = [{ dur: e.p2 ? .9 : 1.05, anim: 'leap',
      start(b) { b.from = b.pos.clone(); b.to = clampToArena(P.pos.clone(), b.r); b.tele = fx.telegraph({ kind: 'circle', pos: b.to, radius: 3.7, dur: this.dur, color: CRIM }); },
      tick(b, p) { if (p > .28) { const u = (p - .28) / .72, q = u * u * (3 - 2 * u); b.pos.lerpVectors(b.from, b.to, q); b.y = Math.sin(u * Math.PI) * 3.4; b.yaw = angTo(b.from, b.to) || b.yaw; } },
      end(b) { b.y = 0; b.tele = null; for (let i = 0; i < 8; i++) { const a = i * TAU / 8 + .3; fx.lineSlash({ x: b.pos.x + Math.sin(a) * 2.6, z: b.pos.z + Math.cos(a) * 2.6 }, a, 5, .5, [1.5, .3, .2], .4, .1); if (i % 2) fx.beam({ x: b.pos.x + Math.sin(a) * 3.3, z: b.pos.z + Math.cos(a) * 3.3 }, 6, .3, [.9, .16, .12], .6); } fx.ring(b.pos, 5.2, CRIM, .6); fx.crack(b.pos, 3.7, CRIM, 3.5); fx.burst(b.pos, 40, [1.2, .5, .3], 8, 5, .34, .8, .2); G.shake = .7; sfx('boom'); if (P.state !== 'fly' && dist(b.pos, P.pos) < 3.7 + P.r) damagePlayer(19, { from: b.pos, src: b, unblockable: true }); } }, rest(e.p2 ? .9 : 1.25)];
    s.cd = .8; return s;
  },
  waves(e) {
    const n = e.p2 ? 5 : 3, sp = .3, s = [{ dur: .9, anim: 'cast',
      start(b) { b.yaw = angTo(b.pos, P.pos); b.teles = []; for (let i = 0; i < n; i++) b.teles.push(fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw + (i - (n - 1) / 2) * sp, length: 15, width: 1.7, dur: .9, color: AMBER })); },
      end(b) { b.teles = null; for (let i = 0; i < n; i++) { const yaw = b.yaw + (i - (n - 1) / 2) * sp, c = fx.crescent({ color: [1.7, .3, .2], radius: 1.7, arc: 1.7 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw, speed: 12, r: .95, dmg: 10, life: 1.6, fxh: c, color: CRIM, big: true }); } sfx('heavy'); G.shake = .2; } }, rest(.85)];
    s.cd = .7; return s;
  },
  rain(e) {
    e.rainCd = 11; const s = [{ dur: 2.5, anim: 'cast',
      start(b) { fx.ring(b.pos, 3, CRIM, .7); fx.sigil(b.pos, 4.2, [1.1, .16, .2], 2.6); for (let i = 0; i < 7; i++) after(.15 + i * .3, () => { if (b.dead || P.state === 'dead') return; const o = i ? Math.random() * 1.6 : 0, a = Math.random() * TAU, tp = clampToArena(new THREE.Vector3(P.pos.x + Math.sin(a) * o, 0, P.pos.z + Math.cos(a) * o), .2);
        fx.telegraph({ kind: 'circle', pos: tp, radius: 2.1, dur: .85, color: CRIM }); fx.fallSword(tp, [2, .3, .25], .85, .9);
        after(.85, () => { fx.ring(tp, 3, CRIM, .45); fx.crack(tp, 2.1, CRIM, 2.2); fx.burst(tp, 14, CRIM, 5, 4, .26, .6, .2); G.shake = Math.max(G.shake, .25); sfx('boom'); if (dist(tp, P.pos) < 2.1 + P.r * .5) damagePlayer(16, { from: tp, unblockable: true }); }); }); } }, rest(.7)];
    s.cd = .6; return s;
  },
};
// distance from a point to the segment a-b on the ground plane
const segDist = (p, a, b) => { const vx = b.x - a.x, vz = b.z - a.z, l2 = vx * vx + vz * vz || 1, t = Math.max(0, Math.min(1, ((p.x - a.x) * vx + (p.z - a.z) * vz) / l2)); return Math.hypot(p.x - a.x - vx * t, p.z - a.z - vz * t); };
// flash step: he marks a line through you, then is simply at the other end of it
BOSS.blink = (e) => {
  const s = [{ dur: e.p2 ? .62 : .75, anim: 'windup', dir: 1,
    start(b) { b.yaw = angTo(b.pos, P.pos); const d = Math.min(12, dist(b.pos, P.pos) + 3.2); b.from = b.pos.clone(); b.to = clampToArena(new THREE.Vector3(b.pos.x + Math.sin(b.yaw) * d, 0, b.pos.z + Math.cos(b.yaw) * d), b.r); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: dist(b.from, b.to), width: 2.2, dur: this.dur, color: AMBER }); },
    end(b) { b.tele = null; const mid = { x: (b.from.x + b.to.x) / 2, z: (b.from.z + b.to.z) / 2 }, L = dist(b.from, b.to);
      for (let i = 0; i < 5; i++) { const k = i / 4; fx.burst({ x: b.from.x + (b.to.x - b.from.x) * k, z: b.from.z + (b.to.z - b.from.z) * k }, 5, [.9, .12, .12], 2, 2, .3, .5, 1); }
      b.pos.copy(b.to); fx.lineSlash(mid, b.yaw, L + 2, 1, [2.2, .5, .35], .4, 1.2); fx.lineSlash(mid, b.yaw, L + 2, 2.6, [.4, .05, .06], .6, .1); fx.ring(b.to, 2.6, CRIM, .4); G.shake = Math.max(G.shake, .45); sfx('heavy'); sfx('ring');
      if (P.state !== 'fly' && P.state !== 'dive' && segDist(P.pos, b.from, b.to) < 1.25 + P.r) damagePlayer(14, { from: b.from, src: b }); b.yaw += Math.PI; } },
    { dur: .25, anim: 'swing', dir: 1 }, rest(e.p2 ? .7 : .95)];
  s.cd = .6; return s;
};
// His ultimate, once, at 30% health: he takes the centre under a blood moon, four blades of light sweep the whole yard and reverse,
// swords keep falling on you, and one colossal sword closes it. Then he is spent - the opening to finish him.
function bossUlt(e) {
  e.ulted = true; cancelSeq(e); e.stun = 0; e.invuln = true; const drop = (tp, r, dmg, lead, scale) => { fx.telegraph({ kind: 'circle', pos: tp, radius: r, dur: lead, color: CRIM }); fx.fallSword(tp, [2, .3, .25], lead, scale, .7);
    after(lead, () => { fx.ring(tp, r * 1.4, CRIM, .5); fx.crack(tp, r, CRIM, 2.6); fx.burst(tp, 16, CRIM, 6, 5, .28, .7, .2); G.shake = Math.max(G.shake, r > 3 ? 1 : .28); sfx('boom'); if (dist(tp, P.pos) < r + P.r * .5) damagePlayer(dmg, { from: tp, unblockable: true }); }); };
  const seq = [
    { dur: .75, anim: 'leap', start(b) { b.from = b.pos.clone(); sfx('roar'); showBanner('', '「山門既閉，便不該再開。」', 3.4); G.shake = .5; fx.ring(b.pos, 5, CRIM, .6); },
      tick(b, p) { const q = p * p * (3 - 2 * p); b.pos.set(b.from.x * (1 - q), 0, b.from.z * (1 - q)); b.y = Math.sin(p * Math.PI) * 4; }, end(b) { b.y = 0; b.pos.set(0, 0, 0); fx.ring(b.pos, 7, CRIM, .7); fx.crack(b.pos, 4, CRIM, 9); G.shake = .8; sfx('boom'); const a = angTo(b.pos, P.pos); if (dist(b.pos, P.pos) < 5) P.kb.set(Math.sin(a) * 15, 0, Math.cos(a) * 15); } },
    { dur: 1.5, anim: 'cast', start(b) { G.bossUlt = true; fx.moon(b.pos, 13.3, [1, .22, .2], 8.6); fx.sigil(b.pos, 13.3, [1.15, .15, .2], 8.6); sfx('ultCharge'); b.sweep = Math.random() * TAU; b.teles = [0, 1, 2, 3].map((k) => fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.sweep + k * Math.PI / 2, length: 13.4, width: 2.4, dur: 5.9, color: CRIM })); },
      tick(b, p, dt) { b.yaw += dt * 5; if (Math.random() < dt * 30) { const a = Math.random() * TAU, r = 2 + Math.random() * 10; fx.p.spawn(Math.sin(a) * r, .1, Math.cos(a) * r, 0, 2 + Math.random() * 3, 0, .8, .14, 1.6, .2, .2, 0, .5); } } },
    { dur: 4.4, anim: 'cast',
      start(b) { b.swT = 0; b.dropT = .5; sfx('heavy'); },
      tick(b, p, dt) {
        b.sweep += (p < .5 ? .52 : -.7) * dt; b.yaw = b.sweep; b.swT -= dt; b.dropT -= dt; const live = b.swT <= 0; if (live) b.swT = .075;
        for (let k = 0; k < 4; k++) { const th = b.sweep + k * Math.PI / 2; if (b.teles) b.teles[k].set(b.pos, th);
          if (live) { fx.lineSlash({ x: Math.sin(th) * 6.9, z: Math.cos(th) * 6.9 }, th, 13.4, .75, [1.9, .35, .3], .2, 1.1); const r = 1 + Math.random() * 12; fx.p.spawn(Math.sin(th) * r, 1 + Math.random(), Math.cos(th) * r, 0, 2, 0, .4, .2, 2, .3, .25, 0, 1); }
          const d = dist(b.pos, P.pos); if (d < 13.6 && (d < 1.4 || Math.abs(angDiff(angTo(b.pos, P.pos), th)) < Math.atan2(.85, d))) damagePlayer(9, { from: { x: P.pos.x - Math.cos(th), z: P.pos.z + Math.sin(th) }, unblockable: true }); }
        if (b.dropT <= 0) { b.dropT = 1.1; drop(clampToArena(P.pos.clone(), .2), 2, 8, 1.0, .9); }
      }, end(b) { if (b.teles) { b.teles.forEach((t) => t.cancel()); b.teles = null; } } },
    { dur: 1.35, anim: 'leap', start(b) { b.y = 0; drop(clampToArena(P.pos.clone(), .2), 5.2, 24, 1.5, 3.4); b.fin = P.pos.clone(); sfx('ultCharge'); },
      end(b) { const c = b.fin; for (let i = 0; i < 10; i++) { const a = i * TAU / 10; fx.beam({ x: c.x + Math.sin(a) * 4.4, z: c.z + Math.cos(a) * 4.4 }, 9, .4, [.9, .15, .12], .8); fx.lineSlash({ x: c.x + Math.sin(a) * 3, z: c.z + Math.cos(a) * 3 }, a, 6, .6, [1.6, .3, .2], .45, .12); } fx.ring(c, 12, [.8, .12, .1], .9); G.flash = .45; G.shock = 1; G.slow = .4; sfx('roar'); } },
    { dur: .2, anim: 'hurt', end(b) { b.invuln = false; G.bossUlt = false; b.stun = 3.4; b.poise = b.maxPoise; fx.ring(b.pos, 4, GOLD, .6); } },
  ];
  seq.cd = .4; startSeq(e, seq, 'ult');
}
// ---------- stage two boss: Shuang Wan, keeper of the Sword Tomb. She fights at range with thrown swords.
const skyDrop = (tp, r, dmg, lead, scale, col = LAV) => { fx.telegraph({ kind: 'circle', pos: tp, radius: r, dur: lead, color: col }); fx.fallSword(tp, [1.2, 1.3, 2.2], lead, scale, .7);
  after(lead, () => { fx.ring(tp, r * 1.4, col, .5); fx.crack(tp, r, [.6, .8, 1.6], 2.6); fx.burst(tp, 14, [.7, .9, 1.8], 6, 5, .26, .7, .2); fx.beam(tp, 6, r * .3, [.3, .4, .9], .6); G.shake = Math.max(G.shake, r > 3 ? .9 : .26); sfx('boom'); if (dist(tp, P.pos) < r + P.r * .5) damagePlayer(dmg, { from: tp, unblockable: true }); }); };
// an expanding ring of swords: one hit per ring, passed by a well-timed dodge
const rings = [];
function launchRing(pos, o = {}) {
  const g = new THREE.Group(), n = 22; for (let i = 0; i < n; i++) { const sm = swordMesh([1.1, 1.2, 2.1], 1.1), a = i / n * TAU; sm.rotation.set(Math.PI / 2, 0, 0); const h = new THREE.Group(); h.rotation.y = a; sm.position.set(0, 1, 1); h.add(sm); g.add(h); }
  g.position.set(pos.x, 0, pos.z); scene.add(g); rings.push({ g, pos: pos.clone(), r: o.r0 ?? 1.2, speed: o.speed ?? 7.2, max: o.max ?? 15, dmg: o.dmg ?? 12, hit: false }); sfx('heavy'); sfx('ring');
}
function updateRings(dt) {
  for (let i = rings.length - 1; i >= 0; i--) { const R1 = rings[i]; R1.r += R1.speed * dt; R1.g.scale.set(R1.r, 1, R1.r); R1.g.rotation.y += dt * .6; for (const h of R1.g.children) h.children[0].scale.set(1 / R1.r, 1 / R1.r, 1);      /* undo the ring's stretch so each sword keeps its shape */
    if (Math.random() < dt * 60) { const a = Math.random() * TAU; fx.p.spawn(R1.pos.x + Math.sin(a) * R1.r, 1, R1.pos.z + Math.cos(a) * R1.r, 0, .5, 0, .35, .22, .7, .9, 1.8, 0, 1); }
    if (!R1.hit && Math.abs(dist(R1.pos, P.pos) - R1.r) < .75) { const res = damagePlayer(R1.dmg, { from: R1.pos, unblockable: true }); if (res === 'hit') R1.hit = true; }
    if (R1.r > R1.max) { scene.remove(R1.g); rings.splice(i, 1); } }
}
const BOSS2 = {
  volley(e) {      /* a string of thrown swords, each aimed where you are when it leaves her hand */
    const n = e.p2 ? 6 : 4, s = [{ dur: .65, anim: 'cast', start(b) { b.yaw = angTo(b.pos, P.pos); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: 14, width: .9, dur: .65, color: LAV }); fx.swordHalo({ pos: b.pos, n, radius: 1.5, y: 2.4, appear: .4, release: Array.from({ length: n }, (_, i) => .65 + i * .2) }); }, tick(b, p, dt) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 8); b.tele && b.tele.set(b.pos, b.yaw); }, end(b) { b.tele = null; } },
      { dur: n * .2 + .1, anim: 'cast', start(b) { b.shot = 0; }, tick(b, p, dt) { b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 10); while (b.shot < n && b.t >= b.shot * .2) { b.shot++; fireBolt(b, b.yaw + (Math.random() - .5) * .08, { sword: true, color: [1.1, 1.2, 2.2], speed: 16, dmg: 9, r: .45 }); } } }, rest(e.p2 ? .8 : 1.1)];
    s.cd = .5; return s;
  },
  ring(e) {
    const s = [{ dur: .85, anim: 'cast', start(b) { b.tele = fx.telegraph({ kind: 'circle', pos: b.pos, radius: 3, dur: .85, color: LAV }); fx.sigil(b.pos, 3.2, [.7, .6, 1.6], 1.4); sfx('ultCharge'); }, end(b) { b.tele = null; launchRing(b.pos); if (b.p2) after(.7, () => { if (!b.dead) launchRing(b.pos, { speed: 8.6 }); }); G.shake = Math.max(G.shake, .35); } }, rest(e.p2 ? 1.2 : 1.5)];
    s.cd = .8; return s;
  },
  blink(e) {      /* gone from where she stood, behind you with the blade already moving */
    const t = { kind: 'fan', radius: 3.7, arc: 2.3, color: LAV }, k = { range: 3.7, arc: 2.3, dmg: 14, color: [.8, 1.1, 2] };
    const s = [{ dur: .22, anim: 'cast', start(b) { fx.burst(b.pos, 18, [.7, .9, 1.8], 4, 4, .3, .5, .8); fx.ring(b.pos, 2.2, LAV, .35); const a = P.yaw + Math.PI, to = clampToArena(new THREE.Vector3(P.pos.x + Math.sin(a) * 2.6, 0, P.pos.z + Math.cos(a) * 2.6), b.r); fx.lineSlash({ x: (b.pos.x + to.x) / 2, z: (b.pos.z + to.z) / 2 }, angTo(b.pos, to), dist(b.pos, to), .4, [.6, .7, 1.6], .3, 1.2); b.pos.copy(to); b.yaw = angTo(b.pos, P.pos); fx.burst(b.pos, 18, [.7, .9, 1.8], 4, 4, .3, .5, .8); sfx('dodge'); } },
      wind(e.p2 ? .46 : .55, t, { dir: 1, track: .5 }), strike({ ...k, dir: 1, step: .6 }), wind(.38, t, { dir: -1, track: .4 }), strike({ ...k, dir: -1, step: .8 }), rest(1.1)];
    s.cd = .5; return s;
  },
  pillars(e) {
    e.rainCd = 10; const s = [{ dur: 2.2, anim: 'cast', start(b) { fx.sigil(b.pos, 4, [.7, .6, 1.6], 2.4); for (let i = 0; i < 5; i++) after(.15 + i * .4, () => { if (b.dead || P.state === 'dead') return; const o = i ? Math.random() * 1.8 : 0, a = Math.random() * TAU; skyDrop(clampToArena(new THREE.Vector3(P.pos.x + Math.sin(a) * o, 0, P.pos.z + Math.cos(a) * o), .2), 2.2, 12, .95, .9); }); } }, rest(.9)];
    s.cd = .6; return s;
  },
};
// Her ultimate, once, at 30%: she rises over the centre and buries the yard in rows of swords - alternate lanes, then crossways, faster each time -
// and ends with three rings. Then she has to land.
function boss2Ult(e) {
  e.ulted = true; cancelSeq(e); e.stun = 0; e.invuln = true;
  const volley = (i, lead) => { const horiz = i % 2 === 0, lanes = []; for (let k = -5; k <= 5; k++) if ((k + i) % 2 === 0) lanes.push(k * 2.6);
    for (const c of lanes) { const pos = horiz ? { x: -14.5, z: c } : { x: c, z: -14.5 }, yaw = horiz ? Math.PI / 2 : 0; fx.telegraph({ kind: 'line', pos, yaw, length: 29, width: 2.5, dur: lead, color: LAV });
      after(lead, () => { const mid = horiz ? { x: 0, z: c } : { x: c, z: 0 }; fx.lineSlash(mid, yaw, 29, 1.5, [1.3, 1.5, 2.6], .34, .9); fx.lineSlash(mid, yaw, 29, 2.6, [.2, .25, .6], .5, .08);
        for (let q = -2; q <= 2; q++) { const pt = horiz ? { x: q * 5.2 + (Math.random() - .5) * 2, z: c } : { x: c, z: q * 5.2 + (Math.random() - .5) * 2 }; if (Math.hypot(pt.x, pt.z) < 13.4) { fx.fallSword(pt, [1.2, 1.3, 2.2], .05, .8, .5); fx.beam(pt, 5, .28, [.3, .4, .9], .5); } }
        const off = horiz ? P.pos.z - c : P.pos.x - c; if (Math.abs(off) < 1.05) damagePlayer(11, { from: horiz ? { x: P.pos.x, z: c - Math.sign(off || 1) } : { x: c - Math.sign(off || 1), z: P.pos.z }, unblockable: true }); }); }
    after(lead, () => { G.shake = Math.max(G.shake, .4); sfx('heavy'); sfx('ring'); }); };
  const leads = [1.25, 1.15, 1.05, .98, .92, .86]; let at = .3; const times = leads.map((l) => { const t0 = at; at += l * .92; return t0; });
  const seq = [
    { dur: .6, anim: 'leap', start(b) { b.from = b.pos.clone(); sfx('roar'); showBanner('', '「此處葬劍，不葬人。你可以例外。」', 3.4); fx.burst(b.pos, 24, [.7, .9, 1.8], 5, 5, .3, .6, .8); }, tick(b, p) { const q = p * p * (3 - 2 * p); b.pos.set(b.from.x * (1 - q), 0, b.from.z * (1 - q)); b.y = 2.6 * q; } },
    { dur: 1.3, anim: 'cast', start(b) { G.bossUlt = true; b.y = 2.6; fx.moon(b.pos, 13.3, [.7, .7, 1.2], at + 4.5); fx.sigil(b.pos, 13.3, [.75, .6, 1.7], at + 4.5); sfx('ultCharge'); fx.swordHalo({ pos: b.pos, n: 16, radius: 3.2, y: 5.4, appear: 1, spin: 1.6, release: Array.from({ length: 16 }, (_, i) => 1.3 + at * i / 16) }); }, tick(b, p, dt) { b.y = 2.6 + Math.sin(G.time * 2) * .15; b.yaw += dt * 3; } },
    { dur: at + .5, anim: 'cast', start(b) { leads.forEach((l, i) => after(times[i], () => { if (!b.dead && P.state !== 'dead') volley(i, l); })); }, tick(b, p, dt) { b.y = 2.6 + Math.sin(G.time * 2) * .15; b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 4); } },
    { dur: 1.9, anim: 'leap', start(b) { for (let i = 0; i < 3; i++) after(.1 + i * .6, () => { if (!b.dead) launchRing(b.pos, { speed: 7.6 + i * .8 }); }); }, tick(b, p) { b.y = 2.6 * (1 - p * p); }, end(b) { b.y = 0; fx.ring(b.pos, 6, LAV, .6); fx.crack(b.pos, 3, [.6, .8, 1.6], 4); G.shake = .5; } },
    { dur: .2, anim: 'hurt', end(b) { b.invuln = false; G.bossUlt = false; b.stun = 3.4; b.poise = b.maxPoise; fx.ring(b.pos, 4, GOLD, .6); } },
  ];
  seq.cd = .4; startSeq(e, seq, 'ult');
}
// ---------- stage three boss: Xuan Xiao, Lord of the Sky Gate. A greatsword and the thunder that answers it.
const BOSS3 = {
  combo(e) {      /* three cuts; a line of bolts walks out along each one */
    const f = e.p2 ? .85 : 1, t = { kind: 'fan', radius: 5, arc: 2.2, color: STORM }, k = { range: 5, arc: 2.2, dmg: 14, width: .5, color: [1.7, 1.25, .5] };
    const bolts = { dur: .05, anim: 'swing', start(b) { for (let i = 0; i < 3; i++) thunder(clampToArena(new THREE.Vector3(b.pos.x + Math.sin(b.yaw) * (4.5 + i * 3), 0, b.pos.z + Math.cos(b.yaw) * (4.5 + i * 3)), .2), 1.7, 9, .62 + i * .16); } };
    const s = [wind(.75 * f, t, { dir: 1 }), strike({ ...k, dir: 1, step: 1.3 }), bolts, wind(.55 * f, t, { dir: -1, track: .45 }), strike({ ...k, dir: -1, step: 1.5 }), bolts,
      wind(.7 * f, { kind: 'fan', radius: 5.6, arc: 1.1, color: STORM }, { tilt: 1, track: .5 }), strike({ range: 5.6, arc: 1.1, dmg: 19, dir: -1, tilt: 1.35, step: 1.6, width: .6, dur: .3, color: [1.7, 1.25, .5] }), bolts, rest(1.2 * f)];
    s.cd = e.p2 ? .5 : .9; return s;
  },
  chain(e) {      /* bolts that follow you, one after another */
    const n = e.p2 ? 6 : 4, s = [{ dur: n * .42 + 1, anim: 'cast', start(b) { fx.sigil(b.pos, 4, [1.2, .9, .35], n * .42 + 1.2); for (let i = 0; i < n; i++) after(.2 + i * .42, () => { if (!b.dead && P.state !== 'dead') thunder(clampToArena(P.pos.clone(), .2), 2.1, 10, .9); }); } }, rest(.9)];
    s.cd = .6; return s;
  },
  dashes(e) {      /* three flash-steps in a row, each re-aimed */
    const step = (dur) => ({ dur, anim: 'windup', dir: 1,
      start(b) { b.yaw = angTo(b.pos, P.pos); const d = Math.min(11, dist(b.pos, P.pos) + 3); b.from = b.pos.clone(); b.to = clampToArena(new THREE.Vector3(b.pos.x + Math.sin(b.yaw) * d, 0, b.pos.z + Math.cos(b.yaw) * d), b.r); b.tele = fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw, length: dist(b.from, b.to), width: 2.2, dur, color: STORM }); },
      end(b) { b.tele = null; const mid = { x: (b.from.x + b.to.x) / 2, z: (b.from.z + b.to.z) / 2 }, L = dist(b.from, b.to); b.pos.copy(b.to); fx.lineSlash(mid, b.yaw, L + 2, 1, [2.4, 1.8, .6], .4, 1.2); fx.lineSlash(mid, b.yaw, L + 2, 2.6, [.4, .3, .08], .6, .1); fx.ring(b.to, 2.6, GOLDC, .4); G.shake = Math.max(G.shake, .4); sfx('heavy'); sfx('ring');
        if (P.state !== 'fly' && P.state !== 'dive' && segDist(P.pos, b.from, b.to) < 1.25 + P.r) damagePlayer(13, { from: b.from, src: b }); } });
    const s = [step(e.p2 ? .62 : .72), step(.5), step(.5), { dur: .25, anim: 'swing', dir: 1 }, rest(1)]; s.cd = .6; return s;
  },
  waves(e) {
    const n = 5, sp = .3, shot = (b) => { for (let i = 0; i < n; i++) { const yaw = b.yaw + (i - (n - 1) / 2) * sp, c = fx.crescent({ color: [1.8, 1.3, .4], radius: 1.7, arc: 1.7 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw, speed: 12, r: .95, dmg: 11, life: 1.6, fxh: c, color: STORM, big: true }); } sfx('heavy'); G.shake = Math.max(G.shake, .2); };
    const s = [{ dur: .85, anim: 'cast', start(b) { b.yaw = angTo(b.pos, P.pos); b.teles = []; for (let i = 0; i < n; i++) b.teles.push(fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw + (i - (n - 1) / 2) * sp, length: 15, width: 1.7, dur: .85, color: STORM })); }, end(b) { b.teles = null; shot(b); } }];
    if (e.p2) s.push({ dur: .6, anim: 'cast', start(b) { b.yaw = angTo(b.pos, P.pos) + sp / 2; }, end(b) { shot(b); } }); s.push(rest(.85)); s.cd = .7; return s;
  },
  storm(e) {
    e.rainCd = 10; const s = [{ dur: 2.6, anim: 'cast', start(b) { fx.sigil(b.pos, 5, [1.2, .9, .35], 2.8); for (let i = 0; i < 9; i++) after(.2 + i * .26, () => { if (b.dead || P.state === 'dead') return; const a = Math.random() * TAU, r = Math.random() * 11; thunder(i % 3 === 0 ? clampToArena(P.pos.clone(), .2) : clampToArena(new THREE.Vector3(Math.sin(a) * r, 0, Math.cos(a) * r), .2), 2.2, 10, .95); }); } }, rest(.9)];
    s.cd = .6; return s;
  },
};
// His ultimate, once, at 30%: a cage of lightning closes around the centre and holds; inside it, bolts hunt you and blades of light fan out from him;
// it ends with one great bolt. Step outside the cage and it burns.
function boss3Ult(e) {
  e.ulted = true; cancelSeq(e); e.stun = 0; e.invuln = true; const R0 = 13.4, R1 = 6.4, shrink = 4.5, hold = 6.5;
  const seq = [
    { dur: .75, anim: 'leap', start(b) { b.from = b.pos.clone(); sfx('roar'); showBanner('', '「天闕之上，只容得下一把劍。」', 3.4); G.shake = .5; fx.ring(b.pos, 5, GOLDC, .6); },
      tick(b, p) { const q = p * p * (3 - 2 * p); b.pos.set(b.from.x * (1 - q), 0, b.from.z * (1 - q)); b.y = Math.sin(p * Math.PI) * 4; }, end(b) { b.y = 0; b.pos.set(0, 0, 0); fx.ring(b.pos, 7, GOLDC, .7); fx.crack(b.pos, 4, [1.4, 1, .4], 9); G.shake = .8; sfx('boom'); const a = angTo(b.pos, P.pos); if (dist(b.pos, P.pos) < 4) P.kb.set(Math.sin(a) * 13, 0, Math.cos(a) * 13); } },
    { dur: shrink + hold, anim: 'cast',
      start(b) { G.bossUlt = true; b.cage = fx.wall(b.pos, R0, 7, [.55, .4, .16]); b.cageR = R0; b.burn = 0; b.boltT = 1.2; b.fanT = 2.4; b.spin = Math.random() * TAU; fx.sigil(b.pos, R1, [.9, .65, .25], shrink + hold + 1.6); sfx('ultCharge'); },
      tick(b, p, dt) {
        const t = b.t; b.cageR = t < shrink ? R0 + (R1 - R0) * (t / shrink) * (t / shrink) * (3 - 2 * t / shrink) : R1; b.cage.set(b.cageR); b.yaw = turn(b.yaw, angTo(b.pos, P.pos), dt * 3);
        b.burn -= dt; if (dist(b.pos, P.pos) > b.cageR + .2 && b.burn <= 0) { b.burn = .6; damagePlayer(7, { from: { x: P.pos.x * 1.3, z: P.pos.z * 1.3 }, unblockable: true }); }      /* outside the cage it burns, and the hit knocks you back toward the centre */
        if (Math.random() < dt * 30) { const a = Math.random() * TAU; fx.p.spawn(Math.sin(a) * b.cageR, Math.random() * 5, Math.cos(a) * b.cageR, 0, 3, 0, .3, .2, 2, 1.6, .6, 0, 1); }
        b.boltT -= dt; if (b.boltT <= 0) { b.boltT = t < shrink ? 1.1 : .8; thunder(clampToArena(P.pos.clone(), .2), 2, 9, .95); }
        b.fanT -= dt; if (b.fanT <= 0 && t > shrink) { b.fanT = 1.9; b.spin += .5; for (let i = 0; i < 6; i++) { const yaw = b.spin + i * TAU / 6, c = fx.crescent({ color: [1.8, 1.3, .4], radius: 1.4, arc: 1.5 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw, speed: 7, r: .8, dmg: 9, life: 1.1, fxh: c, color: STORM, big: true }); } sfx('heavy'); }
      } },
    { dur: 1.6, anim: 'leap', start(b) { thunder(clampToArena(P.pos.clone(), .2), 4.4, 24, 1.7); sfx('ultCharge'); }, end(b) { if (b.cage) { b.cage.kill(); b.cage = null; } G.shock = 1; G.slow = .4; sfx('roar'); } },
    { dur: .2, anim: 'hurt', end(b) { b.invuln = false; G.bossUlt = false; b.stun = 3.4; b.poise = b.maxPoise; fx.ring(b.pos, 4, GOLD, .6); } },
  ];
  seq.cd = .4; startSeq(e, seq, 'ult');
}
function breakBoss(e) { cancelSeq(e); e.stun = 2.6; e.poise = e.maxPoise; fx.ring(e.pos, 4, GOLD, .6); G.shake = .5; G.slow = .25; sfx('parry'); }
function phaseTwo(e) {
  const two = e.kind === 'boss2', three = e.kind === 'boss3'; e.p2 = true; cancelSeq(e); e.stun = 0; e.invuln = true; world.setMood(1); R.grade.uniforms.uTint.value.set(two ? .02 : three ? .03 : .05, three ? .01 : 0, two ? .05 : three ? .05 : 0);
  startSeq(e, [{ dur: 1.5, anim: 'cast', start(b) { sfx('roar'); fx.ring(b.pos, 9, CRIM, .9); fx.burst(b.pos, 50, CRIM, 9, 6, .3, 1); G.shake = .6; sfx('boom'); const a = angTo(b.pos, P.pos); if (dist(b.pos, P.pos) < 7) P.kb.set(Math.sin(a) * 16, 0, Math.cos(a) * 16); showBanner('', b.kind === 'boss3' ? '「你一路上來，折了多少劍，自己數過嗎。」' : b.kind === 'boss2' ? '「劍還認得你。可惜我不認得。」' : '「三十年了。還有人敢上這座山。」', 3.2); }, end(b) { b.invuln = false; } }], 'p2'); e.seq.cd = .3;
}

function damageEnemy(e, dmg, o = {}) {
  if (e.dead || e.invuln || e.spawnT > 0) return false;
  const boss = e.isBoss, a = angTo(o.from, e.pos); let interrupted = false;
  if (!boss && e.seq && e.seq[e.si] && e.seq[e.si].anim !== 'idle' && e.si % 2 === 0 && e.t / e.seq[e.si].dur > .4) { interrupted = true; dmg *= 1.35; }   // hit late in the wind-up: the move breaks
  if (boss && e.stun > 0) dmg *= 1.3;
  e.hp -= dmg; e.hitstop = o.stop ?? .07; e.flash = .14; e.hits++; if (G.time - (e.lastHit || 0) > 1.2) e.chain = 0; e.lastHit = G.time;
  const c = { x: e.pos.x - Math.sin(a) * e.r * .8, y: boss ? 1.5 : 1.1, z: e.pos.z - Math.cos(a) * e.r * .8 };
  fx.sparks(c, a + (o.dir || 0) * 1.1, o.heavy ? 20 : 10, boss ? [2, 1.2, .6] : [1.2, 1.8, 1.1], o.heavy ? 12 : 8, .6);
  if (boss) { e.poise -= o.poise ?? (o.heavy ? 18 : 6); if (e.poise <= 0 && e.stun <= 0 && !e.invuln) breakBoss(e); if (!e.p2 && e.hp <= e.maxHp * .5 && e.hp > 0) phaseTwo(e); else if (e.p2 && !e.ulted && e.hp <= e.maxHp * .3 && e.hp > 0 && P.state !== 'ult') ({ boss2: boss2Ult, boss3: boss3Ult }[e.kind] || bossUlt)(e); }
  else if (e.kind === 'elite' && !o.heavy && !interrupted) { e.hitstop = Math.min(e.hitstop, .04); }      /* light hits do not stagger the elite: use heavy hits, skills or a parry */
  else if ((e.kind === 'melee' || e.kind === 'spirit') && !o.heavy && !o.noChain && !interrupted && ++e.chain >= 3 && e.hp > 0) {      /* third light hit in a row: it shrugs it off and answers */
    e.chain = 0; e.stun = 0; cancelSeq(e); e.yaw = angTo(e.pos, P.pos); fx.ring(e.pos, 1.5, AMBER, .3);
    const s = [wind(.4, { kind: 'fan', radius: 2.9, arc: 2.1, color: AMBER }, { dir: -1, track: .7 }), strike({ range: 2.9, arc: 2.1, dmg: 13, dir: -1, step: .6 }), rest(.8)]; s.cd = 1; startSeq(e, s, 'riposte');
  }
  else { if (!o.noChain) cancelSeq(e); e.stun = o.stun ?? (interrupted ? 1.1 : o.heavy ? .6 : .32); if (o.heavy || interrupted) e.chain = 0; const k = (o.kb ?? 1.2) * 6.5; e.kb.set(Math.sin(a) * k, 0, Math.cos(a) * k); if (interrupted) fx.ring(e.pos, 1.8, GOLD, .35); }
  if (e.hp <= 0) kill(e, a);
  return true;
}
function kill(e, a) {
  gainUlt(6); e.dead = true; e.hp = 0; cancelSeq(e); e.kb.set(Math.sin(a) * 9, 0, Math.cos(a) * 9); P.qi = Math.min(100, P.qi + 8); sfx('die');
  if (e.bar) { scene.remove(...e.bar); e.bar = null; }
  if (e.isBoss) { G.bossUlt = false; sfx('roar'); G.slow = 1.2; G.shake = .8; fx.ring(e.pos, 10, GOLD, 1.2); fx.burst(e.pos, 70, CRIM, 9, 7, .35, 1.4); world.setMood(0); R.grade.uniforms.uTint.value.set(0, 0, 0); G.projs.forEach((b) => { if (b.team === 'e') b.life = 0; }); after(2.6, () => (G.stage < 3 ? nextStage() : setMode('win'))); }
  else fx.burst(e.pos, 22, [.2, .5, .22], 3, 3, .4, .9);
}
function updateEnemy(e, dt) {
  e.idleT += dt; e.flash = Math.max(0, e.flash - dt);
  if (e.dead) { if (e.fly && e.deadT < 1.8) e.y = Math.max(0, e.y - dt * 7); e.deadT += dt; e.anim = 'dead'; e.animP = e.deadT / .6; move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-7 * dt)); if (e.deadT > 1.8) e.y = -(e.deadT - 1.8) * 1.4; return; }
  if (e.hitstop > 0) { e.hitstop -= dt; return; }
  if (e.spawnT > 0) { e.spawnT -= dt; e.y = -Math.max(0, e.spawnT) * 2; e.anim = 'idle'; return; }
  if (e.kb.lengthSq() > .02) { move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-8 * dt)); }
  e.rainCd = Math.max(0, (e.rainCd || 0) - dt);
  if (e.stun > 0) { e.stun -= dt; e.anim = 'hurt'; if (e.stun <= 0 && e.isBoss) e.cd = .35; return; }
  e.cd -= dt;
  if (e.seq) runSeq(e, dt); else if (G.intro <= 0) AI[e.kind](e, dt); else e.anim = 'idle';
}

function updateProjs(dt) {
  for (const b of G.projs) {
    if (b.homing) {      /* guided swords: chase the nearest enemy not struck in the last half second, come home at the end */
      b.hitT -= dt; if (b.hitT <= 0) { b.hit.clear(); b.hitT = .55; } let t = null, bd = 1e9;
      for (const e of G.enemies) if (!e.dead && e.spawnT <= 0 && !b.hit.has(e)) { const d = dist(b.pos, e.pos); if (d < bd) { bd = d; t = e; } }
      if (!t || b.life < .45) t = P; b.yaw = turn(b.yaw, angTo(b.pos, t.pos), dt * 9); if (b.life < .45 && dist(b.pos, P.pos) < 1) b.life = 0;
    }
    b.life -= dt; b.pos.x += Math.sin(b.yaw) * b.speed * dt; b.pos.z += Math.cos(b.yaw) * b.speed * dt;
    if (!b.homing && Math.hypot(b.pos.x, b.pos.z) > ARENA_R + 2.5) b.life = 0;
    const m = b.mesh || b.fxh.mesh; m.position.set(b.pos.x, 1.05, b.pos.z); m.rotation.y = b.yaw; if (b.mesh) { if (!b.sword) m.rotation.x += dt * 9; fx.p.spawn(b.pos.x, 1.05, b.pos.z, 0, .3, 0, .3, .3, b.color[0], b.color[1] * .5, b.color[2] * .5); }
    if (b.life <= 0) continue;
    if (b.team === 'e') {
      if (dist(b.pos, P.pos) < b.r + P.r) { const r = damagePlayer(b.dmg, { from: { x: b.pos.x - Math.sin(b.yaw), z: b.pos.z - Math.cos(b.yaw) }, src: b.src, proj: true });
        if (r === 'parry' && b.mesh) { b.team = 'p'; b.yaw += Math.PI; b.speed *= 1.7; b.dmg = 40; b.life = 2; b.hit = new Set(); b.mesh.material.color.setRGB(...GOLD); b.color = GOLD; }       // parried bolts fly back
        else if (r !== 'miss') b.life = 0; }
    } else for (const e of G.enemies) if (!e.dead && !b.hit.has(e) && dist(b.pos, e.pos) < b.r + e.r) { b.hit.add(e); if (damageEnemy(e, b.dmg, { from: { x: b.pos.x - Math.sin(b.yaw) * 2, z: b.pos.z - Math.cos(b.yaw) * 2 }, heavy: true, kb: 2, poise: 16, stop: .05 })) sfx('hit'); if (!b.pierce) { b.life = 0; break; } }
  }
  for (let i = G.projs.length - 1; i >= 0; i--) if (G.projs[i].life <= 0) { const b = G.projs[i]; if (b.mesh) { scene.remove(b.mesh); fx.burst(b.pos, 6, b.color, 3, 2, .2, .3, .9); } else b.fxh.kill(); G.projs.splice(i, 1); }
}
function separate() {
  const L = G.enemies.filter((e) => !e.dead && e.spawnT <= 0 && e.y < .5);
  for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) { const a = L[i], b = L[j], dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, d = Math.hypot(dx, dz) || .001, o = a.r + b.r + .15 - d; if (o > 0) { const wa = b.isBoss ? 1 : a.isBoss ? 0 : .5; a.pos.x -= dx / d * o * wa; a.pos.z -= dz / d * o * wa; b.pos.x += dx / d * o * (1 - wa); b.pos.z += dz / d * o * (1 - wa); } }
  const air = P.state === 'fly' || P.state === 'dive';
  if (P.state !== 'dodge' && P.state !== 'dead' && !air) for (const e of L) { const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z, d = Math.hypot(dx, dz) || .001, o = P.r + e.r - d; if (o > 0) { const w = e.isBoss ? 1 : .6; P.pos.x += dx / d * o * w; P.pos.z += dz / d * o * w; e.pos.x -= dx / d * o * (1 - w); e.pos.z -= dz / d * o * (1 - w); } }
  for (const e of L) clampToArena(e.pos, e.r); if (!air) clampToArena(P.pos, P.r);
}

// ---------- flow ----------
const bannerEl = $('banner'); let bannerT = 0;
function showBanner(h, p, dur = 3) { bannerEl.children[0].textContent = h; bannerEl.children[1].textContent = p; bannerEl.classList.add('on'); bannerT = dur; }
function setMode(m) { G.mode = m; document.body.classList.toggle('play', m === 'play'); for (const id of ['title', 'dead', 'win']) $(id).classList.toggle('on', id === m); }
function clearField() {
  for (const e of G.enemies) { scene.remove(e.body.root); if (e.bar) scene.remove(...e.bar); cancelSeq(e); } G.enemies.length = 0;
  for (const b of G.projs) { if (b.mesh) scene.remove(b.mesh); else b.fxh.kill(); } G.projs.length = 0; G.timers.length = 0; G.tokens.length = 0; G.boss = null; for (const r1 of rings) scene.remove(r1.g); rings.length = 0;
}
const WAVES = [['melee', 'melee', 'ranged'], ['melee', 'melee', 'ranged', 'ranged'], ['melee', 'melee', 'melee', 'ranged', 'elite']];      /* stage one is the gentle one: 12 enemies */
const WAVES2 = [['wolf', 'wolf', 'wolf', 'spirit', 'spirit'], ['wolf', 'wolf', 'wolf', 'frost', 'frost', 'spirit'], ['wolf', 'wolf', 'wolf', 'spirit', 'spirit', 'frost', 'frost']];
const WAVES3 = [['guard', 'guard', 'hawk', 'hawk'], ['guard', 'guard', 'hawk', 'hawk', 'thunder', 'thunder'], ['guard', 'guard', 'guard', 'hawk', 'hawk', 'thunder', 'thunder']];
const waves = () => [WAVES, WAVES2, WAVES3][G.stage - 1] || WAVES;
function spawnWave(i) {      /* each batch rises in a loose ring, never right on top of the player */
  G.waveIdx = i; const WV = waves(), n = WV[i].length, off = Math.random() * TAU;
  WV[i].forEach((k, j) => { let x = 0, z = 0; for (let t = 0; t < 12; t++) { const a = off + j / n * TAU + (Math.random() - .5) * .5, r = (k === 'ranged' || k === 'frost' || k === 'thunder' ? 10.5 : 8) + Math.random() * 1.5; x = Math.sin(a) * r; z = Math.cos(a) * r; if (Math.hypot(x - P.pos.x, z - P.pos.z) > 5) break; } const p = clampToArena(new THREE.Vector3(x, 0, z), .7); after(j * .12, () => spawn(k, p.x, p.z)); });
}
function startWave() { spawnWave(0); if (G.stage === 3) showBanner('雲巔天闕', '劍塚的盡頭是一道向上的石階，石階的盡頭在雲上面。', 3.8); else if (G.stage === 2) showBanner('寒潭劍塚', '山門之後，是一整片結了冰的劍。', 3.6); else showBanner('', '演武台上還有東西在動。', 3); }
function startBoss() {
  const n = G.stage, B = [['boss', CRIM, '厲無咎<small>墮劍尊</small>', '厲無咎', '守在這裡的，是當年親手關上山門的人。'], ['boss2', LAV, '霜晚<small>守塚人</small>', '霜晚', '她在這裡守了很久，久到忘了是在等誰。'], ['boss3', GOLDC, '玄霄<small>天闕之主</small>', '玄霄', '山門是他下令關的。劍塚裡的劍，是他一把一把收上來的。']][n - 1];
  G.phase = 'boss'; const b = G.boss = spawn(B[0], 0, -11.5); b.cd = .4; G.intro = 2.8; $('boss').classList.add('on'); sfx('boom'); G.shake = .3; fx.ring(b.pos, 6, B[1], 1.1);
  $('boss').firstElementChild.innerHTML = B[2]; showBanner(B[3], B[4], 3.6);
}
// stage one -> two: fade to black, swap the world, carry the player's state over with a partial heal
function nextStage() {
  const next = G.stage + 1; G.phase = 'travel'; G.fadeTo = 1; showBanner('', next === 3 ? '冰面裂開一道縫，縫裡是往上的石階。' : '山門開了。風是從門後吹來的。', 2.6);
  after(1.5, () => { clearField(); setStage(next); R.grade.uniforms.uTint.value.set(0, 0, 0); $('boss').classList.remove('on'); if (beast) beast.on = false; P.pos.set(0, 0, 7); P.yaw = Math.PI; P.kb.set(0, 0, 0); P.state = 'idle'; P.y = 0; P.hp = Math.min(P.maxHp, P.hp + 70); P.qi = Math.max(P.qi, 50); G.focus.set(0, 0, 5);
    G.fadeTo = 0; G.phase = 'wave'; G.waveAt = G.time; G.intro = 0; after(.6, startWave); });
}
function startGame(stage) {
  clearField(); Object.assign(P, { orbitT: 0, cdF: 0, cdC: 0, cdV: 0, lean: 0, ult: Q.has('ult') ? 100 : 0, hp: P.maxHp, st: 100, qi: 30, state: 'idle', hidden: false, t: 0, hitstop: 0, iframe: 1, buf: null, counterT: 0, cdQ: 0, cdE: 0, yaw: Math.PI, y: 0 }); P.pos.set(0, 0, 7); P.kb.set(0, 0, 0);
  setStage(/^(3|boss3)$/.test(stage || '') ? 3 : /^(2|boss2)$/.test(stage || '') ? 2 : 1); G.fadeTo = 0; G.bossUlt = false; if (beast) beast.on = false; world.setMood(0); R.grade.uniforms.uTint.value.set(0, 0, 0); $('boss').classList.remove('on'); G.slow = 0; G.intro = 0; setMode('play');
  if (/^boss/.test(stage || '')) startBoss(); else { G.phase = 'wave'; G.waveAt = G.time; startWave(); }
}
G.start = startGame;
function flow(dt) {
  const left = G.enemies.filter((e) => !e.dead).length, WV = waves();
  if (G.phase === 'wave' && G.waveIdx < WV.length - 1 && left <= 1 && G.time - (G.waveAt || 0) > 3) { G.waveAt = G.time; P.hp = Math.min(P.maxHp, P.hp + 20); fx.ring(P.pos, 2, [.4, 1.4, .7], .6); spawnWave(G.waveIdx + 1); showBanner('', G.stage === 3 ? (G.waveIdx === 1 ? '雲裡有翅膀的聲音。' : '鐘響了一聲，沒有人敲。') : G.stage === 2 ? (G.waveIdx === 1 ? '冰下有東西在翻身。' : '狼群還沒散。') : (G.waveIdx === 1 ? '符紙又亮了一片。' : '還沒完。'), 2.2); }
  else if (G.phase === 'wave' && G.waveIdx === WV.length - 1 && left === 0 && G.time - (G.waveAt || 0) > 3) { G.phase = 'lull'; P.hp = Math.min(P.maxHp, P.hp + 60); fx.ring(P.pos, 2.4, [.4, 1.4, .7], .8); after(2.4, startBoss); }
  G.intro = Math.max(0, G.intro - dt);
  for (let i = G.enemies.length - 1; i >= 0; i--) { const e = G.enemies[i]; if (e.dead && !e.isBoss && e.deadT > 3.2) { scene.remove(e.body.root); G.enemies.splice(i, 1); } }
}
/* sound starts on the first click or key press of any kind (browsers require a gesture), not only on the title click */
for (const ev of ['pointerdown', 'keydown']) addEventListener(ev, () => initAudio(Q.has('mute')), true);
initTouch(keys, pressed);
addEventListener('pointerdown', () => { if (!G.ready || isPortrait()) return; if (G.mode !== 'play') { initAudio(Q.has('mute')); startGame(G.mode === 'win' ? undefined : G.mode === 'dead' ? (G.boss ? ['boss', 'boss2', 'boss3'][G.stage - 1] : [undefined, '2', '3'][G.stage - 1]) : Q.get('stage'));      /* dying restarts the stage (or its boss) you were on */ pressed.delete('LMB'); } });

// ---------- camera, hud ----------
const CAM = new THREE.Vector3(0, 16.5, 11.8); camera.position.copy(G.focus).add(CAM); camera.lookAt(G.focus.x, 1, G.focus.z);
const ft = new THREE.Vector3();
function updateCamera(dt) {
  if (G.mode === 'title') ft.set(Math.sin(G.time * .12) * 2.5, 0, 2.5 + Math.cos(G.time * .09) * 1.5);
  else { ft.copy(P.pos); const b = G.boss; if (b && !b.dead) { const dx = b.pos.x - P.pos.x, dz = b.pos.z - P.pos.z, d = Math.hypot(dx, dz) || 1, k = G.intro > .6 ? Math.min(d * .75, 9) : Math.min(d * .22, 3); ft.x += dx / d * k; ft.z += dz / d * k; } ft.x += Math.max(-1, Math.min(1, (aim.x - P.pos.x) * .05)); ft.z += Math.max(-1, Math.min(1, (aim.z - P.pos.z) * .05)); }
  if (G.camO) { camera.position.copy(G.camO.pos); camera.lookAt(G.camO.look); return; }   /* test hook: close-up showcase camera */
  G.focus.lerp(ft, 1 - Math.exp(-dt * (G.intro > 0 ? 2.2 : 5))); G.shake = Math.max(0, G.shake - dt * 1.8);
  const ulting = P.state === 'ult' && G.mode === 'play', zt = (T.on ? .84 : 1) * (!ulting ? (P.state === 'fly' && G.mode === 'play' ? 1.1 : 1) : P.t < ULT.cut ? .82 : P.t < ULT.fin ? .94 : 1.18);      /* phones: camera a little closer */ G.zoom += (zt - G.zoom) * (1 - Math.exp(-dt * (zt > 1 ? 14 : 3.5)));
  const s = G.shake * G.shake * 1.6; camera.position.set(G.focus.x + CAM.x * G.zoom + (Math.random() - .5) * s, CAM.y * G.zoom + (Math.random() - .5) * s, G.focus.z + CAM.z * G.zoom + (Math.random() - .5) * s * .5);
  G.flash = Math.max(0, G.flash - dt * 3.4); const gu = R.grade.uniforms; gu.uFlash.value = G.flash * G.flash; gu.uExposure.value += ((ulting && P.t < ULT.fin ? (P.t < ULT.cut ? .56 : .34) : G.bossUlt ? .8 : 1.15) - gu.uExposure.value) * (1 - Math.exp(-dt * (ulting && P.t >= ULT.cut ? 22 : 6)));
  G.shock = Math.max(0, G.shock - dt * 2.2); gu.uShock.value = G.shock; gu.uMono.value += ((ulting && P.t >= ULT.cut - .04 && P.t < ULT.fin ? 1 : 0) - gu.uMono.value) * (1 - Math.exp(-dt * 30));
}
const fadeEl = $('fade');
const W = (el, v) => { el.style.width = (Math.max(0, Math.min(1, v)) * 100).toFixed(1) + '%'; };
const hud = { hp: $('hp').children, st: $('st').children, qi: $('qi').children, bhp: $('bhp').children, bpo: $('bpo').children, hurt: $('hurt'), counter: $('counter'), sq: $('s-q'), sf: $('s-f'), sc: $('s-c'), sv: $('s-v'), sfl: $('s-fly'), ur: $('s-r-ring'), se: $('s-e'), sd: $('s-dge'), sb: $('s-blk') };
function updateHud(dt) {
  W(hud.hp[0], P.hp / P.maxHp); W(hud.hp[1], P.hp / P.maxHp); W(hud.st[0], P.st / 100); W(hud.qi[0], P.qi / 100);
  const b = G.boss; if (b) { W(hud.bhp[0], b.hp / b.maxHp); W(hud.bhp[1], b.hp / b.maxHp); W(hud.bpo[0], b.poise / b.maxPoise); }
  G.hurtFlash = Math.max(0, (G.hurtFlash || 0) - dt * 2.2); hud.hurt.style.opacity = (G.hurtFlash * .7 + (P.hp < 30 && P.state !== 'dead' ? .18 + .1 * Math.sin(G.time * 6) : 0)).toFixed(2);
  hud.counter.classList.toggle('on', P.counterT > 0 && G.mode === 'play');
  hud.sv.classList.toggle('dim', P.qi < 45 || !GL.beast); hud.sv.lastElementChild.style.height = (P.cdV / 20 * 100) + '%';
  hud.sf.classList.toggle('dim', P.qi < 30); hud.sf.lastElementChild.style.height = (P.cdF / 6 * 100) + '%'; hud.sc.classList.toggle('dim', P.qi < 35 && P.orbitT <= 0); hud.sc.lastElementChild.style.height = (P.cdC / 12 * 100) + '%'; hud.sfl.classList.toggle('dim', P.qi < 8 && P.state !== 'fly'); hud.sfl.classList.toggle('active', P.state === 'fly');
  hud.sq.classList.toggle('dim', P.qi < 25); hud.sq.lastElementChild.style.height = (P.cdQ / 3.5 * 100) + '%';
  hud.se.classList.toggle('dim', P.qi < 50); hud.se.lastElementChild.style.height = (P.cdE / 8 * 100) + '%';
  hud.ur.style.setProperty('--p', P.ult.toFixed(0) + '%'); hud.ur.parentNode.classList.toggle('ready', P.ult >= 100);
  hud.sd.classList.toggle('dim', P.st < 18); hud.sb.classList.toggle('dim', P.st <= 0);
  if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) bannerEl.classList.remove('on'); }
}
function place(a, dt) {
  const B = a.body, j = a.hitstop > 0 && a !== P ? .05 : 0; B.root.position.set(a.pos.x + (Math.random() - .5) * j, a.y || 0, a.pos.z + (Math.random() - .5) * j); B.root.rotation.order = 'YXZ'; B.root.rotation.set(a.lean || 0, a.yaw, 0); B.root.visible = !a.hidden;
  if (!(a.hitstop > 0)) { if (B.pose) B.pose(a, dt); else poseBody(B, a, dt); }
  const f = a.flash > 0 ? a.flash / .14 : 0; if (a !== P) for (const m of B.mats) if (!m.userData.base) { m.emissive.setScalar(f * .9); }
  if (a.bar) { const y = 2.25 * B.s + (a.y || 0); a.bar[0].position.set(a.pos.x - .52, y, a.pos.z); a.bar[1].position.set(a.pos.x - .5, y, a.pos.z); a.bar[1].scale.x = Math.max(.001, a.hp / a.maxHp); const v = a.hp < a.maxHp && !a.dead; a.bar[0].visible = a.bar[1].visible = v; }
}

// ---------- loop ----------
function update(dt) {
  world.update(dt, G.time, G.focus);
  if (G.mode === 'play') {
    updateAim(); G.tokenCd = Math.max(0, G.tokenCd - dt);
    for (let i = G.timers.length - 1; i >= 0; i--) { const t = G.timers[i]; t.t -= dt; if (t.t <= 0) { G.timers.splice(i, 1); t.fn(); } }
    updatePlayer(dt); updateOrbit(dt); updateBeast(dt); const frozen = P.state === 'ult' && P.t < ULT.fin;
    for (const e of [...G.enemies]) { if (frozen && !e.dead) { e.flash = Math.max(0, e.flash - dt); e.hitstop = Math.max(0, e.hitstop - dt); if (e.kb.lengthSq() > .02) { move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-8 * dt)); } e.anim = 'hurt'; continue; } updateEnemy(e, dt); }
    separate(); if (!frozen) { updateProjs(dt); updateRings(dt); } flow(dt);
  } else { P.anim = P.state === 'dead' ? 'dead' : 'idle'; updateBeast(dt); }
  place(P, dt); for (const e of G.enemies) place(e, dt);
  board.visible = G.mode === 'play' && (P.state === 'fly' || P.state === 'dive'); if (board.visible) { board.position.set(P.pos.x, (P.y || 0) - .04, P.pos.z); board.rotation.order = 'YXZ'; board.rotation.set(-(P.lean || 0) * .6, P.yaw, 0); }
  if (world.lanterns.length && Math.random() < dt * 5) { const L = world.lanterns[Math.random() * 4 | 0].l.position; fx.p.spawn(L.x, 1.7, L.z, (Math.random() - .5) * .5, .7 + Math.random(), (Math.random() - .5) * .5, 1.6, .09, 2, .8, .25, -.3, .6); }
  music(G.mode !== 'play' ? 'explore' : G.phase === 'boss' && G.boss && !G.boss.dead ? ['boss', 'boss2', 'boss3'][G.stage - 1] : G.phase === 'wave' ? ['battle', 'battle2', 'battle3'][G.stage - 1] : 'explore');
  if (G.stage === 3 && G.boss && G.boss.p2 && !G.boss.dead && G.mode === 'play' && Math.random() < dt * .3) G.flash = Math.max(G.flash, .22);      /* the storm flickers */
  G.fade = (G.fade || 0) + ((G.fadeTo || 0) - (G.fade || 0)) * Math.min(1, dt * 3.2); fadeEl.style.opacity = G.fade.toFixed(3);
  fx.update(dt); updateCamera(dt); updateHud(dt);
}
let last = performance.now();
function frame(now, forced) {
  const real = forced ?? Math.min(.05, (now - last) / 1000); last = now; let dt = real;
  if (G.slow > 0) { G.slow -= real; dt *= .3; }
  G.time += dt; update(dt); if (!G.noRender) R.render(G.time); dbg(); endFrame();      /* G.noRender: logic-only stepping for long automated runs */
}
const dbg = debugPanel(() => `mode ${G.mode}/${G.phase}  state ${P.state}  t ${P.t.toFixed(2)}\npos ${P.pos.x.toFixed(1)},${P.pos.z.toFixed(1)}  rim ${(ARENA_R - Math.hypot(P.pos.x, P.pos.z)).toFixed(1)}\nhp ${P.hp | 0} st ${P.st | 0} qi ${P.qi | 0} ult ${P.ult | 0}  enemies ${alive().length}`);
// test hooks: advance frames by hand (hidden tabs do not animate), fake a key press, read state
G.step = (n = 60, dt = 1 / 60) => { for (let i = 0; i < n; i++) frame(0, dt); };
G.clamp = clampToArena; G.music = musicState; G.audio = audioProbe; G.press = (...c) => c.forEach((k) => pressed.add(k)); G.keys = keys; G.mouse = mouse; G.aim = aim; G.R = R; G.world = world;
G.state = () => ({ stage: G.stage, mode: G.mode, phase: G.phase, p: { s: P.state, hp: Math.round(P.hp), st: Math.round(P.st), qi: Math.round(P.qi), x: +P.pos.x.toFixed(2), z: +P.pos.z.toFixed(2) }, e: G.enemies.map((e) => ({ k: e.kind, hp: Math.round(e.hp), x: +e.pos.x.toFixed(1), z: +e.pos.z.toFixed(1), dead: e.dead, seq: e.seq ? e.last + ':' + e.si : '', stun: +e.stun.toFixed(2) })), projs: G.projs.length, fx: fx.items.length });

G.ready = true; $('go').textContent = '點擊開始';
if (Q.has('auto')) startGame(Q.get('stage'));
/* G.paused freezes time but keeps drawing, so a hand-stepped moment can be screenshotted */
(function loop(now) { if (G.paused || isPortrait()) { last = now; R.render(G.time); } else frame(now); requestAnimationFrame(loop); })(performance.now());
