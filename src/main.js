import * as THREE from "three";
import { createWorld, createRenderer, bindResize } from "./world/scene.js";
import { PlayerController } from "./player/controller.js";

const canvas = document.createElement("canvas");
document.getElementById("app").appendChild(canvas);

const { scene, dust, settlement, getHeight } = createWorld();
const renderer = createRenderer(canvas);
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.12, 1400);
bindResize(camera, renderer);

const player = new PlayerController(camera, canvas, getHeight, settlement.colliders);
player.spawn(18.5, 23.5, 0, 2);

const placeEl = document.getElementById("place");
const hintEl = document.getElementById("hint");

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement === canvas;
  document.body.classList.toggle("playing", locked);
  if (hintEl) hintEl.classList.toggle("hidden", locked);
});

function nearestLandmark(pos) {
  let best = settlement.landmarks[0];
  let bestD = Infinity;
  for (const lm of settlement.landmarks) {
    const d = pos.distanceTo(lm.position);
    if (d < bestD) {
      best = lm;
      bestD = d;
    }
  }
  return bestD < 38 ? best.name : "Open Mars";
}

const clock = new THREE.Clock();

function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  player.update(dt);
  if (dust) {
    dust.rotation.y += dt * 0.012;
    dust.position.x = Math.sin(clock.elapsedTime * 0.07) * 8;
  }
  if (placeEl) placeEl.textContent = nearestLandmark(camera.position);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
