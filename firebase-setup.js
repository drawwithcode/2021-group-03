let InsectsArray;

let addUser;

// Load and initialize Firebase
async function firebaseSetup() {
  // Load firebase modules using import("url")
  const fb_app = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  const fb_database = "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

  //Load libraries
  const { initializeApp } = await import(fb_app);
  const { getDatabase, ref, push, set, onValue } = await import(fb_database);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCluuzEQ928bZofVPxTafb1RlaM6bK8GT8",
    authDomain: "your-inner-insect.firebaseapp.com",
    databaseURL: "https://your-inner-insect-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "your-inner-insect",
    storageBucket: "your-inner-insect.appspot.com",
    messagingSenderId: "237974928892",
    appId: "1:237974928892:web:aea547273cb59379bc4679",
  };

  // Initialize App
  const app = initializeApp(firebaseConfig);

  // Initialize Database
  const myDatabase = getDatabase(app);

  //Reference
  const userRef = ref(myDatabase, "insects");

  //-------------WRITE----------------------

  addUser = function (properties) {
    const addUserRef = push(userRef);
    set(addUserRef, properties);
  };

  //--------------READ---------------------

  let giveMeData = ref(myDatabase, "insects");

  onValue(giveMeData, function (snapshot) {
    const Insects = snapshot.val();
    InsectsArray = Object.values(Insects);
    // console.log(InsectsArray);
  });
}

firebaseSetup();
