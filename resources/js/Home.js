import React, { Component } from 'react';
import Brand from './components/brand';
import DisplayAll from './components/display-all';
//import MapDisplay from "./components/map"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Brand />
                </div>
                <div>
                    <DisplayAll />
                </div>
                <div>
                    <img src='https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Homer-Simpson-02-Donut-icon.png' className='homer' />
                </div>
                <div className='vrincesse'>
                    <img src='http://4.bp.blogspot.com/-6cdKuzKOcDU/VAN-RUsAIZI/AAAAAAAAAPU/gX2zRU8TVLM/s1600/baron2400.png' className='baron' />
                </div>
            </div>

        )
    }
}