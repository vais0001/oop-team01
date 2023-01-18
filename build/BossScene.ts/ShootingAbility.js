import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
export default class ShootingAbility extends Drawable {
    direction;
    speed;
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
        this.direction = direction;
        if (speed > 0) {
            this.speed = speed;
        }
        else
            this.speed = Math.random();
    }
    update(elapsed) {
        let randomDecimal = Math.random();
        if (this.direction === 5) {
            this.posX -= Math.random() * elapsed;
            this.posY += this.speed * elapsed;
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