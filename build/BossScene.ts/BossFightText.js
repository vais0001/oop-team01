import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';
import Locale from '../Locale.js';
export default class BossFightText extends Drawable {
    locale;
    constructor(dutch) {
        super();
        if (dutch === true) {
            this.locale = new Locale('nl');
        }
        else {
            this.locale = new Locale('en-US');
        }
    }
    textOne(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You defended against all my minions….'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textTwo(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You ended up in this nightmare'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('because you thought you could cheat'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('the system and get a free game'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textThree(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('If something on the internet seems'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('too good to be true,'), this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('then it is'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textFour(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('But enough talking'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textFive(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You will have to face me now!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textSix(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('The magic sword is broken!'), this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You got a homing-delete-button in return!'), this.dimensionsX + 720, this.dimensionsY + 700, 'center', 'DotGothic16', 20, 'black');
    }
    textEleven(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('those attacks are weak'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textTen(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You think you are strong enough?'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textNine(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Viruses do not go away that easily'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textEight(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I will not give up....'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textSeven(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Enough!!!!!'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textTwelve(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('I… Can not defeat you….'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textThirteen(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('You are an unstoppable force'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
    textFourteen(canvas, image, talker) {
        CanvasUtil.drawImage(canvas, image, this.dimensionsX + 450, this.dimensionsY + 580);
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('Go back to your own world!!!'), this.dimensionsX + 740, this.dimensionsY + 660, 'center', 'DotGothic16', 20, 'black');
        CanvasUtil.writeTextToCanvas(canvas, this.locale.trans('[SPACE] next'), this.dimensionsX + 870, this.dimensionsY + 730, 'center', 'DotGothic16', 16, 'black');
        CanvasUtil.drawImage(canvas, talker, this.dimensionsX + 465, this.dimensionsY + 640);
    }
}
//# sourceMappingURL=BossFightText.js.map