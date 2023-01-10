import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Bed extends Drawable {
  public constructor() {
    super();
    this.posX = this.dimensionsX + 20;
    this.posY = this.dimensionsY + 500;
    this.image = CanvasUtil.loadNewImage('./placeholders/bed.png');
  }
}
