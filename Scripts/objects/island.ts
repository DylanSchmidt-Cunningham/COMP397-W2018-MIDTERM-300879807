module objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dx, this._dy = 5;
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {
      if(managers.Game.currentScene == config.Scene.PLAY)
      {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
      }
      else if(managers.Game.currentScene == config.Scene.LEVEL2)
      {
        this.x = 640 + this.width;
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
      }
    }

    // move the object to some new location
    public Move():void {
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
    public CheckBounds():void {
      // check lower or left bounds
      if( (managers.Game.currentScene == config.Scene.PLAY &&
        this.y >= 480 + this.height) || 
        (managers.Game.currentScene == config.Scene.LEVEL2 &&
        this.x <= -this.width) ){
        this.Reset();
      }
    }
  }
}
