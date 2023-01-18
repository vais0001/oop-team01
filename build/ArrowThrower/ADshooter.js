import CanvasUtil from "../CanvasUtil";
import Drawable from "../Drawable.js";
export default class ADshooter extends Drawable {
    constructor(startX, startY) {
        super();
        this.image = CanvasUtil.loadNewImage('../../placeholders/cursor_00000.png');
        this.posX = startX;
        this.posY = startY;
    }
    update(elapsed) {
        this.posX += elapsed * 0.2;
    }
}
//# sourceMappingURL=ADshooter.js.map