export default class Scene {
    maxX;
    maxY;
    image;
    image1;
    dimensionsX;
    dimensionsY;
    backgroundWidth;
    backgroundHeight;
    lang;
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.backgroundHeight = 800;
        this.backgroundWidth = 1422;
        this.dimensionsX = (window.innerWidth - this.backgroundWidth) / 2;
        this.dimensionsY = (window.innerHeight - this.backgroundHeight) / 2;
    }
}
//# sourceMappingURL=Scene.js.map