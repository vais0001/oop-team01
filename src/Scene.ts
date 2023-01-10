import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected image: HTMLImageElement;

  protected image1: HTMLImageElement;

  protected dimensionsX: number;

  protected dimensionsY: number;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;

    this.dimensionsX = (window.innerWidth - 1422) / 2;
    this.dimensionsY = (window.innerHeight - 800) / 2;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
