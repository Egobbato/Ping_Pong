const canvasEl = document.querySelector("canvas"),
  canvasEcx = canvasEl.getContext("2d");

const lineWidtd = 15;

function setup() {
  canvasEl.width = canvasEcx.width = window.innerWidth;
  canvasEl.height = canvasEcx.height = window.innerHeight;
}

setup();

function draw() {
  canvasEcx.fillStyle = "#286047";
  canvasEcx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  canvasEcx.fillStyle = "#ffffff";

  const x = window.innerWidth / 2 - lineWidtd / 2;
  const y = 0;
  const w = lineWidtd;
  const h = window.innerHeight;

  canvasEcx.fillRect(x, y, w, h);
}

draw();
