class Obstacle{
constructor(game){
    // Math.random() * (max - min) + min;
    // Math.floor(Math.random() * max);
    this.game = game;
    this.height = 20;
    this.width = 20;
    this.x = Math.floor(Math.random() * 450);
    this.y = 0;
}
drawObstacle() {
    this.game.ctx.fillStyle = "black";
      
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);

}
}