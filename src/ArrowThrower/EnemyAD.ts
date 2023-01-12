import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import ADbullet from "./ADbullet.js";
import CursorBullet from "./CursorBullet.js";

export default abstract class EnemyAD extends Drawable {
  private nextFire: number;
  public constructor (maxY: number) {
    super();
    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
    this.nextFire = (Math.random() * (10000 - 1000) + 1000);
  }

  public abstract update(elapsed: number): void;

  public willFire(): boolean {
    if (this.nextFire <= 0) {
      this.nextFire = (Math.random() * (10000 - 7000) + 7000);
      return true;
    }
    return false;
  }

  public fire(): ADbullet {
    return new ADbullet(this.posX, this.posY);
  }
}
