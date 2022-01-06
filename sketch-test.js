function setup() {
  noCanvas();

  //Assign HTML buttons to variable
  let answer1 = select("#answer-1");
  let answer2 = select("#answer-2");
  let answer3 = select("#answer-3");

  //Functions to send data to Firebase
  function send_butt_1() {
    const newPart = {
      butt: 1,
    };
    addPart(newPart);
  }
  function send_butt_2() {
    const newPart = {
      butt: 2,
    };
    addPart(newPart);
  }
  function send_butt_3() {
    const newPart = {
      butt: 3,
    };
    addPart(newPart);
  }

  //When button is clicked execute function
  answer1.mousePressed(send_butt_1);
  answer2.mousePressed(send_butt_2);
  answer3.mousePressed(send_butt_3);
}

function draw() {}
