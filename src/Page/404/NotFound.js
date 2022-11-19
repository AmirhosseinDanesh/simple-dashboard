import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from '../../Components/Sidebar/Sidebar'
import NabvarContent from '../../Components/Navbar/NabvarContent'

export default function NotFound() {
    return (
        <>
            <Sidebar />
            <main className='d-md-flex col-10 col-md-9'>
                <Container>
                    <div className='mainBgContent mt-3'>
                        <NabvarContent messageNumber="23" />
                        <div className="d-flex align-items-center w-100 justify-content-center vh-100 bg-primary" style={{borderRadius:'10px'}}>
                        <h1 className="display-1 fw-bold text-white">404</h1>
                    </div>
                </div>
            </Container>
        </main >
        </>
    )
}
