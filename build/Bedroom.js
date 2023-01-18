import Antagonist from './Antagonist.js';
import Bed from './Bed.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Webpage from './Webpage.js';
import ArrowThrower from './ArrowThrower/ArrowThrower.js';
import Whackamole from './Whackamole/Whackamole.js';
import LoadingSceneAT from './LoadingScenes/LoadingSceneArrowThrower.js';
import Text from './Text.js';
import BossFight from './BossScene.ts/BossFight.js';
import BedroomEnd from './BedroomEnd.js';
export default class Bedroom extends Scene {
    player;
    computer;
    bed;
    popUp;
    webpageScene;
    level1;
    antagonist;
    scene;
    timeToText;
    cheatWhackamole;
    finalScene;
    cheatArrow;
    cheatLoadingScreen;
    nextText;
    playerHead;
    trojanHead;
    text;
    bossFightScene;
    buttonsPressed;
    moveUp;
    moveRight;
    moveDown;
    moveLeft;
    constructor(maxX, maxY, level) {
        super(maxX, maxY);
        this.image = CanvasUtil.loadNewImage('./assets/timmyroom3.png');
        this.bossFightScene = false;
        if (level === 1) {
            this.antagonist = new Antagonist(250, 250);
            this.level1 = true;
            this.scene = 1;
            this.image = CanvasUtil.loadNewImage('./assets/timmyroomred.png');
        }
        if (!this.level1 === true)
            this.scene = 0;
        if (!this.level1) {
            this.player = new Player(this.dimensionsX + 200, this.dimensionsY + 350);
        }
        if (this.level1 === true) {
            this.player = new Player(this.dimensionsX + 1050, this.dimensionsY + 150);
        }
        this.computer = new Computer();
        this.bed = new Bed();
        this.popUp = CanvasUtil.loadNewImage('./placeholders/exclamation_mark.png');
        this.webpageScene = false;
        this.image1 = CanvasUtil.loadNewImage('./placeholders/bubble.png');
        this.playerHead = CanvasUtil.loadNewImage('./assets/timmyHead.png');
        this.trojanHead = CanvasUtil.loadNewImage('./assets/trojanicon.png');
        if (!this.level1) {
            this.timeToText = 1000;
        }
        else {
            this.timeToText = 1500;
        }
        this.cheatWhackamole = false;
        this.cheatArrow = false;
        this.cheatLoadingScreen = false;
        this.finalScene = false;
        this.nextText = 0;
        this.text = new Text();
        this.buttonsPressed = 0;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
    }
    processInput(keyListener) {
        if (!this.level1 && this.nextText > 4) {
            this.buttonsPressed = 0;
            if (this.player.getPosX() > this.dimensionsX + 20) {
                if ((keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA'))) {
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
            if (this.player.getPosY() > this.dimensionsY + 120) {
                if ((keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW'))) {
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
            if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 100) {
                if ((keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD'))) {
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
                if ((keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS'))) {
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
            if (this.scene === 2 && (keyListener.keyPressed(KeyListener.KEY_SPACE)))
                this.scene = 3;
        }
        if (this.timeToText <= 0) {
            if (keyListener.keyPressed(KeyListener.KEY_SPACE))
                this.nextText += 1;
        }
        if (keyListener.keyPressed(KeyListener.KEY_1))
            this.cheatWhackamole = true;
        if (keyListener.keyPressed(KeyListener.KEY_2))
            this.cheatArrow = true;
        if (keyListener.keyPressed(KeyListener.KEY_3))
            this.bossFightScene = true;
        if (keyListener.keyPressed(KeyListener.KEY_4))
            this.cheatLoadingScreen = true;
        if (keyListener.keyPressed(KeyListener.KEY_5))
            this.finalScene = true;
    }
    update(elapsed) {
        if (this.buttonsPressed === 0) {
            this.player.move(66, 150);
        }
        if (this.bossFightScene === true) {
            return new BossFight(window.innerWidth, window.innerHeight, 0);
        }
        if (this.cheatWhackamole === true) {
            return new Whackamole(window.innerWidth, window.innerHeight);
        }
        if (this.cheatArrow === true) {
            return new ArrowThrower(window.innerWidth, window.innerHeight);
        }
        if (this.cheatLoadingScreen === true) {
            return new Webpage(window.innerWidth, window.innerHeight);
        }
        if (this.finalScene === true) {
            return new BedroomEnd(window.innerWidth, window.innerHeight, 0);
        }
        if (this.webpageScene === true)
            return new Webpage(0, 0);
        this.timeToText -= elapsed;
        if (this.scene === 3)
            return new LoadingSceneAT(this.maxX, this.maxY);
        if (this.moveUp)
            this.player.moveUp(elapsed);
        if (this.moveDown)
            this.player.moveDown(elapsed);
        if (this.moveRight)
            this.player.moveRight(elapsed);
        if (this.moveLeft)
            this.player.moveLeft(elapsed);
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        this.computer.render(canvas);
        if (this.scene === 1 && this.timeToText <= 0) {
            this.text.textSix(canvas, this.image1, this.trojanHead);
            this.player.setNewPlayerImage('./assets/playerstandingleft.png');
        }
        if (this.scene === 2)
            this.text.textSeven(canvas, this.image1, this.trojanHead);
        this.bed.render(canvas);
        this.player.render(canvas);
        if (this.level1)
            this.antagonist.render(canvas);
        if (this.nextText > 4) {
            CanvasUtil.drawImage(canvas, this.popUp, this.dimensionsX + 1170, this.dimensionsY + 27);
        }
        if (this.player.collideWithitem(this.computer) && !this.level1) {
            this.text.computerPrompt(canvas, this.popUp);
        }
        if (!this.level1) {
            if (this.nextText === 0)
                this.text.textOne(canvas, this.image1, this.playerHead);
            if (this.nextText === 1)
                this.text.textTwo(canvas, this.image1, this.playerHead);
            if (this.nextText === 2)
                this.text.textThree(canvas, this.image1, null);
            if (this.nextText === 3)
                this.text.textFour(canvas, this.image1, this.playerHead);
            if (this.nextText === 4)
                this.text.textFive(canvas, this.image1, this.playerHead);
        }
    }
}
//# sourceMappingURL=Bedroom.js.map