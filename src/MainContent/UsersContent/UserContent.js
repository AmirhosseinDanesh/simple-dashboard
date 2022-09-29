import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserContent.css'

export default function UserContent(props) {
  let { ID, Name, Email, Number, Order, OrderDate } = props
  return (
    <tbody>
      <tr>
        <td>{ID}</td>
        <td>{Name}</td>
        <td>{Email}</td>
        <td>{Number}</td>
        <td>{Order}</td>
        <td>{OrderDate}</td>
      </tr>
    </tbody>
  )
}
