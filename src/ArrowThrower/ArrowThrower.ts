import CanvasUtil from "../CanvasUtil.js";
import Gameover from "../Gameover.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";
import CursorBullet from "./CursorBullet.js";
import EnemyAD from "./EnemyAD.js";
import Player from "./Player.js";

export default class ArrowThrower extends Scene {
  private player: Player;

  private ad: EnemyAD[] = [];

  private bullet: CursorBullet;

  private timeToNextAD: number;

  private adsHit: number;

  private score: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/arrow_thrower_scene.png');

    this.player = new Player(this.backgroundWidth, this.backgroundHeight + this.dimensionsY);
    this.ad.push(new EnemyAD(this.backgroundHeight));
    this.bullet = new CursorBullet(-100, -100);
    this.timeToNextAD = 1500;
    this.adsHit = 0;
    this.score = 0;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) this.player.move(0);
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) this.player.move(1);
    if (keyListener.keyPressed(KeyListener.KEY_F)) {
      if (this.bullet.getPosX() < this.dimensionsX) {
          this.bullet = new CursorBullet(this.player.getPosX(), this.player.getPosY() + (this.player.getHeight() / 2) - 5);
      }
    }
    return null;
  }

  public update(elapsed: number): Scene {
    this.ad.forEach((item: EnemyAD) => item.update(elapsed));

    if (this.bullet.getPosX() > this.dimensionsX) {
      this.bullet.update(elapsed);
    } else {
      this.bullet = new CursorBullet(0 - this.bullet.getWidth(), 0 - this.bullet.getHeight());
    }

    this.timeToNextAD -= elapsed;

    if (this.timeToNextAD < 0) {
      this.ad.push(new EnemyAD(this.backgroundHeight));
      this.timeToNextAD = 1500;
    }

    this.ad = this.ad.filter((item: EnemyAD) => {
      return (item.getPosX() < this.backgroundWidth + this.dimensionsX);
    })

    this.ad = this.ad.filter((item: EnemyAD) => {
      if (this.bullet.isCollidingAD(item)) {
        this.bullet = new CursorBullet(0 - this.bullet.getWidth(), 0 - this.bullet.getHeight());
        this.score += 5;
        return false;
      }
      return true;
    })

    this.ad = this.ad.filter((item: EnemyAD) => {
      if (this.player.isCollidingAD(item)) {
        this.adsHit += 1;
        return false;
      }
      return true;
    })

    if (this.adsHit > 4) {
      return new Gameover(this.maxX, this.maxY);
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.player.render(canvas);
    this.ad.forEach((item: EnemyAD) => item.render(canvas));
    this.bullet.render(canvas);
    CanvasUtil.writeTextToCanvas(canvas, `Score: ${this.score}`, this.dimensionsX + 50, this.dimensionsY + 50, 'right', 'Arial', 20, 'white');
  }
}
