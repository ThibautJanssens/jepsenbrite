import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import {Redirect, Route} from 'react-router-dom';
import { appRegister } from './helpers';
=======
import {Redirect} from 'react-router';
>>>>>>> origin/louis

export default class RegisterContent extends Component {
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      password: "",
      email: "",
      redirect: false,
    };
  }
  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange(event) {
      this.setState({
        [event.target.id]: event.target.value
      })
  }

  handleSubmit() {
      let myJSON = {"name":this.state.name,"email":this.state.email,"password":this.state.password}
      event.preventDefault()
      appRegister(myJSON);
      this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <h1>Register</h1>
                          <form className='form-group'  onSubmit={this.handleSubmit} action='home' method='GET'>
                                  <label htmlFor="psd">Pseudo</label>
                                  <input type="text" className="form-control" id="name" placeholder="Enter pseudo" defaultValue={this.state.name} onChange={this.handleChange} name='name'  />
                                  <label  htmlFor="pswd">Password</label>
                                  <input type="password" className="form-control" id="password"  placeholder='Enter password' defaultValue={this.state.password} onChange={this.handleChange} name='password'/>
                                  <label  htmlFor="email">Email address</label>
                                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" defaultValue={this.state.email} onChange={this.handleChange} name='email'/>
                                <button type="submit" className="btn btn-primary" disabled={!this.validateForm()} variant="primary"> Submit</button>
                          </form>
                      </div>
                  </div>
          );
      }
}
