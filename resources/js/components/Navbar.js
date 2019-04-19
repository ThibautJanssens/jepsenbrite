import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Routes from './routes';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: ''
      // isLoggedIn: false,
      // user: {}
    };
  }//\end constructor


  render() {
    let logButton;
    let logButton2;
    if (sessionStorage.getItem("token-storage") !== null) {
      logButton2 = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/Logout'>Log Out</Link>
      )
    }
    else if (sessionStorage.getItem("token-storage") === null) {
      logButton = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/Login'>Log In</Link>
      )
    }
    let userName;
    if (sessionStorage.getItem("token-storage") !== null) {
      userName = (
        "Logged as: " + sessionStorage.getItem("user-storage")
      )
    }
    else if (sessionStorage.getItem("token-storage") === null) {
      userName = (
        "Please login"
      )
    }
    let createEventButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      createEventButton = (
        <Link className="nav-link" to='/Create'>Create Event</Link>
      )
    }
    let dashboardButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      dashboardButton = (
        <Link className="nav-link" to='/Dashboard'>Dashboard</Link>
      )
    }
    let registerButton;
    if (sessionStorage.getItem("token-storage") === null) {
      registerButton = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/Register'>Register</Link>
      )
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' className="navbar-brand">Do Nuts Event</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className="nav-item">
              {createEventButton}
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/Passed'>Passed Event</Link>
            </li>
            <li className="nav-item">
              {dashboardButton}
            </li>
          </ul>
          {userName}
          {registerButton}
          {logButton}
          {logButton2}
        </div>
      </nav>

    )
  }
}
