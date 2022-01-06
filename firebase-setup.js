let allParts;
let addPart;

// Load and initialize Firebase
async function firebaseSetup() {
  // Load firebase modules using import("url")
  const fb_app = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  const fb_database =
    "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

  //Load libraries
  const { initializeApp } = await import(fb_app);
  const { getDatabase, ref, push, set, onValue } = await import(fb_database);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCluuzEQ928bZofVPxTafb1RlaM6bK8GT8",
    authDomain: "your-inner-insect.firebaseapp.com",
    databaseURL:
      "https://your-inner-insect-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "your-inner-insect",
    storageBucket: "your-inner-insect.appspot.com",
    messagingSenderId: "237974928892",
    appId: "1:237974928892:web:aea547273cb59379bc4679",
  };

  // Initialize App
  const app = initializeApp(firebaseConfig);

  // Initialize Database
  const myDatabase = getDatabase(app);

  //read------------------------------------------------------------

  //Reference
  const chestRef = ref(myDatabase, "insects/user1/parts");
  const buttRef = ref(myDatabase, "insects/user1/parts");
  const legRef = ref(myDatabase, "insects/user1/parts");

  //write-------------------------------------------------------------

  addChest = function (properties) {
    const addChestRef = push(chestRef);
    set(addChestRef, properties);
  };
  addButt = function (properties) {
    const addButtRef = push(buttRef);
    set(addButtRef, properties);
  };
  addLeg = function (properties) {
    const addLegRef = push(legRef);
    set(addLegRef, properties);
  };

  const giveMe = ref(myDatabase, "insects/user1/parts");
  onValue(giveMe, function (snapshot) {
    allParts = snapshot.val();
    console.log(allParts);
    let array = Object.values(allParts);
    console.log(array);
    console.log(array[0].chest);
    console.log(array[1].butt);
    console.log(array[2].leg);
  });
}

firebaseSetup();
