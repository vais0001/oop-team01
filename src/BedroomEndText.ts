/* eslint-disable max-len */
import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class BedroomEndText extends Drawable {
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
    CanvasUtil.writeTextToCanvas(canvas, 'pfffff…. What a terrible slee...', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'wait? What happened just now?', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.writeTextToCanvas(canvas, 'was it all just a dream?', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'The horse? The ads? The worms? ', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
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
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'did all of that happen', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'because I downloaded the game?', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   */
  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Timmy checks his phone to see if', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'the game he wanted is really released.', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'The game… it is really out…', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'so was all of that actually real?', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'I will be a good kid and', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'ask my parents for the game.', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of who talks
   */
  public textSeven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'If they say no, I will study', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'harder so they will reward me :)', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  /**
   *
   * @param canvas is html canvas element
   * @param image is image
   * @param talker is the image of the talker
   */
  public textEight(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'HAHAHAHAHAHAHAHAHAHAHAHAHAHA', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'HAHAHAHAHAHAHAHAHAHAHAHAHAHA', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'HAHAHAHAHAHAHAHAHAHAHAHAHAHA', this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
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
