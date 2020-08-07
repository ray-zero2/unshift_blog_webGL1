import * as THREE from 'three';

export class Words {
  time: number;
  mesh: THREE.Mesh;

  constructor(){
    this.time = 0;
    this.mesh = this.createMesh();
  }

  update(deltaTime) {
    this.time += deltaTime;
  }

  resize() {

  }

  private createGeometry() {
    const geometry = new THREE.PlaneGeometry(50, 50);
    return geometry;
  }

  private createMaterial() {
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000
    })
    return material;
  }

  private createMesh() {
    const geometry = this.createGeometry();
    const material = this.createMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
}
