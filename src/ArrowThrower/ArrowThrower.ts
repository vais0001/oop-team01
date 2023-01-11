import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import EnemyAD from "./EnemyAD.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {

  private player: Player;

  private ad: EnemyAD[] = [];

  private timeToNextAD: number;

  public constructor (maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');

    this.player = new Player(this.backgroundWidth, this.backgroundHeight + this.dimensionsY);
    this.ad.push(new EnemyAD(this.backgroundHeight));
    this.timeToNextAD = 1500;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(0);
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(1);
    return null;
  }

  public update(elapsed: number): Scene {
    this.ad.forEach((item: EnemyAD) => item.update(elapsed));

    this.timeToNextAD -= elapsed;

    if (this.timeToNextAD < 0) {
      this.ad.push(new EnemyAD(this.backgroundHeight));
      this.timeToNextAD = 1500;
    }

    this.ad = this.ad.filter((item: EnemyAD) => {
      return (item.getPosX() < this.backgroundWidth + this.dimensionsX);
    })

    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.player.render(canvas);
    this.ad.forEach((item: EnemyAD) => item.render(canvas));
  }

}
