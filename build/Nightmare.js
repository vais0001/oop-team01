import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import StartScene from './StartScene.js';
import MouseListener from './MouseListener.js';
export default class Nightmare extends Game {
    canvas;
    keyListener;
    mouseListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.mouseListener = new MouseListener(this.canvas, false);
        this.currentScene = new StartScene(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener, this.mouseListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null)
            this.currentScene = nextScene;
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=Nightmare.js.map