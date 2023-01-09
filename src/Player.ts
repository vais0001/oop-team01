import Drawable from "./Drawable.js";
import CanvasUtil from "./CanvasUtil.js";

export default class Player extends Drawable {

  private speed: number;

  constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/timmy_00000.png')
  }

}
