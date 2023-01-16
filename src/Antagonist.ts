import Drawable from './Drawable.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './ArrowThrower/Player.js';

export default class Antagonist extends Drawable {
  public cutsceneMoveTimer: number;

  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX + this.dimensionsX;
    this.posY = posY + this.dimensionsY;
    this.image = CanvasUtil.loadNewImage('./assets/trojanhorse.png');
    this.cutsceneMoveTimer = 5000;
  }

  public cutsceneMovement(elapsed: number): void {
    this.cutsceneMoveTimer -= elapsed;
    if (this.cutsceneMoveTimer < 0) {
      this.posX -= 0;
    } else if (this.cutsceneMoveTimer < 2000) {
      this.posX -= 2;
      this.posY -= 1;
    } else if (this.cutsceneMoveTimer < 5000) {
      this.posY += elapsed * 0.2;
      this.posX += elapsed * 0.5;
    }
  }

  public moveToPlayer(player: Player) {
    this.posX += Math.sqrt(((player.getPosX() - this.getPosX()) ** 2));
    this.posY += Math.sqrt(((player.getPosY() - this.getPosY()) ** 2));
  }

  public cutsceneMovementAway(speedX: number, speedY: number): void {
    this.posX += speedX;
    this.posY += speedY;
  }

  public getCutsceneMoveTimer(): number {
    return this.cutsceneMoveTimer;
  }
}
