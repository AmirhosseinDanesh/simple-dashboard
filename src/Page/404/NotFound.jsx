import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from '../../Components/Sidebar/Sidebar'
import NabvarContent from '../../Components/Navbar/NabvarContent'
import "./NotFound.css"
export default function NotFound() {
    return (
        <>
            <Sidebar />
            <main className='d-md-flex col-10 col-md-9'>
                <Container>
                    <div className='mainBgContent mt-3'>
                        <NabvarContent messageNumber="23" />
                        <div className="d-flex align-items-center w-100 justify-content-center vh-100 " style={{ borderRadius: '10px' }}>
                            <h1 className="display-1 fw-bold text-white bg-primary box box-shadow" style={{
                                padding: "3rem 3rem",
                                borderRadius: "21px"
                            }}>
                                404
                            </h1>
                        </div>
                    </div>
                </Container>
            </main >
        </>
    )
}
