

import React from 'react'
import UserContent from './UserContent'
export default function Users() {
  return (
    <div className='row py-4 ms-2 px-2'>
      <div className='bgtableColor'>
        <table className='table'>
          <thead className='thead'>
            <tr className='table_head'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Order</th>
              <th>Order Date</th>
            </tr>
          </thead>
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
            <UserContent ID="1" Name="Amirhossein Hakimi" Email="DaneshAhd78@gmail.com" Number="09332624415" Order="MacBook" OrderDate="2022/09/29" />
        </table>
      </div>
    </div >
  )
}