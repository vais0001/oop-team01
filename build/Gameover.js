import CanvasUtil from './CanvasUtil.js';
import LoadingSceneAT from './LoadingScenes/LoadingSceneArrowThrower.js';
import LoadingSceneBF from './LoadingScenes/LoadingSceneBF.js';
import LoadingSceneWM from './LoadingScenes/LoadingSceneWM.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';
export default class Gameover extends Scene {
    continue;
    timeToContinue;
    timeToRemove;
    restartLevel;
    restartScene;
    constructor(maxX, maxY, scene, lang) {
        super(maxX, maxY);
        this.image = CanvasUtil.loadNewImage('./assets/gameover.png');
        this.continue = false;
        this.timeToContinue = 1000;
        this.timeToRemove = 700;
        this.restartLevel = false;
        this.restartScene = scene;
        this.lang = lang;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed('Space') && this.timeToContinue <= 0) {
            this.continue = true;
        }
        if (keyListener.keyPressed('KeyR') && this.timeToContinue <= 0) {
            this.restartLevel = true;
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
        if (this.restartLevel) {
            if (this.restartScene === 'arrow') {
                return new LoadingSceneAT(this.maxX, this.maxY, this.lang);
            }
            if (this.restartScene === 'whack') {
                return new LoadingSceneWM(window.innerWidth, window.innerHeight, this.lang);
            }
            if (this.restartScene === 'boss') {
                return new LoadingSceneBF(window.innerWidth, window.innerHeight, this.lang);
            }
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, '#0078d7');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        if (!(this.timeToContinue <= 0)) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 650, 1000, 110, '#0078d7');
        }
        if (this.timeToRemove < 0 && this.timeToContinue <= 0) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 650, 1000, 110, '#0078d7');
        }
    }
}
//# sourceMappingURL=Gameover.js.map