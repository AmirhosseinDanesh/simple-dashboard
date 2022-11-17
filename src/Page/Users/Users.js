import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import NabvarContent from "../../Components/Navbar/NabvarContent"
import { Container } from 'react-bootstrap';
import UsersData from "../../Components/UsersData/UsersData"
export default function UsersPage() {
  return (
    <>
      <Sidebar />
      <main className='d-md-flex col-10 col-md-9'>
        <Container>
          <div className='mainBgContent mt-3'>
            <NabvarContent messageNumber="23" />
            <UsersData/>
          </div>
        </Container>
      </main >
    </>

  )
}
