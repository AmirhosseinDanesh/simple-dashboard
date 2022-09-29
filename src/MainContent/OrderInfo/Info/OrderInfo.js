import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orderinfo.css'

export default function OrderInfo(props) {
    let {name , count, bgColor , icon , fontColor , sign} = props
    return (     
            <div className="col-md-2 px-2">
                <div className=''>
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
            </div>
        

    )
}
