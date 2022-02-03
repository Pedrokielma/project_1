const game = [];
window.onload = () => {
  document.getElementById("start-button").addEventListener("click", () => {
    let canvas = document.querySelector("#canvas");
    let initialPage = document.querySelector("#initial-page")
    initialPage.style.display = "none";
    canvas.style.display = "block";
    startGame();
  });

  function startGame() {
    if (game.length < 1) {
      game.push(new Game());
      game[0].start();
    }
  }
};
