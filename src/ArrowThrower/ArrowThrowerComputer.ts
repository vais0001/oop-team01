import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import EnemyAD from "./EnemyAD.js";

export default class ArrowThrowerComputer extends Drawable {
  public constructor () {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/kompas.png');
    this.posX = this.dimensionsX + this.backgroundWidth - this.image.width - 20;
    this.posY = this.dimensionsY + this.backgroundHeight / 2 - this.image.height / 2;
  }

  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
      && this.posX + this.getWidth() > ad.getPosX()
      && this.getPosY() < ad.getPosY() + ad.getHeight()
      && this.getHeight() + this.posY > ad.getPosY());
  }
}
