import React, { Component } from 'react';
import Axios from 'axios';



export default class CreateContent extends Component {
  constructor(props) {
      super(props);
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
      this.handleChangeDescription=this.handleChangeDescription.bind(this);
      this.handleChangeDate=this.handleChangeDate.bind(this);
      this.handleChangeAddress=this.handleChangeAddress.bind(this);
      this.handleChangePrice=this.handleChangePrice.bind(this);
  //    this.handleChangeHour=this.handleChangeHour.bind(this);
  this.handleChangeAuthor=this.handleChangeAuthor.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.state = {
         event_name:' ', event_description:' ', event_address:' ', event_date:' ', event_price: ' ',  event_author:' ',/*created_at: ' ', updated_at:' ', */events :[ ]
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
  handleChangeAddress (event) {
    this.setState({ address: event.target.value });
  }
  handleChangeAuthor (event) {
    this.setState({ author: event.target.value });
  }
  handleChangePrice (event){
    this.setState({ price:event.target.value });
  }
  async handleSubmit (event) {
    event.preventDefault();
    const events = {
      event_name: this.state.title,
      event_description:this.state.description,
      event_date:this.state.date,
      event_author:this.state.author,
      // hour:this.state.hour,
      event_address:this.state.address,
      event_price:this.state.price
    };
    // const user = event.target.elements.pseudo.value
    console.log(events);
    try{
      let response =Axios({
        method :"post",
        url:"/api/events",
        date: events
      })
      console.log (response)
      await response
        // .post(`/api/events`, events)
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
      }
      catch(e){
        console.log(e.response)
      }
  }


    render(){
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="titleCreate">Title</label>
                              <input type="text" className="form-control" id="titleCreate" placeholder="Title" defaultValue={this.state.title} onChange={this.handleChangeTitle} name='title'/>
                          </div>
                          <div className='form-group'>
                          <label htmlFor="btn">Image</label>
                            <div className="btn btn-primary btn-sm ">
                              <span >Choose an image</span>
                              <input type='file'/>
                            </div>
                          </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Description</label>
                                  <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" defaultValue={this.state.description} onChange={this.handleChangeDescription} name='description'/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="date">Date</label>
                                  <input type="date" className="form-control" id="date" defaultValue={this.state.date} onChange={this.handleChangeDate} name='date'  />
                                  <label htmlFor="address">Address</label>
                                  <input type="text" className="form-control" id="address"  defaultValue={this.state.address} onChange={this.handleChangeAddress} name='address'/>
                                  <label htmlFor="price">Price</label>
                                  <input type="text" className="form-control" id="price"  defaultValue={this.state.price} onChange={this.handleChangePrice} name='price'/>
                                  <label htmlFor="author">Author</label>
                                  <input type="text" className="form-control" id="author" defaultValue={this.state.author} onChange={this.handleChangeAuthor} name='date'  />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                          </div>
                      </div>
                  </div>
          );
      }
}
