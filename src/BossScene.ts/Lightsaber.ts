import Antagonist from '../Antagonist.js';
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';

export default class Lightsaber extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/lightsaber.png');
  }

  /**
   *
   * @param source is a string from image location
   */
  public changeImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source);
  }

  /**
   *
   * @param elapsed is time
   * @param posX is posX
   * @param posY is posY
   */
  public update(elapsed: number, posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *
   * @param side left or right
   */
  public slashImage(side: number) {
    if (side === 0) {
      this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash.png');
    }
    if (side === 1) {
      this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash1.png');
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
