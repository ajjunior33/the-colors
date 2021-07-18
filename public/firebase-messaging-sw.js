importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

const firebaseConfig = {
  messagingSenderId: "994716904299",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
