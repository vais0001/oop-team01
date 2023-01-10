import CanvasUtil from "./CanvasUtil.js";

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
    this.dimensionsY = (window.innerHeight - 1422) / 2;

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

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
