import React, { Component } from 'react'
import { appGetPastEvent } from './helpers';
import posed from 'react-pose';
import { BrowserRouter as Link } from 'react-router-dom';

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

export default class DisplayPast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
    };//\state
  }//\constructor

  componentDidMount() {
    appGetPastEvent(this);
  }

  /*rendering content*/
  render() {
    const { eventList } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <h1 className="mt-2 ml-2">Past Events : </h1>
        <div className="d-flex flex-wrap futureEventsList">
          {this.state.eventList.map(item =>
            <div key={item.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column">
              <Box className="border eventBox w-100 bg-secondary text-light my-3 p-3 eventBox">
                <p className="border boxDate">{item.date_event}</p>
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
=======
        {this.state.eventList.map(item =>
          <div key={item.id} className="eventsPassed">
            <div className='passedEvents'>
              <div className='eventImg'>
                <Link to={"/display-event/" + item.id} ><h1 className="eventTitle">{item.name}</h1></Link>
                <i>{item.author}</i>
              </div>
              <div className='wholeInfos'>
                <div className='wholeInfos1'>
                  <div className='info'>
                    <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>!!! ADRESS HERE !!!</p>
                  </div>
                  <div className='info'>
                    <img className='infoIcons' src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{item.date_event}</p>
                  </div>
>>>>>>> origin/michael
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
