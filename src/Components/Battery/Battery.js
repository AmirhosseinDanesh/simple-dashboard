import React, { Component } from 'react';
import './Battery.css'
import { CircularProgressbar, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Col} from "react-bootstrap"

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
            <Col xs={6} md={1} className='py-4 py-md-0 mx-md-3 '>
                <div className='bgColor d-flex justify-content-center'>
                    <span className=''>
                        <div className='batteryInfo d-flex' style={{ width: 110, height: 110, background: "#36f" }}>
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
                        </div>
                    </span>
                </div>
            </Col>
        );
    }
}

export default Battery;



