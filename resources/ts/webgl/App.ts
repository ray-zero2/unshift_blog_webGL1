import * as THREE from 'three';
import { Octahedron } from './objects/Octahedron';
import { LightOctahedron } from './objects/LightOctahedron';
// import Ground from './Ground';
// import SkyOctahedronShell from './SkyOctahedronShell';
// import SkyOctahedron from './SkyOctahedron';

export class App {
  canvasElement: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  lightHemi: THREE.HemisphereLight;
  lightPoint: THREE.PointLight;
  clock: THREE.Clock;
  time: number;
  octahedron: Octahedron;
  lightOctahedron: LightOctahedron;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      canvas: this.canvasElement
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      document.body.clientWidth / window.innerHeight,
      1,
      10000
    );
    this.clock = new THREE.Clock();
    this.time = 0;
    this.lightHemi = new THREE.HemisphereLight(0xffffff, 0x666666, 5);
    this.lightPoint = new THREE.PointLight(0xff0000, 4, 1000);
    this.octahedron = new Octahedron(100, 3);
    this.lightOctahedron = new LightOctahedron(60, 3);
    this.init();
  }

  render() {
    const time = this.clock.getDelta();
    // this.time += 0.00007;
    // console.log(time);
    this.octahedron.render(time);
    // this.skyOctahedron.render(time);
    // this.skyOctahedronShell.render(time);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }

  // renderLoop() {
  //   this.render();
  // }

  init() {
    console.log('init');

    this.renderer.setSize(document.body.clientWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1.0);
    this.camera.position.z = 700;
    // this.camera.position.y = -50;

    // this.lightHemi.position.set(0, 10, 10);
    this.lightPoint.position.set(0, 0, 0);

    // this.scene.add(this.lightHemi);
    // const pointLightHelper = new THREE.PointLightHelper(this.lightPoint, 1);
    // this.scene.add(pointLightHelper);
    this.scene.add(this.octahedron.object);
    this.clock.start();
    this.render();
  }
}
