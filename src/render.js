// Renderer + post chain: HDR scene buffer (MSAA) -> bloom -> grade (tone map, split tone, vignette, grain).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const Grade = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uExposure: { value: 1.15 }, uTint: { value: new THREE.Vector3(0, 0, 0) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
  fragmentShader: /* glsl */`
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime, uExposure; uniform vec3 uTint;
    vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14), 0., 1.); }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb * uExposure;
      float l = dot(c, vec3(.2126,.7152,.0722));
      c = mix(c * vec3(.84,.96,1.16), c * vec3(1.08,1.,.9), smoothstep(.02,.9,l));   /* cold shadows, warm highlights */
      c += uTint * (.15 + l);
      c = aces(c);
      vec2 d = vUv - .5; c *= 1. - dot(d,d) * 1.05;
      c = pow(c, vec3(1./2.2));
      c += (hash(vUv * 900. + uTime) - .5) * .022;
      gl_FragColor = vec4(c, 1.);
    }`,
};

export function createRender(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NoToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, .5, 220);
  const target = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(4, 4), .62, .7, 1.0); composer.addPass(bloom);
  const grade = new ShaderPass(Grade); composer.addPass(grade);
  const view = { h: 1 };
  function resize() {
    const w = innerWidth, h = innerHeight, pr = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(3.2e6 / (w * h)));
    renderer.setPixelRatio(pr); renderer.setSize(w, h, false); composer.setPixelRatio(pr); composer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix(); view.h = h * pr;
  }
  addEventListener('resize', resize); resize();
  return { renderer, scene, camera, composer, grade, bloom, view, resize, render(time) { grade.uniforms.uTime.value = time; composer.render(); } };
}
