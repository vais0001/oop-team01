import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Player extends Drawable {
  private maxX: number;

  public constructor (maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/timmy_00000.png');
    this.posX = (maxX / 2) + this.dimensionsX - (this.image.width / 2);
    this.posY = maxY - 200;
    this.maxX = maxX;
  }

  public move (direction: number): void {
      if (direction == 0) {
        if (this.posX > this.dimensionsX) {
          this.posX -= 5;
        }
      }

    if (direction == 1)  {
      if (this.posX < (1422 + this.dimensionsX - this.image.width)) {
        this.posX += 5;
      }
    }
  }
}
