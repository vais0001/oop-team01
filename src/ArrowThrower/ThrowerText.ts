/* eslint-disable max-len */
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';

export default class ThrowerText extends Drawable {
  public constructor() {
    super();
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image image is image
   * @param talker talker is image
   */
  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Whe… Wher…. Where am I…?', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'I am scared…', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Welcome to trojan street.', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Have fun getting eaten by my ads!!', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Having fun yet?', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Stop it!', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'I have had enough!', this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public computerPrompt(canvas: HTMLCanvasElement): void {
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 50, this.dimensionsY + 740, 'left', 'DotGothic16', 40, 'white');
  }
}
