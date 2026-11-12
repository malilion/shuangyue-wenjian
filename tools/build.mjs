// Shrink the generated assets and inline everything into one HTML: node tools/build.mjs   (run from game/)
// 1. textures -> webp at a sane size, meshopt-packed geometry (skinned characters are NOT quantised: that rescales the
//    mesh and breaks height measurement and preset clips)   2. esbuild bundle   3. data URLs in dist/shuangyue.html
import fs from 'node:fs'; import path from 'node:path';
import { NodeIO } from '@gltf-transform/core'; import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { textureCompress, dedup, prune, meshopt, reorder } from '@gltf-transform/functions'; import { MeshoptEncoder } from 'meshoptimizer'; import sharp from 'sharp'; import { build } from 'esbuild';

const OUT = 'dist', OPT = OUT + '/opt'; fs.mkdirSync(OPT, { recursive: true }); await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
const A = {}; let raw = 0, src = 0; const mb = (n) => (n / 1e6).toFixed(2) + 'MB';
const cached = async (key, file, make) => { const o = path.join(OPT, key); if (!fs.existsSync(o) || fs.statSync(o).mtimeMs < fs.statSync(file).mtimeMs) fs.writeFileSync(o, await make()); return fs.readFileSync(o); };

async function glb(name, { tex = 1024, skinned = false } = {}) {
  const file = `assets/models/${name}.glb`; if (!fs.existsSync(file)) { console.log('missing', name); return; } src += fs.statSync(file).size;
  const buf = await cached(`${name}.${tex}${skinned ? '.sk' : ''}.glb`, file, async () => {
    const d = await io.read(file);
    await d.transform(dedup(), prune({ keepLeaves: true, keepAttributes: true }), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [tex, tex], quality: 80 }));
    if (skinned) { await d.transform(reorder({ encoder: MeshoptEncoder })); d.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE }); }
    else await d.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
    return Buffer.from(await io.writeBinary(d)); });
  A[`assets/models/${name}.glb`] = 'data:model/gltf-binary;base64,' + buf.toString('base64'); raw += buf.length; console.log(name.padEnd(14), mb(fs.statSync(file).size), '->', mb(buf.length));
}
for (const n of ['player', 'boss']) await glb(n, { tex: 1536, skinned: true });
for (const n of ['melee', 'ranged']) await glb(n, { tex: 1024, skinned: true });
for (const n of ['w_jian', 'w_dao']) await glb(n, { tex: 512 });
for (const n of ['w_great', 'lantern', 'pillar_tall', 'pillar_broken', 'pillar_fallen', 'burner']) await glb(n, { tex: 1024 });
await glb('gate', { tex: 1536 });
console.log('assets', mb(src), '->', mb(raw));

const r = await build({ entryPoints: ['src/main.js'], bundle: true, format: 'esm', minify: true, write: false, target: 'es2022', legalComments: 'none' });
const js = r.outputFiles[0].text; console.log('code', mb(js.length));
let html = fs.readFileSync('index.html', 'utf8').replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
// asset table + fetch wrapper: a path in the table is served from its data URL; any other assets/ path is a quiet 404 (optional files)
const shim = `window.__A=${JSON.stringify(A)};(()=>{const A=window.__A,k=u=>String(u).replace(/^\\.\\//,'').split('?')[0],f=window.fetch.bind(window);window.fetch=(u,o)=>{if(typeof u!=='string')return f(u,o);const key=k(u);return A[key]?f(A[key]):key.startsWith('assets/')?Promise.resolve(new Response('',{status:404})):f(u,o)}})();`;
const tag = '<script type="module" src="./src/main.js"></script>'; if (!html.includes(tag)) throw new Error('entry script tag not found in index.html');
const esc = (s) => s.replace(/<\/script/g, '<\\/script');
html = html.replace(tag, () => `<script>${esc(shim)}</script>\n<script type="module">${esc(js)}</script>`);
fs.writeFileSync(OUT + '/shuangyue.html', html); console.log('wrote', OUT + '/shuangyue.html', mb(fs.statSync(OUT + '/shuangyue.html').size));
