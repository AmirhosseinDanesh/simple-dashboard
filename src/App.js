import './style.css'

import Sidebar from './Components/Sidebar/Sidebar';
import IndexContent from "./Page/Index/IndexContent"
import 'react-loading-skeleton/dist/skeleton.css'
import { Routes, Route } from 'react-router-dom';
import UsersPage from './Page/Users/Users';

import React from 'react'

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<> <Sidebar /><IndexContent /> </>} />
            <Route path='/User' element={<><UsersPage /></>} />
        </Routes>
    )
}
