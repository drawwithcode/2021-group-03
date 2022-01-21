let vel = 0;
let contenitore = [];
let media;
let somma = 0;
let indice = 0;
let click = 0;
let buttonMouse;

function setup() {
  canvasMouse = createCanvas(500, 500);
  buttonMouse = createButton("try again");
  buttonMouse.mouseClicked(restartArray);
  frameRate(10);
}

function draw() {
  background("black");

  //calcola la velocità del momento
  let difX = abs(mouseX - pmouseX);
  let difY = abs(mouseY - pmouseY);
  let vel = difX + difY;

  //se non è stata ancora data una risposta ossia quando il valore click è 0
  if (click == 0) {
    contenitore.push(vel);

    somma = somma + contenitore[indice];
    indice++;
    media = floor(somma / contenitore.length);
  }

  fill("red");
  let xCerchio = map(media, 0, 150, 0, 500, true);
  ellipse(xCerchio, 120, 20);

  //nel momento in cui si clicca viene mandato in console la risposta a seconda del valore di XCerchio
  if (click == 1) {
    if (xCerchio < 167) console.log("RISPOSTA 1");
    if (xCerchio > 167 && xCerchio < 333) console.log("RISPOSTA 2");
    if (xCerchio > 333) console.log("RISPOSTA 3");
  }

  fill(255);
  text("Velocidad media del ratón: " + media, 30, 40);

  //nel momento in cui avviene un click dentro il canvas manda la funzione stopShake
  canvasMouse.mouseClicked(stopShake);
}

function stopShake() {
  click = 1;
}

//funzione che resetta tutti i parametri
function restartArray() {
  contenitore = [];
  click = 0;
  media = 0;
  indice = 0;
  somma = 0;
}
