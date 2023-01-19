import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';

export default class ShootingAbility extends Drawable {
  private direction: number;

  private speed: number;

  private ySpeed: number;

  private xSpeed: number;

  // eslint-disable-next-line max-len
  public constructor(startX: number, startY: number, direction: number, speed: number, picture: number) {
    super();
    if (picture === 0) this.image = CanvasUtil.loadNewImage('./assets/littlebug.png');
    if (picture === 1) this.image = CanvasUtil.loadNewImage('./assets/wormbig.png');
    if (picture === 2) this.image = CanvasUtil.loadNewImage('./assets/digitalvirus.png');
    this.posX = startX;
    this.posY = startY;
    this.ySpeed = Math.random() * 0.5 - 0.25;
    this.xSpeed = Math.random() * 0.5;
    this.direction = direction;
    if (speed > 0) {
      this.speed = speed;
    } else this.speed = Math.random();
  }

  /**
   *
   * @param elapsed elapsed time
   */
  public update(elapsed: number) {
    if (this.direction === 5) {
      this.posX -= this.xSpeed;
      this.posY += this.ySpeed;
    }
    if (this.direction === 6) {
      this.posX += this.xSpeed;
      this.posY -= this.ySpeed;
    }
    if (this.direction === 0) {
      this.posX -= this.speed * elapsed;
    }
    if (this.direction === 1) {
      this.posY -= this.speed * elapsed;
    }
    if (this.direction === 2) {
      this.posX += this.speed * elapsed;
    }
    if (this.direction === 3) {
      this.posY += this.speed * elapsed;
    }
  }
}
