import React, { Component } from 'react';
import Axios from 'axios';


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

  render() {
   const {isLoading, events}=this.state;
   if(!isLoading)
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                        <h1 className='eventTitle'>{this.state.events[1].event_name}<i>(by {this.state.events[1].event_author} )</i></h1>
                        <img src='https://besthqwallpapers.com/Uploads/31-12-2017/35784/thumb2-modern-technology-4k-chip-cpu-neon-light.jpg' className='imgEvent' />
                    </div>
                    <div className='passedEvents2'>
                        <p> {this.state.events[1].event_description}</p>

                    </div>
                    <div className='wholeInfos'>
                    <div className='wholeInfos1'>
                    <div className='info'>
                        <img className='infoIcons' src='https://www.redfcu.org/Assets/uploads/images/Find%20a%20LocationBranch.png' /><p className='infoTxt'>{this.state.events[1].event_address}</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png' /><p className='infoTxt'>{this.state.events[1].event_date}</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons' src='https://stickeroid.com/uploads/pic/full-pngimg/9d06df374b8bab48fc3ba0a7e1a6f4ccd2212d81.png' /><p className='infoTxt'>Price: {this.state.events[1].event_price}</p>
                    </div>
                    </div>
                    <div className='wholeInfos2'>
                    <div className='info'>
                        <img className='infoIcons2' src='http://pngimages.net/sites/default/files/upload-png-image-77090.png' /><p className='infoTxt'>Posted on {this.state.events[1].created_at}</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons2' src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_update-512.png' /><p className='infoTxt'>Last update:  {this.state.events[1].updated_at}</p>
                    </div>
                    </div>
                    </div>
                </div>
          </div>
          );
          return (<p>loading...</p>);

      }
}
