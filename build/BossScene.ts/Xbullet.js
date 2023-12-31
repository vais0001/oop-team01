import Drawable from '../Drawable.js';
import CanvasUtil from '../CanvasUtil.js';
export default class Xbullets extends Drawable {
    constructor(startX, startY) {
        super();
        this.posX = startX;
        this.posY = startY;
        this.image = CanvasUtil.loadNewImage('./assets/xbullet.png');
    }
    moveToAntagonist(antagonist, speed, side) {
        const distanceX = antagonist.getPosX() + antagonist.getWidth() / 2 - this.getPosX();
        const distanceY = antagonist.getPosY() + antagonist.getHeight() / 2 - this.getPosY();
        const slope = distanceY / distanceX;
        if (side === 0) {
            this.posX += Math.cos(slope) * speed;
            this.posY += Math.sin(slope) * speed;
        }
        else if (side === 1) {
            this.posX -= Math.cos(slope) * speed;
            this.posY -= Math.sin(slope) * speed;
        }
    }
}
//# sourceMappingURL=Xbullet.js.map