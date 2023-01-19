import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import EnemyAD from './EnemyAD.js';

export default class ArrowThrowerComputer extends Drawable {
  public constructor() {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/pc_arrowthrower.png');
    this.posX = this.dimensionsX + this.backgroundWidth - this.image.width - 22;
    this.posY = this.dimensionsY + this.backgroundHeight / 2 - this.image.height / 2;
  }

  /**
   *
   * @param ad is enemy called "ad"
   * @returns true or false
   */
  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
      && this.posX + this.getWidth() > ad.getPosX()
      && this.getPosY() < ad.getPosY() + ad.getHeight()
      && this.getHeight() + this.posY > ad.getPosY());
  }
}
