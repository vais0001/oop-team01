import Antagonist from './Antagonist.js';
import Bed from './Bed.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';
import BedroomEndText from './BedroomEndText.js';
import CreditScene from './CreditScene.js';
import WebpageEnd from './WebpageEnd.js';
export default class BedroomEnd extends Scene {
    player;
    computer;
    bed;
    popUp;
    webpageScene;
    level1;
    antagonist;
    scene;
    timeToText;
    nextText;
    playerHead;
    trojanHead;
    bedroomEndText;
    buttonsPressed;
    moveUp;
    moveRight;
    moveDown;
    moveLeft;
    circleRadius;
    constructor(maxX, maxY, level, lang) {
        super(maxX, maxY);
        this.lang = lang;
        this.image = CanvasUtil.loadNewImage('./assets/timmyroom3.png');
        this.circleRadius = 1400;
        if (level === 1) {
            this.antagonist = new Antagonist(250, 250);
            this.level1 = true;
            this.scene = 1;
            this.image = CanvasUtil.loadNewImage('./assets/timmyroomred.png');
        }
        if (!this.level1 === true)
            this.scene = 0;
        if (!this.level1) {
            this.player = new Player(this.dimensionsX + 80, this.dimensionsY + 230);
        }
        if (this.level1 === true) {
            this.player = new Player(this.dimensionsX + 1050, this.dimensionsY + 150);
        }
        this.computer = new Computer();
        this.bed = new Bed();
        this.popUp = CanvasUtil.loadNewImage('./placeholders/exclamation_mark.png');
        this.webpageScene = false;
        this.image1 = CanvasUtil.loadNewImage('./placeholders/bubble.png');
        this.playerHead = CanvasUtil.loadNewImage('./assets/TimmyHead.png');
        this.trojanHead = CanvasUtil.loadNewImage('./assets/trojanicon.png');
        if (!this.level1) {
            this.timeToText = 1000;
        }
        else {
            this.timeToText = 1500;
        }
        this.nextText = 0;
        this.bedroomEndText = new BedroomEndText(this.lang);
        this.buttonsPressed = 0;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
    }
    processInput(keyListener) {
        if (!this.level1 && this.nextText > 6) {
            this.buttonsPressed = 0;
            if (this.player.getPosX() > this.dimensionsX + 20
                && !(this.player.collidingBed(this.bed))) {
                if ((keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA'))
                    && !(keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD'))) {
                    this.player.move(0, 150);
                    this.buttonsPressed += 1;
                    this.moveLeft = true;
                }
                else {
                    this.moveLeft = false;
                }
            }
            else {
                this.moveLeft = false;
            }
            if (this.player.getPosY() > this.dimensionsY + 120
                && !(this.player.collidingComputer(this.computer))
                && !(this.player.collidingBed(this.bed))) {
                if ((keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW'))
                    && !(keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS'))) {
                    this.player.move(1, 150);
                    this.buttonsPressed += 1;
                    this.moveUp = true;
                }
                else {
                    this.moveUp = false;
                }
            }
            else {
                this.moveUp = false;
            }
            if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 100
                && !(this.player.collidingComputer(this.computer))) {
                if ((keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD'))
                    && !(keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA'))) {
                    this.player.move(2, 150);
                    this.buttonsPressed += 1;
                    this.moveRight = true;
                }
                else {
                    this.moveRight = false;
                }
            }
            else {
                this.moveRight = false;
            }
            if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 300) {
                if ((keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS'))
                    && !(keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW'))) {
                    this.buttonsPressed += 1;
                    this.player.move(3, 150);
                    this.moveDown = true;
                }
                else {
                    this.moveDown = false;
                }
            }
            else {
                this.moveDown = false;
            }
            if (keyListener.isKeyDown(KeyListener.KEY_SPACE)
                && this.player.collideWithitem(this.computer))
                this.webpageScene = true;
        }
        if (this.timeToText <= 0) {
            if (this.scene === 1 && (keyListener.keyPressed(KeyListener.KEY_SPACE)))
                this.scene = 2;
        }
        if (this.timeToText <= 0 && this.circleRadius === 0) {
            if (keyListener.keyPressed(KeyListener.KEY_SPACE))
                this.nextText += 1;
        }
    }
    update(elapsed) {
        if (this.buttonsPressed === 0) {
            this.player.move(66, 150);
        }
        if (this.webpageScene === true)
            return new WebpageEnd(0, 0, this.lang);
        this.timeToText -= elapsed;
        if (this.scene === 2) {
            this.antagonist.moveToPlayer(this.player, 0.3);
            if (this.player.collideWithAntagonist(this.antagonist)) {
                return new CreditScene(0, 0);
            }
        }
        if (this.moveUp)
            this.player.moveUp(elapsed);
        if (this.moveDown)
            this.player.moveDown(elapsed);
        if (this.moveRight)
            this.player.moveRight(elapsed);
        if (this.moveLeft)
            this.player.moveLeft(elapsed);
        if (this.circleRadius > 0) {
            this.circleRadius -= elapsed * 0.6;
        }
        if (this.circleRadius < 0.01) {
            this.circleRadius = 0;
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        this.computer.render(canvas);
        if (this.scene === 1 && this.timeToText <= 0) {
            this.bedroomEndText.textEight(canvas, this.image1, this.trojanHead);
            this.player.setNewPlayerImage('./assets/playerstandingleft.png');
        }
        this.bed.render(canvas);
        this.player.render(canvas);
        if (this.level1)
            this.antagonist.render(canvas);
        if (this.nextText > 6 && !this.level1) {
            CanvasUtil.drawImage(canvas, this.popUp, this.dimensionsX + 1170, this.dimensionsY + 27);
        }
        if (this.player.collideWithitem(this.computer) && !this.level1) {
            this.bedroomEndText.computerPrompt(canvas);
        }
        if (!this.level1) {
            if (this.nextText === 0)
                this.bedroomEndText.textOne(canvas, this.image1, this.playerHead);
            if (this.nextText === 1)
                this.bedroomEndText.textTwo(canvas, this.image1, this.playerHead);
            if (this.nextText === 2)
                this.bedroomEndText.textThree(canvas, this.image1, this.playerHead);
            if (this.nextText === 3)
                this.bedroomEndText.textFour(canvas, this.image1);
            if (this.nextText === 4)
                this.bedroomEndText.textFive(canvas, this.image1, this.playerHead);
            if (this.nextText === 5)
                this.bedroomEndText.textSix(canvas, this.image1, this.playerHead);
            if (this.nextText === 6)
                this.bedroomEndText.textSeven(canvas, this.image1, this.playerHead);
            CanvasUtil.fillCircle(canvas, canvas.width / 2, canvas.height / 2, this.circleRadius, 'black');
        }
    }
}
//# sourceMappingURL=BedroomEnd.js.map