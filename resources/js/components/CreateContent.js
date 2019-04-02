import React, { Component } from 'react';



export default class CreateContent extends Component {
    render(){
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                      <form>
                          <div className="form-group">
                              <label for="titleCreate">Title</label>
                              <input type="text" className="form-control" id="titleCreate" placeholder="Title" />
                          </div>
                      </form>
                      <form >
                          <div>
                            <div className="btn btn-primary btn-sm ">
                              <span>Choose an image</span>
                              <input type="file" />
                            </div>
                          </div>
                      </form>
                    </div>
                          <form className='createForm'>
                              <div className="form-group">
                                  <label for="exampleInputEmail1">Description</label>
                                  <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" />
                              </div>
                              <div className="form-group">
                                  <label for="when">Date</label>
                                  <input type="date" className="form-control" id="when"  />
                                  <label for="hour">Hour</label>
                                  <input type="time" className="form-control" id="hour"  />
                                  <label for="where">Where</label>
                                  <input type="text" className="form-control" id="where"  />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
          );
      }
}
