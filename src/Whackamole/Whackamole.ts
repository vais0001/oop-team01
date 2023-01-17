import CanvasUtil from "../CanvasUtil.js";
import Gameover from "../Gameover.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Lives from "./Lives.js";
import Viruses from "./Viruses.js";
import Antagonist from "../Antagonist.js";
import Player from "../ArrowThrower/Player.js";
import LoadingSceneBF from "../LoadingScenes/LoadingSceneBF.js";
import WhackamoleText from "./WhackamoleText.js";

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

  private whackamoleText: WhackamoleText = new WhackamoleText();

  private trojanHead: HTMLImageElement;

  private bubble: HTMLImageElement;

  private cutsceneTimer: number;

  private lastValues: number[] = [];

  private virusPushed: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.bubble = CanvasUtil.loadNewImage('./placeholders/bubble.png');
    this.trojanHead = CanvasUtil.loadNewImage('../assets/trojanicon.png');
    this.player = new Player(this.dimensionsX + this.backgroundWidth - 1550, this.dimensionsY + 50);
    this.antagonist = new Antagonist(this.backgroundWidth - 1850, this.backgroundHeight - 1000);
    this.image = CanvasUtil.loadNewImage('./assets/whackamole.jpg');
    this.timeToNextVirus = 1000;
    this.enemiesLeft = 40;
    this.checkIfCorrect = 0;
    this.wormSmashedTimer = 200;
    for (let i = 0; i < 150; i += 50) {
      this.lives.push(new Lives(50, 250 + i));
    }
    this.nextText = 0;
    this.cutsceneTimer = 2000;
    this.lastValues = [];
    this.virusPushed = false;
  }

  public wormSmash(value: number) {
    this.value = value;
    for (let i = 0; i < this.holes.length; i++) {
      this.holes.forEach((item: Viruses) => {
        if (item.getValue() === value) {
          this.checkIfCorrect = 1;
        }
      })
      if (i === this.holes.length - 1 && this.checkIfCorrect === 0) {
        this.lives.pop();
      }
      if (i === this.holes.length - 1 && this.checkIfCorrect === 1) {
        this.checkIfCorrect = 0;
      }
    }
  }

  public processInput(keyListener: KeyListener): void {
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
    }

    if (this.nextText <= 2 && this.antagonist.getCutsceneMoveTimer() < 0) {
      if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.nextText += 1;
    }
  }

  public update(elapsed: number): Scene {
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
        return new Gameover(0, 0);
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
            if (this.lastValues.length === 3) {
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
      this.antagonist.moveToPlayer(this.player);
      if (this.antagonist.getPosX() >= this.player.getPosX()) {
        this.antagonist.cutsceneMovementAway(-2, 0);
        this.player.moveAway(-2, 0);
      }
    }
    if (this.player.getPosX() <= this.dimensionsX - 2000) {
      return new LoadingSceneBF(window.innerWidth, window.innerHeight);
    }
    return null;
  }

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
