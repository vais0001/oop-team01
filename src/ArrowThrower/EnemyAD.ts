import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class EnemyAD extends Drawable {
  public constructor (maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/AD.png');
    this.posX = this.dimensionsX;
    this.posY = Math.random() * (maxY - (this.dimensionsY)) + (this.dimensionsY);
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }
}
