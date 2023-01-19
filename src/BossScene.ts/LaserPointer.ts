import Drawable from '../Drawable.js';

export default class LaserPointer extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
  }
}
