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
    update() {
        if (this.continue) {
            return new StartScene(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.writeTextToCanvas(canvas, 'BRICK LAYERS', canvas.width / 2, canvas.height / 2 - 100, 'center', 'DotGothic16', 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Netas Neverauskas', canvas.width / 2, canvas.height / 2 - 50, 'center', 'DotGothic16', 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Ertugrul Aktas', canvas.width / 2, canvas.height / 2, 'center', 'DotGothic16', 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Dominykas Vaisnoras', canvas.width / 2, canvas.height / 2 + 50, 'center', 'DotGothic16', 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Tomas Tomkevicius', canvas.width / 2, canvas.height / 2 + 100, 'center', 'DotGothic16', 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to go back', canvas.width / 2, canvas.height / 2 + 270, 'center', 'DotGothic16', 30, 'black');
    }
}
//# sourceMappingURL=CreditScene.js.map