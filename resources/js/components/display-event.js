import React, { Component } from 'react';
import { appGetEventByID } from './helpers';
import { suscribeEvent } from './helpers';
import { unsuscribeEvent } from './helpers';
import Email from './email';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      eventList: [],
      suscribersList: [],
      boxSubscribe : false,
      idEvent: this.props.match.params.id,
      nameEvent: "",
    }

  }//\constructor

  setboxSuscribe(props) {
    this.setState({
        boxSubscribe: props
    })
  }

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
    const { nameEvent } = this.props.location.state;
    this.setState({
        nameEvent: nameEvent,
    })
  }

/*checkbox suscribe/unsuscrib + road to api*/
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
      if (target.checked === true){
        suscribeEvent(this.props.match.params.id);
        this.setboxSuscribe(true);
        appGetEventByID(this.props.match.params.id, this);
      }
      else {
        unsuscribeEvent(this.props.match.params.id);
        this.setboxSuscribe(false);
        appGetEventByID(this.props.match.params.id, this);
      }
  }//\end fct handleChange

  render() {

    const { eventList } = this.state;
    const { suscribersList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);
    const authorId = this.state.eventList.map(item => item.id);
    const idRoute = this.state.idEvent;

    let editButton;
    let suscribeButton;
    let shareButton;

      if (sessionStorage.getItem("user-name-storage") === authorArticle[0]) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/Edit/"+idRoute} >Edit this event</Link>
        )
      }

      if (sessionStorage.getItem("token-storage") !== null) {
        suscribeButton = (
          <div className='info'>
            <input className="form-check-input"
            type="checkbox"
            name="boxSuscribe"
            checked={this.state.boxSubscribe}
            onChange={this.handleChange} />
            <label className="form-check-label">Suscribe to this event</label>
          </div>
        )

        shareButton = (
          <div className='info'>      
            <p><strong>Share the event with your friends:</strong></p>
            <Email idEvent={this.state.idEvent} nameEvent={this.state.nameEvent}/>
          </div> 
        )
      }
      
    return (
            <div>
              {this.state.eventList.map(item =>
                <div key={item.id} className="eventsPassed">
                  <div className="passedEvents">
                    <div className='eventImg'>
                      <h1 className='eventTitle'>
                        {item.name}<i>(by {item.author})</i>
                      </h1>                  
                  </div>
                  <div className="imgDiv border">
                            {
                              (item.media_type === 'image') ? <img className="imgDisplay" alt="image event" src={item.image_url}/>:<iframe width="100%" src={`https://www.youtube.com/embed/${item.image_url}`} frameBorder="0"  allowFullScreen/>
                            }
                  </div>
                  <div className='passedEvents2'>
                    <p> {item.description} </p>
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
                      <img className='infoIcons' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' />
                      <p className='infoTxt'>{item.date_event}</p>
                      </div>
                      <div className='info'>
                      <img className='infoIcons' src='https://stickeroid.com/uploads/pic/full-pngimg/9d06df374b8bab48fc3ba0a7e1a6f4ccd2212d81.png' />
                      <p className='infoTxt'>€ {item.price}</p>
                      </div>
                    </div>
                    <div className='wholeInfos2'>
                      <div className='info'>
                        <img className='infoIcons2' src='http://pngimages.net/sites/default/files/upload-png-image-77090.png' />
                        <p className='infoTxt'>Posted on {item.created_at}</p>
                      </div>
                      <div className='info'>
                        <img className='infoIcons2' src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_update-512.png' />
                        <p className='infoTxt'>Last update: {item.updated_at}</p>
                      </div>
                      <div className='info'>
                        <p><strong>List of suscribers:</strong></p>
                        {this.state.suscribersList.map(item =>
                          <div>{item.username}</div>
                        )}
                      </div>                      
                        { suscribeButton }             
                        { shareButton }
                      <div className='info'>
                        { editButton }
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
    )
  }
}
