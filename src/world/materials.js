import * as THREE from "three";

export const mats = {
  steel: new THREE.MeshStandardMaterial({ color: 0xc9cdd1, metalness: 0.88, roughness: 0.28 }),
  steelDark: new THREE.MeshStandardMaterial({ color: 0x8b9096, metalness: 0.82, roughness: 0.38 }),
  tiles: new THREE.MeshStandardMaterial({ color: 0x1a1a1c, metalness: 0.15, roughness: 0.72 }),
  soot: new THREE.MeshStandardMaterial({ color: 0x2a2a2c, metalness: 0.4, roughness: 0.55 }),
  pad: new THREE.MeshStandardMaterial({ color: 0x6d6258, metalness: 0.08, roughness: 0.88 }),
  padRing: new THREE.MeshStandardMaterial({ color: 0x4a433c, metalness: 0.1, roughness: 0.8 }),
  solar: new THREE.MeshStandardMaterial({ color: 0x0b1a33, metalness: 0.55, roughness: 0.22 }),
  solarFrame: new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.7, roughness: 0.35 }),
  tankCh4: new THREE.MeshStandardMaterial({ color: 0xc45a24, metalness: 0.35, roughness: 0.45 }),
  tankO2: new THREE.MeshStandardMaterial({ color: 0xd8dde3, metalness: 0.4, roughness: 0.4 }),
  hab: new THREE.MeshStandardMaterial({ color: 0xcfc6b8, metalness: 0.15, roughness: 0.62 }),
  habDark: new THREE.MeshStandardMaterial({ color: 0x6a645c, metalness: 0.2, roughness: 0.55 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x88c4a0, metalness: 0.1, roughness: 0.18, transparent: true, opacity: 0.42, depthWrite: false }),
  plant: new THREE.MeshStandardMaterial({ color: 0x3f7a38, roughness: 0.85 }),
  rover: new THREE.MeshStandardMaterial({ color: 0xb8bcc0, metalness: 0.55, roughness: 0.4 }),
  roverDark: new THREE.MeshStandardMaterial({ color: 0x33363a, metalness: 0.4, roughness: 0.5 }),
  crate: new THREE.MeshStandardMaterial({ color: 0x8a8f94, metalness: 0.45, roughness: 0.5 }),
  ice: new THREE.MeshStandardMaterial({ color: 0xd6e6ef, metalness: 0.05, roughness: 0.35 }),
  rust: new THREE.MeshStandardMaterial({ color: 0x7a3f28, roughness: 0.9 }),
  glowWarm: new THREE.MeshStandardMaterial({ color: 0xffc48a, emissive: 0xff9a4a, emissiveIntensity: 0.85, roughness: 0.4 }),
  glowPad: new THREE.MeshStandardMaterial({ color: 0xffd080, emissive: 0xffb040, emissiveIntensity: 0.7 }),
  concrete: new THREE.MeshStandardMaterial({ color: 0x8a8074, roughness: 0.92 }),
  lattice: new THREE.MeshStandardMaterial({ color: 0x9aa0a4, metalness: 0.7, roughness: 0.4 }),
  graded: new THREE.MeshStandardMaterial({ color: 0x6a5346, roughness: 0.94, metalness: 0.04 }),
  pipe: new THREE.MeshStandardMaterial({ color: 0x7a8a94, metalness: 0.55, roughness: 0.4 }),
  cable: new THREE.MeshStandardMaterial({ color: 0x2a2622, metalness: 0.35, roughness: 0.55 }),
  robot: new THREE.MeshStandardMaterial({ color: 0xc8ccd0, metalness: 0.62, roughness: 0.38 }),
  flagIce: new THREE.MeshStandardMaterial({ color: 0xc5d8e4, roughness: 0.72, metalness: 0.04 }),
  flagDeposit: new THREE.MeshStandardMaterial({ color: 0xb85a28, roughness: 0.8, metalness: 0.06 }),
  track: new THREE.MeshStandardMaterial({ color: 0x3d2418, roughness: 0.97 }),
};

export function makeLabelTexture(text, bg = "#1c120c", fg = "#f3e2cc") {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, 492, 108);
  ctx.fillStyle = fg;
  const size = text.length > 12 ? 36 : text.length > 8 ? 44 : text.length > 5 ? 54 : 64;
  ctx.font = `bold ${size}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 256, 68);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function labeledMaterial(text, color, metalness = 0.3) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness: 0.42,
    map: makeLabelTexture(text, "#111111", "#f4e6c8"),
  });
}
