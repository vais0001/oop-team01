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
    const distanceX: number = player.getPosX() - this.getPosX();
    const distanceY: number = player.getPosY() - this.getPosY();
    const slope: number = distanceY / distanceX;

    if (this.posX < player.getPosX() - 300) {
      this.posX += Math.cos(slope) * 2;
      this.posY += Math.sin(slope) * 2;
    } else {
      this.posX += 4;
    }
  }
}
