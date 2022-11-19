import React from 'react'
import UserInfo from '../../Components/UsersData/UserInfo/UserInfo'
import Sidebar from '../../Components/Sidebar/Sidebar'
import NabvarContent from '../../Components/Navbar/NabvarContent'
import { Container, Row, Col } from 'react-bootstrap'
export default function User() {
    return (
        <>

            <Sidebar />
            <main className='d-md-flex col-10 col-md-9'>
                <Container>
                    <div className='mainBgContent mt-3'>
                        <NabvarContent messageNumber="23" />
                        <Row className='justify-content-start py-0 py-md-4 mx-0 mx-md-2'>
                            <Col>
                                <UserInfo />
                            </Col>
                        </Row>

                    </div>
                </Container>
            </main>

        </>

    )
}
