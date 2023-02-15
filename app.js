const Board = {
  boardElement: null,
  squareNumber: 441,
  heart: [
    67, 68, 69, 70, 76, 77, 78, 78, 79, 87, 92, 96, 101, 107, 114, 116, 123,
    127, 136, 145, 148, 166, 169, 187, 191, 207, 213, 227, 235, 247, 257, 267,
    279, 287, 301, 307, 323, 327, 345, 347, 367,
  ],
  colors: ["red", "#1f0202"],
  current: null,
  init: function () {
    this.boardElement = document.getElementById("board");
    this.walkBoard();
    this.drawHeart();
  },
  walkBoard: function () {
    for (let i = 0; i < this.squareNumber; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      this.boardElement.append(square);

      square.onmouseover = this.setColor;
      square.onmouseleave = this.removeColor;
    }
  },
  drawHeart: function () {
    let time = 0;
    this.heart.reverse().forEach((pixel) => {
      setTimeout(() => {
        this.drawNext(pixel);
      }, time);
      time += 50;
    });
  },
  drawNext: function (pixel) {
    this.boardElement.children[pixel].classList.add("active");
    this.boardElement.children[pixel].style.backgroundColor =
      this.getRandomColor();
  },
  setColor: function (e) {
    let color = Board.getRandomColor();
    e.target.style.backgroundColor = color;
    e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  },
  removeColor: function (e) {
    e.target.style.backgroundColor = "#1d1d1d";
    e.target.style.boxShadow = "0 0 2px #000";
  },
  getRandomColor: function () {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Board.init();
});
