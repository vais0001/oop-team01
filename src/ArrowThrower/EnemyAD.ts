import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import CursorBullet from "./CursorBullet.js";

export default abstract class EnemyAD extends Drawable {
  public constructor (maxY: number) {
    super();
    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
  }

  public abstract update(elapsed: number): void;
}
