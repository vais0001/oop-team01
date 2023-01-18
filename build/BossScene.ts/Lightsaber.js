import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class Lightsaber extends Drawable {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/lightsaber.png');
    }
    changeImage(source) {
        this.image = CanvasUtil.loadNewImage(source);
    }
    update(elapsed, posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
    slashImage(side) {
        if (side === 0) {
            this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash.png');
        }
        if (side === 1) {
            this.image = CanvasUtil.loadNewImage('./assets/lightsaberslash1.png');
        }
    }
    collidesWithAntagonist(antagonist) {
        return (this.posX < antagonist.getPosX() + antagonist.getWidth()
            && this.posX + this.getWidth() > antagonist.getPosX()
            && this.getPosY() < antagonist.getPosY() + antagonist.getHeight()
            && this.getHeight() + this.posY > antagonist.getPosY());
    }
}
//# sourceMappingURL=Lightsaber.js.map