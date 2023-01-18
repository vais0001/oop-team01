import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class Webpage extends Scene {
    newLevel;
    downloading;
    loadingBar;
    downloadedTime;
    flickeringTime;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasUtil.loadNewImage('./assets/internet_browser.png');
        this.newLevel = false;
        this.downloading = false;
        this.loadingBar = 0;
        this.downloadedTime = 1700;
        this.flickeringTime = 0;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.downloading = true;
        }
    }
    update(elapsed) {
        this.flickeringTime -= elapsed;
        if (this.flickeringTime < -200) {
            this.flickeringTime = 0;
        }
        if (this.downloading) {
            this.loadingBar += elapsed * 0.1;
        }
        if (this.loadingBar > 300) {
            this.loadingBar = 301;
            this.downloadedTime -= elapsed;
            if (this.downloadedTime <= 0) {
                this.newLevel = true;
            }
        }
        if (this.newLevel === true) {
            return new Bedroom(0, 0, 1);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        if (this.flickeringTime < -100) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 250, this.dimensionsY + 400, 270, 250, 'white');
        }
        if (!(this.downloading)) {
            CanvasUtil.writeTextToCanvas(canvas, 'Press', canvas.width / 2, this.dimensionsY + 400, 'center', 'Kongtext', 25, 'black');
            CanvasUtil.writeTextToCanvas(canvas, '[SPACE]', canvas.width / 2, this.dimensionsY + 440, 'center', 'Kongtext', 25, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'To Download!', canvas.width / 2, this.dimensionsY + 480, 'center', 'Kongtext', 25, 'black');
        }
        if (this.downloading && this.loadingBar < 300) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'DOWNLOADING', canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'black');
            CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
            CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
        }
        if (this.loadingBar > 300) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'DOWNLOADED', canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'red');
            CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
            CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
        }
    }
}
//# sourceMappingURL=Webpage.js.map