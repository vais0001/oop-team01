import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import LoadingSceneAT from './LoadingScenes/LoadingSceneArrowThrower.js';
import LoadingSceneBF from './LoadingScenes/LoadingSceneBF.js';
import LoadingSceneWM from './LoadingScenes/LoadingSceneWM.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';

export default class Gameover extends Scene {
  private continue: boolean;

  private timeToContinue: number;

  private timeToRemove: number;

  private restartLevel: boolean;

  private restartScene: string;

  public constructor(maxX: number, maxY: number, scene: string, lang: boolean) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/gameover.png');
    this.continue = false;
    this.timeToContinue = 1000;
    this.timeToRemove = 700;
    this.restartLevel = false;
    this.restartScene = scene;
    this.lang = lang;
  }

  /**
   *
   * @param keyListener is an input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space') && this.timeToContinue <= 0) {
      this.continue = true;
    }
    if (keyListener.keyPressed('KeyR') && this.timeToContinue <= 0) {
      this.restartLevel = true;
    }
  }

  /**
   *
   * @param elapsed is time
   * @returns true or false
   */
  public update(elapsed: number): Scene {
    this.timeToContinue -= elapsed;
    if (this.timeToContinue <= 0) {
      this.timeToRemove -= elapsed;
      if (this.timeToRemove < -300) {
        this.timeToRemove = 900;
      }
    }
    if (this.continue) {
      return new StartScene(window.innerWidth, window.innerHeight);
    }
    if (this.restartLevel) {
      if (this.restartScene === 'arrow') {
        return new LoadingSceneAT(this.maxX, this.maxY, this.lang);
      }
      if (this.restartScene === 'whack') {
        return new LoadingSceneWM(window.innerWidth, window.innerHeight, this.lang);
      }
      if (this.restartScene === 'boss') {
        return new LoadingSceneBF(window.innerWidth, window.innerHeight, this.lang);
      }
    }
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#0078d7');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (!(this.timeToContinue <= 0)) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 650, 1000, 110, '#0078d7');
    }
    if (this.timeToRemove < 0 && this.timeToContinue <= 0) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 650, 1000, 110, '#0078d7');
    }
  }
}
