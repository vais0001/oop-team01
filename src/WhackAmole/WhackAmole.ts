import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";

export default class WhackAmole extends Scene {

  public constructor (maxX: number, maxY: number) {
    super(maxX, maxY);

  }

  public processInput(keyListener: KeyListener): void {
    throw new Error("Method not implemented.");
  }
  public update(elapsed: number): Scene {
    throw new Error("Method not implemented.");
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
  }

}
