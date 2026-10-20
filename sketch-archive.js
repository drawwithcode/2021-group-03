//DATE
let sortDataCresc;
let sortDataDecresc;

//NAME
let sortNameCresc;
let sortNameDecresc;

//SIZE
let sortSizeCresc;
let sortSizeDecresc;

let insectBoxes;

function setup() {
  noCanvas();
}

function draw() {
  background(255, 252, 241);

  displayInsects();
}

function getSelectedValue() {
  let selectedValue = document.getElementById("sort-list").value;
  let selectedOrder = document.getElementById("sort-order").value;

  if (selectedValue === "date" && selectedOrder === "asc") {
    DateAsc();
  } else if (selectedValue === "date" && selectedOrder === "desc") {
    DateDesc();
  } else if (selectedValue === "name" && selectedOrder === "asc") {
    NameAsc();
  } else if (selectedValue === "name" && selectedOrder === "desc") {
    NameDesc();
  } else if (selectedValue === "size" && selectedOrder === "asc") {
    SizeAsc();
  } else if (selectedValue === "size" && selectedOrder === "desc") {
    SizeDesc();
  }
}

//DATE SORTING FUNCTIONS

function DateDesc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortDataCresc = 0;
  sortDataDecresc = 1;
  sortNameCresc = 0;
  sortNameDecresc = 0;
  sortSizeCresc = 0;
  sortSizeDecresc = 0;
  displayInsects();
}

function DateAsc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortDataCresc = 1;
  sortDataDecresc = 0;
  sortNameCresc = 0;
  sortNameDecresc = 0;
  sortSizeCresc = 0;
  sortSizeDecresc = 0;
  displayInsects();
}

//NAME SORTING FUNCTIONS

function NameDesc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortNameCresc = 0;
  sortNameDecresc = 1;
  sortDataCresc = 0;
  sortDataDecresc = 0;
  sortSizeCresc = 0;
  sortSizeDecresc = 0;

  displayInsects();
}

function NameAsc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortNameCresc = 1;
  sortNameDecresc = 0;
  sortDataCresc = 0;
  sortDataDecresc = 0;
  sortSizeCresc = 0;
  sortSizeDecresc = 0;
  displayInsects();
}

//SIZE SORTING FUNCTIONS

function SizeDesc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortSizeCresc = 0;
  sortSizeDecresc = 1;
  sortNameCresc = 0;
  sortNameDecresc = 0;
  sortDataCresc = 0;
  sortDataDecresc = 0;
  displayInsects();
}

function SizeAsc() {
  insectBoxes = selectAll(".insect-box");
  for (let i = 0; i < insectBoxes.length; i++) {
    insectBoxes[i].remove();
  }
  sortSizeCresc = 1;
  sortSizeDecresc = 0;
  sortNameCresc = 0;
  sortNameDecresc = 0;
  sortDataCresc = 0;
  sortDataDecresc = 0;
  displayInsects();
}

// "DD / MM / YYYY" + "HH:MM" -> YYYYMMDDHHMM (old insects may have no time)
function dateToNumber(insect) {
  let d = insect.date.split("/").map(Number);
  let t = (insect.time || "0:0").split(":").map(Number);
  return d[2] * 100000000 + d[1] * 1000000 + d[0] * 10000 + t[0] * 100 + t[1];
}

function compareNameAB(a, b) {
  return a.name - b.name;
}

function displayInsects() {
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
        return dateToNumber(b) - dateToNumber(a);
      });
    }

    if (sortDataDecresc) {
      InsectsArray.sort(function (a, b) {
        return dateToNumber(a) - dateToNumber(b);
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
        .addClass("part-img")
        .attribute("loading", "lazy");
      let antBox = createImg("assets/partsNew/ant/ant-" + Ant + ".png")
        .parent(partsBox)
        .addClass("part-img")
        .attribute("loading", "lazy");
      let headBox = createImg("assets/partsNew/head/head-" + Head + ".png")
        .parent(partsBox)
        .addClass("part-img")
        .attribute("loading", "lazy");
      let buttBox = createImg("assets/partsNew/butt/butt-" + Butt + ".png")
        .parent(partsBox)
        .addClass("part-img")
        .attribute("loading", "lazy");
      let chestBox = createImg("assets/partsNew/chest/chest-" + Chest + ".png")
        .parent(partsBox)
        .addClass("part-img")
        .attribute("loading", "lazy");

      let name = createElement("p", InsectsArray[i].name).parent(box).addClass("name");
      let date = createElement("p", InsectsArray[i].date).parent(box).addClass("date");
    }
  }
}

function sortByDateCresc() {
  sortDataCresc = 1;
  sortDataDecresc = 0;
}
function sortByDateDecresc() {
  sortDataCresc = 0;
  sortDataDecresc = 1;
}
function sortByNameCresc() {
  sortNameCresc = 1;
  sortNameDecresc = 0;
}
function sortByNameDecresc() {
  sortNameCresc = 0;
  sortNameDecresc = 1;
}
