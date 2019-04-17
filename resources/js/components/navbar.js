import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './header';

export default class NavbarContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: ''
      //isLoggedIn: false,
      //user: {}
    };
  }//\end constructor

  render() {
    let userName;
    if (sessionStorage.getItem("token-storage") !== null) {
      userName = (
        "Logged as: " + sessionStorage.getItem("user-name-storage")
      )
    }
    else if (sessionStorage.getItem("token-storage") === null) {
      userName = (
        "Please login or register"
      )
    }
    let logButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      logButton = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/logout'>Log Out</Link>
      )
    }
    else if (sessionStorage.getItem("token-storage") === null) {
      logButton = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/login'>Log In</Link>
      )
    }

    let addEventButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      addEventButton = (
        <Link className='nav-link' to='/create-event'>Add Event</Link>
      )
    }
    let myEventButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      myEventButton = (
        <Link className='nav-link' to='/my-events'>My Events</Link>
      )
    }
    let myParticipationButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      myParticipationButton = (
        <Link className='nav-link' to='/my-participations'>My Participations</Link>
      )
    }
    let addRegisterButton;
    if (sessionStorage.getItem("token-storage") === null) {
      addRegisterButton = (
        <Link className="btn btn-secondary my-2 my-sm-0" to='/create-account'>Register</Link>
      )
    }
    return (
<div>
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
                  <Link className='nav-link' to='/display-past'>Passed Event</Link>
                  </li>
                  <li className="nav-item">
                    {addEventButton}
                    </li>
                </ul>
                {userName}
                {myEventButton}
                {myParticipationButton}
                {addRegisterButton}
                {logButton}

            </div>
</nav>
</div>

    );
  }
}
