import React from 'react'
import './Orderinfo.css'
import {Col} from "react-bootstrap"

export default function OrderInfo(props) {
    let {name , count, bgColor , icon , fontColor , sign} = props
    return (     
            <Col xs={6} md={2} className="px-2 py-4 py-md-0">
                <div className='box-shadow' style={{borderRadius:"10px"}}>
                    <div className='info d-flex justify-content-between py-3' style={{backgroundColor: bgColor}}>
                        <div className=''>
                            <p className="InfoName" style={{color: fontColor}}>{name}</p>
                            <p className="InfoCount" style={{color: fontColor}}>{count}{sign}</p>
                        </div>
                        <div className=''>
                            {icon}
                        </div>
                    </div>
                </div>
            </Col>
        

    )
}
