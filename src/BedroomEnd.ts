import Antagonist from './Antagonist.js';
import Bed from './Bed.js';
import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Webpage from './Webpage.js';
import BedroomEndText from './BedroomEndText.js';
import CreditScene from './CreditScene.js';

export default class BedroomEnd extends Scene {
  private player: Player;

  private computer: Computer;

  private bed: Bed;

  private popUp: HTMLImageElement;

  private webpageScene: boolean;

  private level1: boolean;

  private antagonist: Antagonist;

  private scene: number;

  private timeToText: number;

  private nextText: number;

  private playerHead: HTMLImageElement;

  private trojanHead: HTMLImageElement;

  private bedroomEndText: BedroomEndText;

  private buttonsPressed: number;

  public constructor(maxX: number, maxY: number, level: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/timmyroom3.png');
    if (level === 1) {
      this.antagonist = new Antagonist(250, 250);
      this.level1 = true;
      this.scene = 1;
      this.image = CanvasUtil.loadNewImage('./assets/timmyroomred.png');
    }
    if (!this.level1 === true) this.scene = 0;
    if (!this.level1) {
      this.player = new Player(this.dimensionsX + 200, this.dimensionsY + 350);
    } if (this.level1 === true) {
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
    } else {
      this.timeToText = 1500;
    }
    this.nextText = 0;
    this.bedroomEndText = new BedroomEndText();
    this.buttonsPressed = 0;
  }

  public processInput(keyListener: KeyListener): void {
    if (!this.level1 && this.nextText > 2) {
      this.buttonsPressed = 0;
      if (this.player.getPosX() > this.dimensionsX + 20
      && !(this.player.collidingBed(this.bed))) {
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA')) {
          this.player.move(0, 150);
          this.buttonsPressed += 1;
        }
      }

      if (this.player.getPosY() > this.dimensionsY + 120
      && !(this.player.collidingComputer(this.computer))
      && !(this.player.collidingBed(this.bed))) {
        if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) {
          this.player.move(1, 150);
          this.buttonsPressed += 1;
        }
      }

      if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 100
      && !(this.player.collidingComputer(this.computer))) {
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD')) {
          this.player.move(2, 150);
          this.buttonsPressed += 1;
        }
      }

      if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 250) {
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) {
          this.buttonsPressed += 1;
          this.player.move(3, 150);
        }
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
  }

  public update(elapsed: number): Scene {
    if (this.buttonsPressed === 0) {
      this.player.move(66, 150);
    }
    this.player.update(elapsed);

    if (this.webpageScene === true) return new Webpage(0, 0);
    this.timeToText -= elapsed;
    if (this.scene === 3) return new CreditScene(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);

    this.computer.render(canvas);
    if (this.scene === 1 && this.timeToText <= 0) {
      this.bedroomEndText.textSix(canvas, this.image1, this.trojanHead);
      this.player.setNewPlayerImage('./assets/playerstandingleft.png');
    }
    if (this.scene === 2) this.bedroomEndText.textSeven(canvas, this.image1, this.trojanHead);

    this.bed.render(canvas);
    this.player.render(canvas);
    if (this.level1) this.antagonist.render(canvas);
    if (this.nextText > 4) {
      CanvasUtil.drawImage(canvas, this.popUp, this.dimensionsX + 1170, this.dimensionsY + 27);
    }
    if (this.player.collideWithitem(this.computer) && !this.level1) {
      this.bedroomEndText.computerPrompt(canvas, this.popUp);
    }
    if (!this.level1) {
      if (this.nextText === 0) this.bedroomEndText.textOne(canvas, this.image1, this.playerHead);
      if (this.nextText === 1) this.bedroomEndText.textTwo(canvas, this.image1, this.playerHead);
      if (this.nextText === 2) this.bedroomEndText.textThree(canvas, this.image1, this.playerHead);
      if (this.nextText === 3) this.bedroomEndText.textFour(canvas, this.image1, this.playerHead);
    }
  }
}
