let chestX;
let buttX;
let headX;
let legX;
let antX;

function setup() {
  noCanvas();

  //Assign HTML buttons to variable
  let inputName = select("#input-name");

  let setChest1 = select("#chest-1");
  let setChest2 = select("#chest-2");
  let setChest3 = select("#chest-3");

  let setButt1 = select("#butt-1");
  let setButt2 = select("#butt-2");
  let setButt3 = select("#butt-3");

  let setLeg1 = select("#leg-1");
  let setLeg2 = select("#leg-2");
  let setLeg3 = select("#leg-3");

  let setHead1 = select("#head-1");
  let setHead2 = select("#head-2");
  let setHead3 = select("#head-3");

  let setAnt1 = select("#ant-1");
  let setAnt2 = select("#ant-2");
  let setAnt3 = select("#ant-3");

  let sendData = select("#send-data");

  // let getName = inputName.value;

  //Functions to send data to Firebase
  function send_data() {
    const newUser = {
      name: inputName.value(),
      date: today,
      // parts: [chestX, buttX, legX, headX, antX],
      chest: chestX,
      butt: buttX,
      leg: legX,
      head: headX,
      ant: antX,
    };
    addUser(newUser);
    console.log(newUser.name);
    console.log("antenna n." + newUser.ant);
  }

  function chest_1() {
    chestX = "1";
  }
  function chest_2() {
    chestX = "2";
  }
  function chest_3() {
    chestX = "3";
  }

  function butt_1() {
    buttX = "1";
  }
  function butt_2() {
    buttX = "2";
  }
  function butt_3() {
    buttX = "3";
  }

  function leg_1() {
    legX = "2";
  }
  function leg_2() {
    legX = "4";
  }
  function leg_3() {
    legX = "5";
  }

  function head_1() {
    headX = "1";
  }
  function head_2() {
    headX = "2";
  }
  function head_3() {
    headX = "5";
  }

  function ant_1() {
    antX = "1";
  }
  function ant_2() {
    antX = "2";
  }
  function ant_3() {
    antX = "3";
  }

  //When button is clicked execute function

  setChest1.mousePressed(chest_1);
  setChest2.mousePressed(chest_2);
  setChest3.mousePressed(chest_3);

  setButt1.mousePressed(butt_1);
  setButt2.mousePressed(butt_2);
  setButt3.mousePressed(butt_3);

  setLeg1.mousePressed(leg_1);
  setLeg2.mousePressed(leg_2);
  setLeg3.mousePressed(leg_3);

  setHead1.mousePressed(head_1);
  setHead2.mousePressed(head_2);
  setHead3.mousePressed(head_3);

  setAnt1.mousePressed(ant_1);
  setAnt2.mousePressed(ant_2);
  setAnt3.mousePressed(ant_3);

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

// function send_butt_2() {
//   const newPart = {
//     butt: 2,
//   };
//   addButt(newPart);
// }
// function send_leg_3() {
//   const newPart = {
//     leg: 3,
//   };
//   addLeg(newPart);
// }
