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
    this.obstacle = new Obstacle(this);

    const controls = new Controls(this);
    controls.move();

    this.intervalId = setInterval(() => {
      this.update();
      this.frames += 1;
    }, 1000 / 60);
  }
  drawBackground() {
    this.background.src = "/images/5559852.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }
  createObstacles(){
    if (this.frames % 60 == 0) {
      this.obstacles.push(new Obstacle(this));
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBackground();

    this.createObstacles()

    this.obstacles.forEach((item) => {
      item.drawObstacle()
      item.move()
    });

 

    this.player.draw();
  
  }
}
