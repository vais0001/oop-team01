import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import ADbullet from "./ADbullet.js";
import EnemyAD from "./EnemyAD.js";
import HeartPowerup from "./HeartPowerup.js";

export default class Player extends Drawable {

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../assets/playerstandingleft.png');
    this.posX = maxX - 50;
    this.posY = maxY - 200;
  }

  public moveUp(elapsed: number): void {
      if (this.posY > this.dimensionsY - 130) {
        this.posY -= elapsed * 0.5;
      }
  }

  public moveDown(elapsed: number): void {
    if (this.posY < this.dimensionsY + this.backgroundHeight - 140) {
      this.posY += elapsed * 0.5;
    }
  }

  public cutsceneMovement(elapsed: number): void {
    this.posY += elapsed * 0.2;
    this.posX += elapsed * 0.5;
  }

  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
      && this.posX + this.getWidth() > ad.getPosX()
      && this.getPosY() < ad.getPosY() + ad.getHeight()
      && this.getHeight() + this.posY > ad.getPosY());
  }

  public isCollidingHeart(heartpowerup: HeartPowerup): boolean {
    return (this.posX < heartpowerup.getPosX() + heartpowerup.getWidth()
      && this.posX + this.getWidth() > heartpowerup.getPosX()
      && this.getPosY() < heartpowerup.getPosY() + heartpowerup.getHeight()
      && this.getHeight() + this.posY > heartpowerup.getPosY());
  }

  public isCollidingBullet(bullet: ADbullet): boolean {
    return (this.posX < bullet.getPosX() + bullet.getWidth()
      && this.posX + this.getWidth() > bullet.getPosX()
      && this.getPosY() < bullet.getPosY() + bullet.getHeight()
      && this.getHeight() + this.posY > bullet.getPosY());
  }

  public moveAway(speedX: number, speedY: number): void {
    this.posX += speedX;
    this.posY += speedY;
  }

  public changePositionX(): void {
    this.posX = this.dimensionsX + this.backgroundWidth - 300
  }
}
