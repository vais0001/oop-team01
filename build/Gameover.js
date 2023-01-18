import CanvasUtil from "./CanvasUtil.js";
import Scene from "./Scene.js";
import StartScene from "./StartScene.js";
export default class Gameover extends Scene {
    continue;
    timeToContinue;
    timeToRemove;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasUtil.loadNewImage('./placeholders/gameover.png');
        this.continue = false;
        this.timeToContinue = 1000;
        this.timeToRemove = 700;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('Space') && this.timeToContinue <= 0) {
            this.continue = true;
        }
    }
    update(elapsed) {
        this.timeToContinue -= elapsed;
        if (this.timeToContinue <= 0) {
            this.timeToRemove -= elapsed;
            if (this.timeToRemove < -300) {
                this.timeToRemove = 900;
            }
        }
        if (this.continue) {
            return new StartScene(window.innerWidth, window.innerHeight);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, '#0078d7');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        if (!(this.timeToContinue <= 0)) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 665, 1000, 60, '#0078d7');
        }
        if (this.timeToRemove < 0 && this.timeToContinue <= 0) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 665, 1000, 60, '#0078d7');
        }
    }
}
//# sourceMappingURL=Gameover.js.map