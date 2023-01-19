import BedroomEnd from './BedroomEnd.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class WebpageEnd extends Scene {
    newLevel;
    downloading;
    loadingBar;
    downloadedTime;
    randomColor;
    nextColor;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY);
        this.lang = lang;
        this.image = CanvasUtil.loadNewImage('./assets/internet_browser_end.png');
        this.newLevel = false;
        this.downloading = false;
        this.loadingBar = 0;
        this.downloadedTime = 1700;
        this.nextColor = 200;
        this.randomColor = '';
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.downloading = true;
        }
    }
    update(elapsed) {
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        this.nextColor -= elapsed;
        if (this.nextColor < -100) {
            this.randomColor = getRandomColor();
            this.nextColor = 200;
        }
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
        CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 160, this.dimensionsY + 630, this.loadingBar, 30, 'green');
        CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 160, this.dimensionsY + 630, 301, 30, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Congrats!', canvas.width / 2, this.dimensionsY + 280, 'center', 'Kongtext', 40, this.randomColor);
        CanvasUtil.writeTextToCanvas(canvas, 'You escaped', canvas.width / 2, this.dimensionsY + 360, 'center', 'Kongtext', 46, '#13005A');
        CanvasUtil.writeTextToCanvas(canvas, 'Trojan Street!', canvas.width / 2, this.dimensionsY + 420, 'center', 'Kongtext', 46, '#13005A');
        CanvasUtil.writeTextToCanvas(canvas, 'You escaped', canvas.width / 2, this.dimensionsY + 360, 'center', 'Kongtext', 45, '#03C988');
        CanvasUtil.writeTextToCanvas(canvas, 'Trojan Street!', canvas.width / 2, this.dimensionsY + 420, 'center', 'Kongtext', 45, '#03C988');
        if (!(this.downloading)) {
            CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] To Continue', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 30, 'black');
        }
        if (this.downloading && this.loadingBar < 300) {
            CanvasUtil.writeTextToCanvas(canvas, 'loading...', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 30, 'black');
        }
        if (this.loadingBar > 300) {
            CanvasUtil.writeTextToCanvas(canvas, 'LOADED', canvas.width / 2 - 10, this.dimensionsY + 600, 'center', 'Kongtext', 30, 'red');
        }
    }
}
//# sourceMappingURL=WebpageEnd.js.map