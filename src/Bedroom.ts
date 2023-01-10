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

  public constructor(MaxX: number, MaxY: number, level:number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/timmysroom.png');
    this.starting = false;
    if (level === 1) {
      this.antagonist = new Antagonist(300, 300);
      this.level1 = true;
      this.scene = 1;
    }
    if (!this.level1 === true) this.scene = 0;
    if (!this.level1) {
      this.player = new Player(window.innerWidth / 2 - 550, window.innerHeight / 2);
    } if (this.level1 === true) {
      this.player = new Player(1100, 100);
    }
    this.computer = new Computer();
    this.bed = new Bed();
    this.popUp = CanvasUtil.loadNewImage('./placeholders/exclamation_mark.png');
    this.webpageScene = false;
    this.image1 = CanvasUtil.loadNewImage('./placeholders/bubble.png');
    this.timeToText = 2000;
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
  }

  public update(elapsed: number): Scene {
    if (this.webpageScene === true) return new Webpage(0, 0);
    if (this.level1) {
      this.timeToText -= elapsed;
    }
    if (this.scene === 3) return new ArrowThrower(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 0, 0);
    this.bed.render(canvas);
    this.player.render(canvas);
    this.computer.render(canvas);
    if (this.player.collideWithitem(this.computer)) {
      CanvasUtil.drawImage(canvas, this.popUp, 1250, 120);
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to open computer', 300, 700, 'center', 'arial', 40, 'white');
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
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to continue', 300, 700, 'center', 'arial', 40, 'white');
    }
    if (this.scene === 2) {
      CanvasUtil.writeTextToCanvas(canvas, 'fuck uuuuuuuuuuuuuuuuuuuu', 515, 150, 'center', 'arial', 14, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to start fighting', 300, 700, 'center', 'arial', 40, 'white');
    }
  }
}
