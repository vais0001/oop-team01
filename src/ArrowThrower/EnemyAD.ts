import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import ADbullet from "./ADbullet.js";
import CursorBullet from "./CursorBullet.js";
import EnemyAD2 from "./EnemyAD2.js";

export default abstract class EnemyAD extends Drawable {

  private enemy2: EnemyAD2;

  public constructor (maxY: number) {
    super();
    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }

  public fire(): ADbullet {
    return new ADbullet(this.posX, this.posY);
  }

}
