import Bedroom from '../Bedroom.js';
import CanvasUtil from '../CanvasUtil.js';
import Scene from '../Scene.js';
export default class LoadingScene extends Scene {
    loadingBar;
    realisticPause;
    continue;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY);
        this.loadingBar = 0;
        this.image = CanvasUtil.loadNewImage('./assets/bedroomloading.png');
        this.realisticPause = 50;
        this.continue = false;
        this.lang = lang;
        console.log(this.lang);
    }
    processInput(keyListener) {
        if (this.loadingBar === 1100 && keyListener.keyPressed('Space')) {
            this.continue = true;
        }
        return null;
    }
    update(elapsed) {
        const randomPause = Math.floor(Math.random() * 1220) + 100;
        if (this.realisticPause === 50 || this.realisticPause < 0) {
            this.loadingBar += elapsed * 8;
        }
        if (this.loadingBar > randomPause) {
            this.realisticPause -= elapsed;
        }
        if (this.loadingBar > 1100) {
            this.loadingBar = 1100;
        }
        if (this.continue)
            return new Bedroom(this.maxX, this.maxY, 0, this.lang);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, 1100, 30, 'white');
        if (this.loadingBar === 1100) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 450, this.dimensionsY + 550, 520, 90, 'black');
            CanvasUtil.writeTextToCanvas(canvas, 'Press         to continue', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'White');
            CanvasUtil.writeTextToCanvas(canvas, '      [SPACE]            ', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'red');
        }
        CanvasUtil.fillRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, this.loadingBar, 30, 'white');
    }
}
//# sourceMappingURL=LoadingScene.js.map