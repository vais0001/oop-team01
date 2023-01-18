import CanvasUtil from '../CanvasUtil.js';
import EnemyAD from './EnemyAD.js';

export default class EnemyAD1 extends EnemyAD {
  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('./assets/enemyAD.jpg');
  }

  /**
   *
   * @param elapsed is time
   */
  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }

  /**
   *
   * @param posX is posX
   * @param posY is posY
   */
  public moveToComputer(posX: number, posY: number): void {
    const xDifference = posX - this.posX;
    const yDifference = posY - this.posY;

    this.posX += xDifference / 100;
    this.posY += yDifference / 100;
  }
}
