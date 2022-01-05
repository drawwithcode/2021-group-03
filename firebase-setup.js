// Load and initialize Firebase
async function firebaseSetup() {
  // load firebase modules using import("url")
  const fb_app = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  const fb_database =
    "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

  //load libraries
  const { initializeApp } = await import(fb_app);
  const { getDatabase, ref, push, set, onValue } = await import(fb_database);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCluuzEQ928bZofVPxTafb1RlaM6bK8GT8",
    authDomain: "your-inner-insect.firebaseapp.com",
    projectId: "your-inner-insect",
    storageBucket: "your-inner-insect.appspot.com",
    messagingSenderId: "237974928892",
    appId: "1:237974928892:web:aea547273cb59379bc4679",
    databaseURL:
      "https://your-inner-insect-default-rtdb.europe-west1.firebasedatabase.app",
  };

  // Initialize App
  const app = initializeApp(firebaseConfig);

  // Initialize Database
  const database = getDatabase(app);

  const prova = ref(database, "risultati");
  // console.log(prova);

  let data = {
    name: "lociobello",
    score: "43",
  };

  // prova.push(data);
}

firebaseSetup();
