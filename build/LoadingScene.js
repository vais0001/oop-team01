import Bedroom from "./Bedroom.js";
import CanvasUtil from "./CanvasUtil.js";
import Scene from "./Scene.js";
export default class LoadingScene extends Scene {
    loadingBar;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.loadingBar = 0;
        this.image = CanvasUtil.loadNewImage('./placeholders/loading_screen_controls.png');
    }
    processInput(keyListener) {
        return null;
    }
    update(elapsed) {
        this.loadingBar += elapsed * 2.15;
        if (this.loadingBar > 300)
            return new Bedroom(this.maxX, this.maxY, 0);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, 50, -20);
        CanvasUtil.drawRectangle(canvas, 100, 100, 300, 30, 'white');
        CanvasUtil.fillRectangle(canvas, 100, 100, this.loadingBar, 30, 'white');
    }
}
//# sourceMappingURL=LoadingScene.js.map