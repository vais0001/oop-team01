import Drawable from '../Drawable.js';
import CanvasUtil from '../CanvasUtil.js';
import Antagonist from '../Antagonist.js';

export default class Xbullets extends Drawable {
  public constructor(startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
    this.image = CanvasUtil.loadNewImage('./assets/xbullet.png');
  }

  /**
   *
   * @param antagonist is the enemy
   * @param speed is the bullets flying speed
   * @param side is the player on the left or right
   */
  public moveToAntagonist(antagonist: Antagonist, speed: number, side: number) {
    const distanceX: number = antagonist.getPosX() - this.getPosX();
    const distanceY: number = antagonist.getPosY() - this.getPosY();
    const slope: number = distanceY / distanceX;

    if (side === 0) {
      this.posX += Math.cos(slope) * speed;
      this.posY += Math.sin(slope) * speed;
    } else if (side === 1) {
      this.posX -= Math.cos(slope) * speed;
      this.posY -= Math.sin(slope) * speed;
    }
  }

  /**
   *
   * @param antagonist is an enemy
   * @returns true or false
   */
  public collidesWithAntagonist(antagonist: Antagonist): boolean {
    return (this.posX < antagonist.getPosX() + antagonist.getWidth()
      && this.posX + this.getWidth() > antagonist.getPosX()
      && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
      && this.getHeight() + this.posY > antagonist.getPosY());
  }
}
