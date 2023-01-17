import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class ADbullet extends Drawable {
  public constructor (startX: number, startY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/cursor_00000.png');
    this.posX = startX;
    this.posY = startY - this.image.height / 2;
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.3;
  }

  public moveToComputer(posX: number, posY: number): void {
    const xDifference = posX - this.posX;
    const yDifference = posY - this.posY;

    this.posX += xDifference / 100;
    this.posY += yDifference / 100;
  }
}
