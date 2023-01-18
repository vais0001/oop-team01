import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";
export default class Text extends Drawable {
    constructor() {
        super();
    }
    textOne(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'Pffff, what a terrible sleep I had.', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textTwo(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'Let me grab my phone and', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'check out the latest game releases.', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textThree(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'Timmy looks at his phone.', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'His favourite game is out, but because of', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'inflation, the game is expensive', this.dimensionsX + 730, this.dimensionsY + 690, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    }
    textFour(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'YES! Finally, it is released!', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'But oh no, the price is too high.', this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'My parents will not', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'buy it for me unless I get high grades...', this.dimensionsX + 740, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textFive(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'Timmy browses on forums to see', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'how to access this game for free.', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'He comes across a site which', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'promises a safe and free download.', this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    }
    textSix(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'You fell for my trap!', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textSeven(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, 'Now you must take', this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'responsibility for your actions…', this.dimensionsX + 740, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[SPACE] next', this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    computerPrompt(canvas, image) {
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 50, this.dimensionsY + 740, 'left', 'DotGothic16', 40, 'white');
    }
}
//# sourceMappingURL=Text.js.map