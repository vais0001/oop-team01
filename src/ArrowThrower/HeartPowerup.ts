import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class HeartPowerup extends Drawable {
  public constructor() {
    super();
    this.image = CanvasUtil.loadNewImage('./placeholders/heart.png');
    this.posX = -50;
    this.posY = (Math.random() * ((this.backgroundHeight - 100) - this.dimensionsY) + this.dimensionsY);
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.5;
  }
}
