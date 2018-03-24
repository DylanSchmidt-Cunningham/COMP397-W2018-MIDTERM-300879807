module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dx: number;
    private _dy: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
      if(managers.Game.currentScene == config.Scene.PLAY)
      {
        this.y = -960; // top y coord - 2 * canvasheight = 0 - 2 * 480
      }
      else if (managers.Game.currentScene == config.Scene.LEVEL2)
      {
        this.x = 0;
      }
    }

    // move the object to some new location
    private _move():void {
      if(managers.Game.currentScene == config.Scene.PLAY)
      {
        this.y += this._dy;
      }
      else if(managers.Game.currentScene == config.Scene.LEVEL2)
      {
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      if(managers.Game.currentScene == config.Scene.PLAY && this.y >= 0) {
        this._reset();
      }
      else if(managers.Game.currentScene == config.Scene.LEVEL2 
        && this.x <= -800) {
        this._reset();
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dx = 5;
      this._dy = 5;
      if(managers.Game.currentScene == config.Scene.LEVEL2)
      {
        // rotate the ocean image
        this.rotation = -90;
      }
      this._reset();
    }

    // updates the game object every frame
    public Update():void {
      this._move();
      this._checkBounds();
    }
  }
}
