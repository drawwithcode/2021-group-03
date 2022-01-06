let chests = [];
let butts = [];
let legs = [];
let heads = [];
let ants = [];

function preload() {
  for (let i = 0; i < 6; i++) {
    chests[i] = loadImage("assets/parts/chest/chest-" + i + ".png");
    butts[i] = loadImage("assets/parts/butt/butt-" + i + ".png");
    legs[i] = loadImage("assets/parts/leg/leg-" + i + ".png");
    heads[i] = loadImage("assets/parts/head/head-" + i + ".png");
    ants[i] = loadImage("assets/parts/ant/ant-" + i + ".png");
  }

  centuryR = loadFont("assets/fonts/century-schoolbook/cen-schlbk-r.TTF");
  centuryI = loadFont("assets/fonts/century-schoolbook/cen-schlbk-i.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log(InsectsArray);
}

function draw() {
  background(255, 252, 241);

  if (InsectsArray) {
    for (let i = 0; i < InsectsArray.length; i++) {
      translate(200, 0);
      textAlign(CENTER);
      textFont(centuryI);
      textSize(20);
      text(InsectsArray[i].name, 0, 360);
      textFont(centuryR);
      textSize(14);
      text(InsectsArray[i].date, 0, 390);

      let Chest = InsectsArray[i].chest;
      let Butt = InsectsArray[i].butt;
      let Leg = InsectsArray[i].leg;
      let Head = InsectsArray[i].head;
      let Ant = InsectsArray[i].ant;

      imageMode(CENTER);

      image(legs[Leg], 0, 200, legs[Leg].width / 4.6, legs[Leg].height / 4.6);
      image(ants[Ant], 0, 200, ants[Ant].width / 4.6, ants[Ant].height / 4.6);
      image(
        heads[Head],
        0,
        200,
        heads[Head].width / 4.6,
        heads[Head].height / 4.6
      );
      image(
        butts[Butt],
        0,
        200,
        butts[Butt].width / 4.6,
        butts[Butt].height / 4.6
      );
      image(
        chests[Chest],
        0,
        200,
        chests[Chest].width / 4.6,
        chests[Chest].height / 4.6
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
