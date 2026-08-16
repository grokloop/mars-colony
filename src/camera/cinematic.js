import * as THREE from "three";

export class CinematicCamera {
  constructor(camera) {
    this.camera = camera;
    this.t = 0;
    this.points = [
      new THREE.Vector3(42, 18, 48),
      new THREE.Vector3(28, 14, 30),
      new THREE.Vector3(8, 12, 22),
      new THREE.Vector3(36, 9, 22),
      new THREE.Vector3(68, 16, 40),
      new THREE.Vector3(20, 14, 82),
      new THREE.Vector3(-24, 16, 18),
      new THREE.Vector3(-40, 14, -8),
      new THREE.Vector3(-90, 18, -20),
      new THREE.Vector3(-40, 20, -50),
      new THREE.Vector3(90, 16, -30),
      new THREE.Vector3(70, 14, -70),
      new THREE.Vector3(20, 12, -90),
      new THREE.Vector3(-10, 10, -95),
      new THREE.Vector3(30, 9, -118),
      new THREE.Vector3(-20, 22, -145),
      new THREE.Vector3(-70, 16, -170),
      new THREE.Vector3(-20, 40, -40),
      new THREE.Vector3(50, 36, 60),
      new THREE.Vector3(42, 18, 48),
    ];
    this.looks = [
      new THREE.Vector3(0, 22, 0),
      new THREE.Vector3(0, 20, 0),
      new THREE.Vector3(0, 18, 0),
      new THREE.Vector3(52, 8, 24),
      new THREE.Vector3(52, 18, 24),
      new THREE.Vector3(22, 4, 82),
      new THREE.Vector3(0, 16, 0),
      new THREE.Vector3(-60, 8, -16),
      new THREE.Vector3(-68, 7, -16),
      new THREE.Vector3(0, 8, -40),
      new THREE.Vector3(78, 4, -38),
      new THREE.Vector3(48, 4, -86),
      new THREE.Vector3(-6, 4, -108),
      new THREE.Vector3(-6, 4, -108),
      new THREE.Vector3(22, 3, -112),
      new THREE.Vector3(-18, 12, -138),
      new THREE.Vector3(-58, 6, -158),
      new THREE.Vector3(0, 10, -40),
      new THREE.Vector3(20, 12, 20),
      new THREE.Vector3(0, 22, 0),
    ];
    this.path = new THREE.CatmullRomCurve3(this.points, true, "catmullrom", 0.25);
    this.look = new THREE.CatmullRomCurve3(this.looks, true, "catmullrom", 0.25);
  }

  update(dt) {
    this.t = (this.t + dt * 0.018) % 1;
    const pos = this.path.getPointAt(this.t);
    const target = this.look.getPointAt(this.t);
    this.camera.position.copy(pos);
    this.camera.lookAt(target);
  }
}
