import CanvasUtil from '../CanvasUtil.js';
import EnemyAD from './EnemyAD.js';
export default class EnemyAD1 extends EnemyAD {
    constructor(maxY) {
        super(maxY);
        this.image = CanvasUtil.loadNewImage('../../assets/enemyAD.jpg');
    }
    update(elapsed) {
        this.posX += elapsed * 0.2;
    }
    moveToComputer(posX, posY) {
        const xDifference = posX - this.posX;
        const yDifference = posY - this.posY;
        this.posX += xDifference / 100;
        this.posY += yDifference / 100;
    }
}
//# sourceMappingURL=EnemyAD1.js.map