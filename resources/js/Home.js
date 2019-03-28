import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
export default class Home extends Component {
    render() {
        return (
            <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Brand/>
            </div>
            </div>
        );
    }}

if (document.getElementById('appli')) {
    ReactDOM.render(<Home />, document.getElementById('appli'));
}