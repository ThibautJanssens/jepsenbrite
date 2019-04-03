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
                        <h1 className='eventTitle'>Hello Title</h1>
                        <img src='https://besthqwallpapers.com/Uploads/31-12-2017/35784/thumb2-modern-technology-4k-chip-cpu-neon-light.jpg' className='imgEvent' />
                    </div>
                    <div className='passedEvents2'>
                        <p> {this.state.events[1].event_description}</p>

                    </div>
                    <div className='wholeInfos'>
                    <div className='info'>
                        <img className='infoIcons' src='https://static.thenounproject.com/png/1565357-200.png' /><p className='infoTxt'>BecodeCentral</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons' src='https://image.flaticon.com/icons/png/512/63/63355.png' /><p className='infoTxt'>15:30</p>
                    </div>
                    </div>
                </div>
          </div>
          );
          return (<p>loading...</p>);

      }
}
