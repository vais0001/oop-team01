import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import LoadingScene from './LoadingScenes/LoadingScene.js';
import Scene from './Scene.js';
import CreditScene from './CreditScene.js';
import Locale from './Locale.js';
export default class StartScene extends Scene {
    starting;
    creditscene;
    button;
    locale;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.lang = false;
        this.image = CanvasUtil.loadNewImage('./placeholders/start800.png');
        this.starting = false;
        this.creditscene = false;
        this.button = CanvasUtil.loadNewImage('./placeholders/start_button.png');
        this.locale = new Locale('en-US');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('KeyS')) {
            this.starting = true;
        }
        if (keyListener.keyPressed('KeyC')) {
            this.creditscene = true;
        }
        if (keyListener.keyPressed(KeyListener.KEY_T)) {
            this.lang = !this.lang;
            if (this.lang === true) {
                this.locale = new Locale('nl');
            }
            else {
                this.locale = new Locale('en-US');
            }
        }
    }
    update() {
        if (this.starting)
            return new LoadingScene(this.maxX, this.maxY, this.lang);
        if (this.creditscene)
            return new CreditScene(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawImage(canvas, this.button, canvas.width / 2 - 300, canvas.height / 2 - 100);
        CanvasUtil.drawImage(canvas, this.button, canvas.width / 2 - 300, canvas.height / 2 + 30);
        CanvasUtil.writeTextToCanvas(canvas, '[T]', this.dimensionsX + 1320, this.dimensionsY + 80, 'center', 'Kongtext', 20, 'white');
        if (!this.lang) {
            CanvasUtil.writeTextToCanvas(canvas, 'EN', this.dimensionsX + 1350, this.dimensionsY + 50, 'center', 'Kongtext', 20, '#59CE8F');
            CanvasUtil.writeTextToCanvas(canvas, 'NL', this.dimensionsX + 1290, this.dimensionsY + 50, 'center', 'Kongtext', 20, 'white');
        }
        else {
            CanvasUtil.writeTextToCanvas(canvas, 'EN', this.dimensionsX + 1350, this.dimensionsY + 50, 'center', 'Kongtext', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'NL', this.dimensionsX + 1290, this.dimensionsY + 50, 'center', 'Kongtext', 20, '#59CE8F');
        }
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[S] to start'), canvas.width / 2, canvas.height / 2 - 35, 'center', 'Kongtext', 35, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[C] for Credits'), canvas.width / 2, canvas.height / 2 + 95, 'center', 'Kongtext', 35, 'black');
    }
}
//# sourceMappingURL=StartScene.js.map