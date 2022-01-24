let mic;

let sketch_1 = function (p) {
  p.setup = function () {};
  p.draw = function () {};
};

let sketch_Audio = function (p) {
  p.setup = function () {
    let canvasAudio = p.createCanvas(400, 400);
    canvasAudio.parent("question-5-canvas");
    canvasAudio.mousePressed(startAudio);
  };
  p.draw = function () {
    p.background(255, 252, 241, 100);
    if (mic) {
      const micLevel = mic.getLevel();
      let d = p.map(micLevel, 0, 1, 1, 350);

      p.push();
      p.strokeWeight(1);
      p.stroke(173, 149, 127);
      p.fill(255, 252, 241);
      p.circle(200, 200, d);
      p.pop();
    }
  };

  function startAudio() {
    p.userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
  }
};

let s1 = new p5(sketch_1);
let s4 = new p5(sketch_Audio);
