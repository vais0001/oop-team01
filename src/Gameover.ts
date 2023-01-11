import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import Scene from "./Scene.js";
import StartScene from "./StartScene.js";

export default class Gameover extends Scene {
  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/gameover.png')
    this.continue = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space')) {
      this.continue = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.continue) {
      return new StartScene(window.innerWidth, window.innerHeight);
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#0078d7')
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY)
  }

}
