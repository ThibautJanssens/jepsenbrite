import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
    render() {
        return (
              <footer className='footIt'>
                  <div>
                      <p>Github accounts:</p>
                      <ul className='gitList'>
                          <li className='gitAccount'><a href='https://github.com/rabujev?tab=repositories' target='blank'>Jamal</a></li>
                          <li className='gitAccount'><a href='https://github.com/PaulineRoppe?tab=repositories' target='blank'>Pauline</a></li>
                          <li className='gitAccount'><a href='https://github.com/LouisCantinieaux?tab=repositories' target='blank'>Louis</a></li>
                          <li className='gitAccount'><a href='https://github.com/LaraLcq?tab=repositories' target='blank'>Lara</a></li>
                          <li className='gitAccount'><a href='https://github.com/VadimRadermacher?tab=repositories' target='blank'>Vadim</a></li>
                      </ul>

                  </div>
              </footer>
        );
    }
}
