import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import EnemyAD from "./EnemyAD.js";
import HeartPowerup from "./HeartPowerup.js";

export default class Player extends Drawable {

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/timmy_00000.png');
    this.posX = this.dimensionsX + this.backgroundWidth - this.image.width - 50;
    this.posY = maxY - 200;
  }

  public move(direction: number): void {
    if (direction == 0) {
      if (this.posY > this.dimensionsY + 15) {
        this.posY -= 5;
      }
    }

    if (direction == 1) {
      if (this.posY < this.dimensionsY + this.backgroundHeight - 140) {
        this.posY += 5;
      }
    }
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
      && this.getHeight() + this.posY > heartpowerup.getPosY()
    );
    return null;
  }
}
