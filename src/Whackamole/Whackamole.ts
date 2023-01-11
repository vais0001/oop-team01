import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Lives from "./Lives.js";
import Viruses from "./Viruses.js";

export default class Whackamole extends Scene {

  private holes: Viruses[] = [];

  private timeToNextVirus: number;

  private value: number;

  private lives: Lives[] = [];

  private score: number;

  private checkIfCorrect: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/whackamole.jpg');
    this.timeToNextVirus = 1000;
    this.score = 0;
    this.checkIfCorrect = 0;
    for (let i = 0; i < 150; i += 50) {
      this.lives.push(new Lives(50, 250 + i))
    }
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_97)) {
      this.value = 1;
      for (let i = 0; i < this.holes.length; i++) {
        this.holes.forEach((item: Viruses) => {
          if (item.getValue() === 1) {
            this.checkIfCorrect = 1;
          }
        })
        if (i === this.holes.length - 1 && this.checkIfCorrect === 0) {
          this.lives.pop()
        }
        if (i === this.holes.length - 1&& this.checkIfCorrect === 1) {
          this.checkIfCorrect = 0;
        }
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_98)) {
      this.value = 2;
    }
    if (keyListener.keyPressed(KeyListener.KEY_99)) {
      this.value = 3;
    }
    if (keyListener.keyPressed(KeyListener.KEY_100)) {
      this.value = 4;
    }
    if (keyListener.keyPressed(KeyListener.KEY_101)) {
      this.value = 5;
    }
    if (keyListener.keyPressed(KeyListener.KEY_102)) {
      this.value = 6;
    }
    if (keyListener.keyPressed(KeyListener.KEY_103)) {
      this.value = 7;
    }
    if (keyListener.keyPressed(KeyListener.KEY_104)) {
      this.value = 8;
    }
    if (keyListener.keyPressed(KeyListener.KEY_105)) {
      this.value = 9;
    }
  }

  public update(elapsed: number): Scene {


    this.holes = this.holes.filter((item: Viruses) => {
      if (this.value === item.getValue()) {
        this.value = 0;
        this.score += 1;
        return false;
      } else return true;
    })

    this.timeToNextVirus -= elapsed;
    if (this.timeToNextVirus <= 0 && this.holes.length < 4) {
      this.holes.push(new Viruses());
      if (this.score < 10 ) this.timeToNextVirus = 1000;
      if (this.score > 10 && this.score < 21) this.timeToNextVirus = 800;
      if (this.score > 20 ) this.timeToNextVirus = 500;
    }
    return null;
  }


  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas)
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.writeTextToCanvas(canvas, `score: ${this.score}`, 10, 50, 'left', 'arial', 22, 'white')
    this.holes.forEach((item: Viruses) => {
      item.render(canvas)
    })
    this.lives.forEach((item: Lives) => {
      item.render(canvas)
    })
  }

}
