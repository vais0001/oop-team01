import CanvasUtil from './CanvasUtil.js';
import Computer from './Computer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';

export default class Bedroom extends Scene {

  private starting: boolean;

  private player: Player;

  private computer: Computer;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/timmysroom.png');
    this.starting = false;
    this.player = new Player(window.innerWidth, window.innerHeight);
    this.computer = new Computer();
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
    if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(0);
    if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(1)
    if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(2)
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(3)
  }

  public update(elapsed: number): Scene {

    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 0, 0);
    this.player.render(canvas)
    this.computer.render(canvas)
  }
}
