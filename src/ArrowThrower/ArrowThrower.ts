import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {

  private player: Player;

  public constructor (maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');
    this.player = new Player(this.backgroundWidth, this.backgroundHeight + this.dimensionsY);
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(0);
    if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(1);
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
