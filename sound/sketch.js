let clockSound;
let canvas;

function preload() {
  // Load a sound file
  clockSound = loadSound("assets/sound/clock.mp3");
}

function setup() {
  canvas = createCanvas(400, 400);
  clockSound.setVolume(0.0);
}

function draw() {
  background(220);
  canvas.mouseClicked(playMusic);
  // if(clockSound.setVolume <0.5){

  // }
}

function playMusic() {
  if (clockSound.isPlaying() == false) {
    //il volume parte a 0 e in 10 secondi sale a 0.3
    clockSound.setVolume(0.3, 10);
    clockSound.loop();
  }
}
