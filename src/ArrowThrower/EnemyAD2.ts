import CanvasUtil from "../CanvasUtil.js";
import ADbullet from "./ADbullet.js";
import EnemyAD from "./EnemyAD.js";

export default class EnemyAD2 extends EnemyAD {

  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/adshooter_00000.png');

    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
  }

  public override update(elapsed: number): void {
    if (this.posX >= 200 + this.dimensionsX) {
      this.posX = 200 + this.dimensionsX;
    } else {
      this.posX += elapsed * 0.2;
    }
  }
}
