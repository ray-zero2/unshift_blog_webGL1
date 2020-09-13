import * as THREE from 'three';
import { FloatingCharsGeometry } from '../../Geometry/FloatingCharsGeometry';

import fragmentShader from './shader/fragment.frag';
import vertexShader from './shader/vertex.vert';

interface Options {
  numChars: number;
  charWidth: number;
  numTextureGridCols: number;
  textureGridSize: number;
}

interface Uniforms {
  [key: string]: {type: string, value: any};
}

/*** テクスチャの文字数 */
const NUM_CHARS = 10;
/*** 文字の幅 [px] */
const CHAR_WIDTH = 32;
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
  uniforms: Uniforms;

  constructor(options: Partial<Options> = {}) {
    this.numChars = options.numChars ?? NUM_CHARS;
    this.charWidth = options.charWidth ?? CHAR_WIDTH;
    this.numTextureGridCols = options.numTextureGridCols ?? NUM_TEXTURE_GRID_COLS;
    this.textureGridSize = options.textureGridSize ?? TEXTURE_GRID_SIZE;

    this.uniforms = {
      texture: { type: 't', value: null },
      time: { type: '1f', value: 0 },
      numChars: { type: '1f', value: this.numChars }
    }

    this.time = 0;
    this.mesh = null;
  }

  update(deltaTime: number) {
    this.time += deltaTime;
    this.uniforms.time.value = this.time;
  }

  resize() {

  }

  private async createGeometry() {
    const geometry = new FloatingCharsGeometry(this.numChars, this.charWidth, this.numTextureGridCols);
    return geometry;
  }

  private async createMaterial() {
    console.log(this.uniforms);
    const material = new THREE.RawShaderMaterial({
      transparent: true,
      uniforms: this.uniforms,
      fragmentShader: fragmentShader,
      vertexShader: vertexShader,
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

  private createTextTexture(text: string, fontFamily: string) {
    const textLength = text.length;
    const textCanvas = document.createElement('canvas');
    const ctx = textCanvas.getContext('2d');
    textCanvas.width = this.textureGridSize * this.numTextureGridCols;
    textCanvas.height = this.textureGridSize * Math.ceil(textLength / this.numTextureGridCols);

    ctx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    ctx.font = `normal ${this.textureGridSize * 0.8}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';

    const wordArray = Array.from(text);

    wordArray.forEach((letter, index) => {
      const colIndex = index % this.numTextureGridCols;
      const rowIndex = Math.floor(index / this.numTextureGridCols);
      ctx.fillText(
        letter,
        colIndex*this.textureGridSize + this.textureGridSize /2,
        rowIndex * this.textureGridSize + this.textureGridSize * 0.8,
        this.textureGridSize
      );
    })

    const texture = new THREE.Texture(textCanvas);
    texture.flipY = false;
    texture.needsUpdate = true;

    this.uniforms.texture.value = texture;

    // test code
    textCanvas.style.backgroundColor = '#000';
    textCanvas.style.position = 'absolute';
    // textCanvas.style.height  = '100vh';
    textCanvas.style.top = '0';
    textCanvas.style.left = '0';
    textCanvas.style.zIndex = '999999';
    document.body.appendChild(textCanvas);
  }

  async init(text: string, fontFamily: string) {
    await this.initFloatingChars();
    this.createTextTexture(text, fontFamily);
    this.mesh = await this.createMesh();
  }
}
