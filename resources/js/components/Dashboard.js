import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class EventContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getEvents= this.getEvents.bind(this);
  //
  //   this.state = {
  //     events: []
  //   }
  // }
  //
  // componentDidMount() {
  //   this.getEvents()
  // }
  //
  // getEvents(e){
  //   Axios.get('/api/events'  )
  //     .then(response => {
  //       console.log(response)
  //
  //       this.setState({
  //       events: response.data,
  //     })
  //     console.log(this);
  //   })
  //     .catch(err => console.log(err));
  //     console.log();
  //   }

  render() {
  return(
    <div className="eventsPassed">
          <div className='passedEvents'>
              <h1>Dashboard</h1>
                      <Link to='/myEvents'><button className="btn btn-primary"> My Events</button></Link>
                </div>
            </div>

          )
      }
}
