import CanvasUtil from "../CanvasUtil.js";
import ADbullet from "./ADbullet.js";
import EnemyAD from "./EnemyAD.js";

export default class EnemyAD1 extends EnemyAD {
  private timeToNextBullet: number;

  private adBullets: ADbullet[] = [];

  public constructor(maxY: number) {
    super(maxY);
    this.timeToNextBullet = 500;
    this.image = CanvasUtil.loadNewImage('../../placeholders/adshooter_00000.png');
  }

  public update(elapsed: number): void {
    if (this.posX >= 201 + this.dimensionsX) {
      this.posX = 201 + this.dimensionsX;
      this.timeToNextBullet -= elapsed;
      if (this.timeToNextBullet < 0) {
        this.timeToNextBullet = 500;
        this.adBullets.push(new ADbullet(this.posX, this.posY));
        console.log(this.adBullets)
        console.log('fire');
      }
    } else {
      this.posX += elapsed * 0.2;
    }
  }
}
