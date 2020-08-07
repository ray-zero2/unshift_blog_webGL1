import { App } from './webgl/App';

const index = () => {
  const canvasElement = document.querySelector<HTMLCanvasElement>('#canvas');
  if(canvasElement === null) return;
  new App(canvasElement);
}
index();
