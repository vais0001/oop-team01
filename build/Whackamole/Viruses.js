import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
export default class Viruses extends Drawable {
    value;
    timeToDissapear;
    isDead;
    constructor(value) {
        super();
        this.timeToDissapear = 2500;
        this.isDead = false;
        if (value === 0)
            this.value = Math.floor(Math.random() * 9) + 1;
        if (value > 0)
            this.value = value;
        this.image = CanvasUtil.loadNewImage('./assets/wormsmall.png');
        if (this.value === 1) {
            this.posX = 265 + this.dimensionsX;
            this.posY = 530 + this.dimensionsY;
        }
        else if (this.value === 2) {
            this.posX = 595 + this.dimensionsX;
            this.posY = 530 + this.dimensionsY;
        }
        else if (this.value === 3) {
            this.posX = 915 + this.dimensionsX;
            this.posY = 530 + this.dimensionsY;
        }
        else if (this.value === 4) {
            this.posX = 265 + this.dimensionsX;
            this.posY = 360 + this.dimensionsY;
        }
        else if (this.value === 5) {
            this.posX = 595 + this.dimensionsX;
            this.posY = 360 + this.dimensionsY;
        }
        else if (this.value === 6) {
            this.posX = 915 + this.dimensionsX;
            this.posY = 360 + this.dimensionsY;
        }
        else if (this.value === 7) {
            this.posX = 265 + this.dimensionsX;
            this.posY = 190 + this.dimensionsY;
        }
        else if (this.value === 8) {
            this.posX = 595 + this.dimensionsX;
            this.posY = 190 + this.dimensionsY;
        }
        else if (this.value === 9) {
            this.posX = 915 + this.dimensionsX;
            this.posY = 190 + this.dimensionsY;
        }
    }
    update(elapsed) {
        this.timeToDissapear -= elapsed;
        if (this.timeToDissapear < 2000) {
            if (this.posY === 620 + this.dimensionsY)
                this.posY = 520 + this.dimensionsY;
            if (this.posY === 430 + this.dimensionsY)
                this.posY = 330 + this.dimensionsY;
            if (this.posY === 270 + this.dimensionsY)
                this.posY = 170 + this.dimensionsY;
            this.image = CanvasUtil.loadNewImage('./assets/wormbig.png');
        }
        if (this.timeToDissapear <= 0) {
            this.isDead = true;
        }
        return null;
    }
    getValue() {
        return this.value;
    }
    setvalue(value) {
        this.value = value;
    }
    mouseInRange(mouseCoordinates) {
        return (this.posX < mouseCoordinates.x
            && this.posX + this.getWidth() > mouseCoordinates.x
            && this.getPosY() < mouseCoordinates.y
            && this.getHeight() + this.posY > mouseCoordinates.y);
    }
    subtractPosX() {
        if (this.posX === 265 + this.dimensionsX) {
            this.posX = 225 + this.dimensionsX;
        }
        if (this.posX === 595 + this.dimensionsX) {
            this.posX = 555 + this.dimensionsX;
        }
        if (this.posX === 915 + this.dimensionsX) {
            this.posX = 875 + this.dimensionsX;
        }
    }
    isItDead() {
        return this.isDead;
    }
}
//# sourceMappingURL=Viruses.js.map