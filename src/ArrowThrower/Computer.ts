import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Computer extends Drawable {
  public constructor () {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/pc_00000.png');
    this.posX = this.dimensionsX + this.backgroundWidth;
    this.posY = this.dimensionsY + this.backgroundHeight / 2;
  }
}
