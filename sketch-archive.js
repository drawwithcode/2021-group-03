function setup() {
  //   createCanvas(windowWidth, windowHeight);
  noCanvas();
}

function draw() {
  background(255, 252, 241);

  if (InsectsArray) {
    for (let i = InsectsArray.length - 1; i >= 0; i--) {
      let box = createDiv()
        .id("box-" + i)
        .addClass("insect-box")
        .parent("archive-container");

      noLoop();

      let Chest = InsectsArray[i].chest;
      let Butt = InsectsArray[i].butt;
      let Leg = InsectsArray[i].leg;
      let Head = InsectsArray[i].head;
      let Ant = InsectsArray[i].ant;

      let partsBox = createDiv().parent(box).addClass("partsBox");

      let legBox = createImg("assets/partsNew/leg/leg-" + Leg + ".png")
        .parent(partsBox)
        .addClass("part-img");
      let antBox = createImg("assets/partsNew/ant/ant-" + Ant + ".png")
        .parent(partsBox)
        .addClass("part-img");
      let headBox = createImg("assets/partsNew/head/head-" + Head + ".png")
        .parent(partsBox)
        .addClass("part-img");
      let buttBox = createImg("assets/partsNew/butt/butt-" + Butt + ".png")
        .parent(partsBox)
        .addClass("part-img");
      let chestBox = createImg("assets/partsNew/chest/chest-" + Chest + ".png")
        .parent(partsBox)
        .addClass("part-img");

      let name = createElement("p", InsectsArray[i].name).parent(box).addClass("name");
      let date = createElement("p", InsectsArray[i].date).parent(box).addClass("date");
    }
  }
}
