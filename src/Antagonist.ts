import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Antagonist extends Drawable {
  public constructor () {
    super();
    this.posX = window.innerWidth / 2;
    this.posY = 100;
    this.image = CanvasUtil.loadNewImage('./placeholders/trojan_00000.png')
  }
}
