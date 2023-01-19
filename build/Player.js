import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class Player extends Drawable {
    lookingRight;
    walkingBoolean;
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
        this.posX = posX;
        this.posY = posY;
        this.lookingRight = true;
        this.walkingBoolean = false;
    }
    collideWithitem(item) {
        return (this.posX < item.getPosX() + item.getWidth()
            && this.posX + this.getWidth() > item.getPosX()
            && this.getPosY() < item.getPosY() + item.getHeight() - 170
            && this.getHeight() + this.posY > item.getPosY());
    }
    setNewPlayerImage(source) {
        this.image = CanvasUtil.loadNewImage(source);
        this.lookingRight = false;
    }
    collidingComputer(computer) {
        return (this.posX < computer.getPosX() + computer.getWidth()
            && this.posX + this.getWidth() > computer.getPosX()
            && this.getPosY() < computer.getPosY() + computer.getHeight() - 200
            && this.getHeight() + this.posY > computer.getPosY());
    }
    isCollidingAD(ad) {
        return (this.posX < ad.getPosX() + ad.getWidth()
            && this.posX + this.getWidth() > ad.getPosX()
            && this.getPosY() < ad.getPosY() + ad.getHeight()
            && this.getHeight() + this.posY > ad.getPosY());
    }
    collidingBed(bed) {
        return (this.posX < bed.getPosX() + bed.getWidth()
            && this.posX + this.getWidth() > bed.getPosX()
            && this.getPosY() < bed.getPosY() + bed.getHeight() - 223
            && this.getHeight() + this.posY > bed.getPosY());
    }
    collideWithBullet(item) {
        return (this.posX < item.getPosX() + item.getWidth()
            && this.posX + this.getWidth() > item.getPosX()
            && this.getPosY() < item.getPosY() + item.getHeight()
            && this.getHeight() + this.posY > item.getPosY());
    }
    move(direction, speed) {
        if (direction === 66) {
            if (this.lookingRight) {
                this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
                this.walkingBoolean = false;
            }
            else {
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
        }
        if (!(this.lookingRight) && direction !== 66) {
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
    changePlayerDirection() {
        this.lookingRight = false;
    }
    collideWithAntagonist(antagonist) {
        return (this.posX < antagonist.getPosX() + antagonist.getWidth()
            && this.posX + this.getWidth() > antagonist.getPosX()
            && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
            && this.getHeight() + this.posY > antagonist.getPosY());
    }
    moveUp(elapsed) {
        if (this.posY + this.image.height > this.dimensionsY + 220) {
            this.posY -= elapsed * 0.5;
        }
    }
    moveDown(elapsed) {
        if (this.posY + this.image.height < this.dimensionsY + this.backgroundHeight - 25) {
            this.posY += elapsed * 0.5;
        }
    }
    moveLeft(elapsed) {
        this.lookingRight = false;
        this.posX -= elapsed * 0.5;
    }
    moveRight(elapsed) {
        this.lookingRight = true;
        this.posX += elapsed * 0.5;
    }
    cutsceneMovement(elapsed) {
        this.posY += elapsed * 0.2;
        this.posX += elapsed * 0.5;
    }
    isCollidingHeart(heartpowerup) {
        return (this.posX < heartpowerup.getPosX() + heartpowerup.getWidth()
            && this.posX + this.getWidth() > heartpowerup.getPosX()
            && this.getPosY() < heartpowerup.getPosY() + heartpowerup.getHeight()
            && this.getHeight() + this.posY > heartpowerup.getPosY());
    }
    isCollidingBullet(bullet) {
        return (this.posX < bullet.getPosX() + bullet.getWidth()
            && this.posX + this.getWidth() > bullet.getPosX()
            && this.getPosY() < bullet.getPosY() + bullet.getHeight()
            && this.getHeight() + this.posY > bullet.getPosY());
    }
    moveAway(speedX, speedY) {
        this.posX += speedX;
        this.posY += speedY;
    }
    changePositionX() {
        this.posX = this.dimensionsX + this.backgroundWidth - 300;
    }
}
//# sourceMappingURL=Player.js.map