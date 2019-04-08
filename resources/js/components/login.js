
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
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
            <input
              autoComplete="true"
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          <label>Pseudo</label>
            <input
              autoComplete="false"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
            />
            <label>Password</label>
            <input
              autoComplete="false"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          <button
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
