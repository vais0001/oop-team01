import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class Player extends Drawable {
    constructor(maxX, maxY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/playerstandingleft.png');
        this.posX = maxX - 50;
        this.posY = maxY - 200;
    }
    moveUp(elapsed) {
        if (this.posY > this.dimensionsY - 130) {
            this.posY -= elapsed * 0.5;
        }
    }
    moveDown(elapsed) {
        if (this.posY < this.dimensionsY + this.backgroundHeight - 140) {
            this.posY += elapsed * 0.5;
        }
    }
    cutsceneMovement(elapsed) {
        this.posY += elapsed * 0.2;
        this.posX += elapsed * 0.5;
    }
    isCollidingAD(ad) {
        return (this.posX < ad.getPosX() + ad.getWidth()
            && this.posX + this.getWidth() > ad.getPosX()
            && this.getPosY() < ad.getPosY() + ad.getHeight()
            && this.getHeight() + this.posY > ad.getPosY());
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