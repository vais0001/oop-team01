import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Antagonist extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX + this.dimensionsX;
    this.posY = posY + this.dimensionsY;
    this.image = CanvasUtil.loadNewImage('./placeholders/trojan_00000.png')
  }
}
