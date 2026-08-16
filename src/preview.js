import * as THREE from "three";
import { createWorld, createRenderer, bindResize } from "./world/scene.js";
import { CinematicCamera } from "./camera/cinematic.js";

const canvas = document.createElement("canvas");
document.getElementById("app").appendChild(canvas);

const { scene, dust } = createWorld();
const renderer = createRenderer(canvas);
const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.2, 1600);
bindResize(camera, renderer);

const cine = new CinematicCamera(camera);
const clock = new THREE.Clock();

function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  cine.update(dt);
  if (dust) {
    dust.rotation.y += dt * 0.012;
    dust.position.x = Math.sin(clock.elapsedTime * 0.07) * 8;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
