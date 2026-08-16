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
  [80, -44, 40, 60],
  [112, -83, 18, 30],
  [-32, -98, 16, 26],
  [-88, -188, 24, 42],
  [-68, -16, 16, 28],
  [22, -112, 12, 20],
  [-6, -108, 18, 32],
  [36, 72, 16, 32],
  [-24, 44, 16, 32],
  [-32, -148, 12, 22],
  [-64, -90, 10, 18],
  [-50, -100, 16, 28],
  [38, -126, 12, 20],
  [-60, -148, 8, 14],
  [-64, -118, 8, 14],
  [-18, -88, 10, 18],
  [68, -10, 12, 20],
  [-22, -88, 8, 14],
  [-48, 68, 16, 32],
  [78, 56, 16, 32],
  [-13, -134, 16, 28],
  [8, -142, 12, 20],
  [135, -40, 20, 34],
  [68, 6, 12, 20],
  [-28, -138, 8, 14],
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
    { ax: 0, az: 18, bx: 0, bz: -124 },
    { ax: 0, az: -40, bx: 84, bz: -42 },
    { ax: 0, az: -40, bx: -68, bz: -16 },
    { ax: 0, az: -90, bx: -55, bz: -150 },
    { ax: 18, az: -70, bx: 52, bz: -88 },
    { ax: 12, az: 8, bx: 50, bz: 22 },
    { ax: 16, az: 28, bx: 22, bz: 78 },
    { ax: -58, az: -158, bx: -90, bz: -190 },
    { ax: -14, az: -104, bx: -32, bz: -98 },
    { ax: 84, az: -42, bx: 112, bz: -83 },
    { ax: 0, az: -108, bx: 22, bz: -112 },
    { ax: 22, az: -112, bx: 48, bz: -86 },
    { ax: -6, az: -116, bx: -18, bz: -138 },
    { ax: 0, az: 8, bx: -15, bz: -8 },
    { ax: 16, az: 28, bx: 36, bz: 72 },
    { ax: 0, az: 18, bx: -24, bz: 44 },
    { ax: -58, az: -158, bx: -64, bz: -90 },
    { ax: -64, az: -90, bx: -68, bz: -16 },
    { ax: -18, az: -138, bx: -32, bz: -148 },
    { ax: -32, az: -98, bx: -46, bz: -100 },
    { ax: 22, az: -112, bx: 38, bz: -126 },
    { ax: -58, az: -158, bx: -60, bz: -148 },
    { ax: -64, az: -118, bx: -18, bz: -88 },
    { ax: 84, az: -42, bx: 68, bz: -10 },
    { ax: -6, az: -108, bx: -18, bz: -88 },
    { ax: 0, az: 18, bx: -48, bz: 68 },
    { ax: 16, az: 28, bx: 78, bz: 56 },
    { ax: -6, az: -116, bx: -13, bz: -134 },
    { ax: 38, az: -126, bx: 8, bz: -142 },
    { ax: -13, az: -134, bx: 8, bz: -142 },
    { ax: 112, az: -83, bx: 135, bz: -40 },
    { ax: 68, az: -10, bx: 68, bz: 6 },
    { ax: -13, az: -134, bx: -28, bz: -138 },
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
      if (Math.hypot(x - 80, z + 44) < 44) continue;
      if (Math.hypot(x - 112, z + 83) < 22) continue;
      if (Math.hypot(x + 32, z + 98) < 20) continue;
      if (Math.hypot(x + 88, z + 188) < 30) continue;
      if (Math.hypot(x - 22, z + 112) < 16) continue;
      if (Math.hypot(x + 68, z + 16) < 22) continue;
      if (Math.hypot(x - 36, z - 72) < 20) continue;
      if (Math.hypot(x + 24, z - 44) < 20) continue;
      if (Math.hypot(x + 32, z + 148) < 16) continue;
      if (Math.hypot(x + 64, z + 90) < 14) continue;
      if (Math.hypot(x + 50, z + 100) < 22) continue;
      if (Math.hypot(x - 38, z + 126) < 16) continue;
      if (Math.hypot(x + 18, z + 88) < 14) continue;
      if (Math.hypot(x - 68, z + 10) < 16) continue;
      if (Math.hypot(x + 60, z + 148) < 12) continue;
      if (Math.hypot(x + 64, z + 118) < 12) continue;
      if (Math.hypot(x + 48, z - 68) < 20) continue;
      if (Math.hypot(x - 78, z - 56) < 20) continue;
      if (Math.hypot(x + 13, z + 134) < 20) continue;
      if (Math.hypot(x - 8, z + 142) < 16) continue;
      if (Math.hypot(x - 135, z + 40) < 24) continue;
      if (Math.hypot(x - 68, z - 6) < 16) continue;
      if (Math.hypot(x + 28, z + 138) < 12) continue;
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
