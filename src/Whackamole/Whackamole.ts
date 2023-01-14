import CanvasUtil from "../CanvasUtil.js";
import Gameover from "../Gameover.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Lives from "./Lives.js";
import Viruses from "./Viruses.js";
import Antagonist from "../Antagonist.js";

export default class Whackamole extends Scene {
  private holes: Viruses[] = [];

  private timeToNextVirus: number;

  private value: number;

  private lives: Lives[] = [];

  private enemiesLeft: number;

  private checkIfCorrect: number;

  private Antagonist: Antagonist;

  private wormSmashedTimer: number;

  private deadWormArray: Viruses[] = [];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/whackamole.jpg');
    this.timeToNextVirus = 1000;
    this.enemiesLeft = 10;
    this.checkIfCorrect = 0;
    this.wormSmashedTimer = 200;
    for (let i = 0; i < 150; i += 50) {
      this.lives.push(new Lives(50, 250 + i));
    }
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

  public update(elapsed: number): Scene {
    this.holes = this.holes.filter((item: Viruses) => {
      item.update(elapsed);
      if (item.isItDead() === true) {
        this.lives.pop();
        return false;
      } return true;
    });

    if (this.lives.length === 0) {
      return new Gameover(0, 0);
    }

    this.holes = this.holes.filter((item: Viruses) => {
      if (this.value === item.getValue()) {
        this.deadWormArray.push(new Viruses(this.value));
        this.value = 0;
        this.enemiesLeft -= 1;
        return false;
      } else return true;
    })

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
    if (this.timeToNextVirus <= 0 && this.holes.length < 4 && this.enemiesLeft > 0 && this.enemiesLeft > 1) {
      this.holes.push(new Viruses(0));
      this.timeToNextVirus = 1000;
      if (this.enemiesLeft < 40 && this.enemiesLeft > 30) this.timeToNextVirus = 800;
      if (this.enemiesLeft < 30 && this.enemiesLeft > 15) this.timeToNextVirus = 500;
      if (this.enemiesLeft < 15) this.timeToNextVirus = 300;
    }
    if (this.enemiesLeft === 0) {
      this.holes = [];
    }

    return null;
  }


  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.writeTextToCanvas(canvas, `Enemies Left: ${this.enemiesLeft}`, 10, 50, 'left', 'arial', 22, 'white')
    this.holes.forEach((item: Viruses) => {
      item.render(canvas);
    });

    this.lives.forEach((item: Lives) => {
      item.render(canvas)
    })
    if (this.enemiesLeft === 0) {
      this.Antagonist = new Antagonist(500, 300)
      this.Antagonist.render(canvas)
    }

    this.deadWormArray.forEach((item: Viruses) => {
      item.render(canvas);
    });
  }
}
