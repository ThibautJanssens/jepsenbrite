import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
              <footer className='footIt'>
                  <div>
                      <p className='gitTitle'>Github accounts:</p>
                      <ul className='gitList'>
                          <li className='gitAccount'><a href='https://github.com/Jucara' target='blank'>Julien</a></li>
                          <li className='gitAccount'><a href='https://github.com/MichaelLambrechts' target='blank'>Michael</a></li>
                          <li className='gitAccount'><a href='https://github.com/ThibautJanssens' target='blank'>Thibaut</a></li>
                          <li className='gitAccount'><a href='https://github.com/Raigyo' target='blank'>Vincent</a></li>
                      </ul>

                  </div>
              </footer>
        );
    }
}
