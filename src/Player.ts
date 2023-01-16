import Drawable from "./Drawable.js";
import CanvasUtil from "./CanvasUtil.js";
import Computer from "./Computer.js";

export default class Player extends Drawable {

  private speed: number;

  constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png')
    this.posX = posX;
    this.posY = posY;
    this.speed = 3;
  }

  public update(elapsed: number): void {

  }

  public collideWithitem(item: Computer): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.getPosY() < item.getPosY() + item.getHeight()
      && this.getHeight() + this.posY > item.getPosY());
  }

  public setNewPlayerImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source)
  }

  public playerMoving(direction: number) {
    const imageSources = ['http://127.0.0.1:5500/assets/playerstanding.png', 'http://127.0.0.1:5500/assets/timmywalkingright1.png', 'http://127.0.0.1:5500/assets/timmywalkingright2.png', 'http://127.0.0.1:5500/assets/timmywalkingleft1.png', 'http://127.0.0.1:5500/assets/timmywalkingleft2.png']
    if (direction === 3) {
      if (this.image.src === imageSources[2] || this.image.src === imageSources[0] || this.image.src === imageSources[4] || this.image.src === imageSources[3]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[1])
        }, 150)
      }
      if (this.image.src === imageSources[1] || this.image.src === imageSources[0] || this.image.src === imageSources[4] || this.image.src === imageSources[3]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[2])
        }, 150)
      }
    }
    if (direction === 1) {
      if (this.image.src === imageSources[2] || this.image.src === imageSources[0] || this.image.src === imageSources[4]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[3])
        }, 150)
      }
      if (this.image.src === imageSources[1] || this.image.src === imageSources[0]|| this.image.src === imageSources[3]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[4])
        }, 150)
      }
    }
  }

  public move(direction: number): void {
    if (direction == 0) {
      this.posX -= this.speed;
    }
    if (direction == 1) {
      this.posY -= this.speed;
    }
    if (direction == 2) {
      this.posX += this.speed;
    }
    if (direction == 3) {
      this.posY += this.speed;
    }
  }
}
