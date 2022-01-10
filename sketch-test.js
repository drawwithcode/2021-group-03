let nameX;
let chestX;
let buttX;
let headX;
let legX;
let antX;

//TRANSITIONS FUNCTIONS

//Intro

function hideQuestions() {
  select("#question-1").hide();
  select("#question-2").hide();
  select("#question-3").hide();
  select("#question-4").hide();
  select("#question-5").hide();
}
function showHello() {
  select("#hello").style("opacity", "1");
}
function hideHello() {
  select("#hello").style("opacity", "0");
}
function showName() {
  select("#askName").style("opacity", "1");
}
function hideName() {
  select("#askName").style("opacity", "0");
}
function showIntro2() {
  select("#intro-2").style("opacity", "1");
}
function waitShowIntro2() {
  setTimeout(showIntro2, 1000);
}
function destroyIntro1() {
  select("#askName").hide();
}
function waitDestroyIntro1() {
  setTimeout(destroyIntro1, 1000);
}

//Go to Question 1

function finishIntro() {
  select("#intro-2").style("opacity", "0");
}
function destroyAllIntro() {
  select("#intro-container").hide();
  // select("#prova").show();
  select("#question-1").show();
  select("#question-1").style("opacity", "1");
}
function waitDestroyAllIntro() {
  setTimeout(destroyAllIntro, 1000);
}

//Go to Question 2

function hideQ1() {
  select("#question-1").style("opacity", "0");
}
function showQ2() {
  select("#question-1").hide();
  select("#question-2").show();
  select("#question-2").style("opacity", "1");
}
function waitShowQ2() {
  setTimeout(showQ2, 1000);
}

//Go to Question 3

function hideQ2() {
  select("#question-2").style("opacity", "0");
}
function showQ3() {
  select("#question-2").hide();
  select("#question-3").show();
  select("#question-3").style("opacity", "1");
}
function waitShowQ3() {
  setTimeout(showQ3, 1000);
}

//Go to Question 4

function hideQ3() {
  select("#question-3").style("opacity", "0");
}
function showQ4() {
  select("#question-3").hide();
  select("#question-4").show();
  select("#question-4").style("opacity", "1");
}
function waitShowQ4() {
  setTimeout(showQ4, 1000);
}

//Go to Question 5

function hideQ4() {
  select("#question-4").style("opacity", "0");
}
function showQ5() {
  select("#question-4").hide();
  select("#question-5").show();
  select("#question-5").style("opacity", "1");
}
function waitShowQ5() {
  setTimeout(showQ5, 1000);
}

//P5 SKETCH INSTANCES

let intro_sketch = function (p) {
  p.setup = function () {
    p.noCanvas();

    hideQuestions();

    setTimeout(showHello, 500);
    setTimeout(hideHello, 3000);

    setTimeout(showName, 4000);
    p.select("#send-name").mousePressed(hideName);
    p.select("#send-name").mousePressed(waitShowIntro2);
    p.select("#send-name").mousePressed(waitDestroyIntro1);

    p.select("#start-test").mousePressed(finishIntro);
    p.select("#start-test").mousePressed(waitDestroyAllIntro);

    let inputName = select("#input-name");
    let sendName = select("#send-name");

    function send_name() {
      nameX = inputName.value();
    }

    sendName.mousePressed(send_name);
  };
};

let q1_sketch = function (p) {
  p.setup = function () {
    p.noCanvas();

    let setChestS = p.select("#chest-S");
    let setChestM = p.select("#chest-M");
    let setChestB = p.select("#chest-B");

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

    setChestS.mousePressed(chest_S);
    setChestM.mousePressed(chest_M);
    setChestB.mousePressed(chest_B);

    p.select("#showQ2").mousePressed(hideQ1);
    p.select("#showQ2").mousePressed(waitShowQ2);
  };
};

let q2_sketch = function (p) {
  p.setup = function () {
    p.noCanvas();

    let setButtS = select("#butt-S");
    let setButtM = select("#butt-M");
    let setButtB = select("#butt-B");

    function butt_S() {
      let buttS_List = ["S-1", "S-2", "S-3", "S-4"];
      buttX = random(buttS_List);
    }
    function butt_M() {
      let buttM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      buttX = random(buttM_List);
    }
    function butt_B() {
      let buttB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"];
      buttX = random(buttB_List);
    }

    setButtS.mousePressed(butt_S);
    setButtM.mousePressed(butt_M);
    setButtB.mousePressed(butt_B);

    p.select("#showQ3").mousePressed(hideQ2);
    p.select("#showQ3").mousePressed(waitShowQ3);
  };
};

let q3_sketch = function (p) {
  p.setup = function () {
    p.noCanvas();

    let setLegS = select("#leg-S");
    let setLegM = select("#leg-M");
    let setLegB = select("#leg-B");

    function leg_S() {
      let legS_List = ["S-1", "S-2", "S-3", "S-4"];
      legX = random(legS_List);
      console.log(legX);
    }
    function leg_M() {
      let legM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      legX = random(legM_List);
    }
    function leg_B() {
      let legB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8"];
      legX = random(legB_List);
    }

    setLegS.mousePressed(leg_S);
    setLegM.mousePressed(leg_M);
    setLegB.mousePressed(leg_B);

    p.select("#showQ4").mousePressed(hideQ3);
    p.select("#showQ4").mousePressed(waitShowQ4);
  };
};

let q4_sketch = function (p) {
  p.setup = function () {
    let setHeadS = select("#head-S");
    let setHeadM = select("#head-M");
    let setHeadB = select("#head-B");

    function head_S() {
      let headS_List = ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6"];
      headX = random(headS_List);
    }
    function head_M() {
      let headM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      headX = random(headM_List);
    }
    function head_B() {
      let headB_List = ["B-1", "B-2", "B-3", "B-4", "B-5"];
      headX = random(headB_List);
    }

    setHeadS.mousePressed(head_S);
    setHeadM.mousePressed(head_M);
    setHeadB.mousePressed(head_B);

    p.select("#showQ5").mousePressed(hideQ4);
    p.select("#showQ5").mousePressed(waitShowQ5);
  };
};

let q5_sketch = function (p) {
  p.setup = function () {
    let setAntS = select("#ant-S");
    let setAntM = select("#ant-M");
    let setAntB = select("#ant-B");

    let sendData = select("#send-data");

    //Send user answers to Firebase

    function send_data() {
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
    }

    function ant_S() {
      let antS_List = ["S-1", "S-2", "S-3", "S-4"];
      antX = random(antS_List);
    }
    function ant_M() {
      let antM_List = ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7", "M-8", "M-9", "M-10"];
      antX = random(antM_List);
    }
    function ant_B() {
      let antB_List = ["B-1", "B-2", "B-3", "B-4"];
      antX = random(antB_List);
    }

    setAntS.mousePressed(ant_S);
    setAntM.mousePressed(ant_M);
    setAntB.mousePressed(ant_B);

    sendData.mousePressed(send_data);

    //Get today's date

    let today = new Date();
    let day = String(today.getDate()).padStart(2, "0");
    let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let year = today.getFullYear();
    today = day + " / " + month + " / " + year;
  };
};

function setup() {
  //Assign body parts
  //When button is clicked, assign body part
}

// function draw() {}

let intro = new p5(intro_sketch);
let q1 = new p5(q1_sketch);
let q2 = new p5(q2_sketch);
let q3 = new p5(q3_sketch);
let q4 = new p5(q4_sketch);
let q5 = new p5(q5_sketch);

intro.parent("intro-container");
q1.parent("question-1");
q2.parent("question-2");
q3.parent("question-3");
q4.parent("question-4");
q5.parent("question-5");
