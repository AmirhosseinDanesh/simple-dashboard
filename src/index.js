import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './Sidebar/Sidebar';
import IndexContent from './MainContent/IndexContent/IndexContent';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Sidebar />
      <main className='d-md-flex col-md-9'>
        <IndexContent />
      </main>
  </>



);
