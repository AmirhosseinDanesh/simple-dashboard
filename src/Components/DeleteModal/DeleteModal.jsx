import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function DeleteModal(props) {
    // const {show, handleClose, handleShow} = props

    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleShow = () => setShow(true);

    const handleClose = () => {
        navigate(-1)
        setShow(false);
    }
    
    return (
        <>
            <Button className='btn btn-danger' onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want delete this user?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
