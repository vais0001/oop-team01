import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {

  private player: Player;

  public constructor (maxX: number, maxY: number) {
    super(maxX, maxY);
    console.log(maxX);

    this.player = new Player(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');
  }

  public processInput(keyListener: KeyListener): void {
    return null;
  }

  public update(elapsed: number): Scene {
    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 0, 0);
    this.player.render(canvas);
  }

}
