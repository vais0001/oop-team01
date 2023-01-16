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

  private levelTimer: number;

  private level: number;

  private abilityCount: number;

  public constructor(maxX: number, maxY: number, level: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/arrow_thrower_scene.png');
    this.player = new Player(this.dimensionsX + 200, this.dimensionsY + 500);
    this.player.setSpeed(5)
    this.antagonist = new Antagonist(this.dimensionsX + 1100, this.dimensionsY + 30);
    this.abilityShoot = false;
    this.bulletsTimer = 200;
    this.antagonist.changeImage('./assets/trojanfinal.png');
    this.levelTimer = 10000;
    this.level = 0;
    this.abilityCount = 0;
  }

  public processInput(keyListener: KeyListener): void {
    if (this.player.getPosX() > this.dimensionsX + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA')) {
        this.player.move(0, 150);
      }
    }

    if (this.player.getPosY() > this.dimensionsY + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) this.player.move(1, 150);
    }

    if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 115) {
      if (keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD')) {
        this.player.move(2, 150);
      }
    }

    if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 140) {
      if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) this.player.move(3, 150);
    }
  }

  public update(elapsed: number): Scene {
    // functions for all levels
    this.levelTimer -= elapsed;
    this.bullets.forEach((item: ShootingAbility) => {
      item.update(elapsed)
    })
    this.bullets = this.bullets.filter((item: ShootingAbility) => {
      if (item.getPosX() > 1500 || item.getPosX() < 0 || item.getPosY() > 900 || item.getPosY() < 0) {
        return false;
      } else return true;
    })


    // Level 0, shooting level;
    if (this.levelTimer > 0 && this.level === 0) {
      if (this.abilityShoot === false) {
        setTimeout(() => {
          this.abilityShoot = true;
        }, 1000)
      }
      this.bulletsTimer -= elapsed;
      if (this.abilityShoot === true) {
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 5, 0))
          this.bulletsTimer = 500;
        }
      }

    }
    if (this.levelTimer <= 0) {
      this.level = 1;
      this.levelTimer = 100000000;
    }

    // level 1
    if (this.level === 1) {
      this.bulletsTimer -= elapsed;
      if (this.antagonist.getPosX() > 100 && this.abilityCount === 0) {
        this.antagonist.addOrSubPosX(1, 1)
        if (this.bulletsTimer <= 0) {
        this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 3, 1))
        this.bulletsTimer = 800;
      }
      }
      if (this.antagonist.getPosX() < 101) {
        this.abilityCount = 1
      }
      if (this.abilityCount === 1) {
        this.antagonist.addOrSubPosX(1, 0)
        this.antagonist.changeImage('./assets/trojanfinalright.png');
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 3, 1))
          this.bulletsTimer = 800;
        }
      }
      if (this.antagonist.getPosX() > this.dimensionsX + 1050 && this.abilityCount === 1) {
        this.abilityCount = 2;
        this.antagonist.changeImage('./assets/trojanfinal.png');
      }
    }


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
