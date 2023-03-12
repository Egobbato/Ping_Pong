const canvasEl = document.querySelector("canvas"),
  canvasEcx = canvasEl.getContext("2d");

const lineWidtd = 15;

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
  canvasEcx.fillStyle = "#ffffff";
  canvasEcx.fillRect(10, 400, lineWidtd, 200);

  /* Desenhando raquete direita*/
  canvasEcx.fillStyle = "#ffffff";
  canvasEcx.fillRect(window.innerWidth - lineWidtd - 10, 200, lineWidtd, 200);

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
