// 霜月問劍 — top-down wuxia action: one arena, one wave, one boss.
import * as THREE from 'three';
import { keys, pressed, mouse, endFrame, debugPanel } from './input.js';
import { createRender } from './render.js';
import { buildWorld, clampToArena, ARENA_R } from './world.js';
import { FX } from './fx.js';
import { makeBody, poseBody } from './body.js';
import { initAudio, sfx, music, musicState } from './audio.js';
import { loadGLB, makeCharBody } from './chars.js';

const Q = new URLSearchParams(location.search), $ = (id) => document.getElementById(id);
const R = createRender($('c')), { scene, camera } = R;
const world = buildWorld(scene), fx = new FX(scene);
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

const G = window.G = { mode: 'title', phase: 'wave', time: 0, shake: 0, slow: 0, token: null, tokenCd: 0, enemies: [], projs: [], timers: [], boss: null, god: Q.has('god'), zoom: 1, flash: 0, shock: 0, fx, focus: new THREE.Vector3(0, 0, 3), intro: 0 };
const after = (t, fn) => G.timers.push({ t, fn });

// ---------- generated characters (fall back to the stand-in bodies when a file is missing) ----------
const CH = {
  player: { h: 1.78, runTs: .95, weapon: 'w_jian', weaponLen: 1.2, clips: { idle: 'human_000090', guard: 'human_000040', run: 'human_000067', hit: 'human_000026', death: 'human_000068', roll: 'human_000042' } },
  melee: { h: 1.75, runTs: 1.65, borrow: (GL) => ({ run: [GL.ranged, 'human_000089'] }), weapon: 'w_dao', weaponLen: 1.05, clips: { idle: 'human_000071', guard: 'human_000040', run: 'human_000053', hit: 'human_000026', death: 'human_000011' } },
  ranged: { h: 1.72, runTs: 1.6, clips: { idle: 'human_000090', guard: 'human_000090', run: 'human_000089', hit: 'human_000026', death: 'human_000081' } },
  boss: { h: 2.6, runTs: 1.3, weapon: 'w_great', weaponLen: 2.5, clips: { idle: 'human_000040', guard: 'human_000040', run: 'human_000089', hit: 'human_000003', death: 'human_000074' } },
};
const GL = {};
if (!Q.has('standin')) await Promise.all(['player', 'melee', 'ranged', 'boss', 'w_jian', 'w_dao', 'w_great', 'lantern', 'pillar_tall', 'pillar_broken', 'pillar_fallen', 'burner', 'gate'].map(async (n) => { GL[n] = await loadGLB(`assets/models/${n}.glb`); }));
const bodyFor = (kind, standIn) => (GL[kind] ? makeCharBody(GL[kind], { ...CH[kind], weapon: GL[CH[kind].weapon] || null, borrow: CH[kind].borrow ? CH[kind].borrow(GL) : null }) : makeBody(standIn));
G.GL = GL; world.useProps(GL);

// ---------- player ----------
const ATK = [
  { dur: .42, hit: .12, cancel: .25, range: 2.75, arc: 2.3, dmg: 14, lunge: 2.4, stop: .065, kb: 1.0, dir: 1 },
  { dur: .44, hit: .12, cancel: .26, range: 2.85, arc: 2.4, dmg: 15, lunge: 2.4, stop: .065, kb: 1.2, dir: -1 },
  { dur: .72, hit: .27, cancel: .52, range: 3.3, arc: 1.3, dmg: 30, lunge: 3.2, stop: .12, kb: 3.0, dir: -1, tilt: 1.32, heavy: true },
];
const P = G.player = {
  pos: new THREE.Vector3(0, 0, 7), yaw: Math.PI, r: .45, hp: 120, maxHp: 120, st: 100, qi: 30, state: 'idle', t: 0, dur: 0, combo: 0, hitstop: 0, iframe: 0,
  ult: Q.has('ult') ? 100 : 0, buf: null, bufT: 0, parryT: 9, counterT: 0, counterFrom: null, cdQ: 0, cdE: 0, kb: new THREE.Vector3(), anim: 'idle', animP: 0, phase: 0, idleT: 0, y: 0,
  body: bodyFor('player', { h: 1.75, robe: 0xdde6e8, trim: 0x2b7480, skin: 0xd8b99b, dark: 0x1c2230, bun: true, weapon: { len: 1.15, w: .05, color: 0xcfe9ee, glow: 0x0c3a40 } }),
};
scene.add(P.body.root);
const ray = new THREE.Raycaster(), ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), aim = new THREE.Vector3(0, 0, 0), m2 = new THREE.Vector2();
function updateAim() { m2.set(mouse.x, mouse.y); ray.setFromCamera(m2, camera); if (!ray.ray.intersectPlane(ground, aim)) aim.copy(P.pos); }
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
  P.state = 'dodge'; P.t = 0; P.iframe = .3; P.st -= 18; P.hitstop = 0; P.perfect = false; P.buf = null; sfx('dodge');
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
  if (P.state === 'dead') { P.t += dt; P.anim = 'dead'; P.animP = P.t / .7; return; }
  if (pressed.has('LMB')) setBuf('atk'); if (pressed.has('Space')) setBuf('dodge'); if (pressed.has('KeyQ')) setBuf('q'); if (pressed.has('KeyE')) setBuf('e'); if (pressed.has('KeyR')) setBuf('r');
  P.bufT -= dt; if (P.bufT <= 0) P.buf = null;
  P.iframe = Math.max(0, P.iframe - dt); P.cdQ = Math.max(0, P.cdQ - dt); P.cdE = Math.max(0, P.cdE - dt); P.counterT = Math.max(0, P.counterT - dt);
  const mx = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0), mz = (keys.has('KeyS') ? 1 : 0) - (keys.has('KeyW') ? 1 : 0), ml = Math.hypot(mx, mz), aimYaw = angTo(P.pos, aim);
  if (P.buf === 'dodge' && P.st >= 18 && P.state !== 'hurt' && P.state !== 'counter' && P.state !== 'dodge' && P.state !== 'ult') startDodge(mx, mz);     // dodge cuts through everything, hitstop included
  if (P.hitstop > 0) { P.hitstop -= dt; return; }
  if (P.kb.lengthSq() > .02) { move(P, P.kb.x * dt, P.kb.z * dt); P.kb.multiplyScalar(Math.exp(-9 * dt)); }
  const regen = (k) => { P.st = Math.min(100, P.st + k * dt); };
  const tryActions = () => {
    if (P.buf === 'r' && P.ult >= 100) { startUlt(); return true; }
    if (P.buf === 'atk') { P.buf = null; if (P.counterT > 0 && P.counterFrom && !P.counterFrom.dead) startCounter(); else startAttack(0); return true; }
    if (P.buf === 'q' && P.cdQ <= 0 && P.qi >= 25) { P.buf = null; P.qi -= 25; P.cdQ = 3.5; P.state = 'skill'; P.skill = 'q'; P.t = 0; P.hitDone = false; P.yaw = aimYaw; sfx('cast'); return true; }
    if (P.buf === 'e' && P.cdE <= 0 && P.qi >= 50) { P.buf = null; P.qi -= 50; P.cdE = 8; P.state = 'skill'; P.skill = 'e'; P.t = 0; P.hitDone = false; P.yaw = aimYaw; sfx('cast'); return true; }
    return false;
  };
  switch (P.state) {
    case 'idle':
      if (tryActions()) break;
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
      for (const e of [...G.enemies]) if (!e.dead && dist(tp, e.pos) < 1.7 + e.r) damageEnemy(e, 13, { from: { x: tp.x - Math.sin(a), z: tp.z - Math.cos(a) }, heavy: true, stop: .05, kb: .3, poise: 4 }); });
  });
  for (let j = 0; j < ULT.cuts; j++) after(ULT.cut + j * ULT.cutGap, () => {                                /* the unseen cuts: he is gone, only lines of light cross the yard */
    const yaw = j * 2.4 + Math.random() * .5, o = Math.random() * 3, a = Math.random() * TAU, mid = { x: c.x + Math.sin(a) * o, z: c.z + Math.cos(a) * o };
    fx.lineSlash(mid, yaw, 21, .6, [1.6, 2.4, 2.6], .34); fx.lineSlash(mid, yaw, 21, 1.6, [.1, .3, .36], .5, .08); G.shake = Math.max(G.shake, .36); sfx('swing'); sfx('ultHit');
    for (const e of [...G.enemies]) if (!e.dead && dist(c, e.pos) < 10.5 + e.r) damageEnemy(e, 5, { from: mid, heavy: true, stop: .03, kb: .2, poise: 2, dir: j % 2 ? 1 : -1 });
  });
}

// Something hits the player. o: { from, src (attacker), unblockable, proj }. Returns 'hit' | 'block' | 'parry' | 'miss'.
function damagePlayer(dmg, o) {
  if (P.state === 'dead') return 'miss';
  if (P.iframe > 0) { if (P.state === 'dodge' && !P.perfect) { P.perfect = true; gainUlt(8); P.qi = Math.min(100, P.qi + 12); P.st = Math.min(100, P.st + 18); G.slow = .16; fx.ring(P.pos, 1.8, TEAL, .35); } return 'miss'; }
  const a = angTo(P.pos, o.from);
  if (P.state === 'block' && !o.unblockable && Math.abs(angDiff(a, P.yaw)) < 1.75) {
    const c = { x: P.pos.x + Math.sin(a) * .7, y: 1.2, z: P.pos.z + Math.cos(a) * .7 };
    if (P.parryT < .24) {
      fx.sparks(c, a, 26, GOLD, 11, 1.4); fx.ring(P.pos, 2.4, GOLD, .4); sfx('parry'); G.shake = .22; G.slow = .12; gainUlt(14); P.qi = Math.min(100, P.qi + 18); P.hitstop = .08;
      if (o.src && !o.src.dead) { P.counterT = 1.25; P.counterFrom = o.src; if (o.src.kind === 'boss') { o.src.poise -= 36; o.src.hitstop = .16; if (o.src.poise <= 0) breakBoss(o.src); else if (!o.proj) { cancelSeq(o.src); o.src.stun = .9; } } else if (!o.proj) { cancelSeq(o.src); o.src.stun = 1.5; o.src.hitstop = .12; } }
      return 'parry';
    }
    P.st -= dmg * 1.5; P.kb.set(-Math.sin(a) * 4, 0, -Math.cos(a) * 4); fx.sparks(c, a, 9, [1.6, 1.5, 1.3], 6, 1.2); sfx('block'); G.shake = .1;
    if (P.st <= 0) { P.st = 0; P.state = 'hurt'; P.t = 0; P.dur = .8; sfx('hurt'); } else if (o.src && !o.src.dead && !o.proj) { P.counterT = .85; P.counterFrom = o.src; }
    return 'block';
  }
  if (!G.god) P.hp -= dmg;
  P.state = 'hurt'; P.t = 0; P.dur = .32; P.iframe = .75; P.kb.set(-Math.sin(a) * 7, 0, -Math.cos(a) * 7); G.shake = .4; G.hurtFlash = 1; sfx('hurt'); P.counterT = 0;
  fx.sparks({ x: P.pos.x, y: 1.1, z: P.pos.z }, a + Math.PI, 10, [1.8, .25, .2], 6, 1.2);
  if (P.hp <= 0) { P.hp = 0; P.state = 'dead'; P.t = 0; G.slow = .6; sfx('die'); after(1.6, () => setMode('dead')); }
  return 'hit';
}

// ---------- enemies ----------
const KINDS = {
  melee: { hp: 70, speed: 3.0, r: .5, body: { h: 1.72, bulk: 1.05, robe: 0x55594f, trim: 0x6a4a35, skin: 0x8d978a, talisman: true, weapon: { len: .95, w: .08, color: 0x6d6258 } } },
  ranged: { hp: 46, speed: 2.9, r: .45, body: { h: 1.66, bulk: .86, robe: 0x40203f, trim: 0x8c1f2a, skin: 0xe6e2da, hat: true } },
  boss: { hp: 1600, speed: 3.4, r: 1.0, poise: 100, body: { h: 2.55, bulk: 1.38, robe: 0x1d1418, trim: 0x7d1a22, skin: 0xa58d80, dark: 0x15131a, metal: 0x2b2a30, pauldron: true, horn: true, weapon: { len: 2.3, w: .17, color: 0x26242b, glow: 0x3a0508 } } },
};
function spawn(kind, x, z) {
  const D = KINDS[kind];
  const e = { kind, pos: new THREE.Vector3(x, 0, z), yaw: angTo({ x, z }, P.pos), r: D.r, hp: D.hp, maxHp: D.hp, speed: D.speed, poise: D.poise || 0, maxPoise: D.poise || 0, stun: 0, hitstop: 0, flash: 0, kb: new THREE.Vector3(),
    seq: null, si: 0, t: 0, cd: .6 + Math.random() * 1.6, anim: 'idle', animP: 0, phase: Math.random() * 6, idleT: Math.random() * 6, y: 0, spawnT: kind === 'boss' ? 0 : .9, strafe: Math.random() < .5 ? 1 : -1, dead: false, deadT: 0, body: bodyFor(kind, D.body), last: '', hits: 0, chain: 0 };
  scene.add(e.body.root);
  if (kind !== 'boss') {
    const bg = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x06090c, opacity: .75, transparent: true, depthTest: false })), fill = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xc8463c, depthTest: false }));
    bg.center.set(0, .5); fill.center.set(0, .5); bg.scale.set(1.04, .1, 1); fill.scale.set(1, .06, 1); bg.renderOrder = 8; fill.renderOrder = 9; scene.add(bg, fill); e.bar = [bg, fill];
    fx.ring(e.pos, 1.6, [.35, 1.1, .4], .8); fx.burst(e.pos, 16, [.12, .3, .14], 1.6, 2.2, .5, 1, .1);
  }
  G.enemies.push(e); return e;
}
G.spawn = spawn;
function cancelSeq(e) { if (e.tele) { e.tele.cancel(); e.tele = null; } if (e.teles) { e.teles.forEach((t) => t.cancel()); e.teles = null; } e.seq = null; e.y = 0; if (G.token === e) { G.token = null; G.tokenCd = .5; } }
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
  tick(e, p, dt) { if (p < (o.track ?? .55)) { e.yaw = turn(e.yaw, angTo(e.pos, P.pos), dt * 7); e.tele && e.tele.set(e.pos, e.yaw); } if (e.kind === 'boss' && e.body.weapon.userData.blade) { const m = e.body.weapon.userData.blade; m.emissive.setRGB(.5 * p, .03 * p, .04 * p); } },
  end(e) { e.tele = null; },
});
const strike = (o) => ({
  dur: o.dur ?? .22, anim: 'swing', dir: o.dir, tilt: o.tilt,
  start(e) {
    if (o.step) move(e, Math.sin(e.yaw) * o.step, Math.cos(e.yaw) * o.step);
    fx.slash({ pos: e.pos, yaw: e.yaw, radius: o.range, arc: o.arc, dir: o.dir ?? 1, tilt: o.tilt, color: o.color ?? AMBER, dur: .3, width: o.width ?? .45, y: e.kind === 'boss' ? 1.5 : 1.05 }); sfx(e.kind === 'boss' ? 'heavy' : 'swing');
    if (inFan(e.pos, e.yaw, P.pos, o.range, o.arc, .35)) { const r = damagePlayer(o.dmg, { from: e.pos, src: e }); if (r === 'hit') e.hitstop = .07; }
    if (e.kind === 'boss' && e.body.weapon.userData.blade) e.body.weapon.userData.blade.emissive.setRGB(0, 0, 0);
  },
});
const rest = (dur) => ({ dur, anim: 'idle' });

function meleeSeq() { const t = { kind: 'fan', radius: 2.7, arc: 1.9, color: AMBER }, s = [wind(.6, t, { dir: 1 }), strike({ range: 2.7, arc: 1.9, dmg: 11, dir: 1, step: .5 }), wind(.42, t, { dir: -1, track: .4 }), strike({ range: 2.7, arc: 1.9, dmg: 11, dir: -1, step: .7 }), rest(.9)]; s.cd = 1.2; return s; }
function fireBolt(e, yaw, o = {}) {
  const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(o.size ?? .22, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(...(o.color ?? [2.4, .35, .3])) })); scene.add(mesh);
  G.projs.push({ team: 'e', src: e, pos: new THREE.Vector3(e.pos.x + Math.sin(yaw) * (e.r + .5), 0, e.pos.z + Math.cos(yaw) * (e.r + .5)), yaw, speed: o.speed ?? 11, r: o.r ?? .35, dmg: o.dmg ?? 10, life: 3, cut: true, mesh, color: CRIM }); sfx('bolt');
}
function rangedSeq() { const s = [wind(.95, { kind: 'line', length: 13, width: .7, color: CRIM }, { track: .72 }), { dur: .3, anim: 'cast', start(e) { fireBolt(e, e.yaw); } }, rest(.5)]; s[0].anim = 'cast'; s.cd = 2.4 + Math.random(); return s; }

function walk(e, ang, speed, dt) { move(e, Math.sin(ang) * speed * dt, Math.cos(ang) * speed * dt); e.anim = 'run'; e.phase += dt * speed * 2.6; }
const AI = {
  melee(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.yaw = turn(e.yaw, a, dt * 8);
    if (!G.token && G.tokenCd <= 0 && e.cd <= 0 && d < 10) G.token = e;                         // only one melee attacker at a time
    if (G.token === e) { if (d > 2.0) walk(e, a, e.speed, dt); else startSeq(e, meleeSeq()); return; }
    const want = 4.9, rad = d > want + .5 ? 1 : d < want - .5 ? -1 : 0, ta = a + e.strafe * Math.PI / 2;
    move(e, (Math.sin(a) * rad * .9 + Math.sin(ta) * .55) * e.speed * .6 * dt, (Math.cos(a) * rad * .9 + Math.cos(ta) * .55) * e.speed * .6 * dt); e.anim = 'run'; e.phase += dt * 6;
    if (Math.random() < dt * .3) e.strafe *= -1;
  },
  ranged(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos); e.yaw = turn(e.yaw, a, dt * 8);
    if (e.cd <= 0 && d < 13) { startSeq(e, rangedSeq()); return; }
    if (d < 5.5) walk(e, a + Math.PI + e.strafe * .5, e.speed, dt); else if (d > 10.5) walk(e, a, e.speed, dt); else { walk(e, a + e.strafe * Math.PI / 2, e.speed * .45, dt); if (Math.random() < dt * .4) e.strafe *= -1; }
  },
  boss(e, dt) {
    const d = dist(e.pos, P.pos), a = angTo(e.pos, P.pos), p2 = e.p2; e.yaw = turn(e.yaw, a, dt * 6);
    if (e.cd > 0) { if (d > 3.4) walk(e, a, e.speed * (p2 ? 1.15 : 1), dt); else { walk(e, a + e.strafe * Math.PI / 2, e.speed * .35, dt); } return; }
    const opts = []; if (d < 5.2) opts.push(['combo', 3], ['slam', 1]); else opts.push(['slam', 2], ['waves', 2.2], ['combo', d < 8 ? 1 : 0]);
    if (p2) opts.push(['rain', e.rainCd > 0 ? 0 : 2.4]);
    let tot = 0; for (const o of opts) { if (o[0] === e.last) o[1] *= .25; tot += o[1]; } let r = Math.random() * tot, pick = opts[0][0]; for (const o of opts) { r -= o[1]; if (r <= 0) { pick = o[0]; break; } }
    startSeq(e, BOSS[pick](e), pick);
  },
};
const BOSS = {
  combo(e) {
    const f = e.p2 ? .82 : 1, t = { kind: 'fan', radius: 4.4, arc: 2.2, color: AMBER }, k = { range: 4.4, arc: 2.2, dmg: 17, width: .5 };
    const s = [wind(.7 * f, t, { dir: 1 }), strike({ ...k, dir: 1, step: 1.3 }), wind(.48 * f, t, { dir: -1, track: .45 }), strike({ ...k, dir: -1, step: 1.5 }),
      wind(.62 * f, { kind: 'fan', radius: 5, arc: 1.1, color: AMBER }, { tilt: 1, track: .5 }), strike({ range: 5, arc: 1.1, dmg: 24, dir: -1, tilt: 1.35, step: 1.6, width: .6, dur: .3 }), rest(1.25 * f)];
    s.cd = e.p2 ? .5 : .9; return s;
  },
  slam(e) {
    const s = [{ dur: e.p2 ? .9 : 1.05, anim: 'leap',
      start(b) { b.from = b.pos.clone(); b.to = clampToArena(P.pos.clone(), b.r); b.tele = fx.telegraph({ kind: 'circle', pos: b.to, radius: 3.7, dur: this.dur, color: CRIM }); },
      tick(b, p) { if (p > .28) { const u = (p - .28) / .72, q = u * u * (3 - 2 * u); b.pos.lerpVectors(b.from, b.to, q); b.y = Math.sin(u * Math.PI) * 3.4; b.yaw = angTo(b.from, b.to) || b.yaw; } },
      end(b) { b.y = 0; b.tele = null; fx.ring(b.pos, 5.2, CRIM, .6); fx.crack(b.pos, 3.7, CRIM, 3.5); fx.burst(b.pos, 40, [1.2, .5, .3], 8, 5, .34, .8, .2); G.shake = .7; sfx('boom'); if (dist(b.pos, P.pos) < 3.7 + P.r) damagePlayer(26, { from: b.pos, src: b, unblockable: true }); } }, rest(e.p2 ? .9 : 1.25)];
    s.cd = .8; return s;
  },
  waves(e) {
    const n = e.p2 ? 5 : 3, sp = .3, s = [{ dur: .9, anim: 'cast',
      start(b) { b.yaw = angTo(b.pos, P.pos); b.teles = []; for (let i = 0; i < n; i++) b.teles.push(fx.telegraph({ kind: 'line', pos: b.pos, yaw: b.yaw + (i - (n - 1) / 2) * sp, length: 15, width: 1.7, dur: .9, color: AMBER })); },
      end(b) { b.teles = null; for (let i = 0; i < n; i++) { const yaw = b.yaw + (i - (n - 1) / 2) * sp, c = fx.crescent({ color: [1.7, .3, .2], radius: 1.7, arc: 1.7 }); G.projs.push({ team: 'e', src: b, pos: b.pos.clone(), yaw, speed: 13, r: .95, dmg: 15, life: 1.6, fxh: c, color: CRIM, big: true }); } sfx('heavy'); G.shake = .2; } }, rest(.85)];
    s.cd = .7; return s;
  },
  rain(e) {
    e.rainCd = 11; const s = [{ dur: 2.5, anim: 'cast',
      start(b) { fx.ring(b.pos, 3, CRIM, .7); for (let i = 0; i < 7; i++) after(.15 + i * .3, () => { if (b.dead || P.state === 'dead') return; const o = i ? Math.random() * 1.6 : 0, a = Math.random() * TAU, tp = clampToArena(new THREE.Vector3(P.pos.x + Math.sin(a) * o, 0, P.pos.z + Math.cos(a) * o), .2);
        fx.telegraph({ kind: 'circle', pos: tp, radius: 2.1, dur: .85, color: CRIM }); fx.fallSword(tp, [2, .3, .25], .85, .9);
        after(.85, () => { fx.ring(tp, 3, CRIM, .45); fx.crack(tp, 2.1, CRIM, 2.2); fx.burst(tp, 14, CRIM, 5, 4, .26, .6, .2); G.shake = Math.max(G.shake, .25); sfx('boom'); if (dist(tp, P.pos) < 2.1 + P.r * .5) damagePlayer(16, { from: tp, unblockable: true }); }); }); } }, rest(.7)];
    s.cd = .6; return s;
  },
};
function breakBoss(e) { cancelSeq(e); e.stun = 2.6; e.poise = e.maxPoise; fx.ring(e.pos, 4, GOLD, .6); G.shake = .5; G.slow = .25; sfx('parry'); }
function phaseTwo(e) {
  e.p2 = true; cancelSeq(e); e.stun = 0; e.invuln = true; world.setMood(1); R.grade.uniforms.uTint.value.set(.05, 0, 0);
  startSeq(e, [{ dur: 1.5, anim: 'cast', start(b) { sfx('roar'); fx.ring(b.pos, 9, CRIM, .9); fx.burst(b.pos, 50, CRIM, 9, 6, .3, 1); G.shake = .6; sfx('boom'); const a = angTo(b.pos, P.pos); if (dist(b.pos, P.pos) < 7) P.kb.set(Math.sin(a) * 16, 0, Math.cos(a) * 16); showBanner('', '「三十年了。還有人敢上這座山。」', 3.2); }, end(b) { b.invuln = false; } }], 'p2'); e.seq.cd = .3;
}

function damageEnemy(e, dmg, o = {}) {
  if (e.dead || e.invuln || e.spawnT > 0) return false;
  const boss = e.kind === 'boss', a = angTo(o.from, e.pos); let interrupted = false;
  if (!boss && e.seq && e.seq[e.si] && e.seq[e.si].anim !== 'idle' && e.si % 2 === 0 && e.t / e.seq[e.si].dur > .4) { interrupted = true; dmg *= 1.35; }   // hit late in the wind-up: the move breaks
  if (boss && e.stun > 0) dmg *= 1.3;
  e.hp -= dmg; e.hitstop = o.stop ?? .07; e.flash = .14; e.hits++; if (G.time - (e.lastHit || 0) > 1.2) e.chain = 0; e.lastHit = G.time;
  const c = { x: e.pos.x - Math.sin(a) * e.r * .8, y: boss ? 1.5 : 1.1, z: e.pos.z - Math.cos(a) * e.r * .8 };
  fx.sparks(c, a + (o.dir || 0) * 1.1, o.heavy ? 20 : 10, boss ? [2, 1.2, .6] : [1.2, 1.8, 1.1], o.heavy ? 12 : 8, .6);
  if (boss) { e.poise -= o.poise ?? (o.heavy ? 18 : 6); if (e.poise <= 0 && e.stun <= 0 && !e.invuln) breakBoss(e); if (!e.p2 && e.hp <= e.maxHp * .5 && e.hp > 0) phaseTwo(e); }
  else if (e.kind === 'melee' && !o.heavy && !interrupted && ++e.chain >= 3 && e.hp > 0) {      /* third light hit in a row: it shrugs it off and answers */
    e.chain = 0; e.stun = 0; cancelSeq(e); e.yaw = angTo(e.pos, P.pos); fx.ring(e.pos, 1.5, AMBER, .3);
    const s = [wind(.4, { kind: 'fan', radius: 2.9, arc: 2.1, color: AMBER }, { dir: -1, track: .7 }), strike({ range: 2.9, arc: 2.1, dmg: 13, dir: -1, step: .6 }), rest(.8)]; s.cd = 1; startSeq(e, s, 'riposte');
  }
  else { cancelSeq(e); e.stun = interrupted ? 1.1 : o.heavy ? .6 : .32; if (o.heavy || interrupted) e.chain = 0; const k = (o.kb ?? 1.2) * 6.5; e.kb.set(Math.sin(a) * k, 0, Math.cos(a) * k); if (interrupted) fx.ring(e.pos, 1.8, GOLD, .35); }
  if (e.hp <= 0) kill(e, a);
  return true;
}
function kill(e, a) {
  gainUlt(6); e.dead = true; e.hp = 0; cancelSeq(e); e.kb.set(Math.sin(a) * 9, 0, Math.cos(a) * 9); P.qi = Math.min(100, P.qi + 8); sfx('die');
  if (e.bar) { scene.remove(...e.bar); e.bar = null; }
  if (e.kind === 'boss') { sfx('roar'); G.slow = 1.2; G.shake = .8; fx.ring(e.pos, 10, GOLD, 1.2); fx.burst(e.pos, 70, CRIM, 9, 7, .35, 1.4); world.setMood(0); R.grade.uniforms.uTint.value.set(0, 0, 0); G.projs.forEach((b) => { if (b.team === 'e') b.life = 0; }); after(2.6, () => setMode('win')); }
  else fx.burst(e.pos, 22, [.2, .5, .22], 3, 3, .4, .9);
}
function updateEnemy(e, dt) {
  e.idleT += dt; e.flash = Math.max(0, e.flash - dt);
  if (e.dead) { e.deadT += dt; e.anim = 'dead'; e.animP = e.deadT / .6; move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-7 * dt)); if (e.deadT > 1.8) e.y = -(e.deadT - 1.8) * 1.4; return; }
  if (e.hitstop > 0) { e.hitstop -= dt; return; }
  if (e.spawnT > 0) { e.spawnT -= dt; e.y = -Math.max(0, e.spawnT) * 2; e.anim = 'idle'; return; }
  if (e.kb.lengthSq() > .02) { move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-8 * dt)); }
  e.rainCd = Math.max(0, (e.rainCd || 0) - dt);
  if (e.stun > 0) { e.stun -= dt; e.anim = 'hurt'; if (e.stun <= 0 && e.kind === 'boss') e.cd = .35; return; }
  e.cd -= dt;
  if (e.seq) runSeq(e, dt); else if (G.intro <= 0) AI[e.kind](e, dt); else e.anim = 'idle';
}

function updateProjs(dt) {
  for (const b of G.projs) {
    b.life -= dt; b.pos.x += Math.sin(b.yaw) * b.speed * dt; b.pos.z += Math.cos(b.yaw) * b.speed * dt;
    if (Math.hypot(b.pos.x, b.pos.z) > ARENA_R + 2.5) b.life = 0;
    const m = b.mesh || b.fxh.mesh; m.position.set(b.pos.x, 1.05, b.pos.z); m.rotation.y = b.yaw; if (b.mesh) { m.rotation.x += dt * 9; fx.p.spawn(b.pos.x, 1.05, b.pos.z, 0, .3, 0, .3, .3, b.color[0], b.color[1] * .5, b.color[2] * .5); }
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
  for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) { const a = L[i], b = L[j], dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, d = Math.hypot(dx, dz) || .001, o = a.r + b.r + .15 - d; if (o > 0) { const wa = b.kind === 'boss' ? 1 : a.kind === 'boss' ? 0 : .5; a.pos.x -= dx / d * o * wa; a.pos.z -= dz / d * o * wa; b.pos.x += dx / d * o * (1 - wa); b.pos.z += dz / d * o * (1 - wa); } }
  if (P.state !== 'dodge' && P.state !== 'dead') for (const e of L) { const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z, d = Math.hypot(dx, dz) || .001, o = P.r + e.r - d; if (o > 0) { const w = e.kind === 'boss' ? 1 : .6; P.pos.x += dx / d * o * w; P.pos.z += dz / d * o * w; e.pos.x -= dx / d * o * (1 - w); e.pos.z -= dz / d * o * (1 - w); } }
  for (const e of L) clampToArena(e.pos, e.r); clampToArena(P.pos, P.r);
}

// ---------- flow ----------
const bannerEl = $('banner'); let bannerT = 0;
function showBanner(h, p, dur = 3) { bannerEl.children[0].textContent = h; bannerEl.children[1].textContent = p; bannerEl.classList.add('on'); bannerT = dur; }
function setMode(m) { G.mode = m; document.body.classList.toggle('play', m === 'play'); for (const id of ['title', 'dead', 'win']) $(id).classList.toggle('on', id === m); }
function clearField() {
  for (const e of G.enemies) { scene.remove(e.body.root); if (e.bar) scene.remove(...e.bar); cancelSeq(e); } G.enemies.length = 0;
  for (const b of G.projs) { if (b.mesh) scene.remove(b.mesh); else b.fxh.kill(); } G.projs.length = 0; G.timers.length = 0; G.token = null; G.boss = null;
}
function startWave() { for (const [k, x, z] of [['melee', -4.5, -3], ['melee', 4.5, -3.5], ['melee', 0, -7], ['ranged', -7.5, -7.5], ['ranged', 7.5, -7]]) spawn(k, x, z); showBanner('', '演武台上還有東西在動。', 3); }
function startBoss() {
  G.phase = 'boss'; const b = G.boss = spawn('boss', 0, -11.5); b.cd = .4; G.intro = 2.8; $('boss').classList.add('on'); sfx('boom'); G.shake = .3; fx.ring(b.pos, 6, CRIM, 1.1);
  showBanner('厲無咎', '守在這裡的，是當年親手關上山門的人。', 3.6);
}
function startGame(stage) {
  clearField(); Object.assign(P, { ult: Q.has('ult') ? 100 : 0, hp: P.maxHp, st: 100, qi: 30, state: 'idle', hidden: false, t: 0, hitstop: 0, iframe: 1, buf: null, counterT: 0, cdQ: 0, cdE: 0, yaw: Math.PI, y: 0 }); P.pos.set(0, 0, 7); P.kb.set(0, 0, 0);
  world.setMood(0); R.grade.uniforms.uTint.value.set(0, 0, 0); $('boss').classList.remove('on'); G.slow = 0; G.intro = 0; setMode('play');
  if (stage === 'boss') startBoss(); else { G.phase = 'wave'; startWave(); }
}
G.start = startGame;
function flow(dt) {
  if (G.phase === 'wave' && G.enemies.length && G.enemies.every((e) => e.dead)) { G.phase = 'lull'; P.hp = Math.min(P.maxHp, P.hp + 45); fx.ring(P.pos, 2.4, [.4, 1.4, .7], .8); after(2.4, startBoss); }
  G.intro = Math.max(0, G.intro - dt);
  for (let i = G.enemies.length - 1; i >= 0; i--) { const e = G.enemies[i]; if (e.dead && e.kind !== 'boss' && e.deadT > 3.2) { scene.remove(e.body.root); G.enemies.splice(i, 1); } }
}
addEventListener('mousedown', () => { if (!G.ready) return; if (G.mode !== 'play') { initAudio(Q.has('mute')); startGame(G.mode === 'win' ? undefined : (G.mode === 'dead' && G.boss ? 'boss' : Q.get('stage'))); pressed.delete('LMB'); } });

// ---------- camera, hud ----------
const CAM = new THREE.Vector3(0, 16.5, 11.8); camera.position.copy(G.focus).add(CAM); camera.lookAt(G.focus.x, 1, G.focus.z);
const ft = new THREE.Vector3();
function updateCamera(dt) {
  if (G.mode === 'title') ft.set(Math.sin(G.time * .12) * 2.5, 0, 2.5 + Math.cos(G.time * .09) * 1.5);
  else { ft.copy(P.pos); const b = G.boss; if (b && !b.dead) { const dx = b.pos.x - P.pos.x, dz = b.pos.z - P.pos.z, d = Math.hypot(dx, dz) || 1, k = G.intro > .6 ? Math.min(d * .75, 9) : Math.min(d * .22, 3); ft.x += dx / d * k; ft.z += dz / d * k; } ft.x += Math.max(-1, Math.min(1, (aim.x - P.pos.x) * .05)); ft.z += Math.max(-1, Math.min(1, (aim.z - P.pos.z) * .05)); }
  if (G.camO) { camera.position.copy(G.camO.pos); camera.lookAt(G.camO.look); return; }   /* test hook: close-up showcase camera */
  G.focus.lerp(ft, 1 - Math.exp(-dt * (G.intro > 0 ? 2.2 : 5))); G.shake = Math.max(0, G.shake - dt * 1.8);
  const ulting = P.state === 'ult' && G.mode === 'play', zt = !ulting ? 1 : P.t < ULT.cut ? .82 : P.t < ULT.fin ? .94 : 1.18; G.zoom += (zt - G.zoom) * (1 - Math.exp(-dt * (zt > 1 ? 14 : 3.5)));
  const s = G.shake * G.shake * 1.6; camera.position.set(G.focus.x + CAM.x * G.zoom + (Math.random() - .5) * s, CAM.y * G.zoom + (Math.random() - .5) * s, G.focus.z + CAM.z * G.zoom + (Math.random() - .5) * s * .5);
  G.flash = Math.max(0, G.flash - dt * 3.4); const gu = R.grade.uniforms; gu.uFlash.value = G.flash * G.flash; gu.uExposure.value += ((ulting && P.t < ULT.fin ? (P.t < ULT.cut ? .56 : .34) : 1.15) - gu.uExposure.value) * (1 - Math.exp(-dt * (ulting && P.t >= ULT.cut ? 22 : 6)));
  G.shock = Math.max(0, G.shock - dt * 2.2); gu.uShock.value = G.shock; gu.uMono.value += ((ulting && P.t >= ULT.cut - .04 && P.t < ULT.fin ? 1 : 0) - gu.uMono.value) * (1 - Math.exp(-dt * 30));
}
const W = (el, v) => { el.style.width = (Math.max(0, Math.min(1, v)) * 100).toFixed(1) + '%'; };
const hud = { hp: $('hp').children, st: $('st').children, qi: $('qi').children, bhp: $('bhp').children, bpo: $('bpo').children, hurt: $('hurt'), counter: $('counter'), sq: $('s-q'), ur: $('s-r-ring'), se: $('s-e'), sd: $('s-dge'), sb: $('s-blk') };
function updateHud(dt) {
  W(hud.hp[0], P.hp / P.maxHp); W(hud.hp[1], P.hp / P.maxHp); W(hud.st[0], P.st / 100); W(hud.qi[0], P.qi / 100);
  const b = G.boss; if (b) { W(hud.bhp[0], b.hp / b.maxHp); W(hud.bhp[1], b.hp / b.maxHp); W(hud.bpo[0], b.poise / b.maxPoise); }
  G.hurtFlash = Math.max(0, (G.hurtFlash || 0) - dt * 2.2); hud.hurt.style.opacity = (G.hurtFlash * .7 + (P.hp < 30 && P.state !== 'dead' ? .18 + .1 * Math.sin(G.time * 6) : 0)).toFixed(2);
  hud.counter.classList.toggle('on', P.counterT > 0 && G.mode === 'play');
  hud.sq.classList.toggle('dim', P.qi < 25); hud.sq.lastElementChild.style.height = (P.cdQ / 3.5 * 100) + '%';
  hud.se.classList.toggle('dim', P.qi < 50); hud.se.lastElementChild.style.height = (P.cdE / 8 * 100) + '%';
  hud.ur.style.setProperty('--p', P.ult.toFixed(0) + '%'); hud.ur.parentNode.classList.toggle('ready', P.ult >= 100);
  hud.sd.classList.toggle('dim', P.st < 18); hud.sb.classList.toggle('dim', P.st <= 0);
  if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) bannerEl.classList.remove('on'); }
}
function place(a, dt) {
  const B = a.body, j = a.hitstop > 0 && a !== P ? .05 : 0; B.root.position.set(a.pos.x + (Math.random() - .5) * j, a.y || 0, a.pos.z + (Math.random() - .5) * j); B.root.rotation.y = a.yaw; B.root.visible = !a.hidden;
  if (!(a.hitstop > 0)) { if (B.pose) B.pose(a, dt); else poseBody(B, a, dt); }
  const f = a.flash > 0 ? a.flash / .14 : 0; if (a !== P) for (const m of B.mats) if (!m.userData.base) { m.emissive.setScalar(f * .9); }
  if (a.bar) { const y = 2.25 * B.s + (a.y || 0); a.bar[0].position.set(a.pos.x - .52, y, a.pos.z); a.bar[1].position.set(a.pos.x - .5, y, a.pos.z); a.bar[1].scale.x = Math.max(.001, a.hp / a.maxHp); const v = a.hp < a.maxHp && !a.dead; a.bar[0].visible = a.bar[1].visible = v; }
}

// ---------- loop ----------
function update(dt) {
  world.update(dt, G.time);
  if (G.mode === 'play') {
    updateAim(); G.tokenCd = Math.max(0, G.tokenCd - dt);
    for (let i = G.timers.length - 1; i >= 0; i--) { const t = G.timers[i]; t.t -= dt; if (t.t <= 0) { G.timers.splice(i, 1); t.fn(); } }
    updatePlayer(dt); const frozen = P.state === 'ult' && P.t < ULT.fin;
    for (const e of [...G.enemies]) { if (frozen && !e.dead) { e.flash = Math.max(0, e.flash - dt); e.hitstop = Math.max(0, e.hitstop - dt); if (e.kb.lengthSq() > .02) { move(e, e.kb.x * dt, e.kb.z * dt); e.kb.multiplyScalar(Math.exp(-8 * dt)); } e.anim = 'hurt'; continue; } updateEnemy(e, dt); }
    separate(); if (!frozen) updateProjs(dt); flow(dt);
  } else P.anim = P.state === 'dead' ? 'dead' : 'idle';
  place(P, dt); for (const e of G.enemies) place(e, dt);
  if (Math.random() < dt * 5) { const L = world.lanterns[Math.random() * 4 | 0].l.position; fx.p.spawn(L.x, 1.7, L.z, (Math.random() - .5) * .5, .7 + Math.random(), (Math.random() - .5) * .5, 1.6, .09, 2, .8, .25, -.3, .6); }
  music(G.mode !== 'play' ? 'explore' : G.phase === 'boss' && G.boss && !G.boss.dead ? 'boss' : G.phase === 'wave' ? 'battle' : 'explore');
  fx.update(dt); updateCamera(dt); updateHud(dt);
}
let last = performance.now();
function frame(now, forced) {
  const real = forced ?? Math.min(.05, (now - last) / 1000); last = now; let dt = real;
  if (G.slow > 0) { G.slow -= real; dt *= .3; }
  G.time += dt; update(dt); R.render(G.time); dbg(); endFrame();
}
const dbg = debugPanel(() => `mode ${G.mode}/${G.phase}  state ${P.state}  t ${P.t.toFixed(2)}\npos ${P.pos.x.toFixed(1)},${P.pos.z.toFixed(1)}  rim ${(ARENA_R - Math.hypot(P.pos.x, P.pos.z)).toFixed(1)}\nhp ${P.hp | 0} st ${P.st | 0} qi ${P.qi | 0} ult ${P.ult | 0}  enemies ${alive().length}`);
// test hooks: advance frames by hand (hidden tabs do not animate), fake a key press, read state
G.step = (n = 60, dt = 1 / 60) => { for (let i = 0; i < n; i++) frame(0, dt); };
G.clamp = clampToArena; G.music = musicState; G.press = (...c) => c.forEach((k) => pressed.add(k)); G.keys = keys; G.mouse = mouse; G.aim = aim; G.R = R; G.world = world;
G.state = () => ({ mode: G.mode, phase: G.phase, p: { s: P.state, hp: Math.round(P.hp), st: Math.round(P.st), qi: Math.round(P.qi), x: +P.pos.x.toFixed(2), z: +P.pos.z.toFixed(2) }, e: G.enemies.map((e) => ({ k: e.kind, hp: Math.round(e.hp), x: +e.pos.x.toFixed(1), z: +e.pos.z.toFixed(1), dead: e.dead, seq: e.seq ? e.last + ':' + e.si : '', stun: +e.stun.toFixed(2) })), projs: G.projs.length, fx: fx.items.length });

G.ready = true; $('go').textContent = '點擊開始';
if (Q.has('auto')) startGame(Q.get('stage'));
/* G.paused freezes time but keeps drawing, so a hand-stepped moment can be screenshotted */
(function loop(now) { if (G.paused) { last = now; R.render(G.time); } else frame(now); requestAnimationFrame(loop); })(performance.now());
