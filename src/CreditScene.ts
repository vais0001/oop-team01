/* eslint-disable @typescript-eslint/naming-convention */
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';

export default class CreditScene extends Scene {
  private continue: boolean;

  private page: number;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/credits.png');
    this.continue = false;
    this.page = 1;
  }

  /**
   *
   * @param keyListener is an input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Escape')) {
      this.continue = true;
    } if (keyListener.keyPressed('Space')) {
      this.page = 2;
    }
  }

  /**
   *
   * @returns true or false
   */
  public update(): Scene {
    if (this.continue) {
      return new StartScene(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (this.page === 1) {
      CanvasUtil.writeTextToCanvas(canvas, 'BRICK LAYERS', canvas.width / 2, canvas.height / 2 - 100, 'center', 'DotGothic16', 30, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Netas Neverauskas', canvas.width / 2, canvas.height / 2 - 50, 'center', 'DotGothic16', 30, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Ertugrul Aktas', canvas.width / 2, canvas.height / 2, 'center', 'DotGothic16', 30, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Dominykas Vaisnoras', canvas.width / 2, canvas.height / 2 + 50, 'center', 'DotGothic16', 30, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Tomas Tomkevicius', canvas.width / 2, canvas.height / 2 + 100, 'center', 'DotGothic16', 30, 'black');
      CanvasUtil.writeTextToCanvas(canvas, '1/2', this.dimensionsX + 290, this.dimensionsY + 300, 'center', 'DotGothic16', 30, 'white');
    }
    if (this.page === 2) {
      CanvasUtil.writeTextToCanvas(canvas, '2/2', this.dimensionsX + 290, this.dimensionsY + 300, 'center', 'DotGothic16', 30, 'white');
    }
    CanvasUtil.writeTextToCanvas(canvas, '[ESC] to go back', canvas.width / 2 - 300, canvas.height / 2 + 270, 'center', 'DotGothic16', 30, 'white');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] for next page', canvas.width / 2 + 300, canvas.height / 2 + 270, 'center', 'DotGothic16', 30, 'white');
  }
}
