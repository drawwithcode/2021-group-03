let clockSound;
let canvas;

function preload() {
  clockSound = loadSound("assets/sound/clock.mp3");
}

function setup() {
  canvas = createCanvas(400, 400);
}

function draw() {
  background(220);
  canvas.mouseClicked(playMusic);
}

function playMusic() {
  if (clockSound.isPlaying() == false) {
    clockSound.loop();
    clockSound.setVolume(0.15, [1000]);
  }
}
