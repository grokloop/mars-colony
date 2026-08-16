import * as THREE from "three";
import { fbm, noise2, smoothstep, lerp } from "./noise.js";

export const WORLD_SIZE = 640;
export const SEGMENTS = 180;

const CRATERS = [
  [180, -90, 46, 8],
  [-210, 150, 30, 5.5],
  [95, 230, 18, 3.2],
  [-70, -250, 36, 6],
  [250, 80, 14, 2.4],
  [-160, -40, 12, 2],
];

function crater(x, z, cx, cz, radius, depth) {
  const dx = x - cx;
  const dz = z - cz;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d > radius) return 0;
  const t = d / radius;
  const bowl = -depth * (1 - t * t);
  const rim = depth * 0.28 * Math.exp(-((t - 0.86) * (t - 0.86)) / 0.018);
  return bowl + rim;
}

const FLATS = [
  [0, 0, 48, 100],
  [52, 24, 18, 36],
  [22, 82, 14, 28],
];

export function getHeight(x, z) {
  let h = 0;
  h += (fbm(x * 0.0038, z * 0.0038, 5) - 0.45) * 16;
  h += (fbm(x * 0.018, z * 0.018, 3) - 0.5) * 2.8;
  h += (noise2(x * 0.07, z * 0.07) - 0.5) * 0.45;
  for (const [cx, cz, r, depth] of CRATERS) h += crater(x, z, cx, cz, r, depth);
  for (const [fx, fz, inner, outer] of FLATS) {
    const flatten = smoothstep(outer, inner, Math.hypot(x - fx, z - fz));
    h = lerp(h, 0.35 + h * 0.12, flatten);
  }
  return h;
}

function terrainColor(x, z, y, slope) {
  const rust = new THREE.Color(0x8a3b24);
  const ochre = new THREE.Color(0xb86a3a);
  const dust = new THREE.Color(0xc48a55);
  const dark = new THREE.Color(0x4a2418);
  const t = smoothstep(-4, 8, y);
  const c = rust.clone().lerp(ochre, t).lerp(dust, smoothstep(6, 14, y) * 0.35);
  if (slope > 0.45) c.lerp(dark, Math.min(0.55, (slope - 0.45) * 1.4));
  const mottling = noise2(x * 0.11, z * 0.11);
  c.offsetHSL(0, (mottling - 0.5) * 0.08, (mottling - 0.5) * 0.06);
  const road = roadFactor(x, z);
  if (road > 0) c.lerp(new THREE.Color(0x5a3324), road * 0.85);
  return c;
}

export function roadFactor(x, z) {
  const paths = [
    { ax: 0, az: 8, bx: 0, bz: -118 },
    { ax: 0, az: -40, bx: 78, bz: -40 },
    { ax: 0, az: -40, bx: -72, bz: -18 },
    { ax: 0, az: -90, bx: -55, bz: -150 },
    { ax: 18, az: -70, bx: 52, bz: -88 },
    { ax: 12, az: 8, bx: 48, bz: 22 },
    { ax: 16, az: 28, bx: 22, bz: 78 },
  ];
  let best = 0;
  for (const p of paths) {
    const dx = p.bx - p.ax;
    const dz = p.bz - p.az;
    const len2 = dx * dx + dz * dz;
    let t = ((x - p.ax) * dx + (z - p.az) * dz) / len2;
    t = Math.min(1, Math.max(0, t));
    const px = p.ax + dx * t;
    const pz = p.az + dz * t;
    const d = Math.hypot(x - px, z - pz);
    best = Math.max(best, smoothstep(5.4, 1.6, d));
  }
  return best;
}

export function createTerrain() {
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, SEGMENTS, SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const y = getHeight(x, z);
    pos.setY(i, y);
  }
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const slope = 1 - Math.abs(nrm.getY(i));
    const c = terrainColor(pos.getX(i), pos.getZ(i), pos.getY(i), slope);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0.02,
    flatShading: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.name = "terrain";
  return mesh;
}

export function createRocks() {
  const group = new THREE.Group();
  group.name = "rocks";
  const geos = [
    new THREE.DodecahedronGeometry(1, 0),
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
  ];
  const mats = [
    new THREE.MeshStandardMaterial({ color: 0x7a3d28, roughness: 0.95, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x5c2c1c, roughness: 0.92, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x8d4e30, roughness: 0.9, flatShading: true }),
  ];
  const dummy = new THREE.Object3D();
  const counts = [220, 160, 90];
  for (let k = 0; k < 3; k++) {
    const inst = new THREE.InstancedMesh(geos[k], mats[k], counts[k]);
    inst.castShadow = true;
    inst.receiveShadow = true;
    let placed = 0;
    let guard = 0;
    while (placed < counts[k] && guard < counts[k] * 8) {
      guard++;
      const x = (hashJitter(placed, k, 1) - 0.5) * WORLD_SIZE * 0.92;
      const z = (hashJitter(placed, k, 2) - 0.5) * WORLD_SIZE * 0.92;
      if (Math.hypot(x, z) < 42) continue;
      if (Math.hypot(x - 52, z - 24) < 22) continue;
      if (Math.hypot(x - 22, z - 82) < 18) continue;
      const y = getHeight(x, z);
      const s = 0.35 + hashJitter(placed, k, 3) * (k === 2 ? 2.8 : 1.4);
      dummy.position.set(x, y + s * 0.25, z);
      dummy.rotation.set(hashJitter(placed, k, 4) * 6, hashJitter(placed, k, 5) * 6, hashJitter(placed, k, 6) * 6);
      dummy.scale.set(s, s * (0.6 + hashJitter(placed, k, 7) * 0.7), s * (0.7 + hashJitter(placed, k, 8) * 0.5));
      dummy.updateMatrix();
      inst.setMatrixAt(placed, dummy.matrix);
      placed++;
    }
    inst.count = placed;
    group.add(inst);
  }
  return group;
}

function hashJitter(i, k, salt) {
  const n = Math.sin(i * 12.9898 + k * 78.233 + salt * 45.164) * 43758.5453;
  return n - Math.floor(n);
}
