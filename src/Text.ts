import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";

export default class Text extends Drawable {
  public constructor() {
    super();
  }

  public textOne(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'pffff, what a terrible sleep I had.', this.dimensionsX + 700, this.dimensionsY + 1010, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 1020);
  }

  public textTwo(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'Let me grab my phone and check out the latest game releases.', this.dimensionsX + 720, this.dimensionsY + 1010, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 1020);
  }

  public textThree(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy looks at his phone and sees that X game', this.dimensionsX + 720, this.dimensionsY + 990, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'he really wants has finally been released. Due to', this.dimensionsX + 720, this.dimensionsY + 1010, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'inflation, the price of games has risen to very high amounts.', this.dimensionsX + 720, this.dimensionsY + 1030, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
  }

  public textFour(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'YES! Finally, it is released!', this.dimensionsX + 720, this.dimensionsY + 980, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'But oh no, it is too expensive. My parents will not', this.dimensionsX + 720, this.dimensionsY + 1000, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'buy it for me unless I get high grades...', this.dimensionsX + 720, this.dimensionsY + 1020, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'I want it now, but how….', this.dimensionsX + 720, this.dimensionsY + 1040, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 1020);
  }

  public textFive(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy browses on forums to see', this.dimensionsX + 720, this.dimensionsY + 980, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'how to access this game for free.', this.dimensionsX + 720, this.dimensionsY + 1000, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'He comes across a site which promises a safe and free download.', this.dimensionsX + 720, this.dimensionsY + 1020, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
  }

  public textSix(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'You fell for my trap!', this.dimensionsX + 720, this.dimensionsY + 1010, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 1020);
  }

  public textSeven(canvas: HTMLCanvasElement, image: HTMLImageElement, talker: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 500, this.dimensionsY + 950);
    CanvasUtil.writeTextToCanvas(canvas, 'Now you must take responsibility for your actions…', this.dimensionsX + 720, this.dimensionsY + 1010, 'center', 'arial', 14, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 1060, 'center', 'arial', 14, 'black');
    CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 540, this.dimensionsY + 1020);
  }

  public computerPrompt(canvas: HTMLCanvasElement, image: HTMLImageElement): void {
    CanvasUtil.drawImage(canvas, image, this.dimensionsX + 1205, this.dimensionsY + 400);
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 10, this.dimensionsY + 1050, 'left', 'arial', 40, 'white');
  }
}
