
import React, { Component } from 'react';
import './Battery.css'
import { CircularProgressbar, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class Battery extends Component {
    state = {
        battery: null
    }

    componentDidMount() {
        window.navigator.getBattery()
            .then(res => {
                // let battery = res.level*100
                this.setState({
                    battery: res.level*100
                })
            })
    }


    render() {
        return (
            <div className='col-6 py-4 py-md-0 col-md-3'>
                <div className='bgColor d-flex justify-content-center'>
                    <span className=''>
                        <div className='batteryInfo d-flex' style={{ width: 130, height: 110, background: "#36f" }}>
                            <CircularProgressbar value={this.state.battery} text={`${this.state.battery}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(68, 189, 50, 1)`,
                                        strokeLinecap: 'round',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        transform: 'rotate(1turn)',
                                    },
                                    trail: {
                                        stroke: 'white',
                                        strokeLinecap: 'butt',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    text: {
                                        fill: 'white',
                                        fontSize: '16px',
                                    },
                                    background: {
                                        fill: 'white',
                                    },
                                }}
                            />
                            {/* <CircularProgressbar value={this.state.battery} text={`${this.state.battery}%`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `rgba(68, 189, 50, 1)`,
                                        strokeLinecap: 'round',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        transform: 'rotate(1turn)',
                                    },
                                    trail: {
                                        stroke: 'white',
                                        strokeLinecap: 'butt',
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    text: {
                                        fill: 'white',
                                        fontSize: '16px',
                                    },
                                    background: {
                                        fill: 'white',
                                    },
                                }}
                            /> */}
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Battery;



