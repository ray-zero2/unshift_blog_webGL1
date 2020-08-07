import * as THREE from 'three';

// import fs from '../../../shaders/octahedron/fragment.frag';
// import vs from '../../../shaders/octahedron/vertex.vert';

type Vector3d = [number, number, number];
interface Uniforms  {
  time: {
    type: 'f';
    value: number;
  }
}

export class LightOctahedron {
  size: number;
  detail: number;
  uniforms: Uniforms;
  object: THREE.Mesh;

  constructor(size:number = 100, detail: number = 1) {
    this.size = size;
    this.detail = detail;
    this.object = this.createObject();
  }

  protected createGeometry() {
    const geometry = new THREE.OctahedronBufferGeometry(this.size, this.detail);
    return geometry;
  }

  protected createMaterial() {
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    return material;
  }

  protected createObject() {
    const geometry = this.createGeometry();
    const material = this.createMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  render(time: number) {
    this.uniforms.time.value += time;
  }
}
