import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";

export default class Text extends Drawable {
  public constructor() {
    super();
  }

  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'pffff, what a terrible sleep I had.', this.dimensionsX + 700, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 700);
  }

  public textTwo(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Let me grab my phone and check out the latest game releases.', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 700);
  }

  public textThree(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy looks at his phone and sees that X game', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'he really wants has finally been released. Due to', this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'inflation, the price of games has risen to very high amounts.', this.dimensionsX + 720, this.dimensionsY + 720, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
  }

  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'YES! Finally, it is released!', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'But oh no, it is too expensive. My parents will not', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'buy it for me unless I get high grades...', this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'I want it now, but how….', this.dimensionsX + 720, this.dimensionsY + 720, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 700);
  }

  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy browses on forums to see', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'how to access this game for free.', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'He comes across a site which promises a safe and free download.', this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
  }

  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'You fell for my trap!', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 550, this.dimensionsY + 700);
  }

  public textSeven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
    CanvasUtil.writeTextToCanvas(canvas, 'Now you must take responsibility for your actions…', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 750, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 550, this.dimensionsY + 700);
  }

  public computerPrompt(canvas: HTMLCanvasElement, image: HTMLImageElement): void {
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 50, this.dimensionsY + 740, 'left', 'arial', 40, 'white');
  }
}
