import React from 'react'
import './IndexContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NabvarContent from '../Navbar/NabvarContent';
import Orders from '../OrderAndClock/Orders';
import Users from '../UsersContent/Users';




export default function IndexContent() {
  

  return (
    <div className='container'>
      <div className='mainBgContent mt-3'>
        <NabvarContent messageNumber="23 " />
        <Orders />
        <Users />
      </div>
    </div>

  )
}
