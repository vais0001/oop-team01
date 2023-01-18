import CanvasUtil from '../CanvasUtil.js';
import ADbullet from './ADbullet.js';
import EnemyAD from './EnemyAD.js';
export default class EnemyAD2 extends EnemyAD {
    nextFire;
    constructor(maxY) {
        super(maxY);
        this.image = CanvasUtil.loadNewImage('./assets/enemyAD2.png');
        this.nextFire = 0;
    }
    update(elapsed) {
        this.posX += elapsed * 0.3;
        this.nextFire -= elapsed;
    }
    stopAD(posX) {
        if (posX >= 200 + this.dimensionsX) {
            this.posX = 200 + this.dimensionsX;
        }
    }
    willFire() {
        if (this.posX === 200 + this.dimensionsX) {
            if (this.nextFire < 0) {
                this.nextFire = 2000;
                return true;
            }
            return false;
        }
        return false;
    }
    fire() {
        return new ADbullet(this.posX + this.image.width, this.posY + this.image.height / 2);
    }
}
//# sourceMappingURL=EnemyAD2.js.map