import React, { Component } from 'react';
import { appGetEventByID } from './helpers';
import { suscribeEvent } from './helpers';
import { unsuscribeEvent } from './helpers';
import Email from './email';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import posed from 'react-pose';

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
      if (sessionStorage.getItem("user-name-storage") === authorArticle[0]) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/Edit/"+idRoute} >Edit this event</Link>
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
    return (
      <div className="m-2 m-sm-5 p-2 p-xl-5">
          <div>
            {this.state.eventList.map(item =>
              <div key={item.id} className="w-100  ">
                  <h1 className="text-center border-bottom">{item.name}</h1>
                  <h4 className="boxDate text-center shadow">{item.date_event}</h4>
                  <Img className="imgDiv border">
                      <Img className="imgDiv border">
                          {
                            (item.media_type === 'image') ? <img className="imgDisplay" alt="image event" src={item.image_url}/>:<iframe width="100%" src={`https://www.youtube.com/embed/${item.image_url}`} frameBorder="0"  allowFullScreen/>
                          }
                      </Img>
                  </Img>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    Description: {item.description}
                  </div>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    Added By: {item.author}
                  </div>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    List of suscribers:
                    {this.state.suscribersList.map(item =>
                      <div>{item.username}</div>
                    )}
                  </div>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    Suscribe: { suscribeButton }
                  </div>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    Share the event with your friends: <Email idEvent={this.state.idEvent} nameEvent={this.state.nameEvent}/>
                  </div>
                  <div>
                    { editButton }
                  </div>
              </div>
            )}
          </div>
        </div>
    )
  }
}
