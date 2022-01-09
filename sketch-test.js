let chestX;
let buttX;
let headX;
let legX;
let antX;

function setup() {
  noCanvas();

  //Assign HTML buttons to variable
  let inputName = select("#input-name");

  let setChestS = select("#chest-S");
  let setChestM = select("#chest-M");
  let setChestB = select("#chest-B");

  let setButtS = select("#butt-S");
  let setButtM = select("#butt-M");
  let setButtB = select("#butt-B");

  let setLegS = select("#leg-S");
  let setLegM = select("#leg-M");
  let setLegB = select("#leg-B");

  let setHeadS = select("#head-S");
  let setHeadM = select("#head-M");
  let setHeadB = select("#head-B");

  let setAntS = select("#ant-S");
  let setAntM = select("#ant-M");
  let setAntB = select("#ant-B");

  let sendData = select("#send-data");

  // let getName = inputName.value;

  //Functions to send data to Firebase
  function send_data() {
    const newUser = {
      name: inputName.value(),
      date: today,
      chest: chestX,
      butt: buttX,
      leg: legX,
      head: headX,
      ant: antX,
    };
    addUser(newUser);
  }

  function chest_S() {
    let chestS_List = ["S-1", "S-2", "S-3"];
    chestX = random(chestS_List);
  }
  function chest_M() {
    let chestM_List = ["M-1", "M-2", "M-3", "M-4"];
    chestX = random(chestM_List);
  }
  function chest_B() {
    let chestB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8", "B-9"];
    chestX = random(chestB_List);
  }

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

  function ant_S() {
    let antS_List = ["S-1", "S-2", "S-3", "S-4"];
    antX = random(antS_List);
  }
  function ant_M() {
    let antM_List = ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6"];
    antX = random(antM_List);
  }
  function ant_B() {
    let antB_List = ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7"];
    antX = random(antB_List);
  }

  //When button is clicked execute function

  setChestS.mousePressed(chest_S);
  setChestM.mousePressed(chest_M);
  setChestB.mousePressed(chest_B);

  setButtS.mousePressed(butt_S);
  setButtM.mousePressed(butt_M);
  setButtB.mousePressed(butt_B);

  setLegS.mousePressed(leg_S);
  setLegM.mousePressed(leg_M);
  setLegB.mousePressed(leg_B);

  setHeadS.mousePressed(head_S);
  setHeadM.mousePressed(head_M);
  setHeadB.mousePressed(head_B);

  setAntS.mousePressed(ant_S);
  setAntM.mousePressed(ant_M);
  setAntB.mousePressed(ant_B);

  sendData.mousePressed(send_data);

  // if (allParts) {
  //   for (key in allParts) {
  //     let part = allParts[key];
  //     console.log(part.chest, part.butt, part.leg);
  //   }
  // }

  // let allPartsArray = Object.keys(allParts).map((key) => [
  //   Number(key),
  //   allParts[key],
  // ]);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let year = today.getFullYear();

  today = day + " / " + month + " / " + year;
  console.log(today);
}

function draw() {}

// OLD

// function send_butt_M() {
//   const newPart = {
//     butt: 2,
//   };
//   addButt(newPart);
// }
// function send_leg_B() {
//   const newPart = {
//     leg: 3,
//   };
//   addLeg(newPart);
// }
