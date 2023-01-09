import Drawable from "./Drawable.js";
import CanvasUtil from "./CanvasUtil.js";
import Computer from "./Computer.js";

export default class Player extends Drawable {

  private speed: number;

  constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/timmy_00000.png')
    this.posX = maxX  / 2;
    this.posY = maxY / 2;
    this.speed = 5;
  }

  public move(direction: number): void {
    if (direction == 0) {
      this.posX -= this.speed;
    }
    if (direction == 1){
      this.posY -= this.speed;
    }
    if (direction == 2) {
      this.posX += this.speed;
    }
    if (direction == 3) {
      this.posY += this.speed;
    }
  }
  public collideWithitem(item: Computer): boolean{
    return (this.posX < item.getPosX() + item.getWidth()
    && this.posX + this.getWidth() > item.getPosX()
    && this.getPosY() < item.getPosY() + item.getHeight()
    && this.getHeight() + this.posY > item.getPosY());
  }

}
