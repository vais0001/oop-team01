import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import Scene from "./Scene.js";

export default class Gameover extends Scene {

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/gameover.png')

  }

  public processInput(keyListener: KeyListener): void {

  }
  public update(elapsed: number): Scene {
    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black')
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY)
  }

}
