import React from 'react';
import './style.css'
import ReactDOM from 'react-dom/client';
import Sidebar from './Components/Sidebar/Sidebar';
import IndexContent from "./MainContent/index/IndexContent"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Sidebar />
      <IndexContent />

  </>



);
