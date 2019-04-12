import React, { Component } from 'react';
import Brand from './components/brand';
import DisplayAll from './components/display-all';

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
                    <img src='https://4.bp.blogspot.com/-7Lq-8DZByAI/VAN_LHMq4XI/AAAAAAAAAPw/V1YAVTuWm9g/s1600/princess2400.png' className='baron' />
                </div>
            </div>

        )
    }
}
