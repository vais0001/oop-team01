import CanvasUtil from "./CanvasUtil.js";

export default abstract class Drawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

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
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY)
  }
}
