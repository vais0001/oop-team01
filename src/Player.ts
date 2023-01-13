import Drawable from "./Drawable.js";
import CanvasUtil from "./CanvasUtil.js";
import Computer from "./Computer.js";

export default class Player extends Drawable {

  private speed: number;

  private moving: boolean;

  private moovingTimer: number;


  constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png')
    this.posX = posX;
    this.posY = posY;
    this.speed = 3;
    this.moving = false;
    this.moovingTimer = 300;
  }

  public update(elapsed: number): void {

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
  public collideWithitem(item: Computer): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.getPosY() < item.getPosY() + item.getHeight()
      && this.getHeight() + this.posY > item.getPosY());
  }

  public playerMoving(direction: number) {
    if (direction === 3) {
      if (this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingright2.png' || this.image.src === 'http://127.0.0.1:5500/assets/playerstanding.png' || this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft2.png' || this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft1.png') {
        setTimeout((image: HTMLImageElement) => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingright1.png')
        }, 150)
      }
      if (this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingright1.png' || this.image.src === 'http://127.0.0.1:5500/assets/playerstanding.png' || this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft2.png' || this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft1.png') {
        setTimeout((image: HTMLImageElement) => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingright2.png')
        }, 150)
      }
    }
    if (direction === 1) {
      if (this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingright2.png' || this.image.src === 'http://127.0.0.1:5500/assets/playerstanding.png' || this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft2.png') {
        setTimeout((image: HTMLImageElement) => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingleft1.png')
        }, 150)
      }
      if (this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingright1.png' || this.image.src === 'http://127.0.0.1:5500/assets/playerstanding.png'|| this.image.src === 'http://127.0.0.1:5500/assets/timmywalkingleft1.png') {
        setTimeout((image: HTMLImageElement) => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingleft2.png')
        }, 150)
      }
    }
  }

}
