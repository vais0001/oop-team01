import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class ShootingAbility extends Drawable {

  private direction: number;

  private speed: number;

  public constructor(startX: number, startY: number, direction: number, speed: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/cursor_00000.png')
    this.posX = startX;
    this.posY = startY;
    this.direction = direction;
    this.speed = speed;
  }

  public update(elapsed: number) {
    let randomDecimal = Math.random();
    if (this.direction === 5) {
      this.posX -= Math.random() * elapsed;
      this.posY += randomDecimal * elapsed;
    }
    if(this.direction === 0) {
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
