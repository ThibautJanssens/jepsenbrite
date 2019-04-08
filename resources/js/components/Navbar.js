import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Create from '../Create';
import Register from './Register';
import Passed from '../Passed';
import Login from './login';
const Navbar = () => (
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
                  <Link className='nav-link' to='/Create' >Create Event</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link' to='/Passed'>Passed Event</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link' to='/MyEvents'>My Events</Link>
                  </li>
                </ul>
              <Link className='btn btn-secondary my-2 my-sm-0' id='log'to='/Login'>Login</Link>
              <Link className='btn btn-secondary my-2 my-sm-0' id='reg' to='/Register' >Register</Link>
            </div>
        </nav>

)

export default Navbar;
