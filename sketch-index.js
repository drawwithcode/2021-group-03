let chestsB = [];
let butts = [];
let legs = [];
let heads = [];
let ants = [];

function preload() {
  for (let i = 1; i < 6; i++) {
    chestsB[i] = loadImage("assets/partsNew/chest/chest-B-" + i + ".png");
  }
}

function setup() {
  let canvasHome = createCanvas(500, 500);
  canvasHome.parent("home-gif-2");
}

function draw() {
  //   background("red");
  if (InsectsArray) {
    for (let i = 0; i < InsectsArray.length; i++) {
      let Chest = InsectsArray[i].chest;

      console.log(Chest);

      imageMode(CENTER);
      image(
        chestsB[Chest],
        width / 2,
        height / 2,
        chestsB[Chest].width / 4.6,
        chestsB[Chest].height / 4.6
      );
    }
  }
}
