import React, { Component } from 'react';
import { appGetFutureEvent } from './helpers';
import posed from 'react-pose';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { rgba } from 'style-value-types';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',

  },
  hover: {
    scale: 1,
    boxShadow: '10px 10px 10px rgba(0,100,0,0.2)',

  },
  press: {
    boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
  }
});

const Img = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    opacity: 1,

  },
  hover: {
    scale: 1,
    opacity: 0.5,
  },
  press: {
    boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
  }
});

export default class DisplayAll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      nameEvent: "",
    };//\state
  }//\constructor

  componentDidMount() {
    appGetFutureEvent(this);
    // console.log("token-storage: "+JSON.parse(sessionStorage.getItem("token-storage")));
    // console.log("user-id-storage: "+sessionStorage.getItem("user-id-storage"));
    // console.log("user-name-storage: "+sessionStorage.getItem("user-name-storage"));
  }

  /*rendering content*/
  render() {
    const position = [this.state.lat, this.state.lng];
    const { eventList } = this.state;
    return (
      <div>
        <h1 className="mt-5 mb-3 text-center">Future Events</h1>
        <div className="d-flex flex-wrap futureEventsList">
          {this.state.eventList.map(item =>
            <div key={item.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column">
              <Box className="border eventBox w-100 bg-secondary text-light my-3 p-3 eventBox flex-grow-1">
              <p className="border boxDate shadow">{item.date_event}</p>
                <h1 className="eventTitle ">{item.name}</h1>
                <Img className="imgDiv border">

                    {/*<p>Media type: {item.media_type}</p>
                    <p>Url: {item.image_url}</p>
                    <img className="imgDisplay" alt="image event" src={`${item.image_url}`}/>*/}
                    <Img className="imgDiv border">
                        {
                          (item.media_type === 'image') ? <img className="imgDisplay" alt="image event" src={item.image_url}/>:<iframe width="100%" src={`https://www.youtube.com/embed/${item.image_url}`} frameBorder="0"  allowFullScreen/>
                        }
                    </Img>
                </Img>
                <div className="border boxDescription">
                  {item.description}
                </div>
                <p>
                  <Link variant="light" className="btn btn-light my-2 shadow" to={{pathname: "/display-event/"+item.id, state: {nameEvent: item.name}}} >More informations</Link>
                </p>
              </Box>
            </div>
          )}
        </div>
      </div>

    )
  }
}
