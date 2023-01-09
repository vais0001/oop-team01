import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected keyListener: KeyListener;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  public abstract processInput(): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
