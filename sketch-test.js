let nameX;
let chestX;
let buttX;
let headX;
let legX;
let antX;

//MOUSE

let vel = 0;
let contenitore = [];
let media;
let somma = 0;
let indice = 0;
let click = 0;
let buttonMouse;
let canvasMouse;

let century;

//AUDIO

let mic;
let d;

//WEBCAM

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

let sketch_1 = function (p) {
  p.setup = function () {
    p.noCanvas();

    //TRANSITIONS FUNCTIONS

    //Intro

    function hideQuestions() {
      p.select("#question-1").hide();
      p.select("#question-2").hide();
      p.select("#question-3").hide();
      p.select("#question-4").hide();
      p.select("#question-5").hide();
      p.select("#question-container").hide();
    }
    function showHello() {
      p.select("#hello").style("opacity", "1");
    }
    function hideHello() {
      p.select("#hello").style("opacity", "0");
    }
    function showName() {
      p.select("#askName").style("opacity", "1");
    }
    function hideName() {
      p.select("#askName").style("opacity", "0");
    }
    function showIntro2() {
      p.select("#intro-2").style("opacity", "1");
    }
    function waitShowIntro2() {
      setTimeout(showIntro2, 1000);
    }
    function destroyIntro1() {
      p.select("#askName").hide();
    }
    function waitDestroyIntro1() {
      setTimeout(destroyIntro1, 1000);
    }

    hideQuestions();

    setTimeout(showHello, 500);
    setTimeout(hideHello, 3000);

    setTimeout(showName, 4000);
    p.select("#send-name").mousePressed(hideName);
    p.select("#send-name").mousePressed(waitShowIntro2);
    p.select("#send-name").mousePressed(waitDestroyIntro1);

    p.select("#start-test").mousePressed(finishIntro);
    p.select("#start-test").mousePressed(waitDestroyAllIntro);

    let inputName = p.select("#input-name");
    let sendName = p.select("#send-name");

    function send_name() {
      nameX = inputName.value();
    }

    sendName.mousePressed(send_name);

    //Go to Question 1

    function finishIntro() {
      p.select("#intro-2").style("opacity", "0");
    }
    function destroyAllIntro() {
      p.select("#intro-container").hide();
      p.select("#question-container").style("display", "flex");
      p.select("#question-container").style("opacity", "1");

      p.select("#question-1").style("display", "flex");
      p.select("#question-1").style("opacity", "1");
      p.select("#drawing-1").style("opacity", "1");
    }
    function waitDestroyAllIntro() {
      setTimeout(destroyAllIntro, 1000);
    }

    //---------CHEST------------

    let setChestS = p.select("#chest-S");
    let setChestM = p.select("#chest-M");
    let setChestB = p.select("#chest-B");

    setChestS.mousePressed(chest_S);
    setChestM.mousePressed(chest_M);
    setChestB.mousePressed(chest_B);

    function chosenChest() {
      p.createImg("assets/partsNew/chest/chest-" + chestX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("chest-img");
    }

    p.select("#showQ2").mousePressed(hideQ1);
    p.select("#showQ2").mousePressed(waitShowQ2);
    p.select("#showQ2").mousePressed(showChosenChest);

    function showNextAfterButton() {
      p.select("#showQ2").removeClass("hide");
    }

    p.select("#input-btns").mousePressed(showNextAfterButton);

    //Go to Question 2

    function hideQ1() {
      p.select("#question-1").style("opacity", "0");
      p.select("#drawing-1").style("opacity", "0");
    }
    function showChosenChest() {
      chosenChest();
      p.select("#chest-img").style("opacity", "1");
    }
    function showQ2() {
      p.select("#question-1").hide();
      p.select("#question-2").style("display", "flex");
      p.select("#question-2").style("opacity", "1");
      p.select("#drawing-2").style("opacity", "1");
    }
    function waitShowQ2() {
      setTimeout(showQ2, 1500);
    }

    //---------BUTT------------

    p.select("#showQ3").mousePressed(hideQ2);
    p.select("#showQ3").mousePressed(waitShowQ3);

    //Go to Question 3

    function chosenButt() {
      p.createImg("assets/partsNew/butt/butt-" + buttX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("butt-img");
    }

    function hideQ2() {
      p.select("#question-2").style("opacity", "0");
      p.select("#drawing-2").style("opacity", "0");
    }
    function showQ3() {
      p.select("#question-2").hide();
      p.select("#question-3").style("display", "flex");
      p.select("#question-3").style("opacity", "1");
      p.select("#drawing-3").style("opacity", "1");
      chosenButt();
      p.select("#butt-img").style("opacity", "1");
    }
    function waitShowQ3() {
      setTimeout(showQ3, 1000);
    }

    function showNextAfterSlider() {
      p.select("#showQ3").removeClass("hide");
    }

    p.select("#q2-slider").mousePressed(showNextAfterSlider);

    //---------LEG------------

    // let setLegS = p.select("#leg-S");
    // let setLegM = p.select("#leg-M");
    // let setLegB = p.select("#leg-B");

    // setLegS.mousePressed(leg_S);
    // setLegM.mousePressed(leg_M);
    // setLegB.mousePressed(leg_B);

    function chosenLeg() {
      p.createImg("assets/partsNew/leg/leg-" + legX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("leg-img");
    }

    p.select("#showQ4").mousePressed(hideQ3);
    p.select("#showQ4").mousePressed(waitShowQ4);
    p.select("#showQ4").mousePressed(showChosenLeg);

    //Go to Question 4

    function hideQ3() {
      p.select("#question-3").style("opacity", "0");
      p.select("#drawing-3").style("opacity", "0");
    }
    function showChosenLeg() {
      chosenLeg();
      p.select("#leg-img").style("opacity", "1");
    }

    function showQ4() {
      p.select("#question-3").hide();
      p.select("#question-4").style("display", "flex");
      p.select("#question-4").style("opacity", "1");
      p.select("#drawing-4").style("opacity", "1");
    }
    function waitShowQ4() {
      setTimeout(showQ4, 1500);
    }

    //---------HEAD------------

    // let setHeadS = p.select("#head-S");
    // let setHeadM = p.select("#head-M");
    // let setHeadB = p.select("#head-B");

    // setHeadS.mousePressed(head_S);
    // setHeadM.mousePressed(head_M);
    // setHeadB.mousePressed(head_B);

    function chosenHead() {
      p.createImg("assets/partsNew/head/head-" + headX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("head-img");
    }

    p.select("#showQ5").mousePressed(hideQ4);
    p.select("#showQ5").mousePressed(waitShowQ5);
    p.select("#showQ5").mousePressed(showChosenHead);

    //Go to Question 5

    function hideQ4() {
      p.select("#question-4").style("opacity", "0");
      p.select("#drawing-4").style("opacity", "0");
    }
    function showChosenHead() {
      chosenHead();
      p.select("#head-img").style("opacity", "1");
    }
    function showQ5() {
      p.select("#question-4").hide();
      p.select("#question-5").style("display", "flex");
      p.select("#question-5").style("opacity", "1");
      p.select("#drawing-5").style("opacity", "1");
    }
    function waitShowQ5() {
      setTimeout(showQ5, 1500);
    }

    //---------ANT------------

    // let setAntS = p.select("#ant-S");
    // let setAntM = p.select("#ant-M");
    // let setAntB = p.select("#ant-B");

    // setAntS.mousePressed(ant_S);
    // setAntM.mousePressed(ant_M);
    // setAntB.mousePressed(ant_B);

    let sendData = p.select("#send-data");

    function audioAnt() {
      if (d <= 126) {
        ant_S();
      } else if (d < 126 && d <= 252) {
        ant_M();
      } else if (d > 252) {
        ant_B();
      }
    }

    function send_data() {
      audioAnt();

      const newUser = {
        name: nameX,
        date: today,
        chest: chestX,
        butt: buttX,
        leg: legX,
        head: headX,
        ant: antX,
      };
      addUser(newUser);

      chosenAnt();
      p.select("#ant-img").style("opacity", "1");
      p.select("#drawing-5").style("opacity", "0");
      p.select("#question-5").style("opacity", "0");
      p.select(".line").style("opacity", "0");

      p.select("#question-5").style("width", "0px");
      p.select("#question-5").style("padding", "0px");
      p.select("#result-text").style("display", "flex");
      p.select("#result-btns").style("display", "flex");
      p.select(".question-text").style("width", "0px");
      p.select(".answer").style("width", "0px");
      p.select(".question-dx").style("width", "100%");
    }

    sendData.mousePressed(send_data);
    // sendData.mousePressed(showChosenAnt);

    function chosenAnt() {
      p.createImg("assets/partsNew/ant/ant-" + antX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("ant-img");
    }

    let today = new Date();
    let day = String(today.getDate()).padStart(2, "0");
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let year = today.getFullYear();
    today = day + " / " + month + " / " + year;

    function chest_S() {
      let chestS_List = ["S-1", "S-2", "S-3"];
      chestX = p.random(chestS_List);
    }
    function chest_M() {
      let chestM_List = ["M-1", "M-2", "M-3", "M-4"];
      chestX = p.random(chestM_List);
    }
    function chest_B() {
      let chestB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8", "B-9"];
      chestX = p.random(chestB_List);
    }

    function ant_S() {
      let antS_List = ["S-1", "S-2", "S-3", "S-4"];
      antX = p.random(antS_List);
    }
    function ant_M() {
      let antM_List = ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7", "M-8", "M-9", "M-10"];
      antX = p.random(antM_List);
    }
    function ant_B() {
      let antB_List = ["B-1", "B-2", "B-3", "B-4"];
      antX = p.random(antB_List);
    }
  };

  p.draw = function () {
    //---------BUTT------------

    let q2Value = p.select("#q2-slider").value();
    let setButt = p.select("#q2-slider");

    setButt.mouseReleased(sliderQ2);
    // setButt.mousePressed(chosenButt);

    function sliderQ2() {
      if (q2Value <= 33) {
        butt_S();
      } else if (q2Value > 33 && q2Value <= 66) {
        butt_M();
      } else if (q2Value > 66) {
        butt_B();
      }
    }
    function butt_S() {
      let buttS_List = ["S-1", "S-2", "S-3", "S-4"];
      buttX = p.random(buttS_List);
    }
    function butt_M() {
      let buttM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      buttX = p.random(buttM_List);
    }
    function butt_B() {
      let buttB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"];
      buttX = p.random(buttB_List);
    }
  };
};

//MOUSE

let sketch_Mouse = function (p) {
  p.setup = function () {
    canvasMouse = p.createCanvas(500, 500);
    canvasMouse.parent("question-3-canvas");
    p.background("red");
    buttonMouse = p.select("#mouse-btn");
    buttonMouse.mouseClicked(restartArray);
    p.frameRate(10);

    //funzione che resetta tutti i parametri
    function restartArray() {
      contenitore = [];
      click = 0;
      media = 0;
      indice = 0;
      somma = 0;
    }

    century = p.loadFont("assets/fonts/century-schoolbook/cen-schlbk-r.TTF");
  };
  p.draw = function () {
    p.background(255, 252, 241);

    //calcola la velocità del momento
    let difX = p.abs(p.mouseX - p.pmouseX);
    let difY = p.abs(p.mouseY - p.pmouseY);
    let vel = difX + difY;

    //se non è stata ancora data una risposta ossia quando il valore click è 0
    if (click == 0) {
      contenitore.push(vel);

      somma = somma + contenitore[indice];
      indice++;
      // if (contenitore.length > 100) {
      //   contenitore = [];
      // }
      media = p.floor(somma / contenitore.length);
    }

    //slider risposte
    p.stroke(173, 149, 127);
    p.fill(255, 252, 241);
    p.line(20, 250, 480, 250);

    p.line(20, 245, 20, 255);
    p.line(173, 245, 173, 255);
    p.line(326, 245, 326, 255);
    p.line(480, 245, 480, 255);

    p.push();
    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("Almost never", 96, 300);
    p.text("Sometimes", 250, 300);
    p.text("Often", 402, 300);
    p.pop();

    let xCerchio = p.map(media, 0, 150, 20, 480, true);

    // p.ellipse(xCerchio, 250, 20);
    p.triangle(xCerchio - 10, 230, xCerchio, 245, xCerchio + 10, 230);

    //nel momento in cui si clicca viene mandato in console la risposta a seconda del valore di XCerchio
    if (click == 1) {
      p.select("#showQ4").removeClass("hide");
      buttonMouse.removeClass("hide");
      if (xCerchio < 167) {
        leg_S();
      } else if (xCerchio > 167 && xCerchio < 333) {
        leg_M();
      } else if (xCerchio > 333) {
        leg_B();
      }
    }

    //nel momento in cui avviene un click dentro il canvas manda la funzione stopShake
    canvasMouse.mouseClicked(stopShake);

    function stopShake() {
      click = 1;
    }

    function leg_S() {
      let legS_List = ["S-1", "S-2", "S-3", "S-4"];
      legX = p.random(legS_List);
    }
    function leg_M() {
      let legM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      legX = p.random(legM_List);
    }
    function leg_B() {
      let legB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8"];
      legX = p.random(legB_List);
    }

    p.noFill();
    p.stroke(173, 149, 127);
    p.rect(0, 0, 500, 500);
  };
};

//WEBCAM

let sketch_Webcam = function (p) {
  p.setup = function () {
    let canvasWebcam = p.createCanvas(500, 560);
    canvasWebcam.parent("question-4-canvas");

    //webcam
    video = p.createCapture(p.VIDEO);
    video.size(wCam, hCam);
    video.hide();

    p.frameRate(10);

    //button foto
    // button = p.createButton("Answer");
    button = p.select("#webcam-btn");
    button.mousePressed(takesnap);

    //funzione che scatta la foto
    function takesnap() {
      p.select("#showQ5").removeClass("hide");
      if (fotoScattata == 0) {
        //video.stop();
        fotoScattata = 1;
        //cambia la label del bottone
        button.html("Try again");
        //console.log(bright);
      } else {
        //video.play();
        fotoScattata = 0;
        //cambia la label del bottone
        button.html("Stop");
      }
    }
  };

  p.draw = function () {
    p.background(255, 252, 241);

    let gridSize = 10;

    p.push();

    p.translate(wCam, 0);
    p.scale(-1, 1);

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
        let size = p.map(bright, 0, 255, gridSize, 1);

        p.fill(0);
        p.noStroke();
        p.rect(x, y, size);
      }
    }

    p.pop();

    //la pallina si sposta a seconda della luminosita (var bright)
    // p.push();
    // p.translate(wCam, 0);
    // p.scale(-1, 1);
    var xPallina = p.map(bright, 0, 120, 20, 480, true);
    // c = p.color(255, 0, 0);
    // p.fill(c);
    // p.ellipse(xPallina, 0, 20);
    // p.pop();

    //slider risposte
    p.push();

    p.stroke(173, 149, 127);
    p.fill(255, 252, 241);

    p.line(20, 520, 480, 520);

    p.line(20, 515, 20, 525);
    p.line(173, 515, 173, 525);
    p.line(326, 515, 326, 525);
    p.line(480, 515, 480, 525);

    p.triangle(xPallina - 10, 500, xPallina, 515, xPallina + 10, 500);

    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("Almost never", 96, 560);
    p.text("Sometimes", 250, 560);
    p.text("Often", 402, 560);

    p.pop();

    //se viene scattata la foto da funzione takesnap il video si stoppa e manda in console SCURO/MEDIO/CHIARO se var fotoscattata è già
    if (fotoScattata == 1) {
      video.stop();
      //fotoScattata = 1;
      if (xPallina < 213) {
        console.log("SCURO");
        head_S();
      }
      if (xPallina > 213 && xPallina < 426) {
        console.log("MEDIO");
        head_M();
      }
      if (xPallina > 426) {
        console.log("CHIARO");
        head_B();
      }
    } else {
      video.play();
      //fotoScattata = 0;
    }

    function head_S() {
      let headS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6"];
      headX = p.random(headS_List);
    }
    function head_M() {
      let headM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      headX = p.random(headM_List);
    }
    function head_B() {
      let headB_List = ["B-1", "B-2", "B-3", "B-4", "B-5"];
      headX = p.random(headB_List);
    }
  };
};

//AUDIO

let sketch_Audio = function (p) {
  p.setup = function () {
    let canvasAudio = p.createCanvas(600, 600);
    canvasAudio.parent("question-5-canvas");
    canvasAudio.mousePressed(startAudio);
  };
  p.draw = function () {
    p.background(255, 252, 241, 100);
    p.stroke(194, 176, 165);
    p.strokeWeight(1);

    p.line(195, 300, 580, 300);

    p.line(200, 295, 200, 305);
    p.line(326, 295, 326, 305);
    p.line(452, 295, 452, 305);
    p.line(580, 295, 580, 305);

    p.push();
    p.noFill();
    p.stroke(194, 176, 165);
    p.rect(0, 0, 600, 600);
    p.pop();

    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("Almost never", 263, 330);
    p.text("Sometimes", 389, 330);
    p.text("Often", 515, 330);

    if (mic) {
      const micLevel = mic.getLevel();
      d = p.map(micLevel, 0, 1, 1, 700);

      p.push();
      p.stroke(173, 149, 127);
      p.noFill();
      p.circle(200, 300, d);
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
let s2 = new p5(sketch_Mouse);
let s3 = new p5(sketch_Webcam);
let s4 = new p5(sketch_Audio);
