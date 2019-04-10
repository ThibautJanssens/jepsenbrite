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
      await Axios({
        method :"get",
        url:"/api/myevents",
        headers:{
          'Content-type':'application/json',
          'Authorization': 'Bearer' + JSON.parse(sessionStorage.getItem("token-storage"))
        }})
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
                      <h1 className='eventTitle'>{eventit.event_name}</h1>
                  </div>
                  <div className='passedEvents2'>
                      <p> {eventit.event_description}</p>
                  </div>
                  <div className='wholeInfos'>
                  <div className='wholeInfos1'>
                  <div className='info'>
                      <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>{eventit.event_address}</p>
                  </div>
                  <div className='info'>
                      <img className='infoIcons' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{eventit.event_date}</p>
                  </div>
                  <div className='info'>
                      <img className='infoIcons' src='https://stickeroid.com/uploads/pic/full-pngimg/9d06df374b8bab48fc3ba0a7e1a6f4ccd2212d81.png' /><p className='infoTxt'>Price: {eventit.event_price}€</p>
                  </div>
                  </div>
                  <div className='wholeInfos2'>
                  <div className='info'>
                      <img className='infoIcons2' src='http://pngimages.net/sites/default/files/upload-png-image-77090.png' /><p className='infoTxt'>Posted on {eventit.created_at}</p>
                  </div>
                  <div className='info'>
                      <img className='infoIcons2' src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_update-512.png' /><p className='infoTxt'>Last update:  {eventit.updated_at}</p>
                  </div>
                  </div>
                  <div>
                  <Link className='btn btn-secondary my-2 my-sm-0' id='log' to={`/Edit/${eventit.id}`}>Edit</Link>
                  </div>
                  </div>
              </div>
        </div>
    )
  )
}
}
