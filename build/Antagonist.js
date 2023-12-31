import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class Antagonist extends Drawable {
    cutsceneMoveTimer;
    constructor(posX, posY) {
        super();
        this.posX = posX + this.dimensionsX;
        this.posY = posY + this.dimensionsY;
        this.image = CanvasUtil.loadNewImage('./assets/trojanfinalright.png');
        this.cutsceneMoveTimer = 5000;
    }
    cutsceneMovement(elapsed) {
        this.cutsceneMoveTimer -= elapsed;
        if (this.cutsceneMoveTimer < 0) {
            this.posX -= 0;
        }
        else if (this.cutsceneMoveTimer < 2000) {
            this.posX -= elapsed * 0.3;
            this.posY -= elapsed * 0.1;
        }
        else if (this.cutsceneMoveTimer < 5000) {
            this.posY += elapsed * 0.2;
            this.posX += elapsed * 0.5;
        }
    }
    moveToPlayer(player, speed) {
        const distanceX = player.getPosX() - this.getPosX();
        const distanceY = player.getPosY() - this.getPosY();
        const slope = distanceY / distanceX;
        this.posX += Math.cos(slope) * speed;
        this.posY += Math.sin(slope) * speed;
    }
    cutsceneMovementAway(speedX, speedY) {
        this.posX += speedX;
        this.posY += speedY;
    }
    getCutsceneMoveTimer() {
        return this.cutsceneMoveTimer;
    }
    changeImage(source) {
        this.image = CanvasUtil.loadNewImage(source);
    }
    collidesWithBullet(bullet) {
        return (this.posX < bullet.getPosX() + bullet.getWidth()
            && this.posX + this.getWidth() > bullet.getPosX()
            && this.getPosY() < bullet.getPosY() + bullet.getHeight()
            && this.getHeight() + this.posY > bullet.getPosY());
    }
}
//# sourceMappingURL=Antagonist.js.map