const canvasEl = document.querySelector("canvas"),
  canvasEcx = canvasEl.getContext("2d");

const gapX = 10;
const mouse = { x: 0, y: 0 };

/* Objeto Campo */
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    canvasEcx.fillStyle = "#286047";
    canvasEcx.fillRect(0, 0, this.w, this.h);
  },
};

//Desenhando a Linha
const line = {
  w: 15,
  h: field.h,
  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h);
  },
};

//Desenhando a Raquete
const leftPaddle = {
  x: gapX,
  y: 0,
  w: line.w,
  h: 200,
  _move: function () {
    this.y = mouse.y - this.h / 2;
  },
  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.fillRect(this.x, this.y, this.w, this.h);
    this._move();
  },
};

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 200,
  w: line.w,
  h: 200,
  _move: function () {
    this.y = ball.y;
  },
  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.fillRect(this.x, this.y, this.w, this.h);
    this._move();
  },
};

const score = {
  human: 3,
  computer: 1,
  draw: function () {
    canvasEcx.font = "bold 72px Arial";
    canvasEcx.textAlign = "center";
    canvasEcx.textBaseline = "top";
    canvasEcx.fillStyle = "#01341D";
    canvasEcx.fillText(this.human, field.w / 4, 50);
    canvasEcx.fillText(this.computer, field.w / 4 + field.w / 2, 50);
  },
};

const ball = {
  x: 0,
  y: 0,
  r: 20,
  speed: 3,
  directionX: 1,
  directionY: 1,
  _calcPosition: function () {
    // Verifica as laterais superior e inferior do campo
    if (
      (this.y - this.r < 0 && this.directionY < 0) ||
      (this.y > field.h - this.r && this.directionY > 0)
    ) {
      //rebate a bola revertendo o sinal do eixo y
      this._reverseY();
    }
  },
  _reverseX: function () {
    /* 1 * -1 = -1
      -1 * -1 = 1 */
    this.directionX *= -1;
  },
  _reverseY: function () {
    /* 1 * -1 = -1
      -1 * -1 = 1 */
    this.directionY *= -1;
  },
  _move: function () {
    this.x += this.directionX * this.speed;
    this.y += this.directionY * this.speed;
  },

  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.beginPath();
    canvasEcx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    canvasEcx.fill();
    this._calcPosition();
    this._move();
  },
};

function setup() {
  canvasEl.width = canvasEcx.width = field.w;
  canvasEl.height = canvasEcx.height = field.h;
}

function draw() {
  //Desenhando o campo//
  field.draw();
  /*desenhando a linha central*/
  line.draw();
  /*Desenhando as raquete esquerda*/
  leftPaddle.draw();
  /* Desenhando raquete direita*/
  rightPaddle.draw();
  /* Desenhando o Placar */
  score.draw();
  /* Desenhando a bola*/
  ball.draw();
}

window.animationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setInterval(callback, 1000 / 60);
    }
  );
})();

function main() {
  animationFrame(main);
  draw();
}

canvasEl.addEventListener("mousemove", (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  console.log(mouse);
});

setup();
main();
