import Drawable from '../Drawable.js';

export default class EnemyAD extends Drawable {
  public constructor(maxY: number) {
    super();
    this.posX = this.dimensionsX;
    this.posY = (Math.random() * ((maxY - 100) - this.dimensionsY) + this.dimensionsY);
  }
}
