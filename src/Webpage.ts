import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Locale from './Locale.js';
import Scene from './Scene.js';

export default class Webpage extends Scene {
  private newLevel: boolean;

  private downloading: boolean;

  private loadingBar: number;

  private downloadedTime: number;

  private flickeringTime: number;

  private locale: Locale;

  public constructor(maxX: number, maxY: number, lang: boolean) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/internet_browser.png');
    this.newLevel = false;
    this.downloading = false;
    this.loadingBar = 0;
    this.downloadedTime = 1700;
    this.flickeringTime = 0;
    if (lang === true) {
      this.locale = new Locale('nl');
    } else {
      this.locale = new Locale('');
    }
  }

  /**
   *
   * @param keyListener processes keyboard input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.downloading = true;
    }
  }

  /**
   *
   * @param elapsed time elapsed from last step
   * @returns a new scene
   */
  public update(elapsed: number): Scene {
    this.flickeringTime -= elapsed;
    if (this.flickeringTime < -200) {
      this.flickeringTime = 0;
    }
    if (this.downloading) {
      this.loadingBar += elapsed * 8; // for final 0.1
    }
    if (this.loadingBar > 300) {
      this.loadingBar = 301;
      this.downloadedTime -= elapsed;
      if (this.downloadedTime <= 0) {
        this.newLevel = true;
      }
    }
    if (this.newLevel === true) {
      return new Bedroom(0, 0, 1, true);
    }
    return null;
  }

  /**
   *
   * @param canvas renders on browser
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (this.flickeringTime < -100) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 250, this.dimensionsY + 400, 270, 250, 'white');
    }
    if (!(this.downloading)) {
      CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Press'), canvas.width / 2, this.dimensionsY + 400, 'center', 'Kongtext', 25, 'black');
      CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE]'), canvas.width / 2, this.dimensionsY + 440, 'center', 'Kongtext', 25, 'green');
      CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('To Download!'), canvas.width / 2, this.dimensionsY + 480, 'center', 'Kongtext', 25, 'black');
    } if (this.downloading && this.loadingBar < 300) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white'); // hide download button
      CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('DOWNLOADING'), canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'black');
      CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
      CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
    } if (this.loadingBar > 300) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white'); // hide download button
      CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('DOWNLOADED'), canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'red');
      CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
      CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
    }
  }
}
