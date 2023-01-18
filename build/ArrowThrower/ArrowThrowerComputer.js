import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class ArrowThrowerComputer extends Drawable {
    constructor() {
        super();
        this.image = CanvasUtil.loadNewImage('./placeholders/kompas.png');
        this.posX = this.dimensionsX + this.backgroundWidth - this.image.width - 20;
        this.posY = this.dimensionsY + this.backgroundHeight / 2 - this.image.height / 2;
    }
    isCollidingAD(ad) {
        return (this.posX < ad.getPosX() + ad.getWidth()
            && this.posX + this.getWidth() > ad.getPosX()
            && this.getPosY() < ad.getPosY() + ad.getHeight()
            && this.getHeight() + this.posY > ad.getPosY());
    }
}
//# sourceMappingURL=ArrowThrowerComputer.js.map