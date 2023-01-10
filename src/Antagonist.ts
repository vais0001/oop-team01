import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Antagonist extends Drawable {
  public constructor (posX: number, posY: number) {
    super();
    this.posX = window.innerWidth / 2;
    this.posY = posY;
    this.posX = posX;
    this.image = CanvasUtil.loadNewImage('./placeholders/trojan_00000.png')
  }
}
