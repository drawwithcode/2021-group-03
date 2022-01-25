let sortDataCresc = 0;
let sortDataDecresc = 0;

let sortNameCresc = 0;
let sortNameDecresc = 0;

let sortSizeCresc = 1;
let sortSizeDecresc = 0;

function setup() {
  //   createCanvas(windowWidth, windowHeight);
  noCanvas();
}

function compareNameAB(a, b) {
  return a.name - b.name;
}

function draw() {
  background(255, 252, 241);

  //SORT NAME
  if (InsectsArray) {
    if (sortNameCresc) {
      InsectsArray.sort(function (a, b) {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        return 0;
      });
    }

    if (sortNameDecresc) {
      InsectsArray.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
    }

    //SORT DATA
    if (sortDataCresc) {
      InsectsArray.sort(function (a, b) {
        if (b.date < a.date) return -1;
        if (b.date > a.date) return 1;
        return 0;
      });
    }

    if (sortDataDecresc) {
      InsectsArray.sort(function (a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      });
    }

    //SORT SIZE
    if (sortSizeCresc) {
      InsectsArray.sort(function (a, b) {
        //BUTT
        if (a.butt[0] < b.butt[0]) return -1;
        if (a.butt[0] > b.butt[0]) return 1;
        if (a.butt[0] == b.butt[0]) {
          //LEG
          if (a.leg[0] < b.leg[0]) return -1;
          if (a.leg[0] > b.leg[0]) return 1;
          if (a.leg[0] == b.leg[0]) {
            //HEAD
            if (a.head[0] < b.head[0]) return -1;
            if (a.head[0] > b.head[0]) return 1;
            if (a.head[0] == b.head[0]) {
              //ANT
              if (a.ant[0] < b.ant[0]) return -1;
              if (a.ant[0] > b.ant[0]) return 1;
              if (a.ant[0] == b.ant[0]) {
                //ANT
                if (a.chest[0] < b.chest[0]) return -1;
                if (a.chest[0] > b.chest[0]) return 1;
                return 0;
              }
            }
          }
        }
      });
    }

    if (sortSizeDecresc) {
      InsectsArray.sort(function (a, b) {
        //BUTT
        if (b.butt[0] < a.butt[0]) return -1;
        if (b.butt[0] > a.butt[0]) return 1;
        if (b.butt[0] == a.butt[0]) {
          //LEG
          if (b.leg[0] < a.leg[0]) return -1;
          if (b.leg[0] > a.leg[0]) return 1;
          if (b.leg[0] == a.leg[0]) {
            //HEAD
            if (b.head[0] < a.head[0]) return -1;
            if (b.head[0] > a.head[0]) return 1;
            if (b.head[0] == a.head[0]) {
              //ANT
              if (b.ant[0] < a.ant[0]) return -1;
              if (b.ant[0] > a.ant[0]) return 1;
              if (b.ant[0] == a.ant[0]) {
                //ANT
                if (b.chest[0] < a.chest[0]) return -1;
                if (b.chest[0] > a.chest[0]) return 1;
                return 0;
              }
            }
          }
        }
      });
    }

    //SHOW THE INSECT ARRAY

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

      let name = createElement("p", InsectsArray[i].name)
        .parent(box)
        .addClass("name");
      let date = createElement("p", InsectsArray[i].date)
        .parent(box)
        .addClass("date");
    }
  }

  //console.log(InsectsArray);
}
