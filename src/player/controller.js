import * as THREE from "three";

export class PlayerController {
  constructor(camera, canvas, getHeight, colliders = []) {
    this.camera = camera;
    this.canvas = canvas;
    this.getHeight = getHeight;
    this.colliders = colliders;
    this.yaw = 0.15;
    this.pitch = -0.12;
    this.velocity = new THREE.Vector3();
    this.onGround = false;
    this.eye = 1.7;
    this.keys = new Set();
    this.locked = false;
    this._onKeyDown = (e) => { if (["Space","Tab"].includes(e.code)) e.preventDefault(); this.keys.add(e.code); };
    this._onKeyUp = (e) => this.keys.delete(e.code);
    this._onMouse = (e) => this.onMouse(e);
    this._onLock = () => { this.locked = document.pointerLockElement === canvas; };
    canvas.addEventListener("click", () => canvas.requestPointerLock());
    document.addEventListener("pointerlockchange", this._onLock);
    document.addEventListener("mousemove", this._onMouse);
    document.addEventListener("keydown", this._onKeyDown);
    document.addEventListener("keyup", this._onKeyUp);
  }

  spawn(x, z, lookX, lookZ) {
    const y = this.getHeight(x, z) + this.eye;
    this.camera.position.set(x, y, z);
    this.yaw = Math.atan2(x - lookX, z - lookZ);
    this.pitch = -0.08;
    this.applyLook();
  }

  onMouse(e) {
    if (!this.locked) return;
    this.yaw -= e.movementX * 0.0022;
    this.pitch -= e.movementY * 0.0022;
    this.pitch = Math.max(-1.4, Math.min(1.4, this.pitch));
  }

  applyLook() {
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }

  update(dt) {
    this.applyLook();
    if (!this.locked) {
      this.velocity.x = 0;
      this.velocity.z = 0;
      this.velocity.y -= 18 * dt;
      const p = this.camera.position;
      p.y += this.velocity.y * dt;
      const ground = this.getHeight(p.x, p.z) + this.eye;
      if (p.y <= ground) {
        p.y = ground;
        this.velocity.y = 0;
        this.onGround = true;
      } else {
        this.onGround = false;
      }
      return;
    }
    const speed = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight") ? 11.5 : 5.2;
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3();
    if (this.keys.has("KeyW")) wish.add(forward);
    if (this.keys.has("KeyS")) wish.sub(forward);
    if (this.keys.has("KeyD")) wish.add(right);
    if (this.keys.has("KeyA")) wish.sub(right);
    if (wish.lengthSq() > 0) wish.normalize().multiplyScalar(speed);
    this.velocity.x = wish.x;
    this.velocity.z = wish.z;
    this.velocity.y -= 18 * dt;
    if (this.onGround && this.keys.has("Space")) {
      this.velocity.y = 6.4;
      this.onGround = false;
    }
    const p = this.camera.position;
    p.x += this.velocity.x * dt;
    p.z += this.velocity.z * dt;
    p.y += this.velocity.y * dt;
    this.resolveColliders(p);
    const ground = this.getHeight(p.x, p.z) + this.eye;
    if (p.y <= ground) {
      p.y = ground;
      this.velocity.y = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }
    const limit = 310;
    p.x = Math.max(-limit, Math.min(limit, p.x));
    p.z = Math.max(-limit, Math.min(limit, p.z));
  }

  resolveColliders(p) {
    const boxes = [];
    const cyls = [];
    for (const c of this.colliders) {
      if (c.type === "cyl") cyls.push(c);
      else boxes.push(c);
    }
    for (const c of boxes) {
      const hx = c.w * 0.5;
      const hz = c.d * 0.5;
      if (Math.abs(p.x - c.x) < hx && Math.abs(p.z - c.z) < hz) {
        const ox = hx - Math.abs(p.x - c.x);
        const oz = hz - Math.abs(p.z - c.z);
        if (ox < oz) p.x += Math.sign(p.x - c.x) * ox;
        else p.z += Math.sign(p.z - c.z) * oz;
      }
    }
    for (const c of cyls) {
      const dx = p.x - c.x;
      const dz = p.z - c.z;
      const d = Math.hypot(dx, dz);
      if (d < c.r && d > 0.0001) {
        const k = c.r / d;
        p.x = c.x + dx * k;
        p.z = c.z + dz * k;
      }
    }
  }
}
