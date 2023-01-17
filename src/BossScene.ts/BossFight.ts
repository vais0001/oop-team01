import Antagonist from "../Antagonist.js";
import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import LoadingSceneEnd from "../LoadingScenes/LoadingSceneEnd.js";
import Player from "../Player.js";
import Scene from "../Scene.js";
import Lives from "../Whackamole/Lives.js";
import Lightsaber from "./Lightsaber.js";
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

  private lightsaber: Lightsaber;

  private lightsaberSide: number;

  private playerSide: number; // 1 left 0 right

  private healthBar: number;

  private hit: boolean;

  private lives: Lives[] = [];

  private buttonsPressed: number;

  public constructor(maxX: number, maxY: number, level: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/timmyroom3.png');
    this.player = new Player(this.dimensionsX + 200, this.dimensionsY + 500);
    this.antagonist = new Antagonist(1050, 90);
    this.abilityShoot = false;
    this.bulletsTimer = 200;
    this.antagonist.changeImage('./assets/trojanfinal.png');
    this.levelTimer = 10000;
    this.level = 0;
    this.abilityCount = 0;
    this.lightsaberSide = 0;
    this.playerSide = 0;
    this.lightsaber = new Lightsaber(this.player.getPosX(), this.player.getPosY() + 80);
    this.healthBar = 650;
    this.hit = false;
    for (let i = 0; i < 250; i += 50) {
      this.lives.push(new Lives(this.dimensionsX + 40, 250 + i + this.dimensionsY));
    }
  }

  public processInput(keyListener: KeyListener): void {
    this.buttonsPressed = 0;
    if (this.player.getPosX() > this.dimensionsX + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_LEFT) || keyListener.isKeyDown('KeyA')) {
        this.player.move(0, 50);
        this.buttonsPressed += 1;
        this.lightsaber.changeImage('./assets/lightsaber1.png');
        this.lightsaberSide = 1;
        this.playerSide = 1;
      }
    }

    if (this.player.getPosY() > this.dimensionsY + 5) {
      if (keyListener.isKeyDown(KeyListener.KEY_UP) || keyListener.isKeyDown('KeyW')) {
        this.player.move(1, 50);
        this.buttonsPressed += 1;
      }
    }

    if (this.player.getPosX() < this.dimensionsX + this.backgroundWidth - 115) {
      if (keyListener.isKeyDown(KeyListener.KEY_RIGHT) || keyListener.isKeyDown('KeyD')) {
        this.player.move(2, 50);
        this.buttonsPressed += 1;
        this.lightsaber.changeImage('./assets/lightsaber.png');
        this.lightsaberSide = 0;
        this.playerSide = 0;
      }
    }

    if (this.player.getPosY() < this.dimensionsY + this.backgroundHeight - 140) {
      if (keyListener.isKeyDown(KeyListener.KEY_DOWN) || keyListener.isKeyDown('KeyS')) {
        this.player.move(3, 50);
        this.buttonsPressed += 1;
      }
    }

    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.lightsaberSide = 2;
      this.hit = true;
    }
  }

  public update(elapsed: number): Scene {
    // functions for all levels
    if (this.buttonsPressed === 0) {
      this.player.move(66, 150);
    }
    console.log(this.buttonsPressed);
    this.levelTimer -= elapsed;
    if (this.lightsaberSide === 0) {
      this.lightsaber.changeImage('./assets/lightsaber.png');
      this.lightsaber.update(elapsed, this.player.getPosX(), this.player.getPosY() + 80);
    }
    if (this.lightsaberSide === 1) {
      this.lightsaber.changeImage('./assets/lightsaber1.png');
      this.lightsaber.update(elapsed, this.player.getPosX() - 35, this.player.getPosY() + 80);
    }
    if (this.lightsaberSide === 2) {
      if (this.playerSide === 0) {
        this.lightsaber.slashImage(1);
        this.lightsaber.update(elapsed, this.player.getPosX() - 35, this.player.getPosY() - 50)
        setTimeout(() => {
          if (this.playerSide === 1) {
            this.lightsaberSide = 1;
          } else {
            this.lightsaberSide = 0;
            this.hit = false;
          }
        }, 100);
      } else if (this.playerSide === 1) {
        this.lightsaber.slashImage(0);
        this.lightsaber.update(elapsed, this.player.getPosX() - 200, this.player.getPosY() - 50)
        setTimeout(() => {
          if (this.playerSide === 0) {
            this.lightsaberSide = 0;
          } else {
            this.lightsaberSide = 1;
            this.hit = false;
          }
        }, 100);
      }
    }

    this.bullets.forEach((item: ShootingAbility) => {
      item.update(elapsed);
    });

    this.bullets = this.bullets.filter((item: ShootingAbility) => {
      if (item.getPosX() > 1500 || item.getPosX() < 0 || item.getPosY() > 900 || item.getPosY() < 0) {
        return false;
      }

      return true;
    });

    // Level 0, shooting level;
    if (this.levelTimer > 0 && this.level === 0) {
      if (this.abilityShoot === false) {
        setTimeout(() => {
          this.abilityShoot = true;
        }, 1000);
      }
      this.bulletsTimer -= elapsed;
      if (this.abilityShoot === true) {
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 5, 0, 0))
          this.bulletsTimer = 500;
        }
      }
    }
    if (this.levelTimer <= 0) {
      this.level = 1;
      this.levelTimer = 100000000;
    }

    // level 1 mooving and shooting level
    if (this.level === 1) {
      this.bulletsTimer -= elapsed;
      if (this.antagonist.getPosX() > 100 && this.abilityCount === 0) {
        this.antagonist.addOrSubPosX(0.2 * elapsed, 1)
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 3, 1, 0))
          this.bulletsTimer = 800;
        }
      }
      if (this.antagonist.getPosX() < 101) {
        this.abilityCount = 1;
      }
      if (this.abilityCount === 1) {
        this.antagonist.addOrSubPosX(0.2 * elapsed, 0)
        this.antagonist.changeImage('./assets/trojanfinalright.png');
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 3, 1, 0))
          this.bulletsTimer = 800;
        }
      }
      if (this.antagonist.getPosX() > this.dimensionsX + 1050 && this.abilityCount === 1) {
        this.abilityCount = 2;
        this.antagonist.changeImage('./assets/trojanfinal.png');
        this.level = 2;
        this.levelTimer = 20000;
      }
    }
    // level 2  ramming
    if (this.level === 2) {
      this.bulletsTimer -= elapsed;
      if (this.abilityCount === 2 && this.antagonist.getPosY() <= 400) {
        this.antagonist.addOrSubPosY(0.2 * elapsed, 0)
        if (this.bulletsTimer <= 0) {
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 0, 0.5, 1))
          this.bulletsTimer = 1000;
        }
      }
      if (this.antagonist.getPosY() >= 400) {
        this.abilityCount = 3;
        if (this.bulletsTimer <= 0 && this.abilityCount === 3) {
          this.antagonist.addOrSubPosY(0.2 * elapsed, 1)
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 0, 0.5, 1))
          this.bulletsTimer = 600;
        }
        if (this.abilityCount === 3 && this.antagonist.getPosY() <= 400) this.abilityCount = 4;
      }
      if (this.abilityCount === 4) {
        this.antagonist.addOrSubPosY(0.2 * elapsed, 1);
        if (this.bulletsTimer <= 0 && this.abilityCount === 4) {
          this.antagonist.addOrSubPosY(0.2 * elapsed, 1)
          this.bullets.push(new ShootingAbility(this.antagonist.getPosX() + 100, this.antagonist.getPosY() + 100, 0, 0.5, 1))
          this.bulletsTimer = 600;
        }
      }
      if (this.abilityCount === 4 && this.antagonist.getPosY() <= 100) this.abilityCount = 5;
    }

    if (this.hit === true
      && this.lightsaber.collidesWithAntagonist(this.antagonist)
      && this.healthBar > 0
    ) {
      this.healthBar -= 0.1;
    }

    if (this.healthBar < 600) return new LoadingSceneEnd(this.backgroundWidth, this.backgroundHeight);

    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    this.bullets.forEach((item: ShootingAbility) => item.render(canvas));
    this.lives.forEach((lives: Lives) => lives.render(canvas));
    this.antagonist.render(canvas);
    this.player.render(canvas);
    this.lightsaber.render(canvas);
    CanvasUtil.fillRectangle(canvas, this.dimensionsX + 390, this.dimensionsY + 80, this.healthBar, 40, 'red');
    CanvasUtil.drawRectangle(canvas, this.dimensionsX + 390, this.dimensionsY + 80, 650, 40, 'black');
  }
}
