import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class ADbullet extends Drawable {
  public constructor (startX: number, startY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/cursor_00000.png');
    this.posX = startX;
    this.posY = startY;
  }

  public update(elapsed: number): void {
    this.posX += elapsed;
  }
}
