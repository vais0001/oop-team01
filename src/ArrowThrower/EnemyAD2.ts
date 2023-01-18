import CanvasUtil from '../CanvasUtil.js';
import ADbullet from './ADbullet.js';
import EnemyAD from './EnemyAD.js';

export default class EnemyAD2 extends EnemyAD {
  private nextFire: number;

  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/adshooter_00000.png');
    this.nextFire = 0;
  }

  /**
   *
   * @param elapsed is time
   */
  public update(elapsed: number): void {
    this.posX += elapsed * 0.3;
    this.nextFire -= elapsed;
  }

  /**
   *
   * @param posX is posX
   */
  public stopAD(posX: number): void {
    if (posX >= 200 + this.dimensionsX) {
      this.posX = 200 + this.dimensionsX;
    }
  }

  /**
   * @returns true or false
   */
  public willFire(): boolean {
    if (this.posX === 200 + this.dimensionsX) {
      if (this.nextFire < 0) {
        this.nextFire = 2000;
        return true;
      }
      return false;
    }
    return false;
  }

  /**
   * @returns new Adbullet class
   */
  public fire(): ADbullet {
    return new ADbullet(this.posX + this.image.width, this.posY + this.image.height / 2);
  }
}
