import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export default class FooterContent extends Component {

    render() {

        return (
            <footer className='footIt w-100'>
                <div>
                    <p className='gitTitle'>Github accounts:</p>
                    <ul className='w-100 gitList'>
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
