import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="#">Do Nuts Event</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarColor02">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Create Event</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Passed Events</a>
    </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Pseudo" />
    <input className="form-control mr-sm-2" type="password" placeholder="Password" />
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Register</button>
  </form>
</div>
</nav>
        );
    }
}
