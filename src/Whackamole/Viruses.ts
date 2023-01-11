import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Viruses extends Drawable {

  private value: number;

  private timeToDissapear: number;

  private isDead: boolean;

  public constructor() {
    super();
    this.timeToDissapear = 2500;
    this.isDead = false;
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

  public update(elapsed: number): boolean {
    this.timeToDissapear -= elapsed;
    if(this.timeToDissapear <= 0) {
      this.isDead = true;
    }
    return null;
  }

  public getValue() {
    return this.value;
  }

  public isItDead() {
    return this.isDead;
  }
}
