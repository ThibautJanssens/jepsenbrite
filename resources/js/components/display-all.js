import React, { Component } from 'react';
import { appGetFutureEvent } from './helpers';
import posed from 'react-pose';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
  }

  /*rendering content*/
  render() {
    const { eventList } = this.state;
    return (
      <div>
        {this.state.eventList.map(item =>
          <div key={item.id} className="eventsPassed">
            <div className="passedEvents">
              <div className="eventImg">
                <Link to={{ pathname: "/display-event/" + item.id, state: { nameEvent: item.name } }} >
                  <h1 key={item.name} className="eventTitle ">{item.name}</h1>
                </Link>
                <i key={item.author}>{item.author}</i>
              </div>
              <div className="container video-container mt-5">
                {
                  (item.media_type === 'image') ? <img className="imgDisplay" alt="image event" src={item.image_url} /> : <iframe width="100%" src={`https://www.youtube.com/embed/${item.image_url}`} frameBorder="0" allowFullScreen />
                }
              </div>
              <div className='wholeInfos'>
                <div className='wholeInfos1'>
                  <div className='info'>
                    <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' />
                    <div className='infoTxt'>
                      <div>{item.street}</div>
                      <div>{item.postal_code}, {item.city}</div>
                      <div>{item.country}</div>
                    </div>
                  </div>
                  <div className='info'>
                    <img className='infoIcons' src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' />
                    <p className='infoTxt'>{item.date_event}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
    )
  }//\render
}
