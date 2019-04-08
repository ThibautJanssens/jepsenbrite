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
    })
    .catch(function (error) {
              console.log(error);
    });
}

export function appLogout(myJSON){
  Axios.post("/api/logout/", myJSON)
  .then(function (response) {
      console.log("Loged out");
  })
  .catch(function (error) {
            console.log(error);
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
