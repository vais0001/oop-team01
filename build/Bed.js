import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class Bed extends Drawable {
    constructor() {
        super();
        this.posX = this.dimensionsX + 31;
        this.posY = this.dimensionsY + 210;
        this.image = CanvasUtil.loadNewImage('./assets/bed.png');
    }
}
//# sourceMappingURL=Bed.js.map