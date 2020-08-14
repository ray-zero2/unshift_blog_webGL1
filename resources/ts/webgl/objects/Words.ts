import * as THREE from 'three';
import { FloatingCharsGeometry } from '../Geometry/FloatingCharsGeometry';

interface Options {
  numChars: number;
  charWidth: number;
  numTextureGridCols: number;
  textureGridSize: number;
}

/*** テクスチャの文字数 */
const NUM_CHARS = 1;
/*** 文字の幅 [px] */
const CHAR_WIDTH = 50;
/*** テクスチャの1行文の文字列 [px] */
const NUM_TEXTURE_GRID_COLS = 1;
/*** テクスチャの1文字分の幅 [px] */
const TEXTURE_GRID_SIZE = 128;

export class Words implements Options {
  time: number;
  mesh: THREE.Mesh;
  numChars: number;
  charWidth: number;
  numTextureGridCols: number;
  textureGridSize: number;

  constructor(options: Partial<Options> = {}) {
    this.numChars = options.numChars ?? NUM_CHARS;
    this.charWidth = options.charWidth ?? CHAR_WIDTH;
    this.numTextureGridCols = options.numTextureGridCols ?? NUM_TEXTURE_GRID_COLS;
    this.textureGridSize = options.textureGridSize ?? TEXTURE_GRID_SIZE;

    this.time = 0;
    this.mesh = null;
  }

  update(deltaTime: number) {
    this.time += deltaTime;
  }

  resize() {

  }

  private async createGeometry() {
    const geometry = new FloatingCharsGeometry(this.numChars, this.charWidth, this.numTextureGridCols);
    return geometry;
  }

  private async createMaterial() {
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      side: THREE.DoubleSide
    })
    return material;
  }

  private async createMesh() {
    const geometry = await this.createGeometry();
    const material = await this.createMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  private async initFloatingChars() {
    return;
  }

  async init() {
    await this.initFloatingChars();
    this.mesh = await this.createMesh();
  }
}
