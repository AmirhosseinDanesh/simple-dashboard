import React, { useEffect, useState } from 'react';
import './Battery.css'
import { CircularProgressbar, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Col } from "react-bootstrap"

function Battery() {

    const [battery, setBattery] = useState(null)

    useEffect(() => {
        window.navigator.getBattery()
            .then(res => {
                
                // let battery = res.level*100
                setBattery((
                    battery => Math.floor(res.level * 100)
                ))
            })
    }, [])



    return (
        <Col xs={6} md={1} className='py-4 py-md-0 mx-md-3 '>
            <div className='bgColor d-flex justify-content-center'>
                <span className=''>
                    <div className='batteryInfo d-flex' style={{ width: 110, height: 110, background: "#36f" }}>
                        <CircularProgressbar value={battery} text={`${battery}%`}
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

export default Battery;



