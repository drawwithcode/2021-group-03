function setup() {
  createCanvas(windowWidth, windowHeight);

  //   if (InsectsArray) {
  //     console.log(InsectsArray.length);
  //     for (let i = 0; i < InsectsArray.length; i++) {
  //       let box = createDiv("hey");
  //       box.class("insect-box");
  //       box.parent("archive-container");
  //     }
  //   }

  for (let a = 0; a < 30; a++) {
    let box = createDiv("hey");
    box.class("insect-box");
    box.parent("archive-container");
  }
}

function draw() {
  background(255, 252, 241);
  if (InsectsArray) {
    // for (let i = 0; i < InsectsArray.length; i++) {
    //   let box = createDiv("hey");
    //   box[i] = createDiv("hey");
    //   let box = createDiv("hey");
    //   box.class("insect-box");
    //   box.parent("archive-container");
    //   noLoop();
    // }
    // for (let j = 0; j < 6; j++) {
    //   let box = createDiv("hey");
    //   box.class("insect-box");
    //   box.parent("archive-container");
    // }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
