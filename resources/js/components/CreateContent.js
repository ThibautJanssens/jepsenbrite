import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class CreateContent extends Component {
  constructor(props) {
      super(props);
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
      this.handleChangeDescription=this.handleChangeDescription.bind(this);
      this.handleChangeDate=this.handleChangeDate.bind(this);
      this.handleChangeTime=this.handleChangeTime.bind(this);
      this.handleChangeAddress=this.handleChangeAddress.bind(this);
      this.handleChangePrice=this.handleChangePrice.bind(this);
      this.handleChangeReminder=this.handleChangeReminder.bind(this);

      this.handleSubmit=this.handleSubmit.bind(this);
      this.state = {
         event_name:' ', event_description:' ', event_address:' ', event_date:' ', event_time:'', event_price: ' ', event_reminder_date_delay: '', events :[ ], redirect:false
       }
  }
  handleChangeTitle  (event) {
    this.setState({ title: event.target.value });
  }
  handleChangeDescription  (event) {
    this.setState({ description: event.target.value });
  }
  handleChangeDate (event) {
    this.setState({ date: event.target.value });
  }
  handleChangeTime (event) {
    this.setState({ time: event.target.value });
  }
  handleChangeAddress (event) {
    this.setState({ address: event.target.value });
  }
  handleChangeAuthor (event) {
    this.setState({ author: event.target.value });
  }
  handleChangePrice (event){
    this.setState({ price:event.target.value });
  }
  handleChangeReminder (event){
    this.setState({ reminder:event.target.value });
  }

  async handleSubmit (event) {
    event.preventDefault();
    const events = {
      event_name: this.state.title,
      event_description:this.state.description,
      event_date:this.state.date,
      event_time:this.state.time,
      event_address:this.state.address,
      event_price:this.state.price,
      event_reminder_date_delay:this.state.reminder,
    };
    this.setState({ redirect: true });
    // const user = event.target.elements.pseudo.value
    console.log(events);
    try{
      let response =Axios({
        method :"post",
        url:"/api/events",
        headers:{
          'Content-type':'application/json',
          'Authorization': 'Bearer' + JSON.parse(sessionStorage.getItem("token-storage"))
        },
        data: events,
      })
      console.log (response)
      await response
      }
      catch(e){
        console.log(e.response)
      }
  }


    render(){
      const { redirect } = this.state;

       if (redirect) {
         return <Redirect to='/'/>;
       }

      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="titleCreate">Title</label>
                              <input type="text" className="form-control" id="titleCreate" placeholder="Title" defaultValue={this.state.title} onChange={this.handleChangeTitle} name='title' required/>
                          </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Description</label>
                                  <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" defaultValue={this.state.description} onChange={this.handleChangeDescription} name='description' required/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="date">Date</label>
                                  <input type="date" className="form-control" id="date" defaultValue={this.state.date} onChange={this.handleChangeDate} name='date'  required/>
                                  <label htmlFor="time">Time</label>
                                  <input type="time" className="form-control" id="time" defaultValue={this.state.time} onChange={this.handleChangeTime} name='time'  required/>
                                  <label htmlFor="address">Address</label>
                                  <input type="text" className="form-control" id="address"  defaultValue={this.state.address} onChange={this.handleChangeAddress} name='address' required/>
                                  <label htmlFor="price">Price</label>
                                  <input type="text" className="form-control" id="price"  defaultValue={this.state.price} onChange={this.handleChangePrice} name='price' required/>
                                  <label htmlFor="Reminder Time">Reminder time</label >
                                  <select onChange={this.handleChangeReminder} id="reminder" defaultValue={this.state.reminder} name="reminder">
                                    <option value="no">No Reminder</option>
                                    <option value="3h">3 hours before</option>
                                    <option value="1d">1 day before</option>
                                    <option value="3d">3 days before</option>
                                 </select>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                          </div>
                      </div>
                  </div>
          );
      }
}
