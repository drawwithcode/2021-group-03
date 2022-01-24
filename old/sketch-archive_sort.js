let sortDataCresc = 0;
let sortDataDecresc = 0;

let sortNameCresc = 0;
let sortNameDecresc = 0;

//TYPE
let sortAntCresc = 0;
let sortAntDecresc = 0;

let sortButtCresc = 0;
let sortButtDecresc = 0;

let sortChestCresc = 0;
let sortChestDecresc = 0;

let sortHeadCresc = 0;
let sortHeadDecresc = 0;

let sortLegCresc = 0;
let sortLegDecresc = 0;

function setup() {
  noCanvas();
}

function compareNameAB(a, b) {
  return a.name - b.name;
}

function draw() {
  background(255, 252, 241);

  if (InsectsArray) {
    //SORT NAME
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

    //SORT TYPE ANT
    if (sortAntCresc) {
      InsectsArray.sort(function (a, b) {
        if (a.ant < b.ant) return -1;
        if (a.ant > b.ant) return 1;
        return 0;
      });
    }

    if (sortAntDecresc) {
      InsectsArray.sort(function (a, b) {
        if (b.ant < a.ant) return -1;
        if (b.ant > a.ant) return 1;
        return 0;
      });
    }

    //SORT TYPE BUTT
    if (sortButtCresc) {
      InsectsArray.sort(function (a, b) {
        if (a.butt < b.butt) return -1;
        if (a.butt > b.butt) return 1;
        return 0;
      });
    }

    if (sortButtDecresc) {
      InsectsArray.sort(function (a, b) {
        if (b.butt < a.butt) return -1;
        if (b.butt > a.butt) return 1;
        return 0;
      });
    }

    //SORT TYPE CHEST
    if (sortChestCresc) {
      InsectsArray.sort(function (a, b) {
        if (a.chest < b.chest) return -1;
        if (a.chest > b.chest) return 1;
        return 0;
      });
    }

    if (sortChestDecresc) {
      InsectsArray.sort(function (a, b) {
        if (b.chest < a.chest) return -1;
        if (b.chest > a.chest) return 1;
        return 0;
      });
    }

    //SORT TYPE HEAD
    if (sortHeadCresc) {
      InsectsArray.sort(function (a, b) {
        if (a.head < b.head) return -1;
        if (a.head > b.head) return 1;
        return 0;
      });
    }

    if (sortHeadDecresc) {
      InsectsArray.sort(function (a, b) {
        if (b.head < a.head) return -1;
        if (b.head > a.head) return 1;
        return 0;
      });
    }

    //SORT TYPE CHEST
    if (sortLegCresc) {
      InsectsArray.sort(function (a, b) {
        if (a.leg < b.leg) return -1;
        if (a.leg > b.leg) return 1;
        return 0;
      });
    }

    if (sortLegDecresc) {
      InsectsArray.sort(function (a, b) {
        if (b.leg < a.leg) return -1;
        if (b.leg > a.leg) return 1;
        return 0;
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

      let name = createElement("p", InsectsArray[i].name).parent(box).addClass("name");
      let date = createElement("p", InsectsArray[i].date).parent(box).addClass("date");
    }
  }

  //console.log(InsectsArray);
}
