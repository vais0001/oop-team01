import Antagonist from './Antagonist.js';
import Bed from './Bed.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';
import Webpage from './Webpage.js';
import ArrowThrower from './ArrowThrower/ArrowThrower.js'
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

  public constructor(MaxX: number, MaxY: number, level:number) {
    super(MaxX, MaxY);
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
    this.timeToText = 2000;
    this.cheatWhackamole = false;
    this.cheatArrow = false;
    this.cheatLoadingScreen = false;
  }

  public processInput(keyListener: KeyListener): any {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
    if (!this.level1 === true) {
      if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(0);
      if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(1);
      if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(2);
      if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(3);
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)
      && this.player.collideWithitem(this.computer)) this.webpageScene = true;
    }
    if (this.scene === 1) {
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.scene = 2;
    }
    if (this.scene === 2) {
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.scene = 3;
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

    if(this.cheatLoadingScreen === true) {
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
        CanvasUtil.drawImage(canvas, this.image1, 300, 100);
      }
    }
    if (this.scene === 1 && this.timeToText <= 0) {
      CanvasUtil.writeTextToCanvas(canvas, 'You downloaded game ilegally, unfortunately now you are infected', 515, 150, 'center', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, ' with the viruses, so now you will have to fight them !', 510, 170, 'center', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to continue', this.dimensionsX + 10, this.dimensionsY + 700, 'left', 'arial', 40, 'white');
    }
    if (this.scene === 2) {
      CanvasUtil.writeTextToCanvas(canvas, 'fuck uuuuuuuuuuuuuuuuuuuuu', 515, 150, 'left', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to start fighting', this.dimensionsX + 10, this.dimensionsY + 700, 'left', 'arial', 40, 'white');
    }
  }
}
