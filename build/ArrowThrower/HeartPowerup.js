import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class HeartPowerup extends Drawable {
    constructor() {
        super();
        this.image = CanvasUtil.loadNewImage('./placeholders/heart.png');
        this.posX = this.dimensionsX;
        this.posY = (Math.random() * ((this.dimensionsY + this.backgroundHeight - 350) - this.dimensionsY + 100) + this.dimensionsY + 100);
    }
    update(elapsed) {
        this.posX += elapsed * 0.5;
    }
}
//# sourceMappingURL=HeartPowerup.js.map