import './App.css';

import "firebase/firestore";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBIoNCS0dJAQjtTA9Vgt3aKc8OeJ57z1aQ",
  authDomain: "devlift-task2.firebaseapp.com",
  projectId: "devlift-task2",
  storageBucket: "devlift-task2.appspot.com",
  messagingSenderId: "1038835904361",
  appId: "1:1038835904361:web:56f89ff49d98c8a49117f8"
};

function Burrito() {
  const burritoRef = useFirestore()
    .collection("tryreactfire")
    .doc("burrito");

  const { status, data } = useFirestoreDocData(burritoRef);

  if (status === "loading") {
    return <p>Fetching burrito details...</p>;
  }

  return <p>The burrito is {data.yummy}! <br/>The price is ${data.price}<br/></p>;
}


function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <h1>🌯</h1>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default App;
