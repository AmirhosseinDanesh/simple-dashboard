import React, { useState, useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import profile from "../../../pictures/nav/profile.png"
import { ResponsiveContainer, LineChart, Line, XAxis } from "recharts"
import DeleteModal from '../../DeleteModal/DeleteModal';
import useFetch from '../../../hooks/useFetch';
export default function UserInfo(props) {
    // DeleteBtn
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => {
        navigate(-1)
        setShow(false);
    }
    const handleShow = () => setShow(true);

    // Users
    const data = [
        { id: 1, name: "Oct", count: 2.5, y: 10 },
        { id: 1, name: "Nov", count: 1, y: 10 },
        { id: 2, name: "Dec", count: 2, y: 10 },
    ]

    let params = useParams()

    const [users] = useFetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)


    return (
        <>

            <Col md={6} sm={12} className="mb-2">
                <div className="box box-shadow">
                    <h5 className='border-bottom pb-4 border-dark'>In Site Time</h5>
                    <div className="chartByu mt-5">
                        <ResponsiveContainer width='100%' aspect={4}>
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                                <XAxis dataKey="name" />

                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Col>

            <Col md={6} sm={12}>
                <div className="box box-shadow">
                    <h5 className='border-bottom pb-4 border-dark'>User Info</h5>
                    <div className="UserinfoData m-3">
                        <div className='d-flex align-items-center '>
                            <Image src={profile} alt="#" style={{ width: "65px" }} className='rounded-circle p-1' thumbnail />
                            <p className='mb-0 ms-4'>{users.name}</p>
                        </div>
                        <div className="m-2">
                            <p>{users.email}</p>
                            <p><a href={`tel:${users.phone}`}>{users.phone}</a></p>
                            <p className='Bold'>
                                <span>201{Math.floor(Math.random() * 12)}</span>/
                                <span>{Math.floor(Math.random() * 12)}</span>/
                                <span>{Math.floor(Math.random() * 12)}</span>
                                <span className="Lastbuy ms-2">
                                    Last buy
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Col>

            <Col>
                <DeleteModal show={show} handleClose={handleClose} handleShow={handleShow} />
            </Col>


        </>
    );
}

