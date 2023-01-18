import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import EnemyAD from './EnemyAD.js';

export default class CursorBullet extends Drawable {
  public constructor(startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
    this.image = CanvasUtil.loadNewImage('./placeholders/cursor.png');
  }

  /**
   *
   * @param elapsed time
   */
  public update(elapsed: number): void {
    this.posX -= elapsed * 1.75;
  }

  /**
   *
   * @param ad is enemy ad
   * @returns true or false
   */
  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
    && this.posX + this.getWidth() > ad.getPosX()
    && this.getPosY() < ad.getPosY() + ad.getHeight()
    && this.getHeight() + this.posY > ad.getPosY());
  }
}
