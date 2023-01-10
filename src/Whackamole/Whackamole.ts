import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";

export default class Whackamole extends Scene {

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/Whackamole_00000.png')
  }

  public processInput(keyListener: KeyListener): void {

  }
  public update(elapsed: number): Scene {
    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas)
    CanvasUtil.fillCanvas(canvas, 'darkgrey');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY)
  }

}
