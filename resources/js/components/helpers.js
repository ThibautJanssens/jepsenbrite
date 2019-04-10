import React, { Component } from 'react';
import Axios from 'axios';


export function appRegister(myJSON){
  Axios.post("/api/register", myJSON)
  .then(function (response) {
      console.log("registered!!");
  })
  .catch(function () {
            console.log("Email already used");
  });
}

export function appLogin(myJSON){
  Axios.post("api/login", myJSON)
    .then(function (response) {
        console.log(response.data.access_token);
        sessionStorage.setItem('token-storage', JSON.stringify(response.data.access_token));
        window.location = '/';
    })
    .catch(function (error) {
              console.log(error);
    });
}

export function appLogout(myJSON){
let response =Axios({
        method :"post",
        url:"/api/logout",
        headers:{
          'Content-type':'application/json',
          'Authorization': 'Bearer' + JSON.parse(sessionStorage.getItem("token-storage"))
        }
      })

  .then(function (response) {
    sessionStorage.removeItem("token-storage");
    window.location = '/';
      console.log("Loged out");
  })
  .catch(function (error) {
            console.log(error);
            sessionStorage.removeItem("token-storage");
            window.location = '/';
  });
}


export function appAddEvent(myJSON){
  Axios.post("/api/event", myJSON);
}

export function appUpdateEvent(myJSON){
  Axios.put("/api/event/1", myJSON);
}


export function appGetPastEvent(myJSON){
  Axios.get("/api/pastEvent", myJSON);
}
