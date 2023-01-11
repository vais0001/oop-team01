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
    this.timeToText = 2000;
    this.cheatWhackamole = false;
    this.cheatArrow = false;
    this.cheatLoadingScreen = false;
    this.nextText = 0;
  }

  public processInput(keyListener: KeyListener): any {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
    if (!this.level1 === true) {
      if (this.player.getPosX() > this.dimensionsX + 5) {
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(0);
      }

      if (this.player.getPosY() > this.dimensionsY + 5) {
        if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(1);
      }

      if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 115) {
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(2);
      }

      if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 140) {
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(3);
      }

      if (keyListener.keyPressed(KeyListener.KEY_SPACE)
        && this.player.collideWithitem(this.computer)) this.webpageScene = true;
    }
    if (this.scene === 1) {
      if (keyListener.keyPressed(KeyListener.KEY_N)) this.scene = 2;
    }
    if (this.scene === 2) {
      if (keyListener.keyPressed(KeyListener.KEY_N)) this.scene = 3;
    }

    if (keyListener.keyPressed(KeyListener.KEY_N)) this.nextText += 1;

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
    if (this.level1) {
      this.timeToText -= elapsed;
    }
    if (this.scene === 3) return new LoadingSceneAT(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (!this.level1) {
      if (this.nextText === 0) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
        CanvasUtil.writeTextToCanvas(canvas, 'pffff, what a terrible sleep I had.', this.dimensionsX + 700, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
        CanvasUtil.drawImage(canvas, this.playerHead, this.dimensionsX + 540, this.dimensionsY + 670);
      }

      if (this.nextText === 1) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
        CanvasUtil.writeTextToCanvas(canvas, 'Let me grab my phone and check out the latest game releases.', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
        CanvasUtil.drawImage(canvas, this.playerHead, this.dimensionsX + 540, this.dimensionsY + 670);
      }

      if (this.nextText === 2) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
        CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy looks at his phone and sees that X game', this.dimensionsX + 720, this.dimensionsY + 640, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'he really wants has finally been released. Due to', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'inflation, the price of games has risen to very high amounts.', this.dimensionsX + 720, this.dimensionsY + 680, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
      }

      if (this.nextText === 3) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
        CanvasUtil.writeTextToCanvas(canvas, 'YES! Finally, it is released!', this.dimensionsX + 720, this.dimensionsY + 630, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'But oh no, it is too expensive. My parents will not', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'buy it for me unless I get high grades...', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'I want it now, but how….', this.dimensionsX + 720, this.dimensionsY + 690, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
        CanvasUtil.drawImage(canvas, this.playerHead, this.dimensionsX + 540, this.dimensionsY + 670);
      }

      if (this.nextText === 4) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
        CanvasUtil.writeTextToCanvas(canvas, 'Narrator: Timmy browses on forums to see', this.dimensionsX + 720, this.dimensionsY + 630, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'how to access this game for free.', this.dimensionsX + 720, this.dimensionsY + 670, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'He comes across a site which promises a safe and free download.', this.dimensionsX + 720, this.dimensionsY + 650, 'center', 'arial', 14, 'black');
        CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
      }
    }

    if (this.scene === 1 && this.timeToText <= 0) {
      CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
      CanvasUtil.writeTextToCanvas(canvas, 'You fell for my trap!', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
      CanvasUtil.drawImage(canvas, this.trojanHead, this.dimensionsX + 540, this.dimensionsY + 670);
    }

    if (this.scene === 2) {
      CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
      CanvasUtil.writeTextToCanvas(canvas, 'Now you must take responsibility for your actions…', this.dimensionsX + 720, this.dimensionsY + 660, 'center', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, '[N] next', this.dimensionsX + 850, this.dimensionsY + 710, 'center', 'arial', 14, 'black');
      CanvasUtil.drawImage(canvas, this.trojanHead, this.dimensionsX + 540, this.dimensionsY + 670);
    }
    this.bed.render(canvas);
    this.player.render(canvas);
    this.computer.render(canvas);

    if (this.player.collideWithitem(this.computer)) {
      CanvasUtil.drawImage(canvas, this.popUp, this.dimensionsX + 1205, this.dimensionsY + 50);
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', this.dimensionsX + 10, this.dimensionsY + 700, 'left', 'arial', 40, 'white');
    }
    if (this.level1) {
      this.antagonist.render(canvas);
      if (this.timeToText <= 0) {
        CanvasUtil.drawImage(canvas, this.image1, this.dimensionsX + 500, this.dimensionsY + 600);
      }
    }
  }
}
