import * as THREE from "three";
import { createTerrain, createRocks, getHeight } from "./terrain.js";
import { createSky, createSun, createMountains, createDust, applyMarsFog } from "./sky.js";
import { createSettlement } from "./settlement.js";

export const SUN_DIR = new THREE.Vector3(0.55, 0.62, 0.38);

export function createWorld() {
  const scene = new THREE.Scene();
  applyMarsFog(scene);
  scene.add(createSky(SUN_DIR));
  scene.add(createSun(SUN_DIR));
  scene.add(createTerrain());
  scene.add(createRocks());
  scene.add(createMountains());
  const dust = createDust();
  scene.add(dust);
  const settlement = createSettlement();
  scene.add(settlement.group);
  return { scene, dust, settlement, getHeight };
}

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  return renderer;
}

export function bindResize(camera, renderer) {
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
