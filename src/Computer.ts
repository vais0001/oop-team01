import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class Computer extends Drawable {
  public constructor() {
    super();
    this.posX = 1200;
    this.posY = 100;
    this.image = CanvasUtil.loadNewImage('./placeholders/computer.png')
  }
}
