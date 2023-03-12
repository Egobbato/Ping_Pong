const canvasEl = document.querySelector("canvas"),
  canvasEcx = canvasEl.getContext("2d");

const gapX = 10;

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
  y: 100,
  w: line.w,
  h: 200,
  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.fillRect(this.x, this.y, this.w, this.h);
  },
};

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 200,
  w: line.w,
  h: 200,
  draw: function () {
    canvasEcx.fillStyle = "#ffffff";
    canvasEcx.fillRect(this.x, this.y, this.w, this.h);
  },
};

function setup() {
  canvasEl.width = canvasEcx.width = field.w;
  canvasEl.height = canvasEcx.height = field.h;
}

setup();

function draw() {
  //Desenhando o campo//
  field.draw();
  /*desenhando a linha central*/
  line.draw();
  /*Desenhando as raquete esquerda*/
  leftPaddle.draw();
  /* Desenhando raquete direita*/
  rightPaddle.draw();
  /* Desenhando a bola*/
  canvasEcx.beginPath();
  canvasEcx.arc(500, 200, 20, 0, 2 * Math.PI, false);
  canvasEcx.fill();

  /* Desenhando o Placar */
  canvasEcx.font = "bold 72px Arial";
  canvasEcx.textAlign = "center";
  canvasEcx.textBaseline = "top";
  canvasEcx.fillStyle = "#01341D";
  canvasEcx.fillText("3", window.innerWidth / 4, 50);
  canvasEcx.fillText("1", window.innerWidth / 4 + window.innerWidth / 2, 50);
}

draw();
