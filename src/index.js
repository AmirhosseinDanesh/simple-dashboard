import React from 'react';
import './style.css'
import ReactDOM from 'react-dom/client';
import Sidebar from './Sidebar/Sidebar';
import IndexContent from './MainContent/IndexContent/IndexContent';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Sidebar />
      <main className='d-md-flex col-12 col-md-9'>
        <IndexContent />
      </main>
  </>



);
