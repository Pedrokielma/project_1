class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.player = null;
    this.obstacles = [];
    this.background = new Image();
    this.frames = 0;
    this.x = 0;
    this.y = 0;
    this.canvasWidth = 500;
    this.canvasHeight = 700;
    this.intervalId = null;
  }
  start() {
    this.player = new Player(this);
    const controls = new Controls(this);
    controls.move();

    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }
  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.player.draw();
  }
}

