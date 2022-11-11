import React from 'react'
import './SBMenu.css'
import { MdSpaceDashboard, MdOutlineHomeMax } from "react-icons/md"
import { HiLocationMarker, HiUsers, HiPencil } from "react-icons/hi"
import { CgDatabase } from "react-icons/cg"
import { FaComment, FaUsers } from "react-icons/fa"
import { AiOutlineShoppingCart, AiFillTags } from "react-icons/ai"


export default function SBMenu() {
  return (
    <div className='menu  pt-md-4 ps-md-4'>
      <div className='menu_first'>
        <div className='menu_ul d-flex align-items-center justify-content-md-between py-md-4' data-bs-toggle="collapse" data-bs-target="#collapseExample">
          <div className='d-flex justify-content-center align-items-center'>
            <MdSpaceDashboard color='white' style={{
              color: 'white',
              fontSize: "1.75rem",
              marginRight: '0.5rem',
            }} />
            <h5 className='text-white user-select-none dashText mb-0'>Dashboard</h5>
          </div>
          <svg className='menu_collapse-icon' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#64748B" />
          </svg>
        </div>

        <ul className="menu_list text-white ps-0 ps-md-2 collapse show" id="collapseExample">
          <a href="#/">
            <li className="menu_item  mb-4 mb-md-2 ">
              <div className='d-flex justify-content-center justify-content-md-between menu_item_active '>
                <a className='sidebar_text text-white text-decoration-none  ' href="/#">main</a>
                <MdOutlineHomeMax style={{
                  color: 'black',
                  fontSize: "1.25rem",

                }} />

              </div>
            </li>
          </a>
          <a href="#/">
            <li className="menu_item py-md-3 mb-4 mb-md-2 ">
              <div className='d-flex justify-content-center justify-content-md-between '>
                <a className='sidebar_text text-white text-decoration-none  ' href="/#">User Insights</a>
                <FaUsers style={{
                  color: 'white',
                  fontSize: "1.25rem",

                }} />

              </div>
            </li>
          </a>
        </ul>


      </div>
      <div className='menu_second'>
        <div className='menu_ul d-flex align-items-center justify-content-md-between py-md-4' data-bs-toggle="collapse" data-bs-target="#collapseExample2">
          <div className='d-flex justify-content-center align-items-center'>
            <CgDatabase color='white' style={{
              color: 'white',
              fontSize: "1.75rem",
              marginRight: '0.5rem',
            }} />
            <h5 className='text-white user-select-none dashText mb-0'>Resource</h5>
          </div>
          <svg className='menu_collapse-icon' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#64748B" />
          </svg>
        </div>
        <div className='menu_list'>
          <ul className="menu_list text-white ps-md-2 ps-0 collapse show" id="collapseExample2">
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3 ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text  text-white text-decoration-none  ' href="/#">Addresses</a>
                  <HiLocationMarker style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3 ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text text-white text-decoration-none  ' href="/#">Comments</a>
                  <FaComment style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3 ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text text-white text-decoration-none  ' href="/#">Posts</a>
                  <HiPencil style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3 ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text text-white text-decoration-none  ' href="/#">Purchases</a>
                  <AiOutlineShoppingCart style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3    ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text text-white text-decoration-none  ' href="/#">Tags</a>
                  <AiFillTags style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>
            <a href="#/">
              <li className="menu_item mb-4 mb-md-2 py-md-3    ">
                <div className='d-flex justify-content-center justify-content-md-between '>
                  <a className='sidebar_text text-white text-decoration-none  ' href="/#">Users</a>
                  <HiUsers style={{
                    color: 'white',
                    fontSize: "1.25rem",

                  }} />

                </div>
              </li>
            </a>

          </ul>
        </div>
      </div>
    </div>
  )
}

