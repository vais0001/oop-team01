import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
export default class CursorBullet extends Drawable {
    constructor(startX, startY) {
        super();
        this.posX = startX;
        this.posY = startY;
        this.image = CanvasUtil.loadNewImage('../../placeholders/cursor.png');
    }
    update(elapsed) {
        this.posX -= elapsed * 1.75;
    }
    isCollidingAD(ad) {
        return (this.posX < ad.getPosX() + ad.getWidth()
            && this.posX + this.getWidth() > ad.getPosX()
            && this.getPosY() < ad.getPosY() + ad.getHeight()
            && this.getHeight() + this.posY > ad.getPosY());
    }
}
//# sourceMappingURL=CursorBullet.js.map