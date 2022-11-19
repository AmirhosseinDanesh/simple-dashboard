import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

export default function UserInfo(props) {
    const [user, setuser] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


    let params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setuser(user => data)
            })
    })


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal {params.userID}
            </Button>

            {user ? (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editing <p style={{ color: 'red', }}>{user.name}</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Email : {user.email}</p>
                        <p>Address : {user.address.city} , {user.address.street} , {user.address.suite} , {user.address.zipcode}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Website : {user.website}</p>
                        <p>Company Name : {user.company.name}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            ) : (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editing{<Skeleton />}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Email : {<Skeleton height={'1.5rem'} width={"5rem"} />}</p>
                        <p>Address : {<Skeleton height={'1.5rem'} width={"5rem"} />}</p>
                        <p>Phone : {<Skeleton height={'1.5rem'} width={"5rem"} />}</p>
                        <p>Website : {<Skeleton height={'1.5rem'} width={"5rem"} />}</p>
                        <p>Company Name : {<Skeleton height={'1.5rem'} width={"5rem"} />}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

