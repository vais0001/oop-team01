import CanvasUtil from './CanvasUtil.js';
import LoadingScene from './LoadingScenes/LoadingScene.js';
import Scene from './Scene.js';
import CreditScene from './CreditScene.js';
export default class StartScene extends Scene {
    starting;
    creditscene;
    button;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasUtil.loadNewImage('./placeholders/start800.png');
        this.starting = false;
        this.creditscene = false;
        this.button = CanvasUtil.loadNewImage('./placeholders/start_button.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('KeyS')) {
            this.starting = true;
        }
        if (keyListener.keyPressed('KeyC')) {
            this.creditscene = true;
        }
    }
    update() {
        if (this.starting)
            return new LoadingScene(this.maxX, this.maxY);
        if (this.creditscene)
            return new CreditScene(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawImage(canvas, this.button, canvas.width / 2 - 300, canvas.height / 2 - 100);
        CanvasUtil.drawImage(canvas, this.button, canvas.width / 2 - 300, canvas.height / 2 + 30);
        CanvasUtil.writeTextToCanvas(canvas, '[S] to start', canvas.width / 2, canvas.height / 2 - 35, 'center', 'Kongtext', 35, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[C] for Credits', canvas.width / 2, canvas.height / 2 + 95, 'center', 'Kongtext', 35, 'black');
    }
}
//# sourceMappingURL=StartScene.js.map