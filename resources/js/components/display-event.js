import React, { Component } from 'react';
import { appGetEventByID } from './helpers';
import { suscribeEvent } from './helpers';
import { unsuscribeEvent } from './helpers';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      eventList: [],
      suscribersList: [],
      boxSubscribe: false,
      idEvent: this.props.match.params.id,

    }

  }//\constructor

  setboxSuscribe(props) {
    this.setState({
      boxSubscribe: props
    })
  }

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
  }

  /*checkbox suscribe/unsuscrib + road to api*/
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    if (target.checked === true) {
      suscribeEvent(this.props.match.params.id);
      this.setboxSuscribe(true);
    }
    else {
      unsuscribeEvent(this.props.match.params.id);
      this.setboxSuscribe(false);
    }
  }//\end fct handleChange

  render() {
    const { eventList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);
    const authorId = this.state.eventList.map(item => item.id);
    const idRoute = this.state.idEvent;

    let editButton;
    let suscribeButton;
    if (sessionStorage.getItem("user-name-storage") === JSON.stringify(authorArticle[0])) {
      editButton = (
        <Link variant="light" className="btn btn-light my-2" to={"/edit/" + idRoute} >Edit this event</Link>
      )
    }
    if (sessionStorage.getItem("token-storage") !== null) {
      suscribeButton = (
        <div className="form-check">
          <input className="form-check-input"
            type="checkbox"
            name="boxSuscribe"
            checked={this.state.boxSubscribe}
            onChange={this.handleChange} />
          <label className="form-check-label">Suscribe to this event</label>
        </div>
      )
    }
    return (this.state.eventList.map(item =>
      <div key={item.id} className="eventsPassed">
        <div className="passedEvents">
          <div className='eventImg'>
            <h1 className='eventTitle'>
              {item.name}<i>(by {item.author})</i></h1>
          </div>

          <div className='passedEvents2'>
            <p> {item.description} </p>
          </div>
          <div className='wholeInfos'>
            <div className='wholeInfos1'>
              <div className='info'>
                <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>!!! ADRESS HERE !!!</p>
              </div>
              <div className='info'>
                <img className='infoIcons' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{item.date_event}</p>
              </div>
              <div className='info'>
                <img className='infoIcons' src='https://stickeroid.com/uploads/pic/full-pngimg/9d06df374b8bab48fc3ba0a7e1a6f4ccd2212d81.png' /><p className='infoTxt'>!!! Price: HERE € !!!</p>
              </div>
            </div>
            <div className='wholeInfos2'>
              <div className='info'>
                <img className='infoIcons2' src='http://pngimages.net/sites/default/files/upload-png-image-77090.png' /><p className='infoTxt'>Posted on !!!DATE CREATION HERE!!!</p>
              </div>
              <div className='info'>
                <img className='infoIcons2' src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_update-512.png' /><p className='infoTxt'>Last update:  !!! DATE UPDATE EVENT HERE !!!</p>
              </div>
              <div className="p-col-12 mt-3">
                {suscribeButton}
              </div>
              <div>
                {editButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    );
  }
}
