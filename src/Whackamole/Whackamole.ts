import CanvasUtil from '../CanvasUtil.js';
import Gameover from '../Gameover.js';
import KeyListener from '../KeyListener.js';
import Scene from '../Scene.js';
import Lives from '../Lives.js';
import Viruses from './Viruses.js';
import Antagonist from '../Antagonist.js';
import Player from '../Player.js';
import LoadingSceneBF from '../LoadingScenes/LoadingSceneBF.js';
import WhackamoleText from './WhackamoleText.js';
import MouseListener from '../MouseListener.js';

export default class Whackamole extends Scene {
  private holes: Viruses[] = [];

  private timeToNextVirus: number;

  private value: number;

  private lives: Lives[] = [];

  private enemiesLeft: number;

  private checkIfCorrect: number;

  private antagonist: Antagonist;

  private player: Player;

  private wormSmashedTimer: number;

  private deadWormArray: Viruses[] = [];

  private nextText: number;

  private whackamoleText: WhackamoleText;

  private trojanHead: HTMLImageElement;

  private bubble: HTMLImageElement;

  private cutsceneTimer: number;

  private lastValues: number[] = [];

  private virusPushed: boolean;

  private pressedonetime: boolean;

  private backgroundSounds: HTMLAudioElement;

  private splatSound: HTMLAudioElement;

  private playerHit: HTMLAudioElement;

  public constructor(maxX: number, maxY: number, lang: boolean) {
    super(maxX, maxY);
    this.lang = lang;
    this.whackamoleText = new WhackamoleText(this.lang);
    this.bubble = CanvasUtil.loadNewImage('./assets/bubble.png');
    this.trojanHead = CanvasUtil.loadNewImage('./assets/trojanicon.png');
    this.player = new Player(this.dimensionsX
    + this.backgroundWidth - 1600, this.dimensionsY - 150);
    this.antagonist = new Antagonist(this.backgroundWidth - 1850, this.backgroundHeight - 1000);
    this.image = CanvasUtil.loadNewImage('./assets/whackamole.jpg');
    this.timeToNextVirus = 1000;
    this.enemiesLeft = 40;
    this.checkIfCorrect = 0;
    this.wormSmashedTimer = 200;
    for (let i = 0; i < 250; i += 50) {
      this.lives.push(new Lives(this.dimensionsX - 40, 250 + i + this.dimensionsY));
    }
    this.nextText = 0;
    this.cutsceneTimer = 2000;
    this.lastValues = [];
    this.virusPushed = false;
    this.pressedonetime = false;
    this.backgroundSounds = new Audio('./assets/audio/whackaworm.mp3');
    this.splatSound = new Audio('./assets/audio/adhit.mp3');
    this.playerHit = new Audio('./assets/audio/timmyhit.mp3');
  }

  /**
   *
   * @param value worm value
   */
  public wormSmash(value: number) {
    this.value = value;
    for (let i = 0; i < this.holes.length; i++) {
      this.holes.forEach((item: Viruses) => {
        if (item.getValue() === value) {
          this.checkIfCorrect = 1;
        }
      });
      if (i === this.holes.length - 1 && this.checkIfCorrect === 0) {
        this.playerHit.pause();
        this.playerHit.currentTime = 0;
        this.playerHit.play();
        this.lives.pop();
      }
      if (i === this.holes.length - 1 && this.checkIfCorrect === 1) {
        this.splatSound.pause();
        this.splatSound.currentTime = 0;
        this.splatSound.play();
        this.checkIfCorrect = 0;
      }
    }
  }

  /**
   *
   * @param keyListener is an input
   * @param mouseListener is a mouse input
   */
  public processInput(keyListener: KeyListener, mouseListener: MouseListener): void {
    if (this.nextText >= 2) {
      if (keyListener.keyPressed(KeyListener.KEY_97)) this.wormSmash(1);
      if (keyListener.keyPressed(KeyListener.KEY_98)) this.wormSmash(2);
      if (keyListener.keyPressed(KeyListener.KEY_99)) this.wormSmash(3);
      if (keyListener.keyPressed(KeyListener.KEY_100)) this.wormSmash(4);
      if (keyListener.keyPressed(KeyListener.KEY_101)) this.wormSmash(5);
      if (keyListener.keyPressed(KeyListener.KEY_102)) this.wormSmash(6);
      if (keyListener.keyPressed(KeyListener.KEY_103)) this.wormSmash(7);
      if (keyListener.keyPressed(KeyListener.KEY_104)) this.wormSmash(8);
      if (keyListener.keyPressed(KeyListener.KEY_105)) this.wormSmash(9);
      this.pressedonetime = false;
      if (mouseListener.buttonPressed()) {
        this.holes = this.holes.filter((virus: Viruses) => {
          if (virus.mouseInRange(mouseListener.getMousePosition())) {
            this.deadWormArray.push(new Viruses(virus.getValue()));
            this.enemiesLeft -= 1;
            this.pressedonetime = true;
            this.splatSound.pause();
            this.splatSound.currentTime = 0;
            this.splatSound.play();
            return false;
          }
          return true;
        });
        if (!(this.pressedonetime)) {
          this.playerHit.pause();
          this.playerHit.currentTime = 0;
          this.playerHit.play();
          this.lives.pop();
        }
      }
    }
    if (this.nextText <= 2 && this.antagonist.getCutsceneMoveTimer() < 0) {
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.nextText += 1;
    }
  }

  /**
   *
   * @param elapsed is time
   * @returns true or false
   */
  public update(elapsed: number): Scene {
    this.backgroundSounds.play();
    this.player.move(66, 150);
    this.player.changePlayerDirection();
    if (this.nextText < 2) {
      if (this.player.getPosX() < this.dimensionsX + 1300) {
        this.player.cutsceneMovement(elapsed);
      }
      this.antagonist.cutsceneMovement(elapsed);
    } else if (this.enemiesLeft > 35) {
      this.antagonist.cutsceneMovementAway(5, -3);
    }

    if (this.nextText >= 2) {
      this.holes = this.holes.filter((item: Viruses) => {
        item.update(elapsed);
        if (item.isItDead() === true) {
          this.lives.pop();
          return false;
        } return true;
      });

      for (let i = 0; i < this.deadWormArray.length; i++) {
        this.deadWormArray[i].setImage('./assets/wormsmashed.png');
        this.deadWormArray[i].subtractPosX();
      }
      if (this.lives.length === 0) {
        this.backgroundSounds.pause();
        this.backgroundSounds.currentTime = 0;
        return new Gameover(0, 0, 'whack', this.lang);
      }

      this.holes = this.holes.filter((item: Viruses) => {
        if (this.value === item.getValue()) {
          this.deadWormArray.push(new Viruses(this.value));
          this.value = 0;
          this.enemiesLeft -= 1;
          return false;
        }
        return true;
      });

      for (let i = 0; i < this.deadWormArray.length; i++) {
        this.deadWormArray[i].setImage('./assets/wormsmashed.png');
      }

      if (this.deadWormArray.length > 0) {
        for (let i = 0; i < this.deadWormArray.length; i++) {
          this.wormSmashedTimer -= elapsed;
          if (this.wormSmashedTimer <= 0) {
            this.wormSmashedTimer = 200;
            this.deadWormArray.shift();
          }
        }
      }
      this.timeToNextVirus -= elapsed;
      if (this.timeToNextVirus <= 0 && this.holes.length < 4 && this.enemiesLeft > 0) {
        const newVirus: Viruses = new Viruses(0);
        this.virusPushed = true;
        if (this.lastValues.length === 0) {
          this.holes.push(newVirus);
          this.lastValues.unshift(newVirus.getValue());
        } else {
          for (let i = 0; i < this.lastValues.length; i++) {
            if (this.lastValues[i] === newVirus.getValue()) {
              this.virusPushed = false;
            }
          }
          if (this.virusPushed) {
            this.holes.push(newVirus);
            if (this.lastValues.length === 4) {
              this.lastValues.pop();
              this.lastValues.unshift(newVirus.getValue());
            } else {
              this.lastValues.unshift(newVirus.getValue());
            }
          }
        }
        this.timeToNextVirus = 3000;
        if (this.enemiesLeft < 40 && this.enemiesLeft > 30) this.timeToNextVirus = 800;
        if (this.enemiesLeft < 30 && this.enemiesLeft > 15) this.timeToNextVirus = 500;
        if (this.enemiesLeft < 15) this.timeToNextVirus = 300;
      }
      if (this.enemiesLeft === 0) {
        this.holes = [];
      }
    }

    if (this.enemiesLeft === 0) {
      this.antagonist = new Antagonist(this.backgroundWidth - 800, this.backgroundHeight - 700);
      this.cutsceneTimer -= elapsed;
    }

    if (this.cutsceneTimer < 0) {
      this.enemiesLeft = -1;
      this.antagonist.moveToPlayer(this.player, 0.8);
      if (this.antagonist.getPosX() >= this.player.getPosX()) {
        this.antagonist.cutsceneMovementAway(-2, 0);
        this.player.moveAway(-2, 0);
      }
    }
    if (this.player.getPosX() <= this.dimensionsX - 2000) {
      this.backgroundSounds.pause();
      this.backgroundSounds.currentTime = 0;
      return new LoadingSceneBF(window.innerWidth, window.innerHeight, this.lang);
    }
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.holes.forEach((item: Viruses) => {
      item.render(canvas);
    });

    this.lives.forEach((item: Lives) => {
      item.render(canvas);
    });

    this.deadWormArray.forEach((item: Viruses) => {
      item.render(canvas);
    });

    this.antagonist.render(canvas);
    this.player.render(canvas);
    if (this.antagonist.getCutsceneMoveTimer() < 0) {
      if (this.nextText === 0) this.whackamoleText.textOne(canvas, this.bubble, this.trojanHead);
      if (this.nextText === 1) this.whackamoleText.textTwo(canvas, this.bubble, this.trojanHead);
    }

    if (this.enemiesLeft === 0) this.whackamoleText.textThree(canvas, this.bubble, this.trojanHead);
    if (this.enemiesLeft <= 10 && this.enemiesLeft > 7) {
      this.whackamoleText.textFour(canvas, this.bubble, this.trojanHead);
    }

    if (this.enemiesLeft <= 20 && this.enemiesLeft > 16) {
      this.whackamoleText.textFive(canvas, this.bubble, this.trojanHead);
    }

    if (this.enemiesLeft <= 30 && this.enemiesLeft > 26) {
      this.whackamoleText.textSix(canvas, this.bubble, this.trojanHead);
    }
  }
}
