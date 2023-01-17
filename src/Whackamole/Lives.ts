import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Lives extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/heart.png')
    this.posX = posX;
    this.posY = posY;
  }
}
