import React, { Component } from 'react';
import RegisterContent from './RegisterContent';


export default class Register extends Component {
    render() {
        return (
          <div className='donutBckg'>
                <RegisterContent/>
                        <div>
                            <img src='http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Homer-Simpson-02-Donut-icon.png' className='homer' />
                        </div>
                        <div className='vrincesse'>
                         <img src='https://4.bp.blogspot.com/-7Lq-8DZByAI/VAN_LHMq4XI/AAAAAAAAAPw/V1YAVTuWm9g/s1600/princess2400.png' className='baron' />
                         </div>

            </div>
        );
    }}
