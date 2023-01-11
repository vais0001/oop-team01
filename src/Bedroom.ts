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
import { GameLoop } from './GameLoop.js';

export default class Bedroom extends Scene {
  private starting: boolean;

  private player: Player;

  private computer: Computer;

  private bed: Bed;

  private popUp: HTMLImageElement;

  private webpageScene: boolean;

  private level1: boolean;

  private antagonist: Antagonist;

  private scene: number;

  private timeToText: number;

  private cheatWhackamole: boolean;

  private cheatArrow: boolean;

  private cheatLoadingScreen: boolean;

  private nextText: number;

  private playerHead: HTMLImageElement;

  private trojanHead: HTMLImageElement;

  private text: Text;

  public constructor(maxX: number, maxY: number, level: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/room1.png');
    this.starting = false;
    if (level === 1) {
      this.antagonist = new Antagonist(300, 300);
      this.level1 = true;
      this.scene = 1;
      this.image = CanvasUtil.loadNewImage('./assets/room2.png');
    }
    if (!this.level1 === true) this.scene = 0;
    if (!this.level1) {
      this.player = new Player(window.innerWidth / 2 - 550, window.innerHeight / 2);
    } if (this.level1 === true) {
      this.player = new Player(this.dimensionsX + 1050, this.dimensionsY + 150);
    }
    this.computer = new Computer();
    this.bed = new Bed();
    this.popUp = CanvasUtil.loadNewImage('./placeholders/exclamation_mark.png');
    this.webpageScene = false;
    this.image1 = CanvasUtil.loadNewImage('./placeholders/bubble.png');
    this.playerHead = CanvasUtil.loadNewImage('./placeholders/timmyHead.png');
    this.trojanHead = CanvasUtil.loadNewImage('./placeholders/trojanHead.png');
    if (!this.level1) {
      this.timeToText = 1000;
    } else {
      this.timeToText = 1500;
    }
    this.cheatWhackamole = false;
    this.cheatArrow = false;
    this.cheatLoadingScreen = false;
    this.nextText = 0;
    this.text = new Text();
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
    if (!this.level1 && this.nextText > 4) {
      if (this.player.getPosX() > this.dimensionsX + 5) {
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA')) this.player.move(0);
      }

      if (this.player.getPosY() > this.dimensionsY + 5) {
        if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) this.player.move(1);
      }

      if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 115) {
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD')) this.player.move(2);
      }

      if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 140) {
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) this.player.move(3);
      }

      if (keyListener.isKeyDown(KeyListener.KEY_SPACE)
        && this.player.collideWithitem(this.computer)) this.webpageScene = true;
    }
    if (this.timeToText <= 0) {
      if (this.scene === 1 && (keyListener.keyPressed(KeyListener.KEY_SPACE))) this.scene = 2;
      if (this.scene === 2 && (keyListener.keyPressed(KeyListener.KEY_SPACE))) this.scene = 3;
    }
    if (this.timeToText <= 0) {
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.nextText += 1;
    }
    // Cheat code to go to whackamole class
    if (keyListener.keyPressed(KeyListener.KEY_1)) this.cheatWhackamole = true;
    if (keyListener.keyPressed(KeyListener.KEY_2)) this.cheatArrow = true;
    if (keyListener.keyPressed(KeyListener.KEY_3)) this.cheatLoadingScreen = true;
  }

  public update(elapsed: number): Scene {
    //cheat code to whackamole
    if (this.cheatWhackamole === true) {
      return new Whackamole(window.innerWidth, window.innerHeight);
    }
    if (this.cheatArrow === true) {
      return new ArrowThrower(window.innerWidth, window.innerHeight);
    }

    if (this.cheatLoadingScreen === true) {
      return new LoadingSceneAT(window.innerWidth, window.innerHeight)
    }

    if (this.webpageScene === true) return new Webpage(0, 0);
    this.timeToText -= elapsed;
    if (this.scene === 3) return new LoadingSceneAT(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (!this.level1) {
      if (this.nextText === 0) this.text.textOne(canvas, this.image1, this.playerHead);
      if (this.nextText === 1) this.text.textTwo(canvas, this.image1, this.playerHead);
      if (this.nextText === 2) this.text.textThree(canvas, this.image1, null);
      if (this.nextText === 3) this.text.textFour(canvas, this.image1, this.playerHead);
      if (this.nextText === 4) this.text.textFive(canvas, this.image1, this.playerHead);
    }

    if (this.scene === 1 && this.timeToText <= 0) this.text.textSix(canvas, this.image1, this.trojanHead);
    if (this.scene === 2) this.text.textSeven(canvas, this.image1, this.trojanHead);

    this.bed.render(canvas);
    this.player.render(canvas);
    this.computer.render(canvas);

    if (this.nextText > 4) {
      CanvasUtil.drawImage(canvas, this.popUp, this.dimensionsX + 1205, this.dimensionsY + 672);
    }
    if (this.player.collideWithitem(this.computer)) {
      this.text.computerPrompt(canvas, this.popUp);
    }
    if (this.level1) this.antagonist.render(canvas);
  }
}
