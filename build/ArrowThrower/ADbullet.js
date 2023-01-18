import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
export default class ADbullet extends Drawable {
    constructor(startX, startY) {
        super();
        this.image = CanvasUtil.loadNewImage('../../placeholders/cursor_00000.png');
        this.posX = startX;
        this.posY = startY - this.image.height / 2;
    }
    update(player) {
        const distanceX = player.getPosX() - this.getPosX();
        const distanceY = player.getPosY() - this.getPosY();
        const slope = distanceY / distanceX;
        if (this.posX < player.getPosX() - 300) {
            this.posX += Math.cos(slope) * 0.2;
            this.posY += Math.sin(slope) * 0.2;
        }
        else {
            this.posX += 1;
        }
    }
}
//# sourceMappingURL=ADbullet.js.map