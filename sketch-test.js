let nameX;
let chestX;
let buttX;
let headX;
let legX;
let antX;

let clockSound;

let insectSound1;
let insectSound2;
let insectSound3;
let insectSound4;
let insectSound5;
let insectSounds = [];

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
let audioScelto = 0;

//WEBCAM

let capture;
var button;
var bright;
let fotoScattata = 0;
let xPallina;

let wCam;
let hCam;

let hRect = 20;
let wRect = 640;

////////////////// SKETCH 1 /////////////////

let sketch_1 = function (p) {
  p.setup = function () {
    p.noCanvas();

    clockSound = p.loadSound("assets/sound/clock.mp3");

    insectSound1 = p.loadSound("assets/sound/insect-1.mp3");
    insectSound2 = p.loadSound("assets/sound/insect-2.mp3");
    insectSound3 = p.loadSound("assets/sound/insect-3.mp3");
    insectSound4 = p.loadSound("assets/sound/insect-4.mp3");
    insectSound5 = p.loadSound("assets/sound/insect-5.mp3");

    insectSounds.push(insectSound1, insectSound2, insectSound3, insectSound4, insectSound5);

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

    inputName.mouseClicked(playMusic);

    function playMusic() {
      if (clockSound.isPlaying() == false) {
        clockSound.loop();
        clockSound.setVolume(0.15, [1000]);
      }
    }

    function send_name() {
      nameX = inputName.value();
    }

    function showFirstButton() {
      p.select("#send-name").removeClass("hide");
    }

    p.select("#input-name").mousePressed(showFirstButton);

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
      contenitore = [];
      click = 0;
      media = 0;
      indice = 0;
      somma = 0;
      buttonMouse.addClass("hide");
    }
    function waitShowQ3() {
      setTimeout(showQ3, 1000);
    }

    function showNextAfterSlider() {
      p.select("#showQ3").removeClass("hide");
    }

    p.select("#q2-slider").mousePressed(showNextAfterSlider);

    //---------LEG------------

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

    let sendData = p.select("#send-data");

    let stopAudioBtn = p.select("#stop-audio");
    stopAudioBtn.mousePressed(stopAudio);

    function audioAnt() {
      if (d <= 126) {
        ant_S();
      } else if (d < 126 && d <= 252) {
        ant_M();
      } else if (d > 252) {
        ant_B();
      }
    }

    function stopAudio() {
      audioAnt();
      p.select("#send-data").removeClass("hide");
      if (audioScelto === 0) {
        audioScelto = 1;
        mic.stop();
        stopAudioBtn.html("Try again");
      } else if (audioScelto === 1) {
        audioScelto = 0;
        mic.start();
        stopAudioBtn.html("Stop");
      }
    }

    // Send data to Firebase

    function send_data() {
      clockSound.stop();

      const newUser = {
        name: nameX,
        chest: chestX,
        butt: buttX,
        leg: legX,
        head: headX,
        ant: antX,
        date: today,
        time: time,
      };
      addUser(newUser);

      chosenAnt();
      p.select("#ant-img").style("opacity", "1");
      p.select("#drawing-5").style("opacity", "0");
      p.select("#question-5").style("opacity", "0");
      p.select(".line").style("display", "none");

      p.select("#question-5").style("width", "0");
      p.select("#question-5").style("padding", "0px");
      p.select("#result-text").style("display", "flex");
      p.select("#result-btns").style("display", "flex");
      p.select(".question-dx").style("width", "100vw");

      p.random(insectSounds).play();
    }

    sendData.mousePressed(send_data);

    function chosenAnt() {
      p.createImg("assets/partsNew/ant/ant-" + antX + ".png")
        .parent("question-img")
        .addClass("drawing")
        .addClass("hide")
        .id("ant-img");
    }

    // Get current date and time

    let today = new Date();

    let day = String(today.getDate()).padStart(2, "0");
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let year = today.getFullYear();

    let hour = String(today.getHours()).padStart(2, "0");
    let minutes = String(today.getMinutes()).padStart(2, "0");

    today = day + " / " + month + " / " + year;

    let time = hour + ":" + minutes;

    // Chest images list

    function chest_S() {
      let chestS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6", "S-7", "S-8"];
      chestX = p.random(chestS_List);
    }
    function chest_M() {
      let chestM_List = ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7", "M-8", "M-9", "M-10"];
      chestX = p.random(chestM_List);
    }
    function chest_B() {
      let chestB_List = [
        "B-1",
        "B-2",
        "B-3",
        "B-4",
        "B-5",
        "B-6",
        "B-7",
        "B-8",
        "B-9",
        "B-10",
        "B-11",
        "B-12",
        "B-13",
      ];
      chestX = p.random(chestB_List);
    }

    // Antennas images list

    function ant_S() {
      let antS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6", "S-7", "S-8", "S-9"];
      antX = p.random(antS_List);
    }
    function ant_M() {
      let antM_List = [
        "M-1",
        "M-2",
        "M-3",
        "M-4",
        "M-5",
        "M-6",
        "M-7",
        "M-8",
        "M-9",
        "M-10",
        "M-11",
        "M-12",
        "M-13",
        "M-14",
        "M-15",
      ];
      antX = p.random(antM_List);
    }
    function ant_B() {
      let antB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"];
      antX = p.random(antB_List);
    }
  };

  p.draw = function () {
    //---------BUTT------------

    let q2Value = p.select("#q2-slider").value();
    let setButt = p.select("#q2-slider");

    setButt.mouseReleased(sliderQ2);

    function sliderQ2() {
      if (q2Value <= 33) {
        butt_S();
      } else if (q2Value > 33 && q2Value <= 66) {
        butt_M();
      } else if (q2Value > 66) {
        butt_B();
      }
    }

    // Butt images list

    function butt_S() {
      let buttS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6", "S-7", "S-8", "S-9", "S-10"];
      buttX = p.random(buttS_List);
    }
    function butt_M() {
      let buttM_List = [
        "M-1",
        "M-2",
        "M-3",
        "M-4",
        "M-5",
        "M-6",
        "M-7",
        "M-8",
        "M-9",
        "M-10",
        "M-11",
        "M-12",
        "M-13",
        "M-14",
      ];
      buttX = p.random(buttM_List);
    }
    function butt_B() {
      let buttB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8", "B-9"];
      buttX = p.random(buttB_List);
    }
  };
};

// MOUSE SKETCH

let sketch_Mouse = function (p) {
  p.setup = function () {
    canvasMouse = p.createCanvas(p.windowWidth / 3, p.windowHeight / 2);
    canvasMouse.parent("question-3-canvas");
    p.background("red");
    buttonMouse = p.select("#mouse-btn");
    buttonMouse.mouseClicked(restartArray);
    p.frameRate(10);

    //funzione che resetta mouse shake
    function restartArray() {
      contenitore = [];
      click = 0;
      media = 0;
      indice = 0;
      somma = 0;
      buttonMouse.addClass("hide");
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
      media = p.floor(somma / contenitore.length);
    }

    //slider risposte
    p.stroke(173, 149, 127);
    p.fill(255, 252, 241);

    p.line(20, p.height / 2, p.width - 20, p.height / 2);

    p.line(20, p.height / 2 - 5, 20, p.height / 2 + 5);
    p.line((p.width - 40) / 3 + 20, p.height / 2 - 5, (p.width - 40) / 3 + 20, p.height / 2 + 5);
    p.line(
      ((p.width - 40) / 3) * 2 + 20,
      p.height / 2 - 5,
      ((p.width - 40) / 3) * 2 + 20,
      p.height / 2 + 5
    );
    p.line(p.width - 20, p.height / 2 - 5, p.width - 20, p.height / 2 + 5);

    p.push();
    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("Almost never", (p.width - 40) / 6 + 20, p.height / 2 + 50);
    p.text("Sometimes", p.width / 2, p.height / 2 + 50);
    p.text("Often", ((p.width - 40) / 6) * 5 + 20, p.height / 2 + 50);
    p.pop();

    let xCerchio = p.map(media, 0, 150, 20, p.width - 20, true);

    p.triangle(
      xCerchio - 10,
      p.height / 2 - 20,
      xCerchio,
      p.height / 2 - 5,
      xCerchio + 10,
      p.height / 2 - 20
    );

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

    // Legs images list

    function leg_S() {
      let legS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6", "S-7", "S-8", "S-9", "S-10"];
      legX = p.random(legS_List);
    }
    function leg_M() {
      let legM_List = [
        "M-1",
        "M-2",
        "M-3",
        "M-4",
        "M-5",
        "M-6",
        "M-7",
        "M-8",
        "M-9",
        "M-10",
        "M-11",
      ];
      legX = p.random(legM_List);
    }
    function leg_B() {
      let legB_List = [
        "B-1",
        "B-2",
        "B-3",
        "B-4",
        "B-5",
        "B-6",
        "B-7",
        "B-8",
        "B-9",
        "B-10",
        "B-11",
      ];
      legX = p.random(legB_List);
    }

    p.noFill();
    p.stroke(173, 149, 127);
    p.rect(0, 0, p.windowWidth / 3, p.windowHeight / 2 - 1);
  };
};

// WEBCAM SKETCH

let sketch_Webcam = function (p) {
  p.setup = function () {
    let canvasWebcam = p.createCanvas(p.windowWidth / 3, p.windowHeight / 2 + 60);
    canvasWebcam.parent("question-4-canvas");

    wCam = p.windowWidth / 3;
    hCam = p.windowHeight / 2 - 10;

    //webcam
    video = p.createCapture(p.VIDEO);
    video.size(wCam, hCam);
    video.hide();

    p.frameRate(10);

    //button foto
    button = p.select("#webcam-btn");
    button.mousePressed(takesnap);

    //funzione che scatta la foto
    function takesnap() {
      p.select("#showQ5").removeClass("hide");
      if (fotoScattata == 0) {
        fotoScattata = 1;
        button.html("Try again");
      } else {
        fotoScattata = 0;
        button.html("Stop");
      }
      if (xPallina < 213) {
        head_S();
      } else if (xPallina > 213 && xPallina < 426) {
        head_M();
      } else if (xPallina > 426) {
        head_B();
      }
    }

    // Head images list

    function head_S() {
      let headS_List = [
        "S-1",
        "S-2",
        "S-3",
        "S-4",
        "S-5",
        "S-6",
        "S-7",
        "S-8",
        "S-9",
        "S-10",
        "S-11",
        "S-12",
        "S-13",
        "S-14",
        "S-15",
        "S-16",
      ];
      headX = p.random(headS_List);
    }
    function head_M() {
      let headM_List = ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7"];
      headX = p.random(headM_List);
    }
    function head_B() {
      let headB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6"];
      headX = p.random(headB_List);
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

        //bright prende la luminosità dei pixel e poi viene mappato
        bright = (r + g + b) / 3;
        let size = p.map(bright, 0, 255, gridSize, 1);

        p.fill(0);
        p.noStroke();
        p.rect(x, y, size);
      }
    }

    p.pop();

    //la pallina si sposta a seconda della luminosita (var bright)
    xPallina = p.map(bright, 0, 120, 0, p.width, true);

    //slider risposte
    p.push();

    p.stroke(173, 149, 127);
    p.fill(255, 252, 241);

    p.line(0, p.height - 25, p.width, p.height - 25);

    p.line(1, p.height - 30, 1, p.height - 20);
    p.line(p.width / 3, p.height - 30, p.width / 3, p.height - 20);
    p.line((p.width / 3) * 2, p.height - 30, (p.width / 3) * 2, p.height - 20);
    p.line(p.width - 1, p.height - 30, p.width - 1, p.height - 20);

    p.triangle(xPallina - 10, p.height - 45, xPallina, p.height - 30, xPallina + 10, p.height - 45);

    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("No", p.width / 6, p.height - 2);
    p.text("Sometimes", p.width / 2, p.height - 2);
    p.text("Yes", (p.width / 6) * 5, p.height - 2);

    p.pop();

    //se viene scattata la foto da funzione takesnap il video si stoppa
    if (fotoScattata == 1) {
      video.stop();
    } else {
      video.play();
    }
  };
};

// AUDIO SKETCH

let sketch_Audio = function (p) {
  p.setup = function () {
    let canvasAudio = p.createCanvas(600, 400);
    canvasAudio.parent("question-5-canvas");
    canvasAudio.mousePressed(startAudio);
  };
  p.draw = function () {
    p.background(255, 252, 241, 100);
    p.stroke(194, 176, 165);
    p.strokeWeight(1);

    p.line(195, 200, 580, 200);

    p.line(200, 195, 200, 205);
    p.line(326, 195, 326, 205);
    p.line(452, 195, 452, 205);
    p.line(580, 195, 580, 205);

    p.push();
    p.noFill();
    p.stroke(194, 176, 165);
    p.rect(0, 0, 600, 400);
    p.pop();

    p.textFont(century);
    p.textSize(18);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.noStroke();
    p.text("Almost never", 263, 230);
    p.text("Sometimes", 389, 230);
    p.text("Often", 515, 230);

    if (mic) {
      const micLevel = mic.getLevel();
      d = p.map(micLevel, 0, 1, 1, 1000);

      p.push();
      p.stroke(173, 149, 127);
      p.noFill();
      p.circle(200, 200, d * 3);
      p.pop();
    }
  };

  function startAudio() {
    p.userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
    p.select("#stop-audio").removeClass("hide");
  }
};

// Create all the p5 sketches

let s1 = new p5(sketch_1);
let s2 = new p5(sketch_Mouse);
let s3 = new p5(sketch_Webcam);
let s4 = new p5(sketch_Audio);
