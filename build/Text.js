import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import Locale from './Locale.js';
export default class Text extends Drawable {
    locale;
    constructor(dutch) {
        super();
        if (dutch === true) {
            this.locale = new Locale('nl');
        }
        else {
            this.locale = new Locale('');
        }
    }
    textOne(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Pffff, what a terrible sleep I had...'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textTwo(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Let me grab my phone and'), this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('check out the latest game releases.'), this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textThree(canvas, image) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Timmy looks at his phone.'), this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('His favourite game is out, but because of'), this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('inflation, the game is expensive'), this.dimensionsX + 730, this.dimensionsY + 690, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    }
    textFour(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('YES! Finally, it is released!'), this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('But oh no, the price is too high.'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('My parents will not'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('buy it for me unless I get high grades...'), this.dimensionsX + 740, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textFive(canvas, image) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Timmy browses on forums to see'), this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('how to access this game for free.'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('He comes across a site which'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('promises a safe and free download.'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
    }
    textSix(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You fell for my trap!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    textSeven(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Now you must take'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('responsibility for your actions…'), this.dimensionsX + 740, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 470, this.dimensionsY + 645);
    }
    computerPrompt(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Press [SPACE] to open computer'), this.dimensionsX + 50, this.dimensionsY + 740, 'left', 'DotGothic16', 40, 'white');
    }
}
//# sourceMappingURL=Text.js.map