/* eslint-disable max-len */
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import Locale from '../Locale.js';

export default class ThrowerText extends Drawable {
  private locale: Locale;

  public constructor(dutch: boolean) {
    super();
    if (dutch === true) {
      this.locale = new Locale('nl');
    } else {
      this.locale = new Locale('');
    }
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Whe… Wher…. Where am I…?'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textTwo(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I am scared…'), this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textThree(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Welcome to trojan street.'), this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Have fun getting eaten by my ads!!'), this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Having fun yet?'), this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Stop it!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textSeven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I have had enough!'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }
}
