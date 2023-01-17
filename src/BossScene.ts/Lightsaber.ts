import Antagonist from "../Antagonist.js";
import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";

export default class Lightsaber extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/lightsaber.png');
  }

  public changeImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source);
  }

  public update(elapsed: number, posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
  }

  public slashImage(side: number) {
    if (side === 0) {
      this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash.png');
    }
    if (side === 1) {
      this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash1.png');
    }
  }

  public collidesWithAntagonist(antagonist: Antagonist): boolean {
    return (this.posX < antagonist.getPosX() + antagonist.getWidth()
      && this.posX + this.getWidth() > antagonist.getPosX()
      && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
      && this.getHeight() + this.posY > antagonist.getPosY());
  }
}
