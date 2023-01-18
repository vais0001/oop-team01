import CanvasUtil from "./CanvasUtil.js";
export default class Drawable {
    image;
    posX;
    posY;
    dimensionsX;
    dimensionsY;
    backgroundHeight;
    backgroundWidth;
    constructor() {
        this.dimensionsX = (window.innerWidth - 1422) / 2;
        this.dimensionsY = (window.innerHeight - 800) / 2;
        this.backgroundHeight = 800;
        this.backgroundWidth = 1422;
    }
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
    setImage(image) {
        this.image = CanvasUtil.loadNewImage(image);
    }
    minusPosY(posY) {
        this.posY -= posY;
    }
    addOrSubPosX(posX, addOrSub) {
        if (addOrSub === 0) {
            this.posX += posX;
        }
        if (addOrSub === 1) {
            this.posX -= posX;
        }
    }
    addOrSubPosY(posY, addOrSub) {
        if (addOrSub === 0) {
            this.posY += posY;
        }
        if (addOrSub === 1) {
            this.posY -= posY;
        }
    }
}
//# sourceMappingURL=Drawable.js.map