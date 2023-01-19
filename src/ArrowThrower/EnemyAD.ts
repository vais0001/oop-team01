import Drawable from '../Drawable.js';

export default class EnemyAD extends Drawable {
  public constructor(maxY: number) {
    super();
    this.posX = this.dimensionsX;
    // eslint-disable-next-line max-len
    this.posY = (Math.random() * ((maxY + this.dimensionsY - 350) - this.dimensionsY + 100) + this.dimensionsY + 100);
  }
}
