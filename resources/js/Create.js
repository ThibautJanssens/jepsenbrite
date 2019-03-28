import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
export default class Create extends Component {
    render() {
        return (
            <div>
            <div>
                <Navbar />
            </div>
            </div>
        );
    }}

if (document.getElementById('appli')) {
    ReactDOM.render(<Create />, document.getElementById('appli'));
}
