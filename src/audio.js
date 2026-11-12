// PLACEHOLDER sound: a few synthesized cues so hits can be felt while tuning. To be replaced with recorded CC0
// samples (3+ variants each) and real music; files dropped in assets/sfx and assets/music will take over.
let ctx = null, out = null, buf = null;
export function initAudio(muted) {
  if (muted || ctx) return;
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  out = ctx.createGain(); out.gain.value = .5; out.connect(ctx.destination);
  buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}
function noise(dur, f0, f1, gain, q = 1.2, type = 'bandpass') {
  const t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = buf; s.loopStart = Math.random(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + .008); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + dur + .02);
}
function tone(f0, f1, dur, gain, type = 'sine') {
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
  o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  o.connect(g).connect(out); o.start(t); o.stop(t + dur + .02);
}
export function sfx(name) {
  if (!ctx) return; const r = .92 + Math.random() * .16;
  switch (name) {
    case 'swing': noise(.16, 900 * r, 3200 * r, .22, .8); break;
    case 'heavy': noise(.26, 500 * r, 2600 * r, .3, .7); break;
    case 'hit': noise(.09, 2400 * r, 700, .5, .7); tone(150 * r, 60, .12, .5); break;
    case 'hitHeavy': noise(.16, 1800 * r, 300, .65, .6); tone(110 * r, 40, .22, .8); break;
    case 'parry': for (const f of [2093, 3136, 4186, 5274]) tone(f * r, f * r * .995, .5, .2, 'triangle'); noise(.05, 6000, 3000, .6, .5, 'highpass'); break;
    case 'block': tone(700 * r, 420, .12, .3, 'triangle'); noise(.08, 3000, 1200, .4); break;
    case 'hurt': tone(200 * r, 70, .25, .6, 'sawtooth'); noise(.14, 900, 250, .4); break;
    case 'dodge': noise(.22, 400, 1500 * r, .16, .6); break;
    case 'cast': tone(300 * r, 900 * r, .3, .14, 'triangle'); break;
    case 'bolt': noise(.2, 1800 * r, 600, .2, 2); break;
    case 'boom': tone(90, 28, .6, .95); noise(.5, 700, 80, .6, .5, 'lowpass'); break;
    case 'warn': tone(520, 500, .18, .1, 'square'); break;
    case 'die': noise(.5, 1200, 100, .4, .5, 'lowpass'); tone(160, 40, .5, .4, 'sawtooth'); break;
  }
}
