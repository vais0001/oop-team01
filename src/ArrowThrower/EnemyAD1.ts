import CanvasUtil from '../CanvasUtil.js';
import Player from './Player.js';
import EnemyAD from './EnemyAD.js';

export default class EnemyAD1 extends EnemyAD {
  private player: Player;

  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/AD.png');
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }

  public moveToComputer(posX: number, posY: number): void {
      this.posX += 0.5;
      if (this.posY <= posY) this.posY += 2;
      if (this.posY >= posY) this.posY -= 2;
  }
}
