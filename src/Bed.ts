import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Bed extends Drawable {
  public constructor() {
    super();
    this.posX = this.dimensionsX + 31;
    this.posY = this.dimensionsY + 160;
    this.image = CanvasUtil.loadNewImage('./assets/bed.png');
  }
}
