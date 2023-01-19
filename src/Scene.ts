import KeyListener from './KeyListener.js';
import Locale from './Locale.js';
import MouseListener from './MouseListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected image: HTMLImageElement;

  protected image1: HTMLImageElement;

  protected dimensionsX: number;

  protected dimensionsY: number;

  protected backgroundWidth: number;

  protected backgroundHeight: number;

  protected lang: boolean;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.backgroundHeight = 800;
    this.backgroundWidth = 1422;
    this.dimensionsX = (window.innerWidth - this.backgroundWidth) / 2;
    this.dimensionsY = (window.innerHeight - this.backgroundHeight) / 2;
  }

  public abstract processInput(keyListener: KeyListener, mouseListener: MouseListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
