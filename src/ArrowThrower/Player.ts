import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Player extends Drawable {

  public constructor (maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/timmy_00000.png');
    this.posX = this.dimensionsX + this.backgroundWidth - this.image.width - 50;
    this.posY = maxY - 200;
  }

  public move (direction: number): void {
    if (direction == 0) {
      console.log((this.dimensionsY))
      if (this.posY > this.dimensionsY + 15) {
        this.posY -= 5;
      }
    }

    if (direction == 1)  {
      if (this.posY < this.dimensionsY + this.backgroundHeight - 140) {
        this.posY += 5;
      }
    }
  }
}
