/* eslint-disable max-len */
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';

export default class WhackamoleText extends Drawable {
  public constructor() {
    super();
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'You managed to defend against my ads….', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Let us see how you defend against my worms…', this.dimensionsX + 730, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'Enough! I will destroy you myself!', this.dimensionsX + 720, this.dimensionsY + 730, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'AAAAAARRRRRRRRGGGGHHHHHHHHH!!!!!', this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'You can not keep this up like this….', this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'You are doing better than I thought….', this.dimensionsX + 720, this.dimensionsY + 710, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 710);
  }
}
