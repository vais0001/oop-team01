import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Viruses extends Drawable {

  private value: number;

  public constructor() {
    super();
    this.value = Math.floor(Math.random() * 9) + 1;
    this.image = CanvasUtil.loadNewImage('./assets/worm1.png')
    if (this.value === 1) {
      this.posX = 330 + this.dimensionsX;
      this.posY = 770 + this.dimensionsY;
    } else if (this.value === 2) {
      this.posX = 660 + this.dimensionsX;
      this.posY = 770 + this.dimensionsY;
    } else if (this.value === 3) {
      this.posX = 980 + this.dimensionsX;
      this.posY = 770 + this.dimensionsY;
    } else if (this.value === 4) {
      this.posX = 330 + this.dimensionsX;
      this.posY = 620 + this.dimensionsY;
    } else if (this.value === 5) {
      this.posX = 660 + this.dimensionsX;
      this.posY = 620 + this.dimensionsY;
    } else if (this.value === 6) {
      this.posX = 980 + this.dimensionsX;
      this.posY = 620 + this.dimensionsY;
    } else if (this.value === 7) {
      this.posX = 330 + this.dimensionsX;
      this.posY = 470 + this.dimensionsY;
    } else if (this.value === 8) {
      this.posX = 660 + this.dimensionsX;
      this.posY = 470 + this.dimensionsY;
    } else if (this.value === 9) {
      this.posX = 980 + this.dimensionsX;
      this.posY = 470 + this.dimensionsY;
    }
  }
  public getValue() {
    return this.value;
  }
}
