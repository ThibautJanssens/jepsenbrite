import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselContent extends Component {
    render() {
        return (
            <div className='brandDonut'>
                <h1 className='doing'>DO</h1>
                <img className="donutImg" src="https://66.media.tumblr.com/ecb8e25653f3eb1db0d7a3cf5b846205/tumblr_pp2oe6jLCd1sq3etqo1_1280.png" />
                <h1 className='eventsSpin'> EVENTS</h1>
            </div>
        );
    }
}
