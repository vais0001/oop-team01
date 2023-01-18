import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
export default class ArrowThrowerComputer extends Drawable {
    constructor() {
        super();
        this.image = CanvasUtil.loadNewImage('../../placeholders/kompas.png');
        this.posX = this.dimensionsX + this.backgroundWidth;
        this.posY = this.dimensionsY + this.backgroundHeight / 2;
    }
}
//# sourceMappingURL=Computer.js.map