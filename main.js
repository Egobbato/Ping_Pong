const canvasEl = document.querySelector("canvas"),
  canvasEcx = canvasEl.getContext("2d");

function setup() {
  canvasEl.width = canvasEcx.width = window.innerWidth;
  canvasEl.height = canvasEcx.height = window.innerHeight;
}

setup();

function draw() {
  canvasEcx.fillStyle = "#286047";
  canvasEcx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

draw();
