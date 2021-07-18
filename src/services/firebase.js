import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const messaging = firebase.messaging();

messaging
  .getToken({
    vapidKey:
      "BADtXHNIhSMviGTqq1ccB6Dmaf92lIgKkW12Dw1X6tdPU56KOiXbLASKfbsca_bm2Ub_xluPRSeitGm8_DNRXqQ",
  })
  .then((currentToken) => {
    if (currentToken) {
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.error("An error occurred while retrieving token. ", err);
    // ...
  });

messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  // ...
});

export { firebase, auth };
