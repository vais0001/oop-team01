import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {

  private player: Player;

  public constructor (maxX: number, maxY: number) {
    super(maxX, maxY);
    console.log(maxX);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');
    this.player = new Player(1422, 800);
    console.log(this.image.height);
  }

  public processInput(keyListener: KeyListener): void {
    return null;
  }

  public update(elapsed: number): Scene {
    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'white');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.player.render(canvas);
  }

}
