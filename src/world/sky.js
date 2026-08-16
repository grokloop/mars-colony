import * as THREE from "three";
import { getHeight } from "./terrain.js";

const skyVert = `
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const skyFrag = `
varying vec3 vWorld;
uniform vec3 uSunDir;
void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 zenith = vec3(0.72, 0.58, 0.48);
  vec3 mid = vec3(0.86, 0.62, 0.40);
  vec3 horizon = vec3(0.93, 0.72, 0.48);
  vec3 col = mix(horizon, mid, smoothstep(-0.05, 0.25, h));
  col = mix(col, zenith, smoothstep(0.2, 0.85, h));
  float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 180.0);
  float glow = pow(max(dot(dir, normalize(uSunDir)), 0.0), 8.0);
  col += vec3(1.0, 0.92, 0.7) * sun * 1.4;
  col += vec3(1.0, 0.7, 0.35) * glow * 0.28;
  if (h < 0.0) col = mix(vec3(0.45, 0.22, 0.12), col, 0.15);
  gl_FragColor = vec4(col, 1.0);
}
`;

export function createSky(sunDirection) {
  const geo = new THREE.SphereGeometry(900, 32, 20);
  const mat = new THREE.ShaderMaterial({
    vertexShader: skyVert,
    fragmentShader: skyFrag,
    uniforms: { uSunDir: { value: sunDirection.clone().normalize() } },
    side: THREE.BackSide,
    depthWrite: false,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.name = "sky";
  return sky;
}

export function createSun(sunDirection) {
  const group = new THREE.Group();
  const dir = sunDirection.clone().normalize();
  const light = new THREE.DirectionalLight(0xffe1b0, 2.15);
  light.position.copy(dir.clone().multiplyScalar(180));
  light.castShadow = true;
  light.shadow.mapSize.set(1536, 1536);
  light.shadow.camera.near = 10;
  light.shadow.camera.far = 420;
  light.shadow.camera.left = -130;
  light.shadow.camera.right = 130;
  light.shadow.camera.top = 130;
  light.shadow.camera.bottom = -130;
  light.shadow.bias = -0.0008;
  group.add(light);
  const hemi = new THREE.HemisphereLight(0xe0b888, 0x6a3018, 0.55);
  group.add(hemi);
  const fill = new THREE.AmbientLight(0xc07040, 0.16);
  group.add(fill);
  const disc = new THREE.Mesh(
    new THREE.SphereGeometry(7, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xfff1c4 })
  );
  disc.position.copy(dir.clone().multiplyScalar(420));
  group.add(disc);
  group.name = "sun";
  return group;
}

export function createMountains() {
  const group = new THREE.Group();
  group.name = "mountains";
  const mat = new THREE.MeshStandardMaterial({
    color: 0x6b2e1c,
    roughness: 1,
    flatShading: true,
  });
  const peaks = [
    [0, -300, 18, 70],
    [80, -310, 14, 52],
    [-90, -305, 16, 60],
    [220, -280, 12, 40],
    [-240, -270, 13, 48],
    [300, -40, 15, 55],
    [305, 80, 11, 38],
    [-310, 20, 16, 62],
    [-300, 140, 12, 44],
    [40, 310, 17, 58],
    [-70, 300, 13, 46],
    [160, 290, 10, 36],
  ];
  for (const [x, z, r, h] of peaks) {
    const geo = new THREE.ConeGeometry(r, h, 6);
    const mesh = new THREE.Mesh(geo, mat);
    const y = getHeight(x, z) + h * 0.35;
    mesh.position.set(x, y, z);
    mesh.rotation.y = (x + z) * 0.01;
    group.add(mesh);
  }
  return group;
}

export function createDust() {
  const count = 700;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 220;
    pos[i * 3 + 1] = 1 + Math.random() * 18;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 220;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xd4a06a,
    size: 0.18,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  });
  const pts = new THREE.Points(geo, mat);
  pts.name = "dust";
  return pts;
}

export function applyMarsFog(scene) {
  scene.fog = new THREE.FogExp2(0xc48a58, 0.00155);
  scene.background = new THREE.Color(0xc48a58);
}
