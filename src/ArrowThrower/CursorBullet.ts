import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import EnemyAD from "./EnemyAD.js";

export default class CursorBullet extends Drawable {
  public constructor (startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
    this.image = CanvasUtil.loadNewImage('../../placeholders/cursor.png');
  }

  public update(elapsed: number): void {
    this.posX -= elapsed * 1.75;
  }

  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
    && this.posX + this.getWidth() > ad.getPosX()
    && this.getPosY() < ad.getPosY() + ad.getHeight()
    && this.getHeight() + this.posY > ad.getPosY());
  }
}
