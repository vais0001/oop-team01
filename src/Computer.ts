import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Computer extends Drawable {
  public constructor() {
    super();
    this.posX = this.dimensionsX + 1050;
    this.posY = this.dimensionsY + 122;
    this.image = CanvasUtil.loadNewImage('./assets/pc.png');
  }
}
