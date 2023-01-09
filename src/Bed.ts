import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Bed extends Drawable {
  public constructor () {
    super();
    this.posX = 50;
    this.posY = 300;
    this.image = CanvasUtil.loadNewImage('./placeholders/bed.png')
  }
}
