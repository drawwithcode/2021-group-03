let chestX;
let buttX;
let headX;
let legX;
let antX;

function setup() {
  noCanvas();

  //Assign HTML buttons to variable
  let inputName = select("#input-name");

  let answer1 = select("#answer-1");
  let answer2 = select("#answer-2");
  let answer3 = select("#answer-3");
  let answer4 = select("#answer-4");
  let answer5 = select("#answer-5");

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
  function butt_2() {
    buttX = "2";
  }
  function leg_3() {
    legX = "3";
  }
  function head_4() {
    headX = "4";
  }
  function ant_5() {
    antX = "5";
  }

  //When button is clicked execute function

  answer1.mousePressed(chest_1);
  answer2.mousePressed(butt_2);
  answer3.mousePressed(leg_3);
  answer4.mousePressed(head_4);
  answer5.mousePressed(ant_5);

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

  today = day + "/" + month + "/" + year;
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
