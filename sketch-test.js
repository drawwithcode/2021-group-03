let nameX;
let chestX;
let buttX;
let headX;
let legX;
let antX;

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

    //---------LEG------------

    let setLegS = p.select("#leg-S");
    let setLegM = p.select("#leg-M");
    let setLegB = p.select("#leg-B");

    setLegS.mousePressed(leg_S);
    setLegM.mousePressed(leg_M);
    setLegB.mousePressed(leg_B);

    p.select("#showQ4").mousePressed(hideQ3);
    p.select("#showQ4").mousePressed(waitShowQ4);

    //Go to Question 4

    function hideQ3() {
      p.select("#question-3").style("opacity", "0");
      p.select("#drawing-3").style("opacity", "0");
    }
    function showQ4() {
      p.select("#question-3").hide();
      p.select("#question-4").style("display", "flex");
      p.select("#question-4").style("opacity", "1");
      p.select("#drawing-4").style("opacity", "1");
    }
    function waitShowQ4() {
      setTimeout(showQ4, 1000);
    }

    //---------HEAD------------

    let setHeadS = p.select("#head-S");
    let setHeadM = p.select("#head-M");
    let setHeadB = p.select("#head-B");

    setHeadS.mousePressed(head_S);
    setHeadM.mousePressed(head_M);
    setHeadB.mousePressed(head_B);

    p.select("#showQ5").mousePressed(hideQ4);
    p.select("#showQ5").mousePressed(waitShowQ5);

    //Go to Question 5

    function hideQ4() {
      p.select("#question-4").style("opacity", "0");
      p.select("#drawing-4").style("opacity", "0");
    }
    function showQ5() {
      p.select("#question-4").hide();
      p.select("#question-5").style("display", "flex");
      p.select("#question-5").style("opacity", "1");
      p.select("#drawing-5").style("opacity", "1");
    }
    function waitShowQ5() {
      setTimeout(showQ5, 1000);
    }

    //---------ANT------------

    let setAntS = p.select("#ant-S");
    let setAntM = p.select("#ant-M");
    let setAntB = p.select("#ant-B");

    let sendData = p.select("#send-data");

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

    setAntS.mousePressed(ant_S);
    setAntM.mousePressed(ant_M);
    setAntB.mousePressed(ant_B);

    sendData.mousePressed(send_data);

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

    function leg_S() {
      let legS_List = ["S-1", "S-2", "S-3", "S-4"];
      legX = p.random(legS_List);
      console.log(legX);
    }
    function leg_M() {
      let legM_List = ["M-1", "M-2", "M-3", "M-4", "M-5"];
      legX = p.random(legM_List);
    }
    function leg_B() {
      let legB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8"];
      legX = p.random(legB_List);
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
    console.log(buttX);
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

let s1 = new p5(sketch_1);
