import * as THREE from 'three';
import { Words } from './objects/Words';

export class App {
  viewProps: {width: number, height: number, dpr: number};
  canvasElement: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  // lightHemi: THREE.HemisphereLight;
  // lightPoint: THREE.PointLight;
  words: Words;
  clock: THREE.Clock;
  time: number;

  constructor(canvasElement: HTMLCanvasElement) {
    this.viewProps = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: Math.min(devicePixelRatio, 2 || 1),
    };
    this.canvasElement = canvasElement;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: this.canvasElement
    });
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.viewProps.width / this.viewProps.height,
      1,
      10000
    );

    this.clock = new THREE.Clock();
    this.time = 0;
    // this.lightHemi = new THREE.HemisphereLight(0xffffff, 0x666666, 5);
    // this.lightPoint = new THREE.PointLight(0xff0000, 4, 1000);
    this.words = new Words();
    this.init();
    this.bind();
  }

  render() {
    const deltaTime = this.clock.getDelta();
    this.words.update(deltaTime);
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  handleResize() {
    console.log('resize');

    //this.words.resize();
    this.initRenderer();
    this.initCamera();
  }

  bind() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  initCamera() {
    const vp = this.viewProps;
    vp.width = window.innerWidth;
    vp.height = window.innerHeight;
    this.camera.aspect = vp.width/vp.height;
    this.camera.updateProjectionMatrix();
  }

  initRenderer() {
    const vp = this.viewProps;
    vp.width = window.innerWidth;
    vp.height = window.innerHeight;
    this.renderer.setSize(vp.width, vp.height);
  }

  async init() {
    console.log('init');
    this.initRenderer();
    this.initCamera();
    this.renderer.setClearColor(0xffffff, 1.0);
    this.camera.position.z = 300;
    await this.words.init();
    this.scene.add(this.words.mesh);
    this.clock.start();
    this.animate();
  }
}
