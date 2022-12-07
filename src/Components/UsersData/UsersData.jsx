import React from 'react';
import { Row } from "react-bootstrap"
import "./user.css";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import useFetch from '../../hooks/useFetch';




function UsersData() {
    const [pageSize, setPageSize] = React.useState(2);
    const columns = [
        { field: 'id', headerName: "ID", width: 90 },
        { field: 'name', headerName: "Name", width: 150 },
        { field: 'username', headerName: "Username", width: 120 },
        { field: 'phone', headerName: "Phone", width: 200 },
        { field: 'website', headerName: "Website", width: 180 },
        { field: 'email', headerName: "Email", width: 150 },
        {
            field: 'Action', headerName: "Action", width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>

                            <Button variant="contained" size="small" color="success" style={{ borderRadius: '15px', padding: "0.6rem", }}>
                                <EditIcon style={{ fontSize: "1rem", }} />
                            </Button>
                        </Link>
                    </>
                )
            }
        },
    ]

    


    const [users] = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <Row className='py-0 py-md-4 ms-0 ms-md-2 px-2'>
            <div className='bgtableColor box-shadow box justify-content-center'>
                <div style={{ height: 400, width: '100%' }}>
                    {users.length ? (
                        <DataGrid
                            rows={users}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[2, 5, 10]}
                            pagination
                        />
                    ) : (
                        <DataGrid
                            rows={[]}
                            columns={columns}
                            components={{
                                LoadingOverlay: LinearProgress,
                            }}
                            loading
                        />
                    )}




                </div>
            </div>
        </Row >
    )
}


export default UsersData;




