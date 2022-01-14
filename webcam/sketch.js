let capture;
var button;
var bright;
let fotoScattata = 0;

//variabili altezza e larghezza della webcam
let wCam = 640;
let hCam = 480;

//variabili altezza e larghezza del rettangolino
let hRect = 20;
let wRect = 640;

function setup() {
  createCanvas(wCam, hCam);

  //webcam
  video = createCapture(VIDEO);
  video.size(wCam, hCam);
  video.hide();

  frameRate(10);

  //button foto
  button = createButton("answer");
  button.mousePressed(takesnap);
}

//funzione che scatta la foto
function takesnap() {
  if (fotoScattata == 0) {
    //video.stop();
    fotoScattata = 1;
    //cambia la label del bottone
    button.html("try again");
    //console.log(bright);
  } else {
    //video.play();
    fotoScattata = 0;
    //cambia la label del bottone
    button.html("answer");
  }
}

function draw() {
  background(250);

  //slider
  // let c = color(140, 0, 0);
  // fill(c);
  // rect(0, 0, wRect, hRect);

  let gridSize = 10;

  translate(wCam, 0);
  scale(-1, 1);

  video.loadPixels();

  //l'immagine che arriva da var video viene trasformato in una griglia di quadrati
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {
      let index = (y * video.width + x) * 4;

      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      //var bright prende la luminosità dei pixel e poi viene mappato
      bright = (r + g + b) / 3;
      let size = map(bright, 0, 255, gridSize, 1);

      fill(0);
      noStroke();
      rect(x, y, size);
    }
  }

  //la pallina si sposta a seconda della luminosita (var bright)
  push();
  translate(wCam, 0);
  scale(-1, 1);
  var xPallina = map(bright, 0, 120, 0, wRect, true);
  c = color(255, 0, 0);
  fill(c);
  ellipse(xPallina, 0, 20);
  pop();

  //se viene scattata la foto da funzione takesnap il video si stoppa e manda in console SCURO/MEDIO/CHIARO se var fotoscattata è già
  if (fotoScattata == 1) {
    video.stop();
    //fotoScattata = 1;
    if (xPallina < 213) {
      console.log("SCURO");
    }
    if (xPallina > 213 && xPallina < 426) {
      console.log("MEDIO");
    }
    if (xPallina > 426) {
      console.log("CHIARO");
    }
  } else {
    video.play();
    //fotoScattata = 0;
  }
}
