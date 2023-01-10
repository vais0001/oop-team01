import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Computer extends Drawable {
  public constructor() {
    super();
    this.posX = this.dimensionsX + 1150;
    this.posY = this.dimensionsY + 400;
    this.image = CanvasUtil.loadNewImage('./placeholders/computer.png');
  }
}
