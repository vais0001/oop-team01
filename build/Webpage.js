import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Locale from './Locale.js';
import Scene from './Scene.js';
export default class Webpage extends Scene {
    newLevel;
    downloading;
    loadingBar;
    downloadedTime;
    flickeringTime;
    locale;
    click;
    virusDownloadSound;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY);
        this.lang = lang;
        this.image = CanvasUtil.loadNewImage('./assets/internet_browser.png');
        this.newLevel = false;
        this.downloading = false;
        this.loadingBar = 0;
        this.downloadedTime = 1700;
        this.flickeringTime = 0;
        this.click = new Audio('./assets/audio/mouseclick.mp3');
        this.virusDownloadSound = new Audio('./assets/audio/download.mp3');
        if (lang === true) {
            this.locale = new Locale('nl');
        }
        else {
            this.locale = new Locale('en-US');
        }
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.click.play();
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
            return new Bedroom(0, 0, 1, this.lang);
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
            CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Press'), canvas.width / 2, this.dimensionsY + 400, 'center', 'Kongtext', 25, 'black');
            CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE]'), canvas.width / 2, this.dimensionsY + 440, 'center', 'Kongtext', 25, 'green');
            CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('To Download!'), canvas.width / 2, this.dimensionsY + 480, 'center', 'Kongtext', 25, 'black');
        }
        if (this.downloading && this.loadingBar < 300) {
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white');
            CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('DOWNLOADING'), canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'black');
            CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
            CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
        }
        if (this.loadingBar > 300) {
            this.virusDownloadSound.play();
            CanvasUtil.fillRectangle(canvas, this.dimensionsX + 580, this.dimensionsY + 500, 260, 150, 'white');
            CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('DOWNLOADED'), canvas.width / 2, this.dimensionsY + 530, 'center', 'kongtext', 25, 'red');
            CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, this.loadingBar, 30, 'green');
            CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 150, this.dimensionsY + 550, 301, 30, 'black');
        }
    }
}
//# sourceMappingURL=Webpage.js.map