import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class CursorBullet extends Drawable {
  public constructor (startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
    this.image = CanvasUtil.loadNewImage('../../placeholders/cursor.png');
  }

  public update(elapsed: number): void {
    this.posX -= elapsed * 1.75;
  }
}
