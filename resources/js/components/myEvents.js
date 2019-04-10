import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class MyEvents extends Component {
    constructor(props){
        super(props);
        this.getMyEvents=this.getMyEvents.bind(this);
        this.state={
            events:[],
            isLoading:true
            }
      }
    componentDidMount(){
      this.getMyEvents();
    }

    async getMyEvents(){
      await Axios
          .get("/api/myevents" )
          .then(response =>{
            console.log(response.data),
            this.setState({
            events: response.data
            })
        })
    }
    render(){
      return(this.state.events.map(eventit =>
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
                      <img className='infoIcons' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{eventit.event_date}</p>
                  </div>
                  </div>
                  </div>
              </div>
        </div>
    )
  )
}
}
