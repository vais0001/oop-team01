/* eslint-disable max-len */
import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import Bed from './Bed.js';
import EnemyAD from './ArrowThrower/EnemyAD.js';
import HeartPowerup from './ArrowThrower/HeartPowerup.js';
import ADbullet from './ArrowThrower/ADbullet.js';
import Antagonist from './Antagonist.js';
import ShootingAbility from './BossScene.ts/ShootingAbility.js';

export default class Player extends Drawable {
  private lookingRight: boolean;

  private walkingBoolean: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
    this.posX = posX;
    this.posY = posY;
    this.lookingRight = true;
    this.walkingBoolean = false;
  }

  /**
   *
   * @param item is the computer
   * @returns true or false
   */
  public collideWithitem(item: Computer): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.getPosY() < item.getPosY() + item.getHeight() - 170
      && this.getHeight() + this.posY > item.getPosY());
  }

  public setNewPlayerImage(source: string) {
    this.image = CanvasUtil.loadNewImage(source);
    this.lookingRight = false;
  }

  /**
   *
   * @param computer is a computer object
   * @returns true or false
   */
  public collidingComputer(computer: Computer): boolean {
    return (this.posX < computer.getPosX() + computer.getWidth()
      && this.posX + this.getWidth() > computer.getPosX()
      && this.getPosY() < computer.getPosY() + computer.getHeight() - 200
      && this.getHeight() + this.posY > computer.getPosY()
    );
  }

  /**
   *@param ad is a enemy object
   *@returns true or false
   */
  public isCollidingAD(ad: EnemyAD): boolean {
    return (this.posX < ad.getPosX() + ad.getWidth()
      && this.posX + this.getWidth() > ad.getPosX()
      && this.getPosY() < ad.getPosY() + ad.getHeight()
      && this.getHeight() + this.posY > ad.getPosY());
  }

  /**
   *
   * @param bed is bed object
   * @returns true or false
   */
  public collidingBed(bed: Bed): boolean {
    return (this.posX < bed.getPosX() + bed.getWidth()
      && this.posX + this.getWidth() > bed.getPosX()
      && this.getPosY() < bed.getPosY() + bed.getHeight() - 223
      && this.getHeight() + this.posY > bed.getPosY()
    );
  }

  /**
   *@param item is the Trojan horse bullets in final boss
   *@returns true or false
   */
  public collideWithBullet(item: ShootingAbility): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.getPosY() < item.getPosY() + item.getHeight()
      && this.getHeight() + this.posY > item.getPosY());
  }

  /**
   *
   * @param direction is direction
   * @param speed is speed
   */
  public move(direction: number, speed: number): void {
    if (direction === 66) {
      if (this.lookingRight) {
        this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
        this.walkingBoolean = false;
      } else {
        this.image = CanvasUtil.loadNewImage('./assets/playerstandingleft.png');
        this.walkingBoolean = false;
      }
    }
    if (this.lookingRight && direction !== 66) {
      if (this.lookingRight) {
        if (this.walkingBoolean === false) {
          setTimeout(() => {
            this.image = CanvasUtil.loadNewImage('./assets/timmywalkingright1.png');
            this.walkingBoolean = true;
          }, speed);
        }
        if (this.walkingBoolean === true) {
          setTimeout(() => {
            this.image = CanvasUtil.loadNewImage('./assets/timmywalkingright2.png');
            this.walkingBoolean = false;
          }, speed);
        }
      }
    } if (!(this.lookingRight) && direction !== 66) {
      if (this.walkingBoolean === false) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingleft1.png');
          this.walkingBoolean = true;
        }, speed);
      }
      if (this.walkingBoolean === true) {
        setTimeout(() => {
          this.image = CanvasUtil.loadNewImage('./assets/timmywalkingleft2.png');
          this.walkingBoolean = false;
        }, speed);
      }
    }
  }

  /**
   * changes the position the player is looking for ArrowThrower.ts
   */
  public changePlayerDirection() : void {
    this.lookingRight = false;
  }

  /**
   * checks for collision with antagonist
   *
   * @param antagonist antagonist
   * @returns true if collided
   */
  public collideWithAntagonist(antagonist: Antagonist): boolean {
    return (this.posX < antagonist.getPosX() + antagonist.getWidth()
      && this.posX + this.getWidth() > antagonist.getPosX()
      && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
      && this.getHeight() + this.posY > antagonist.getPosY());
  }

  /**
   *@param elapsed is time
   */
  public moveUp(elapsed: number): void {
    if (this.posY + this.image.height > this.dimensionsY + 220) {
      this.posY -= elapsed * 0.5;
    }
  }

  /**
   *
   * @param elapsed is time
   */
  public moveDown(elapsed: number): void {
    if (this.posY + this.image.height < this.dimensionsY + this.backgroundHeight - 25) {
      this.posY += elapsed * 0.5;
    }
  }

  /**
   *
   * @param elapsed is time
   */
  public moveLeft(elapsed: number): void {
    this.lookingRight = false;
    this.posX -= elapsed * 0.5;
  }

  /**
   *
   * @param elapsed is time
   */
  public moveRight(elapsed: number): void {
    this.lookingRight = true;
    this.posX += elapsed * 0.5;
  }

  public cutsceneMovement(elapsed: number): void {
    this.posY += elapsed * 0.2;
    this.posX += elapsed * 0.5;
  }

  /**
    *
    * @param heartpowerup is powerup to get extra heart
    * @returns true or false
    */
  public isCollidingHeart(heartpowerup: HeartPowerup): boolean {
    return (this.posX < heartpowerup.getPosX() + heartpowerup.getWidth()
      && this.posX + this.getWidth() > heartpowerup.getPosX()
      && this.getPosY() < heartpowerup.getPosY() + heartpowerup.getHeight()
      && this.getHeight() + this.posY > heartpowerup.getPosY());
  }

  /**
   *
   * @param bullet is a bullet from enemy
   * @returns true or false
   */
  public isCollidingBullet(bullet: ADbullet): boolean {
    return (this.posX < bullet.getPosX() + bullet.getWidth()
      && this.posX + this.getWidth() > bullet.getPosX()
      && this.getPosY() < bullet.getPosY() + bullet.getHeight()
      && this.getHeight() + this.posY > bullet.getPosY());
  }

  /**
   *
   * @param speedX speed going X
   * @param speedY speed going Y
   */
  public moveAway(speedX: number, speedY: number): void {
    this.posX += speedX;
    this.posY += speedY;
  }

  /**
   *
   */
  public changePositionX(): void {
    this.posX = this.dimensionsX + this.backgroundWidth - 300;
  }
}

