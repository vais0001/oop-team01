import CanvasUtil from "../CanvasUtil.js";
import Drawable from "../Drawable.js";
import Player from "./Player.js";

export default class ADbullet extends Drawable {
  public constructor(startX: number, startY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('../../placeholders/cursor_00000.png');
    this.posX = startX;
    this.posY = startY - this.image.height / 2;
  }

  public update(player: Player) {
    // this.posX += elapsed * 0.3;
    const distanceX: number = player.getPosX() - this.getPosX();
    const distanceY: number = player.getPosY() - this.getPosY();
    const slope: number = distanceY / distanceX;

    this.posX += Math.cos(slope) * 6;
    this.posY += Math.sin(slope) * 6;
  }
}
