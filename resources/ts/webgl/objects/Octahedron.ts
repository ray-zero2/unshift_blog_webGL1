import * as THREE from 'three';

import fs from '../../../shaders/octahedron/fragment.frag';
import vs from '../../../shaders/octahedron/vertex.vert';

type Vector3d = [number, number, number];
interface Uniforms  {
  time: {
    type: 'f';
    value: number;
  }
}

export class Octahedron {
  size: number;
  detail: number;
  uniforms: Uniforms;
  object: THREE.Mesh;

  constructor(size:number = 100, detail: number = 1) {
    this.size = size;
    this.detail = detail;
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      }
    };

    this.object = this.createObject();
  }

  protected normalizeVector = (vector3d: Vector3d): Vector3d => {
    const x = 0, y = 1, z = 2;
    const length = Math.hypot(vector3d[x], vector3d[y], vector3d[z]);
    if(length !== 0) {
      const normalizedVector = vector3d.map(value => value/length) as Vector3d;
      return normalizedVector;
    } else {
      return [0, 0, 0];
    }
  }

  protected calcNormal = (baseVector: Vector3d, vector1: Vector3d, vector2: Vector3d): Vector3d => {
    const normals: Vector3d = [0 , 0 , 0];
    const x = 0, y = 1, z = 2;
    const vectorA = [vector1[x] - baseVector[x], vector1[y] - baseVector[y], vector1[z] - baseVector[z]];
    const vectorB = [vector2[x] - baseVector[x], vector2[y] - baseVector[y], vector2[z] - baseVector[z]];
    normals[x] = vectorA[y] * vectorB[z] - vectorA[z] * vectorB[y];
    normals[y] = vectorA[z] * vectorB[x] - vectorA[x] * vectorB[z];
    normals[z] = vectorA[x] * vectorB[y] - vectorA[y] * vectorB[x];
    const normalizedVector = this.normalizeVector(normals);
    return normalizedVector;
  }

  protected createFaceNormalAttribute(positions: number[], pointsPerPolygon: number): number[] {
    const dimension = 3;
    const positionsLength = positions.length;
    const positionsPerPolygon = pointsPerPolygon * dimension
    const faceNormalAttribute: number[] = [];

    const x=0, y=1, z=2;
    for (let i = 0; i < positionsLength; i += positionsPerPolygon) {
      const basePosition = [positions[i + 0], positions[i + 1], positions[i + 2]] as Vector3d;
      const position1 =  [positions[i + 3], positions[i + 4], positions[i + 5]] as Vector3d;
      const position2 =  [positions[i + 6], positions[i + 7], positions[i + 8]] as Vector3d;
      const faceNormal = this.calcNormal(basePosition, position1, position2);
      for(let j = 0; j < pointsPerPolygon; j++) {
        faceNormalAttribute.push(
          faceNormal[x],
          faceNormal[y],
          faceNormal[z]
        );
      };
    };

    return faceNormalAttribute;
  }

  protected createGeometry() {
    const geometry = new THREE.OctahedronBufferGeometry(this.size, this.detail);

    /* reinventing the wheel */
    const positions = geometry.attributes.position.array as number[];
    const pointsPerPolygon = 3;
    const faceNormalAttribute = this.createFaceNormalAttribute(positions, pointsPerPolygon);

    geometry.setAttribute(
      'faceNormal',
      new THREE.BufferAttribute(new Float32Array(faceNormalAttribute), pointsPerPolygon)
    );


    /* the wheel */
    // geometry.computeVertexNormals();

    return geometry;
  }

  protected createMaterial() {
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vs,
      fragmentShader: fs,
      flatShading: true,
      transparent: true,
      // side: THREE.FrontSide
      side: THREE.DoubleSide,
      wireframe: true
    });
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
