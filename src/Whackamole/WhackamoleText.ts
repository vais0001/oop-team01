/* eslint-disable max-len */
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import Locale from '../Locale.js';

export default class WhackamoleText extends Drawable {
  private locale: Locale;

  public constructor(dutch: boolean) {
    super();
    if (dutch === true) {
      this.locale = new Locale('nl');
    } else {
      this.locale = new Locale('en-US');
    }
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You managed to defend against my ads….'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textTwo(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Let us see how you defend against my worms…'), this.dimensionsX + 730, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textThree(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 650);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Enough! I will destroy you myself!'), this.dimensionsX + 720, this.dimensionsY + 730, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 710);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 650);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('AAAAAARRRRRRRRGGGGHHHHHHHHH!!!!!'), this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 710);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 650);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You can not keep this up like this….'), this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 710);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 650);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You are doing better than I thought….'), this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 710);
  }
}
