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

function labelPlane(text, bg, fg, w, h, x, y, z, ry = 0) {
  const mat = new THREE.MeshStandardMaterial({
    map: makeLabelTexture(text, bg, fg),
    side: THREE.DoubleSide,
    roughness: 0.55,
    metalness: 0.08,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.position.set(x, y, z);
  m.rotation.y = ry;
  m.castShadow = false;
  return m;
}

function addCrate(g, x, z, rot = 0, scale = 1) {
  const y = getHeight(x, z) + 0.85 * scale;
  g.add(mesh(new THREE.BoxGeometry(1.7 * scale, 1.5 * scale, 1.7 * scale), mats.crate, x, y, z, 0, rot, 0));
  g.add(mesh(new THREE.BoxGeometry(1.78 * scale, 0.08, 1.78 * scale), mats.steelDark, x, y + 0.78 * scale, z, 0, rot, 0));
}

export function createSettlement() {
  const root = new THREE.Group();
  root.name = "settlement";
  const colliders = [];
  const landmarks = [];

  root.add(createLandingPad(0, 0, { finished: true }));
  const ship = createStarship(0, 0, { name: "starship" });
  root.add(ship);
  colliders.push({ type: "cyl", x: 0, z: 0, r: 6.2 });
  landmarks.push({ id: "starship", name: "Pad Starship", position: new THREE.Vector3(0, 18, 0) });

  root.add(createLandingPad(52, 24, { finished: false }));
  const cargo = createStarship(52, 24, { name: "cargo-starship", cargoOpen: true });
  root.add(cargo);
  colliders.push({ type: "cyl", x: 52, z: 24, r: 6.2 });
  landmarks.push({ id: "cargo", name: "Cargo Starship", position: new THREE.Vector3(52, 18, 24) });

  root.add(createCrates());
  root.add(createCargoOffload());
  root.add(createApproachMarkers());
  root.add(createPrepPad());
  landmarks.push({ id: "prep", name: "Landing prep", position: new THREE.Vector3(22, 4, 82) });

  const solar = createSolarFarm();
  root.add(solar);
  landmarks.push({ id: "solar", name: "Solar farm", position: new THREE.Vector3(78, 6, -38) });

  root.add(createPowerRun());

  const isru = createISRU();
  root.add(isru);
  colliders.push({ type: "box", x: -68, z: -16, w: 30, d: 22 });
  landmarks.push({ id: "isru", name: "Sabatier ISRU", position: new THREE.Vector3(-68, 8, -16) });

  root.add(createWaterFeed());

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
  root.add(createRover(30, 74, -0.2));
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

  root.add(createOptimus(42, 22, 0.6));
  root.add(createOptimus(39, 26, -0.4));
  root.add(createOptimus(26, 78, 2.2));

  root.add(createRoads());
  root.add(createLights());
  root.add(createSign());

  return { group: root, colliders, landmarks };
}

function createLandingPad(x, z, opts = {}) {
  const g = new THREE.Group();
  g.name = opts.finished ? "pad" : "cargo-pad";
  const y = getHeight(x, z);
  const radius = opts.finished ? 20 : 16;
  const deckMat = opts.finished ? mats.pad : mats.graded;
  g.add(mesh(new THREE.CylinderGeometry(radius, radius, 0.45, 48), deckMat, x, y + 0.15, z));
  if (opts.finished) {
    g.add(mesh(new THREE.TorusGeometry(radius + 0.4, 0.55, 8, 48), mats.padRing, x, y + 0.4, z, Math.PI / 2, 0, 0));
    g.add(mesh(new THREE.RingGeometry(7.5, 8.1, 40), mats.padRing, x, y + 0.4, z, -Math.PI / 2, 0, 0));
    g.add(mesh(new THREE.RingGeometry(13, 13.5, 40), mats.padRing, x, y + 0.4, z, -Math.PI / 2, 0, 0));
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      g.add(mesh(new THREE.BoxGeometry(0.35, 0.55, 0.35), mats.glowPad, x + Math.cos(a) * 19.2, y + 0.55, z + Math.sin(a) * 19.2));
    }
  } else {
    g.add(mesh(new THREE.TorusGeometry(radius + 0.3, 0.4, 8, 36), mats.padRing, x, y + 0.32, z, Math.PI / 2, 0, 0));
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      g.add(mesh(new THREE.BoxGeometry(0.28, 0.4, 0.28), mats.glowPad, x + Math.cos(a) * (radius - 0.6), y + 0.45, z + Math.sin(a) * (radius - 0.6)));
    }
  }
  const bermR = opts.finished ? 26 : 21;
  const berm = mesh(new THREE.TorusGeometry(bermR, opts.finished ? 2.2 : 1.8, 8, 40), mats.rust, x, y - 0.4, z, Math.PI / 2, 0, 0);
  berm.scale.set(1, 0.45, 1);
  g.add(berm);
  return g;
}

function createStarship(x = 0, z = 0, opts = {}) {
  const g = new THREE.Group();
  g.name = opts.name || "starship";
  g.position.set(x, 0, z);
  const y0 = getHeight(x, z) - 3.1;
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
    g.add(mesh(new THREE.CylinderGeometry(0.55, 1.15, 2.2, 12), mats.soot, Math.cos(a) * 1.5, y0 + 4.6, Math.sin(a) * 1.5));
  }
  const flapGeo = new THREE.BoxGeometry(1.1, 7.2, 3.6);
  g.add(mesh(flapGeo, mats.steelDark, -r - 0.2, y0 + 14, 0, 0, 0, 0.18));
  g.add(mesh(flapGeo, mats.steelDark, r + 0.2, y0 + 14, 0, 0, 0, -0.18));
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

  if (opts.cargoOpen) {
    g.add(mesh(new THREE.BoxGeometry(2.4, 6.2, 3.4), mats.soot, -r + 0.4, y0 + 16.4, 0));
    g.add(mesh(new THREE.BoxGeometry(0.12, 6.4, 3.6), mats.steel, -r - 2.1, y0 + 16.6, 2.0, 0, 1.15, 0));
    const yTop = y0 + 13.2;
    const yBot = getHeight(x, z) + 0.22;
    const xTop = -r - 0.3;
    const xBot = -r - 12.4;
    const rampLen = Math.hypot(xTop - xBot, yTop - yBot);
    const rampAng = Math.atan2(yTop - yBot, xTop - xBot);
    g.add(mesh(new THREE.BoxGeometry(rampLen, 0.16, 3.1), mats.steelDark, (xTop + xBot) / 2, (yTop + yBot) / 2, 0, 0, 0, rampAng));
    g.add(mesh(new THREE.BoxGeometry(10.5, 0.18, 0.18), mats.lattice, -7.2, y0 + 22.5, 0, 0, 0, 0.55));
    g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 7.2, 6), mats.cable, -12.2, y0 + 16.2, 0));
    g.add(mesh(new THREE.BoxGeometry(1.5, 1.3, 1.5), mats.crate, -12.2, y0 + 12.4, 0));
    g.add(labelPlane("CARGO", "#1a100c", "#f0c089", 3.4, 0.9, -r - 0.1, y0 + 24, 0, -Math.PI / 2));
  }

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
  for (const [x, z, rot] of spots) addCrate(g, x, z, rot);
  return g;
}

function createCargoOffload() {
  const g = new THREE.Group();
  g.name = "cargo-offload";
  const spots = [
    [40, 22, 0.2], [38.2, 24.1, -0.3], [41.4, 26.2, 0.8],
    [36.5, 21.4, 0.1], [37.8, 27.6, 1.4], [34.8, 24.8, -0.5],
    [39.2, 19.6, 0.6], [35.4, 19.2, 0.15],
  ];
  for (const [x, z, rot] of spots) addCrate(g, x, z, rot);
  addCrate(g, 38.6, 22.8, 0.1, 1.15);
  const [px, py, pz] = sit(36, 23.5, 0.08);
  g.add(mesh(new THREE.BoxGeometry(8.5, 0.12, 4.2), mats.steelDark, px, py, pz, 0, 0.15, 0));
  return g;
}

function createApproachMarkers() {
  const g = new THREE.Group();
  g.name = "approach";
  const runs = [
    { fx: 0, fz: 118, tx: 0, tz: 32, n: 7 },
    { fx: 52, fz: 90, tx: 52, tz: 42, n: 5 },
  ];
  for (const run of runs) {
    const ang = Math.atan2(run.tx - run.fx, run.tz - run.fz);
    for (let i = 0; i < run.n; i++) {
      const t = i / (run.n - 1);
      const x = run.fx + (run.tx - run.fx) * t;
      const z = run.fz + (run.tz - run.fz) * t;
      const y = getHeight(x, z);
      const chev = new THREE.Group();
      chev.add(mesh(new THREE.BoxGeometry(2.5, 0.16, 0.34), mats.glowPad, -0.75, 0, 0, 0, 0.5, 0));
      chev.add(mesh(new THREE.BoxGeometry(2.5, 0.16, 0.34), mats.glowPad, 0.75, 0, 0, 0, -0.5, 0));
      chev.position.set(x, y + 0.14, z);
      chev.rotation.y = ang;
      g.add(chev);
    }
  }
  return g;
}

function createPrepPad() {
  const g = new THREE.Group();
  g.name = "prep-pad";
  const x = 22;
  const z = 82;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.CylinderGeometry(14, 14, 0.28, 36), mats.graded, x, y + 0.08, z));
  const berm = mesh(new THREE.TorusGeometry(16.2, 1.7, 8, 28, Math.PI * 1.35), mats.rust, x, y - 0.15, z, Math.PI / 2, 0.5, 0);
  berm.scale.set(1, 0.42, 1);
  g.add(berm);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.2;
    const sx = x + Math.cos(a) * 15.2;
    const sz = z + Math.sin(a) * 15.2;
    const sy = getHeight(sx, sz);
    g.add(mesh(new THREE.BoxGeometry(0.08, 1.7, 0.08), mats.steel, sx, sy + 0.85, sz));
    g.add(mesh(new THREE.BoxGeometry(0.28, 0.16, 0.06), mats.glowPad, sx, sy + 1.62, sz, 0, a, 0));
  }
  const piles = [[12, 74], [30, 88], [14, 90]];
  for (const [px, pz] of piles) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.2, 0), mats.rust, px, getHeight(px, pz) + 0.9, pz);
    pile.scale.set(1.2, 0.65, 1.05);
    g.add(pile);
  }
  g.add(labelPlane("LANDING PREP", "#1a100c", "#f0c089", 4.4, 1.0, x + 10.5, y + 2.4, z + 2, -0.6));
  g.add(mesh(new THREE.BoxGeometry(0.12, 2.4, 0.12), mats.steelDark, x + 10.5, y + 1.2, z + 2));
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
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.0, 0.55, ix, iy + 0.2, iz + 0.75));
  return g;
}

function createPowerRun() {
  const g = new THREE.Group();
  g.name = "power-run";
  const ax = 54;
  const az = -18;
  const bx = -54;
  const bz = -16;
  const poles = [];
  const n = 10;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = ax + (bx - ax) * t;
    const z = az + (bz - az) * t;
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.09, 0.11, 4.4, 6), mats.steelDark, x, y + 2.2, z));
    g.add(mesh(new THREE.BoxGeometry(1.15, 0.08, 0.08), mats.steel, x, y + 4.35, z));
    poles.push({ x, y: y + 4.32, z });
  }
  for (let i = 0; i < poles.length - 1; i++) {
    const a = poles[i];
    const b = poles[i + 1];
    for (const off of [-0.38, 0.38]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(a.x, a.y, a.z + off),
        new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2 - 0.75, (a.z + b.z) / 2 + off),
        new THREE.Vector3(b.x, b.y, b.z + off),
      ]);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 6, 0.035, 4, false), mats.cable);
      tube.castShadow = false;
      g.add(tube);
    }
  }
  return g;
}

function createWaterFeed() {
  const g = new THREE.Group();
  g.name = "water-feed";
  const ax = -58;
  const az = -150;
  const bx = -68;
  const bz = -26;
  const n = 12;
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = ax + (bx - ax) * t;
    const z = az + (bz - az) * t;
    const y = getHeight(x, z) + 1.15;
    pts.push(new THREE.Vector3(x, y, z));
    if (i % 2 === 0) {
      g.add(mesh(new THREE.BoxGeometry(0.16, 1.1, 0.16), mats.steelDark, x, getHeight(x, z) + 0.55, z));
    }
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.16, 6, false), mats.pipe);
  tube.castShadow = false;
  g.add(tube);
  return g;
}

function createISRU() {
  const g = new THREE.Group();
  g.name = "isru";
  const baseX = -68;
  const baseZ = -16;
  const y = getHeight(baseX, baseZ);
  g.add(mesh(new THREE.BoxGeometry(30, 0.4, 22), mats.concrete, baseX, y + 0.15, baseZ));

  const reactor = mesh(new THREE.CylinderGeometry(1.8, 2.0, 13, 12), mats.steelDark, baseX + 4, y + 6.8, baseZ);
  g.add(reactor);
  g.add(mesh(new THREE.TorusGeometry(2.5, 0.18, 6, 16), mats.steel, baseX + 4, y + 10.2, baseZ, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(2.5, 0.18, 6, 16), mats.steel, baseX + 4, y + 7.4, baseZ, Math.PI / 2, 0, 0));
  g.add(labelPlane("SABATIER", "#1a100c", "#f0c089", 5.2, 1.15, baseX + 6.1, y + 8.2, baseZ, Math.PI / 2));

  const ch4 = mesh(new THREE.CylinderGeometry(3.0, 3.0, 13, 20), mats.tankCh4, baseX - 8, y + 7.1, baseZ + 5.4, 0, 0, Math.PI / 2);
  const o2 = mesh(new THREE.CylinderGeometry(3.0, 3.0, 13, 20), mats.tankO2, baseX - 8, y + 7.1, baseZ - 5.2, 0, 0, Math.PI / 2);
  g.add(ch4, o2);
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 3.6, 1.0, baseX - 1.2, y + 7.1, baseZ + 5.4));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 3.6, 1.0, baseX - 1.2, y + 7.1, baseZ - 5.2));

  g.add(mesh(new THREE.CylinderGeometry(2.2, 2.2, 7.2, 16), mats.pipe, baseX - 4, y + 4.0, baseZ - 10.4));
  g.add(labelPlane("H2O", "#1a2830", "#d6e6ef", 2.6, 0.75, baseX - 4, y + 5.6, baseZ - 8.1));
  const iceDump = mesh(new THREE.DodecahedronGeometry(2.1, 0), mats.ice, baseX + 1.5, y + 1.1, baseZ - 10.2);
  iceDump.scale.set(1.15, 0.6, 1.0);
  g.add(iceDump);

  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 7.5, 10), mats.steel, baseX + 10.5, y + 4.1, baseZ - 5.4));
  g.add(mesh(new THREE.CylinderGeometry(2.3, 0.7, 2.6, 14), mats.steelDark, baseX + 10.5, y + 8.8, baseZ - 5.4));
  g.add(mesh(new THREE.TorusGeometry(2.05, 0.1, 6, 16), mats.steel, baseX + 10.5, y + 10.15, baseZ - 5.4, Math.PI / 2, 0, 0));
  g.add(labelPlane("CO2", "#1a100c", "#f0c089", 2.4, 0.7, baseX + 10.5, y + 5.8, baseZ - 3.2));

  g.add(mesh(new THREE.BoxGeometry(4.2, 3.0, 3.2), mats.habDark, baseX + 10, y + 1.8, baseZ + 4.2));
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.2, 0.55, baseX + 10, y + 2.6, baseZ + 5.9));

  g.add(mesh(new THREE.CylinderGeometry(0.16, 0.16, 10, 8), mats.pipe, baseX + 7.2, y + 3.4, baseZ - 2.6, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.16, 0.16, 9, 8), mats.pipe, baseX - 1.5, y + 3.6, baseZ + 2.4, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.16, 0.16, 8.5, 8), mats.steel, baseX - 1.5, y + 3.6, baseZ - 2.2, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.14, 6.4, 8), mats.cable, baseX + 12.2, y + 3.8, baseZ + 1.2, 0, 0, Math.PI / 2));
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
  g.add(labelPlane("HAB 1", "#1a100c", "#f0c089", 2.6, 0.7, -6, getHeight(-6, -96) + 3.6, -94.4));
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

function createOptimus(x, z, heading) {
  const g = new THREE.Group();
  g.name = "optimus";
  const y = getHeight(x, z);
  g.position.set(x, y, z);
  g.rotation.y = heading;
  g.add(mesh(new THREE.BoxGeometry(0.42, 0.62, 0.24), mats.robot, 0, 1.28, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.22, 10), mats.robot, 0, 1.72, 0));
  g.add(mesh(new THREE.BoxGeometry(0.16, 0.08, 0.04), mats.steelDark, 0, 1.74, 0.14));
  g.add(mesh(new THREE.BoxGeometry(0.12, 0.48, 0.12), mats.robot, -0.28, 1.22, 0));
  g.add(mesh(new THREE.BoxGeometry(0.12, 0.48, 0.12), mats.robot, 0.28, 1.22, 0));
  g.add(mesh(new THREE.BoxGeometry(0.14, 0.62, 0.14), mats.steelDark, -0.1, 0.62, 0));
  g.add(mesh(new THREE.BoxGeometry(0.14, 0.62, 0.14), mats.steelDark, 0.1, 0.62, 0));
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
  g.add(mesh(new THREE.BoxGeometry(4.6, 0.16, 0.16), mats.steel, x + 1.2, y + 0.35, z - 2.8));
  g.add(mesh(new THREE.BoxGeometry(4.6, 0.16, 0.16), mats.steel, x + 1.2, y + 0.55, z - 3.05));
  g.add(labelPlane("WORKSHOP", "#1a100c", "#f0c089", 3.6, 0.85, x, y + 5.6, z + 0.2));
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
  g.add(labelPlane("ICE", "#1a2830", "#d6e6ef", 2.2, 0.65, x, y + 8.4, z + 2.6));
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
    [12, 8, 48, 22, 4],
    [16, 28, 22, 78, 3.5],
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
  const poles = [
    [18, -8], [-16, -6], [12, -48], [-10, -70], [6, -100], [30, -100], [-30, -20], [40, -40],
    [40, 18], [58, 32], [16, 70], [28, 88], [-54, -8],
  ];
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
  g.add(mesh(new THREE.BoxGeometry(0.12, 3.6, 0.12), mats.steelDark, x, y + 1.8, z));
  const board = labelPlane("BASE ALPHA", "#1a100c", "#f0c089", 3.8, 1.05, x, y + 3.55, z, 0.4);
  g.add(board);
  const sub = labelPlane("CARGO CAMPAIGN", "#1a100c", "#f0c089", 3.4, 0.7, x, y + 2.55, z, 0.4);
  g.add(sub);
  const site = labelPlane("ARCADIA PLANITIA", "#1a100c", "#d6b48a", 3.2, 0.55, 18, getHeight(18, 26) + 2.15, 26, 0.15);
  g.add(mesh(new THREE.BoxGeometry(0.1, 2.2, 0.1), mats.steelDark, 18, getHeight(18, 26) + 1.1, 26));
  g.add(site);
  return g;
}
