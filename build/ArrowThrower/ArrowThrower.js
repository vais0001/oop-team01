import CanvasUtil from '../CanvasUtil.js';
import Gameover from '../Gameover.js';
import KeyListener from '../KeyListener.js';
import Scene from '../Scene.js';
import Lives from '../Whackamole/Lives.js';
import CursorBullet from './CursorBullet.js';
import EnemyAD1 from './EnemyAD1.js';
import EnemyAD2 from './EnemyAD2.js';
import Player from '../Player.js';
import ThrowerText from './ThrowerText.js';
import LoadingSceneWM from '../LoadingScenes/LoadingSceneWM.js';
import HeartPowerup from './HeartPowerup.js';
import Antagonist from '../Antagonist.js';
import ArrowThrowerComputer from './ArrowThrowerComputer.js';
export default class ArrowThrower extends Scene {
    player;
    antagonist;
    ad = [];
    lives = [];
    adBullets = [];
    heartPowerup = [];
    arrowThrowerText;
    bullet;
    timeToNextAD;
    changingTime;
    score;
    playerHead;
    trojanHead;
    bubble;
    nextText;
    nextHeart;
    spawnComputer;
    computer;
    moveUp;
    moveDown;
    buttonsPressed;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY);
        this.lang = lang;
        console.log(this.lang);
        this.arrowThrowerText = new ThrowerText(this.lang);
        this.image = CanvasUtil.loadNewImage('./assets/arrowthrower.png');
        this.player = new Player(this.dimensionsX + this.backgroundWidth - 1550, this.dimensionsY - 100);
        this.antagonist = new Antagonist(this.backgroundWidth - 1850, this.backgroundHeight - 1000);
        this.bullet = new CursorBullet(-100, -100);
        this.timeToNextAD = 1700;
        this.score = 0;
        this.changingTime = 1000;
        this.playerHead = CanvasUtil.loadNewImage('./assets/TimmyHead.png');
        this.trojanHead = CanvasUtil.loadNewImage('./assets/trojanicon.png');
        this.bubble = CanvasUtil.loadNewImage('./placeholders/bubble.png');
        this.nextText = 0;
        this.nextHeart = 0;
        this.spawnComputer = false;
        this.player.setImage('./assets/playerstandingleft.png');
        this.buttonsPressed = 0;
        this.moveDown = false;
        this.moveUp = false;
        for (let i = 0; i < 250; i += 50) {
            this.lives.push(new Lives(this.dimensionsX - 40, 250 + i + this.dimensionsY));
        }
        this.player.changePlayerDirection();
    }
    processInput(keyListener) {
        this.buttonsPressed = 0;
        if (this.nextText > 3 && this.score < 205) {
            if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) {
                this.moveUp = true;
                this.player.move(0, 150);
                this.buttonsPressed += 1;
            }
            else {
                this.moveUp = false;
            }
            if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) {
                this.moveDown = true;
                this.player.move(0, 150);
                this.buttonsPressed += 1;
            }
            else {
                this.moveDown = false;
            }
            if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
                if (this.bullet.getPosX() < this.dimensionsX) {
                    this.bullet = new CursorBullet(this.player.getPosX(), this.player.getPosY() + (this.player.getHeight() / 2) - 5);
                }
            }
        }
        if (this.antagonist.getCutsceneMoveTimer() < 0) {
            if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
                this.nextText += 1;
            }
        }
        return null;
    }
    update(elapsed) {
        if (this.nextText < 4) {
            if (this.player.getPosX() < this.dimensionsX + 1300) {
                this.player.cutsceneMovement(elapsed);
            }
            this.antagonist.cutsceneMovement(elapsed);
        }
        else if (this.score < 10) {
            this.antagonist.cutsceneMovementAway(0, -3);
        }
        if (this.moveDown) {
            this.player.moveDown(elapsed);
        }
        if (this.moveUp) {
            this.player.moveUp(elapsed);
        }
        if (this.nextText > 3 && this.score < 205) {
            if (this.buttonsPressed === 0) {
                this.player.move(66, 150);
            }
            this.spawnComputer = true;
            this.computer = new ArrowThrowerComputer();
            this.player.changePositionX();
            this.heartPowerup.forEach((heartPowerup) => heartPowerup.update(elapsed));
            if (this.bullet.getPosX() > this.dimensionsX) {
                this.bullet.update(elapsed);
            }
            else {
                this.bullet = new CursorBullet(0 - this.bullet.getWidth(), 0 - this.bullet.getHeight());
            }
            this.changingTime -= elapsed;
            if (this.changingTime < 0) {
                if (Math.random() > 0.2) {
                    this.ad.push(new EnemyAD1(this.backgroundHeight));
                }
                else {
                    this.ad.push(new EnemyAD2(this.backgroundHeight));
                }
                if (this.timeToNextAD > 500) {
                    if (this.timeToNextAD > 700) {
                        this.timeToNextAD -= 30;
                    }
                }
                this.changingTime = this.timeToNextAD;
            }
            if (this.lives.length < 5) {
                this.nextHeart -= elapsed;
                if (this.nextHeart < 0) {
                    this.heartPowerup.push(new HeartPowerup());
                    this.nextHeart = 5000;
                }
            }
            this.heartPowerup = this.heartPowerup.filter((heartPowerup) => {
                if (this.player.isCollidingHeart(heartPowerup)) {
                    if (this.lives.length === 5)
                        this.lives.push(new Lives(this.dimensionsX - 40, 500 + this.dimensionsY));
                    if (this.lives.length === 4)
                        this.lives.push(new Lives(this.dimensionsX - 40, 450 + this.dimensionsY));
                    if (this.lives.length === 3)
                        this.lives.push(new Lives(this.dimensionsX - 40, 400 + this.dimensionsY));
                    if (this.lives.length === 2)
                        this.lives.push(new Lives(this.dimensionsX - 40, 350 + this.dimensionsY));
                    if (this.lives.length === 1)
                        this.lives.push(new Lives(this.dimensionsX - 40, 300 + this.dimensionsY));
                    return false;
                }
                return true;
            });
            this.heartPowerup = this.heartPowerup.filter((heartPowerup) => {
                if (heartPowerup.getPosX() > this.backgroundWidth + this.dimensionsX) {
                    return false;
                }
                return true;
            });
            this.adBullets = this.adBullets.filter((item) => {
                if (item.getPosX() > this.backgroundWidth + this.dimensionsX) {
                    return false;
                }
                return true;
            });
            this.adBullets.forEach((item) => {
                item.update(this.player);
            });
            this.ad = this.ad.filter((item) => {
                if (this.bullet.isCollidingAD(item)) {
                    this.bullet = new CursorBullet(0 - this.bullet.getWidth(), 0 - this.bullet.getHeight());
                    this.score += 5;
                    return false;
                }
                if (item.getPosX() <= this.player.getPosX()) {
                    if (this.player.isCollidingAD(item)) {
                        this.lives.pop();
                        return false;
                    }
                }
                if (this.computer.isCollidingAD(item)) {
                    this.lives.pop();
                    return false;
                }
                return true;
            });
            this.adBullets = this.adBullets.filter((item) => {
                if (this.player.isCollidingBullet(item)) {
                    this.lives.pop();
                    return false;
                }
                return true;
            });
            this.ad.forEach((item) => {
                item.update(elapsed);
                if (item instanceof EnemyAD2) {
                    item.stopAD(item.getPosX());
                    if (item.willFire()) {
                        this.adBullets.push(item.fire());
                    }
                }
                if (item instanceof EnemyAD1) {
                    if (item.getPosX() >= this.player.getPosX()) {
                        item.moveToComputer(this.computer.getPosX(), this.computer.getPosY());
                    }
                }
            });
            if (this.lives.length === 0) {
                return new Gameover(0, 0, 'arrow');
            }
        }
        if (this.score === 200) {
            this.antagonist = new Antagonist(this.backgroundWidth - 800, this.backgroundHeight - 700);
        }
        else if (this.score >= 205) {
            this.antagonist.moveToPlayer(this.player, 0.8);
        }
        if (this.antagonist.getPosX() > this.player.getPosX()) {
            this.nextText = -10;
            this.antagonist.cutsceneMovementAway(-2, 0);
            this.player.moveAway(-2, 0);
        }
        if (this.player.getPosX() < this.backgroundWidth - 2000) {
            return new LoadingSceneWM(window.innerWidth, window.innerHeight, this.lang);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
        this.player.render(canvas);
        this.antagonist.render(canvas);
        this.ad.forEach((item) => item.render(canvas));
        this.bullet.render(canvas);
        if (this.spawnComputer)
            this.computer.render(canvas);
        this.lives.forEach((item) => item.render(canvas));
        this.adBullets.forEach((item) => item.render(canvas));
        this.heartPowerup.forEach((powerup) => powerup.render(canvas));
        if (this.antagonist.getCutsceneMoveTimer() < 0) {
            if (this.nextText === 0)
                this.arrowThrowerText.textOne(canvas, this.bubble, this.playerHead);
            if (this.nextText === 1)
                this.arrowThrowerText.textTwo(canvas, this.bubble, this.playerHead);
            if (this.nextText === 2)
                this.arrowThrowerText.textThree(canvas, this.bubble, this.trojanHead);
            if (this.nextText === 3)
                this.arrowThrowerText.textFour(canvas, this.bubble, this.trojanHead);
        }
        if (this.score >= 15 && this.score < 25) {
            this.arrowThrowerText.textFive(canvas, this.bubble, this.trojanHead);
        }
        else if (this.score >= 50 && this.score < 65) {
            this.arrowThrowerText.textSix(canvas, this.bubble, this.trojanHead);
        }
        else if (this.score >= 200) {
            this.arrowThrowerText.textSeven(canvas, this.bubble, this.trojanHead);
        }
    }
}
//# sourceMappingURL=ArrowThrower.js.map