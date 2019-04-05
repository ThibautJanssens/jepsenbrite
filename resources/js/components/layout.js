import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './routes';
import Footer from './Footer';


ReactDOM.render(

    <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
    </BrowserRouter>

,document.getElementById('appli'));
