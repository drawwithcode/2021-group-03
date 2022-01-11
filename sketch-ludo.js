//variable that will contain info about microphone
let mic;

let timer;
//variable for amount of time left
let timeLeft = 5;
let startTime = 0;
let currentTime = 0;

let dx;

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  background(255);

  //accessing html timer element
  timer = select("#timer");
  timer.html(timeLeft - currentTime);
}

function draw() {
  // background(255);
  //if something is wrong, do not run the function
  if (mic) {
    //get the volume of what the microphone is picking up
    const micLevel = mic.getLevel();
    //remap to more evident values
    let d = map(micLevel, 0, 1, 1, 350);
    //ellipse with the size correponding to the volume

    push();
    let spessore = map(d, 1, 350, 0.5, 5);
    strokeWeight(spessore);
    ellipse(width / 4, height / 2, d);
    pop();

    dx = map(d, 1, 350, 0, width);
    // ellipse(dx, 100, 50, 50);
    //change pallino position according to
    select("#pallino").position(dx, 0);
  }
}

//start picking up sound only when the mouse is pressed
function mousePressed() {
  userStartAudio();
  mic = new p5.AudioIn();
  //when mouse is pressed, microphone will get and manipulate inputs
  mic.start();
  //when mouse is pressed, start the countdown
  startTimer();
}

function startTimer() {
  startTime = millis();
  //want the timeIt event to happen every 1000 milliseconds
  let interval = setInterval(timeIt, 1000);
  //declare timeIt function
  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(timeLeft - currentTime);
    //when 0 is reached, stop the timer
    if (currentTime == timeLeft) {
      let finalValue = dx;
      console.log(finalValue);
      clearInterval(interval);
      mic.stop();
    }
  }
}
