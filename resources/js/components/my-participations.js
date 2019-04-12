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
      return (this.state.eventList.map(item =>
        <div key={item.id} className="eventsPassed">
          <div className="passedEvents">
            <div className="eventImg">
              <Link to={"/display-event/" + item.id} ><h1 className="eventTitle">{item.name}</h1></Link>
              <i>!!! AUTHOR HERE !!!</i>
            </div>
            <div className='wholeInfos'>
                <div className='wholeInfos1'>
                  <div className='info'>
                    <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>!!! ADRESS HERE !!!</p>
                    </div>
                    <div className='info'>
                    <img className='infoIcons' src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{item.date_event}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
            
      )
    )
  }
}
