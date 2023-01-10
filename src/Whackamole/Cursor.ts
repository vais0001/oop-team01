import Drawable from "../Drawable.js";
import CanvasUtil from "../CanvasUtil.js";

export default class Cursor extends Drawable {

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/cursor.png');
    this.posX = window.innerWidth / 2;
    this.posY = window.innerHeight / 2;

  }


}
