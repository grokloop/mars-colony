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

  const evaRack = createEvaRack();
  root.add(evaRack);
  colliders.push({ type: "box", x: 12, z: 18, w: 6, d: 3 });
  landmarks.push({ id: "evarack", name: "EVA suit rack", position: new THREE.Vector3(12, 3, 18) });

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

  const crane = createCargoCrane();
  root.add(crane);
  colliders.push({ type: "box", x: -64, z: 80, w: 8, d: 8 });
  landmarks.push({ id: "crane", name: "Window-2 cargo crane", position: new THREE.Vector3(-64, 8, 80) });

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

  const lights = createApproachLights();
  root.add(lights);
  colliders.push({ type: "box", x: 16, z: 48, w: 6, d: 5 });
  for (const [lx, lz] of [[4, 68], [4, 50], [4, 32]]) {
    colliders.push({ type: "cyl", x: lx, z: lz, r: 0.45 });
  }
  landmarks.push({ id: "aplights", name: "Pad approach lights", position: new THREE.Vector3(16, 4, 48) });

  const padflood = createPadFloods();
  root.add(padflood);
  colliders.push({ type: "box", x: -16, z: 36, w: 8, d: 6 });
  landmarks.push({ id: "padflood", name: "Pad flood lights", position: new THREE.Vector3(-16, 4, 36) });

  root.add(createNextWindowPad());
  colliders.push({ type: "box", x: -38, z: 148, w: 10, d: 8 });
  landmarks.push({ id: "pad2", name: "Next-window pad", position: new THREE.Vector3(-16, 6, 136) });
  landmarks.push({ id: "sinter", name: "Pad sinter rig", position: new THREE.Vector3(-38, 4, 148) });

  const beacons = createLandingBeacons();
  root.add(beacons);
  colliders.push({ type: "box", x: 6, z: 148, w: 6, d: 5 });
  for (const [bx, bz] of [[2, 154], [-34, 154], [2, 118], [-34, 118]]) {
    colliders.push({ type: "cyl", x: bx, z: bz, r: 0.55 });
  }
  landmarks.push({ id: "beacons", name: "Pad 2 landing beacons", position: new THREE.Vector3(6, 5, 148) });

  const roller = createSinterRoller();
  root.add(roller);
  colliders.push({ type: "box", x: 18, z: 136, w: 10, d: 6 });
  landmarks.push({ id: "roller", name: "Pad sinter roller", position: new THREE.Vector3(18, 4, 136) });

  const pad2bricks = createPad2Bricks();
  root.add(pad2bricks);
  colliders.push({ type: "box", x: 32, z: 136, w: 10, d: 8 });
  landmarks.push({ id: "pad2bricks", name: "Pad 2 sinter bricks", position: new THREE.Vector3(32, 4, 136) });

  const pad2cargo = createPad2Cargo();
  root.add(pad2cargo);
  colliders.push({ type: "box", x: 46, z: 136, w: 10, d: 8 });
  landmarks.push({ id: "pad2cargo", name: "Pad 2 spare cargo", position: new THREE.Vector3(46, 4, 136) });

  const pad2unload = createPad2Unloader();
  root.add(pad2unload);
  colliders.push({ type: "box", x: 46, z: 148, w: 10, d: 8 });
  landmarks.push({ id: "pad2unload", name: "Pad 2 spare unloader", position: new THREE.Vector3(46, 4, 148) });

  const pad1cargo = createPad1Cargo();
  root.add(pad1cargo);
  colliders.push({ type: "box", x: 36, z: 36, w: 10, d: 8 });
  landmarks.push({ id: "pad1cargo", name: "Pad 1 spare cargo", position: new THREE.Vector3(36, 4, 36) });

  const dscrub = createDustScrub();
  root.add(dscrub);
  colliders.push({ type: "box", x: 22, z: -110, w: 10, d: 8 });
  landmarks.push({ id: "dscrub", name: "Spare hab dust scrub", position: new THREE.Vector3(22, 4, -110) });

  const f1str = createFarm1String();
  root.add(f1str);
  colliders.push({ type: "box", x: 108, z: -44, w: 10, d: 8 });
  landmarks.push({ id: "f1str", name: "Farm 1 spare string", position: new THREE.Vector3(108, 4, -44) });

  const mine2light = createMine2Lights();
  root.add(mine2light);
  colliders.push({ type: "box", x: -64, z: -172, w: 8, d: 6 });
  landmarks.push({ id: "mine2light", name: "Ice mine 2 lights", position: new THREE.Vector3(-64, 4, -172) });

  const shopcrate = createShopCrate();
  root.add(shopcrate);
  colliders.push({ type: "box", x: 124, z: -118, w: 10, d: 8 });
  landmarks.push({ id: "shopcrate", name: "Spare shop parts crate", position: new THREE.Vector3(124, 4, -118) });

  const f2str = createField2String();
  root.add(f2str);
  colliders.push({ type: "box", x: 136, z: -83, w: 10, d: 8 });
  landmarks.push({ id: "f2str", name: "Field 2 spare string", position: new THREE.Vector3(136, 4, -83) });

  const f3str = createField3String();
  root.add(f3str);
  colliders.push({ type: "box", x: 160, z: -40, w: 10, d: 8 });
  landmarks.push({ id: "f3str", name: "Field 3 spare string", position: new THREE.Vector3(160, 4, -40) });

  const f4str = createField4String();
  root.add(f4str);
  colliders.push({ type: "box", x: 184, z: -62, w: 10, d: 8 });
  landmarks.push({ id: "f4str", name: "Field 4 spare string", position: new THREE.Vector3(184, 4, -62) });

  const pad1unload = createPad1Unloader();
  root.add(pad1unload);
  colliders.push({ type: "box", x: 36, z: 48, w: 10, d: 8 });
  landmarks.push({ id: "pad1unload", name: "Pad 1 spare unloader", position: new THREE.Vector3(36, 4, 48) });

  const wastesp = createWasteSpare();
  root.add(wastesp);
  colliders.push({ type: "box", x: -36, z: -110, w: 10, d: 8 });
  landmarks.push({ id: "wastesp", name: "Spare waste recovery", position: new THREE.Vector3(-36, 4, -110) });

  const pad1bricks = createPad1Bricks();
  root.add(pad1bricks);
  colliders.push({ type: "box", x: 22, z: 36, w: 10, d: 8 });
  landmarks.push({ id: "pad1bricks", name: "Pad 1 sinter bricks", position: new THREE.Vector3(22, 4, 36) });

  const solar = createSolarFarm();
  root.add(solar);
  landmarks.push({ id: "solar", name: "Solar farm", position: new THREE.Vector3(82, 6, -44) });

  const fence1 = createFarm1Fence();
  root.add(fence1);
  colliders.push({ type: "box", x: 70, z: -44, w: 1.2, d: 22 });
  landmarks.push({ id: "fence1", name: "Farm 1 dust fence", position: new THREE.Vector3(70, 4, -44) });

  const comb1 = createSolarCombiner1();
  root.add(comb1);
  colliders.push({ type: "box", x: 96, z: -44, w: 10, d: 8 });
  landmarks.push({ id: "comb1", name: "Farm 1 combiner", position: new THREE.Vector3(96, 4, -44) });

  const night1 = createFarm1Night();
  root.add(night1);
  colliders.push({ type: "box", x: 82, z: -28, w: 12, d: 8 });
  landmarks.push({ id: "night1", name: "Farm 1 night store", position: new THREE.Vector3(82, 4, -28) });

  const farm1light = createFarm1Lights();
  root.add(farm1light);
  colliders.push({ type: "box", x: 96, z: -28, w: 8, d: 6 });
  landmarks.push({ id: "farm1light", name: "Farm 1 lights", position: new THREE.Vector3(96, 4, -28) });

  const inv1 = createFarm1Inverter();
  root.add(inv1);
  colliders.push({ type: "box", x: 70, z: -28, w: 10, d: 8 });
  landmarks.push({ id: "inv1", name: "Farm 1 spare inverter", position: new THREE.Vector3(70, 4, -28) });

  const solar2 = createSolarField2();
  root.add(solar2);
  landmarks.push({ id: "solar2", name: "Solar field 2", position: new THREE.Vector3(112, 5, -83) });

  const fence2 = createField2Fence();
  root.add(fence2);
  colliders.push({ type: "box", x: 98, z: -83, w: 1.2, d: 22 });
  landmarks.push({ id: "fence2", name: "Field 2 dust fence", position: new THREE.Vector3(98, 4, -83) });

  const comb2 = createSolarCombiner2();
  root.add(comb2);
  colliders.push({ type: "box", x: 124, z: -70, w: 10, d: 8 });
  landmarks.push({ id: "comb2", name: "Field 2 combiner", position: new THREE.Vector3(124, 4, -70) });

  const night2 = createField2Night();
  root.add(night2);
  colliders.push({ type: "box", x: 100, z: -70, w: 12, d: 8 });
  landmarks.push({ id: "night2", name: "Field 2 night store", position: new THREE.Vector3(100, 4, -70) });

  const field2light = createField2Lights();
  root.add(field2light);
  colliders.push({ type: "box", x: 124, z: -83, w: 8, d: 6 });
  landmarks.push({ id: "field2light", name: "Field 2 lights", position: new THREE.Vector3(124, 4, -83) });

  const inv2 = createField2Inverter();
  root.add(inv2);
  colliders.push({ type: "box", x: 136, z: -70, w: 10, d: 8 });
  landmarks.push({ id: "inv2", name: "Field 2 spare inverter", position: new THREE.Vector3(136, 4, -70) });

  const solar3 = createSolarField3();
  root.add(solar3);
  landmarks.push({ id: "solar3", name: "Solar field 3", position: new THREE.Vector3(135, 5, -40) });

  const fence3 = createField3Fence();
  root.add(fence3);
  colliders.push({ type: "box", x: 122, z: -40, w: 1.2, d: 22 });
  landmarks.push({ id: "fence3", name: "Field 3 dust fence", position: new THREE.Vector3(122, 4, -40) });

  const comb3 = createSolarCombiner3();
  root.add(comb3);
  colliders.push({ type: "box", x: 148, z: -40, w: 10, d: 8 });
  landmarks.push({ id: "comb3", name: "Field 3 combiner", position: new THREE.Vector3(148, 4, -40) });

  const night3 = createField3Night();
  root.add(night3);
  colliders.push({ type: "box", x: 135, z: -22, w: 12, d: 8 });
  landmarks.push({ id: "night3", name: "Field 3 night store", position: new THREE.Vector3(135, 4, -22) });

  const field3light = createField3Lights();
  root.add(field3light);
  colliders.push({ type: "box", x: 148, z: -22, w: 8, d: 6 });
  landmarks.push({ id: "field3light", name: "Field 3 lights", position: new THREE.Vector3(148, 4, -22) });

  const inv3 = createField3Inverter();
  root.add(inv3);
  colliders.push({ type: "box", x: 122, z: -22, w: 10, d: 8 });
  landmarks.push({ id: "inv3", name: "Field 3 spare inverter", position: new THREE.Vector3(122, 4, -22) });

  const solar4 = createSolarField4();
  root.add(solar4);
  colliders.push({ type: "box", x: 158, z: -28, w: 12, d: 8 });
  landmarks.push({ id: "solar4", name: "Solar field 4", position: new THREE.Vector3(158, 5, -62) });

  const sol4light = createSolar4Lights();
  root.add(sol4light);
  colliders.push({ type: "box", x: 172, z: -48, w: 8, d: 6 });
  landmarks.push({ id: "sol4light", name: "Field 4 lights", position: new THREE.Vector3(172, 4, -48) });

  const inv4 = createSolar4Inverter();
  root.add(inv4);
  colliders.push({ type: "box", x: 172, z: -62, w: 10, d: 8 });
  landmarks.push({ id: "inv4", name: "Field 4 spare inverter", position: new THREE.Vector3(172, 4, -62) });

  const night4 = createField4Night();
  root.add(night4);
  colliders.push({ type: "box", x: 158, z: -48, w: 12, d: 8 });
  landmarks.push({ id: "night4", name: "Field 4 night store", position: new THREE.Vector3(158, 4, -48) });

  const fence = createSolarDustFence();
  root.add(fence);
  colliders.push({ type: "box", x: 142, z: -62, w: 1.2, d: 22 });
  landmarks.push({ id: "dustfence", name: "Solar dust fence", position: new THREE.Vector3(142, 4, -62) });

  const combiner = createSolarCombiner();
  root.add(combiner);
  colliders.push({ type: "box", x: 172, z: -48, w: 10, d: 8 });
  landmarks.push({ id: "combiner", name: "Field 4 combiner", position: new THREE.Vector3(172, 4, -48) });

  const trench = createPowerTrench();
  root.add(trench);
  colliders.push({ type: "box", x: 100, z: -22, w: 8, d: 6 });
  landmarks.push({ id: "trench", name: "Field 4 power trench", position: new THREE.Vector3(100, 3, -22) });

  root.add(createPowerRun());
  root.add(createSolarTie());

  const isru = createISRU();
  root.add(isru);
  colliders.push({ type: "box", x: -68, z: -16, w: 30, d: 22 });
  landmarks.push({ id: "isru", name: "Sabatier ISRU", position: new THREE.Vector3(-68, 8, -16) });

  const catalyst = createSabatierCatalyst();
  root.add(catalyst);
  colliders.push({ type: "box", x: -50, z: -22, w: 10, d: 8 });
  landmarks.push({ id: "catalyst", name: "Spare Sabatier catalyst", position: new THREE.Vector3(-50, 4, -22) });

  const co2t1 = createCo2Capture1();
  root.add(co2t1);
  colliders.push({ type: "box", x: -68, z: 2, w: 12, d: 8 });
  landmarks.push({ id: "co2t1", name: "CO2 intake 1", position: new THREE.Vector3(-68, 5, 2) });

  const co2sp = createCo2Spare();
  root.add(co2sp);
  colliders.push({ type: "box", x: -80, z: 20, w: 10, d: 8 });
  landmarks.push({ id: "co2sp", name: "Spare CO2 compressor", position: new THREE.Vector3(-80, 4, 20) });

  const rads = createIsruRadiators();
  root.add(rads);
  colliders.push({ type: "box", x: -68, z: 12, w: 16, d: 6 });
  landmarks.push({ id: "radiators", name: "ISRU radiators", position: new THREE.Vector3(-68, 5, 12) });

  const knockout = createSabatierCondenser();
  root.add(knockout);
  colliders.push({ type: "box", x: -84, z: 8, w: 10, d: 8 });
  landmarks.push({ id: "condense", name: "Sabatier condenser", position: new THREE.Vector3(-84, 5, 8) });

  const isru2 = createIsruTrain2();
  root.add(isru2);
  colliders.push({ type: "box", x: -96, z: -16, w: 18, d: 18 });
  landmarks.push({ id: "isru2", name: "Sabatier train 2", position: new THREE.Vector3(-96, 8, -16) });

  const co2 = createCo2Capture();
  root.add(co2);
  colliders.push({ type: "box", x: -96, z: 4, w: 12, d: 8 });
  landmarks.push({ id: "co2cap", name: "CO2 intake 2", position: new THREE.Vector3(-96, 5, 4) });

  const rads2 = createIsruRadiators2();
  root.add(rads2);
  colliders.push({ type: "box", x: -96, z: 16, w: 16, d: 6 });
  landmarks.push({ id: "radiators2", name: "ISRU radiators 2", position: new THREE.Vector3(-96, 5, 16) });

  const knockout2 = createSabatierCondenser2();
  root.add(knockout2);
  colliders.push({ type: "box", x: -110, z: 8, w: 10, d: 8 });
  landmarks.push({ id: "condense2", name: "Sabatier condenser 2", position: new THREE.Vector3(-110, 5, 8) });

  const chill2 = createCh4Chiller2();
  root.add(chill2);
  colliders.push({ type: "box", x: -110, z: 20, w: 10, d: 8 });
  landmarks.push({ id: "chiller2", name: "CH4 liquefaction 2", position: new THREE.Vector3(-110, 5, 20) });

  const o2chill2 = createO2Chiller2();
  root.add(o2chill2);
  colliders.push({ type: "box", x: -110, z: 32, w: 10, d: 8 });
  landmarks.push({ id: "o2chill2", name: "O2 liquefaction 2", position: new THREE.Vector3(-110, 5, 32) });

  const electro2 = createElectrolysis2();
  root.add(electro2);
  colliders.push({ type: "box", x: -122, z: 8, w: 12, d: 8 });
  landmarks.push({ id: "electro2", name: "ISRU electrolysis 2", position: new THREE.Vector3(-122, 5, 8) });

  const h2b = createH2Tank2();
  root.add(h2b);
  colliders.push({ type: "box", x: -122, z: 20, w: 10, d: 8 });
  landmarks.push({ id: "h2tank2", name: "H2 recycle tank 2", position: new THREE.Vector3(-122, 5, 20) });

  const electro = createElectrolysis();
  root.add(electro);
  colliders.push({ type: "box", x: -50, z: 4, w: 12, d: 8 });
  landmarks.push({ id: "electro", name: "ISRU electrolysis", position: new THREE.Vector3(-50, 5, 4) });

  const isrulight = createIsruLights();
  root.add(isrulight);
  colliders.push({ type: "box", x: -38, z: 16, w: 8, d: 6 });
  landmarks.push({ id: "isrulight", name: "ISRU plant lights", position: new THREE.Vector3(-38, 4, 16) });

  const h2 = createH2Tank();
  root.add(h2);
  colliders.push({ type: "box", x: -38, z: 16, w: 10, d: 8 });
  landmarks.push({ id: "h2tank", name: "H2 recycle tank", position: new THREE.Vector3(-38, 5, 16) });

  const h2dry = createH2Dryer();
  root.add(h2dry);
  colliders.push({ type: "box", x: -38, z: 28, w: 10, d: 8 });
  landmarks.push({ id: "h2dry", name: "Spare H2 dryer", position: new THREE.Vector3(-38, 4, 28) });

  const pwater = createProcessWater();
  root.add(pwater);
  colliders.push({ type: "box", x: -58, z: -36, w: 12, d: 8 });
  landmarks.push({ id: "pwater", name: "ISRU process water", position: new THREE.Vector3(-58, 5, -36) });

  const pwater2 = createProcessWater2();
  root.add(pwater2);
  colliders.push({ type: "box", x: -78, z: -36, w: 12, d: 8 });
  landmarks.push({ id: "pwater2", name: "ISRU process water 2", position: new THREE.Vector3(-78, 5, -36) });

  const chiller = createCh4Chiller();
  root.add(chiller);
  colliders.push({ type: "box", x: -80, z: 20, w: 10, d: 8 });
  landmarks.push({ id: "chiller", name: "CH4 liquefaction", position: new THREE.Vector3(-80, 5, 20) });

  const o2chill = createO2Chiller();
  root.add(o2chill);
  colliders.push({ type: "box", x: -80, z: 32, w: 10, d: 8 });
  landmarks.push({ id: "o2chill", name: "O2 liquefaction", position: new THREE.Vector3(-80, 5, 32) });

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

  const coupler = createHabCoupler();
  root.add(coupler);
  colliders.push({ type: "box", x: -22, z: -110, w: 10, d: 8 });
  landmarks.push({ id: "coupler", name: "Spare hab coupler", position: new THREE.Vector3(-22, 4, -110) });

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

  const regolith = createRegolithStock();
  root.add(regolith);
  colliders.push({ type: "box", x: -22, z: -56, w: 10, d: 8 });
  landmarks.push({ id: "regolith", name: "Regolith stockpile", position: new THREE.Vector3(-22, 4, -56) });

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

  const gh2 = createGreenhouse2();
  root.add(gh2);
  colliders.push({ type: "box", x: 52, z: -112, w: 14, d: 9 });
  landmarks.push({ id: "greenhouse2", name: "Greenhouse 2", position: new THREE.Vector3(52, 4, -112) });

  const ghlight = createGrowLights();
  root.add(ghlight);
  colliders.push({ type: "box", x: 38, z: -104, w: 8, d: 6 });
  landmarks.push({ id: "ghlight", name: "Greenhouse lights", position: new THREE.Vector3(38, 4, -104) });

  const food3 = createFoodVault4();
  root.add(food3);
  colliders.push({ type: "box", x: 70, z: -112, w: 12, d: 8 });
  landmarks.push({ id: "food3", name: "Grow vault 4", position: new THREE.Vector3(70, 4, -112) });

  const ghfilter = createGhDustFilter();
  root.add(ghfilter);
  colliders.push({ type: "box", x: 38, z: -104, w: 10, d: 6 });
  landmarks.push({ id: "ghfilter", name: "Grow dust filter", position: new THREE.Vector3(38, 4, -104) });

  const ghf2 = createGhDustFilter2();
  root.add(ghf2);
  colliders.push({ type: "box", x: 24, z: -118, w: 10, d: 8 });
  landmarks.push({ id: "ghf2", name: "Spare grow dust filter", position: new THREE.Vector3(24, 4, -118) });

  const ghwater = createGrowWater();
  root.add(ghwater);
  colliders.push({ type: "box", x: 52, z: -126, w: 12, d: 8 });
  landmarks.push({ id: "ghwater", name: "Grow process water", position: new THREE.Vector3(52, 4, -126) });

  const ghpump = createGrowPump();
  root.add(ghpump);
  colliders.push({ type: "box", x: 52, z: -140, w: 10, d: 8 });
  landmarks.push({ id: "ghpump", name: "Spare grow-water pump", position: new THREE.Vector3(52, 4, -140) });

  const growco2 = createGrowCO2();
  root.add(growco2);
  colliders.push({ type: "box", x: 38, z: -132, w: 10, d: 8 });
  landmarks.push({ id: "growco2", name: "Spare grow CO2 tank", position: new THREE.Vector3(38, 4, -132) });

  const nutrient = createGrowNutrient();
  root.add(nutrient);
  colliders.push({ type: "box", x: 70, z: -126, w: 10, d: 8 });
  landmarks.push({ id: "nutrient", name: "Grow nutrient skid", position: new THREE.Vector3(70, 4, -126) });

  const eclss = createEclssSkid();
  root.add(eclss);
  colliders.push({ type: "box", x: 8, z: -98, w: 12, d: 8 });
  landmarks.push({ id: "eclss", name: "Hab ECLSS / CO2 scrub", position: new THREE.Vector3(8, 4, -98) });

  const blower = createHabBlower();
  root.add(blower);
  colliders.push({ type: "box", x: 22, z: -98, w: 8, d: 6 });
  landmarks.push({ id: "blower", name: "Hab spare blower", position: new THREE.Vector3(22, 4, -98) });

  const eclss2 = createEclssSkid2();
  root.add(eclss2);
  colliders.push({ type: "box", x: -8, z: -98, w: 12, d: 8 });
  landmarks.push({ id: "eclss2", name: "Hab ECLSS 2", position: new THREE.Vector3(-8, 4, -98) });

  const amine = createHabAmine();
  root.add(amine);
  colliders.push({ type: "box", x: 8, z: -110, w: 10, d: 8 });
  landmarks.push({ id: "amine", name: "Hab spare amine bed", position: new THREE.Vector3(8, 4, -110) });

  const regulator = createHabRegulator();
  root.add(regulator);
  colliders.push({ type: "box", x: -8, z: -110, w: 10, d: 8 });
  landmarks.push({ id: "regulator", name: "Hab spare pressure regulator", position: new THREE.Vector3(-8, 4, -110) });

  const waste = createWasteRecycle();
  root.add(waste);
  colliders.push({ type: "box", x: 22, z: -98, w: 10, d: 8 });
  landmarks.push({ id: "waste", name: "Waste / water recovery", position: new THREE.Vector3(22, 4, -98) });

  const waste2 = createWasteRecycle2();
  root.add(waste2);
  colliders.push({ type: "box", x: -22, z: -98, w: 10, d: 8 });
  landmarks.push({ id: "waste2", name: "Waste recovery 2", position: new THREE.Vector3(-22, 4, -98) });

  const o2buf = createO2Buffer();
  root.add(o2buf);
  colliders.push({ type: "box", x: -8, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "o2buf", name: "Crew O2 buffer", position: new THREE.Vector3(-8, 4, -88) });

  const o2buf2 = createO2Buffer2();
  root.add(o2buf2);
  colliders.push({ type: "box", x: 8, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "o2buf2", name: "Crew O2 buffer 2", position: new THREE.Vector3(8, 4, -88) });

  const n2 = createHabN2();
  root.add(n2);
  colliders.push({ type: "box", x: -32, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "n2", name: "Hab spare N2", position: new THREE.Vector3(-32, 4, -88) });

  const habh2o = createHabWater();
  root.add(habh2o);
  colliders.push({ type: "box", x: -46, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "habh2o", name: "Hab spare water", position: new THREE.Vector3(-46, 4, -88) });

  const wpump = createWaterPump();
  root.add(wpump);
  colliders.push({ type: "box", x: -58, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "wpump", name: "Spare water-loop pump", position: new THREE.Vector3(-58, 4, -88) });

  const dustlock = createHabDustLock();
  root.add(dustlock);
  colliders.push({ type: "box", x: 16, z: -86, w: 10, d: 8 });
  landmarks.push({ id: "dustlock", name: "Hab-street dust lock", position: new THREE.Vector3(16, 4, -86) });

  const evalocker = createHabEvaLocker();
  root.add(evalocker);
  colliders.push({ type: "box", x: 16, z: -74, w: 8, d: 6 });
  landmarks.push({ id: "evalocker", name: "Hab-street EVA locker", position: new THREE.Vector3(16, 4, -74) });

  const evabatt = createEvaBattery();
  root.add(evabatt);
  colliders.push({ type: "box", x: 28, z: -74, w: 10, d: 8 });
  landmarks.push({ id: "evabatt", name: "Spare EVA battery cart", position: new THREE.Vector3(28, 4, -74) });

  const rcharge = createRoverCharge();
  root.add(rcharge);
  colliders.push({ type: "box", x: 40, z: -74, w: 10, d: 8 });
  landmarks.push({ id: "rcharge", name: "Spare rover charge post", position: new THREE.Vector3(40, 4, -74) });

  const hablight = createHabStreetLights();
  root.add(hablight);
  colliders.push({ type: "box", x: 0, z: -68, w: 8, d: 6 });
  landmarks.push({ id: "hablight", name: "Hab-street lights", position: new THREE.Vector3(0, 4, -68) });

  const habinv = createHabInverter();
  root.add(habinv);
  colliders.push({ type: "box", x: 8, z: -68, w: 10, d: 8 });
  landmarks.push({ id: "habinv", name: "Hab-street spare inverter", position: new THREE.Vector3(8, 4, -68) });

  const food = createFoodWing();
  root.add(food);
  colliders.push({ type: "box", x: 38, z: -126, w: 14, d: 9 });
  landmarks.push({ id: "food", name: "Food / grow vault", position: new THREE.Vector3(38, 4, -126) });

  const food2 = createFoodVault3();
  root.add(food2);
  colliders.push({ type: "box", x: 8, z: -142, w: 14, d: 9 });
  landmarks.push({ id: "food2", name: "Hab-street grow vault", position: new THREE.Vector3(8, 4, -142) });

  const cond = createCondensate();
  root.add(cond);
  colliders.push({ type: "box", x: 28, z: -140, w: 10, d: 8 });
  landmarks.push({ id: "condensate", name: "Condensate return", position: new THREE.Vector3(28, 4, -140) });

  const cond2 = createSpareCondensate();
  root.add(cond2);
  colliders.push({ type: "box", x: 40, z: -140, w: 10, d: 8 });
  landmarks.push({ id: "condensate2", name: "Spare hab condensate", position: new THREE.Vector3(40, 4, -140) });

  const water = createWaterLoop();
  root.add(water);
  colliders.push({ type: "box", x: -60, z: -148, w: 8, d: 6 });
  colliders.push({ type: "box", x: -64, z: -118, w: 8, d: 6 });
  colliders.push({ type: "box", x: -18, z: -88, w: 10, d: 8 });
  landmarks.push({ id: "water", name: "Water loop", position: new THREE.Vector3(-18, 4, -88) });

  const potable = createPotableFarm();
  root.add(potable);
  colliders.push({ type: "box", x: 18, z: -152, w: 14, d: 10 });
  landmarks.push({ id: "potable", name: "Potable water store", position: new THREE.Vector3(18, 4, -152) });

  const potuv = createPotableUV();
  root.add(potuv);
  colliders.push({ type: "box", x: 32, z: -152, w: 10, d: 8 });
  landmarks.push({ id: "potable-uv", name: "Potable UV polish", position: new THREE.Vector3(32, 4, -152) });

  const potuv2 = createSparePotableUV();
  root.add(potuv2);
  colliders.push({ type: "box", x: 46, z: -152, w: 10, d: 8 });
  landmarks.push({ id: "potable-uv2", name: "Spare potable UV", position: new THREE.Vector3(46, 4, -152) });

  const potpump = createPotablePump();
  root.add(potpump);
  colliders.push({ type: "box", x: 8, z: -162, w: 10, d: 8 });
  landmarks.push({ id: "potpump", name: "Spare potable pump", position: new THREE.Vector3(8, 4, -162) });

  const berms = createHabBerms();
  root.add(berms);
  colliders.push({ type: "box", x: -58, z: -108, w: 10, d: 3 });
  colliders.push({ type: "box", x: -20, z: -100, w: 18, d: 3 });
  colliders.push({ type: "box", x: 22, z: -128, w: 3, d: 12 });
  landmarks.push({ id: "berms", name: "Hab dust berms", position: new THREE.Vector3(-20, 4, -100) });

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

  const batt3 = createHabBatteries3();
  root.add(batt3);
  colliders.push({ type: "box", x: 8, z: -78, w: 12, d: 7 });
  landmarks.push({ id: "battery3", name: "Hab night store 3", position: new THREE.Vector3(8, 4, -78) });

  const batt4 = createHabBatteries4();
  root.add(batt4);
  colliders.push({ type: "box", x: -18, z: -78, w: 12, d: 7 });
  landmarks.push({ id: "battery4", name: "Hab night store 4", position: new THREE.Vector3(-18, 4, -78) });

  const habtrench = createHabPowerTrench();
  root.add(habtrench);
  colliders.push({ type: "box", x: -5, z: -78, w: 8, d: 6 });
  landmarks.push({ id: "habtrench", name: "Hab-street power trench", position: new THREE.Vector3(-5, 4, -78) });

  const methalox = createMethaloxStand();
  root.add(methalox);
  colliders.push({ type: "box", x: -15, z: -8, w: 10, d: 7 });
  landmarks.push({ id: "spaceport", name: "Methalox spaceport", position: new THREE.Vector3(-15, 4, -8) });

  const hose = createCh4Hose();
  root.add(hose);
  colliders.push({ type: "box", x: -28, z: -8, w: 8, d: 6 });
  landmarks.push({ id: "ch4hose", name: "Spare CH4 load hose", position: new THREE.Vector3(-28, 4, -8) });

  const o2hose = createO2Hose();
  root.add(o2hose);
  colliders.push({ type: "box", x: -28, z: 6, w: 8, d: 6 });
  landmarks.push({ id: "o2hose", name: "Spare O2 load hose", position: new THREE.Vector3(-28, 4, 6) });

  const o2pump = createSpareO2Pump();
  root.add(o2pump);
  colliders.push({ type: "box", x: -42, z: 6, w: 10, d: 8 });
  landmarks.push({ id: "o2pump", name: "Spare O2 transfer pump", position: new THREE.Vector3(-42, 4, 6) });

  const o2tank = createSpareO2Tank();
  root.add(o2tank);
  colliders.push({ type: "box", x: -42, z: -8, w: 10, d: 8 });
  landmarks.push({ id: "o2tank", name: "Spare O2 buffer tank", position: new THREE.Vector3(-42, 4, -8) });
  const stock = createMethaloxStockpile();
  root.add(stock);
  colliders.push({ type: "box", x: 20, z: 8, w: 16, d: 12 });
  landmarks.push({ id: "stock", name: "Methalox stockpile", position: new THREE.Vector3(20, 4, 8) });

  const ch4buf = createCh4Buffer();
  root.add(ch4buf);
  colliders.push({ type: "box", x: 36, z: 8, w: 10, d: 8 });
  landmarks.push({ id: "ch4buf", name: "CH4 return buffer", position: new THREE.Vector3(36, 4, 8) });

  const o2ret = createO2Return();
  root.add(o2ret);
  colliders.push({ type: "box", x: 36, z: -6, w: 10, d: 8 });
  landmarks.push({ id: "o2ret", name: "O2 return buffer", position: new THREE.Vector3(36, 4, -6) });

  const mxberm = createMethaloxBerm();
  root.add(mxberm);
  colliders.push({ type: "box", x: 50, z: 4, w: 8, d: 18 });
  landmarks.push({ id: "mxberm", name: "Methalox farm berm", position: new THREE.Vector3(50, 4, 4) });

  const mxlight = createMethaloxLights();
  root.add(mxlight);
  colliders.push({ type: "box", x: 68, z: 6, w: 8, d: 6 });
  landmarks.push({ id: "mxlight", name: "Methalox farm lights", position: new THREE.Vector3(68, 4, 6) });

  const pump = createPumpHouse();
  root.add(pump);
  colliders.push({ type: "box", x: -32, z: -22, w: 10, d: 8 });
  landmarks.push({ id: "pump", name: "Methalox pump house", position: new THREE.Vector3(-32, 4, -22) });

  const ch4pump = createSpareCh4Pump();
  root.add(ch4pump);
  colliders.push({ type: "box", x: -32, z: -36, w: 10, d: 8 });
  landmarks.push({ id: "ch4pump", name: "Spare CH4 transfer pump", position: new THREE.Vector3(-32, 4, -36) });

  const ch4tank = createSpareCh4Tank();
  root.add(ch4tank);
  colliders.push({ type: "box", x: -18, z: -36, w: 10, d: 8 });
  landmarks.push({ id: "ch4tank", name: "Spare CH4 buffer tank", position: new THREE.Vector3(-18, 4, -36) });
  root.add(createMethaloxLines());
  root.add(createSpaceportSign());

  root.add(createRover(16, 14, -0.4));
  root.add(createRover(8, -62, 1.2));
  root.add(createRover(30, 74, -0.2));
  root.add(createRover(-94, -182, 0.7));
  root.add(createHaulRover(-90, -148, 0.4, { kind: "ice", loaded: true }));
  landmarks.push({ id: "rover", name: "Haul rover", position: new THREE.Vector3(8, 2, -62) });
  landmarks.push({ id: "haul2", name: "Ice haul at crush", position: new THREE.Vector3(-90, 3, -148) });

  const haul = createHaulLoop();
  root.add(haul);
  colliders.push({ type: "box", x: -64, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "haul", name: "Ice haul", position: new THREE.Vector3(-64, 3, -90) });

  const shop = createWorkshop();
  root.add(shop);
  colliders.push({ type: "box", x: 48, z: -86, w: 16, d: 12 });
  landmarks.push({ id: "workshop", name: "Workshop", position: new THREE.Vector3(48, 5, -86) });

  const shoplight = createWorkshopLights();
  root.add(shoplight);
  colliders.push({ type: "box", x: 48, z: -70, w: 8, d: 6 });
  landmarks.push({ id: "shoplight", name: "Workshop lights", position: new THREE.Vector3(48, 4, -70) });

  const depot = createPartsDepot();
  root.add(depot);
  colliders.push({ type: "box", x: 22, z: -80, w: 12, d: 8 });
  landmarks.push({ id: "depot", name: "Spare-parts depot", position: new THREE.Vector3(22, 4, -80) });

  const shop2 = createWorkshopBay2();
  root.add(shop2);
  colliders.push({ type: "box", x: 66, z: -74, w: 16, d: 12 });
  landmarks.push({ id: "workshop2", name: "Workshop bay 2", position: new THREE.Vector3(66, 5, -74) });

  const press = createSinterPress();
  root.add(press);
  colliders.push({ type: "box", x: 66, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "press", name: "Sinter press", position: new THREE.Vector3(66, 4, -90) });

  const pressdie = createPressDie();
  root.add(pressdie);
  colliders.push({ type: "box", x: 52, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "pressdie", name: "Spare sinter press die", position: new THREE.Vector3(52, 4, -90) });

  const kiln = createSinterKiln();
  root.add(kiln);
  colliders.push({ type: "box", x: 66, z: -104, w: 12, d: 8 });
  landmarks.push({ id: "kiln", name: "Sinter kiln", position: new THREE.Vector3(66, 4, -104) });

  const bricks = createSinterBricks();
  root.add(bricks);
  colliders.push({ type: "box", x: 80, z: -104, w: 8, d: 6 });
  landmarks.push({ id: "bricks", name: "Sinter brick pallet", position: new THREE.Vector3(80, 4, -104) });

  const kilnfeed = createKilnFeed();
  root.add(kilnfeed);
  colliders.push({ type: "box", x: 80, z: -118, w: 10, d: 8 });
  landmarks.push({ id: "kilnfeed", name: "Spare kiln-feed hopper", position: new THREE.Vector3(80, 4, -118) });

  const crib = createToolCrib();
  root.add(crib);
  colliders.push({ type: "box", x: 82, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "crib", name: "Workshop tool crib", position: new THREE.Vector3(82, 4, -90) });

  const rack = createPartsRack();
  root.add(rack);
  colliders.push({ type: "box", x: 96, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "rack", name: "Workshop parts rack", position: new THREE.Vector3(96, 4, -90) });

  const welder = createWorkshopWelder();
  root.add(welder);
  colliders.push({ type: "box", x: 96, z: -104, w: 10, d: 8 });
  landmarks.push({ id: "welder", name: "Workshop spare welder", position: new THREE.Vector3(96, 4, -104) });

  const mill = createWorkshopMill();
  root.add(mill);
  colliders.push({ type: "box", x: 96, z: -118, w: 10, d: 8 });
  landmarks.push({ id: "mill", name: "Workshop spare mill", position: new THREE.Vector3(96, 4, -118) });

  const shopair = createWorkshopAir();
  root.add(shopair);
  colliders.push({ type: "box", x: 110, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "shopair", name: "Workshop spare air compressor", position: new THREE.Vector3(110, 4, -90) });

  const grinder = createWorkshopGrinder();
  root.add(grinder);
  colliders.push({ type: "box", x: 124, z: -90, w: 10, d: 8 });
  landmarks.push({ id: "grinder", name: "Workshop spare grinder", position: new THREE.Vector3(124, 4, -90) });

  const hoist = createWorkshopHoist();
  root.add(hoist);
  colliders.push({ type: "box", x: 110, z: -104, w: 10, d: 8 });
  landmarks.push({ id: "hoist", name: "Workshop spare hoist", position: new THREE.Vector3(110, 4, -104) });

  const lathe = createWorkshopLathe();
  root.add(lathe);
  colliders.push({ type: "box", x: 124, z: -104, w: 10, d: 8 });
  landmarks.push({ id: "lathe", name: "Workshop spare lathe", position: new THREE.Vector3(124, 4, -104) });

  const vise = createWorkshopVise();
  root.add(vise);
  colliders.push({ type: "box", x: 110, z: -118, w: 10, d: 8 });
  landmarks.push({ id: "vise", name: "Workshop spare vise", position: new THREE.Vector3(110, 4, -118) });

  const shop3 = createWorkshopBay3();
  root.add(shop3);
  colliders.push({ type: "box", x: 82, z: -74, w: 16, d: 12 });
  landmarks.push({ id: "workshop3", name: "Workshop bay 3", position: new THREE.Vector3(82, 5, -74) });

  const shelter = createRoverShelter();
  root.add(shelter);
  root.add(createRover(48, -70, 0.2));
  landmarks.push({ id: "shelter", name: "Rover dust shelter", position: new THREE.Vector3(48, 4, -70) });
  for (const [px, pz] of [[42.8, -73.4], [53.2, -73.4], [42.8, -66.6], [53.2, -66.6]]) {
    colliders.push({ type: "cyl", x: px, z: pz, r: 0.45 });
  }

  const tower = createCommsTower();
  root.add(tower);
  colliders.push({ type: "cyl", x: -18, z: -138, r: 3 });
  landmarks.push({ id: "comms", name: "Comms tower", position: new THREE.Vector3(-18, 16, -138) });

  const commslight = createCommsLights();
  root.add(commslight);
  colliders.push({ type: "box", x: 4, z: -138, w: 8, d: 6 });
  landmarks.push({ id: "commslight", name: "Comms-yard lights", position: new THREE.Vector3(4, 4, -138) });

  const weather = createWeatherMast();
  root.add(weather);
  colliders.push({ type: "cyl", x: 24, z: -128, r: 2.2 });
  landmarks.push({ id: "weather", name: "Weather / dust mast", position: new THREE.Vector3(24, 12, -128) });

  const wxpack = createWeatherPack();
  root.add(wxpack);
  colliders.push({ type: "box", x: 36, z: -128, w: 10, d: 8 });
  landmarks.push({ id: "wxpack", name: "Spare weather sensor pack", position: new THREE.Vector3(36, 4, -128) });

  const earth = createEarthDish();
  root.add(earth);
  colliders.push({ type: "cyl", x: -32, z: -148, r: 8.4 });
  colliders.push({ type: "box", x: -40, z: -154, w: 6, d: 5 });
  landmarks.push({ id: "earth", name: "Earth dish · 12 min delay", position: new THREE.Vector3(-32, 12, -148) });

  const cberm = createCommsBerm();
  root.add(cberm);
  colliders.push({ type: "box", x: -48, z: -138, w: 10, d: 12 });
  landmarks.push({ id: "commsberm", name: "Comms dust berm", position: new THREE.Vector3(-48, 4, -138) });

  const earth2 = createEarthDish2();
  root.add(earth2);
  colliders.push({ type: "cyl", x: -8, z: -162, r: 6.2 });
  landmarks.push({ id: "earth2", name: "Backup Earth dish", position: new THREE.Vector3(-8, 10, -162) });

  const cbatt = createCommsBattery();
  root.add(cbatt);
  colliders.push({ type: "box", x: 4, z: -148, w: 10, d: 8 });
  landmarks.push({ id: "commsbatt", name: "Comms night store", position: new THREE.Vector3(4, 4, -148) });

  const cinv = createCommsInverter();
  root.add(cinv);
  colliders.push({ type: "box", x: 16, z: -148, w: 10, d: 8 });
  landmarks.push({ id: "commsinv", name: "Comms spare inverter", position: new THREE.Vector3(16, 4, -148) });

  const clna = createCommsLna();
  root.add(clna);
  colliders.push({ type: "box", x: 16, z: -136, w: 10, d: 8 });
  landmarks.push({ id: "commslna", name: "Spare Earth-link LNA", position: new THREE.Vector3(16, 4, -136) });

  const ebatt = createEarthBattery();
  root.add(ebatt);
  colliders.push({ type: "box", x: 28, z: -162, w: 10, d: 8 });
  landmarks.push({ id: "earthbatt", name: "Spare Earth-link battery", position: new THREE.Vector3(28, 4, -162) });

  const mine = createIceMine();
  root.add(mine);
  colliders.push({ type: "cyl", x: -58, z: -158, r: 6 });
  landmarks.push({ id: "ice", name: "Ice mining rig", position: new THREE.Vector3(-58, 8, -158) });

  const icelight = createIceMineLights();
  root.add(icelight);
  colliders.push({ type: "box", x: -46, z: -148, w: 8, d: 6 });
  landmarks.push({ id: "icelight", name: "Ice-mine lights", position: new THREE.Vector3(-46, 4, -148) });

  const drill1 = createIceDrill1();
  root.add(drill1);
  colliders.push({ type: "box", x: -70, z: -148, w: 10, d: 8 });
  landmarks.push({ id: "drill1", name: "Ice mine 1 spare drill", position: new THREE.Vector3(-70, 4, -148) });

  const ice1berm = createIceMineBerm();
  root.add(ice1berm);
  colliders.push({ type: "box", x: -40, z: -168, w: 10, d: 12 });
  landmarks.push({ id: "ice1berm", name: "Ice mine 1 berm", position: new THREE.Vector3(-40, 4, -168) });

  const mine2 = createIceMine2();
  root.add(mine2);
  colliders.push({ type: "cyl", x: -78, z: -172, r: 6 });
  landmarks.push({ id: "ice2", name: "Ice mine 2", position: new THREE.Vector3(-78, 8, -172) });

  const ice2berm = createIceMine2Berm();
  root.add(ice2berm);
  colliders.push({ type: "box", x: -64, z: -184, w: 10, d: 12 });
  landmarks.push({ id: "ice2berm", name: "Ice mine 2 berm", position: new THREE.Vector3(-64, 4, -184) });

  const drill2 = createIceDrill2();
  root.add(drill2);
  colliders.push({ type: "box", x: -92, z: -184, w: 10, d: 8 });
  landmarks.push({ id: "drill2", name: "Ice mine 2 spare drill", position: new THREE.Vector3(-92, 4, -184) });

  const melt2 = createIceMelt2();
  root.add(melt2);
  colliders.push({ type: "box", x: -78, z: -156, w: 10, d: 8 });
  landmarks.push({ id: "melt2", name: "Ice melt still 2", position: new THREE.Vector3(-78, 5, -156) });

  const melt2pump = createMelt2Pump();
  root.add(melt2pump);
  colliders.push({ type: "box", x: -92, z: -172, w: 10, d: 8 });
  landmarks.push({ id: "melt2pump", name: "Spare ice-melt pump 2", position: new THREE.Vector3(-92, 4, -172) });

  const iceDepot = createIceDepot();
  root.add(iceDepot);
  colliders.push({ type: "box", x: -90, z: -158, w: 12, d: 10 });
  landmarks.push({ id: "ice-depot", name: "Ice crush depot", position: new THREE.Vector3(-90, 4, -158) });

  const crush = createCrushCover();
  root.add(crush);
  colliders.push({ type: "box", x: -102, z: -158, w: 10, d: 8 });
  landmarks.push({ id: "crushcover", name: "Ice crush cover", position: new THREE.Vector3(-102, 4, -158) });

  const conveyor = createIceConveyor();
  root.add(conveyor);
  colliders.push({ type: "box", x: -102, z: -148, w: 10, d: 8 });
  landmarks.push({ id: "conveyor", name: "Spare ice conveyor", position: new THREE.Vector3(-102, 4, -148) });

  const hopper = createCrushHopper();
  root.add(hopper);
  colliders.push({ type: "box", x: -114, z: -158, w: 10, d: 8 });
  landmarks.push({ id: "hopper", name: "Spare ice crush hopper", position: new THREE.Vector3(-114, 4, -158) });

  const weigh = createIceWeigh();
  root.add(weigh);
  colliders.push({ type: "box", x: -90, z: -136, w: 10, d: 8 });
  landmarks.push({ id: "weigh", name: "Ice haul weigh", position: new THREE.Vector3(-90, 4, -136) });

  const haul3 = createSpareIceHaul();
  root.add(haul3);
  colliders.push({ type: "box", x: -110, z: -136, w: 12, d: 8 });
  landmarks.push({ id: "haul3", name: "Spare ice haul", position: new THREE.Vector3(-110, 3, -136) });

  const trailer = createIceTrailer();
  root.add(trailer);
  colliders.push({ type: "box", x: -124, z: -136, w: 10, d: 8 });
  landmarks.push({ id: "trailer", name: "Spare ice-haul trailer", position: new THREE.Vector3(-124, 3, -136) });

  const melt = createIceMelt();
  root.add(melt);
  colliders.push({ type: "box", x: -58, z: -142, w: 10, d: 8 });
  landmarks.push({ id: "melt", name: "Ice melt still", position: new THREE.Vector3(-58, 5, -142) });

  const meltpump = createMeltPump();
  root.add(meltpump);
  colliders.push({ type: "box", x: -70, z: -136, w: 10, d: 8 });
  landmarks.push({ id: "meltpump", name: "Spare ice-melt pump", position: new THREE.Vector3(-70, 4, -136) });

  const melt3 = createIceMelt3();
  root.add(melt3);
  colliders.push({ type: "box", x: -46, z: -132, w: 10, d: 8 });
  landmarks.push({ id: "melt3", name: "Spare ice-melt still", position: new THREE.Vector3(-46, 4, -132) });

  const survey = createSurvey();
  root.add(survey);
  colliders.push({ type: "cyl", x: -82, z: -176, r: 2.4 });
  landmarks.push({ id: "survey", name: "Resource survey", position: new THREE.Vector3(-88, 5, -188) });

  const survey2 = createSurvey2();
  root.add(survey2);
  colliders.push({ type: "cyl", x: -124, z: -188, r: 2.4 });
  landmarks.push({ id: "survey2", name: "West ice survey", position: new THREE.Vector3(-124, 5, -188) });

  root.add(createOptimus(42, 22, 0.6));
  root.add(createOptimus(39, 26, -0.4));
  root.add(createOptimus(26, 78, 2.2));
  root.add(createOptimus(26, 68, 0.5));
  root.add(createOptimus(22, 72, -0.8));
  root.add(createOptimus(-80, -174, 0.8));
  root.add(createOptimus(-34, -92, -1.2));
  root.add(createOptimus(-28, -104, 0.3));
  root.add(createOptimus(16, -120, 0.6));
  root.add(createOptimus(70, -70, 0.4));
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
  g.add(mesh(new THREE.CylinderGeometry(0.22, 0.28, 3.2, 10), mats.steelDark, x + 5.4, y + 2.0, z + 0.2));
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.22, 0.22), mats.steel, x + 8.8, y + 3.55, z + 1.4, 0, -0.45, 0.18));
  g.add(mesh(new THREE.BoxGeometry(6.2, 0.18, 0.18), mats.tankCh4, x + 11.6, y + 4.4, z + 2.6, 0, -0.45, 0.12));
  g.add(mesh(new THREE.BoxGeometry(6.2, 0.18, 0.18), mats.steel, x + 11.6, y + 4.05, z + 2.85, 0, -0.45, 0.12));
  g.add(mesh(new THREE.CylinderGeometry(0.28, 0.22, 1.1, 10), mats.steelDark, x + 14.2, y + 4.7, z + 3.6));
  g.add(labelPlane("LOAD ARM", "#1a100c", "#f0c089", 2.8, 0.45, x + 8.2, y + 4.85, z + 1.1, -0.45));
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
    [-68, -16, -96, -16, 3.6],
    [-58, -158, -78, -172, 3.4],
    [48, -86, 66, -74, 3.4],
    [8, -142, 18, -152, 3.2],
    [-18, -88, 18, -152, 3.2],
    [-32, -148, -8, -162, 3.2],
    [-6, -108, 8, -98, 3.2],
    [22, -112, 8, -98, 3.2],
    [48, -86, 48, -70, 3.2],
    [-68, -16, -68, 12, 3.2],
    [-36, -74, 22, -80, 3.2],
    [48, -86, 22, -80, 3.2],
    [22, -112, 52, -112, 3.2],
    [38, -126, 52, -112, 3.2],
    [-78, -172, -90, -158, 3.2],
    [8, -98, 8, -78, 3.2],
    [22, -80, 8, -78, 3.2],
    [8, -98, -8, -88, 3.2],
    [-22, -88, -8, -88, 3.2],
    [-96, -16, -96, 4, 3.2],
    [158, -62, 142, -62, 3.2],
    [8, -142, 28, -140, 3.2],
    [18, -152, 28, -140, 3.2],
    [-90, -158, -90, -148, 3.2],
    [5, 16, 12, 18, 3.0],
    [20, 8, 36, 8, 3.2],
    [36, 8, 36, -6, 3.2],
    [-68, 4, -50, 4, 3.2],
    [-58, -158, -58, -142, 3.2],
    [-15, -8, -32, -22, 3.2],
    [66, -74, 66, -90, 3.2],
    [8, -98, 22, -98, 3.2],
    [158, -62, 172, -48, 3.2],
    [22, -112, 38, -104, 3.2],
    [10, -124, 24, -128, 3.0],
    [-68, 12, -80, 20, 3.2],
    [-16, 136, 6, 148, 3.0],
    [-48, 68, -64, 80, 3.2],
    [-80, 20, -80, 32, 3.2],
    [135, -40, 100, -22, 3.2],
    [100, -22, 68, -10, 3.2],
    [-36, -74, -22, -56, 3.2],
    [-90, -158, -124, -188, 3.2],
    [-50, 4, -38, 16, 3.2],
    [52, -112, 70, -112, 3.2],
    [22, 82, 16, 48, 3.0],
    [-58, -142, -58, -36, 3.2],
    [-58, -36, -68, -16, 3.2],
    [36, 8, 50, 4, 3.0],
    [-58, -158, -40, -168, 3.0],
    [66, -90, 82, -90, 3.2],
    [-8, -162, 4, -148, 3.0],
    [135, -40, 148, -40, 3.2],
    [112, -83, 124, -70, 3.2],
    [82, -44, 96, -44, 3.2],
    [-68, 12, -84, 8, 3.2],
    [-8, -88, 16, -86, 3.2],
    [135, -40, 135, -22, 3.2],
    [124, -70, 100, -70, 3.2],
    [82, -44, 82, -28, 3.2],
    [-68, -16, -68, 2, 3.2],
    [135, -40, 122, -40, 3.0],
    [112, -83, 98, -83, 3.0],
    [82, -44, 70, -44, 3.0],
    [-90, -158, -102, -158, 3.2],
    [8, -78, -18, -78, 3.2],
    [-78, -172, -64, -184, 3.2],
    [18, -152, 32, -152, 3.2],
    [-96, 4, -96, 16, 3.2],
    [66, -74, 82, -74, 3.2],
    [-78, -172, -78, -156, 3.2],
    [-96, 4, -110, 8, 3.2],
    [-110, 8, -110, 20, 3.2],
    [-110, 20, -110, 32, 3.2],
    [-110, 8, -122, 8, 3.2],
    [-122, 8, -122, 20, 3.2],
    [8, -98, -8, -98, 3.2],
    [-8, -98, -22, -98, 3.2],
    [-8, -88, 8, -88, 3.2],
    [-58, -36, -78, -36, 3.2],
    [82, -90, 96, -90, 3.2],
    [8, -78, -5, -78, 3.0],
    [4, -148, 16, -148, 3.2],
    [-90, -148, -90, -136, 3.2],
    [16, -86, 16, -74, 3.2],
    [-32, -148, -48, -138, 3.2],
    [52, -112, 52, -126, 3.2],
    [52, -126, 70, -126, 3.2],
    [0, -68, 0, -118, 3.0],
    [48, -70, 90, -80, 3.0],
    [-46, -148, -90, -148, 3.0],
    [-38, 16, -68, 12, 3.0],
    [38, -104, 52, -112, 3.0],
    [172, -48, 158, -62, 3.0],
    [-16, 36, 4, 32, 3.0],
    [4, -138, -18, -138, 3.0],
    [68, 6, 50, 4, 3.0],
    [66, -90, 66, -104, 3.2],
    [66, -104, 80, -104, 3.0],
    [6, 148, 18, 136, 3.0],
    [8, -98, 22, -98, 3.0],
    [172, -48, 172, -62, 3.0],
    [-64, -184, -92, -184, 3.2],
    [-18, -88, -32, -88, 3.0],
    [96, -90, 96, -104, 3.0],
    [-15, -8, -28, -8, 3.0],
    [-28, -8, -28, 6, 3.0],
    [-32, -88, -46, -88, 3.0],
    [-50, 4, -50, -22, 3.0],
    [-68, 12, -80, 20, 3.0],
    [-38, 16, -38, 28, 3.0],
    [-58, -142, -46, -132, 3.0],
    [38, -104, 24, -118, 3.0],
    [-90, -136, -110, -136, 3.2],
    [-32, -98, -22, -110, 3.0],
    [172, -62, 158, -48, 3.0],
    [96, -90, 110, -90, 3.0],
    [8, -98, 8, -110, 3.0],
    [-46, -148, -70, -148, 3.0],
    [82, -28, 96, -28, 3.0],
    [124, -70, 124, -83, 3.0],
    [148, -40, 148, -22, 3.0],
    [32, -152, 46, -152, 3.0],
    [18, 136, 32, 136, 3.0],
    [-8, -98, -8, -110, 3.0],
    [96, -104, 110, -104, 3.0],
    [82, -28, 70, -28, 3.0],
    [124, -70, 136, -70, 3.0],
    [135, -22, 122, -22, 3.0],
    [-102, -158, -114, -158, 3.0],
    [-32, -22, -32, -36, 3.0],
    [-28, 6, -42, 6, 3.0],
    [16, -74, 28, -74, 3.0],
    [80, -104, 80, -118, 3.0],
    [52, -126, 38, -132, 3.0],
    [32, 136, 46, 136, 3.0],
    [28, -140, 40, -140, 3.0],
    [66, -90, 52, -90, 3.0],
    [-110, -136, -124, -136, 3.0],
    [16, -148, 28, -162, 3.0],
    [46, 136, 46, 148, 3.0],
    [96, -104, 96, -118, 3.0],
    [-102, -158, -102, -148, 3.0],
    [110, -104, 110, -118, 3.0],
    [-32, -36, -18, -36, 3.0],
    [-42, 6, -42, -8, 3.0],
    [0, -68, 8, -68, 3.0],
    [18, -152, 8, -162, 3.0],
    [28, -74, 40, -74, 3.0],
    [-58, -142, -70, -136, 3.0],
    [110, -90, 124, -90, 3.0],
    [52, -126, 52, -140, 3.0],
    [16, -148, 16, -136, 3.0],
    [110, -104, 124, -104, 3.0],
    [-78, -156, -92, -172, 3.0],
    [24, -128, 36, -128, 3.0],
    [-46, -88, -58, -88, 3.0],
    [36, 23.5, 36, 36, 3.0],
    [22, -98, 22, -110, 3.0],
    [96, -44, 108, -44, 3.0],
    [-78, -172, -64, -172, 3.0],
    [110, -118, 124, -118, 3.0],
    [124, -83, 136, -83, 3.0],
    [148, -40, 160, -40, 3.0],
    [172, -62, 184, -62, 3.0],
    [36, 36, 36, 48, 3.0],
    [-22, -110, -36, -110, 3.0],
    [36, 36, 22, 36, 3.0],
  ];
  for (const [ax, az, bx, bz, w] of segs) addRoadSeg(g, ax, az, bx, bz, w);
  for (const [jx, jz, jr] of [[0, -40, 5.2], [0, -108, 4.4], [84, -42, 4.0], [22, -112, 3.8], [0, 10, 4.6], [-64, -90, 4.2], [36, 72, 3.6], [-46, -100, 3.6], [38, -126, 3.6], [-18, -88, 3.8], [68, -10, 3.8], [-48, 68, 3.6], [78, 56, 3.6], [-13, -134, 3.6], [8, -142, 3.6], [135, -40, 3.6], [68, 6, 3.6], [-36, -74, 3.6], [2, -22, 3.4], [-50, -72, 3.4], [10, -124, 3.6], [20, 8, 3.6], [-16, 136, 4.2], [158, -62, 3.6], [-96, -16, 3.8], [-78, -172, 3.6], [66, -74, 3.6], [18, -152, 3.4], [-8, -162, 3.4], [8, -98, 3.4], [48, -70, 3.4], [-68, 12, 3.4], [22, -80, 3.4], [52, -112, 3.6], [-90, -158, 3.4], [8, -78, 3.4], [-8, -88, 3.4], [-96, 4, 3.4], [142, -62, 3.4], [28, -140, 3.4], [-90, -148, 3.4], [12, 18, 3.2], [36, 8, 3.4], [36, -6, 3.4], [-50, 4, 3.4], [-58, -142, 3.4], [-32, -22, 3.4], [66, -90, 3.4], [22, -98, 3.4], [172, -48, 3.4], [38, -104, 3.4], [24, -128, 3.2], [-80, 20, 3.4], [6, 148, 3.2], [-64, 80, 3.4], [-80, 32, 3.4], [100, -22, 3.4], [-22, -56, 3.4], [-124, -188, 3.4], [-38, 16, 3.4], [70, -112, 3.4], [16, 48, 3.2], [-58, -36, 3.4], [50, 4, 3.2], [-40, -168, 3.2], [82, -90, 3.4], [4, -148, 3.2], [148, -40, 3.4], [124, -70, 3.4], [96, -44, 3.4], [-84, 8, 3.4], [16, -86, 3.4], [135, -22, 3.4], [100, -70, 3.4], [82, -28, 3.4], [-68, 2, 3.4], [122, -40, 3.2], [98, -83, 3.2], [70, -44, 3.2], [-102, -158, 3.4], [-18, -78, 3.4], [-64, -184, 3.2], [32, -152, 3.4], [-96, 16, 3.4], [82, -74, 3.6], [-78, -156, 3.4], [-110, 8, 3.4], [-110, 20, 3.4], [-110, 32, 3.4], [-122, 8, 3.4], [-122, 20, 3.4], [-8, -98, 3.4], [-22, -98, 3.4], [8, -88, 3.4], [-78, -36, 3.4], [96, -90, 3.4], [-5, -78, 3.2], [16, -148, 3.2], [-90, -136, 3.4], [16, -74, 3.2], [-48, -138, 3.2], [52, -126, 3.4], [70, -126, 3.4], [0, -68, 3.2], [48, -70, 3.2], [-46, -148, 3.2], [-38, 16, 3.2], [38, -104, 3.2], [172, -48, 3.2], [-16, 36, 3.2], [4, -138, 3.2], [68, 6, 3.2], [66, -104, 3.4], [80, -104, 3.2], [18, 136, 3.2], [22, -98, 3.2], [172, -62, 3.2], [-92, -184, 3.2], [-32, -88, 3.2], [96, -104, 3.2], [-28, -8, 3.2], [-28, 6, 3.2], [-46, -88, 3.2], [-50, -22, 3.2], [-80, 20, 3.2], [-38, 28, 3.2], [-46, -132, 3.2], [24, -118, 3.2], [-110, -136, 3.2], [-22, -110, 3.2], [158, -48, 3.2], [110, -90, 3.2], [8, -110, 3.2], [-70, -148, 3.2], [96, -28, 3.2], [124, -83, 3.2], [148, -22, 3.2], [46, -152, 3.2], [32, 136, 3.2], [-8, -110, 3.2], [110, -104, 3.2], [70, -28, 3.2], [136, -70, 3.2], [122, -22, 3.2], [-114, -158, 3.2], [-32, -36, 3.2], [-42, 6, 3.2], [28, -74, 3.2], [80, -118, 3.2], [38, -132, 3.2], [46, 136, 3.2], [40, -140, 3.2], [52, -90, 3.2], [-124, -136, 3.2], [28, -162, 3.2], [46, 148, 3.2], [96, -118, 3.2], [-102, -148, 3.2], [110, -118, 3.2], [-18, -36, 3.2], [-42, -8, 3.2], [8, -68, 3.2], [8, -162, 3.2], [40, -74, 3.2], [-70, -136, 3.2], [124, -90, 3.2], [52, -140, 3.2], [16, -136, 3.2], [124, -104, 3.2], [-92, -172, 3.2], [36, -128, 3.2], [-58, -88, 3.2], [36, 36, 3.2], [22, -110, 3.2], [108, -44, 3.2], [-64, -172, 3.2], [124, -118, 3.2], [136, -83, 3.2], [160, -40, 3.2], [184, -62, 3.2], [36, 48, 3.2], [-36, -110, 3.2], [22, 36, 3.2]]) {
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
  for (const [x, z] of [[18, -78], [20.2, -77.4], [18.4, -81.2], [24.6, -78.6], [26.2, -81.8]]) crate(x, z);
  const wx2 = -60, wz2 = 66;
  for (const [x, z] of [[wx2, wz2], [wx2 - 1.8, wz2 + 2.1], [wx2 + 1.6, wz2 + 2.4], [wx2 - 2.4, wz2 - 1.2], [wx2 + 0.8, wz2 - 2.2], [wx2 - 3.2, wz2 + 0.6]]) crate(x, z);
  crate(wx2 - 4.2, wz2 + 1.4, 1.12);
  crate(wx2 - 5.4, wz2 - 0.6, 1.05);

  for (const [x, z] of [[16, 14], [8, -62], [30, 74], [-94, -182], [48, -70], [-90, -148]]) cyl(x, z, 2.4);
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
  g.add(mesh(new THREE.CylinderGeometry(18.4, 18.4, 0.12, 40), mats.concrete, x, y + 0.38, z));
  g.add(mesh(new THREE.RingGeometry(9.2, 17.6, 36), mats.soot, x, y + 0.46, z, -Math.PI / 2, 0, 0));
  g.add(labelPlane("SINTERED", "#1a100c", "#f0c089", 3.6, 0.55, x + 22, y + 1.95, z + 4, -0.55));
  g.add(createSinterRig(-38, 148));
  addCrate(g, -32, 124, 0.2, 0.9);
  addCrate(g, -30.6, 126.4, -0.25, 0.95);
  addCrate(g, -40, 144, 0.1, 0.85);
  addCrate(g, -41.4, 146.2, -0.3, 0.8);
  return g;
}

function createSinterRig(x, z) {
  const g = new THREE.Group();
  g.name = "sinter-rig";
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8.4, 0.22, 6.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(5.6, 2.4, 3.2), mats.habDark, x, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 3.6, 1.6), mats.steelDark, x + 2.8, y + 2.0, z - 0.4));
  g.add(mesh(new THREE.CylinderGeometry(0.18, 0.18, 4.8, 8), mats.steel, x + 2.8, y + 5.2, z - 0.4));
  g.add(mesh(new THREE.BoxGeometry(2.4, 0.18, 1.1), mats.glowWarm, x + 2.8, y + 7.6, z - 0.4));
  g.add(labelPlane("SINTER", "#1a100c", "#f0c089", 3.2, 0.6, x, y + 2.9, z + 1.85));
  g.add(labelPlane("REGOLITH", "#1a100c", "#d6b48a", 3.4, 0.45, x, y + 2.3, z + 1.85));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.4, 0.28, 0.9), mats.concrete, x - 2.4, y + 0.35 + i * 0.32, z + 2.6));
  }
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

function createIsruTrain2() {
  const g = new THREE.Group();
  g.name = "isru-2";
  const x = -96;
  const z = -16;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(18, 0.35, 18), mats.concrete, x, y + 0.12, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.7, 11, 12), mats.steelDark, x + 2.2, y + 5.8, z));
  g.add(mesh(new THREE.TorusGeometry(2.15, 0.16, 6, 14), mats.steel, x + 2.2, y + 8.8, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("SABATIER", "#1a100c", "#f0c089", 4.4, 0.9, x + 4.2, y + 7.2, z, Math.PI / 2));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 3.2, 0.55, x + 4.2, y + 6.3, z, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(2.4, 2.4, 11, 18), mats.tankCh4, x - 5.2, y + 6.0, z + 4.6, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(2.4, 2.4, 11, 18), mats.tankO2, x - 5.2, y + 6.0, z - 4.4, 0, 0, Math.PI / 2));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 2.8, 0.8, x + 0.4, y + 6.0, z + 4.6));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 2.6, 0.8, x + 0.4, y + 6.0, z - 4.4));
  addPipeRun(g, [[-88, -16], [-80, -16], [-72, -16]], mats.tankCh4, 0.14);
  addPipeRun(g, [[-88, -18], [-80, -20], [-72, -18]], mats.steel, 0.12);
  return g;
}

function createIceMine2() {
  const g = new THREE.Group();
  g.name = "ice-mine-2";
  const x = -78;
  const z = -172;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8, 0.3, 8), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x - 2.2, y + 7, z - 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x + 2.2, y + 7, z - 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x - 2.2, y + 7, z + 2.2));
  g.add(mesh(new THREE.BoxGeometry(0.28, 14, 0.28), mats.lattice, x + 2.2, y + 7, z + 2.2));
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.25, 5.2), mats.steelDark, x, y + 14.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.35, 0.55, 9, 10), mats.steel, x, y + 5, z));
  g.add(mesh(new THREE.ConeGeometry(0.7, 1.6, 8), mats.soot, x, y + 0.9, z));
  const pile = mesh(new THREE.DodecahedronGeometry(4.0, 0), mats.ice, x + 8.2, y + 1.8, z + 1.4);
  pile.scale.set(1.45, 0.75, 1.2);
  g.add(pile);
  g.add(mesh(new THREE.BoxGeometry(6.4, 0.35, 1.1), mats.steelDark, x + 3.6, y + 1.4, z, 0, 0, -0.18));
  g.add(labelPlane("ICE 2", "#1a2830", "#d6e6ef", 2.6, 0.65, x, y + 8.4, z + 2.6));
  addPipeRun(g, [[-74, -168], [-68, -150], [-64, -90], [-68, -26]], mats.pipe, 0.13);
  return g;
}

function createWorkshopBay2() {
  const g = new THREE.Group();
  g.name = "workshop-2";
  const x = 66;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16, 0.28, 12), mats.concrete, x, y + 0.1, z));
  const hut = mesh(new THREE.CylinderGeometry(5.4, 5.4, 14, 16, 1, false, 0, Math.PI), mats.habDark, x - 1.2, y + 3.1, z);
  hut.rotation.z = Math.PI / 2;
  g.add(hut);
  g.add(mesh(new THREE.BoxGeometry(0.2, 3.8, 5.8), mats.steelDark, x - 8.1, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 8.4, 0.28), mats.lattice, x + 6.4, y + 4.3, z - 3.6));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.2, 0.2), mats.lattice, x + 3.0, y + 8.5, z - 3.6));
  g.add(mesh(new THREE.BoxGeometry(1.5, 1.1, 1.5), mats.crate, x + 2.2, y + 8.0, z - 3.4));
  addCrate(g, 73.2, -69.4, 0.2);
  addCrate(g, 74.4, -71.6, -0.3, 1.05);
  addCrate(g, 58.6, -68.8, 0.15, 0.9);
  g.add(labelPlane("WORKSHOP", "#1a100c", "#f0c089", 3.8, 0.75, x, y + 5.4, z + 0.2));
  g.add(labelPlane("BAY 2", "#1a100c", "#d6b48a", 2.6, 0.5, x, y + 4.7, z + 0.2));
  return g;
}

function createPotableFarm() {
  const g = new THREE.Group();
  g.name = "potable";
  const x = 18;
  const z = -152;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(14, 0.22, 10), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    const tx = x - 4.5 + i * 3.0;
    g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 6.2, 14), mats.pipe, tx, y + 1.5, z, 0, 0, Math.PI / 2));
  }
  g.add(labelPlane("POTABLE", "#1a2830", "#d6e6ef", 3.4, 0.7, x, y + 3.35, z + 4.6));
  g.add(labelPlane("HAB STORE", "#1a2830", "#d6b48a", 3.2, 0.5, x, y + 2.7, z + 4.6));
  addPipeRun(g, [[18, -148], [8, -142], [-6, -120], [-18, -88]], mats.pipe, 0.12);
  return g;
}

function createHabBerms() {
  const g = new THREE.Group();
  g.name = "hab-berms";
  const spots = [
    [-58, -108, 9.5, 0.2],
    [-20, -100, 12.5, 0],
    [22, -128, 8.5, 1.2],
    [-8, -148, 7.5, 0.4],
  ];
  for (const [x, z, r, rot] of spots) {
    const y = getHeight(x, z);
    const berm = mesh(new THREE.TorusGeometry(r, 1.55, 8, 24, Math.PI * 1.15), mats.rust, x, y - 0.2, z, Math.PI / 2, rot, 0);
    berm.scale.set(1, 0.42, 1);
    g.add(berm);
  }
  for (const [x, z] of [[-62, -102], [-14, -96], [26, -122]]) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.4, 0), mats.rust, x, getHeight(x, z) + 0.95, z);
    pile.scale.set(1.25, 0.6, 1.05);
    g.add(pile);
  }
  const [lx, ly, lz] = sit(-20, -100, 2.4);
  g.add(labelPlane("DUST BERM", "#1a100c", "#f0c089", 3.6, 0.65, lx, ly + 1.1, lz));
  g.add(labelPlane("HAB WIND", "#1a100c", "#d6b48a", 3.2, 0.48, lx, ly + 0.5, lz));
  return g;
}

function createEarthDish2() {
  const g = new THREE.Group();
  g.name = "earth-dish-2";
  const x = -8;
  const z = -162;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.CylinderGeometry(6.2, 6.2, 0.26, 28), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.1, 1.4, 4.2, 12), mats.steelDark, x, y + 2.2, z));
  const mount = new THREE.Group();
  mount.position.set(x, y + 6.8, z);
  mount.rotation.set(-0.88, 0.55, 0);
  mount.add(mesh(new THREE.SphereGeometry(5.2, 22, 14, 0, Math.PI * 2, 0, Math.PI / 2.28), mats.dish, 0, 0, 0));
  mount.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.8, 6), mats.steelDark, 0, 1.9, 0));
  g.add(mount);
  g.add(labelPlane("EARTH 2", "#1a100c", "#f0c089", 3.2, 0.65, x, y + 3.6, z + 5.2));
  g.add(labelPlane("BACKUP LINK", "#1a100c", "#d6b48a", 3.4, 0.5, x, y + 2.95, z + 5.2));
  return g;
}

function createEclssSkid() {
  const g = new THREE.Group();
  g.name = "eclss";
  const x = 8;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.22, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.8, 2.6, 3.4), mats.habDark, x - 2.4, y + 1.5, z));
  g.add(labelPlane("ECLSS", "#1a100c", "#f0c089", 3.2, 0.6, x - 2.4, y + 3.05, z + 1.85));
  g.add(labelPlane("CO2 SCRUB", "#1a100c", "#d6b48a", 3.4, 0.45, x - 2.4, y + 2.45, z + 1.85));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.4, 12), mats.steelDark, x + 1.6, y + 1.9, z - 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.4, 12), mats.steelDark, x + 3.4, y + 1.9, z - 1.4));
  g.add(labelPlane("AMINE", "#1a100c", "#d6b48a", 2.2, 0.4, x + 2.5, y + 3.8, z - 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 12), mats.tankO2, x + 1.6, y + 1.5, z + 1.8));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 12), mats.tankO2, x + 3.4, y + 1.5, z + 1.8));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.4, 0.4, x + 2.5, y + 3.05, z + 1.8));
  addPipeRun(g, [[8, -98], [14, -104], [22, -112]], mats.pipe, 0.1);
  addPipeRun(g, [[8, -98], [2, -102], [-6, -108]], mats.tankO2, 0.09);
  return g;
}

function createRoverShelter() {
  const g = new THREE.Group();
  g.name = "rover-shelter";
  const x = 48;
  const z = -70;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12.4, 0.18, 8.6), mats.concrete, x, y + 0.08, z));
  const posts = [[-5.2, -3.4], [5.2, -3.4], [-5.2, 3.4], [5.2, 3.4]];
  for (const [px, pz] of posts) {
    g.add(mesh(new THREE.BoxGeometry(0.28, 4.6, 0.28), mats.steelDark, x + px, y + 2.4, z + pz));
  }
  g.add(mesh(new THREE.BoxGeometry(12.8, 0.16, 9.0), mats.steel, x, y + 4.75, z));
  g.add(mesh(new THREE.BoxGeometry(12.8, 0.06, 9.0), mats.solar, x, y + 4.88, z));
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.6, 0.5, x, y + 5.35, z + 4.6));
  g.add(labelPlane("ROVER", "#1a100c", "#d6b48a", 2.8, 0.42, x, y + 4.8, z + 4.6));
  return g;
}

function createIsruRadiators() {
  const g = new THREE.Group();
  g.name = "isru-radiators";
  const x = -68;
  const z = 12;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16.4, 0.18, 6.2), mats.concrete, x, y + 0.08, z));
  for (let i = 0; i < 5; i++) {
    const px = x - 6 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), mats.steelDark, px, y + 1.9, z - 1.8));
    g.add(mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), mats.steelDark, px, y + 1.9, z + 1.8));
    g.add(mesh(new THREE.BoxGeometry(2.4, 3.2, 0.08), mats.solar, px, y + 2.4, z, -0.15, 0, 0));
    g.add(mesh(new THREE.BoxGeometry(2.5, 3.3, 0.04), mats.steel, px, y + 2.4, z + 0.06, -0.15, 0, 0));
  }
  g.add(labelPlane("REJECT", "#1a100c", "#f0c089", 2.8, 0.5, x, y + 4.55, z + 3.2));
  g.add(labelPlane("HEAT", "#1a100c", "#d6b48a", 2.4, 0.42, x, y + 4.0, z + 3.2));
  addPipeRun(g, [[-68, -6], [-68, 4], [-68, 12]], mats.pipe, 0.1);
  return g;
}

function createPartsDepot() {
  const g = new THREE.Group();
  g.name = "parts-depot";
  const x = 22;
  const z = -80;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12.2, 0.18, 8.2), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(0.22, 3.8, 8.2), mats.steelDark, x - 5.8, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(12.2, 0.14, 8.4), mats.steel, x, y + 3.95, z));
  addCrate(g, 18, -78, 0.15, 1);
  addCrate(g, 20.2, -77.4, -0.2, 0.95);
  addCrate(g, 18.4, -81.2, 0.3, 1.05);
  addCrate(g, 24.6, -78.6, -0.1, 1);
  addCrate(g, 26.2, -81.8, 0.25, 0.9);
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.1, 1.4), mats.steel, x + 1.2, y + 0.75, z + 0.4));
  g.add(labelPlane("PARTS", "#1a100c", "#f0c089", 2.8, 0.55, x, y + 4.45, z + 4.2));
  g.add(labelPlane("CARGO", "#1a100c", "#d6b48a", 2.6, 0.42, x, y + 3.9, z + 4.2));
  return g;
}

function createGreenhouse2() {
  const g = new THREE.Group();
  g.name = "greenhouse-2";
  const x = 52;
  const z = -112;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(13.6, 0.22, 8.2), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(3.7, 3.7, 12.6, 16, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 3.7, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(12.4, 0.1, 7.6), mats.solarFrame, x, y + 3.75, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.9, 0.24, 6.0), mats.soil, x + i * 2.15, y + 0.34, z));
    for (let j = -2; j <= 2; j++) {
      const leaf = j % 2 === 0 ? mats.plant : mats.plantLeaf;
      g.add(mesh(new THREE.BoxGeometry(1.3, 0.48, 0.74), leaf, x + i * 2.15, y + 0.68, z + j * 1.05));
    }
    g.add(mesh(new THREE.BoxGeometry(1.55, 0.05, 5.6), mats.glowWarm, x + i * 2.15, y + 3.2, z));
  }
  g.add(labelPlane("GREENHOUSE 2", "#1a100c", "#f0c089", 4.0, 0.65, x, y + 5.15, z + 0.15));
  g.add(labelPlane("GROW FROM CO2", "#1a100c", "#d6b48a", 3.6, 0.48, x, y + 4.5, z + 0.15));
  addPipeRun(g, [[32, -112], [42, -112], [52, -112]], mats.pipe, 0.1);
  return g;
}

function createIceDepot() {
  const g = new THREE.Group();
  g.name = "ice-depot";
  const x = -90;
  const z = -158;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.22, 10), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.steelDark, x - 1.8, y + 1.35, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 1.65, 2.1, 10), mats.steelDark, x - 1.8, y + 3.35, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 0.28, 1.05), mats.steel, x + 0.7, y + 2.1, z, 0, 0, -0.2));
  const pile = mesh(new THREE.DodecahedronGeometry(2.8, 0), mats.ice, x + 3.6, y + 1.25, z + 1.5);
  pile.scale.set(1.35, 0.7, 1.15);
  g.add(pile);
  g.add(mesh(new THREE.DodecahedronGeometry(1.15, 0), mats.ice, x + 4.8, y + 0.85, z + 0.2));
  g.add(labelPlane("ICE", "#1a2830", "#d6e6ef", 2.2, 0.55, x, y + 3.85, z + 4.4));
  g.add(labelPlane("CRUSH", "#1a2830", "#d6e6ef", 2.6, 0.5, x, y + 3.2, z + 4.4));
  addPipeRun(g, [[-86, -160], [-80, -166], [-74, -168]], mats.pipe, 0.13);
  return g;
}

function createHabBatteries3() {
  const g = new THREE.Group();
  g.name = "batteries-3";
  const x = 8;
  const z = -78;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 6.4), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.95, 3.8), mats.battery, x - 4 + i * 2.0, y + 1.15, z));
    g.add(mesh(new THREE.BoxGeometry(1.55, 0.08, 3.6), mats.steel, x - 4 + i * 2.0, y + 2.18, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.4, 0.5, x, y + 2.7, z + 3.3));
  g.add(labelPlane("HAB STORE", "#111111", "#d6b48a", 3.0, 0.42, x, y + 2.15, z + 3.3));
  return g;
}

function createO2Buffer() {
  const g = new THREE.Group();
  g.name = "o2-buffer";
  const x = -8;
  const z = -88;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(10.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    const tx = x - 3.3 + i * 2.2;
    g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.6, 12), mats.tankO2, tx, y + 2.0, z));
  }
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.8, 0.5, x, y + 4.15, z + 3.7));
  g.add(labelPlane("CREW", "#2a3340", "#d6b48a", 2.2, 0.42, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-8, -88], [0, -94], [8, -98]], mats.tankO2, 0.1);
  return g;
}

function createCo2Capture() {
  const g = new THREE.Group();
  g.name = "co2-capture";
  const x = -96;
  const z = 4;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 6.8, 10), mats.steel, x - 2.4, y + 3.6, z));
  g.add(mesh(new THREE.CylinderGeometry(2.1, 0.65, 2.4, 14), mats.steelDark, x - 2.4, y + 7.8, z));
  g.add(mesh(new THREE.TorusGeometry(1.85, 0.1, 6, 16), mats.steel, x - 2.4, y + 9.1, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.2, 2.4), mats.habDark, x + 2.2, y + 1.3, z));
  g.add(labelPlane("CO2", "#1a100c", "#f0c089", 2.2, 0.55, x - 2.4, y + 4.8, z + 1.4));
  g.add(labelPlane("INTAKE 2", "#1a100c", "#d6b48a", 3.0, 0.45, x + 2.2, y + 2.7, z + 1.35));
  addPipeRun(g, [[-96, 4], [-96, -6], [-96, -16]], mats.pipe, 0.12);
  return g;
}

function createSolarDustFence() {
  const g = new THREE.Group();
  g.name = "solar-dust-fence";
  const x = 142;
  const z = -62;
  const y = getHeight(x, z);
  for (let i = 0; i < 8; i++) {
    const pz = z - 10.5 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.4, 0.18), mats.steelDark, x, y + 1.8, pz));
    if (i < 7) {
      g.add(mesh(new THREE.BoxGeometry(0.06, 2.6, 2.7), mats.lattice, x, y + 1.7, pz + 1.5));
    }
  }
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.4, 0.45, x - 1.4, y + 3.5, z));
  g.add(labelPlane("FENCE", "#1a100c", "#d6b48a", 2.4, 0.4, x - 1.4, y + 3.0, z));
  return g;
}

function createCondensate() {
  const g = new THREE.Group();
  g.name = "condensate";
  const x = 28;
  const z = -140;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 3.8, 14), mats.pipe, x - 1.6, y + 2.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 3.8, 14), mats.pipe, x + 1.8, y + 2.1, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), mats.habDark, x, y + 1.0, z + 2.2));
  g.add(labelPlane("H2O", "#1a2830", "#d6e6ef", 2.2, 0.5, x, y + 4.3, z + 3.6));
  g.add(labelPlane("CONDENSATE", "#1a2830", "#d6b48a", 3.6, 0.42, x, y + 3.75, z + 3.6));
  addPipeRun(g, [[28, -140], [18, -146], [18, -152]], mats.pipe, 0.1);
  addPipeRun(g, [[28, -140], [16, -142], [8, -142]], mats.pipe, 0.09);
  return g;
}

function createEvaRack() {
  const g = new THREE.Group();
  g.name = "eva-rack";
  const x = 12;
  const z = 18;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.8, 0.16, 2.4), mats.steelDark, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steel, x - 2.4, y + 1.5, z - 0.7));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steel, x + 2.4, y + 1.5, z - 0.7));
  g.add(mesh(new THREE.BoxGeometry(5.0, 0.12, 0.12), mats.steel, x, y + 2.9, z - 0.7));
  g.add(createEvaSuit(x - 1.5, z, 0.2));
  g.add(createEvaSuit(x, z + 0.15, -0.1));
  g.add(createEvaSuit(x + 1.5, z, 0.15));
  g.add(labelPlane("SUITS", "#1a100c", "#f0c089", 2.4, 0.45, x, y + 3.35, z + 1.2));
  g.add(labelPlane("EVA RACK", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 2.85, z + 1.2));
  return g;
}

function createCh4Buffer() {
  const g = new THREE.Group();
  g.name = "ch4-buffer";
  const x = 36;
  const z = 8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 5.6, 14), mats.tankCh4, x - 2.4 + i * 2.4, y + 1.4, z, 0, 0, Math.PI / 2));
  }
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 2.2, 0.5, x, y + 3.35, z + 3.7));
  g.add(labelPlane("RETURN", "#6a2208", "#d6b48a", 2.6, 0.42, x, y + 2.8, z + 3.7));
  addPipeRun(g, [[28, 8], [32, 8], [36, 8]], mats.tankCh4, 0.11);
  return g;
}

function createO2Return() {
  const g = new THREE.Group();
  g.name = "o2-return";
  const x = 36;
  const z = -6;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 5.6, 14), mats.tankO2, x - 2.4 + i * 2.4, y + 1.4, z, 0, 0, Math.PI / 2));
  }
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.8, 0.5, x, y + 3.35, z + 3.7));
  g.add(labelPlane("RETURN", "#2a3340", "#d6b48a", 2.6, 0.42, x, y + 2.8, z + 3.7));
  addPipeRun(g, [[36, 8], [36, 1], [36, -6]], mats.steel, 0.11);
  return g;
}

function createElectrolysis() {
  const g = new THREE.Group();
  g.name = "isru-electrolysis";
  const x = -50;
  const z = 4;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 3.6, 2.6), mats.habDark, x - 2.6, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 3.6, 2.6), mats.steelDark, x + 1.2, y + 2.0, z));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.1, 2.2), mats.steel, x - 3.8 + i * 0.7, y + 2.0, z));
  }
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 5.2, 14), mats.steel, x + 4.2, y + 2.8, z + 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 4.4, 14), mats.tankO2, x + 4.2, y + 2.4, z - 1.6));
  g.add(labelPlane("ELECTRO", "#1a100c", "#f0c089", 3.2, 0.5, x, y + 4.55, z + 3.7));
  g.add(labelPlane("H2 RECYCLE", "#1a100c", "#d6b48a", 3.4, 0.42, x, y + 4.0, z + 3.7));
  addPipeRun(g, [[-72, -26], [-50, -16], [-50, 4]], mats.pipe, 0.11);
  addPipeRun(g, [[-50, 4], [-58, 4], [-64, -8]], mats.steel, 0.1);
  return g;
}

function createIceMelt() {
  const g = new THREE.Group();
  g.name = "ice-melt";
  const x = -58;
  const z = -142;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.8, 3.2), mats.habDark, x - 1.8, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.45, 1.45, 4.2, 14), mats.pipe, x + 2.2, y + 2.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.85, 1.6, 10), mats.steelDark, x + 2.2, y + 4.9, z));
  const pile = mesh(new THREE.DodecahedronGeometry(1.8, 0), mats.ice, x - 3.4, y + 0.9, z + 2.1);
  pile.scale.set(1.15, 0.55, 1.0);
  g.add(pile);
  g.add(labelPlane("MELT", "#1a2830", "#d6e6ef", 2.4, 0.5, x, y + 4.4, z + 3.7));
  g.add(labelPlane("STILL", "#1a2830", "#d6b48a", 2.2, 0.42, x, y + 3.85, z + 3.7));
  addPipeRun(g, [[-58, -158], [-58, -150], [-58, -142]], mats.pipe, 0.11);
  addPipeRun(g, [[-58, -142], [-64, -90], [-68, -26]], mats.pipe, 0.1);
  return g;
}

function createPumpHouse() {
  const g = new THREE.Group();
  g.name = "methalox-pump";
  const x = -32;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(5.2, 3.2, 4.4), mats.habDark, x, y + 1.8, z));
  g.add(mesh(new THREE.BoxGeometry(5.4, 0.14, 4.6), mats.steel, x, y + 3.5, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.8, 10), mats.tankCh4, x - 1.4, y + 1.1, z + 2.6, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.8, 10), mats.steel, x + 1.4, y + 1.1, z + 2.6, 0, 0, Math.PI / 2));
  g.add(labelPlane("PUMP", "#1a100c", "#f0c089", 2.4, 0.5, x, y + 4.15, z + 3.7));
  g.add(labelPlane("METHALOX", "#1a100c", "#d6b48a", 3.2, 0.42, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-32, -14], [-32, -18], [-32, -22]], mats.tankCh4, 0.11);
  addPipeRun(g, [[-32, -18], [-32, -22], [-18, -10]], mats.steel, 0.1);
  return g;
}

function createSinterPress() {
  const g = new THREE.Group();
  g.name = "sinter-press";
  const x = 66;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.6, 2.2, 3.4), mats.steelDark, x, y + 1.3, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 3.4, 1.4), mats.steel, x, y + 3.2, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 0.35, 2.4), mats.steel, x, y + 4.9, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.55, 1.6), mats.habDark, x, y + 2.55, z));
  addCrate(g, 62.2, -87.6, 0.2, 0.9);
  addCrate(g, 70.0, -92.2, -0.15, 0.85);
  g.add(labelPlane("SINTER", "#1a100c", "#f0c089", 2.8, 0.5, x, y + 5.55, z + 3.7));
  g.add(labelPlane("PRESS", "#1a100c", "#d6b48a", 2.4, 0.42, x, y + 5.0, z + 3.7));
  return g;
}

function createWasteRecycle() {
  const g = new THREE.Group();
  g.name = "waste-recycle";
  const x = 22;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.4, 2.8, 3.6), mats.habDark, x - 1.4, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.pipe, x + 2.8, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.8, 12), mats.steelDark, x + 2.8, y + 1.6, z + 2.0));
  g.add(labelPlane("WASTE", "#1a100c", "#f0c089", 2.6, 0.5, x, y + 4.25, z + 3.7));
  g.add(labelPlane("RECOVERY", "#1a100c", "#d6b48a", 3.2, 0.42, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[8, -98], [14, -98], [22, -98]], mats.pipe, 0.1);
  addPipeRun(g, [[22, -98], [22, -112], [22, -112]], mats.pipe, 0.09);
  return g;
}

function createSolarCombiner() {
  const g = new THREE.Group();
  g.name = "solar-combiner";
  const x = 172;
  const z = -48;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("COMBINER", "#111111", "#f4e6c8", 3.4, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("FIELD 4", "#111111", "#d6b48a", 2.6, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[158, -62], [166, -54], [172, -48]], mats.cable, 0.1);
  addPipeRun(g, [[172, -48], [164, -38], [158, -28]], mats.cable, 0.09);
  return g;
}

function createGhDustFilter() {
  const g = new THREE.Group();
  g.name = "gh-dust-filter";
  const x = 38;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.2, 0.18, 5.6), mats.concrete, x, y + 0.09, z));
  g.add(mesh(new THREE.BoxGeometry(3.8, 2.6, 2.4), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 3.2, 12), mats.steelDark, x + 2.4, y + 1.8, z));
  g.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 2.0), mats.lattice, x + 3.5, y + 1.4, z));
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.2, 0.45, x, y + 3.55, z + 2.9));
  g.add(labelPlane("FILTER", "#1a100c", "#d6b48a", 2.6, 0.4, x, y + 3.05, z + 2.9));
  addPipeRun(g, [[22, -112], [30, -108], [38, -104]], mats.pipe, 0.1);
  addPipeRun(g, [[38, -104], [46, -108], [52, -112]], mats.pipe, 0.09);
  return g;
}

function createWeatherMast() {
  const g = new THREE.Group();
  g.name = "weather-mast";
  const x = 24;
  const z = -128;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(3.6, 0.16, 3.6), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.CylinderGeometry(0.16, 0.22, 14.4, 8), mats.lattice, x, y + 7.3, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 0.08, 0.08), mats.steel, x, y + 12.4, z));
  g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 2.8), mats.steel, x, y + 12.4, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.06, 0.06), mats.steelDark, x, y + 14.2, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 1.1, 1.1), mats.habDark, x + 1.15, y + 0.75, z + 0.9));
  g.add(labelPlane("MET", "#1a100c", "#f0c089", 1.8, 0.42, x, y + 8.6, z + 1.6));
  g.add(labelPlane("DUST", "#1a100c", "#d6b48a", 2.0, 0.38, x, y + 8.1, z + 1.6));
  return g;
}

function createCh4Chiller() {
  const g = new THREE.Group();
  g.name = "ch4-chiller";
  const x = -80;
  const z = 20;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.2), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 5.0, 14), mats.tankCh4, x + 2.6, y + 2.7, z));
  g.add(mesh(new THREE.TorusGeometry(1.55, 0.1, 6, 14), mats.steel, x + 2.6, y + 4.4, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 2.0, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("CHILLER", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-76, -10], [-80, 6], [-80, 20]], mats.tankCh4, 0.11);
  addPipeRun(g, [[-68, 12], [-74, 16], [-80, 20]], mats.pipe, 0.09);
  return g;
}

function createLandingBeacons() {
  const g = new THREE.Group();
  g.name = "pad2-beacons";
  const poles = [[2, 154], [-34, 154], [2, 118], [-34, 118]];
  for (const [x, z] of poles) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.14, 0.18, 5.6, 8), mats.steelDark, x, y + 2.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.55, 0.55, 0.55), mats.glowPad, x, y + 5.85, z));
    g.add(mesh(new THREE.BoxGeometry(0.22, 0.9, 0.22), mats.steel, x, y + 6.4, z));
  }
  const x = 6;
  const z = 148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.4, 0.16, 4.2), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.6, 1.6, 1.8), mats.habDark, x, y + 1.0, z));
  g.add(labelPlane("PAD 2", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.35, z + 2.2));
  g.add(labelPlane("BEACONS", "#1a100c", "#d6b48a", 2.6, 0.38, x, y + 1.88, z + 2.2));
  return g;
}

function createCargoCrane() {
  const g = new THREE.Group();
  g.name = "cargo-crane";
  const x = -64;
  const z = 80;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 10.4, 1.4), mats.steelDark, x, y + 5.3, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 0.28, 12.4), mats.steel, x + 3.6, y + 10.5, z - 3.2, 0, 0.55, 0.08));
  g.add(mesh(new THREE.BoxGeometry(0.18, 3.2, 0.18), mats.steelDark, x + 7.4, y + 8.4, z - 6.6));
  g.add(mesh(new THREE.BoxGeometry(1.5, 1.3, 1.5), mats.crate, x + 7.4, y + 6.5, z - 6.6));
  addCrate(g, x - 2.4, z + 2.2, 0.2, 1);
  addCrate(g, x - 2.8, z - 1.6, -0.15, 0.9);
  g.add(labelPlane("CRANE", "#1a100c", "#f0c089", 2.6, 0.5, x, y + 6.4, z + 3.6));
  g.add(labelPlane("CARGO", "#1a100c", "#d6b48a", 2.4, 0.42, x, y + 5.85, z + 3.6));
  return g;
}

function createO2Chiller() {
  const g = new THREE.Group();
  g.name = "o2-chiller";
  const x = -80;
  const z = 32;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.2), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 5.0, 14), mats.tankO2, x + 2.6, y + 2.7, z));
  g.add(mesh(new THREE.TorusGeometry(1.55, 0.1, 6, 14), mats.steel, x + 2.6, y + 4.4, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.8, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("CHILLER", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-80, 20], [-80, 26], [-80, 32]], mats.steel, 0.11);
  addPipeRun(g, [[-72, -21], [-80, 8], [-80, 32]], mats.steel, 0.09);
  return g;
}

function createPowerTrench() {
  const g = new THREE.Group();
  g.name = "power-trench";
  const x = 100;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.18, 5.4), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.4), mats.habDark, x, y + 1.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 0.9, 1.1), mats.steelDark, x + 2.4, y + 0.65, z + 1.2));
  g.add(labelPlane("POWER", "#111111", "#f4e6c8", 2.6, 0.45, x, y + 2.45, z + 2.8));
  g.add(labelPlane("TRENCH", "#111111", "#d6b48a", 2.4, 0.38, x, y + 1.95, z + 2.8));
  addPipeRun(g, [[172, -48], [135, -40], [100, -22]], mats.cable, 0.12);
  addPipeRun(g, [[100, -22], [84, -16], [68, -10]], mats.cable, 0.12);
  for (const [lx, lz] of [[148, -44], [122, -34], [84, -16]]) {
    const ly = getHeight(lx, lz);
    g.add(mesh(new THREE.BoxGeometry(2.4, 0.16, 1.1), mats.steelDark, lx, ly + 0.12, lz));
  }
  return g;
}

function createRegolithStock() {
  const g = new THREE.Group();
  g.name = "regolith-stock";
  const x = -22;
  const z = -56;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.16, 7.2), mats.concrete, x, y + 0.08, z));
  const pile = mesh(new THREE.DodecahedronGeometry(2.6, 0), mats.soil, x - 1.6, y + 1.2, z);
  pile.scale.set(1.35, 0.7, 1.15);
  g.add(pile);
  const pile2 = mesh(new THREE.DodecahedronGeometry(2.0, 0), mats.soil, x + 2.2, y + 0.95, z + 1.1);
  pile2.scale.set(1.2, 0.6, 1.05);
  g.add(pile2);
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.2, 1.6), mats.steelDark, x + 2.6, y + 0.8, z - 2.0));
  addCrate(g, x - 3.4, z - 2.2, 0.2, 0.85);
  g.add(labelPlane("REGOLITH", "#1a100c", "#f0c089", 3.4, 0.48, x, y + 3.15, z + 3.7));
  g.add(labelPlane("SINTER FEED", "#1a100c", "#d6b48a", 3.4, 0.4, x, y + 2.6, z + 3.7));
  return g;
}

function createSurvey2() {
  const g = new THREE.Group();
  g.name = "survey-2";
  const px = -124;
  const pz = -188;
  const py = getHeight(px, pz);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.2;
    const lx = Math.cos(a) * 0.62;
    const lz = Math.sin(a) * 0.62;
    g.add(mesh(new THREE.BoxGeometry(0.08, 2.5, 0.08), mats.steelDark, px + lx, py + 1.15, pz + lz, 0.32 * Math.cos(a), 0, 0.32 * Math.sin(a)));
  }
  g.add(mesh(new THREE.BoxGeometry(0.58, 0.32, 0.48), mats.steelDark, px, py + 2.28, pz));
  g.add(labelPlane("SURVEY 2", "#1a100c", "#f0c089", 3.0, 0.55, px, py + 3.4, pz + 1.2));
  g.add(labelPlane("ICE WEST", "#1a100c", "#d6b48a", 2.6, 0.4, px, py + 2.85, pz + 1.2));
  const stakeGrid = [
    [-136, -200], [-124, -200], [-112, -200],
    [-136, -188], [-124, -188], [-112, -188],
    [-136, -176], [-124, -176], [-112, -176],
  ];
  for (let i = 0; i < stakeGrid.length; i++) {
    const [sx, sz] = stakeGrid[i];
    addStake(g, sx, sz, i % 2 === 0 ? mats.flagIce : mats.flagDeposit);
  }
  addFlag(g, -130, -196, "ICE", mats.flagIce);
  addSampleCache(g, -122, -184, 0.2);
  addSampleCache(g, -126.4, -182.6, -0.3);
  return g;
}

function createH2Tank() {
  const g = new THREE.Group();
  g.name = "h2-recycle";
  const x = -38;
  const z = 16;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 6.4, 16), mats.steel, x - 1.8, y + 3.4, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 6.4, 16), mats.steel, x + 1.8, y + 3.4, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.6), mats.habDark, x, y + 0.9, z + 2.2));
  g.add(labelPlane("H2", "#1a100c", "#f0c089", 1.8, 0.5, x, y + 5.15, z + 3.7));
  g.add(labelPlane("RECYCLE", "#1a100c", "#d6b48a", 2.8, 0.42, x, y + 4.55, z + 3.7));
  addPipeRun(g, [[-50, 4], [-44, 10], [-38, 16]], mats.steel, 0.11);
  addPipeRun(g, [[-38, 16], [-52, 8], [-64, -8]], mats.steel, 0.1);
  return g;
}

function createFoodVault4() {
  const g = new THREE.Group();
  g.name = "food-4";
  const x = 70;
  const z = -112;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.22, 7.2), mats.concrete, x, y + 0.1, z));
  const vault = new THREE.Mesh(new THREE.CylinderGeometry(3.3, 3.3, 11.2, 16, 1, false, 0, Math.PI), mats.glass);
  vault.rotation.z = Math.PI / 2;
  vault.position.set(x, y + 3.3, z);
  vault.castShadow = false;
  g.add(vault);
  g.add(mesh(new THREE.BoxGeometry(10.8, 0.1, 6.6), mats.solarFrame, x, y + 3.35, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 0.22, 5.2), mats.soil, x + i * 1.95, y + 0.32, z));
    for (let j = -2; j <= 2; j++) {
      const leaf = j % 2 === 0 ? mats.plant : mats.plantLeaf;
      g.add(mesh(new THREE.BoxGeometry(1.15, 0.5, 0.66), leaf, x + i * 1.95, y + 0.7, z + j * 0.9));
    }
  }
  g.add(labelPlane("GROW 4", "#1a100c", "#f0c089", 2.8, 0.55, x, y + 4.75, z + 0.15));
  g.add(labelPlane("FROM CO2", "#1a100c", "#d6b48a", 3.0, 0.42, x, y + 4.15, z + 0.15));
  addPipeRun(g, [[52, -112], [62, -112], [70, -112]], mats.pipe, 0.1);
  return g;
}

function createApproachLights() {
  const g = new THREE.Group();
  g.name = "approach-lights";
  for (const [x, z] of [[4, 68], [4, 50], [4, 32]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 16;
  const z = 48;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("APPROACH", "#1a100c", "#f0c089", 3.0, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createProcessWater() {
  const g = new THREE.Group();
  g.name = "isru-process-water";
  const x = -58;
  const z = -36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x - 2.2, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x + 2.0, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), mats.habDark, x, y + 1.0, z + 2.4));
  g.add(labelPlane("PROCESS", "#1a2830", "#d6e6ef", 3.2, 0.5, x, y + 4.55, z + 3.8));
  g.add(labelPlane("H2O", "#1a2830", "#d6b48a", 2.0, 0.42, x, y + 4.0, z + 3.8));
  addPipeRun(g, [[-58, -142], [-58, -90], [-58, -36]], mats.pipe, 0.11);
  addPipeRun(g, [[-58, -36], [-64, -26], [-68, -16]], mats.pipe, 0.1);
  addPipeRun(g, [[-58, -36], [-50, -16], [-50, 4]], mats.pipe, 0.1);
  return g;
}

function createMethaloxBerm() {
  const g = new THREE.Group();
  g.name = "methalox-berm";
  const berm = mesh(new THREE.TorusGeometry(9.2, 1.7, 8, 24, Math.PI * 1.2), mats.rust, 50, getHeight(50, 4) - 0.15, 4, Math.PI / 2, 1.6, 0);
  berm.scale.set(1, 0.45, 1);
  g.add(berm);
  for (const [x, z] of [[54, 12], [56, 4], [54, -4]]) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.2, 0), mats.rust, x, getHeight(x, z) + 0.9, z);
    pile.scale.set(1.2, 0.55, 1.05);
    g.add(pile);
  }
  const [lx, ly, lz] = sit(50, 4, 2.2);
  g.add(labelPlane("FARM BERM", "#1a100c", "#f0c089", 3.4, 0.55, lx, ly + 1.1, lz));
  g.add(labelPlane("METHALOX", "#1a100c", "#d6b48a", 3.2, 0.42, lx, ly + 0.5, lz));
  return g;
}

function createIceMineBerm() {
  const g = new THREE.Group();
  g.name = "ice-mine-berm";
  const berm = mesh(new THREE.TorusGeometry(8.4, 1.6, 8, 24, Math.PI * 1.15), mats.rust, -40, getHeight(-40, -168) - 0.15, -168, Math.PI / 2, 0.4, 0);
  berm.scale.set(1, 0.44, 1);
  g.add(berm);
  for (const [x, z] of [[-34, -162], [-32, -170], [-38, -176]]) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.1, 0), mats.rust, x, getHeight(x, z) + 0.85, z);
    pile.scale.set(1.15, 0.55, 1.0);
    g.add(pile);
  }
  const [lx, ly, lz] = sit(-40, -168, 2.2);
  g.add(labelPlane("MINE BERM", "#1a2830", "#d6e6ef", 3.4, 0.55, lx, ly + 1.1, lz));
  g.add(labelPlane("ICE 1", "#1a2830", "#d6b48a", 2.2, 0.42, lx, ly + 0.5, lz));
  return g;
}

function createToolCrib() {
  const g = new THREE.Group();
  g.name = "tool-crib";
  const x = 82;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(7.2, 2.6, 3.4), mats.habDark, x, y + 1.5, z));
  g.add(mesh(new THREE.BoxGeometry(7.4, 0.12, 3.6), mats.steel, x, y + 2.85, z));
  for (let i = -2; i <= 2; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.9, 1.6, 0.55), mats.steelDark, x + i * 1.15, y + 1.15, z + 1.35));
  }
  addCrate(g, 77.8, -87.4, 0.15, 0.85);
  addCrate(g, 86.2, -92.4, -0.1, 0.8);
  g.add(labelPlane("TOOL", "#1a100c", "#f0c089", 2.2, 0.5, x, y + 3.85, z + 3.7));
  g.add(labelPlane("CRIB", "#1a100c", "#d6b48a", 2.0, 0.42, x, y + 3.3, z + 3.7));
  return g;
}

function createCommsBattery() {
  const g = new THREE.Group();
  g.name = "comms-battery";
  const x = 4;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.9, 3.6), mats.battery, x - 3.2 + i * 2.1, y + 1.15, z));
    g.add(mesh(new THREE.BoxGeometry(1.55, 0.08, 3.4), mats.steel, x - 3.2 + i * 2.1, y + 2.15, z));
  }
  g.add(labelPlane("COMMS", "#111111", "#f4e6c8", 2.6, 0.5, x, y + 3.15, z + 3.7));
  g.add(labelPlane("NIGHT", "#111111", "#d6b48a", 2.2, 0.42, x, y + 2.6, z + 3.7));
  return g;
}

function createSolarCombiner3() {
  const g = new THREE.Group();
  g.name = "solar-combiner-3";
  const x = 148;
  const z = -40;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("COMBINER", "#111111", "#f4e6c8", 3.4, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("FIELD 3", "#111111", "#d6b48a", 2.6, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[135, -40], [142, -40], [148, -40]], mats.cable, 0.1);
  addPipeRun(g, [[148, -40], [124, -30], [100, -22]], mats.cable, 0.09);
  return g;
}

function createSolarCombiner2() {
  const g = new THREE.Group();
  g.name = "solar-combiner-2";
  const x = 124;
  const z = -70;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("COMBINER", "#111111", "#f4e6c8", 3.4, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("FIELD 2", "#111111", "#d6b48a", 2.6, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[112, -83], [118, -76], [124, -70]], mats.cable, 0.1);
  addPipeRun(g, [[124, -70], [136, -54], [148, -40]], mats.cable, 0.09);
  return g;
}

function createSolarCombiner1() {
  const g = new THREE.Group();
  g.name = "solar-combiner-1";
  const x = 96;
  const z = -44;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("COMBINER", "#111111", "#f4e6c8", 3.4, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("FARM 1", "#111111", "#d6b48a", 2.4, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[82, -44], [90, -44], [96, -44]], mats.cable, 0.1);
  addPipeRun(g, [[96, -44], [98, -32], [100, -22]], mats.cable, 0.09);
  return g;
}

function createSabatierCondenser() {
  const g = new THREE.Group();
  g.name = "sabatier-condenser";
  const x = -84;
  const z = 8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.8, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 4.6, 14), mats.pipe, x + 2.4, y + 2.5, z));
  g.add(mesh(new THREE.TorusGeometry(1.65, 0.1, 6, 14), mats.steel, x + 2.4, y + 4.1, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.4, 12), mats.steelDark, x + 2.4, y + 1.4, z + 2.1));
  g.add(labelPlane("KNOCKOUT", "#1a2830", "#d6e6ef", 3.4, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("H2O", "#1a2830", "#d6b48a", 1.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-68, -16], [-76, -4], [-84, 8]], mats.pipe, 0.11);
  addPipeRun(g, [[-84, 8], [-80, 14], [-80, 20]], mats.tankCh4, 0.09);
  return g;
}

function createHabDustLock() {
  const g = new THREE.Group();
  g.name = "hab-dust-lock";
  const x = 16;
  const z = -86;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8.4, 0.2, 6.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(6.2, 3.4, 4.4), mats.habDark, x, y + 1.9, z));
  g.add(mesh(new THREE.BoxGeometry(6.4, 0.16, 4.6), mats.steel, x, y + 3.65, z));
  g.add(mesh(new THREE.BoxGeometry(1.8, 2.4, 0.22), mats.steelDark, x, y + 1.5, z + 2.3));
  g.add(mesh(new THREE.BoxGeometry(1.8, 2.4, 0.22), mats.steelDark, x, y + 1.5, z - 2.3));
  g.add(createEvaSuit(x + 2.6, z + 0.2, 0.1));
  g.add(labelPlane("DUST LOCK", "#1a100c", "#f0c089", 3.4, 0.45, x, y + 4.35, z + 2.4));
  g.add(labelPlane("HAB EVA", "#1a100c", "#d6b48a", 2.6, 0.4, x, y + 3.85, z + 2.4));
  return g;
}

function createField3Night() {
  const g = new THREE.Group();
  g.name = "field3-night";
  const x = 135;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 2.0, 4.2), mats.battery, x - 4 + i * 2.0, y + 1.2, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, x, y + 2.7, z + 3.6));
  g.add(labelPlane("FIELD 3", "#111111", "#d6b48a", 2.4, 0.42, x, y + 2.15, z + 3.6));
  addPipeRun(g, [[148, -40], [142, -30], [135, -22]], mats.cable, 0.1);
  addPipeRun(g, [[135, -22], [118, -22], [100, -22]], mats.cable, 0.09);
  return g;
}

function createField2Night() {
  const g = new THREE.Group();
  g.name = "field2-night";
  const x = 100;
  const z = -70;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 2.0, 4.2), mats.battery, x - 4 + i * 2.0, y + 1.2, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, x, y + 2.7, z + 3.6));
  g.add(labelPlane("FIELD 2", "#111111", "#d6b48a", 2.4, 0.42, x, y + 2.15, z + 3.6));
  addPipeRun(g, [[124, -70], [112, -70], [100, -70]], mats.cable, 0.1);
  addPipeRun(g, [[100, -70], [100, -46], [100, -22]], mats.cable, 0.09);
  return g;
}

function createFarm1Night() {
  const g = new THREE.Group();
  g.name = "farm1-night";
  const x = 82;
  const z = -28;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 2.0, 4.2), mats.battery, x - 4 + i * 2.0, y + 1.2, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, x, y + 2.7, z + 3.6));
  g.add(labelPlane("FARM 1", "#111111", "#d6b48a", 2.4, 0.42, x, y + 2.15, z + 3.6));
  addPipeRun(g, [[82, -44], [82, -36], [82, -28]], mats.cable, 0.1);
  addPipeRun(g, [[82, -28], [74, -18], [68, -10]], mats.cable, 0.09);
  return g;
}

function createCo2Capture1() {
  const g = new THREE.Group();
  g.name = "co2-capture-1";
  const x = -68;
  const z = 2;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 6.8, 10), mats.steel, x - 2.4, y + 3.6, z));
  g.add(mesh(new THREE.CylinderGeometry(2.1, 0.65, 2.4, 14), mats.steelDark, x - 2.4, y + 7.8, z));
  g.add(mesh(new THREE.TorusGeometry(1.85, 0.1, 6, 16), mats.steel, x - 2.4, y + 9.1, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.2, 2.4), mats.habDark, x + 2.2, y + 1.3, z));
  g.add(labelPlane("CO2", "#1a100c", "#f0c089", 2.2, 0.55, x - 2.4, y + 4.8, z + 1.4));
  g.add(labelPlane("INTAKE 1", "#1a100c", "#d6b48a", 3.0, 0.45, x + 2.2, y + 2.7, z + 1.35));
  addPipeRun(g, [[-68, 2], [-68, -8], [-68, -16]], mats.pipe, 0.12);
  return g;
}

function createField3Fence() {
  const g = new THREE.Group();
  g.name = "field3-dust-fence";
  const x = 122;
  const z = -40;
  const y = getHeight(x, z);
  for (let i = 0; i < 8; i++) {
    const pz = z - 10.5 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.4, 0.18), mats.steelDark, x, y + 1.8, pz));
    if (i < 7) {
      g.add(mesh(new THREE.BoxGeometry(0.06, 2.6, 2.7), mats.lattice, x, y + 1.7, pz + 1.5));
    }
  }
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.4, 0.45, x - 1.4, y + 3.5, z));
  g.add(labelPlane("FIELD 3", "#1a100c", "#d6b48a", 2.6, 0.4, x - 1.4, y + 3.0, z));
  return g;
}

function createField2Fence() {
  const g = new THREE.Group();
  g.name = "field2-dust-fence";
  const x = 98;
  const z = -83;
  const y = getHeight(x, z);
  for (let i = 0; i < 8; i++) {
    const pz = z - 10.5 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.4, 0.18), mats.steelDark, x, y + 1.8, pz));
    if (i < 7) {
      g.add(mesh(new THREE.BoxGeometry(0.06, 2.6, 2.7), mats.lattice, x, y + 1.7, pz + 1.5));
    }
  }
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.4, 0.45, x - 1.4, y + 3.5, z));
  g.add(labelPlane("FIELD 2", "#1a100c", "#d6b48a", 2.6, 0.4, x - 1.4, y + 3.0, z));
  return g;
}

function createFarm1Fence() {
  const g = new THREE.Group();
  g.name = "farm1-dust-fence";
  const x = 70;
  const z = -44;
  const y = getHeight(x, z);
  for (let i = 0; i < 8; i++) {
    const pz = z - 10.5 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.4, 0.18), mats.steelDark, x, y + 1.8, pz));
    if (i < 7) {
      g.add(mesh(new THREE.BoxGeometry(0.06, 2.6, 2.7), mats.lattice, x, y + 1.7, pz + 1.5));
    }
  }
  g.add(labelPlane("DUST", "#1a100c", "#f0c089", 2.4, 0.45, x - 1.4, y + 3.5, z));
  g.add(labelPlane("FARM 1", "#1a100c", "#d6b48a", 2.4, 0.4, x - 1.4, y + 3.0, z));
  return g;
}

function createCrushCover() {
  const g = new THREE.Group();
  g.name = "ice-crush-cover";
  const x = -102;
  const z = -158;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(10.4, 0.18, 8.2), mats.concrete, x, y + 0.09, z));
  for (const [dx, dz] of [[-4.2, -3.2], [4.2, -3.2], [-4.2, 3.2], [4.2, 3.2]]) {
    g.add(mesh(new THREE.CylinderGeometry(0.16, 0.2, 4.2, 8), mats.steelDark, x + dx, y + 2.2, z + dz));
  }
  g.add(mesh(new THREE.BoxGeometry(10.8, 0.14, 8.6), mats.steel, x, y + 4.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.4), mats.steelDark, x, y + 1.1, z));
  const pile = mesh(new THREE.DodecahedronGeometry(1.6, 0), mats.ice, x + 2.8, y + 0.85, z + 1.6);
  pile.scale.set(1.2, 0.55, 1.05);
  g.add(pile);
  g.add(labelPlane("CRUSH", "#1a2830", "#d6e6ef", 2.6, 0.45, x, y + 4.95, z + 4.3));
  g.add(labelPlane("COVER", "#1a2830", "#d6b48a", 2.4, 0.4, x, y + 4.45, z + 4.3));
  return g;
}

function createHabBatteries4() {
  const g = new THREE.Group();
  g.name = "batteries-4";
  const x = -18;
  const z = -78;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 6.4), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.95, 3.8), mats.battery, x - 4 + i * 2.0, y + 1.15, z));
    g.add(mesh(new THREE.BoxGeometry(1.55, 0.08, 3.6), mats.steel, x - 4 + i * 2.0, y + 2.18, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.4, 0.5, x, y + 2.7, z + 3.3));
  g.add(labelPlane("HAB 4", "#111111", "#d6b48a", 2.2, 0.42, x, y + 2.15, z + 3.3));
  return g;
}

function createIceMine2Berm() {
  const g = new THREE.Group();
  g.name = "ice-mine-2-berm";
  const berm = mesh(new THREE.TorusGeometry(8.4, 1.6, 8, 24, Math.PI * 1.15), mats.rust, -64, getHeight(-64, -184) - 0.15, -184, Math.PI / 2, 0.55, 0);
  berm.scale.set(1, 0.44, 1);
  g.add(berm);
  for (const [x, z] of [[-58, -178], [-56, -186], [-62, -192]]) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.1, 0), mats.rust, x, getHeight(x, z) + 0.85, z);
    pile.scale.set(1.15, 0.55, 1.0);
    g.add(pile);
  }
  const [lx, ly, lz] = sit(-64, -184, 2.2);
  g.add(labelPlane("MINE BERM", "#1a2830", "#d6e6ef", 3.4, 0.55, lx, ly + 1.1, lz));
  g.add(labelPlane("ICE 2", "#1a2830", "#d6b48a", 2.2, 0.42, lx, ly + 0.5, lz));
  return g;
}

function createPotableUV() {
  const g = new THREE.Group();
  g.name = "potable-uv";
  const x = 32;
  const z = -152;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.4), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 3.4, 14), mats.pipe, x + 2.6, y + 1.9, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.4, 1.2), mats.steel, x + 2.6, y + 3.9, z));
  g.add(labelPlane("UV", "#1a2830", "#d6e6ef", 1.6, 0.5, x, y + 4.15, z + 3.7));
  g.add(labelPlane("POLISH", "#1a2830", "#d6b48a", 2.6, 0.42, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[18, -152], [24, -152], [32, -152]], mats.pipe, 0.1);
  return g;
}

function createIsruRadiators2() {
  const g = new THREE.Group();
  g.name = "isru-radiators-2";
  const x = -96;
  const z = 16;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16.4, 0.18, 6.2), mats.concrete, x, y + 0.08, z));
  for (let i = 0; i < 5; i++) {
    const px = x - 6 + i * 3.0;
    g.add(mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), mats.steelDark, px, y + 1.9, z - 1.8));
    g.add(mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), mats.steelDark, px, y + 1.9, z + 1.8));
    g.add(mesh(new THREE.BoxGeometry(2.4, 3.2, 0.08), mats.solar, px, y + 2.4, z, -0.15, 0, 0));
    g.add(mesh(new THREE.BoxGeometry(2.5, 3.3, 0.04), mats.steel, px, y + 2.4, z + 0.06, -0.15, 0, 0));
  }
  g.add(labelPlane("REJECT", "#1a100c", "#f0c089", 2.8, 0.5, x, y + 4.55, z + 3.2));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 2.8, 0.42, x, y + 4.0, z + 3.2));
  addPipeRun(g, [[-96, -6], [-96, 4], [-96, 16]], mats.pipe, 0.1);
  return g;
}

function createWorkshopBay3() {
  const g = new THREE.Group();
  g.name = "workshop-3";
  const x = 82;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(16, 0.28, 12), mats.concrete, x, y + 0.1, z));
  const hut = mesh(new THREE.CylinderGeometry(5.4, 5.4, 14, 16, 1, false, 0, Math.PI), mats.habDark, x - 1.2, y + 3.1, z);
  hut.rotation.z = Math.PI / 2;
  g.add(hut);
  g.add(mesh(new THREE.BoxGeometry(0.2, 3.8, 5.8), mats.steelDark, x - 8.1, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 8.4, 0.28), mats.lattice, x + 6.4, y + 4.3, z - 3.6));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.2, 0.2), mats.lattice, x + 3.0, y + 8.5, z - 3.6));
  g.add(mesh(new THREE.BoxGeometry(1.5, 1.1, 1.5), mats.crate, x + 2.2, y + 8.0, z - 3.4));
  addCrate(g, 89.2, -69.4, 0.2);
  addCrate(g, 90.4, -71.6, -0.3, 1.05);
  addCrate(g, 74.6, -68.8, 0.15, 0.9);
  g.add(labelPlane("WORKSHOP", "#1a100c", "#f0c089", 3.8, 0.75, x, y + 5.4, z + 0.2));
  g.add(labelPlane("BAY 3", "#1a100c", "#d6b48a", 2.6, 0.5, x, y + 4.7, z + 0.2));
  return g;
}

function createIceMelt2() {
  const g = new THREE.Group();
  g.name = "ice-melt-2";
  const x = -78;
  const z = -156;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.8, 3.2), mats.habDark, x - 1.8, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.45, 1.45, 4.2, 14), mats.pipe, x + 2.2, y + 2.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.85, 1.6, 10), mats.steelDark, x + 2.2, y + 4.9, z));
  const pile = mesh(new THREE.DodecahedronGeometry(1.8, 0), mats.ice, x - 3.4, y + 0.9, z + 2.1);
  pile.scale.set(1.15, 0.55, 1.0);
  g.add(pile);
  g.add(labelPlane("MELT", "#1a2830", "#d6e6ef", 2.4, 0.5, x, y + 4.4, z + 3.7));
  g.add(labelPlane("MINE 2", "#1a2830", "#d6b48a", 2.6, 0.42, x, y + 3.85, z + 3.7));
  addPipeRun(g, [[-78, -172], [-78, -164], [-78, -156]], mats.pipe, 0.11);
  addPipeRun(g, [[-78, -156], [-90, -90], [-96, -26]], mats.pipe, 0.1);
  return g;
}

function createSabatierCondenser2() {
  const g = new THREE.Group();
  g.name = "sabatier-condenser-2";
  const x = -110;
  const z = 8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.8, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 4.6, 14), mats.pipe, x + 2.4, y + 2.5, z));
  g.add(mesh(new THREE.TorusGeometry(1.65, 0.1, 6, 14), mats.steel, x + 2.4, y + 4.1, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.4, 12), mats.steelDark, x + 2.4, y + 1.4, z + 2.1));
  g.add(labelPlane("KNOCKOUT", "#1a2830", "#d6e6ef", 3.4, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("TRAIN 2", "#1a2830", "#d6b48a", 2.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-96, -16], [-104, -4], [-110, 8]], mats.pipe, 0.11);
  return g;
}

function createCh4Chiller2() {
  const g = new THREE.Group();
  g.name = "ch4-chiller-2";
  const x = -110;
  const z = 20;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.2), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 5.0, 14), mats.tankCh4, x + 2.6, y + 2.7, z));
  g.add(mesh(new THREE.TorusGeometry(1.55, 0.1, 6, 14), mats.steel, x + 2.6, y + 4.4, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 2.0, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-110, 8], [-110, 14], [-110, 20]], mats.tankCh4, 0.11);
  return g;
}

function createO2Chiller2() {
  const g = new THREE.Group();
  g.name = "o2-chiller-2";
  const x = -110;
  const z = 32;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.2), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 5.0, 14), mats.tankO2, x + 2.6, y + 2.7, z));
  g.add(mesh(new THREE.TorusGeometry(1.55, 0.1, 6, 14), mats.steel, x + 2.6, y + 4.4, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.8, 0.45, x, y + 4.15, z + 3.7));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-110, 20], [-110, 26], [-110, 32]], mats.steel, 0.11);
  return g;
}

function createElectrolysis2() {
  const g = new THREE.Group();
  g.name = "isru-electrolysis-2";
  const x = -122;
  const z = 8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.6, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 3.6, 2.6), mats.habDark, x - 2.6, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 3.6, 2.6), mats.steelDark, x + 1.2, y + 2.0, z));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.18, 3.1, 2.2), mats.steel, x - 3.8 + i * 0.7, y + 2.0, z));
  }
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 5.2, 14), mats.steel, x + 4.2, y + 2.8, z + 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 4.4, 14), mats.tankO2, x + 4.2, y + 2.4, z - 1.6));
  g.add(labelPlane("ELECTRO", "#1a100c", "#f0c089", 3.2, 0.5, x, y + 4.55, z + 3.7));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 2.8, 0.42, x, y + 4.0, z + 3.7));
  addPipeRun(g, [[-110, 8], [-116, 8], [-122, 8]], mats.pipe, 0.11);
  return g;
}

function createH2Tank2() {
  const g = new THREE.Group();
  g.name = "h2-recycle-2";
  const x = -122;
  const z = 20;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 6.4, 16), mats.steel, x - 1.8, y + 3.4, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 6.4, 16), mats.steel, x + 1.8, y + 3.4, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.6), mats.habDark, x, y + 0.9, z + 2.2));
  g.add(labelPlane("H2", "#1a100c", "#f0c089", 1.8, 0.5, x, y + 5.15, z + 3.7));
  g.add(labelPlane("TRAIN 2", "#1a100c", "#d6b48a", 2.8, 0.42, x, y + 4.55, z + 3.7));
  addPipeRun(g, [[-122, 8], [-122, 14], [-122, 20]], mats.steel, 0.11);
  return g;
}

function createEclssSkid2() {
  const g = new THREE.Group();
  g.name = "eclss-2";
  const x = -8;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.22, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.8, 2.6, 3.4), mats.habDark, x - 2.4, y + 1.5, z));
  g.add(labelPlane("ECLSS", "#1a100c", "#f0c089", 3.2, 0.6, x - 2.4, y + 3.05, z + 1.85));
  g.add(labelPlane("SCRUB 2", "#1a100c", "#d6b48a", 3.0, 0.45, x - 2.4, y + 2.45, z + 1.85));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.4, 12), mats.steelDark, x + 1.6, y + 1.9, z - 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.4, 12), mats.steelDark, x + 3.4, y + 1.9, z - 1.4));
  g.add(labelPlane("AMINE", "#1a100c", "#d6b48a", 2.2, 0.4, x + 2.5, y + 3.8, z - 1.4));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 12), mats.tankO2, x + 1.6, y + 1.5, z + 1.8));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 12), mats.tankO2, x + 3.4, y + 1.5, z + 1.8));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.4, 0.4, x + 2.5, y + 3.05, z + 1.8));
  addPipeRun(g, [[8, -98], [0, -98], [-8, -98]], mats.pipe, 0.1);
  return g;
}

function createWasteRecycle2() {
  const g = new THREE.Group();
  g.name = "waste-recycle-2";
  const x = -22;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.4, 2.8, 3.6), mats.habDark, x - 1.4, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.pipe, x + 2.8, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.8, 12), mats.steelDark, x + 2.8, y + 1.6, z + 2.0));
  g.add(labelPlane("WASTE", "#1a100c", "#f0c089", 2.6, 0.5, x, y + 4.25, z + 3.7));
  g.add(labelPlane("RECOVERY 2", "#1a100c", "#d6b48a", 3.6, 0.42, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[-8, -98], [-14, -98], [-22, -98]], mats.pipe, 0.1);
  return g;
}

function createO2Buffer2() {
  const g = new THREE.Group();
  g.name = "o2-buffer-2";
  const x = 8;
  const z = -88;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(10.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    const tx = x - 3.3 + i * 2.2;
    g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.6, 12), mats.tankO2, tx, y + 2.0, z));
  }
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.8, 0.5, x, y + 4.15, z + 3.7));
  g.add(labelPlane("CREW 2", "#2a3340", "#d6b48a", 2.6, 0.42, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-8, -88], [0, -88], [8, -88]], mats.tankO2, 0.1);
  return g;
}

function createProcessWater2() {
  const g = new THREE.Group();
  g.name = "isru-process-water-2";
  const x = -78;
  const z = -36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x - 2.2, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x + 2.0, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), mats.habDark, x, y + 1.0, z + 2.4));
  g.add(labelPlane("PROCESS", "#1a2830", "#d6e6ef", 3.2, 0.5, x, y + 4.55, z + 3.8));
  g.add(labelPlane("TRAIN 2", "#1a2830", "#d6b48a", 2.8, 0.42, x, y + 4.0, z + 3.8));
  addPipeRun(g, [[-78, -156], [-78, -90], [-78, -36]], mats.pipe, 0.11);
  addPipeRun(g, [[-78, -36], [-88, -26], [-96, -16]], mats.pipe, 0.1);
  return g;
}

function createPartsRack() {
  const g = new THREE.Group();
  g.name = "parts-rack";
  const x = 96;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(8.4, 2.8, 0.22), mats.steelDark, x, y + 1.6, z - 2.4));
  for (let i = -3; i <= 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.16, 2.6, 1.8), mats.steel, x + i * 1.1, y + 1.5, z - 1.4));
  }
  addCrate(g, 92.2, -87.6, 0.15, 0.85);
  addCrate(g, 99.4, -88.2, -0.2, 1.0);
  g.add(labelPlane("PARTS", "#1a100c", "#f0c089", 2.6, 0.5, x, y + 3.35, z + 3.5));
  g.add(labelPlane("RACK", "#1a100c", "#d6b48a", 2.2, 0.42, x, y + 2.8, z + 3.5));
  return g;
}

function createHabPowerTrench() {
  const g = new THREE.Group();
  g.name = "hab-power-trench";
  const x = -5;
  const z = -78;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.18, 5.4), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.4), mats.habDark, x, y + 1.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 0.9, 1.1), mats.steelDark, x + 2.4, y + 0.65, z + 1.2));
  g.add(labelPlane("HAB", "#111111", "#f4e6c8", 1.8, 0.45, x, y + 2.45, z + 2.8));
  g.add(labelPlane("TRENCH", "#111111", "#d6b48a", 2.4, 0.38, x, y + 1.95, z + 2.8));
  addPipeRun(g, [[8, -78], [-5, -78], [-18, -78]], mats.cable, 0.12);
  return g;
}

function createCommsInverter() {
  const g = new THREE.Group();
  g.name = "comms-inverter";
  const x = 16;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("COMMS", "#111111", "#f4e6c8", 2.6, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[4, -148], [10, -148], [16, -148]], mats.cable, 0.1);
  addPipeRun(g, [[-8, -162], [4, -154], [16, -148]], mats.cable, 0.09);
  return g;
}

function createIceWeigh() {
  const g = new THREE.Group();
  g.name = "ice-weigh";
  const x = -90;
  const z = -136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(6.4, 0.28, 3.6), mats.steel, x, y + 0.28, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 2.4, 1.8), mats.habDark, x + 3.2, y + 1.4, z + 2.0));
  g.add(mesh(new THREE.BoxGeometry(0.18, 3.2, 0.18), mats.steelDark, x - 3.6, y + 1.8, z - 2.4));
  g.add(mesh(new THREE.BoxGeometry(0.18, 3.2, 0.18), mats.steelDark, x + 3.6, y + 1.8, z - 2.4));
  g.add(mesh(new THREE.BoxGeometry(7.4, 0.12, 0.12), mats.steel, x, y + 3.45, z - 2.4));
  g.add(labelPlane("WEIGH", "#1a2830", "#d6e6ef", 2.6, 0.5, x, y + 3.15, z + 3.7));
  g.add(labelPlane("ICE HAUL", "#1a2830", "#d6b48a", 3.0, 0.42, x, y + 2.6, z + 3.7));
  return g;
}

function createHabEvaLocker() {
  const g = new THREE.Group();
  g.name = "hab-eva-locker";
  const x = 16;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.16, 5.4), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(5.8, 0.16, 2.4), mats.steelDark, x, y + 0.18, z));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steel, x - 2.4, y + 1.6, z - 0.7));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steel, x + 2.4, y + 1.6, z - 0.7));
  g.add(mesh(new THREE.BoxGeometry(5.0, 0.12, 0.12), mats.steel, x, y + 3.0, z - 0.7));
  g.add(createEvaSuit(x - 1.5, z, 0.2));
  g.add(createEvaSuit(x, z + 0.15, -0.1));
  g.add(createEvaSuit(x + 1.5, z, 0.15));
  g.add(labelPlane("SUITS", "#1a100c", "#f0c089", 2.4, 0.45, x, y + 3.45, z + 2.4));
  g.add(labelPlane("HAB EVA", "#1a100c", "#d6b48a", 2.8, 0.4, x, y + 2.95, z + 2.4));
  return g;
}

function createCommsBerm() {
  const g = new THREE.Group();
  g.name = "comms-berm";
  const berm = mesh(new THREE.TorusGeometry(8.4, 1.6, 8, 24, Math.PI * 1.15), mats.rust, -48, getHeight(-48, -138) - 0.15, -138, Math.PI / 2, 0.7, 0);
  berm.scale.set(1, 0.44, 1);
  g.add(berm);
  for (const [x, z] of [[-42, -132], [-40, -140], [-46, -146]]) {
    const pile = mesh(new THREE.DodecahedronGeometry(2.1, 0), mats.rust, x, getHeight(x, z) + 0.85, z);
    pile.scale.set(1.15, 0.55, 1.0);
    g.add(pile);
  }
  const [lx, ly, lz] = sit(-48, -138, 2.2);
  g.add(labelPlane("DUST BERM", "#1a2830", "#d6e6ef", 3.4, 0.55, lx, ly + 1.1, lz));
  g.add(labelPlane("COMMS", "#1a2830", "#d6b48a", 2.4, 0.42, lx, ly + 0.5, lz));
  return g;
}

function createGrowWater() {
  const g = new THREE.Group();
  g.name = "grow-water";
  const x = 52;
  const z = -126;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x - 2.2, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 8.4, 16), mats.pipe, x + 2.0, y + 2.0, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), mats.habDark, x, y + 1.0, z + 2.4));
  g.add(labelPlane("GROW", "#1a2830", "#d6e6ef", 2.4, 0.5, x, y + 4.55, z + 3.8));
  g.add(labelPlane("H2O", "#1a2830", "#d6b48a", 2.0, 0.42, x, y + 4.0, z + 3.8));
  addPipeRun(g, [[52, -112], [52, -118], [52, -126]], mats.pipe, 0.11);
  addPipeRun(g, [[38, -126], [44, -126], [52, -126]], mats.pipe, 0.1);
  return g;
}

function createGrowNutrient() {
  const g = new THREE.Group();
  g.name = "grow-nutrient";
  const x = 70;
  const z = -126;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.4, 2.8, 3.6), mats.habDark, x - 1.4, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.pipe, x + 2.8, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.8, 12), mats.steelDark, x + 2.8, y + 1.6, z + 2.0));
  g.add(labelPlane("NUTRIENT", "#1a100c", "#f0c089", 3.4, 0.5, x, y + 4.25, z + 3.7));
  g.add(labelPlane("GROW", "#1a100c", "#d6b48a", 2.2, 0.42, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[52, -126], [60, -126], [70, -126]], mats.pipe, 0.1);
  addPipeRun(g, [[70, -112], [70, -118], [70, -126]], mats.pipe, 0.09);
  return g;
}

function createHabStreetLights() {
  const g = new THREE.Group();
  g.name = "hab-street-lights";
  for (const [x, z] of [[0, -78], [0, -98], [0, -118]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 0;
  const z = -68;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("HAB", "#1a100c", "#f0c089", 1.8, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createWorkshopLights() {
  const g = new THREE.Group();
  g.name = "workshop-lights";
  for (const [x, z] of [[58, -80], [74, -80], [90, -80]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 48;
  const z = -70;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("SHOP", "#1a100c", "#f0c089", 2.0, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createIceMineLights() {
  const g = new THREE.Group();
  g.name = "ice-mine-lights";
  for (const [x, z] of [[-58, -148], [-78, -148], [-90, -148]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = -46;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("ICE", "#1a100c", "#f0c089", 1.8, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createIsruLights() {
  const g = new THREE.Group();
  g.name = "isru-lights";
  for (const [x, z] of [[-44, 12], [-62, 16], [-80, 16]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = -38;
  const z = 16;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("ISRU", "#1a100c", "#f0c089", 2.0, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createGrowLights() {
  const g = new THREE.Group();
  g.name = "grow-lights";
  for (const [x, z] of [[22, -104], [38, -118], [52, -104]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 38;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("GROW", "#1a100c", "#f0c089", 2.0, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createSolar4Lights() {
  const g = new THREE.Group();
  g.name = "solar4-lights";
  for (const [x, z] of [[158, -48], [148, -48], [172, -62]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 172;
  const z = -48;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("FIELD 4", "#1a100c", "#f0c089", 2.6, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createPadFloods() {
  const g = new THREE.Group();
  g.name = "pad-floods";
  for (const [x, z] of [[-8, 48], [-8, 32], [-8, 16]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = -16;
  const z = 36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("PAD", "#1a100c", "#f0c089", 1.8, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("FLOOD", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createCommsLights() {
  const g = new THREE.Group();
  g.name = "comms-lights";
  for (const [x, z] of [[-8, -138], [4, -148], [16, -138]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 4;
  const z = -138;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("COMMS", "#1a100c", "#f0c089", 2.4, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createMethaloxLights() {
  const g = new THREE.Group();
  g.name = "methalox-lights";
  for (const [x, z] of [[62, 16], [68, -6], [58, 16]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 68;
  const z = 6;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("MX", "#1a100c", "#f0c089", 1.6, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createSinterKiln() {
  const g = new THREE.Group();
  g.name = "sinter-kiln";
  const x = 66;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(11.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 8.6, 16), mats.steelDark, x, y + 2.15, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.42, 0.55, 3.2, 10), mats.steel, x + 2.4, y + 4.4, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.8, 2.0), mats.habDark, x - 4.4, y + 1.1, z + 1.8));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.4, 1.6), mats.rust, x + 4.2, y + 0.9, z - 1.6));
  g.add(labelPlane("SINTER", "#1a100c", "#f0c089", 2.8, 0.5, x, y + 4.85, z + 3.8));
  g.add(labelPlane("KILN", "#1a100c", "#d6b48a", 2.0, 0.42, x, y + 4.3, z + 3.8));
  return g;
}

function createSinterBricks() {
  const g = new THREE.Group();
  g.name = "sinter-bricks";
  const x = 80;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.16, 5.4), mats.concrete, x, y + 0.08, z));
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const bx = x - 2.4 + col * 1.55;
      const bz = z - 1.2 + row * 1.2;
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.rust, bx, y + 0.38, bz));
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.habDark, bx, y + 0.82, bz));
    }
  }
  g.add(labelPlane("SINTER", "#1a100c", "#f0c089", 2.6, 0.42, x, y + 1.85, z + 2.8));
  g.add(labelPlane("BRICK", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.4, z + 2.8));
  return g;
}

function createSinterRoller() {
  const g = new THREE.Group();
  g.name = "sinter-roller";
  const x = 18;
  const z = 136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(8.8, 0.16, 5.2), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 1.6, 2.2), mats.habDark, x - 0.6, y + 1.15, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 2.6, 14), mats.steelDark, x + 2.6, y + 1.2, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.2, 10), mats.steel, x - 2.6, y + 0.7, z, 0, 0, Math.PI / 2));
  g.add(labelPlane("SINTER", "#1a100c", "#f0c089", 2.6, 0.42, x, y + 2.55, z + 2.7));
  g.add(labelPlane("ROLLER", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 2.1, z + 2.7));
  return g;
}

function createHabBlower() {
  const g = new THREE.Group();
  g.name = "hab-blower";
  const x = 22;
  const z = -98;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.18, 5.2), mats.concrete, x, y + 0.09, z));
  g.add(mesh(new THREE.BoxGeometry(2.6, 1.7, 2.0), mats.habDark, x - 1.4, y + 1.05, z));
  g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 2.4, 14), mats.steelDark, x + 1.8, y + 1.35, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.28, 0.28, 2.8, 8), mats.pipe, x + 1.8, y + 2.55, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.7, z + 2.6));
  g.add(labelPlane("BLOWER", "#1a100c", "#d6b48a", 2.6, 0.36, x, y + 2.25, z + 2.6));
  return g;
}

function createSolar4Inverter() {
  const g = new THREE.Group();
  g.name = "solar4-inverter";
  const x = 172;
  const z = -62;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("FIELD 4", "#111111", "#f4e6c8", 2.8, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.42, x, y + 3.0, z + 3.7));
  return g;
}

function createIceDrill2() {
  const g = new THREE.Group();
  g.name = "ice-drill-2";
  const x = -92;
  const z = -184;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 1.8, 2.4), mats.habDark, x - 2.2, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.28, 0.42, 6.4, 10), mats.steel, x + 2.2, y + 3.4, z));
  g.add(mesh(new THREE.ConeGeometry(0.55, 1.4, 8), mats.soot, x + 2.2, y + 0.85, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), mats.steelDark, x + 2.2, y + 6.5, z));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 2.55, z + 3.7));
  g.add(labelPlane("DRILL", "#1a2830", "#d6b48a", 2.2, 0.36, x, y + 2.1, z + 3.7));
  return g;
}

function createHabN2() {
  const g = new THREE.Group();
  g.name = "hab-n2";
  const x = -32;
  const z = -88;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(10.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    const tx = x - 3.3 + i * 2.2;
    g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 3.6, 12), mats.steel, tx, y + 2.0, z));
  }
  g.add(labelPlane("N2", "#1a2830", "#d6e6ef", 1.8, 0.5, x, y + 4.15, z + 3.7));
  g.add(labelPlane("SPARE", "#1a2830", "#d6b48a", 2.2, 0.42, x, y + 3.6, z + 3.7));
  addPipeRun(g, [[-32, -88], [-18, -88], [-8, -88]], mats.pipe, 0.1);
  return g;
}

function createWorkshopWelder() {
  const g = new THREE.Group();
  g.name = "workshop-welder";
  const x = 96;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.2, 2.6), mats.habDark, x - 2.2, y + 1.3, z));
  g.add(mesh(new THREE.BoxGeometry(0.35, 2.8, 0.35), mats.steel, x + 2.0, y + 1.6, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 0.28, 0.28), mats.steel, x + 3.0, y + 2.9, z));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.2, 1.6), mats.steelDark, x + 2.4, y + 0.8, z + 1.6));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("WELDER", "#1a100c", "#d6b48a", 2.6, 0.36, x, y + 2.7, z + 3.7));
  return g;
}

function createCh4Hose() {
  const g = new THREE.Group();
  g.name = "ch4-hose";
  const x = -28;
  const z = -8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.18, 5.4), mats.concrete, x, y + 0.09, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 2.0), mats.habDark, x - 1.6, y + 1.0, z));
  g.add(mesh(new THREE.TorusGeometry(1.05, 0.22, 8, 16), mats.tankCh4, x + 1.8, y + 1.35, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(0.72, 0.16, 8, 14), mats.tankCh4, x + 1.8, y + 1.35, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("CH4", "#6a2208", "#f4e6c8", 1.8, 0.42, x, y + 2.55, z + 2.8));
  g.add(labelPlane("HOSE", "#6a2208", "#d6b48a", 2.0, 0.36, x, y + 2.1, z + 2.8));
  return g;
}

function createO2Hose() {
  const g = new THREE.Group();
  g.name = "o2-hose";
  const x = -28;
  const z = 6;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.18, 5.4), mats.concrete, x, y + 0.09, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.6, 2.0), mats.habDark, x - 1.6, y + 1.0, z));
  g.add(mesh(new THREE.TorusGeometry(1.05, 0.22, 8, 16), mats.tankO2, x + 1.8, y + 1.35, z, Math.PI / 2, 0, 0));
  g.add(mesh(new THREE.TorusGeometry(0.72, 0.16, 8, 14), mats.steel, x + 1.8, y + 1.35, z, Math.PI / 2, 0, 0));
  g.add(labelPlane("O2", "#2a3340", "#e8eef4", 1.6, 0.42, x, y + 2.55, z + 2.8));
  g.add(labelPlane("HOSE", "#2a3340", "#d6b48a", 2.0, 0.36, x, y + 2.1, z + 2.8));
  return g;
}

function createHabWater() {
  const g = new THREE.Group();
  g.name = "hab-water";
  const x = -46;
  const z = -88;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(10.2, 0.2, 7.4), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 7.6, 16), mats.pipe, x - 1.8, y + 1.9, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(1.55, 1.55, 7.6, 16), mats.pipe, x + 1.8, y + 1.9, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.6), mats.habDark, x, y + 0.9, z + 2.2));
  g.add(labelPlane("HAB", "#1a2830", "#d6e6ef", 1.8, 0.5, x, y + 4.35, z + 3.8));
  g.add(labelPlane("H2O", "#1a2830", "#d6b48a", 2.0, 0.42, x, y + 3.8, z + 3.8));
  addPipeRun(g, [[-46, -88], [-32, -88], [-18, -88]], mats.pipe, 0.1);
  return g;
}

function createSabatierCatalyst() {
  const g = new THREE.Group();
  g.name = "sabatier-catalyst";
  const x = -50;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.4, 12), mats.steelDark, x + 1.0 + i * 1.35, y + 1.4, z));
  }
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.05, z + 3.7));
  g.add(labelPlane("CATALYST", "#1a100c", "#d6b48a", 3.2, 0.36, x, y + 2.6, z + 3.7));
  return g;
}

function createCo2Spare() {
  const g = new THREE.Group();
  g.name = "co2-spare";
  const x = -80;
  const z = 20;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 3.2, 12), mats.steelDark, x + 2.2, y + 1.8, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 0.45, 1.4, 12), mats.steel, x + 2.2, y + 4.0, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.05, z + 3.7));
  g.add(labelPlane("CO2 COMP", "#1a100c", "#d6b48a", 3.2, 0.36, x, y + 2.6, z + 3.7));
  return g;
}

function createH2Dryer() {
  const g = new THREE.Group();
  g.name = "h2-dryer";
  const x = -38;
  const z = 28;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.habDark, x - 2.2, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 3.4, 14), mats.steelDark, x + 2.0, y + 1.9, z));
  g.add(mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.2, 8), mats.pipe, x + 2.0, y + 4.0, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("H2 DRYER", "#1a100c", "#d6b48a", 3.0, 0.36, x, y + 2.7, z + 3.7));
  return g;
}

function createIceMelt3() {
  const g = new THREE.Group();
  g.name = "ice-melt-3";
  const x = -46;
  const z = -132;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.8, 3.2), mats.habDark, x - 1.8, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.45, 1.45, 4.2, 14), mats.pipe, x + 2.2, y + 2.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.85, 1.6, 10), mats.steelDark, x + 2.2, y + 4.9, z));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.5, x, y + 4.4, z + 3.7));
  g.add(labelPlane("MELT", "#1a2830", "#d6b48a", 2.0, 0.42, x, y + 3.85, z + 3.7));
  addPipeRun(g, [[-46, -132], [-58, -142], [-58, -150]], mats.pipe, 0.1);
  return g;
}

function createGhDustFilter2() {
  const g = new THREE.Group();
  g.name = "gh-dust-filter-2";
  const x = 24;
  const z = -118;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.2, 0.18, 5.6), mats.concrete, x, y + 0.09, z));
  g.add(mesh(new THREE.BoxGeometry(3.8, 2.6, 2.4), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 3.2, 12), mats.steelDark, x + 2.4, y + 1.8, z));
  g.add(mesh(new THREE.BoxGeometry(0.12, 2.2, 2.0), mats.lattice, x + 3.5, y + 1.4, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.45, x, y + 3.55, z + 2.9));
  g.add(labelPlane("FILTER", "#1a100c", "#d6b48a", 2.6, 0.4, x, y + 3.05, z + 2.9));
  addPipeRun(g, [[24, -118], [30, -112], [38, -104]], mats.pipe, 0.1);
  return g;
}

function createSpareIceHaul() {
  const g = new THREE.Group();
  g.name = "spare-ice-haul";
  const x = -110;
  const z = -136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12.4, 0.16, 6.4), mats.concrete, x, y + 0.08, z));
  g.add(createHaulRover(x, z, -0.25, { kind: "ice" }));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.4, z + 3.4));
  g.add(labelPlane("HAUL", "#1a2830", "#d6b48a", 2.0, 0.36, x, y + 2.95, z + 3.4));
  return g;
}

function createHabCoupler() {
  const g = new THREE.Group();
  g.name = "hab-coupler";
  const x = -22;
  const z = -110;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 6.4, 16), mats.habDark, x, y + 1.7, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.TorusGeometry(1.4, 0.16, 8, 16), mats.steel, x - 3.2, y + 1.7, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.TorusGeometry(1.4, 0.16, 8, 16), mats.steel, x + 3.2, y + 1.7, z, 0, 0, Math.PI / 2));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.55, z + 3.7));
  g.add(labelPlane("TUBE", "#1a100c", "#d6b48a", 2.0, 0.36, x, y + 3.1, z + 3.7));
  return g;
}

function createField4Night() {
  const g = new THREE.Group();
  g.name = "field4-night";
  const x = 158;
  const z = -48;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(12, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 2.0, 4.2), mats.battery, x - 4 + i * 2.0, y + 1.2, z));
  }
  g.add(labelPlane("NIGHT", "#111111", "#f4e6c8", 2.2, 0.5, x, y + 2.7, z + 3.6));
  g.add(labelPlane("FIELD 4", "#111111", "#d6b48a", 2.4, 0.42, x, y + 2.15, z + 3.6));
  addPipeRun(g, [[172, -62], [166, -54], [158, -48]], mats.cable, 0.1);
  return g;
}

function createWorkshopAir() {
  const g = new THREE.Group();
  g.name = "workshop-air";
  const x = 110;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.2, 2.6), mats.habDark, x - 2.2, y + 1.3, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.4, 16), mats.steelDark, x + 2.0, y + 1.9, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), mats.steel, x + 2.0, y + 0.75, z + 2.0));
  g.add(mesh(new THREE.BoxGeometry(0.22, 1.6, 0.22), mats.steel, x + 3.4, y + 1.0, z - 1.6));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.05, z + 3.7));
  g.add(labelPlane("AIR", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 3.6, z + 3.7));
  return g;
}

function createHabAmine() {
  const g = new THREE.Group();
  g.name = "hab-amine";
  const x = 8;
  const z = -110;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.2, 2.6), mats.habDark, x - 2.4, y + 1.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.9, 0.9, 3.6, 14), mats.steelDark, x + 1.4, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.9, 0.9, 3.6, 14), mats.steelDark, x + 3.4, y + 2.0, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.15, z + 3.7));
  g.add(labelPlane("AMINE", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[8, -98], [8, -104], [8, -110]], mats.pipe, 0.1);
  return g;
}

function createIceDrill1() {
  const g = new THREE.Group();
  g.name = "ice-drill-1";
  const x = -70;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 1.8, 2.4), mats.habDark, x - 2.2, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.28, 0.42, 6.4, 10), mats.steel, x + 2.2, y + 3.4, z));
  g.add(mesh(new THREE.ConeGeometry(0.55, 1.4, 8), mats.soot, x + 2.2, y + 0.85, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), mats.steelDark, x + 2.2, y + 6.5, z));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 2.55, z + 3.7));
  g.add(labelPlane("DRILL", "#1a2830", "#d6b48a", 2.2, 0.36, x, y + 2.1, z + 3.7));
  return g;
}

function createFarm1Lights() {
  const g = new THREE.Group();
  g.name = "farm1-lights";
  for (const [x, z] of [[82, -28], [82, -44], [96, -44]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 96;
  const z = -28;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("FARM 1", "#1a100c", "#f0c089", 2.4, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createField2Lights() {
  const g = new THREE.Group();
  g.name = "field2-lights";
  for (const [x, z] of [[100, -70], [112, -83], [124, -70]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 124;
  const z = -83;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("FIELD 2", "#1a100c", "#f0c089", 2.6, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createField3Lights() {
  const g = new THREE.Group();
  g.name = "field3-lights";
  for (const [x, z] of [[135, -22], [135, -40], [148, -40]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = 148;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("FIELD 3", "#1a100c", "#f0c089", 2.6, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createSparePotableUV() {
  const g = new THREE.Group();
  g.name = "spare-potable-uv";
  const x = 46;
  const z = -152;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 2.6, 3.4), mats.habDark, x - 1.6, y + 1.5, z));
  g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 3.4, 14), mats.pipe, x + 2.6, y + 1.9, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.4, 1.2), mats.steel, x + 2.6, y + 3.9, z));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 4.15, z + 3.7));
  g.add(labelPlane("UV", "#1a2830", "#d6b48a", 1.6, 0.36, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[32, -152], [38, -152], [46, -152]], mats.pipe, 0.1);
  return g;
}

function createPad2Bricks() {
  const g = new THREE.Group();
  g.name = "pad2-bricks";
  const x = 32;
  const z = 136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.16, 5.4), mats.concrete, x, y + 0.08, z));
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const bx = x - 2.4 + col * 1.55;
      const bz = z - 1.2 + row * 1.2;
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.rust, bx, y + 0.38, bz));
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.habDark, bx, y + 0.82, bz));
    }
  }
  g.add(labelPlane("PAD 2", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 1.85, z + 2.8));
  g.add(labelPlane("BRICK", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.4, z + 2.8));
  return g;
}

function createHabRegulator() {
  const g = new THREE.Group();
  g.name = "hab-regulator";
  const x = -8;
  const z = -110;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.2, 2.6), mats.habDark, x - 2.2, y + 1.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 2.8, 14), mats.steelDark, x + 2.0, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.6, 12), mats.steel, x + 3.4, y + 1.0, z + 1.4));
  g.add(mesh(new THREE.BoxGeometry(1.4, 1.1, 1.2), mats.steel, x + 2.0, y + 0.75, z + 2.0));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.35, z + 3.7));
  g.add(labelPlane("REG", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 2.9, z + 3.7));
  addPipeRun(g, [[-8, -98], [-8, -104], [-8, -110]], mats.pipe, 0.1);
  return g;
}

function createWorkshopHoist() {
  const g = new THREE.Group();
  g.name = "workshop-hoist";
  const x = 110;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 2.0, 2.4), mats.habDark, x - 2.4, y + 1.2, z));
  g.add(mesh(new THREE.BoxGeometry(0.28, 5.2, 0.28), mats.steelDark, x + 1.6, y + 2.8, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 0.22, 0.22), mats.steel, x + 3.4, y + 5.3, z));
  g.add(mesh(new THREE.BoxGeometry(0.16, 1.6, 0.16), mats.steel, x + 5.2, y + 4.4, z));
  g.add(mesh(new THREE.BoxGeometry(0.7, 0.5, 0.5), mats.steelDark, x + 5.2, y + 3.5, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.85, z + 3.7));
  g.add(labelPlane("HOIST", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 2.4, z + 3.7));
  return g;
}

function createFarm1Inverter() {
  const g = new THREE.Group();
  g.name = "farm1-inverter";
  const x = 70;
  const z = -28;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("FARM 1", "#111111", "#f4e6c8", 2.6, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[82, -28], [76, -28], [70, -28]], mats.cable, 0.1);
  return g;
}

function createField2Inverter() {
  const g = new THREE.Group();
  g.name = "field2-inverter";
  const x = 136;
  const z = -70;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("FIELD 2", "#111111", "#f4e6c8", 2.8, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[124, -70], [130, -70], [136, -70]], mats.cable, 0.1);
  return g;
}

function createField3Inverter() {
  const g = new THREE.Group();
  g.name = "field3-inverter";
  const x = 122;
  const z = -22;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("FIELD 3", "#111111", "#f4e6c8", 2.8, 0.5, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.42, x, y + 3.0, z + 3.7));
  addPipeRun(g, [[135, -22], [128, -22], [122, -22]], mats.cable, 0.1);
  return g;
}

function createCrushHopper() {
  const g = new THREE.Group();
  g.name = "crush-hopper";
  const x = -114;
  const z = -158;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.6), mats.habDark, x - 2.4, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.35, 1.55, 3.2, 12), mats.steelDark, x + 2.0, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.7, 1.4), mats.steel, x + 2.0, y + 0.55, z + 2.0));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 4.05, z + 3.7));
  g.add(labelPlane("HOPPER", "#1a2830", "#d6b48a", 2.6, 0.36, x, y + 3.6, z + 3.7));
  return g;
}

function createSpareCh4Pump() {
  const g = new THREE.Group();
  g.name = "spare-ch4-pump";
  const x = -32;
  const z = -36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.2, 2.8), mats.habDark, x - 2.0, y + 1.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 12), mats.tankCh4, x + 2.0, y + 1.3, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.4, 1.6), mats.steelDark, x + 2.0, y + 0.9, z + 1.8));
  g.add(labelPlane("SPARE", "#6a2208", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("CH4 PUMP", "#6a2208", "#d6b48a", 3.0, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[-32, -22], [-32, -28], [-32, -36]], mats.tankCh4, 0.11);
  return g;
}

function createSpareO2Pump() {
  const g = new THREE.Group();
  g.name = "spare-o2-pump";
  const x = -42;
  const z = 6;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.2, 2.8), mats.habDark, x - 2.0, y + 1.3, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 12), mats.tankO2, x + 2.0, y + 1.3, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.4, 1.6), mats.steelDark, x + 2.0, y + 0.9, z + 1.8));
  g.add(labelPlane("SPARE", "#2a3340", "#e8eef4", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("O2 PUMP", "#2a3340", "#d6b48a", 2.8, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[-28, 6], [-34, 6], [-42, 6]], mats.tankO2, 0.11);
  return g;
}

function createEvaBattery() {
  const g = new THREE.Group();
  g.name = "eva-battery";
  const x = 28;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.6, 2.2), mats.habDark, x - 2.2, y + 1.0, z));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.1, 1.4, 1.8), mats.battery, x + 0.6 + i * 1.25, y + 0.9, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 2.55, z + 3.7));
  g.add(labelPlane("EVA BATT", "#111111", "#d6b48a", 3.0, 0.36, x, y + 2.1, z + 3.7));
  return g;
}

function createKilnFeed() {
  const g = new THREE.Group();
  g.name = "kiln-feed";
  const x = 80;
  const z = -118;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.6), mats.habDark, x - 2.4, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(0.35, 1.55, 3.2, 12), mats.rust, x + 2.0, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 0.7, 1.4), mats.steelDark, x + 2.0, y + 0.55, z + 2.0));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.05, z + 3.7));
  g.add(labelPlane("FEED", "#1a100c", "#d6b48a", 2.0, 0.36, x, y + 3.6, z + 3.7));
  return g;
}

function createGrowCO2() {
  const g = new THREE.Group();
  g.name = "grow-co2";
  const x = 38;
  const z = -132;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.0, 1.8, 2.4), mats.habDark, x - 2.6, y + 1.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.steelDark, x + 1.4, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.steelDark, x + 3.6, y + 2.0, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.15, z + 3.7));
  g.add(labelPlane("CO2", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[52, -126], [44, -128], [38, -132]], mats.pipe, 0.1);
  return g;
}

function createPad2Cargo() {
  const g = new THREE.Group();
  g.name = "pad2-cargo";
  const x = 46;
  const z = 136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  addCrate(g, 42.4, 134.2, 0.1, 1.0);
  addCrate(g, 45.2, 133.8, -0.15, 0.9);
  addCrate(g, 48.6, 134.6, 0.2, 1.05);
  addCrate(g, 43.0, 137.6, -0.1, 0.85);
  addCrate(g, 47.4, 137.8, 0.05, 0.95);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.35, z + 3.7));
  g.add(labelPlane("CARGO", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 1.9, z + 3.7));
  return g;
}

function createSpareCondensate() {
  const g = new THREE.Group();
  g.name = "spare-condensate";
  const x = 40;
  const z = -140;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.6, 14), mats.pipe, x - 1.8, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.6, 14), mats.pipe, x + 1.6, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.5, 1.7), mats.habDark, x, y + 0.95, z + 2.1));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 4.15, z + 3.6));
  g.add(labelPlane("COND", "#1a2830", "#d6b48a", 2.0, 0.36, x, y + 3.7, z + 3.6));
  addPipeRun(g, [[28, -140], [34, -140], [40, -140]], mats.pipe, 0.1);
  return g;
}

function createPressDie() {
  const g = new THREE.Group();
  g.name = "press-die";
  const x = 52;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 0.55, 2.6), mats.steelDark, x, y + 0.48, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 0.45, 2.2), mats.habDark, x, y + 0.98, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 0.4, 1.8), mats.rust, x, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 1.6, 1.2), mats.steel, x + 2.8, y + 1.0, z + 1.6));
  g.add(mesh(new THREE.BoxGeometry(2.0, 1.2, 1.4), mats.habDark, x - 2.6, y + 0.8, z + 1.8));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.35, z + 3.7));
  g.add(labelPlane("DIE", "#1a100c", "#d6b48a", 1.6, 0.36, x, y + 1.9, z + 3.7));
  return g;
}

function createIceTrailer() {
  const g = new THREE.Group();
  g.name = "ice-trailer";
  const x = -124;
  const z = -136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.45, 3.2), mats.steelDark, x, y + 0.85, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 0.55, 0.7), mats.steel, x + 4.2, y + 0.85, z));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 12), mats.steelDark, x - 2.2, y + 0.55, z + 1.7, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 12), mats.steelDark, x - 2.2, y + 0.55, z - 1.7, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 12), mats.steelDark, x + 2.0, y + 0.55, z + 1.7, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 12), mats.steelDark, x + 2.0, y + 0.55, z - 1.7, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), mats.habDark, x - 2.0, y + 1.6, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), mats.habDark, x + 0.2, y + 1.6, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), mats.pipe, x + 2.2, y + 1.6, z));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.55, z + 3.7));
  g.add(labelPlane("TRAIL", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 2.1, z + 3.7));
  return g;
}

function createEarthBattery() {
  const g = new THREE.Group();
  g.name = "earth-battery";
  const x = 28;
  const z = -162;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.7, 1.9, 3.6), mats.battery, x - 3.2 + i * 2.1, y + 1.15, z));
    g.add(mesh(new THREE.BoxGeometry(1.55, 0.08, 3.4), mats.steel, x - 3.2 + i * 2.1, y + 2.15, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("LINK", "#111111", "#d6b48a", 1.8, 0.36, x, y + 2.6, z + 3.7));
  return g;
}

function createPad2Unloader() {
  const g = new THREE.Group();
  g.name = "pad2-unloader";
  const x = 46;
  const z = 148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 8.4, 1.2), mats.steelDark, x - 2.4, y + 4.3, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 8.4, 1.2), mats.steelDark, x + 2.4, y + 4.3, z));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.35, 1.2), mats.steel, x, y + 8.6, z));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steelDark, x, y + 7.0, z + 1.6));
  g.add(mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4), mats.crate, x, y + 5.4, z + 1.6));
  addCrate(g, 42.6, 146.2, 0.15, 0.9);
  addCrate(g, 49.2, 149.4, -0.1, 0.85);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.55, z + 3.7));
  g.add(labelPlane("UNLOAD", "#1a100c", "#d6b48a", 2.6, 0.36, x, y + 4.1, z + 3.7));
  return g;
}

function createWorkshopMill() {
  const g = new THREE.Group();
  g.name = "workshop-mill";
  const x = 96;
  const z = -118;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.6, 1.6, 3.2), mats.habDark, x, y + 1.0, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 2.4, 1.4), mats.steelDark, x + 1.2, y + 2.4, z));
  g.add(mesh(new THREE.BoxGeometry(2.6, 0.35, 1.8), mats.steel, x + 1.2, y + 3.7, z));
  g.add(mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 10), mats.steel, x + 1.2, y + 2.9, z + 0.9));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.1, 1.6), mats.steelDark, x - 2.4, y + 0.75, z + 1.8));
  addCrate(g, 91.8, -115.6, 0.12, 0.85);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.25, z + 3.7));
  g.add(labelPlane("MILL", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 3.8, z + 3.7));
  return g;
}

function createIceConveyor() {
  const g = new THREE.Group();
  g.name = "ice-conveyor";
  const x = -102;
  const z = -148;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.35, 1.6), mats.steelDark, x, y + 1.15, z));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.12, 1.2), mats.steel, x, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(0.35, 1.4, 0.35), mats.steelDark, x - 3.4, y + 0.8, z + 1.1));
  g.add(mesh(new THREE.BoxGeometry(0.35, 1.4, 0.35), mats.steelDark, x + 3.4, y + 0.8, z + 1.1));
  g.add(mesh(new THREE.BoxGeometry(0.35, 1.4, 0.35), mats.steelDark, x - 3.4, y + 0.8, z - 1.1));
  g.add(mesh(new THREE.BoxGeometry(0.35, 1.4, 0.35), mats.steelDark, x + 3.4, y + 0.8, z - 1.1));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.2, 1.5), mats.habDark, x - 2.6, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.4, 10), mats.steel, x + 3.2, y + 1.5, z, 0, 0, Math.PI / 2));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.85, z + 3.7));
  g.add(labelPlane("BELT", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 2.4, z + 3.7));
  return g;
}

function createWorkshopVise() {
  const g = new THREE.Group();
  g.name = "workshop-vise";
  const x = 110;
  const z = -118;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(5.2, 1.15, 2.6), mats.habDark, x, y + 0.75, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 0.85, 1.1), mats.steelDark, x + 1.4, y + 1.75, z));
  g.add(mesh(new THREE.BoxGeometry(0.35, 0.7, 0.9), mats.steel, x + 2.15, y + 1.7, z));
  g.add(mesh(new THREE.BoxGeometry(0.35, 0.7, 0.9), mats.steel, x + 0.65, y + 1.7, z));
  g.add(mesh(new THREE.BoxGeometry(2.0, 1.3, 1.5), mats.steelDark, x - 2.4, y + 0.85, z + 1.8));
  addCrate(g, 105.8, -115.4, 0.1, 0.8);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.55, z + 3.7));
  g.add(labelPlane("VISE", "#1a100c", "#d6b48a", 1.8, 0.36, x, y + 2.1, z + 3.7));
  return g;
}

function createSpareCh4Tank() {
  const g = new THREE.Group();
  g.name = "spare-ch4-tank";
  const x = -18;
  const z = -36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.8, 14), mats.tankCh4, x - 1.8, y + 2.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.8, 14), mats.tankCh4, x + 1.6, y + 2.1, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.6), mats.habDark, x, y + 0.9, z + 2.1));
  g.add(labelPlane("SPARE", "#6a2208", "#f4e6c8", 2.2, 0.42, x, y + 4.35, z + 3.7));
  g.add(labelPlane("CH4", "#6a2208", "#d6b48a", 1.8, 0.36, x, y + 3.9, z + 3.7));
  addPipeRun(g, [[-32, -36], [-26, -36], [-18, -36]], mats.tankCh4, 0.11);
  return g;
}

function createSpareO2Tank() {
  const g = new THREE.Group();
  g.name = "spare-o2-tank";
  const x = -42;
  const z = -8;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.8, 14), mats.tankO2, x - 1.8, y + 2.1, z));
  g.add(mesh(new THREE.CylinderGeometry(1.25, 1.25, 3.8, 14), mats.tankO2, x + 1.6, y + 2.1, z));
  g.add(mesh(new THREE.BoxGeometry(2.2, 1.4, 1.6), mats.habDark, x, y + 0.9, z + 2.1));
  g.add(labelPlane("SPARE", "#2a3340", "#e8eef4", 2.2, 0.42, x, y + 4.35, z + 3.7));
  g.add(labelPlane("O2", "#2a3340", "#d6b48a", 1.6, 0.36, x, y + 3.9, z + 3.7));
  addPipeRun(g, [[-42, 6], [-42, -2], [-42, -8]], mats.tankO2, 0.11);
  return g;
}

function createHabInverter() {
  const g = new THREE.Group();
  g.name = "hab-inverter";
  const x = 8;
  const z = -68;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), mats.habDark, x - 2.0, y + 1.4, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.steelDark, x + 2.2, y + 1.2, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.7, 1.5, 1.8), mats.battery, x + 1.2 + i * 0.85, y + 1.0, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.55, z + 3.7));
  g.add(labelPlane("INVERTER", "#111111", "#d6b48a", 3.2, 0.36, x, y + 3.1, z + 3.7));
  addPipeRun(g, [[8, -78], [8, -74], [8, -68]], mats.cable, 0.1);
  return g;
}

function createPotablePump() {
  const g = new THREE.Group();
  g.name = "potable-pump";
  const x = 8;
  const z = -162;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 12), mats.pipe, x + 2.0, y + 1.3, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.3, 1.5), mats.steelDark, x + 2.0, y + 0.85, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("H2O PUMP", "#1a2830", "#d6b48a", 3.0, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[18, -152], [12, -156], [8, -162]], mats.pipe, 0.1);
  return g;
}

function createRoverCharge() {
  const g = new THREE.Group();
  g.name = "rover-charge";
  const x = 40;
  const z = -74;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.4, 3.2, 1.4), mats.steelDark, x - 2.2, y + 1.8, z));
  g.add(mesh(new THREE.BoxGeometry(2.6, 1.6, 2.0), mats.habDark, x + 1.8, y + 1.0, z));
  g.add(mesh(new THREE.BoxGeometry(1.7, 1.4, 1.4), mats.battery, x + 1.8, y + 1.0, z + 0.1));
  g.add(mesh(new THREE.BoxGeometry(0.18, 0.18, 2.8), mats.cable, x - 0.2, y + 2.6, z));
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.75, z + 3.7));
  g.add(labelPlane("CHARGE", "#111111", "#d6b48a", 2.6, 0.36, x, y + 3.3, z + 3.7));
  addPipeRun(g, [[28, -74], [34, -74], [40, -74]], mats.cable, 0.1);
  return g;
}

function createMeltPump() {
  const g = new THREE.Group();
  g.name = "melt-pump";
  const x = -70;
  const z = -136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.4, 12), mats.pipe, x + 2.0, y + 1.4, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.3, 1.5), mats.steelDark, x + 2.0, y + 0.85, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("MELT", "#1a2830", "#d6b48a", 2.0, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[-58, -142], [-64, -140], [-70, -136]], mats.pipe, 0.1);
  return g;
}

function createWorkshopGrinder() {
  const g = new THREE.Group();
  g.name = "workshop-grinder";
  const x = 124;
  const z = -90;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.2, 1.5, 2.8), mats.habDark, x, y + 0.95, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.35, 14), mats.steelDark, x + 1.6, y + 1.9, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.4, 1.4), mats.steelDark, x - 2.2, y + 1.8, z));
  addCrate(g, 119.6, -87.4, 0.1, 0.8);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("GRIND", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 2.7, z + 3.7));
  return g;
}

function createGrowPump() {
  const g = new THREE.Group();
  g.name = "grow-pump";
  const x = 52;
  const z = -140;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 12), mats.pipe, x + 2.0, y + 1.3, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.3, 1.5), mats.steelDark, x + 2.0, y + 0.85, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("GROW", "#1a2830", "#d6b48a", 2.0, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[52, -126], [52, -132], [52, -140]], mats.pipe, 0.1);
  return g;
}

function createCommsLna() {
  const g = new THREE.Group();
  g.name = "comms-lna";
  const x = 16;
  const z = -136;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 1.8, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 1.15, 1.6, 12), mats.steel, x + 2.2, y + 2.0, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), mats.steelDark, x + 2.2, y + 0.8, z + 1.8));
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.35, z + 3.7));
  g.add(labelPlane("LNA", "#111111", "#d6b48a", 1.8, 0.36, x, y + 2.9, z + 3.7));
  addPipeRun(g, [[16, -148], [16, -142], [16, -136]], mats.cable, 0.1);
  return g;
}

function createWorkshopLathe() {
  const g = new THREE.Group();
  g.name = "workshop-lathe";
  const x = 124;
  const z = -104;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(5.4, 1.4, 2.4), mats.habDark, x, y + 0.9, z));
  g.add(mesh(new THREE.CylinderGeometry(0.45, 0.45, 3.2, 12), mats.steel, x, y + 1.85, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.5, 1.6, 1.6), mats.steelDark, x - 2.4, y + 1.9, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 1.1, 1.4), mats.steelDark, x + 2.6, y + 1.65, z));
  addCrate(g, 119.8, -101.6, 0.12, 0.8);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("LATHE", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 2.7, z + 3.7));
  return g;
}

function createMelt2Pump() {
  const g = new THREE.Group();
  g.name = "melt2-pump";
  const x = -92;
  const z = -172;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.4, 12), mats.pipe, x + 2.0, y + 1.4, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.3, 1.5), mats.steelDark, x + 2.0, y + 0.85, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("MELT 2", "#1a2830", "#d6b48a", 2.4, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[-78, -156], [-86, -164], [-92, -172]], mats.pipe, 0.1);
  return g;
}

function createWeatherPack() {
  const g = new THREE.Group();
  g.name = "weather-pack";
  const x = 36;
  const z = -128;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 1.8, 2.4), mats.habDark, x - 1.6, y + 1.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 2.6, 1.2), mats.steelDark, x + 2.2, y + 1.5, z));
  g.add(mesh(new THREE.BoxGeometry(0.35, 0.9, 0.35), mats.steel, x + 2.2, y + 3.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), mats.steel, x + 2.2, y + 0.75, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.55, z + 3.7));
  g.add(labelPlane("WX", "#1a2830", "#d6b48a", 1.6, 0.36, x, y + 3.1, z + 3.7));
  return g;
}

function createWaterPump() {
  const g = new THREE.Group();
  g.name = "water-pump";
  const x = -58;
  const z = -88;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.2, 12), mats.pipe, x + 2.0, y + 1.3, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.8, 1.3, 1.5), mats.steelDark, x + 2.0, y + 0.85, z + 1.8));
  g.add(labelPlane("SPARE", "#1a2830", "#d6e6ef", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("H2O", "#1a2830", "#d6b48a", 1.8, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[-46, -88], [-52, -88], [-58, -88]], mats.pipe, 0.1);
  return g;
}

function createPad1Cargo() {
  const g = new THREE.Group();
  g.name = "pad1-cargo";
  const x = 36;
  const z = 36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  addCrate(g, 32.4, 34.2, 0.1, 1.0);
  addCrate(g, 35.2, 33.8, -0.15, 0.9);
  addCrate(g, 38.6, 34.6, 0.2, 1.05);
  addCrate(g, 33.0, 37.6, -0.1, 0.85);
  addCrate(g, 37.4, 37.8, 0.05, 0.95);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.35, z + 3.7));
  g.add(labelPlane("CARGO", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 1.9, z + 3.7));
  return g;
}

function createDustScrub() {
  const g = new THREE.Group();
  g.name = "dust-scrub";
  const x = 22;
  const z = -110;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.2, 2.0, 2.4), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.CylinderGeometry(1.05, 1.05, 2.6, 14), mats.steelDark, x + 2.0, y + 1.5, z, 0, 0, Math.PI / 2));
  g.add(mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), mats.steelDark, x + 2.0, y + 0.8, z + 1.8));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("SCRUB", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[22, -98], [22, -104], [22, -110]], mats.pipe, 0.1);
  return g;
}

function createFarm1String() {
  const g = new THREE.Group();
  g.name = "farm1-string";
  const x = 108;
  const z = -44;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 1.6, 2.2), mats.steelDark, x + 2.2, y + 1.0, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.6, 1.3, 1.6), mats.battery, x + 1.3 + i * 0.75, y + 0.85, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("STRING", "#111111", "#d6b48a", 2.6, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[96, -44], [102, -44], [108, -44]], mats.cable, 0.1);
  return g;
}

function createMine2Lights() {
  const g = new THREE.Group();
  g.name = "mine2-lights";
  for (const [x, z] of [[-78, -172], [-78, -156], [-64, -184]]) {
    const y = getHeight(x, z);
    g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 8), mats.steelDark, x, y + 1.9, z));
    g.add(mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), mats.glowPad, x, y + 3.85, z));
  }
  const x = -64;
  const z = -172;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(5.2, 0.16, 4.0), mats.concrete, x, y + 0.08, z));
  g.add(mesh(new THREE.BoxGeometry(2.4, 1.5, 1.6), mats.habDark, x, y + 0.95, z));
  g.add(labelPlane("MINE 2", "#1a100c", "#f0c089", 2.4, 0.42, x, y + 2.25, z + 2.1));
  g.add(labelPlane("LIGHTS", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.78, z + 2.1));
  return g;
}

function createShopCrate() {
  const g = new THREE.Group();
  g.name = "shop-crate";
  const x = 124;
  const z = -118;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  addCrate(g, 120.4, -119.8, 0.1, 1.0);
  addCrate(g, 123.2, -120.2, -0.15, 0.9);
  addCrate(g, 126.6, -119.4, 0.2, 1.05);
  addCrate(g, 121.0, -116.4, -0.1, 0.85);
  addCrate(g, 125.4, -116.2, 0.05, 0.95);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 2.35, z + 3.7));
  g.add(labelPlane("PARTS", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 1.9, z + 3.7));
  return g;
}

function createField2String() {
  const g = new THREE.Group();
  g.name = "field2-string";
  const x = 136;
  const z = -83;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 1.6, 2.2), mats.steelDark, x + 2.2, y + 1.0, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.6, 1.3, 1.6), mats.battery, x + 1.3 + i * 0.75, y + 0.85, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("STRING", "#111111", "#d6b48a", 2.6, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[124, -83], [130, -83], [136, -83]], mats.cable, 0.1);
  return g;
}

function createField3String() {
  const g = new THREE.Group();
  g.name = "field3-string";
  const x = 160;
  const z = -40;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 1.6, 2.2), mats.steelDark, x + 2.2, y + 1.0, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.6, 1.3, 1.6), mats.battery, x + 1.3 + i * 0.75, y + 0.85, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("STRING", "#111111", "#d6b48a", 2.6, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[148, -40], [154, -40], [160, -40]], mats.cable, 0.1);
  return g;
}

function createField4String() {
  const g = new THREE.Group();
  g.name = "field4-string";
  const x = 184;
  const z = -62;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(3.4, 2.0, 2.6), mats.habDark, x - 2.0, y + 1.2, z));
  g.add(mesh(new THREE.BoxGeometry(2.8, 1.6, 2.2), mats.steelDark, x + 2.2, y + 1.0, z));
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.6, 1.3, 1.6), mats.battery, x + 1.3 + i * 0.75, y + 0.85, z));
  }
  g.add(labelPlane("SPARE", "#111111", "#f4e6c8", 2.2, 0.42, x, y + 3.15, z + 3.7));
  g.add(labelPlane("STRING", "#111111", "#d6b48a", 2.6, 0.36, x, y + 2.7, z + 3.7));
  addPipeRun(g, [[172, -62], [178, -62], [184, -62]], mats.cable, 0.1);
  return g;
}

function createPad1Unloader() {
  const g = new THREE.Group();
  g.name = "pad1-unloader";
  const x = 36;
  const z = 48;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 8.4, 1.2), mats.steelDark, x - 2.4, y + 4.3, z));
  g.add(mesh(new THREE.BoxGeometry(1.2, 8.4, 1.2), mats.steelDark, x + 2.4, y + 4.3, z));
  g.add(mesh(new THREE.BoxGeometry(7.2, 0.35, 1.2), mats.steel, x, y + 8.6, z));
  g.add(mesh(new THREE.BoxGeometry(0.16, 2.8, 0.16), mats.steelDark, x, y + 7.0, z + 1.6));
  g.add(mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4), mats.crate, x, y + 5.4, z + 1.6));
  addCrate(g, 32.6, 46.2, 0.15, 0.9);
  addCrate(g, 39.2, 49.4, -0.1, 0.85);
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.55, z + 3.7));
  g.add(labelPlane("UNLOAD", "#1a100c", "#d6b48a", 2.6, 0.36, x, y + 4.1, z + 3.7));
  return g;
}

function createWasteSpare() {
  const g = new THREE.Group();
  g.name = "waste-spare";
  const x = -36;
  const z = -110;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(9.6, 0.2, 7.2), mats.concrete, x, y + 0.1, z));
  g.add(mesh(new THREE.BoxGeometry(4.4, 2.8, 3.6), mats.habDark, x - 1.4, y + 1.6, z));
  g.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 3.6, 14), mats.pipe, x + 2.8, y + 2.0, z));
  g.add(mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.8, 12), mats.steelDark, x + 2.8, y + 1.6, z + 2.0));
  g.add(labelPlane("SPARE", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 4.25, z + 3.7));
  g.add(labelPlane("WASTE", "#1a100c", "#d6b48a", 2.4, 0.36, x, y + 3.7, z + 3.7));
  addPipeRun(g, [[-22, -110], [-29, -110], [-36, -110]], mats.pipe, 0.1);
  return g;
}

function createPad1Bricks() {
  const g = new THREE.Group();
  g.name = "pad1-bricks";
  const x = 22;
  const z = 36;
  const y = getHeight(x, z);
  g.add(mesh(new THREE.BoxGeometry(7.6, 0.16, 5.4), mats.concrete, x, y + 0.08, z));
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const bx = x - 2.4 + col * 1.55;
      const bz = z - 1.2 + row * 1.2;
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.rust, bx, y + 0.38, bz));
      g.add(mesh(new THREE.BoxGeometry(1.35, 0.42, 0.95), mats.habDark, bx, y + 0.82, bz));
    }
  }
  g.add(labelPlane("PAD 1", "#1a100c", "#f0c089", 2.2, 0.42, x, y + 1.85, z + 2.8));
  g.add(labelPlane("BRICK", "#1a100c", "#d6b48a", 2.2, 0.36, x, y + 1.4, z + 2.8));
  return g;
}
