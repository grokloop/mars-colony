import * as THREE from "three";
import { mats, makeLabelTexture } from "./materials.js";
import { getHeight } from "./terrain.js";

function mesh(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function sit(x, z, lift = 0) {
  return [x, getHeight(x, z) + lift, z];
}

export function createSettlement() {
  const root = new THREE.Group();
  root.name = "settlement";
  const colliders = [];
  const landmarks = [];

  root.add(createLandingPad());
  const ship = createStarship();
  root.add(ship);
  colliders.push({ type: "cyl", x: 0, z: 0, r: 6.2 });
  landmarks.push({ id: "starship", name: "Starship", position: new THREE.Vector3(0, 18, 0) });

  root.add(createCrates());
  const solar = createSolarFarm();
  root.add(solar);
  landmarks.push({ id: "solar", name: "Solar farm", position: new THREE.Vector3(78, 6, -38) });

  const isru = createISRU();
  root.add(isru);
  colliders.push({ type: "box", x: -68, z: -16, w: 22, d: 16 });
  landmarks.push({ id: "isru", name: "ISRU propellant plant", position: new THREE.Vector3(-68, 8, -16) });

  const habs = createHabs();
  root.add(habs);
  colliders.push({ type: "box", x: -14, z: -104, w: 14, d: 8 });
  colliders.push({ type: "box", x: 2, z: -104, w: 14, d: 8 });
  colliders.push({ type: "box", x: -6, z: -116, w: 8, d: 14 });
  landmarks.push({ id: "habs", name: "Hab cluster", position: new THREE.Vector3(-6, 5, -108) });

  const gh = createGreenhouse();
  root.add(gh);
  colliders.push({ type: "box", x: 22, z: -112, w: 16, d: 10 });
  landmarks.push({ id: "greenhouse", name: "Greenhouse", position: new THREE.Vector3(22, 4, -112) });

  root.add(createRover(16, 14, -0.4));
  root.add(createRover(8, -62, 1.2));
  landmarks.push({ id: "rover", name: "Haul rover", position: new THREE.Vector3(8, 2, -62) });

  const shop = createWorkshop();
  root.add(shop);
  colliders.push({ type: "box", x: 48, z: -86, w: 16, d: 12 });
  landmarks.push({ id: "workshop", name: "Workshop", position: new THREE.Vector3(48, 5, -86) });

  const tower = createCommsTower();
  root.add(tower);
  colliders.push({ type: "cyl", x: -18, z: -138, r: 3 });
  landmarks.push({ id: "comms", name: "Comms tower", position: new THREE.Vector3(-18, 16, -138) });

  const mine = createIceMine();
  root.add(mine);
  colliders.push({ type: "cyl", x: -58, z: -158, r: 6 });
  landmarks.push({ id: "ice", name: "Ice mining rig", position: new THREE.Vector3(-58, 8, -158) });

  root.add(createRoads());
  root.add(createLights());
  root.add(createSign());

  return { group: root, colliders, landmarks };
}

function createLandingPad() {
  const g = new THREE.Group();
  g.name = "pad";
  const y = getHeight(0, 0);
  const deck = mesh(new THREE.CylinderGeometry(20, 20, 0.45, 48), mats.pad, 0, y + 0.15, 0);
  g.add(deck);
  g.add(mesh(new THREE.TorusGeometry(20.4, 0.55, 8, 48), mats.padRing, 0, y + 0.4, 0, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.RingGeometry(7.5, 8.1, 40), mats.padRing, 0, y + 0.4, 0, -Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.RingGeometry(13, 13.5, 40), mats.padRing, 0, y + 0.4, 0, -Math.PI / 2, 0, 0));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const lx = Math.cos(a) * 19.2;
    const lz = Math.sin(a) * 19.2;
    g.add(mesh(new THREE.BoxGeometry(0.35, 0.55, 0.35), mats.glowPad, lx, y + 0.55, lz));
  }
  const berm = mesh(new THREE.TorusGeometry(26, 2.2, 8, 40), mats.rust, 0, y - 0.4, 0, Math.PI / 2, 0, 0);
  berm.scale.set(1, 0.45, 1);
  g.add(berm);
  return g;
}

function createStarship() {
  const g = new THREE.Group();
  g.name = "starship";
  const y0 = getHeight(0, 0) - 3.1;
  const bodyH = 36;
  const r = 4.4;
  g.add(mesh(new THREE.CylinderGeometry(r, r, bodyH, 28), mats.steel, 0, y0 + 8 + bodyH / 2, 0));
  const nose = mesh(new THREE.SphereGeometry(r, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), mats.steel, 0, y0 + 8 + bodyH, 0);
  nose.scale.set(1, 1.55, 1);
  g.add(nose);
  const tiles = mesh(new THREE.CylinderGeometry(r + 0.04, r + 0.04, bodyH * 0.72, 20, 1, true, Math.PI * 0.55, Math.PI * 0.9), mats.tiles, 0, y0 + 8 + bodyH * 0.38, 0);
  g.add(tiles);
  const skirt = mesh(new THREE.CylinderGeometry(r + 0.15, r + 0.55, 3.2, 24), mats.soot, 0, y0 + 6.4, 0);
  g.add(skirt);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const bell = mesh(new THREE.CylinderGeometry(0.55, 1.15, 2.2, 12), mats.soot, Math.cos(a) * 1.5, y0 + 4.6, Math.sin(a) * 1.5);
    g.add(bell);
  }
  const flapGeo = new THREE.BoxGeometry(1.1, 7.2, 3.6);
  const aftL = mesh(flapGeo, mats.steelDark, -r - 0.2, y0 + 14, 0, 0, 0, 0.18);
  const aftR = mesh(flapGeo, mats.steelDark, r + 0.2, y0 + 14, 0, 0, 0, -0.18);
  g.add(aftL, aftR);
  const fwdGeo = new THREE.BoxGeometry(0.45, 4.2, 2.4);
  g.add(mesh(fwdGeo, mats.steelDark, -r + 0.2, y0 + 40, 1.2, 0.15, 0, 0.4));
  g.add(mesh(fwdGeo, mats.steelDark, r - 0.2, y0 + 40, 1.2, 0.15, 0, -0.4));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.2;
    const leg = new THREE.Group();
    const strut = mesh(new THREE.BoxGeometry(0.22, 8.2, 0.22), mats.steelDark, 0, 0, 0, 0, 0, 0.72);
    const foot = mesh(new THREE.BoxGeometry(1.3, 0.18, 0.9), mats.steel, 3.4, -3.7, 0);
    leg.add(strut, foot);
    leg.position.set(Math.cos(a) * 3.2, y0 + 7.6, Math.sin(a) * 3.2);
    leg.rotation.y = -a;
    g.add(leg);
  }
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 0.35, 0.08), mats.tiles, 0, y0 + 28 + i * 2.1, r + 0.05));
  }
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.12, 0.12), mats.glowWarm, 0, y0 + 44.5, 0));
  return g;
}

function createCrates() {
  const g = new THREE.Group();
  g.name = "crates";
  const spots = [
    [10, 8, 0], [12.2, 8.4, 0.4], [10.4, 10.6, 1.6],
    [13.5, 6.2, -0.3], [-12, 9, 0.5], [-14, 7.2, 2.1],
    [8.5, -11, 0], [6.4, -12.5, 1.1],
  ];
  for (const [x, z, rot] of spots) {
    const y = getHeight(x, z) + 0.85;
    const box = mesh(new THREE.BoxGeometry(1.7, 1.5, 1.7), mats.crate, x, y, z, 0, rot, 0);
    g.add(box);
    g.add(mesh(new THREE.BoxGeometry(1.78, 0.08, 1.78), mats.steelDark, x, y + 0.78, z, 0, rot, 0));
  }
  return g;
}

function createSolarFarm() {
  const g = new THREE.Group();
  g.name = "solar";
  const cols = 7;
  const rows = 5;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = 58 + i * 5.4;
      const z = -22 - j * 6.2;
      const y = getHeight(x, z);
      const stand = mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mats.solarFrame, x, y + 0.8, z);
      const panel = mesh(new THREE.BoxGeometry(4.6, 0.08, 2.3), mats.solar, x, y + 1.55, z, -0.55, 0.15, 0);
      const frame = mesh(new THREE.BoxGeometry(4.75, 0.05, 2.42), mats.solarFrame, x, y + 1.5, z, -0.55, 0.15, 0);
      g.add(stand, panel, frame);
    }
  }
  const [ix, iy, iz] = sit(54, -18, 0.7);
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.4), mats.habDark, ix, iy, iz));
  return g;
}

function createISRU() {
  const g = new THREE.Group();
  g.name = "isru";
  const baseX = -68;
  const baseZ = -16;
  const y = getHeight(baseX, baseZ);
  g.add(mesh(new THREE.BoxGeometry(24, 0.4, 16), mats.concrete, baseX, y + 0.15, baseZ));
  const ch4 = mesh(new THREE.CylinderGeometry(3.2, 3.2, 14, 20), mats.tankCh4, baseX - 5.5, y + 7.4, baseZ - 1, 0, 0, Math.PI / 2);
  const o2 = mesh(new THREE.CylinderGeometry(3.2, 3.2, 14, 20), mats.tankO2, baseX - 5.5, y + 7.4, baseZ + 5.2, 0, 0, Math.PI / 2);
  g.add(ch4, o2);
  const ch4Label = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.1), new THREE.MeshStandardMaterial({ map: makeLabelTexture("CH4", "#6a2208", "#f4e6c8") }));
  ch4Label.position.set(baseX + 1.6, y + 7.4, baseZ + 2.3);
  const o2Label = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.1), new THREE.MeshStandardMaterial({ map: makeLabelTexture("O2", "#2a3340", "#e8eef4") }));
  o2Label.position.set(baseX + 1.6, y + 7.4, baseZ + 8.5);
  g.add(ch4Label, o2Label);
  g.add(mesh(new THREE.CylinderGeometry(1.6, 1.8, 12, 10), mats.steelDark, baseX + 7, y + 6.4, baseZ - 3));
  g.add(mesh(new THREE.BoxGeometry(4, 3.2, 3.4), mats.habDark, baseX + 7, y + 2, baseZ + 3));
  g.add(mesh(new THREE.TorusGeometry(2.4, 0.18, 6, 16), mats.steel, baseX + 7, y + 9.5, baseZ - 3, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.18, 0.18, 12, 8), mats.steel, baseX + 1, y + 4.2, baseZ + 2, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(6.5, 0.12, 2.4), mats.solar, baseX + 7, y + 13.2, baseZ - 3));
  return g;
}

function createHabs() {
  const g = new THREE.Group();
  g.name = "habs";
  const mods = [
    [-14, -104, 0],
    [2, -104, 0],
    [-6, -116, 1.57],
  ];
  for (const [x, z, ry] of mods) {
    const y = getHeight(x, z);
    const body = mesh(new THREE.CylinderGeometry(3.1, 3.1, 12, 18), mats.hab, x, y + 3.2, z, 0, 0, Math.PI / 2);
    body.rotation.y = ry;
    g.add(body);
    g.add(mesh(new THREE.SphereGeometry(3.1, 14, 10), mats.hab, x + Math.cos(ry) * 6, y + 3.2, z + Math.sin(ry) * 6));
    g.add(mesh(new THREE.SphereGeometry(3.1, 14, 10), mats.hab, x - Math.cos(ry) * 6, y + 3.2, z - Math.sin(ry) * 6));
    for (let i = -2; i <= 2; i++) {
      const wx = x + Math.cos(ry) * i * 2;
      const wz = z + Math.sin(ry) * i * 2;
      g.add(mesh(new THREE.BoxGeometry(0.9, 0.7, 0.08), mats.glowWarm, wx, y + 3.3, wz + (ry === 0 ? 3.15 : 0)));
    }
  }
  const [ax, ay, az] = sit(-6, -96, 1.4);
  g.add(mesh(new THREE.CylinderGeometry(1.5, 1.5, 2.6, 12), mats.habDark, ax, ay, az));
  g.add(mesh(new THREE.BoxGeometry(1.1, 1.8, 0.12), mats.steelDark, ax, ay + 0.1, az + 1.5));
  const [dx, dy, dz] = sit(-6, -108, 6.8);
  g.add(mesh(new THREE.SphereGeometry(4.4, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), mats.hab, dx, dy, dz));
  return g;
}

function createGreenhouse() {
  const g = new THREE.Group();
  g.name = "greenhouse";
  const x = 22;
  const z = -112;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(14, 0.25, 8), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 13.5, 18, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 4, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(13.6, 0.12, 8.2), mats.solarFrame, x, y + 4.05, z));
  for (let i = -2; i <= 2; i++) {
    for (let j = -1; j <= 1; j++) {
      g.add(mesh(new THREE.BoxGeometry(1.4, 0.55, 0.7), mats.plant, x + i * 2.2, y + 0.55, z + j * 1.8));
    }
  }
  g.add(mesh(new THREE.BoxGeometry(1.2, 2, 0.15), mats.habDark, x - 6.8, y + 1.2, z));
  return g;
}

function createRover(x, z, heading) {
  const g = new THREE.Group();
  g.name = "rover";
  const y = getHeight(x, z);
  g.position.set(x, y, z);
  g.rotation.y = heading;
  g.add(mesh(new THREE.BoxGeometry(3.4, 1.1, 2.1), mats.rover, 0, 1.35, 0));
  g.add(mesh(new THREE.BoxGeometry(1.4, 0.7, 1.5), mats.roverDark, 1.2, 2.1, 0));
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.08, 1.6), mats.solar, 0, 2.0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.1, 6), mats.steel, -0.4, 2.9, 0));
  g.add(mesh(new THREE.BoxGeometry(0.25, 0.2, 0.25), mats.roverDark, -0.4, 4.0, 0));
  const wheel = new THREE.CylinderGeometry(0.55, 0.55, 0.35, 12);
  const spots = [[-1.2, 0.55, 1.15], [0.1, 0.55, 1.15], [1.2, 0.55, 1.15], [-1.2, 0.55, -1.15], [0.1, 0.55, -1.15], [1.2, 0.55, -1.15]];
  for (const [wx, wy, wz] of spots) {
    g.add(mesh(wheel, mats.roverDark, wx, wy, wz, Math.PI / 2, 0, 0));
  }
  return g;
}

function createWorkshop() {
  const g = new THREE.Group();
  g.name = "workshop";
  const x = 48;
  const z = -86;
  const y = getHeight(x, z);
  const hut = mesh(new THREE.CylinderGeometry(6.2, 6.2, 16, 16, 1, false, 0, Math.PI), mats.habDark, x, y + 3.4, z);
  hut.rotation.z = Math.PI / 2;
  g.add(hut);
  g.add(mesh(new THREE.BoxGeometry(16, 0.3, 10), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(0.2, 4.2, 6.5), mats.steelDark, x - 7.8, y + 2.2, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.1, 1.4), mats.crate, x + 2, y + 0.8, z + 1.5));
  return g;
}

function createCommsTower() {
  const g = new THREE.Group();
  g.name = "comms";
  const x = -18;
  const z = -138;
  const y = getHeight(x, z);
  for (let i = 0; i < 8; i++) {
    const h = 3.2;
    g.add(mesh(new THREE.BoxGeometry(0.18, h, 0.18), mats.lattice, x - 0.7, y + 1.6 + i * 3.0, z - 0.7));
    g.add(mesh(new THREE.BoxGeometry(0.18, h, 0.18), mats.lattice, x + 0.7, y + 1.6 + i * 3.0, z - 0.7));
    g.add(mesh(new THREE.BoxGeometry(0.18, h, 0.18), mats.lattice, x - 0.7, y + 1.6 + i * 3.0, z + 0.7));
    g.add(mesh(new THREE.BoxGeometry(0.18, h, 0.18), mats.lattice, x + 0.7, y + 1.6 + i * 3.0, z + 0.7));
    g.add(mesh(new THREE.BoxGeometry(1.6, 0.1, 0.1), mats.lattice, x, y + 3 + i * 3.0, z - 0.7));
    g.add(mesh(new THREE.BoxGeometry(1.6, 0.1, 0.1), mats.lattice, x, y + 3 + i * 3.0, z + 0.7));
  }
  const dish = mesh(new THREE.SphereGeometry(3.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2.4), mats.steel, x, y + 26.5, z, -0.7, 0.4, 0);
  g.add(dish);
  g.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 6), mats.steelDark, x + 0.4, y + 27.4, z + 1.1, 0.6, 0, 0));
  return g;
}

function createIceMine() {
  const g = new THREE.Group();
  g.name = "ice-mine";
  const x = -58;
  const z = -158;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8, 0.3, 8), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x - 2.2, y + 7, z - 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x + 2.2, y + 7, z - 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x - 2.2, y + 7, z + 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x + 2.2, y + 7, z + 2.2));
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.25, 5.2), mats.steelDark, x, y + 14.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.35, 0.55, 9, 10), mats.steel, x, y + 5, z));
  g.add(mesh(new THREE.ConeGeometry(0.7, 1.6, 8), mats.soot, x, y + 0.9, z));
  const pile = mesh(new THREE.DodecahedronGeometry(3.4, 0), mats.ice, x + 7.5, y + 1.6, z + 1.2);
  pile.scale.set(1.3, 0.7, 1.1);
  g.add(pile);
  g.add(mesh(new THREE.BoxGeometry(6, 0.35, 1.1), mats.steelDark, x + 3.4, y + 1.4, z, 0, 0, -0.18));
  return g;
}

function createRoads() {
  const g = new THREE.Group();
  g.name = "roads";
  const segs = [
    [0, 10, 0, -120, 5],
    [0, -40, 80, -40, 4.5],
    [0, -40, -70, -16, 4.5],
    [0, -92, -56, -154, 4],
    [16, -72, 48, -86, 3.6],
  ];
  for (const [ax, az, bx, bz, w] of segs) {
    const dx = bx - ax;
    const dz = bz - az;
    const len = Math.hypot(dx, dz);
    const steps = Math.ceil(len / 6);
    for (let i = 0; i < steps; i++) {
      const t = (i + 0.5) / steps;
      const x = ax + dx * t;
      const z = az + dz * t;
      const y = getHeight(x, z);
      const plank = mesh(new THREE.BoxGeometry(w, 0.08, len / steps + 0.3), mats.padRing, x, y + 0.06, z, 0, Math.atan2(dx, dz), 0);
      plank.castShadow = false;
      g.add(plank);
}
  }
  return g;
}

function createLights() {
  const g = new THREE.Group();
  const poles = [[18, -8], [-16, -6], [12, -48], [-10, -70], [6, -100], [30, -100], [-30, -20], [40, -40]];
  for (const [x, z] of poles) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.1, 0.12, 5.2, 6), mats.steelDark, x, y + 2.6, z));
    g.add(mesh(new THREE.BoxGeometry(0.7, 0.15, 0.35), mats.glowWarm, x, y + 5.3, z));
  }
  return g;
}

function createSign() {
  const g = new THREE.Group();
  const x = 14;
  const z = 22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(0.12, 3.2, 0.12), mats.steelDark, x, y + 1.6, z));
  const board = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.0), new THREE.MeshStandardMaterial({ map: makeLabelTexture("BASE ALPHA", "#1a100c", "#f0c089") }));
  board.position.set(x, y + 3.3, z);
  board.rotation.y = 0.4;
  g.add(board);
  return g;
}
