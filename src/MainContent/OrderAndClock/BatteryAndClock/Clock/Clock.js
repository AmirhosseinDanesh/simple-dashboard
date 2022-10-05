import React, { Component } from 'react'
import './Clock.css'
class Clock extends Component {
    
    
    state = {}
    
    
    componentDidMount() {

        const secondHand = document.querySelector('.second-hand');
        const minsHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        function setDate() {
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }

        setInterval(setDate, 1000);

        setDate();
    }

    render() {
        return (
            <div className='col-11 py-4 py-md-0 col-md-3'>
                <div className='ClockColor d-flex justify-content-center'>
                    <div class="clock">
                        <div class="outer-clock-face">
                            <div class="marking marking-one"></div>
                            <div class="marking marking-two"></div>
                            <div class="marking marking-three"></div>
                            <div class="marking marking-four"></div>
                            <div class="inner-clock-face">
                                <div class="hand hour-hand"></div>
                                <div class="hand min-hand"></div>
                                <div class="hand second-hand"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;