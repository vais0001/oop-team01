import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class ShootingAbility extends Drawable {
    direction;
    speed;
    ySpeed;
    xSpeed;
    constructor(startX, startY, direction, speed, picture) {
        super();
        if (picture === 0)
            this.image = CanvasUtil.loadNewImage('./assets/littlebug.png');
        if (picture === 1)
            this.image = CanvasUtil.loadNewImage('./assets/wormbig.png');
        if (picture === 2)
            this.image = CanvasUtil.loadNewImage('./assets/digitalvirus.png');
        this.posX = startX;
        this.posY = startY;
        this.ySpeed = Math.random() * 0.5 - 0.25;
        this.xSpeed = Math.random() * 0.5;
        this.direction = direction;
        if (speed > 0) {
            this.speed = speed;
        }
        else
            this.speed = Math.random();
    }
    update(elapsed) {
        if (this.direction === 5) {
            this.posX -= this.xSpeed;
            this.posY += Math.random() * 0.2;
        }
        if (this.direction === 7) {
            this.posX -= this.xSpeed;
            this.posY += Math.random() * 0.5;
        }
        if (this.direction === 6) {
            this.posX += this.xSpeed;
            this.posY -= this.ySpeed;
        }
        if (this.direction === 0) {
            this.posX -= this.speed * elapsed;
        }
        if (this.direction === 1) {
            this.posY -= this.speed * elapsed;
        }
        if (this.direction === 2) {
            this.posX += this.speed * elapsed;
        }
        if (this.direction === 3) {
            this.posY += this.speed * elapsed;
        }
    }
}
//# sourceMappingURL=ShootingAbility.js.map