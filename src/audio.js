// Sound: recorded CC0 samples (assets/sfx, sources in SOURCES.md) with several variants per cue, picked at random with a
// little pitch drift. Synth layers only fill gaps (sub thump under hits, a metallic ping on parry). If a sample is
// missing the synth cue alone still plays. Music is not wired yet.
let ctx = null, out = null, buf = null;
let analyser = null;
export function initAudio(muted) {
  if (muted) return; if (ctx) { if (ctx.state !== 'running') ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  out = ctx.createGain(); out.gain.value = .55; analyser = ctx.createAnalyser(); analyser.fftSize = 2048; out.connect(analyser); out.connect(ctx.destination); if (ctx.state !== 'running') ctx.resume(); loadSamples(); loadMusic();
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
// Music: assets/music/{explore,battle,boss}.mp3, all looping from the moment they load, only their gains move.
// Kept at roughly a third of the effects level so hits stay on top. Missing files are skipped silently.
const tracks = {}, FALLBACK = { battle2: 'battle', boss2: 'boss' };      /* stage-two tracks fall back to stage one's until their files exist */ let want = null, musicOn = false; const MUSIC_GAIN = .2;
async function loadMusic() {
  if (musicOn) return; musicOn = true;
  for (const name of ['explore', 'battle', 'boss', 'battle2', 'boss2']) {
    try { const r = await fetch(`assets/music/${name}.mp3`); if (!r.ok) continue; const b = await ctx.decodeAudioData(await r.arrayBuffer());
      const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = b; src.loop = true; g.gain.value = 0; src.connect(g).connect(out); src.start(); tracks[name] = g; applyMusic(2.5); } catch { /* optional file */ }
  }
}
function applyMusic(fade) { if (!ctx) return; const t = ctx.currentTime; for (const [n, g] of Object.entries(tracks)) { g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(n === (tracks[want] ? want : FALLBACK[want] || want) ? MUSIC_GAIN : 0, t + fade); } }
export function music(name, fade = 1.6) { if (name === want) return; want = name; applyMusic(fade); }
// what is actually leaving the mixer right now (for checking that sound really plays, not just that files decode)
export const audioProbe = () => { if (!ctx) return { ctx: 'none' }; const d = new Float32Array(analyser.fftSize); analyser.getFloatTimeDomainData(d); let s = 0; for (const v of d) s += v * v; return { ctx: ctx.state, rms: +Math.sqrt(s / d.length).toFixed(4), samples: Object.keys(samples).length, time: +ctx.currentTime.toFixed(2) }; };
export const musicState = () => ({ want, loaded: Object.keys(tracks), gains: Object.fromEntries(Object.entries(tracks).map(([n, g]) => [n, +g.gain.value.toFixed(3)])) });
// cue -> [variant count, gain, playback-rate centre]; cues can borrow another cue's files
const BANK = { swing: [5, .5, 1], heavy: ['swing', .65, .72], hit: [3, .8, 1], hitHeavy: [2, .95, .9], parry: [2, 1, 1.1], ring: [1, .7, 1], block: [3, .7, 1], hurt: [2, .7, 1], dodge: [2, .45, 1], cast: [3, .45, 1], bolt: [3, .5, 1.1], boom: [3, .9, .85], die: [3, .6, 1], roar: [2, .8, .9] };
const samples = {}; let loading = false;
async function loadSamples() {
  if (loading) return; loading = true;
  await Promise.all(Object.entries(BANK).filter(([, b]) => typeof b[0] === 'number').flatMap(([name, b]) => Array.from({ length: b[0] }, async (_, i) => {
    try { const r = await fetch(`assets/sfx/${name}_${i + 1}.mp3`); if (!r.ok) return; const buf = await ctx.decodeAudioData(await r.arrayBuffer()); (samples[name] ||= []).push(buf); } catch { /* optional file */ } })));
}
function sample(name) {
  const b = BANK[name]; if (!b) return false; const list = samples[typeof b[0] === 'string' ? b[0] : name]; if (!list || !list.length) return false;
  const s = ctx.createBufferSource(), g = ctx.createGain(); s.buffer = list[Math.random() * list.length | 0]; s.playbackRate.value = b[2] * (.94 + Math.random() * .12); g.gain.value = b[1]; s.connect(g).connect(out); s.start(); return true;
}
export function sfx(name) {
  if (!ctx) return; loadSamples(); const r = .92 + Math.random() * .16;
  if (sample(name)) {      /* recorded cue found: add only the synth layer that gives it weight */
    if (name === 'hit') tone(150 * r, 60, .1, .35); else if (name === 'hitHeavy') tone(105 * r, 38, .22, .7); else if (name === 'boom') tone(85, 27, .6, .9);
    else if (name === 'parry') { sample('ring'); for (const f of [2637, 3951, 5274]) tone(f * r, f * r * .995, .45, .12, 'triangle'); } else if (name === 'hurt') tone(190 * r, 70, .2, .4, 'sawtooth');
    return;
  }
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
    case 'ultCharge': tone(90, 520, .85, .28, 'triangle'); tone(180, 1040, .85, .1, 'sine'); noise(.85, 300, 4000, .12, .7); break;
    case 'ultHit': tone(1400 * r, 500, .12, .12, 'triangle'); break;
    case 'die': noise(.5, 1200, 100, .4, .5, 'lowpass'); tone(160, 40, .5, .4, 'sawtooth'); break;
  }
}
