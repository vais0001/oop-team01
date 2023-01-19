import Drawable from '../Drawable.js';
export default class EnemyAD extends Drawable {
    constructor(maxY) {
        super();
        this.posX = this.dimensionsX;
        this.posY = (Math.random() * ((maxY - 260) - this.dimensionsY + 100) + this.dimensionsY + 100);
    }
}
//# sourceMappingURL=EnemyAD.js.map