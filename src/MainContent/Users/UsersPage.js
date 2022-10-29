import React from 'react'
import Users from '../Components/UsersContent/Users'
import Sidebar from '../Sidebar/Sidebar'
import NabvarContent from '../Components/Navbar/NabvarContent'
export default function UsersPage() {
  return (
    <>
      <Sidebar/>
      <NabvarContent/>
      <Users/>
    </>
  )
}
