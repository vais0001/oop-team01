import Antagonist from "../Antagonist.js";
import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Player from "../Player.js";
import Scene from "../Scene.js";
import ShootingAbility from "./ShootingAbility.js";

export default class BossFight extends Scene {

  private antagonist: Antagonist;

  private player: Player;

  private bullets: ShootingAbility[] = [];

  private abilityShoot: boolean;

  private bulletsTimer: number;

  public constructor(maxX: number, maxY: number, level: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/arrow_thrower_scene.png');
    this.player = new Player(this.dimensionsX + 200, this.dimensionsY + 500);
    this.player.setSpeed(5)
    this.antagonist = new Antagonist(this.dimensionsX + 1000, this.dimensionsY + 100);
    this.abilityShoot = false;
    this.bulletsTimer = 200;

  }

  public processInput(keyListener: KeyListener): void {
    if (this.player.getPosX() > this.dimensionsX + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA')) {
        this.player.move(0);
        this.player.playerMoving(1, 50)
      }
    }

    if (this.player.getPosY() > this.dimensionsY + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) this.player.move(1);
    }

    if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 115) {
      if (keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD')) {
        this.player.move(2);
        this.player.playerMoving(3, 50)
      }
    }

    if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 140) {
      if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) this.player.move(3);
    }
  }
  public update(elapsed: number): Scene {
    if (this.abilityShoot === false) {
      setTimeout(() => {
        this.abilityShoot = true;
      }, 1000)
    }

    this.bulletsTimer -= elapsed;

    if (this.abilityShoot === true) {
      if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 5, 0.3))
        this.bulletsTimer = 500;
      }
    }

    this.bullets.forEach((item: ShootingAbility) => {
      item.update(elapsed)
    })
    this.bullets = this.bullets.filter((item: ShootingAbility) => {
      if(item.getPosX() > 1500 || item.getPosX() < 0 || item.getPosY() > 900 || item.getPosY() < 0) {
        return false;
      } else return true;
    })

    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black')
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.bullets.forEach((item: ShootingAbility) => {
      item.render(canvas)
    })
    this.antagonist.render(canvas)
    this.player.render(canvas)


  }


}
