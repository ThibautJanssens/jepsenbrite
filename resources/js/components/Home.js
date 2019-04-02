import React, { Component } from 'react';
import Brand from './Brand';
import EventContent from './EventContent';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Brand/>
                <EventContent/>
                        <div>
                            <img src='http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Homer-Simpson-02-Donut-icon.png' className='homer' />
                        </div>
                        <div className='vrincesse'>
                         <img src='https://4.bp.blogspot.com/-6cdKuzKOcDU/VAN-RUsAIZI/AAAAAAAAAPU/gX2zRU8TVLM/s1600/baron2400.png' className='baron' />
                         </div>
            </div>
        );
    }}
