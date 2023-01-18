import CanvasUtil from '../CanvasUtil.js';
import Scene from '../Scene.js';
import Whackamole from '../Whackamole/Whackamole.js';
export default class LoadingSceneWM extends Scene {
    loadingBar;
    realisticPause;
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.loadingBar = 0;
        this.image = CanvasUtil.loadNewImage('./placeholders/loading_screen_controls.png');
        this.realisticPause = 50;
        this.continue = false;
    }
    processInput(keyListener) {
        if (this.loadingBar === 1220 && keyListener.keyPressed('Space')) {
            this.continue = true;
        }
        return null;
    }
    update(elapsed) {
        const randomPause = Math.floor(Math.random() * 1220) + 100;
        if (this.realisticPause === 50 || this.realisticPause < 0) {
            this.loadingBar += elapsed * 5;
        }
        if (this.loadingBar > randomPause) {
            this.realisticPause -= elapsed;
            console.log(this.realisticPause);
        }
        if (this.loadingBar > 1220) {
            this.loadingBar = 1220;
        }
        if (this.continue)
            return new Whackamole(window.innerWidth, window.innerHeight);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawRectangle(canvas, this.dimensionsX + 100, this.dimensionsY + 100, 1220, 30, 'white');
        if (this.loadingBar === 1220) {
            CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to continue', canvas.width / 2, this.dimensionsY + 600, 'center', 'Arial', 40, 'White');
        }
        CanvasUtil.fillRectangle(canvas, this.dimensionsX + 100, this.dimensionsY + 100, this.loadingBar, 30, 'white');
    }
}
//# sourceMappingURL=LoadingSceneWM.js.map