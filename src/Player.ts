import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import Bed from './Bed.js';

export default class Player extends Drawable {
  private lookingRight: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
    this.posX = posX;
    this.posY = posY;
    this.lookingRight = true;
  }

  public collideWithitem(item: Computer): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.getPosY() < item.getPosY() + item.getHeight()
      && this.getHeight() + this.posY > item.getPosY());
  }

  public setNewPlayerImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source);
    this.lookingRight = false;
  }

  public collidingComputer(computer: Computer): boolean {
    return (this.posX < computer.getPosX() + computer.getWidth()
    && this.posX + this.getWidth() > computer.getPosX()
    && this.getPosY() < computer.getPosY() + computer.getHeight() - 200
    && this.getHeight() + this.posY > computer.getPosY()
    );
  }

  public collidingBed(bed: Bed): boolean {
    return (this.posX < bed.getPosX() + bed.getWidth()
      && this.posX + this.getWidth() > bed.getPosX()
      && this.getPosY() < bed.getPosY() + bed.getHeight() - 223
      && this.getHeight() + this.posY > bed.getPosY()
    );
  }

  public move(direction: number, speed: number): void {
    const imageSources = ['http://127.0.0.1:5500/assets/playerstanding.png', 'http://127.0.0.1:5500/assets/timmywalkingright1.png', 'http://127.0.0.1:5500/assets/timmywalkingright2.png', 'http://127.0.0.1:5500/assets/timmywalkingleft1.png', 'http://127.0.0.1:5500/assets/timmywalkingleft2.png', 'http://127.0.0.1:5500/assets/playerstandingleft.png'];
    if (direction === 66) {
      if (this.lookingRight) {
        this.image.src = imageSources[0];
      } else {
        this.image.src = imageSources[5];
      }
    }
    if (this.lookingRight && direction !== 66) {
      if (this.lookingRight) {
        if (this.image.src === imageSources[2] || this.image.src === imageSources[5] || this.image.src === imageSources[0] || this.image.src === imageSources[4] || this.image.src === imageSources[3]) {
          setTimeout(() => {
            this.image = CanvasUtil.loadNewImage(imageSources[1]);
          }, speed);
        }
        if (this.image.src === imageSources[1] || this.image.src === imageSources[5] || this.image.src === imageSources[0] || this.image.src === imageSources[4] || this.image.src === imageSources[3]) {
          setTimeout(() => {
            this.image = CanvasUtil.loadNewImage(imageSources[2]);
          }, speed);
        }
      }
    } if (!(this.lookingRight) && direction !== 66) {
      if (this.image.src === imageSources[2] || this.image.src === imageSources[5] || this.image.src === imageSources[0] || this.image.src === imageSources[4]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[3]);
        }, speed);
      }
      if (this.image.src === imageSources[1] || this.image.src === imageSources[5] || this.image.src === imageSources[0] || this.image.src === imageSources[3]) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage(imageSources[4]);
        }, speed);
      }
    }
  }

  public moveUp(elapsed: number): void {
    this.posY -= elapsed * 0.5;
  }
  public moveDown(elapsed: number): void {
    this.posY += elapsed * 0.5;
  }
  public moveLeft(elapsed: number): void {
    this.lookingRight = false;
    this.posX -= elapsed * 0.5;
  }
  public moveRight(elapsed: number): void {
    this.lookingRight = true;
    this.posX += elapsed * 0.5;
  }

}
