import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Do Nuts Event</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarColor02">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Create Event</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Passed Events</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="text" placeholder="Pseudo" />
    <input class="form-control mr-sm-2" type="password" placeholder="Password" />
    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
    <button class="btn btn-secondary my-2 my-sm-0" >Register</button>
  </form>
</div>
</nav>
        );
    }
}

if (document.getElementById('appli')) {
    ReactDOM.render(<Navbar />, document.getElementById('appli'));
}
