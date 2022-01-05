let archive;

let chests = [];
let butts = [];
let legs = [];
let heads = [];
let ants = [];

function preload() {
  archive = loadJSON("insects.json");

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
}

function draw() {
  background(255, 252, 241);

  let Insects = archive.insects;

  for (let i = 0; i < Insects.length; i++) {
    translate(200, 0);
    textAlign(CENTER);
    textFont(centuryI);
    textSize(20);
    text(Insects[i].name, 0, 360);
    textFont(centuryR);
    textSize(14);
    text(Insects[i].date, 0, 390);

    let Chest = Insects[i].parts[0];
    let Butt = Insects[i].parts[1];
    let Leg = Insects[i].parts[2];
    let Head = Insects[i].parts[3];
    let Ant = Insects[i].parts[4];

    imageMode(CENTER);

    //LEG
    image(
      legs[Leg.leg],
      0,
      200,
      legs[Leg.leg].width / 4.6,
      legs[Leg.leg].height / 4.6
    );

    //ANT
    image(
      ants[Ant.ant],
      0,
      200,
      ants[Ant.ant].width / 4.6,
      ants[Ant.ant].height / 4.6
    );

    //HEAD
    image(
      heads[Head.head],
      0,
      200,
      heads[Head.head].width / 4.6,
      heads[Head.head].height / 4.6
    );

    //BUTT
    image(
      butts[Butt.butt],
      0,
      200,
      butts[Butt.butt].width / 4.6,
      butts[Butt.butt].height / 4.6
    );

    //CHEST
    image(
      chests[Chest.chest],
      0,
      200,
      chests[Chest.chest].width / 4.6,
      chests[Chest.chest].height / 4.6
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
