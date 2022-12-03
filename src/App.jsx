import React from 'react';
import './style.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRoutes } from 'react-router-dom';
import routes from './routes';

export default function App() {

    let router = useRoutes(routes)

    return (
        <>
            {router}
        </>
    )
}
