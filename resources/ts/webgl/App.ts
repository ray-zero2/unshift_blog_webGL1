import * as THREE from 'three';
import WebFont from 'webfontloader';

import { ViewProps } from '../@types/types';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Words } from './objects/words/Words';


/*** 文字のフォント */
const FONT_FAMILY = 'Cabin Sketch';

export class App {
  viewProps: ViewProps;
  canvasElement: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  words: Words;
  clock: THREE.Clock;
  time: number;
  controls: OrbitControls;

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

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.words = new Words();
    this.init();
    this.bind();
  }

  render() {
    const deltaTime = this.clock.getDelta();
    this.words.update(deltaTime);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  loadFonts() {
    return new Promise(resolve => {
      console.log('web font');
      WebFont.load({
        google: {
          families: [FONT_FAMILY]
        },
        loading: () => {
          console.log('loading');
        },
        active: () => {
          console.log('fonts loaded');
          resolve();
        }
      })
    })
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

  handleResize() {
    //this.words.resize();
    this.initRenderer();
    this.initCamera();
  }

  bind() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  async init() {
    console.log('init');
    this.initRenderer();
    this.initCamera();
    this.renderer.setClearColor(0xffffff, 1.0);
    this.camera.position.z = 300;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    await this.loadFonts();
    console.log('word init');
    await this.words.init('0', FONT_FAMILY);
    this.scene.add(this.words.mesh);
    this.clock.start();
    this.animate();
  }
}
