import React, { Component } from 'react'
import { appGetMyParticipations } from './helpers';
import CarouselContent from './carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import posed from 'react-pose';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.03,
    boxShadow: '10px 10px 10px rgba(0,100,0,0.2)'
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

export default class MyParticipation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
    };//\state
  }//\constructor

  componentDidMount() {
    appGetMyParticipations(this);
  }

  /*rendering content*/
  render() {
    const { eventList } = this.state;
    return (
      <div>
        <h1 className="mt-5 mb-3 text-center">My Participations</h1>
        <div className="d-flex flex-wrap futureEventsList">
          {this.state.eventList.map(item =>
            <div key={item.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column">
              <Box className="border eventBox w-100 bg-secondary text-light my-3 p-3 eventBox flex-grow-1">
              <p className="border boxDate shadow">{item.date_event}</p>
                <h1 className="eventTitle ">{item.name}</h1>
                <Img className="imgDiv border">
                <Img className="imgDiv border">
                        {
                          (item.media_type === 'image') ? <img className="imgDisplay" alt="image event" src={item.image_url}/>:<iframe width="100%" src={`https://www.youtube.com/embed/${item.image_url}`} frameBorder="0"  allowFullScreen/>
                        }
                    </Img>
                </Img>
                <div className="border boxDescription">
                  <p><strong>Description:</strong></p>
                  <div>{item.description}</div>
                </div>
                <div className="border boxDescription">
                  <p><strong>Adress:</strong></p>
                  <div>{item.street}</div>
                  <div>{item.postal_code}, {item.city}</div>
                  <div>{item.country}</div>
                </div>
                <div className="border boxDescription">
                  <p><strong>Price:</strong> € {item.price}</p>
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
