import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

export default function UserInfo(props) {

    const [user, setuser] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setuser(user => data)
            })
    }, [])

    

    return (
        <>
            <Button className='me-2' size='sm' variant="outline-primary" onClick={handleShow}>
                Edit {user.name}
            </Button>
            <Button className='me-2' size='sm' variant="outline-danger" onClick={handleShow}>
                Delete {user.name}
            </Button>


            {user ? (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editing <p style={{ color: 'red', }}>{user.name}</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Editing Email address : {user.email} </Form.Label>
                                <Form.Control type="email" placeholder={user.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Editing Phone : {user.phone} </Form.Label>
                                <Form.Control type="email" placeholder={user.phone} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Editing Website : {user.website} </Form.Label>
                                <Form.Control type="email" placeholder={user.website} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Editing Street : {user.address.street} </Form.Label>
                                <Form.Control type="email" placeholder={user.address.street} />
                            </Form.Group> */}
                        </Form>




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

