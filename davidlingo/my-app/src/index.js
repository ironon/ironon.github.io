import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
let DATA
let homeWork
if (getCookie("tasks") == "") {
  DATA = []
} else {
  DATA = JSON.parse(getCookie("tasks"))
  
}
if (getCookie("homework") == "") {
  homeWork = []
} else {
  homeWork = JSON.parse(getCookie("homework"))
  
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} homework={homeWork}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

