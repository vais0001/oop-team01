import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import CursorBullet from "./CursorBullet.js";
import EnemyAD from "./EnemyAD.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {
  private player: Player;

  private ad: EnemyAD[] = [];

  private bullet: CursorBullet[] = [];

  private timeToNextAD: number;

  private timeToNextBullet: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');

    this.player = new Player(this.backgroundWidth, this.backgroundHeight + this.dimensionsY);
    this.ad.push(new EnemyAD(this.backgroundHeight));
    this.bullet.push(new CursorBullet(null, null));
    this.timeToNextAD = 1500;
    this.timeToNextBullet = 500;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) this.player.move(0);
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) this.player.move(1);
    if (keyListener.keyPressed(KeyListener.KEY_F)) {
      if (this.timeToNextBullet < 0) {
        this.bullet.push(new CursorBullet(this.player.getPosX(), this.player.getPosY() + (this.player.getHeight() / 2) - 5));
        this.timeToNextBullet = 500;
      }
    }
    return null;
  }

  public update(elapsed: number): Scene {
    this.ad.forEach((item: EnemyAD) => item.update(elapsed));
    this.bullet.forEach((item: CursorBullet) => item.update(elapsed));

    this.timeToNextAD -= elapsed;
    this.timeToNextBullet -= elapsed;

    if (this.timeToNextAD < 0) {
      this.ad.push(new EnemyAD(this.backgroundHeight));
      this.timeToNextAD = 1500;
    }

    this.ad = this.ad.filter((item: EnemyAD) => {
      return (item.getPosX() < this.backgroundWidth + this.dimensionsX);
    })

    this.ad = this.ad.filter((item: EnemyAD) => {
      if (this.player.isCollidingAD(item)) {
        return false;
      }
      return true;
    })

    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.player.render(canvas);
    this.ad.forEach((item: EnemyAD) => item.render(canvas));
    this.bullet.forEach((item: CursorBullet) => item.render(canvas));
  }
}
