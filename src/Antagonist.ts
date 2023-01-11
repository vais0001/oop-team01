import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Antagonist extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = this.dimensionsX + 200;
    this.posY = this.dimensionsY + 200;
    this.image = CanvasUtil.loadNewImage('./placeholders/trojan_00000.png')
  }
}
