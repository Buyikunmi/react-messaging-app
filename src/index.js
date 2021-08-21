import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAeA3lOXFgD0h-8rwRTV2vX9GCibrFaft8",
  authDomain: "web-messaging-app-afae2.firebaseapp.com",
  projectId: "web-messaging-app-afae2",
  storageBucket: "web-messaging-app-afae2.appspot.com",
  messagingSenderId: "261452166450",
  appId: "1:261452166450:web:25692041108e726e2c532b",
  measurementId: "G-Y65S54VBRV"
};


firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <App />
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
