import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SBMenu.css'

export default function SBMenu() {
  return (
    <div className='menu pt-md-4 ps-md-4'>
      <div className='menu_first'>
        <div className='menu_ul d-md-flex justify-content-between align-items-center py-md-3' data-bs-toggle="collapse" data-bs-target="#collapseExample">
          <h5 className='text-white user-select-none'>Dashboard</h5>
          <svg className='menu_collapse-icon' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#64748B" />
          </svg>
          

        </div>
        
          <ul className="menu_list text-white ps-md-2 collapse show" id="collapseExample">
            <li className="menu_item ps-md-3 py-md-3 menu_item_active">
              <a className='text-white text-decoration-none ' href="/#">main</a>
            </li>
            <li className="menu_item ps-md-3 py-md-3">
              <a className='text-white text-decoration-none' href="/#">User Insight</a>
            </li>
          </ul>
        

      </div>
      <div className='menu_second'>
        <div className='menu_ul d-md-flex justify-content-between align-items-center py-md-3' data-bs-toggle="collapse" data-bs-target="#collapseExample2">
          <h5 className='text-white user-select-none'>Resource</h5>
          <svg className='menu_collapse-icon' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#64748B" />
          </svg>
        </div>
        <div className='menu_list'>
          <ul className="menu_list text-white ps-md-2 collapse show" id="collapseExample2">
            <li className="menu_item ps-md-3 py-md-3">
              <a className='text-white text-decoration-none' href="/#">main</a>
            </li>
            <li className="menu_item ps-md-3 py-md-3">
              <a className='text-white text-decoration-none' href="/#">Addresses</a>
            </li>
            <li className="menu_item ps-md-3 py-md-3">
              <a className='text-white text-decoration-none' href="/#">Comments</a>
            </li>
            <li className="menu_item ps-md-3 py-md-3">
              <a className='text-white text-decoration-none' href="/#">Posts</a>
            </li>
            <li className="menu_item ps-3 py-3">
              <a className='text-white text-decoration-none' href="/#">Purchases</a>
            </li>
            <li className="menu_item ps-3 py-3">
              <a className='text-white text-decoration-none' href="/#">Roles</a>
            </li>
            <li className="menu_item ps-3 py-3">
              <a className='text-white text-decoration-none' href="/#">Tags</a>
            </li>
            <li className="menu_item ps-3 py-3">
              <a className='text-white text-decoration-none' href="/#">Users</a>
            </li>
          </ul>
        </div>

      </div>



    </div>
  )
}

