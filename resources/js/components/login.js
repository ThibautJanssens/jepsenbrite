
import React, { Component } from 'react';
import { appLogin } from './helpers';
import { Route, Redirect } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      name:"",
      password: "",
      redirect: false,
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0;
  }
  handleChange(event) {
      this.setState({
        [event.target.id]: event.target.value
      })
  }

  handleSubmit() {
      let myJSON = {"email":this.state.email, "name":this.state.name, "password":this.state.password}
      event.preventDefault()
      appLogin(myJSON);
      this.setState({ redirect: true });
      alert('Welcome ' + this.state.name + '!');
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/> ;
     }
    return (
      <div className="eventsPassed">
            <div className='passedEvents'>
                <h1>Login</h1>
                      <form className='form-group'  onSubmit={this.handleSubmit}>
                              <label>Pseudo</label>
                              <input type="text" autoComplete="false" className="form-control" id="name" placeholder="Enter pseudo" defaultValue={this.state.name} onChange={this.handleChange} name='name'  />
                              <label>Password</label>
                              <input type="password" autoComplete="false" className="form-control" id="password"  placeholder='Enter password' defaultValue={this.state.password} onChange={this.handleChange} name='password'/>
                              <label>Email address</label>
                              <input type="email" autoComplete="true" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" defaultValue={this.state.email} onChange={this.handleChange} name='email'/>
                              <button type="submit" className="btn btn-primary" disabled={!this.validateForm()}> Login</button>
                      </form>
                  </div>
              </div>
    );
  }
}
