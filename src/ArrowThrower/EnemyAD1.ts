import CanvasUtil from '../CanvasUtil.js';
import EnemyAD from './EnemyAD.js';

export default class EnemyAD1 extends EnemyAD {
  private xDifference: number;

  private yDifference: number;

  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/AD.png');
    this.yDifference = 0;
    this.xDifference = 0;
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }

  public moveToComputer(posX: number, posY: number): void {
    this.xDifference = posX - this.posX;
    this.yDifference = posY - this.posY;

    this.posX += this.xDifference / 100;
    this.posY += this.yDifference / 100;
  }
}
