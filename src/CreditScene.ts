import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';

export default class CreditScene extends Scene {
  private continue: boolean;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/credits.png');
    this.continue = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space')) {
      this.continue = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.continue) {
      return new StartScene(this.maxX, this.maxY);
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.writeTextToCanvas(canvas, 'BRICK LAYERS', canvas.width / 2, canvas.height / 2 - 100, 'center', 'DotGothic16', 30, 'black')
    CanvasUtil.writeTextToCanvas(canvas, 'Netas Neverauskas', canvas.width / 2, canvas.height / 2 - 50, 'center', 'DotGothic16', 30, 'black')
    CanvasUtil.writeTextToCanvas(canvas, 'Ertugrul Aktas', canvas.width / 2, canvas.height / 2, 'center', 'DotGothic16', 30, 'black')
    CanvasUtil.writeTextToCanvas(canvas, 'Dominykas Vaisnoras', canvas.width / 2, canvas.height / 2 + 50, 'center', 'DotGothic16', 30, 'black')
    CanvasUtil.writeTextToCanvas(canvas, 'Tomas Tomkevicius', canvas.width / 2, canvas.height / 2 + 100, 'center', 'DotGothic16', 30, 'black')
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to go back', canvas.width / 2, canvas.height / 2 + 270, 'center', 'DotGothic16', 30, 'black')
  }
}
