import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class Player extends Drawable {
    lookingRight;
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/playerstanding.png');
        this.posX = posX;
        this.posY = posY;
        this.lookingRight = true;
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
    collidingBed(bed) {
        return (this.posX < bed.getPosX() + bed.getWidth()
            && this.posX + this.getWidth() > bed.getPosX()
            && this.getPosY() < bed.getPosY() + bed.getHeight() - 223
            && this.getHeight() + this.posY > bed.getPosY());
    }
    move(direction, speed) {
        const imageSources = ['http://127.0.0.1:5500/assets/playerstanding.png', 'http://127.0.0.1:5500/assets/timmywalkingright1.png', 'http://127.0.0.1:5500/assets/timmywalkingright2.png', 'http://127.0.0.1:5500/assets/timmywalkingleft1.png', 'http://127.0.0.1:5500/assets/timmywalkingleft2.png', 'http://127.0.0.1:5500/assets/playerstandingleft.png'];
        if (direction === 66) {
            if (this.lookingRight) {
                this.image.src = imageSources[0];
            }
            else {
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
        }
        if (!(this.lookingRight) && direction !== 66) {
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
    collideWithAntagonist(antagonist) {
        return (this.posX < antagonist.getPosX() + antagonist.getWidth()
            && this.posX + this.getWidth() > antagonist.getPosX()
            && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
            && this.getHeight() + this.posY > antagonist.getPosY());
    }
    moveUp(elapsed) {
        this.posY -= elapsed * 0.5;
    }
    moveDown(elapsed) {
        this.posY += elapsed * 0.5;
    }
    moveLeft(elapsed) {
        this.lookingRight = false;
        this.posX -= elapsed * 0.5;
    }
    moveRight(elapsed) {
        this.lookingRight = true;
        this.posX += elapsed * 0.5;
    }
    cutsceneMovement(elapsed) { }
    isCollidingAD(ad) { return null; }
    isCollidingHeart(heartpowerup) { return null; }
    isCollidingBullet(bullet) { return null; }
    moveAway(speedX, speedY) { }
    changePositionX() { }
}
//# sourceMappingURL=Player.js.map