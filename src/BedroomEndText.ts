import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";

export default class BedroomEndText extends Drawable {
  public constructor() {
    super();
  }

  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'pfffff…. What a terrible slee...', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'wait? What happened just now?', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'arial', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textTwo(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'was it all just a dream?', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'The horse? The ads? The worms? ', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'arial', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textThree(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'did all of that happen', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'because I downloaded the game?', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'arial', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Timmy checks his phone to see if the game he wanted is really released.', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'the game he wanted is really released.', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 20, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'arial', 16, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Having fun yet?', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'arial', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Stop it!', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public textSeven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'I have had enough!', this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'arial', 20, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
  }

  public computerPrompt(canvas: HTMLCanvasElement, image: HTMLImageElement): void {
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 50, this.dimensionsY + 740, 'left', 'arial', 40, 'white');
  }
}
