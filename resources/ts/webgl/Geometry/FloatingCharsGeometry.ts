import * as THREE from 'three';

export class FloatingCharsGeometry extends THREE.BufferGeometry {
  numChars: number;
  charWidth: number;
  numTextureGridCols: number;

  constructor(numChars: number, charWidth: number, numTextureGridCols: number) {
    super();
    this.numChars = numChars;
    this.charWidth = charWidth;
    this.numTextureGridCols = numTextureGridCols;

    this.init();
  }

  private createParams() {
    const vertices = [];
    const charIndices = [];
    const randomValues = [];
    const uvs = [];
    const indices = [];

    const charWidth = this.charWidth;
    const charHeight = this.charWidth;

    for(let i = 0; i < this.numChars; i++) {
      // GLSLで使用するランダムな値 (vec3になるので3つ)
      const randomValue = [Math.random(), Math.random(), Math.random()];

      //頂点データの生成
      //左上
      vertices.push(-charWidth/2);  //x
      vertices.push(charHeight/2);  //y
      vertices.push(0);             //z
      uvs.push(0);  //uv.u
      uvs.push(0);  //uv.v
      charIndices.push(i);  //何文字目かを表すindex
      randomValue.forEach(num => {randomValues.push(num)});

      //右上
      vertices.push(charWidth/2);   //x
      vertices.push(charHeight/2);  //y
      vertices.push(0);             //z
      uvs.push(1);  //uv.u
      uvs.push(0);  //uv.v
      charIndices.push(i);  //何文字目かを表すindex
      randomValue.forEach(num => {randomValues.push(num)});

      //左下
      vertices.push(-charWidth/2);   //x
      vertices.push(-charHeight/2);  //y
      vertices.push(0);              //z
      uvs.push(0);  //uv.u
      uvs.push(1);  //uv.v
      charIndices.push(i);  //何文字目かを表すindex
      randomValue.forEach(num => {randomValues.push(num)});

      //右下
      vertices.push(charWidth/2);   //x
      vertices.push(-charHeight/2);  //y
      vertices.push(0);              //z
      uvs.push(1);  //uv.u
      uvs.push(1);  //uv.v
      charIndices.push(i);  //何文字目かを表すindex
      randomValue.forEach(num => {randomValues.push(num)});

      // １つで2枚の三角ポリゴンが必要なため頂点を指定。反時計回り・
      const indexOffset = i * 4;
      // 1枚目
      indices.push(indexOffset);
      indices.push(indexOffset + 2);
      indices.push(indexOffset + 1);
      // 2枚目
      indices.push(indexOffset + 2);
      indices.push(indexOffset + 3);
      indices.push(indexOffset + 1);
    }

    this.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    this.setAttribute('randomValue', new THREE.BufferAttribute(new Float32Array(randomValues), 3));
    this.setAttribute('charIndex', new THREE.BufferAttribute(new Uint16Array(charIndices), 1));
    this.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

    this.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  }

  private init() {
    this.createParams();
    this.computeVertexNormals();
  }
}
