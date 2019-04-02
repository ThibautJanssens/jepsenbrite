import React, { Component } from 'react';



export default class RegisterContent extends Component {
    render(){
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <h1>Register</h1>
                          <form className='createForm'>
                              <div className="form-group">
                                  <label for="psd">Pseudo</label>
                                  <input type="text" className="form-control" id="psd" placeholder="Enter pseudo" />
                              </div>
                              <div className="form-group">
                                  <label for="pswd">Password</label>
                                  <input type="password" className="form-control" id="pswd"  placeholder='Enter password'/>
                                  <label for="email">Email address</label>
                                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
          );
      }
}
