// Touch play: a floating stick on the left half, the skill icons themselves as buttons on the right.
// Phones must be held sideways; in portrait a prompt covers the game and time stops (see G.portrait in main.js).
export const T = { on: false, mx: 0, mz: 0 };
const BUTTONS = [['s-atk', 'LMB'], ['s-blk', 'RMB', true], ['s-dge', 'Space'], ['s-q', 'KeyQ'], ['s-e', 'KeyE'], ['s-f', 'KeyF'], ['s-c', 'KeyC'], ['s-v', 'KeyV'], ['s-fly', 'ShiftLeft', true], ['s-r', 'KeyR']];

export function initTouch(keys, pressed) {
  const q = new URLSearchParams(location.search);      /* ?touch forces touch mode on a desktop for testing, ?notouch turns it off */
  if (q.has('notouch') || !(q.has('touch') || matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)) return;
  T.on = true; window.__touch = true; document.body.classList.add('touch');          /* input.js ignores mouse events once this flag is set: taps would otherwise also count as left clicks */
  const base = document.createElement('div'), knob = document.createElement('div'); base.id = 'stick'; knob.id = 'knob'; base.appendChild(knob); document.body.appendChild(base);
  let id = null, ox = 0, oy = 0; const R = 54;
  const end = (e) => { if (e.pointerId !== id) return; id = null; T.mx = T.mz = 0; base.style.display = 'none'; };
  addEventListener('pointerdown', (e) => {
    if (id !== null || e.clientX > innerWidth * .46 || e.target.closest('.slot') || e.target.closest('.screen')) return;
    id = e.pointerId; ox = e.clientX; oy = e.clientY; base.style.display = 'block'; base.style.left = ox + 'px'; base.style.top = oy + 'px'; knob.style.transform = 'translate(-50%,-50%)';
  });
  addEventListener('pointermove', (e) => {
    if (e.pointerId !== id) return; let dx = e.clientX - ox, dy = e.clientY - oy; const d = Math.hypot(dx, dy); if (d > R) { dx *= R / d; dy *= R / d; }
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`; const m = Math.hypot(dx, dy) / R; T.mx = m < .22 ? 0 : dx / R; T.mz = m < .22 ? 0 : dy / R;
  });
  for (const ev of ['pointerup', 'pointercancel']) addEventListener(ev, end);
  for (const [elId, code, hold] of BUTTONS) {
    const el = document.getElementById(elId); if (!el) continue; const wrap = el.closest('.slotw') || el;
    const up = (e) => { e.preventDefault(); if (hold) keys.delete(code); el.classList.remove('down'); };
    wrap.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); pressed.add(code); if (hold) keys.add(code); el.classList.add('down'); });
    for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) wrap.addEventListener(ev, up);      /* a held button must let go on every way a finger can leave it */
  }
  addEventListener('contextmenu', (e) => e.preventDefault());
  // first tap: go fullscreen and ask for landscape where the browser allows it (Android); elsewhere the portrait prompt does the job
  addEventListener('pointerup', function once() { removeEventListener('pointerup', once); const el = document.documentElement; try { const p = el.requestFullscreen && el.requestFullscreen(); if (p && p.then) p.then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {}); } catch { /* not supported */ } });
}
export const isPortrait = () => T.on && innerHeight > innerWidth;
