import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class EventContent extends Component {
  constructor(props) {
    super(props);
    this.getEvents= this.getEvents.bind(this);

    this.state = {
      isLoading: true,
      events: []
    }
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents(e){
    Axios.get('/api/events')
      .then(response => {
        console.log(response)

        this.setState({
        events: response.data,
        isLoading: false
      })
      console.log(this);
    })
      .catch(err => console.log(err));
      console.log();
    }
    // rajout de Jam pour s'inscrire et se désinscrire d'un évenement
    async participate(){
  // let date_reminder = new Date(this.state.begin_time.substring(0,19))
  // const dateReminder = (begin) => {
  //   let beginDateTime = this.parseDBDateTime(begin);
  //   let reminder_date = new Date(beginDateTime - (1000*60*60*24));
  //   return reminder_date.toISOString();
  // }
  // const obj = {
  //   reminder_date : dateReminder(this.state.begin_time)
  // }
  let axiosConfig = {
    method:'post',
    url : '/api/events/register/{event}/{user}'+this.props.match.params.id+,

    headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token },
    data:
  };
  let request = Axios(axiosConfig);
  let response = await request;
  // let res = await Axios({
  //   method:'get',
  //   url : '/api/events/'+this.props.match.params.id,
  //   headers: {'Content-Type': 'application/json' }
  // })
  this.setState({
    participation:true,
    participants: res.data.participants
  })
}
async unparticipate(){
  let axiosConfig = {
    method:'delete',
    url : '/api/events/'+this.props.match.params.id+'/register',

    headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token },
  };
  let request = Axios(axiosConfig);
  let response = await request;
  let res = await Axios({
    method:'get',
    url : '/api/events/'+this.props.match.params.id,
    headers: {'Content-Type': 'application/json' }
  })
  this.setState({
    participation:false,
    participants: res.data.participants
  })
}


  render() {
   const {isLoading, events}=this.state;

   if(!isLoading)
      return( this.state.events.map(eventit =>
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                        <Link to={`/Event/${eventit.id}`}><h1 className='eventTitle'>{eventit.event_name}</h1></Link><i>(by {eventit.event_author} )</i>
                    </div>
                    <div className='wholeInfos'>
                    <div className='wholeInfos1'>
                    <div className='info'>
                        <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>{eventit.event_address}</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons' src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{eventit.event_date}</p>
                    </div>
                    </div>
                    </div>
                </div>
          </div>
        )
        );
          return (<p>loading...</p>);

      }
}
