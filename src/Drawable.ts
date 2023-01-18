import CanvasUtil from './CanvasUtil.js';

export default abstract class Drawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected dimensionsX: number;

  protected dimensionsY: number;

  protected backgroundHeight: number;

  protected backgroundWidth: number;

  public constructor() {
    this.dimensionsX = (window.innerWidth - 1422) / 2;
    this.dimensionsY = (window.innerHeight - 800) / 2;
    this.backgroundHeight = 800;
    this.backgroundWidth = 1422;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public setImage(image: string) {
    this.image = CanvasUtil.loadNewImage(image);
  }

  /**
   *
   * @param posY is posY
   */
  public minusPosY(posY: number) {
    this.posY -= posY;
  }

  /**
   *
   * @param posX is posX
   * @param addOrSub to add or to subtract 0 is to add 1 is to sub
   */
  public addOrSubPosX(posX: number, addOrSub: number) {
    // to add is 0, to sub is 1
    if (addOrSub === 0) {
      this.posX += posX;
    }
    if (addOrSub === 1) {
      this.posX -= posX;
    }
  }

  /**
   *
   * @param posY is posy
   * @param addOrSub to add or to subtract 0 is to add 1 is to sub
   */
  public addOrSubPosY(posY: number, addOrSub: number) {
    // to add is 0, to sub is 1
    if (addOrSub === 0) {
      this.posY += posY;
    }
    if (addOrSub === 1) {
      this.posY -= posY;
    }
  }
}
