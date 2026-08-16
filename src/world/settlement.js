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
  const ship = createStarship(0, 0, { name: "starship", crewHab: true });
  root.add(ship);
  addCrewHabHull(colliders);
  landmarks.push({ id: "starship", name: "Crew hab Starship", position: new THREE.Vector3(0, 18, 0) });
  landmarks.push({ id: "eva", name: "EVA / airlock", position: new THREE.Vector3(2, 3, 12) });

  root.add(createLandingPad(52, 24, { finished: false }));
  const cargo = createStarship(52, 24, { name: "cargo-starship", cargoOpen: true });
  root.add(cargo);
  colliders.push({ type: "cyl", x: 52, z: 24, r: 7.4 });
  landmarks.push({ id: "cargo", name: "Cargo Starship", position: new THREE.Vector3(52, 18, 24) });

  root.add(createLandingPad(36, 72, { finished: false }));
  const cargo3 = createStarship(36, 72, { name: "cargo-3", cargoOpen: true });
  root.add(cargo3);
  colliders.push({ type: "cyl", x: 36, z: 72, r: 7.4 });
  landmarks.push({ id: "cargo3", name: "Cargo Starship 3", position: new THREE.Vector3(36, 18, 72) });
  root.add(createWindowOffload(24, 70));

  root.add(createLandingPad(-24, 44, { finished: false }));
  const cargo4 = createStarship(-24, 44, { name: "cargo-4" });
  root.add(cargo4);
  colliders.push({ type: "cyl", x: -24, z: 44, r: 7.4 });
  landmarks.push({ id: "cargo4", name: "Cargo Starship 4", position: new THREE.Vector3(-24, 18, 44) });

  root.add(createLandingPad(-48, 68, { finished: false }));
  const cargo5 = createStarship(-48, 68, { name: "cargo-5", cargoOpen: true });
  root.add(cargo5);
  colliders.push({ type: "cyl", x: -48, z: 68, r: 7.4 });
  landmarks.push({ id: "cargo5", name: "Window-2 cargo Starship", position: new THREE.Vector3(-48, 18, 68) });
  root.add(createWindowOffload(-60, 66));

  root.add(createLandingPad(78, 56, { finished: false }));
  const cargo6 = createStarship(78, 56, { name: "cargo-6" });
  root.add(cargo6);
  colliders.push({ type: "cyl", x: 78, z: 56, r: 7.4 });
  landmarks.push({ id: "cargo6", name: "Window-2 cargo Starship", position: new THREE.Vector3(78, 18, 56) });

  root.add(createCrates());
  root.add(createCargoOffload());
  root.add(createApproachMarkers());
  root.add(createPrepPad());
  landmarks.push({ id: "prep", name: "Landing prep", position: new THREE.Vector3(22, 4, 82) });

  root.add(createNextWindowPad());
  landmarks.push({ id: "pad2", name: "Next-window pad", position: new THREE.Vector3(-16, 6, 136) });

  const solar = createSolarFarm();
  root.add(solar);
  landmarks.push({ id: "solar", name: "Solar farm", position: new THREE.Vector3(82, 6, -44) });

  const solar2 = createSolarField2();
  root.add(solar2);
  landmarks.push({ id: "solar2", name: "Solar field 2", position: new THREE.Vector3(112, 5, -83) });

  const solar3 = createSolarField3();
  root.add(solar3);
  landmarks.push({ id: "solar3", name: "Solar field 3", position: new THREE.Vector3(135, 5, -40) });

  const solar4 = createSolarField4();
  root.add(solar4);
  colliders.push({ type: "box", x: 158, z: -28, w: 12, d: 8 });
  landmarks.push({ id: "solar4", name: "Solar field 4", position: new THREE.Vector3(158, 5, -62) });

  root.add(createPowerRun());
  root.add(createSolarTie());

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

  const habBuild = createHabAssembly();
  root.add(habBuild);
  colliders.push({ type: "box", x: -32, z: -98, w: 16, d: 12 });
  landmarks.push({ id: "hab-kit", name: "Hab from cargo", position: new THREE.Vector3(-32, 5, -98) });

  const pressure = createPressureHabs();
  root.add(pressure);
  colliders.push({ type: "box", x: -46, z: -108, w: 14, d: 8 });
  colliders.push({ type: "box", x: -46, z: -94, w: 14, d: 8 });
  colliders.push({ type: "box", x: -58, z: -102, w: 8, d: 14 });
  landmarks.push({ id: "pressure", name: "Pressure habs", position: new THREE.Vector3(-50, 5, -100) });

  const habStreet = createHabStreet();
  root.add(habStreet);
  colliders.push({ type: "box", x: -20, z: -132, w: 14, d: 8 });
  colliders.push({ type: "box", x: -6, z: -132, w: 14, d: 8 });
  colliders.push({ type: "box", x: -13, z: -142, w: 8, d: 14 });
  landmarks.push({ id: "hab3", name: "Hab street", position: new THREE.Vector3(-13, 5, -134) });

  const hood = createNeighborhood();
  root.add(hood);
  addTubeRails(colliders, -33, -120, "x", 28);
  addTubeRails(colliders, -6, -120, "z", 24);
  addTubeRails(colliders, -4, -58, "z", 70);
  colliders.push({ type: "cyl", x: 2, z: -22, r: 1.6 });
  landmarks.push({ id: "corridors", name: "Pressurized neighborhood", position: new THREE.Vector3(-20, 4, -120) });

  const yard = createConstructionYard();
  root.add(yard);
  colliders.push({ type: "box", x: -30, z: -69, w: 9, d: 9 });
  colliders.push({ type: "box", x: -38, z: -74.2, w: 7, d: 4.4 });
  addTubeRails(colliders, -36, -87, "z", 24);
  addTubeRails(colliders, -45, -74, "x", 12);
  landmarks.push({ id: "yard", name: "Construction yard", position: new THREE.Vector3(-36, 5, -74) });
  landmarks.push({ id: "hab6", name: "Hab 6", position: new THREE.Vector3(-40, 5, -76) });

  const ops = createCrewOps();
  root.add(ops);
  colliders.push({ type: "box", x: -53, z: -72, w: 6, d: 7 });
  landmarks.push({ id: "med", name: "Crew ops / medical", position: new THREE.Vector3(-50, 5, -72) });

  const commons = createCommons();
  root.add(commons);
  colliders.push({ type: "box", x: 10, z: -124, w: 14, d: 10 });
  addTubeRails(colliders, 2, -128, "x", 10);
  landmarks.push({ id: "commons", name: "Crew commons / mess", position: new THREE.Vector3(10, 5, -124) });

  const gh = createGreenhouse();
  root.add(gh);
  colliders.push({ type: "box", x: 22, z: -112, w: 16, d: 10 });
  colliders.push({ type: "box", x: 32, z: -112, w: 8, d: 6 });
  landmarks.push({ id: "greenhouse", name: "CO2 life support", position: new THREE.Vector3(22, 4, -112) });

  const food = createFoodWing();
  root.add(food);
  colliders.push({ type: "box", x: 38, z: -126, w: 14, d: 9 });
  landmarks.push({ id: "food", name: "Food / grow vault", position: new THREE.Vector3(38, 4, -126) });

  const food2 = createFoodVault3();
  root.add(food2);
  colliders.push({ type: "box", x: 8, z: -142, w: 14, d: 9 });
  landmarks.push({ id: "food2", name: "Hab-street grow vault", position: new THREE.Vector3(8, 4, -142) });

  const water = createWaterLoop();
  root.add(water);
  colliders.push({ type: "box", x: -60, z: -148, w: 8, d: 6 });
  colliders.push({ type: "box", x: -64, z: -118, w: 8, d: 6 });
  colliders.push({ type: "box", x: -18, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "water", name: "Water loop", position: new THREE.Vector3(-18, 4, -88) });

  const batt = createBatteries();
  root.add(batt);
  colliders.push({ type: "box", x: 68, z: -10, w: 16, d: 8 });
  colliders.push({ type: "box", x: -22, z: -88, w: 8, d: 6 });
  landmarks.push({ id: "battery", name: "Night power store", position: new THREE.Vector3(68, 4, -10) });

  const batt2 = createBatteryYard2();
  root.add(batt2);
  colliders.push({ type: "box", x: 68, z: 6, w: 16, d: 8 });
  colliders.push({ type: "box", x: -28, z: -138, w: 8, d: 6 });
  landmarks.push({ id: "battery2", name: "Crew night store", position: new THREE.Vector3(68, 4, 6) });

  const methalox = createMethaloxStand();
  root.add(methalox);
  colliders.push({ type: "box", x: -15, z: -8, w: 10, d: 7 });
  landmarks.push({ id: "spaceport", name: "Methalox spaceport", position: new THREE.Vector3(-15, 4, -8) });
  const stock = createMethaloxStockpile();
  root.add(stock);
  colliders.push({ type: "box", x: 20, z: 8, w: 16, d: 12 });
  landmarks.push({ id: "stock", name: "Methalox stockpile", position: new THREE.Vector3(20, 4, 8) });
  root.add(createMethaloxLines());
  root.add(createSpaceportSign());

  root.add(createRover(16, 14, -0.4));
  root.add(createRover(8, -62, 1.2));
  root.add(createRover(30, 74, -0.2));
  root.add(createRover(-94, -182, 0.7));
  landmarks.push({ id: "rover", name: "Haul rover", position: new THREE.Vector3(8, 2, -62) });

  const haul = createHaulLoop();
  root.add(haul);
  colliders.push({ type: "box", x: -64, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "haul", name: "Ice haul", position: new THREE.Vector3(-64, 3, -90) });

  const shop = createWorkshop();
  root.add(shop);
  colliders.push({ type: "box", x: 48, z: -86, w: 16, d: 12 });
  landmarks.push({ id: "workshop", name: "Workshop", position: new THREE.Vector3(48, 5, -86) });

  const tower = createCommsTower();
  root.add(tower);
  colliders.push({ type: "cyl", x: -18, z: -138, r: 3 });
  landmarks.push({ id: "comms", name: "Comms tower", position: new THREE.Vector3(-18, 16, -138) });

  const earth = createEarthDish();
  root.add(earth);
  colliders.push({ type: "cyl", x: -32, z: -148, r: 8.4 });
  colliders.push({ type: "box", x: -40, z: -154, w: 6, d: 5 });
  landmarks.push({ id: "earth", name: "Earth dish · 12 min delay", position: new THREE.Vector3(-32, 12, -148) });

  const mine = createIceMine();
  root.add(mine);
  colliders.push({ type: "cyl", x: -58, z: -158, r: 6 });
  landmarks.push({ id: "ice", name: "Ice mining rig", position: new THREE.Vector3(-58, 8, -158) });

  const survey = createSurvey();
  root.add(survey);
  colliders.push({ type: "cyl", x: -82, z: -176, r: 2.4 });
  landmarks.push({ id: "survey", name: "Resource survey", position: new THREE.Vector3(-88, 5, -188) });

  root.add(createOptimus(42, 22, 0.6));
  root.add(createOptimus(39, 26, -0.4));
  root.add(createOptimus(26, 78, 2.2));
  root.add(createOptimus(26, 68, 0.5));
  root.add(createOptimus(22, 72, -0.8));
  root.add(createOptimus(-80, -174, 0.8));
  root.add(createOptimus(-34, -92, -1.2));
  root.add(createOptimus(-28, -104, 0.3));
  root.add(createOptimus(16, -120, 0.6));
  root.add(createOptimus(-28, 128, 1.1));
  root.add(createEvaPresence());

  addPropColliders(colliders);

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

  if (opts.crewHab) {
    const lockY = y0 + 13.0;
    g.add(mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.7, 14), mats.habDark, 0, lockY, r + 1.35, Math.PI / 2, 0, 0));
    g.add(mesh(new THREE.TorusGeometry(1.22, 0.09, 6, 16), mats.steel, 0, lockY, r + 0.28));
    g.add(mesh(new THREE.TorusGeometry(1.22, 0.09, 6, 16), mats.steel, 0, lockY, r + 2.55));
    g.add(mesh(new THREE.BoxGeometry(1.05, 1.75, 0.1), mats.steelDark, 0, lockY, r + 2.72));
    g.add(mesh(new THREE.BoxGeometry(3.4, 0.14, 2.6), mats.steelDark, 0, lockY - 1.28, r + 2.9));
    g.add(mesh(new THREE.BoxGeometry(0.1, 1.15, 2.5), mats.steel, -1.6, lockY - 0.65, r + 2.9));
    g.add(mesh(new THREE.BoxGeometry(0.1, 1.15, 2.5), mats.steel, 1.6, lockY - 0.65, r + 2.9));

    const yTop = lockY - 1.28;
    const yBot = getHeight(x, z) + 0.28;
    const zTop = r + 3.6;
    const zBot = r + 13.2;
    const steps = 11;
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      g.add(mesh(new THREE.BoxGeometry(2.15, 0.12, 0.95), mats.steelDark, 0, yTop + (yBot - yTop) * t, zTop + (zBot - zTop) * t));
    }
    const rampLen = Math.hypot(zTop - zBot, yTop - yBot);
    const rampAng = Math.atan2(yTop - yBot, zBot - zTop);
    g.add(mesh(new THREE.BoxGeometry(2.25, 0.08, rampLen), mats.steel, 0, (yTop + yBot) / 2 - 0.12, (zTop + zBot) / 2, rampAng, 0, 0));
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.85, rampLen), mats.steel, -1.12, (yTop + yBot) / 2 + 0.35, (zTop + zBot) / 2, rampAng, 0, 0));
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.85, rampLen), mats.steel, 1.12, (yTop + yBot) / 2 + 0.35, (zTop + zBot) / 2, rampAng, 0, 0));

    const vz = zBot + 1.55;
    const vy = getHeight(x, z) + 1.35;
    g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 2.5, 12), mats.habDark, 0, vy, vz));
    g.add(mesh(new THREE.BoxGeometry(1.05, 1.7, 0.1), mats.steelDark, 0, vy + 0.05, vz + 1.4));
    g.add(mesh(new THREE.TorusGeometry(1.38, 0.07, 6, 14), mats.steel, 0, vy + 1.28, vz, Math.PI / 2, 0, 0));
    g.add(mesh(new THREE.BoxGeometry(2.2, 0.12, 2.2), mats.steelDark, 0, getHeight(x, z) + 0.12, vz));

    for (let i = 0; i < 5; i++) {
      g.add(mesh(new THREE.BoxGeometry(0.85, 0.48, 0.08), mats.glowWarm, 1.55, y0 + 16.5 + i * 3.4, r + 0.06));
      g.add(mesh(new THREE.BoxGeometry(0.08, 0.48, 0.85), mats.glowWarm, r + 0.06, y0 + 16.5 + i * 3.4, -1.35));
    }

    g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 12), mats.steel, 2.55, y0 + 14.2, r + 0.04, Math.PI / 2, 0, 0));
    g.add(mesh(new THREE.TorusGeometry(0.52, 0.06, 6, 12), mats.steelDark, 2.55, y0 + 14.2, r + 0.14));

    g.add(labelPlane("CREW HAB", "#1a100c", "#f0c089", 3.4, 0.85, 0, lockY + 2.55, r + 2.35));
    g.add(labelPlane("AIRLOCK", "#1a100c", "#f0c089", 2.3, 0.55, 1.85, lockY + 0.15, r + 2.05, Math.PI / 2));
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
  addCrate(g, 33.2, 20.4, 0.25, 1.2);
  addCrate(g, 31.4, 22.1, -0.2, 1.05);
  const [px, py, pz] = sit(36, 23.5, 0.08);
  g.add(mesh(new THREE.BoxGeometry(8.5, 0.12, 4.2), mats.steelDark, px, py, pz, 0, 0.15, 0));
  g.add(labelPlane("HAB KIT", "#1a100c", "#f0c089", 2.6, 0.7, 33.2, getHeight(33.2, 20.4) + 2.5, 20.4, 0.35));
  return g;
}

function createApproachMarkers() {
  const g = new THREE.Group();
  g.name = "approach";
  const runs = [
    { fx: 0, fz: 118, tx: 0, tz: 32, n: 7 },
    { fx: 52, fz: 90, tx: 52, tz: 42, n: 5 },
    { fx: 36, fz: 128, tx: 36, tz: 90, n: 4 },
    { fx: -24, fz: 92, tx: -24, tz: 60, n: 4 },
    { fx: -48, fz: 118, tx: -48, tz: 86, n: 4 },
    { fx: 78, fz: 104, tx: 78, tz: 74, n: 4 },
    { fx: -16, fz: 178, tx: -16, tz: 154, n: 5 },
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
  const cols = 10;
  const rows = 8;
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
  for (let i = 0; i < 5; i++) {
    const x = 58 + i * 5.4;
    const z = -22 - 8 * 6.2;
    const y = getHeight(x, z);
    g.add(mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mats.solarFrame, x, y + 0.8, z));
    if (i < 2) {
      g.add(mesh(new THREE.BoxGeometry(4.6, 0.08, 2.3), mats.solar, x + 1.1, y + 0.22, z + 1.5, 1.2, 0.25, 0));
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
  g.add(mesh(new THREE.BoxGeometry(15.2, 0.25, 8.6), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(4.15, 4.15, 14.2, 18, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 4.1, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(14.2, 0.1, 8.4), mats.solarFrame, x, y + 4.15, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.TorusGeometry(4.12, 0.055, 6, 16, Math.PI), mats.solarFrame, x + i * 2.7, y + 4.1, z, 0, Math.PI / 2, 0));
  }
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(2.05, 0.26, 6.6), mats.soil, x + i * 2.35, y + 0.36, z));
    for (let j = -2; j <= 2; j++) {
      const leaf = j % 2 === 0 ? mats.plant : mats.plantLeaf;
      g.add(mesh(new THREE.BoxGeometry(1.45, 0.52, 0.82), leaf, x + i * 2.35, y + 0.72, z + j * 1.12));
      g.add(mesh(new THREE.BoxGeometry(0.55, 0.42, 0.4), mats.plantLeaf, x + i * 2.35 + 0.2, y + 1.05, z + j * 1.12));
    }
    g.add(mesh(new THREE.BoxGeometry(1.7, 0.05, 6.1), mats.glowWarm, x + i * 2.35, y + 3.55, z));
  }
  g.add(mesh(new THREE.BoxGeometry(1.2, 2, 0.15), mats.habDark, x - 7.1, y + 1.2, z));

  const cx = x + 10.4;
  const cz = z;
  const cy = getHeight(cx, cz);
  g.add(mesh(new THREE.BoxGeometry(5.4, 0.2, 4.6), mats.concrete, cx, cy + 0.08, cz));
  g.add(mesh(new THREE.CylinderGeometry(0.52, 0.52, 5.4, 10), mats.steel, cx + 1.15, cy + 2.9, cz - 1.05));
  g.add(mesh(new THREE.CylinderGeometry(1.75, 0.55, 1.7, 14), mats.steelDark, cx + 1.15, cy + 6.2, cz - 1.05));
  g.add(mesh(new THREE.TorusGeometry(1.5, 0.08, 6, 14), mats.steel, cx + 1.15, cy + 7.1, cz - 1.05, Math.PI / 2, 0, 0));
  g.add(labelPlane("CO2", "#1a100c", "#f0c089", 1.9, 0.5, cx + 1.15, cy + 3.7, cz + 0.35));
  g.add(mesh(new THREE.BoxGeometry(2.5, 1.85, 1.9), mats.habDark, cx - 0.7, cy + 1.08, cz + 0.95));
  g.add(labelPlane("COMPRESS", "#1a100c", "#f0c089", 2.35, 0.55, cx - 0.7, cy + 1.55, cz + 1.95));
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.14, 6.4, 8), mats.pipe, x + 6.6, y + 1.55, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.68, 0.68, 2.35, 12), mats.tankO2, x - 5.5, y + 1.45, z + 5.15));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.35, 0.42, x - 5.5, y + 1.65, z + 5.95));
  g.add(labelPlane("LIFE SUPPORT", "#1a100c", "#f0c089", 3.7, 0.7, x, y + 5.55, z + 0.15));
  g.add(labelPlane("COMPRESSED CO2", "#1a100c", "#d6b48a", 3.5, 0.55, x, y + 4.75, z + 0.15));
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


function addFlag(g, x, z, text, cloth) {
  const y = getHeight(x, z);
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.07, 3.2, 6), mats.steelDark, x, y + 1.6, z));
  g.add(mesh(new THREE.BoxGeometry(1.15, 0.7, 0.04), cloth, x + 0.58, y + 2.75, z));
  g.add(labelPlane(text, "#1a100c", "#f0c089", 1.45, 0.4, x + 0.58, y + 2.75, z + 0.05));
}

function addStake(g, x, z, cloth) {
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(0.07, 1.55, 0.07), mats.steelDark, x, y + 0.78, z));
  g.add(mesh(new THREE.BoxGeometry(0.38, 0.22, 0.03), cloth, x + 0.2, y + 1.42, z));
}

function addSampleCache(g, x, z, rot = 0) {
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(0.85, 0.55, 0.65), mats.crate, x, y + 0.32, z, 0, rot, 0));
  g.add(mesh(new THREE.BoxGeometry(0.88, 0.06, 0.68), mats.steelDark, x, y + 0.62, z, 0, rot, 0));
}

function createSolarField2() {
  const g = new THREE.Group();
  g.name = "solar-2";
  const cols = 6;
  const rows = 4;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = 98 + i * 5.4;
      const z = -74 - j * 6.2;
      const y = getHeight(x, z);
      const stand = mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mats.solarFrame, x, y + 0.8, z);
      const panel = mesh(new THREE.BoxGeometry(4.6, 0.08, 2.3), mats.solar, x, y + 1.55, z, -0.55, 0.15, 0);
      const frame = mesh(new THREE.BoxGeometry(4.75, 0.05, 2.42), mats.solarFrame, x, y + 1.5, z, -0.55, 0.15, 0);
      g.add(stand, panel, frame);
    }
  }
  const [ix, iy, iz] = sit(96, -72, 0.7);
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.4), mats.habDark, ix, iy, iz));
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.0, 0.55, ix, iy + 0.2, iz + 0.75));
  return g;
}

function createSolarTie() {
  const g = new THREE.Group();
  g.name = "solar-tie";
  const ax = 90;
  const az = -48;
  const bx = 112;
  const bz = -83;
  const poles = [];
  const n = 5;
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
        new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2 - 0.65, (a.z + b.z) / 2 + off),
        new THREE.Vector3(b.x, b.y, b.z + off),
      ]);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 6, 0.035, 4, false), mats.cable);
      tube.castShadow = false;
      g.add(tube);
    }
  }
  return g;
}

function createHabAssembly() {
  const g = new THREE.Group();
  g.name = "hab-assembly";
  const x = -32;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(18, 0.22, 14), mats.concrete, x, y + 0.08, z));
  const jacks = [[-5, -2.2], [5, -2.2], [-5, 2.2], [5, 2.2]];
  for (const [jx, jz] of jacks) {
    g.add(mesh(new THREE.CylinderGeometry(0.18, 0.28, 1.85, 8), mats.steelDark, x + jx, y + 1.02, z + jz));
    g.add(mesh(new THREE.BoxGeometry(0.72, 0.12, 0.72), mats.steel, x + jx, y + 0.14, z + jz));
    g.add(mesh(new THREE.BoxGeometry(0.55, 0.1, 0.55), mats.steel, x + jx, y + 1.96, z + jz));
  }
  const bodyY = y + 3.55;
  g.add(mesh(new THREE.CylinderGeometry(3.0, 3.0, 11, 16), mats.hab, x, bodyY, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.SphereGeometry(3.0, 14, 10), mats.hab, x - 5.5, bodyY, z));
  g.add(mesh(new THREE.SphereGeometry(3.0, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mats.hab, x + 8.4, y + 1.55, z + 0.45, 0.22, 0.35, 0.12));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 2.4, 12), mats.habDark, x, bodyY, z + 4.15, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(1.0, 1.65, 0.1), mats.steelDark, x, bodyY, z + 5.45));
  g.add(mesh(new THREE.TorusGeometry(1.38, 0.08, 6, 14), mats.steel, x, bodyY, z + 3.05, 0, 0, 0));
  for (const [sx, sz] of [[-7.2, 4.6], [6.8, 4.8], [-6.4, -5.2]]) {
    g.add(mesh(new THREE.BoxGeometry(0.12, 3.6, 0.12), mats.lattice, x + sx, y + 1.9, z + sz));
    g.add(mesh(new THREE.BoxGeometry(0.12, 3.6, 0.12), mats.lattice, x + sx + 1.4, y + 1.9, z + sz));
    g.add(mesh(new THREE.BoxGeometry(1.6, 0.08, 0.08), mats.lattice, x + sx + 0.7, y + 3.7, z + sz));
  }
  addCrate(g, x - 8.2, z + 6.2, 0.2);
  addCrate(g, x - 6.3, z + 7.4, -0.35);
  addCrate(g, x + 7.1, z - 5.6, 0.5, 1.1);
  addCrate(g, x + 5.4, z - 6.4, 0.15);
  g.add(labelPlane("HAB KIT", "#1a100c", "#f0c089", 3.0, 0.75, x, y + 6.4, z + 3.2));
  g.add(labelPlane("AIRLOCK", "#1a100c", "#f0c089", 2.2, 0.55, x + 2.4, bodyY + 0.2, z + 4.2, Math.PI / 2));
  return g;
}

function addPressureModule(g, x, z, ry, opts = {}) {
  const y = getHeight(x, z);
  const r = opts.r || 2.85;
  const len = opts.len || 10.4;
  const bodyY = opts.onStands ? y + 3.4 : y + 3.05;
  const cx = Math.cos(ry);
  const sx = Math.sin(ry);
  if (opts.onStands) {
    for (const [jx, jz] of [[-4.1, -2.05], [4.1, -2.05], [-4.1, 2.05], [4.1, 2.05]]) {
      const wx = x + cx * jx - sx * jz;
      const wz = z + sx * jx + cx * jz;
      g.add(mesh(new THREE.CylinderGeometry(0.16, 0.26, 1.75, 8), mats.steelDark, wx, y + 0.98, wz));
      g.add(mesh(new THREE.BoxGeometry(0.7, 0.12, 0.7), mats.steel, wx, y + 0.14, wz));
      g.add(mesh(new THREE.BoxGeometry(0.52, 0.1, 0.52), mats.steel, wx, y + 1.9, wz));
    }
  } else {
    for (const [jx, jz] of [[-3.6, 0], [3.6, 0]]) {
      const wx = x + cx * jx - sx * jz;
      const wz = z + sx * jx + cx * jz;
      g.add(mesh(new THREE.BoxGeometry(1.6, 0.55, 1.15), mats.steelDark, wx, y + 0.38, wz, 0, ry, 0));
    }
  }
  const body = mesh(new THREE.CylinderGeometry(r, r, len, 16), mats.hab, x, bodyY, z, 0, 0, Math.PI / 2);
  body.rotation.y = ry;
  g.add(body);
  if (!opts.partial) {
    g.add(mesh(new THREE.SphereGeometry(r, 14, 10), mats.hab, x + cx * (len / 2), bodyY, z + sx * (len / 2)));
    g.add(mesh(new THREE.SphereGeometry(r, 14, 10), mats.hab, x - cx * (len / 2), bodyY, z - sx * (len / 2)));
  } else {
    g.add(mesh(new THREE.SphereGeometry(r, 14, 10), mats.hab, x - cx * (len / 2), bodyY, z - sx * (len / 2)));
    const ex = x + cx * (len / 2 + 2.3);
    const ez = z + sx * (len / 2 + 2.3);
    g.add(mesh(new THREE.SphereGeometry(r, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mats.hab, ex, y + 1.45, ez, 0.22, 0.3, 0.1));
  }
  for (let i = -2; i <= 2; i++) {
    const wx = x + cx * i * 1.75;
    const wz = z + sx * i * 1.75;
    g.add(mesh(new THREE.BoxGeometry(0.8, 0.55, 0.08), mats.glowWarm, wx - sx * r, bodyY + 0.08, wz + cx * r));
  }
  if (opts.airlock) {
    const px = x - sx * (r + 1.15);
    const pz = z + cx * (r + 1.15);
    g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 2.2, 12), mats.habDark, px, bodyY, pz, Math.PI / 2, ry, 0));
    g.add(mesh(new THREE.BoxGeometry(1.0, 1.6, 0.1), mats.steelDark, px - sx * 1.15, bodyY, pz + cx * 1.15, 0, ry, 0));
    g.add(mesh(new THREE.TorusGeometry(1.18, 0.07, 6, 14), mats.steel, px + sx * 0.2, bodyY, pz - cx * 0.2, 0, ry, 0));
    g.add(labelPlane("AIRLOCK", "#1a100c", "#f0c089", 2.15, 0.5, px - sx * 0.2, bodyY + 1.45, pz + cx * 0.2, ry));
  }
  if (opts.label) {
    g.add(labelPlane(opts.label, "#1a100c", "#f0c089", 2.7, 0.65, x, bodyY + r + 0.55, z + 0.15, ry));
  }
}

function createPressureHabs() {
  const g = new THREE.Group();
  g.name = "pressure-habs";
  const yPad = getHeight(-46, -101);
  g.add(mesh(new THREE.BoxGeometry(28, 0.2, 22), mats.concrete, -50, yPad + 0.06, -101));
  addPressureModule(g, -46, -108, 0, { airlock: true, label: "HAB 2" });
  addPressureModule(g, -46, -94, 0, { onStands: true, airlock: true, label: "HAB KIT" });
  const ty = getHeight(-46, -101) + 3.15;
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 8.2, 12), mats.habDark, -46, ty, -101, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(1.2, 0.08, 6, 14), mats.steel, -46, ty, -105.1, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(1.2, 0.08, 6, 14), mats.steel, -46, ty, -96.9, Math.PI / 2, 0, 0));
  g.add(labelPlane("CONNECT", "#1a100c", "#f0c089", 2.4, 0.5, -46, ty + 1.55, -101));
  addPressureModule(g, -58, -102, Math.PI / 2, { onStands: true, partial: true, label: "MOD" });
  addCrate(g, -54.5, -110.2, 0.25);
  addCrate(g, -52.8, -111.4, -0.3, 1.08);
  addCrate(g, -61.2, -96.4, 0.4);
  addCrate(g, -40.6, -90.8, 0.15, 1.05);
  return g;
}

function createEvaSuit(x, z, heading) {
  const g = new THREE.Group();
  g.name = "eva";
  const y = getHeight(x, z);
  g.position.set(x, y, z);
  g.rotation.y = heading;
  g.add(mesh(new THREE.BoxGeometry(0.56, 0.8, 0.4), mats.suit, 0, 1.46, 0));
  g.add(mesh(new THREE.BoxGeometry(0.44, 0.5, 0.24), mats.suitDark, 0, 1.52, -0.3));
  g.add(mesh(new THREE.SphereGeometry(0.21, 12, 10), mats.suit, 0, 2.04, 0.02));
  g.add(mesh(new THREE.SphereGeometry(0.165, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.58), mats.visor, 0, 2.04, 0.1));
  g.add(mesh(new THREE.BoxGeometry(0.17, 0.6, 0.17), mats.suit, -0.4, 1.36, 0.04));
  g.add(mesh(new THREE.BoxGeometry(0.17, 0.6, 0.17), mats.suit, 0.4, 1.36, 0.04));
  g.add(mesh(new THREE.BoxGeometry(0.2, 0.76, 0.2), mats.suitDark, -0.15, 0.7, 0));
  g.add(mesh(new THREE.BoxGeometry(0.2, 0.76, 0.2), mats.suitDark, 0.15, 0.7, 0));
  return g;
}

function addToolCart(g, x, z, heading) {
  const y = getHeight(x, z);
  const cart = new THREE.Group();
  cart.position.set(x, y, z);
  cart.rotation.y = heading;
  cart.add(mesh(new THREE.BoxGeometry(1.2, 0.18, 0.72), mats.steelDark, 0, 0.62, 0));
  cart.add(mesh(new THREE.BoxGeometry(1.15, 0.28, 0.68), mats.crate, 0, 0.86, 0));
  cart.add(mesh(new THREE.BoxGeometry(0.08, 0.55, 0.08), mats.steel, -0.48, 0.32, 0.26));
  cart.add(mesh(new THREE.BoxGeometry(0.08, 0.55, 0.08), mats.steel, 0.48, 0.32, 0.26));
  cart.add(mesh(new THREE.BoxGeometry(0.08, 0.55, 0.08), mats.steel, -0.48, 0.32, -0.26));
  cart.add(mesh(new THREE.BoxGeometry(0.08, 0.55, 0.08), mats.steel, 0.48, 0.32, -0.26));
  const wheel = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 10);
  cart.add(mesh(wheel, mats.roverDark, -0.48, 0.12, 0.3, Math.PI / 2, 0, 0));
  cart.add(mesh(wheel, mats.roverDark, 0.48, 0.12, 0.3, Math.PI / 2, 0, 0));
  cart.add(mesh(wheel, mats.roverDark, -0.48, 0.12, -0.3, Math.PI / 2, 0, 0));
  cart.add(mesh(wheel, mats.roverDark, 0.48, 0.12, -0.3, Math.PI / 2, 0, 0));
  cart.add(mesh(new THREE.BoxGeometry(0.06, 0.7, 0.06), mats.steel, -0.22, 1.3, 0.08));
  cart.add(mesh(new THREE.BoxGeometry(0.06, 0.55, 0.06), mats.steel, 0.18, 1.22, -0.06));
  cart.add(mesh(new THREE.BoxGeometry(0.22, 0.12, 0.12), mats.steelDark, -0.22, 1.68, 0.08));
  g.add(cart);
}

function addSuitport(g, x, z, heading) {
  const y = getHeight(x, z);
  const port = new THREE.Group();
  port.position.set(x, y, z);
  port.rotation.y = heading;
  port.add(mesh(new THREE.BoxGeometry(0.85, 2.45, 0.32), mats.steelDark, 0, 1.32, 0));
  port.add(mesh(new THREE.TorusGeometry(0.42, 0.07, 8, 14), mats.steel, 0, 1.58, 0.22));
  port.add(mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.1, 12), mats.habDark, 0, 1.58, 0.18, Math.PI / 2, 0, 0));
  port.add(mesh(new THREE.BoxGeometry(0.7, 0.16, 0.55), mats.steel, 0, 0.12, 0.05));
  g.add(port);
}

function createEvaPresence() {
  const g = new THREE.Group();
  g.name = "eva-presence";
  g.add(createEvaSuit(2.4, 12.2, headingToward(2.4, 12.2, 0, 7)));
  g.add(createEvaSuit(-2.2, 11.5, headingToward(-2.2, 11.5, 0, 7)));
  g.add(createEvaSuit(3.8, 15.6, 0.35));
  g.add(createEvaSuit(0.6, 18.2, Math.PI));
  addToolCart(g, 4.3, 14.8, 0.4);
  addSuitport(g, -3.9, 9.1, 0.2);
  addCrate(g, 5.4, 13.2, 0.2, 0.85);
  const y = getHeight(5.1, 16.4);
  g.add(mesh(new THREE.BoxGeometry(0.1, 2.2, 0.1), mats.steelDark, 5.1, y + 1.1, 16.4));
  g.add(labelPlane("EVA PREP", "#1a100c", "#f0c089", 2.3, 0.55, 5.1, y + 2.45, 16.4, -0.35));
  return g;
}

function createSurvey() {
  const g = new THREE.Group();
  g.name = "survey";
  const px = -82;
  const pz = -176;
  const py = getHeight(px, pz);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4;
    const lx = Math.cos(a) * 0.62;
    const lz = Math.sin(a) * 0.62;
    g.add(mesh(new THREE.BoxGeometry(0.08, 2.5, 0.08), mats.steelDark, px + lx, py + 1.15, pz + lz, 0.32 * Math.cos(a), 0, 0.32 * Math.sin(a)));
  }
  g.add(mesh(new THREE.BoxGeometry(0.58, 0.32, 0.48), mats.roverDark, px, py + 2.28, pz));
  g.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.35, 6), mats.steel, px, py + 3.08, pz));
  g.add(mesh(new THREE.BoxGeometry(0.22, 0.12, 0.22), mats.steelDark, px, py + 3.78, pz));
  g.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 0.12), mats.steelDark, px + 1.15, py + 1.1, pz + 0.2));
  g.add(labelPlane("SURVEY", "#1a100c", "#f0c089", 2.6, 0.7, px + 0.2, py + 3.55, pz + 1.15));

  const stakeGrid = [
    [-108, -210], [-98, -210], [-88, -210], [-78, -210], [-68, -210],
    [-108, -198], [-98, -198], [-88, -198], [-78, -198], [-68, -198],
    [-108, -186], [-98, -186], [-88, -186], [-78, -186], [-68, -186],
    [-108, -174], [-98, -174], [-88, -174], [-78, -174], [-68, -174],
  ];
  for (let i = 0; i < stakeGrid.length; i++) {
    const [sx, sz] = stakeGrid[i];
    addStake(g, sx, sz, i % 3 === 0 ? mats.flagIce : mats.flagDeposit);
  }

  addFlag(g, -96, -198, "ICE", mats.flagIce);
  addFlag(g, -72, -204, "H2O", mats.flagIce);
  addFlag(g, -104, -176, "DEPOSIT", mats.flagDeposit);

  const caches = [[-90, -184, 0.2], [-88.4, -182.6, -0.4], [-91.2, -181.8, 0.7], [-86.6, -185.2, 0.1]];
  for (const [cx, cz, rot] of caches) addSampleCache(g, cx, cz, rot);
  addCrate(g, -84.5, -180.4, 0.15, 0.85);
  g.add(labelPlane("SAMPLES", "#1a2830", "#d6e6ef", 2.2, 0.55, -90, getHeight(-90, -184) + 1.55, -184));

  const trackFrom = { x: -60, z: -162 };
  const trackTo = { x: -100, z: -200 };
  const steps = 14;
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const x = trackFrom.x + (trackTo.x - trackFrom.x) * t;
    const z = trackFrom.z + (trackTo.z - trackFrom.z) * t;
    const y = getHeight(x, z);
    const ang = Math.atan2(trackTo.x - trackFrom.x, trackTo.z - trackFrom.z);
    for (const side of [-0.55, 0.55]) {
      const ox = Math.cos(ang) * side;
      const oz = -Math.sin(ang) * side;
      const mark = mesh(new THREE.BoxGeometry(0.42, 0.05, 0.85), mats.track, x + ox, y + 0.04, z + oz, 0, ang, 0);
      mark.castShadow = false;
      g.add(mark);
    }
  }
  return g;
}

function addPipeRun(g, xz, mat, radius = 0.14) {
  const pts = [];
  for (let i = 0; i < xz.length; i++) {
    const [x, z] = xz[i];
    const y = getHeight(x, z) + 1.05;
    pts.push(new THREE.Vector3(x, y, z));
    if (i % 2 === 0) {
      g.add(mesh(new THREE.BoxGeometry(0.18, 1.05, 0.18), mats.steelDark, x, getHeight(x, z) + 0.5, z));
    }
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 28, radius, 6, false), mat);
  tube.castShadow = false;
  g.add(tube);
}

function createMethaloxLines() {
  const g = new THREE.Group();
  g.name = "methalox-lines";
  addPipeRun(g, [[-76, -10.6], [-52, -18], [-32, -14], [-18, -8.4]], mats.tankCh4, 0.13);
  addPipeRun(g, [[-76, -21.2], [-52, -24], [-32, -18], [-18, -9.6]], mats.steel, 0.13);
  g.add(labelPlane("TO PAD", "#1a100c", "#f0c089", 2.2, 0.5, -50, getHeight(-50, -18) + 2.15, -16.4));
  return g;
}

function createMethaloxStand() {
  const g = new THREE.Group();
  g.name = "methalox-stand";
  const x = -15;
  const z = -8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8.6, 0.16, 5.4), mats.steelDark, x, y + 0.42, z));
  g.add(mesh(new THREE.CylinderGeometry(0.88, 0.88, 3.5, 14), mats.tankCh4, x - 2.25, y + 2.2, z + 0.55));
  g.add(mesh(new THREE.CylinderGeometry(0.88, 0.88, 3.5, 14), mats.tankO2, x - 2.25, y + 2.2, z - 1.25));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 1.45, 0.42, x - 1.3, y + 2.25, z + 0.55, Math.PI / 2));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.45, 0.42, x - 1.3, y + 2.25, z - 1.25, Math.PI / 2));
  const posts = [[1.55, 1.65], [1.55, -1.65], [3.45, 1.65], [3.45, -1.65]];
  for (const [px, pz] of posts) {
    g.add(mesh(new THREE.BoxGeometry(0.16, 3.15, 0.16), mats.steelDark, x + px, y + 1.88, z + pz));
  }
  g.add(mesh(new THREE.BoxGeometry(2.25, 0.12, 3.5), mats.steel, x + 2.5, y + 3.5, z));
  g.add(mesh(new THREE.TorusGeometry(0.42, 0.11, 8, 14), mats.tankCh4, x + 0.15, y + 1.45, z + 0.55, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(0.42, 0.11, 8, 14), mats.steel, x + 0.15, y + 1.45, z - 1.2, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.09, 0.09, 6.4, 8), mats.tankCh4, x + 4.55, y + 1.18, z + 0.55, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.09, 0.09, 6.4, 8), mats.steel, x + 4.55, y + 0.98, z - 1.2, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.55, 1.05, 1.15), mats.habDark, x + 0.55, y + 0.98, z + 1.85));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.8, 12), mats.tankCh4, x - 0.4, y + 1.15, z + 2.55, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.35, 0.85), mats.steelDark, x - 0.4, y + 0.55, z + 2.55));
  g.add(labelPlane("METHALOX", "#1a100c", "#f0c089", 3.15, 0.68, x + 2.5, y + 4.12, z));
  g.add(labelPlane("RETURN PROPELLANT", "#1a100c", "#f0c089", 3.85, 0.58, x + 2.5, y + 3.42, z + 0.02));
  return g;
}

function createSpaceportSign() {
  const g = new THREE.Group();
  g.name = "spaceport-sign";
  const x = 17;
  const z = -17;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(0.12, 3.5, 0.12), mats.steelDark, x, y + 1.75, z));
  g.add(labelPlane("SPACEPORT", "#1a100c", "#f0c089", 3.5, 0.85, x, y + 3.45, z, 0.55));
  g.add(labelPlane("METHALOX PAD", "#1a100c", "#d6b48a", 3.2, 0.58, x, y + 2.55, z, 0.55));
  return g;
}

function addRoadSeg(g, ax, az, bx, bz, w) {
  const dx = bx - ax;
  const dz = bz - az;
  const len = Math.hypot(dx, dz);
  const steps = Math.ceil(len / 6);
  const ang = Math.atan2(dx, dz);
  for (let i = 0; i < steps; i++) {
    const t = (i + 0.5) / steps;
    const x = ax + dx * t;
    const z = az + dz * t;
    const y = getHeight(x, z);
    const sl = len / steps + 0.35;
    const bed = mesh(new THREE.BoxGeometry(w + 1.7, 0.055, sl + 0.25), mats.roadBed, x, y + 0.03, z, 0, ang, 0);
    bed.castShadow = false;
    g.add(bed);
    const plank = mesh(new THREE.BoxGeometry(w, 0.08, sl + 0.15), mats.padRing, x, y + 0.07, z, 0, ang, 0);
    plank.castShadow = false;
    g.add(plank);
  }
}

function addJunction(g, x, z, r = 4.2) {
  const y = getHeight(x, z);
  const bed = mesh(new THREE.CylinderGeometry(r + 0.8, r + 0.8, 0.06, 20), mats.roadBed, x, y + 0.03, z);
  bed.castShadow = false;
  g.add(bed);
  const deck = mesh(new THREE.CylinderGeometry(r, r, 0.08, 20), mats.graded, x, y + 0.07, z);
  deck.castShadow = false;
  g.add(deck);
}

function createRoads() {
  const g = new THREE.Group();
  g.name = "roads";
  const segs = [
    [0, 18, 0, -124, 5.2],
    [0, -40, 84, -42, 4.6],
    [0, -40, -68, -16, 4.6],
    [0, -92, -56, -154, 4],
    [16, -72, 48, -86, 3.6],
    [12, 8, 50, 22, 4.2],
    [16, 28, 22, 78, 3.5],
    [-58, -158, -90, -190, 3.6],
    [-14, -104, -32, -98, 3.4],
    [84, -42, 112, -83, 3.6],
    [0, -108, 22, -112, 3.6],
    [22, -112, 48, -86, 3.4],
    [-6, -116, -18, -138, 3.2],
    [0, 8, -15, -8, 3.4],
    [16, 28, 36, 72, 3.8],
    [0, 18, -24, 44, 3.8],
    [-58, -158, -64, -90, 4.2],
    [-64, -90, -68, -16, 4.2],
    [-18, -138, -32, -148, 3.2],
    [-32, -98, -46, -100, 3.4],
    [0, 18, -48, 68, 3.8],
    [16, 28, 78, 56, 3.8],
    [-6, -116, -13, -134, 3.4],
    [22, -112, 38, -126, 3.4],
    [-58, -158, -60, -148, 3.2],
    [-64, -118, -18, -88, 3.6],
    [84, -42, 68, -10, 3.4],
    [-6, -108, -18, -88, 3.2],
    [38, -126, 8, -142, 3.4],
    [-13, -134, 8, -142, 3.2],
    [112, -83, 135, -40, 3.6],
    [68, -10, 68, 6, 3.2],
    [-13, -134, -28, -138, 3.0],
    [-46, -108, -20, -132, 3.2],
    [-6, -108, -6, -132, 3.2],
    [-6, -96, 2, -22, 3.4],
    [-32, -98, -36, -74, 3.2],
    [-40, -76, -32, -98, 3.2],
    [-40, -76, -50, -72, 3.0],
    [-6, -132, 10, -124, 3.2],
    [10, -124, 8, -142, 3.0],
    [0, 8, 20, 8, 3.4],
    [22, 82, -16, 136, 3.6],
    [0, 32, -16, 136, 3.4],
    [135, -40, 158, -62, 3.4],
  ];
  for (const [ax, az, bx, bz, w] of segs) addRoadSeg(g, ax, az, bx, bz, w);
  for (const [jx, jz, jr] of [[0, -40, 5.2], [0, -108, 4.4], [84, -42, 4.0], [22, -112, 3.8], [0, 10, 4.6], [-64, -90, 4.2], [36, 72, 3.6], [-46, -100, 3.6], [38, -126, 3.6], [-18, -88, 3.8], [68, -10, 3.8], [-48, 68, 3.6], [78, 56, 3.6], [-13, -134, 3.6], [8, -142, 3.6], [135, -40, 3.6], [68, 6, 3.6], [-36, -74, 3.6], [2, -22, 3.4], [-50, -72, 3.4], [10, -124, 3.6], [20, 8, 3.6], [-16, 136, 4.2], [158, -62, 3.6]]) {
    addJunction(g, jx, jz, jr);
  }
  const stakes = [
    [3.2, -20], [-3.2, -20], [3.2, -60], [-3.2, -60], [3.2, -90],
    [22, -40], [42, -40], [64, -41], [-22, -32], [-44, -24],
    [8, -110], [16, -111], [-8, -130], [-28, -148], [-70, -172],
    [96, -58], [104, -72],
    [28, 50], [32, 62], [-12, 30], [-20, 40],
    [-60, -130], [-66, -70], [-66, -40], [-26, -144],
    [-40, -100], [-52, -108], [3.4, 12], [-3.2, 12],
    [30, -118], [38, -126], [-60, -148], [-64, -118], [-18, -88], [68, -10],
  ];
  for (const [sx, sz] of stakes) addStake(g, sx, sz, mats.flagDeposit);
  return g;
}

function createLights() {
  const g = new THREE.Group();
  const poles = [
    [18, -8], [-16, -6], [12, -48], [-10, -70], [6, -100], [30, -100], [-30, -20], [40, -40],
    [40, 18], [58, 32], [16, 70], [28, 88], [-54, -8],
    [-80, -176], [-96, -196], [-28, -90], [112, -80], [100, -50],
    [0, -40], [22, -112], [32, -112], [70, -40], [84, -44],
    [36, 60], [-24, 32], [-64, -90], [-40, -148], [-32, -156],
    [4, 14], [-46, -108], [-46, -92], [-58, -102],
    [38, -126], [-18, -88], [68, -10], [-60, -148], [-64, -118], [-22, -88],
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
  const wx = 20;
  const wz = 36;
  const wy = getHeight(wx, wz);
  g.add(mesh(new THREE.BoxGeometry(0.1, 2.6, 0.1), mats.steelDark, wx, wy + 1.3, wz));
  g.add(labelPlane("6 SHIPS", "#1a100c", "#f0c089", 2.6, 0.65, wx, wy + 3.15, wz, 0.25));
  g.add(labelPlane("TWO WINDOWS", "#1a100c", "#d6b48a", 2.8, 0.5, wx, wy + 2.45, wz, 0.25));
  return g;
}

function headingToward(x, z, tx, tz) {
  return Math.atan2(-(tz - z), tx - x);
}

function createWindowOffload(x, z) {
  const g = new THREE.Group();
  g.name = "window-offload";
  const spots = [
    [x, z, 0.2], [x - 1.8, z + 2.1, -0.3], [x + 1.6, z + 2.4, 0.7],
    [x - 2.4, z - 1.2, 0.15], [x + 0.8, z - 2.2, 1.1], [x - 3.2, z + 0.6, -0.4],
  ];
  for (const [sx, sz, rot] of spots) addCrate(g, sx, sz, rot);
  addCrate(g, x - 4.2, z + 1.4, 0.2, 1.12);
  addCrate(g, x - 5.4, z - 0.6, -0.15, 1.05);
  const [px, py, pz] = sit(x - 1.2, z, 0.08);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.12, 3.8), mats.steelDark, px, py, pz, 0, 0.12, 0));
  g.add(labelPlane("CARGO", "#1a100c", "#f0c089", 2.4, 0.65, x - 4.2, getHeight(x - 4.2, z + 1.4) + 2.4, z + 1.4, 0.4));
  return g;
}

function createEarthDish() {
  const g = new THREE.Group();
  g.name = "earth-dish";
  const x = -32;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.CylinderGeometry(8.6, 8.6, 0.28, 32), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.45, 1.85, 5.4, 14), mats.steelDark, x, y + 2.8, z));
  g.add(mesh(new THREE.CylinderGeometry(2.05, 2.05, 0.42, 18), mats.steel, x, y + 5.55, z));
  g.add(mesh(new THREE.TorusGeometry(2.15, 0.12, 8, 20), mats.lattice, x, y + 5.8, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(0.32, 4.4, 0.32), mats.lattice, x - 2.55, y + 7.6, z));
  g.add(mesh(new THREE.BoxGeometry(0.32, 4.4, 0.32), mats.lattice, x + 2.55, y + 7.6, z));
  g.add(mesh(new THREE.BoxGeometry(5.6, 0.32, 0.32), mats.lattice, x, y + 9.75, z));

  const mount = new THREE.Group();
  mount.position.set(x, y + 9.5, z);
  mount.rotation.set(-0.92, 0.68, 0);
  const bowl = mesh(new THREE.SphereGeometry(7.6, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2.28), mats.dish, 0, 0, 0);
  mount.add(bowl);
  const back = mesh(new THREE.SphereGeometry(7.72, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2.45), mats.steelDark, 0, -0.12, 0);
  mount.add(back);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    mount.add(mesh(new THREE.BoxGeometry(0.07, 0.07, 7.4), mats.steelDark, 0, 0.18, 0, 0.12, a, 0));
  }
  mount.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 5.4, 6), mats.steelDark, 0, 2.7, 0));
  mount.add(mesh(new THREE.CylinderGeometry(0.38, 0.2, 0.75, 10), mats.steel, 0, 5.35, 0));
  g.add(mount);

  const sx = x - 8.2;
  const sz = z - 5.6;
  const sy = getHeight(sx, sz);
  g.add(mesh(new THREE.BoxGeometry(4.6, 2.5, 3.4), mats.habDark, sx, sy + 1.35, sz));
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.85, 1.4), mats.steelDark, sx + 2.8, sy + 0.55, sz + 0.4));
  g.add(labelPlane("EARTH LINK", "#1a100c", "#f0c089", 3.6, 0.75, x, y + 4.2, z + 6.4));
  g.add(labelPlane("LIGHT TIME 12 MIN", "#1a100c", "#d6b48a", 3.9, 0.6, x, y + 3.4, z + 6.4));
  g.add(labelPlane("NOT REAL-TIME", "#1a100c", "#d6b48a", 3.3, 0.5, sx, sy + 2.85, sz + 1.85));
  g.add(mesh(new THREE.BoxGeometry(0.1, 2.8, 0.1), mats.steelDark, x + 6.6, y + 1.4, z + 5.2));
  g.add(labelPlane("DSN / STARSHIP", "#1a100c", "#f0c089", 3.2, 0.55, x + 6.6, y + 3.15, z + 5.2, -0.5));
  return g;
}

function createHaulRover(x, z, heading, opts = {}) {
  const g = new THREE.Group();
  g.name = opts.kind === "cargo" ? "cargo-haul" : "ice-haul";
  const y = getHeight(x, z);
  g.position.set(x, y, z);
  g.rotation.y = heading;
  g.add(mesh(new THREE.BoxGeometry(4.2, 1.25, 2.2), mats.rover, 0.2, 1.45, 0));
  g.add(mesh(new THREE.BoxGeometry(1.55, 0.85, 1.7), mats.roverDark, 1.55, 2.25, 0));
  g.add(mesh(new THREE.BoxGeometry(2.5, 0.08, 1.7), mats.solar, 0.05, 2.16, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6), mats.steel, 1.2, 2.95, 0));
  g.add(mesh(new THREE.BoxGeometry(1.15, 0.2, 0.32), mats.steelDark, -2.45, 1.02, 0));
  const wheel = new THREE.CylinderGeometry(0.62, 0.62, 0.38, 12);
  const spots = [[-1.35, 0.62, 1.22], [0.25, 0.62, 1.22], [1.55, 0.62, 1.22], [-1.35, 0.62, -1.22], [0.25, 0.62, -1.22], [1.55, 0.62, -1.22]];
  for (const [wx, wy, wz] of spots) {
    g.add(mesh(wheel, mats.roverDark, wx, wy, wz, Math.PI / 2, 0, 0));
  }
  const tx = -5.7;
  g.add(mesh(new THREE.BoxGeometry(4.5, 0.22, 2.4), mats.steelDark, tx, 1.02, 0));
  const tw = [[-4.5, 0.52, 1.22], [-6.7, 0.52, 1.22], [-4.5, 0.52, -1.22], [-6.7, 0.52, -1.22]];
  for (const [wx, wy, wz] of tw) {
    g.add(mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.32, 12), mats.roverDark, wx, wy, wz, Math.PI / 2, 0, 0));
  }
  if (opts.kind === "cargo") {
    g.add(mesh(new THREE.BoxGeometry(1.55, 1.2, 1.55), mats.crate, tx - 0.95, 1.78, 0.12));
    g.add(mesh(new THREE.BoxGeometry(1.55, 1.2, 1.55), mats.crate, tx + 0.9, 1.78, -0.08));
    if (opts.loaded !== false) {
      g.add(mesh(new THREE.BoxGeometry(1.35, 1.05, 1.35), mats.crate, tx, 2.9, 0.05));
    }
    g.add(labelPlane("CARGO", "#1a100c", "#f0c089", 1.7, 0.42, tx, 2.05, 1.28));
  } else {
    g.add(mesh(new THREE.BoxGeometry(4.2, 1.15, 0.1), mats.steel, tx, 1.68, 1.12));
    g.add(mesh(new THREE.BoxGeometry(4.2, 1.15, 0.1), mats.steel, tx, 1.68, -1.12));
    g.add(mesh(new THREE.BoxGeometry(0.1, 1.15, 2.25), mats.steel, tx - 2.15, 1.68, 0));
    g.add(mesh(new THREE.BoxGeometry(0.1, 1.15, 2.25), mats.steel, tx + 2.15, 1.68, 0));
    if (opts.loaded !== false) {
      const ice = mesh(new THREE.DodecahedronGeometry(1.15, 0), mats.ice, tx, 1.82, 0);
      ice.scale.set(1.65, 0.68, 0.95);
      g.add(ice);
      g.add(mesh(new THREE.DodecahedronGeometry(0.52, 0), mats.ice, tx + 0.95, 1.92, 0.22));
      g.add(mesh(new THREE.DodecahedronGeometry(0.4, 0), mats.ice, tx - 0.85, 1.88, -0.18));
    }
    g.add(labelPlane("ICE", "#1a2830", "#d6e6ef", 1.35, 0.38, tx, 2.35, 1.24));
  }
  return g;
}

function addHaulTracks(g, ax, az, bx, bz, steps = 16) {
  const ang = Math.atan2(bx - ax, bz - az);
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const x = ax + (bx - ax) * t;
    const z = az + (bz - az) * t;
    const y = getHeight(x, z);
    for (const side of [-0.7, 0.7]) {
      const ox = Math.cos(ang) * side;
      const oz = -Math.sin(ang) * side;
      const mark = mesh(new THREE.BoxGeometry(0.4, 0.05, 0.9), mats.track, x + ox, y + 0.04, z + oz, 0, ang, 0);
      mark.castShadow = false;
      g.add(mark);
    }
  }
}

function createHaulLoop() {
  const g = new THREE.Group();
  g.name = "haul-loop";
  const x = -64;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11, 0.2, 8.4), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.6, 3.2, 2.6), mats.steelDark, x + 2.4, y + 1.75, z - 1.4));
  g.add(mesh(new THREE.BoxGeometry(3.4, 0.18, 1.3), mats.steel, x + 0.2, y + 2.35, z - 1.4, 0, 0, 0.18));
  const pile = mesh(new THREE.DodecahedronGeometry(2.4, 0), mats.ice, x - 2.6, y + 1.15, z + 1.6);
  pile.scale.set(1.35, 0.7, 1.15);
  g.add(pile);
  g.add(mesh(new THREE.DodecahedronGeometry(1.1, 0), mats.ice, x - 1.2, y + 0.85, z + 2.4));
  g.add(mesh(new THREE.BoxGeometry(0.22, 5.6, 0.22), mats.lattice, x + 3.6, y + 2.9, z + 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.22, 4.2, 0.22), mats.lattice, x + 3.6, y + 4.4, z + 0.4, 0.7, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.7, 0.7), mats.steelDark, x + 3.6, y + 5.5, z - 0.6));
  g.add(labelPlane("ICE TRANSFER", "#1a2830", "#d6e6ef", 3.5, 0.7, x, y + 3.7, z + 3.4));
  g.add(labelPlane("MINE TO ISRU", "#1a100c", "#f0c089", 3.1, 0.5, x, y + 2.95, z + 3.4));

  const mine = { x: -58, z: -158 };
  const isru = { x: -68, z: -16 };
  const pad = { x: 0, z: 0 };
  g.add(createHaulRover(-55, -146, headingToward(-55, -146, isru.x, isru.z), { kind: "ice", loaded: true }));
  g.add(createHaulRover(-61, -118, headingToward(-61, -118, isru.x, isru.z), { kind: "ice", loaded: true }));
  g.add(createHaulRover(-66, -78, headingToward(-66, -78, isru.x, isru.z), { kind: "ice", loaded: true }));
  g.add(createHaulRover(-68, -38, headingToward(-68, -38, isru.x, isru.z), { kind: "ice", loaded: true }));
  g.add(createHaulRover(-70, -62, headingToward(-70, -62, mine.x, mine.z), { kind: "ice", loaded: false }));
  g.add(createHaulRover(-50, -24, headingToward(-50, -24, pad.x, pad.z), { kind: "cargo", loaded: true }));
  g.add(createHaulRover(-18, -14, headingToward(-18, -14, 12, 8), { kind: "cargo", loaded: true }));
  g.add(createHaulRover(22, 12, headingToward(22, 12, 50, 22), { kind: "cargo", loaded: true }));

  addHaulTracks(g, -58, -156, -64, -92, 18);
  addHaulTracks(g, -64, -88, -68, -20, 16);
  addHaulTracks(g, -66, -18, -16, -10, 12);
  addHaulTracks(g, -14, -8, 20, 12, 10);
  return g;
}

function addPipe(g, ax, az, bx, bz, n = 8, lift = 1.15, r = 0.16) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = ax + (bx - ax) * t;
    const z = az + (bz - az) * t;
    const y = getHeight(x, z) + lift;
    pts.push(new THREE.Vector3(x, y, z));
    if (i % 2 === 0) {
      g.add(mesh(new THREE.BoxGeometry(0.16, lift, 0.16), mats.steelDark, x, getHeight(x, z) + lift * 0.5, z));
    }
  }
  const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), n * 2, r, 6, false), mats.pipe);
  tube.castShadow = false;
  g.add(tube);
}

function createFoodWing() {
  const g = new THREE.Group();
  g.name = "food";
  const x = 38;
  const z = -126;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(13.2, 0.25, 7.6), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(3.55, 3.55, 12.4, 18, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 3.55, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(12.2, 0.1, 7.2), mats.solarFrame, x, y + 3.6, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.85, 0.24, 5.6), mats.soil, x + i * 2.1, y + 0.34, z));
    for (let j = -2; j <= 2; j++) {
      const leaf = j % 2 === 0 ? mats.plant : mats.plantLeaf;
      g.add(mesh(new THREE.BoxGeometry(1.25, 0.58, 0.72), leaf, x + i * 2.1, y + 0.78, z + j * 0.95));
    }
    g.add(mesh(new THREE.BoxGeometry(1.5, 0.05, 5.2), mats.glowWarm, x + i * 2.1, y + 3.15, z));
  }
  g.add(mesh(new THREE.BoxGeometry(1.1, 1.8, 0.14), mats.habDark, x - 6.2, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.14, 12, 8), mats.pipe, 30, getHeight(30, -119) + 1.2, -119, 0, 0, Math.PI / 2));
  g.add(labelPlane("FOOD", "#1a100c", "#f0c089", 2.8, 0.7, x, y + 5.05, z + 0.15));
  g.add(labelPlane("GROW FROM CO2", "#1a100c", "#d6b48a", 3.6, 0.5, x, y + 4.35, z + 0.15));
  addCrate(g, 45, -122, 0.2, 0.9);
  addCrate(g, 46.2, -124.4, -0.3, 0.85);
  return g;
}

function createWaterLoop() {
  const g = new THREE.Group();
  g.name = "water-loop";

  const mx = -60;
  const mz = -148;
  const my = getHeight(mx, mz);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.22, 5.4), mats.concrete, mx, my + 0.1, mz));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.1, 2.4), mats.habDark, mx - 1.1, my + 1.2, mz));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 2.6, 12), mats.steel, mx + 1.8, my + 1.5, mz + 0.4));
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.7, 1.2), mats.ice, mx + 1.8, my + 3.05, mz + 0.4));
  g.add(labelPlane("MELT", "#1a2830", "#d6e6ef", 2.2, 0.55, mx - 1.1, my + 1.7, mz + 1.35));
  g.add(labelPlane("ICE", "#1a2830", "#d6e6ef", 1.5, 0.42, mx + 1.8, my + 1.7, mz + 1.7));

  const fx = -64;
  const fz = -118;
  const fy = getHeight(fx, fz);
  g.add(mesh(new THREE.BoxGeometry(7.4, 0.22, 5.2), mats.concrete, fx, fy + 0.1, fz));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.2, 2.6), mats.steelDark, fx, fy + 1.25, fz));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.8, 10), mats.pipe, fx + 2.2, fy + 1.6, fz - 0.6));
  g.add(labelPlane("FILTER", "#1a2830", "#d6e6ef", 2.5, 0.55, fx, fy + 1.85, fz + 1.45));

  const px = -18;
  const pz = -88;
  const py = getHeight(px, pz);
  g.add(mesh(new THREE.BoxGeometry(9.2, 0.22, 7.2), mats.concrete, px, py + 0.1, pz));
  g.add(mesh(new THREE.CylinderGeometry(2.15, 2.15, 5.6, 16), mats.tankO2, px - 1.6, py + 3.0, pz));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 4.2, 14), mats.pipe, px + 2.4, py + 2.3, pz + 1.1));
  g.add(labelPlane("POTABLE", "#1a2830", "#d6e6ef", 3.2, 0.7, px - 1.6, py + 3.2, pz + 2.35));
  g.add(labelPlane("H2O", "#1a2830", "#d6e6ef", 1.8, 0.5, px + 2.4, py + 2.5, pz + 2.55));
  g.add(labelPlane("ICE TO CREW", "#1a100c", "#f0c089", 3.1, 0.5, px, py + 6.15, pz));

  addPipe(g, -58, -154, mx, mz, 6, 1.2, 0.15);
  addPipe(g, mx, mz, fx, fz, 8, 1.2, 0.15);
  addPipe(g, fx, fz, -68, -26, 10, 1.15, 0.14);
  addPipe(g, fx, fz, px, pz, 10, 1.2, 0.15);
  addPipe(g, px, pz, -6, -100, 8, 1.15, 0.13);
  return g;
}

function createBatteries() {
  const g = new THREE.Group();
  g.name = "batteries";
  const x = 68;
  const z = -10;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(15.2, 0.22, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 6; i++) {
    const bx = x - 5.5 + i * 2.2;
    g.add(mesh(new THREE.BoxGeometry(1.85, 2.15, 4.4), mats.battery, bx, y + 1.25, z));
    g.add(mesh(new THREE.BoxGeometry(1.7, 0.08, 4.2), mats.steel, bx, y + 2.38, z));
  }
  g.add(labelPlane("BATTERY", "#111111", "#f4e6c8", 3.4, 0.7, x, y + 3.15, z + 3.75));
  g.add(labelPlane("NIGHT STORE", "#111111", "#d6b48a", 3.5, 0.55, x, y + 2.45, z + 3.75));
  g.add(mesh(new THREE.CylinderGeometry(0.12, 0.12, 18, 8), mats.cable, 61, getHeight(61, -14) + 1.4, -14, 0, 0, Math.PI / 2));

  const hx = -22;
  const hz = -88;
  const hy = getHeight(hx, hz);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.2, 5.2), mats.concrete, hx, hy + 0.1, hz));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.9, 3.6), mats.battery, hx - 2 + i * 2.0, hy + 1.15, hz));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, hx, hy + 2.55, hz + 2.7));
  g.add(labelPlane("HABS", "#111111", "#d6b48a", 1.8, 0.42, hx, hy + 2.05, hz + 2.7));
  return g;
}

function addPropColliders(colliders) {
  const crate = (x, z, s = 1) => colliders.push({ type: "box", x, z, w: 1.9 * s, d: 1.9 * s });
  const cyl = (x, z, r) => colliders.push({ type: "cyl", x, z, r });
  const box = (x, z, w, d) => colliders.push({ type: "box", x, z, w, d });

  for (const [x, z] of [[10, 8], [12.2, 8.4], [10.4, 10.6], [13.5, 6.2], [-12, 9], [-14, 7.2], [8.5, -11], [6.4, -12.5]]) crate(x, z);
  for (const [x, z] of [[40, 22], [38.2, 24.1], [41.4, 26.2], [36.5, 21.4], [37.8, 27.6], [34.8, 24.8], [39.2, 19.6], [35.4, 19.2]]) crate(x, z);
  crate(38.6, 22.8, 1.15);
  crate(33.2, 20.4, 1.2);
  crate(31.4, 22.1, 1.05);
  const ox = 24, oz = 70;
  for (const [x, z] of [[ox, oz], [ox - 1.8, oz + 2.1], [ox + 1.6, oz + 2.4], [ox - 2.4, oz - 1.2], [ox + 0.8, oz - 2.2], [ox - 3.2, oz + 0.6]]) crate(x, z);
  crate(ox - 4.2, oz + 1.4, 1.12);
  crate(ox - 5.4, oz - 0.6, 1.05);
  crate(5.4, 13.2, 0.85);
  const wx2 = -60, wz2 = 66;
  for (const [x, z] of [[wx2, wz2], [wx2 - 1.8, wz2 + 2.1], [wx2 + 1.6, wz2 + 2.4], [wx2 - 2.4, wz2 - 1.2], [wx2 + 0.8, wz2 - 2.2], [wx2 - 3.2, wz2 + 0.6]]) crate(x, z);
  crate(wx2 - 4.2, wz2 + 1.4, 1.12);
  crate(wx2 - 5.4, wz2 - 0.6, 1.05);

  for (const [x, z] of [[16, 14], [8, -62], [30, 74], [-94, -182]]) cyl(x, z, 2.4);
  for (const [x, z] of [[-55, -146], [-61, -118], [-66, -78], [-68, -38], [-70, -62], [-50, -24], [-18, -14], [22, 12]]) cyl(x, z, 3.4);

  for (const [x, z] of [[42, 22], [39, 26], [26, 78], [26, 68], [22, 72], [-80, -174], [-34, -92], [-28, -104], [16, -120], [-28, 128]]) cyl(x, z, 0.55);

  for (const [x, z] of [[2.4, 12.2], [-2.2, 11.5], [3.8, 15.6], [0.6, 18.2]]) cyl(x, z, 0.55);
  box(4.3, 14.8, 1.4, 1.0);
  box(-3.9, 9.1, 1.1, 0.8);
  box(5.1, 16.4, 1.2, 0.8);

  for (let j = 0; j < 8; j++) box(82.3, -22 - j * 6.2, 50, 2.6);
  box(54, -18, 3, 2.2);
  for (let j = 0; j < 4; j++) box(111.5, -74 - j * 6.2, 30, 2.6);
  box(96, -72, 3, 2.2);
  for (let j = 0; j < 5; j++) box(135.5, -28 - j * 6.2, 30, 2.6);
  box(120, -26, 3, 2.2);
  for (let j = 0; j < 5; j++) box(158.5, -48 - j * 6.2, 30, 2.6);
  box(146, -46, 3, 2.2);

  box(14, 22, 2.4, 1.6);
  box(18, 26, 1.8, 1.3);
  box(20, 36, 2.0, 1.3);
  box(17, -17, 2.4, 1.6);

  const stakeGrid = [
    [-108, -210], [-98, -210], [-88, -210], [-78, -210], [-68, -210],
    [-108, -198], [-98, -198], [-88, -198], [-78, -198], [-68, -198],
    [-108, -186], [-98, -186], [-88, -186], [-78, -186], [-68, -186],
    [-108, -174], [-98, -174], [-88, -174], [-78, -174], [-68, -174],
  ];
  for (const [x, z] of stakeGrid) cyl(x, z, 0.4);
  cyl(-96, -198, 0.7);
  cyl(-72, -204, 0.7);
  cyl(-104, -176, 0.7);
  for (const [x, z] of [[-90, -184], [-88.4, -182.6], [-91.2, -181.8], [-86.6, -185.2]]) box(x, z, 1.2, 1.2);
  crate(-84.5, -180.4, 0.85);
  crate(-28, -68);
  crate(-27, -71, 1.1);
  crate(-44, -80);
  crate(-42.5, -68.5, 0.95);
  crate(17.2, -119.4);
  crate(18.4, -121.8, 1.05);
  crate(3.2, -118.6, 0.9);
  crate(16.6, -128.8, 0.95);
  crate(27.2, 12.4, 0.9);
  crate(12.6, 13.1, 0.95);
  crate(-32, 124, 0.9);
  crate(-30.6, 126.4, 0.95);
}

function createHabStreet() {
  const g = new THREE.Group();
  g.name = "hab-street";
  const yPad = getHeight(-13, -134);
  g.add(mesh(new THREE.BoxGeometry(30, 0.2, 24), mats.concrete, -13, yPad + 0.06, -136));
  addPressureModule(g, -20, -132, 0, { airlock: true, label: "HAB 3" });
  addPressureModule(g, -6, -132, 0, { airlock: true, label: "HAB 4" });
  addPressureModule(g, -13, -142, Math.PI / 2, { airlock: true, label: "HAB 5" });
  const ty = getHeight(-13, -132) + 3.15;
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 8.2, 12), mats.habDark, -13, ty, -132, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 6.4, 12), mats.habDark, -13, ty, -137, Math.PI / 2, 0, 0));
  g.add(labelPlane("HAB STREET", "#1a100c", "#f0c089", 3.4, 0.65, -13, yPad + 5.4, -126));
  addCrate(g, -26, -128, 0.2);
  addCrate(g, 1.2, -128.4, -0.3, 1.05);
  return g;
}


function addTubeRails(colliders, x, z, along, len) {
  const t = 0.4;
  const half = 1.35;
  if (along === "x") {
    colliders.push({ type: "box", x, z: z - half, w: len, d: t });
    colliders.push({ type: "box", x, z: z + half, w: len, d: t });
  } else {
    colliders.push({ type: "box", x: x - half, z, w: t, d: len });
    colliders.push({ type: "box", x: x + half, z, w: t, d: len });
  }
}
function addCrewHabHull(colliders) {
  const box = (x, z, w, d) => colliders.push({ type: "box", x, z, w, d });
  box(-6.2, 0, 5.2, 14.8);
  box(6.2, 0, 5.2, 14.8);
  box(0, -6.2, 10.0, 5.2);
  box(-4.35, 5.8, 6.4, 5.2);
  box(4.35, 5.8, 6.4, 5.2);
  box(0, 7.15, 3.8, 0.8);
  box(-1.45, 7.15, 0.7, 1.2);
  box(1.45, 7.15, 0.7, 1.2);
  box(-1.28, 13.0, 0.36, 12.4);
  box(1.28, 13.0, 0.36, 12.4);
  box(-1.45, 19.2, 0.4, 2.8);
  box(1.45, 19.2, 0.4, 2.8);
}

function createFoodVault3() {
  const g = new THREE.Group();
  g.name = "food-3";
  const x = 8;
  const z = -142;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(13.2, 0.25, 7.6), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(3.55, 3.55, 12.4, 18, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 3.55, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(12.2, 0.1, 7.2), mats.solarFrame, x, y + 3.6, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.85, 0.24, 5.6), mats.soil, x + i * 2.1, y + 0.34, z));
    for (let j = -2; j <= 2; j++) {
      const leaf = j % 2 === 0 ? mats.plant : mats.plantLeaf;
      g.add(mesh(new THREE.BoxGeometry(1.25, 0.58, 0.72), leaf, x + i * 2.1, y + 0.78, z + j * 0.95));
    }
    g.add(mesh(new THREE.BoxGeometry(1.5, 0.05, 5.2), mats.glowWarm, x + i * 2.1, y + 3.15, z));
  }
  g.add(mesh(new THREE.BoxGeometry(1.1, 1.8, 0.14), mats.habDark, x - 6.2, y + 1.1, z));
  g.add(labelPlane("FOOD", "#1a100c", "#f0c089", 2.8, 0.7, x, y + 5.05, z + 0.15));
  g.add(labelPlane("HAB STREET", "#1a100c", "#d6b48a", 3.4, 0.5, x, y + 4.35, z + 0.15));
  addCrate(g, 15, -138, 0.2, 0.9);
  return g;
}

function createSolarField3() {
  const g = new THREE.Group();
  g.name = "solar-3";
  const cols = 6;
  const rows = 5;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = 122 + i * 5.4;
      const z = -28 - j * 6.2;
      const y = getHeight(x, z);
      g.add(mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mats.solarFrame, x, y + 0.8, z));
      g.add(mesh(new THREE.BoxGeometry(4.6, 0.08, 2.3), mats.solar, x, y + 1.55, z, -0.55, 0.15, 0));
      g.add(mesh(new THREE.BoxGeometry(4.75, 0.05, 2.42), mats.solarFrame, x, y + 1.5, z, -0.55, 0.15, 0));
    }
  }
  const [ix, iy, iz] = sit(120, -26, 0.7);
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.4), mats.habDark, ix, iy, iz));
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.0, 0.55, ix, iy + 0.2, iz + 0.75));
  g.add(labelPlane("FIELD 3", "#111111", "#d6b48a", 2.2, 0.45, ix, iy + 0.85, iz + 0.75));
  return g;
}

function createBatteryYard2() {
  const g = new THREE.Group();
  g.name = "batteries-2";
  const x = 68;
  const z = 6;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(15.2, 0.22, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 6; i++) {
    const bx = x - 5.5 + i * 2.2;
    g.add(mesh(new THREE.BoxGeometry(1.85, 2.15, 4.4), mats.battery, bx, y + 1.25, z));
    g.add(mesh(new THREE.BoxGeometry(1.7, 0.08, 4.2), mats.steel, bx, y + 2.38, z));
  }
  g.add(labelPlane("BATTERY", "#111111", "#f4e6c8", 3.4, 0.7, x, y + 3.15, z + 3.75));
  g.add(labelPlane("CREW STORE", "#111111", "#d6b48a", 3.5, 0.55, x, y + 2.45, z + 3.75));

  const hx = -28;
  const hz = -138;
  const hy = getHeight(hx, hz);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.2, 5.2), mats.concrete, hx, hy + 0.1, hz));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.9, 3.6), mats.battery, hx - 2 + i * 2.0, hy + 1.15, hz));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, hx, hy + 2.55, hz + 2.7));
  g.add(labelPlane("HAB 3-5", "#111111", "#d6b48a", 2.2, 0.42, hx, hy + 2.05, hz + 2.7));
  return g;
}

function addPressureTube(g, ax, az, bx, bz) {
  const mx = (ax + bx) * 0.5;
  const mz = (az + bz) * 0.5;
  const y = (getHeight(ax, az) + getHeight(bx, bz)) * 0.5 + 2.45;
  const len = Math.hypot(bx - ax, bz - az);
  const tube = mesh(new THREE.CylinderGeometry(1.12, 1.12, len, 12), mats.habDark, mx, y, mz, Math.PI / 2, 0, 0);
  tube.rotation.y = Math.atan2(bx - ax, bz - az);
  g.add(tube);
  g.add(mesh(new THREE.TorusGeometry(1.18, 0.07, 6, 14), mats.steel, ax, y, az, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(1.18, 0.07, 6, 14), mats.steel, bx, y, bz, Math.PI / 2, 0, 0));
}

function createNeighborhood() {
  const g = new THREE.Group();
  g.name = "neighborhood";
  addPressureTube(g, -46, -108, -20, -132);
  addPressureTube(g, -6, -108, -6, -132);
  addPressureTube(g, -46, -108, -32, -98);
  addPressureTube(g, -6, -96, 2, -22);
  addPressureTube(g, -40, -76, -32, -98);
  addPressureTube(g, -40, -76, -50, -72);
  addPressureTube(g, -6, -132, 10, -124);
  addPressureTube(g, 10, -124, 8, -142);
  const [nx, ny, nz] = sit(-33, -120, 3.4);
  g.add(labelPlane("PRESSURE", "#1a100c", "#f0c089", 3.2, 0.55, nx, ny + 1.2, nz));
  g.add(labelPlane("HAB 2-5", "#1a100c", "#d6b48a", 2.8, 0.45, nx, ny + 0.55, nz));

  const vx = 2;
  const vz = -22;
  const vy = getHeight(vx, vz);
  g.add(mesh(new THREE.CylinderGeometry(1.45, 1.45, 2.8, 12), mats.habDark, vx, vy + 1.55, vz));
  g.add(mesh(new THREE.BoxGeometry(1.1, 1.8, 0.12), mats.steelDark, vx, vy + 1.5, vz + 1.5));
  g.add(mesh(new THREE.TorusGeometry(1.48, 0.08, 6, 14), mats.steel, vx, vy + 2.95, vz, Math.PI / 2, 0, 0));
  g.add(labelPlane("CREW ACCESS", "#1a100c", "#f0c089", 3.4, 0.6, vx, vy + 3.55, vz + 0.2));
  g.add(labelPlane("TO STARSHIP", "#1a100c", "#d6b48a", 3.1, 0.45, vx, vy + 2.95, vz + 0.2));
  return g;
}

function createConstructionYard() {
  const g = new THREE.Group();
  g.name = "yard";
  const x = -36;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(18, 0.22, 14), mats.concrete, x, y + 0.08, z));
  addPressureModule(g, -40, -76, 0, { airlock: true, label: "HAB 6" });
  addPressureModule(g, -32, -70, -0.2, { onStands: true, label: "NEXT" });
  g.add(mesh(new THREE.BoxGeometry(0.28, 9.2, 0.28), mats.lattice, x + 6.2, y + 4.7, z - 3.4));
  g.add(mesh(new THREE.BoxGeometry(8.4, 0.22, 0.22), mats.lattice, x + 2.4, y + 9.2, z - 3.4));
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 6.8, 6), mats.cable, x - 1.2, y + 6.2, z - 2.2));
  g.add(mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4), mats.crate, x + 1.6, y + 8.6, z - 3.2));
  addCrate(g, -28, -68, 0.2);
  addCrate(g, -27, -71, -0.4, 1.1);
  addCrate(g, -44, -80, 0.3);
  addCrate(g, -42.5, -68.5, 0.1, 0.95);
  g.add(labelPlane("CONSTRUCTION", "#1a100c", "#f0c089", 4.0, 0.7, x, y + 4.6, z + 6.4));
  g.add(labelPlane("NEXT KIT", "#1a100c", "#d6b48a", 3.2, 0.5, x, y + 3.9, z + 6.4));
  return g;
}

function createCrewOps() {
  const g = new THREE.Group();
  g.name = "crew-ops";
  const x = -50;
  const z = -72;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 10), mats.concrete, x, y + 0.08, z));
  addPressureModule(g, x, z, Math.PI / 2, { r: 2.2, len: 7.6, airlock: true, label: "MED" });
  g.add(labelPlane("CREW OPS", "#1a100c", "#f0c089", 3.4, 0.6, x, y + 5.35, z + 0.2));
  g.add(labelPlane("MEDICAL", "#1a100c", "#d6b48a", 3.0, 0.45, x, y + 4.75, z + 0.2));
  addCrate(g, -55.2, -76.4, 0.2, 0.9);
  addCrate(g, -44.8, -68.6, -0.25, 0.95);
  return g;
}

function createCommons() {
  const g = new THREE.Group();
  g.name = "commons";
  const x = 10;
  const z = -124;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16, 0.22, 12), mats.concrete, x, y + 0.08, z));
  addPressureModule(g, x, z, 0, { airlock: true, label: "MESS" });
  g.add(labelPlane("CREW COMMONS", "#1a100c", "#f0c089", 4.2, 0.7, x, y + 6.15, z + 0.2));
  g.add(labelPlane("FROM CARGO", "#1a100c", "#d6b48a", 3.4, 0.48, x, y + 5.5, z + 0.2));
  addCrate(g, 17.2, -119.4, 0.2);
  addCrate(g, 18.4, -121.8, -0.3, 1.05);
  addCrate(g, 3.2, -118.6, 0.15, 0.9);
  addCrate(g, 16.6, -128.8, 0.4, 0.95);
  return g;
}

function createMethaloxStockpile() {
  const g = new THREE.Group();
  g.name = "methalox-stock";
  const x = 20;
  const z = 8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16, 0.22, 12), mats.concrete, x, y + 0.08, z));
  for (let i = 0; i < 3; i++) {
    const tz = z - 3.4 + i * 3.4;
    g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 6.4, 16), mats.tankCh4, x - 3.2, y + 1.45, tz, 0, 0, Math.PI / 2));
    g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 6.4, 16), mats.tankO2, x + 3.2, y + 1.45, tz, 0, 0, Math.PI / 2));
  }
  g.add(labelPlane("METHALOX", "#1a100c", "#f0c089", 3.6, 0.7, x, y + 3.55, z + 6.2));
  g.add(labelPlane("RETURN STOCK", "#1a100c", "#d6b48a", 3.8, 0.5, x, y + 2.9, z + 6.2));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 1.6, 0.42, x - 3.2, y + 2.85, z + 3.6));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.4, 0.42, x + 3.2, y + 2.85, z + 3.6));
  addPipeRun(g, [[20, 2], [8, -2], [-8, -6], [-15, -8]], mats.tankCh4, 0.12);
  addCrate(g, 27.2, 12.4, 0.2, 0.9);
  addCrate(g, 12.6, 13.1, -0.25, 0.95);
  return g;
}

function createNextWindowPad() {
  const g = new THREE.Group();
  g.name = "next-window-pad";
  const x = -16;
  const z = 136;
  g.add(createLandingPad(x, z, { finished: true }));
  const y = getHeight(x, z);
  g.add(labelPlane("NEXT WINDOW", "#1a100c", "#f0c089", 4.6, 0.85, x + 22, y + 3.6, z + 4, -0.55));
  g.add(labelPlane("26 MONTHS", "#1a100c", "#d6b48a", 3.6, 0.55, x + 22, y + 2.75, z + 4, -0.55));
  g.add(mesh(new THREE.BoxGeometry(0.12, 3.4, 0.12), mats.steelDark, x + 22, y + 1.7, z + 4));
  g.add(labelPlane("PAD 2", "#1a100c", "#f0c089", 2.4, 0.55, x, y + 0.55, z + 22.4));
  addCrate(g, -32, 124, 0.2, 0.9);
  addCrate(g, -30.6, 126.4, -0.25, 0.95);
  return g;
}

function createSolarField4() {
  const g = new THREE.Group();
  g.name = "solar-4";
  const cols = 6;
  const rows = 5;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = 145 + i * 5.4;
      const z = -48 - j * 6.2;
      const y = getHeight(x, z);
      g.add(mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mats.solarFrame, x, y + 0.8, z));
      g.add(mesh(new THREE.BoxGeometry(4.6, 0.08, 2.3), mats.solar, x, y + 1.55, z, -0.55, 0.15, 0));
      g.add(mesh(new THREE.BoxGeometry(4.75, 0.05, 2.42), mats.solarFrame, x, y + 1.5, z, -0.55, 0.15, 0));
    }
  }
  const [ix, iy, iz] = sit(146, -46, 0.7);
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.4), mats.habDark, ix, iy, iz));
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.0, 0.55, ix, iy + 0.2, iz + 0.75));
  g.add(labelPlane("FIELD 4", "#111111", "#d6b48a", 2.2, 0.45, ix, iy + 0.85, iz + 0.75));
  const bx = 158;
  const bz = -28;
  const by = getHeight(bx, bz);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 7.2), mats.concrete, bx, by + 0.1, bz));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 2.0, 4.2), mats.battery, bx - 4 + i * 2.0, by + 1.2, bz));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, bx, by + 2.7, bz + 3.6));
  g.add(labelPlane("FIELD 4", "#111111", "#d6b48a", 2.4, 0.42, bx, by + 2.15, bz + 3.6));
  return g;
}
