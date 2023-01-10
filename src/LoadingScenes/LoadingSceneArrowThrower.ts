import ArrowThrower from "../ArrowThrower/ArrowThrower.js";
import Bedroom from "../Bedroom.js";
import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";

export default class LoadingSceneAT extends Scene {
  private loadingBar: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.loadingBar = 0;
    this.image = CanvasUtil.loadNewImage('./placeholders/loading_screen_controls.png');
  }

  public processInput(keyListener: KeyListener): void {
    return null;
  }

  public update(elapsed: number): Scene {
    this.loadingBar += elapsed * 0.05;
    if (this.loadingBar > 300) return new ArrowThrower(window.innerWidth, window.innerHeight);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.drawRectangle(canvas, this.dimensionsX + (this.backgroundWidth / 2) - 150, this.dimensionsY + 100, 300, 30, 'white');
    CanvasUtil.fillRectangle(canvas, this.dimensionsX + (this.backgroundWidth / 2) - 150, this.dimensionsY + 100, this.loadingBar, 30, 'white');
  }
}
