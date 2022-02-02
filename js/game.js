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
    this.life = 5;
    this.bullet = [];
  }
  start() {
    this.player = new Player(this);

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
  createObstacles() {
    if (this.frames % 120 == 0) {
      this.obstacles.push(new Obstacle(this));
    }
  }

  createBullet() {
    this.bullet.push(new Bullet(this));
  }
  gameOver() {
    clearInterval(this.intervalId);
  }
  distroyObstacles() {
    const bullet = this.bullet;
    console.log(bullet);

    // const crashed = this.obstacles.some(function (obstacle) {
    //   return bullet.hitTarget(obstacle);
    // });
    // if (crashed) {
    //   // this.stop()
    //   console.log('crashed')
    // }

  bullet.forEach((item)=> {
    const crashed = this.obstacles.some(function (obstacle, index) {
      console.log(obstacle, index)
      
      return item.hitTarget(obstacle)
      
    });
    if(crashed){
      //this.earaseObstavcle()
      console.log('crashed')
    }
    //console.log(crashed)
  })
  }


  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBackground();

    this.createObstacles();

    this.obstacles.forEach((item, i) => {
      item.drawObstacle();
      item.move();
      item.loosingPoinst(i);
    });

    this.bullet.forEach((item) => {
      item.drawBullet();
      item.moveBullet();
    });
    this.distroyObstacles();
    this.player.draw();
  }
}
