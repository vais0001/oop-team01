import CanvasUtil from "../CanvasUtil.js";
import EnemyAD from "./EnemyAD.js";

export default class EnemyAD1 extends EnemyAD {
  public constructor(maxY: number) {
    super(maxY);
    this.image = CanvasUtil.loadNewImage('../../placeholders/AD.png');
  }

  public update(elapsed: number): void {
    this.posX += elapsed * 0.2;
  }
}
