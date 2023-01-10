import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Player extends Drawable {
  private maxX: number;

  public constructor (maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/timmy_00000.png');
    this.posX = maxX / 2;
    this.posY = maxY - 150;
    this.maxX = maxX;
  }
}
