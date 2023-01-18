import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';
export default class CreditScene extends Scene {
    continue;
    constructor(MaxX, MaxY) {
        super(MaxX, MaxY);
        this.image = CanvasUtil.loadNewImage('./placeholders/credits.png');
        this.continue = false;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('Space')) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            return new StartScene(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to go back', canvas.width / 2 - 50, canvas.height / 2 + 270, 'center', 'Helvetica', 30, 'black');
    }
}
//# sourceMappingURL=CreditScene.js.map