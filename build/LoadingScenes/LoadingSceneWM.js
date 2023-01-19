import Whackamole from '../Whackamole/Whackamole.js';
import CanvasUtil from '../CanvasUtil.js';
import Scene from '../Scene.js';
export default class LoadingSceneWM extends Scene {
    loadingBar;
    realisticPause;
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.loadingBar = 0;
        this.image = CanvasUtil.loadNewImage('./assets/whackaworm_loading.png');
        this.realisticPause = 50;
        this.continue = false;
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
            this.loadingBar += elapsed * 0.3;
        }
        if (this.loadingBar > randomPause) {
            this.realisticPause -= elapsed;
        }
        if (this.loadingBar > 1100) {
            this.loadingBar = 1100;
        }
        if (this.continue)
            return new Whackamole(window.innerWidth, window.innerHeight);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, 1100, 30, 'white');
        if (this.loadingBar === 1100) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 450, this.dimensionsY + 530, 520, 120, 'black');
            CanvasUtil.writeTextToCanvas(canvas, 'Press         to continue', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'White');
            CanvasUtil.writeTextToCanvas(canvas, '      [SPACE]            ', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'red');
        }
        CanvasUtil.fillRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, this.loadingBar, 30, 'white');
    }
}
//# sourceMappingURL=LoadingSceneWM.js.map