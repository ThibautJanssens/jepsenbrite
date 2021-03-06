/*helpers is used for global functions*/
/*show or hide some parts of components*/
import axios from 'axios';
import date from 'date-and-time';
import bootbox from 'bootbox'


/* fct to convert date from ISO to YYYY/MM/DD HH:mm:ss and then replace '/' by '-'*/
export function convertDate(arg) {
  let now = new Date(arg);
  let convertDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
  let regex = /\//ig;
  let convertedDateStrike = convertDate.replace(regex, '-');
  return convertedDateStrike;
}


/*API REQUESTS*/
/*Register -POST*/
export function appRegister(myJSON) {
  axios.post("/api/register", myJSON)
    .then(function (response) {
      console.log("registered!!");
      bootbox.confirm({
        message: "Welcome to DoNutEvents ! You'll be redirected to the login page. Check your emails for more informations.",
        className: 'text-primary',
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-primary w-100'
          },
          cancel: {
            label: 'No',
            className: 'btn-danger d-none'
          }
        },
        callback: function (result) {
          console.log('This was logged in the callback: ' + result);
          window.location = '/#/login';
        }
      });

    })
    .catch(function (error) {
      console.log("Email already used");
      bootbox.alert({
        message: "Email already used, choose another one",
        className: 'text-primary',
        backdrop: true,

      });
    });
}

/*User -GET - user */
export function appGetUser() {
  axios(
    {
      method: 'GET',
      url: "/api/user",
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
    })
    .then(function (response) {
      sessionStorage.setItem('user-id-storage', response.data.id);
      sessionStorage.setItem('user-name-storage', response.data.name);
      window.location = '/';
    })
    .catch(function (error) {
      console.log(error);
    })
}

/*Login -POST - user/pw */
export function appLogin(myJSON) {
  axios.post("api/login", myJSON)
    .then(function (response) {
      sessionStorage.setItem('token-storage', JSON.stringify(response.data.access_token));
      bootbox.confirm({
        message: "You are now logged in !",
        className: 'text-primary',
        buttons: {
          confirm: {
            label: 'Continue',
            className: 'btn-primary w-100'
          },
          cancel: {
            label: 'No',
            className: 'd-none'
          }
        },
        callback: function (result) {
          console.log('This was logged in the callback: ' + result);
          appGetUser();
        }
      });
      //fct to retrieve some datas id/name

    })
    .catch(function (error) {
      bootbox.alert({
        message: "Problem, email and/or password is incorrect!",
        className: 'text-primary',
        backdrop: true
      });
    });
}

/*Logout-POST */
export function appLogout() {
  let config = {
    headers: { 'Authorization': "bearer " + JSON.parse(sessionStorage.getItem("token-storage")) }
  };
  let bodyParameters = {
    key: "value"
  }
  axios.post("/api/logout", bodyParameters, config)
    .then(function (response) {
      //console.log(response);
      sessionStorage.removeItem("token-storage");
      sessionStorage.removeItem("user-id-storage");
      sessionStorage.removeItem("user-name-storage");
      window.location = '/';
    })
    .catch(function (error) {
      console.log(error);
      sessionStorage.removeItem("token-storage");
      sessionStorage.removeItem("user-id-storage");
      sessionStorage.removeItem("user-name-storage");
      window.location = '/';
    })
}

/*Get ALL events-GET */
export function appGetEvent(eventList) {
  axios.get("/api/events")
    .then(response => eventList.setState({
      eventList: response.data
    }))
    .catch(function (error) {
      console.log(error);
    })
}

/*Get FUTURE events -GET */
export function appGetFutureEvent(eventList) {
  axios.get("/api/futurEvent")
    .then(response => eventList.setState({
      eventList: response.data
    }))
    .catch(function (error) {
      console.log(error);
    })

}

/*Get Past Event -GET */
export function appGetPastEvent(eventList) {
  axios.get("/api/pastEvent")
    .then(response => eventList.setState({
      eventList: response.data
    }))
    .catch(function (error) {
      console.log(error);
    })
}

/*Get My Event -GET */
export function appGetMyEvent(eventList) {
  axios(
    {
      method: 'GET',
      url: "/api/myEvents",
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
    })
    .then(response => eventList.setState({
      eventList: response.data
    }))
    .catch(function (error) {
      console.log(error);
    })
}

/*Get My Event -GET */
export function appGetMyParticipations(eventList) {
  axios(
    {
      method: 'GET',
      url: "/api/myParticipation",
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
    })
    .then(response => eventList.setState({
      eventList: response.data
    }))
    .catch(function (error) {
      console.log(error);
    })
}

/*Get Subscribers -GET */
export function appGetSubscribers(myJSON) {
  axios.get("/api/myParticipation")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

/*Get Event by ID-GET */
export function appGetEventByID(eventID, eventList) {
  axios.get("/api/event/" + eventID)
    .then(function (response) {
      eventList.setState({
        eventList: response.data.event,
        suscribersList: response.data.participants
      })
      appGetCheckbox(eventList);
    })
    .catch(function (error) {
      console.log(error);
    })
}
/*function to check if user has registered to an event
to put the checkbox to true or false when he opens an event*/
export function appGetCheckbox(eventList) {
  let suscribers = JSON.stringify(eventList.state.suscribersList.map(item => item.id));

  let idUser = sessionStorage.getItem("user-id-storage");
  //console.log("result indexOf : ", + suscribers.indexOf(idUser) > -1)
  if (suscribers.indexOf(idUser) > -1) {
    eventList.setState({
      boxSubscribe: true
    })
  } else {
    eventList.setState({
      boxSubscribe: false
    })
  }
}

/*Get Event by ID-GET */
export function appGetEventByIDEdit(eventID, eventList) {
  axios.get("/api/event/" + eventID)
    .then(function (response) {
      eventList.setState({
        eventList: response.data.event,
        suscribersList: response.data.participants
      })
      appGetContent(response, eventList);
    })
    .catch(function (error) {
      console.log(error);
    })
}
/*function to set states in edit page to have content on inputs*/
export function appGetContent(response, eventList) {
  //console.log(response.data.event[0].name);
  let event = new Date(response.data.event[0].date_event);
  let eventDate = event.toISOString();
  let eventReminder = new Date(response.data.event[0].reminder);
  let reminderDate = eventReminder.toISOString();
  if (response.data.event[0].reminder !== null) {
    eventList.setState({ boxReminder: true });
    document.getElementsByName("calendarDisplay")[0].style.display = "block";
  }
  else {
    eventList.setState({ boxReminder: false });
    reminderDate = "";
    document.getElementsByName("calendarDisplay")[0].style.display = "none";
  }

  eventList.setState({
    name: response.data.event[0].name,
    description: response.data.event[0].description,
    image_url: response.data.event[0].image_url,
    date_event: eventDate,
    reminder: reminderDate,
    street: response.data.event[0].street,
    postal_code: response.data.event[0].postal_code,
    city: response.data.event[0].city,
    country: response.data.event[0].country,
    price: response.data.event[0].price,
    image_url: response.data.event[0].image_url,
    file: response.data.event[0].image_url,
    imagePreviewUrl: response.data.event[0].image_url,
    video_url: "https://www.youtube.com/watch?v="+response.data.event[0].image_url,
    media_type: response.data.event[0].media_type,
    selectedOption: response.data.event[0].media_type,
    imagePreviewUrl: response.data.event[0].image_url,
  })
}

/*Add Event-POST */
export function appAddEvent(myJSON) {
  axios(
    {
      method: 'POST',
      url: "/api/event",
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
      data: JSON.stringify(myJSON)
    })
    .then(function (response) {
      bootbox.confirm({
        message: "Thanks for your contribution, your event has been successfully added",
        className: 'text-primary',
        buttons: {
          confirm: {
            label: 'Continue',
            className: 'btn-primary w-100'
          },
          cancel: {
            label: 'No',
            className: 'd-none'
          }
        },
        callback: function (result) {
          window.location = '/';
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}


/*Send invitation-POST */
export function appSendMails(eventID, myJSON) {
  console.log("eventID"+eventID);
  console.log("myJSON"+JSON.stringify(myJSON));
  // let tokenStorage = sessionStorage.getItem("token-storage");
  // console.log(tokenStorage);
  axios(
    {
      method: 'POST',
      url: "api/event/"+eventID+"/invitations",
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
      data: JSON.stringify(myJSON)
    })
    .then(function (response) {
      bootbox.confirm({
        message: "Thanks for your contribution, your emails has been successfully sent",
        className: 'text-primary',
        buttons: {
          confirm: {
            label: 'Continue',
            className: 'btn-primary w-100'
          },
          cancel: {
            label: 'No',
            className: 'd-none'
          }
        },
        callback: function (result) {
          window.location = '/#/display-event/'+eventID;
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}

/*Update Event-PUT */
export function updateEvent(eventID, myJSON) {
  axios(
    {
      method: 'PUT',
      url: "/api/event/" + eventID,
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
      data: JSON.stringify(myJSON)
    })
    .then(function (response) {
      bootbox.confirm({
        message: "Your event has been successfully updated",
        className: 'text-primary',
        buttons: {
          confirm: {
            label: 'Continue',
            className: 'btn-primary w-100'
          },
          cancel: {
            label: 'No',
            className: 'd-none'
          }
        },
        callback: function (result) {
          window.location = '/';
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}

/*Suscribe-POST*/
export function suscribeEvent(eventID) {
  axios(
    {
      method: 'POST',
      url: "/api/inscription/" + eventID,
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

/*Unsuscribe-POST*/
export function unsuscribeEvent(eventID) {
  axios(
    {
      method: 'POST',
      url: "/api/unsubscribe/" + eventID,
      headers:
      {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
      },
    })
    .then(function (response) {
      console.log(response);
    })
}
//\API REQUESTS
