function setup() {
  noCanvas();

  //Assign HTML buttons to variable
  let answer1 = select("#answer-1");
  let answer2 = select("#answer-2");
  let answer3 = select("#answer-3");

  //Functions to send data to Firebase
  function send_chest_1() {
    const newChest = {
      chest: 1,
    };
    addChest(newChest);
  }
  function send_butt_2() {
    const newPart = {
      butt: 2,
    };
    addButt(newPart);
  }
  function send_leg_3() {
    const newPart = {
      leg: 3,
    };
    addLeg(newPart);
  }

  //When button is clicked execute function
  answer1.mousePressed(send_chest_1);
  answer2.mousePressed(send_butt_2);
  answer3.mousePressed(send_leg_3);

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
}

function draw() {}
