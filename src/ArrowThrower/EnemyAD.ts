import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import CursorBullet from "./CursorBullet.js";
import EnemyAD2 from "./EnemyAD2.js";

export default class EnemyAD extends Drawable {
  public constructor(maxY: number) {
    super();
    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
  }
}
