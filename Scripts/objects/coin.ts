module objects {
  export class Coin extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("coin");
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds():void {
      // check lower or left bounds
      if( (managers.Game.currentScene == config.Scene.PLAY &&
        this.y >= 480 + this.height) || 
        (managers.Game.currentScene == config.Scene.LEVEL2 &&
        this.x <= -this.width) ){
        this.alpha = 1;
      }
    }
  }
}
