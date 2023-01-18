import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
export default class Lives extends Drawable {
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./placeholders/heart.png');
        this.posX = posX;
        this.posY = posY;
    }
}
//# sourceMappingURL=Lives.js.map