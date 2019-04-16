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
    };//\state
  }//\constructor

  componentDidMount() {
    //console.log(this);
    appGetFutureEvent(this);
    //console.log("token-storage: "+JSON.parse(sessionStorage.getItem("token-storage")));
    //console.log("user-id-storage: "+JSON.parse(sessionStorage.getItem("user-id-storage")));
    //console.log("user-name-storage: "+JSON.parse(sessionStorage.getItem("user-name-storage")));
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
   
          
            // <p className="border boxDate shadow">{item.date_event}</p>
            // <h1 className="eventTitle ">{item.name}</h1>
            // <Img className="imgDiv border">
            //   {<img className="imgDisplay" src={item.image_url} alt="image event" />}
            // </Img>
            // <div className="border boxDescription">
            //   {item.description}
            // </div>
            // <p>
    )
        
    );
}
}
