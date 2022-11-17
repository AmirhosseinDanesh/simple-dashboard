import React, { useEffect, useState } from 'react';
import { Row, Table } from "react-bootstrap"
import "./user.css";
import Skeleton from 'react-loading-skeleton';





function UsersData() {

    const [users, setusers] = useState([])


    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setusers(users => data)
                })
        }, 1000);
    })



    return (
        <Row className='py-0 py-md-4 ms-0 ms-md-2 px-2'>
            <div className='bgtableColor justify-content-center'>
                <div className="Navbar_input d-flex align-items-center p-2 my-3 col-12 col-md-6   ">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 19.5L12.5 14.5M14.1667 10.3333C14.1667 11.0994 14.0158 11.8579 13.7226 12.5657C13.4295 13.2734 12.9998 13.9164 12.4581 14.4581C11.9164 14.9998 11.2734 15.4295 10.5657 15.7226C9.85792 16.0158 9.09938 16.1667 8.33333 16.1667C7.56729 16.1667 6.80875 16.0158 6.10101 15.7226C5.39328 15.4295 4.75022 14.9998 4.20854 14.4581C3.66687 13.9164 3.23719 13.2734 2.94404 12.5657C2.65088 11.8579 2.5 11.0994 2.5 10.3333C2.5 8.78624 3.11458 7.30251 4.20854 6.20854C5.30251 5.11458 6.78624 4.5 8.33333 4.5C9.88043 4.5 11.3642 5.11458 12.4581 6.20854C13.5521 7.30251 14.1667 8.78624 14.1667 10.3333Z" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" className='navInput2 ms-2 ' id='inputId' placeholder='Search user' />
                </div>
                <div className='table-responsive col-12 col-md-12 d-md-block'>
                    {users.length ? (
                        <Table hover>
                            <thead className='thead'>
                                <tr className='table_head'>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">city</th>
                                    <th scope="col">zipcode</th>
                                </tr>
                            </thead>
                            <tbody className='tablebody'>
                                {users.map(user => (
                                    <tr id='trTable' key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>
                                            <a href="#/">{user.name}</a>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.address.zipcode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) :
                        <Table>
                            <thead className='thead'>
                                <tr className='table_head'>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">city</th>
                                    <th scope="col">zipcode</th>
                                </tr>
                            </thead>
                            <tbody className='tablebody'>
                                <tr id='trTable'>
                                    <th scope="row"><Skeleton height={"2.5rem"} /></th>
                                    <td>
                                        <a href="#/"><Skeleton height={"2.5rem"} /></a>
                                    </td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                </tr>
                                <tr id='trTable'>
                                    <th scope="row"><Skeleton height={"2.5rem"} /></th>
                                    <td>
                                        <a href="#/"><Skeleton height={"2.5rem"} /></a>
                                    </td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                </tr>
                                <tr id='trTable'>
                                    <th scope="row"><Skeleton height={"2.5rem"} /></th>
                                    <td>
                                        <a href="#/"><Skeleton height={"2.5rem"} /></a>
                                    </td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                </tr>
                                <tr id='trTable'>
                                    <th scope="row"><Skeleton height={"2.5rem"} /></th>
                                    <td>
                                        <a href="#/"><Skeleton height={"2.5rem"} /></a>
                                    </td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                    <td><Skeleton height={"2.5rem"} /></td>
                                </tr>

                            </tbody>
                        </Table>
                    }

                </div>
            </div>
        </Row >
    )
}


export default UsersData;




