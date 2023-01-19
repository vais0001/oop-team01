import BedroomEnd from './BedroomEnd.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class WebpageEnd extends Scene {
    newLevel;
    downloading;
    loadingBar;
    downloadedTime;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY);
        this.lang = lang;
        this.image = CanvasUtil.loadNewImage('./placeholders/internet_browser.png');
        this.newLevel = false;
        this.downloading = false;
        this.loadingBar = 0;
        this.downloadedTime = 1700;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.downloading = true;
        }
    }
    update(elapsed) {
        if (this.downloading) {
            this.loadingBar += elapsed * 0.5;
        }
        if (this.loadingBar > 300) {
            this.loadingBar = 301;
            this.downloadedTime -= elapsed;
            if (this.downloadedTime <= 0) {
                this.newLevel = true;
            }
        }
        if (this.newLevel === true) {
            return new BedroomEnd(0, 0, 1, this.lang);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 160, this.dimensionsY + 650, 301, 30, 'white');
        CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 160, this.dimensionsY + 650, this.loadingBar, 30, 'green');
        if (!(this.downloading)) {
            CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] To Download The Game', canvas.width / 2, this.dimensionsY + 600, 'center', 'arial', 40, 'white');
        }
        if (this.downloading && this.loadingBar < 300) {
            CanvasUtil.writeTextToCanvas(canvas, 'DOWNLOADING', canvas.width / 2, this.dimensionsY + 600, 'center', 'arial', 40, 'white');
        }
        if (this.loadingBar > 300) {
            CanvasUtil.writeTextToCanvas(canvas, 'DOWNLOADED', canvas.width / 2, this.dimensionsY + 600, 'center', 'arial', 40, 'red');
        }
    }
}
//# sourceMappingURL=WebpageEnd.js.map