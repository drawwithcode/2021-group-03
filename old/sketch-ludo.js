//variable that will contain info about microphone
let mic;

// let timer;
// let timeLeft = 5;
// let startTime = 0;
// let currentTime = 0;

// let dx;

function setup() {
  createCanvas(windowWidth, windowHeight - 50);

  //accessing html timer element
  // timer = select("#timer");
  // timer.html(timeLeft - currentTime);
}

function draw() {
  background(255, 252, 241, 50);
  //if something is wrong, do not run the function
  if (mic) {
    //get the volume of what the microphone is picking up
    const micLevel = mic.getLevel();
    //remap to more evident values
    let d = map(micLevel, 0, 1, 1, 500);
    //ellipse with the size correponding to the volume

    push();
    // let spessore = map(d, 1, 350, 0.5, 5);
    // strokeWeight(spessore);
    strokeWeight(1);
    stroke(173, 149, 127);
    fill(255, 252, 241);
    ellipse(width / 4, height / 2, d);
    pop();

    // dx = map(d, 1, 350, 0, width);
    // select("#pallino").position(dx, 0);
  }
}

//start picking up sound only when the mouse is pressed
function mousePressed() {
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
  // startTimer();
}

// function startTimer() {
//   startTime = millis();
//   let interval = setInterval(timeIt, 1000);
//   function timeIt() {
//     currentTime = floor((millis() - startTime) / 1000);
//     timer.html(timeLeft - currentTime);
//     if (currentTime == timeLeft) {
//       let finalValue = dx;
//       console.log(finalValue);
//       clearInterval(interval);
//       mic.stop();
//     }
//   }
// }
