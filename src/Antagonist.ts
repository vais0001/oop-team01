import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import Xbullets from './BossScene.ts/Xbullet.js';

export default class Antagonist extends Drawable {
  public cutsceneMoveTimer: number;

  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX + this.dimensionsX;
    this.posY = posY + this.dimensionsY;
    this.image = CanvasUtil.loadNewImage('./assets/trojanfinalright.png');
    this.cutsceneMoveTimer = 5000;
  }

  /**
   *
   * @param elapsed is time
   */
  public cutsceneMovement(elapsed: number): void {
    this.cutsceneMoveTimer -= elapsed;
    if (this.cutsceneMoveTimer < 0) {
      this.posX -= 0;
    } else if (this.cutsceneMoveTimer < 2000) {
      this.posX -= elapsed * 0.3;
      this.posY -= elapsed * 0.1;
    } else if (this.cutsceneMoveTimer < 5000) {
      this.posY += elapsed * 0.2;
      this.posX += elapsed * 0.5;
    }
  }

  /**
   *
   * @param player is player
   * @param speed is speed
   */
  public moveToPlayer(player: Player, speed: number) {
    const distanceX: number = player.getPosX() - this.getPosX();
    const distanceY: number = player.getPosY() - this.getPosY();
    const slope: number = distanceY / distanceX;

    this.posX += Math.cos(slope) * speed;
    this.posY += Math.sin(slope) * speed;
  }

  /**
   *
   * @param speedX is speed of x
   * @param speedY is speed of y
   */
  public cutsceneMovementAway(speedX: number, speedY: number): void {
    this.posX += speedX;
    this.posY += speedY;
  }

  public getCutsceneMoveTimer(): number {
    return this.cutsceneMoveTimer;
  }

  /**
   *
   * @param source is a string of the image
   */
  public changeImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source);
  }

  /**
   *
   * @param bullet is bullet
   * @returns true or false
   */
  public collidesWithBullet(bullet: Xbullets): boolean {
    return (this.posX < bullet.getPosX() + bullet.getWidth()
      && this.posX + this.getWidth() > bullet.getPosX()
      && this.getPosY() < bullet.getPosY() + bullet.getHeight()
      && this.getHeight() + this.posY > bullet.getPosY());
  }
}
