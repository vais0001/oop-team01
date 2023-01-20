/* eslint-disable max-len */
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import Locale from '../Locale.js';

export default class BossFightText extends Drawable {
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
   * @param image image is image
   * @param talker talker is image
   */
  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You defended against all my minions….'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You ended up in this nightmare'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('because you thought you could cheat'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('the system and get a free game'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('If something on the internet seems'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('too good to be true,'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('then it is'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('But enough talking'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You will have to face me now!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('The magic sword is broken!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You got a homing-delete-button in return!'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textEleven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('those attacks are weak'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textTen(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You think you are strong enough?'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textNine(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Viruses do not go away that easily'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textEight(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I will not give up....'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Enough!!!!!'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
  *
  * @param canvas is html canvas element
  * @param image image is image
  * @param talker talker is image
  */
  public textTwelve(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I… Can not defeat you….'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
  *
  * @param canvas is html canvas element
  * @param image image is image
  * @param talker talker is image
  */
  public textThirteen(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You are an unstoppable force'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
  *
  * @param canvas is html canvas element
  * @param image image is image
  * @param talker talker is image
  */
  public textFourteen(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Go back to your own world!!!'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }
}
