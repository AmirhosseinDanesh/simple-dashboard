import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NabvarContent.css'
import { useEffect } from "react";



export default function NabvarContent(props) {
    let { messageNumber } = props

    useEffect(() => {
        let navInput = document.querySelector(".navInput")
        window.addEventListener("keydown", function (e) {
            if (e.keyCode === 191) {
                navInput.focus()

                navInput.value = ""
            }
        })



        let message = document.querySelector(".translatbadage")
        let hidden = document.querySelector(".visually-hidden")
        message.addEventListener("click", function () {
            hidden.classList.toggle("visually-hidden")
        })




        let navBtn = document.querySelector("#menuToggle")
        let nav = document.querySelector("nav")
        let main = document.querySelector("main")
        let activer = document.querySelector(".activer")

        navBtn.addEventListener("click", function () {
            if (nav.classList.contains("col-md-3")) {
                nav.classList.remove("col-md-3")
                nav.classList.add("col-md-1")
                main.classList.remove("col-md-9")
                main.classList.add("col-md-11")
                activer.classList.add("active")


            } else {
                nav.classList.add("col-md-3")
                nav.classList.remove("col-md-1")
                main.classList.add("col-md-9")
                main.classList.remove("col-md-11")
                activer.classList.remove("active")

            }
        })
    }, []);



    return (
        <div className='row justify-content-center justify-content-md-between pt-3'>
            <div className="col-12 col-md-1">
                <div className=' m-2 p-2 pe-5'>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className="Navbar_input d-flex align-items-center  m-2 p-2 pe-5 ">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 19.5L12.5 14.5M14.1667 10.3333C14.1667 11.0994 14.0158 11.8579 13.7226 12.5657C13.4295 13.2734 12.9998 13.9164 12.4581 14.4581C11.9164 14.9998 11.2734 15.4295 10.5657 15.7226C9.85792 16.0158 9.09938 16.1667 8.33333 16.1667C7.56729 16.1667 6.80875 16.0158 6.10101 15.7226C5.39328 15.4295 4.75022 14.9998 4.20854 14.4581C3.66687 13.9164 3.23719 13.2734 2.94404 12.5657C2.65088 11.8579 2.5 11.0994 2.5 10.3333C2.5 8.78624 3.11458 7.30251 4.20854 6.20854C5.30251 5.11458 6.78624 4.5 8.33333 4.5C9.88043 4.5 11.3642 5.11458 12.4581 6.20854C13.5521 7.30251 14.1667 8.78624 14.1667 10.3333Z" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" className='navInput ms-2 ' placeholder='Press / to search' />
                </div>
            </div>
            <div className="col-6 mt-3 mt-md-0 col-md-1 d-flex justify-content-center">
                <div className="alert">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15H17L15.595 13.595C15.4063 13.4063 15.2567 13.1822 15.1546 12.9357C15.0525 12.6891 15 12.4249 15 12.158V9C15.0002 7.75894 14.6156 6.54834 13.8992 5.53489C13.1829 4.52144 12.17 3.75496 11 3.341V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V3.341C4.67 4.165 3 6.388 3 9V12.159C3 12.697 2.786 13.214 2.405 13.595L1 15H6M12 15V16C12 16.7956 11.6839 17.5587 11.1213 18.1213C10.5587 18.6839 9.79565 19 9 19C8.20435 19 7.44129 18.6839 6.87868 18.1213C6.31607 17.5587 6 16.7956 6 16V15M12 15H6" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span id="translatbadage" className="position-absolute top-0 start-100 translatbadage badge rounded-pill bg-danger">
                        {messageNumber}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>
            <div className="col-6 mt-3 mt-md-0 col-md-1 d-flex justify-content-center">
                <div className='Navbar_logout_icon' >
                    <button className='btn' type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log out">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.8966 3.025C17.6431 2.80105 18.4316 2.75473 19.1992 2.88971C19.9669 3.0247 20.6923 3.33727 21.3176 3.80246C21.9429 4.26765 22.4509 4.87259 22.8008 5.56898C23.1508 6.26538 23.3331 7.03394 23.3333 7.81333V32.1867C23.3331 32.966 23.1508 33.7346 22.8008 34.431C22.4509 35.1274 21.9429 35.7323 21.3176 36.1975C20.6923 36.6627 19.9669 36.9753 19.1992 37.1103C18.4316 37.2453 17.6431 37.1989 16.8966 36.975L6.89659 33.975C5.86675 33.6661 4.96393 33.0334 4.32205 32.1709C3.68018 31.3083 3.33343 30.2618 3.33325 29.1867V10.8133C3.33343 9.73816 3.68018 8.69168 4.32205 7.82914C4.96393 6.96659 5.86675 6.33393 6.89659 6.025L16.8966 3.025V3.025ZM24.9999 6.66666C24.9999 6.22463 25.1755 5.80071 25.4881 5.48815C25.8006 5.17559 26.2246 5 26.6666 5H31.6666C32.9927 5 34.2644 5.52678 35.2021 6.46446C36.1398 7.40214 36.6666 8.67391 36.6666 9.99999V11.6667C36.6666 12.1087 36.491 12.5326 36.1784 12.8452C35.8659 13.1577 35.4419 13.3333 34.9999 13.3333C34.5579 13.3333 34.134 13.1577 33.8214 12.8452C33.5088 12.5326 33.3333 12.1087 33.3333 11.6667V9.99999C33.3333 9.55797 33.1577 9.13404 32.8451 8.82148C32.5325 8.50892 32.1086 8.33333 31.6666 8.33333H26.6666C26.2246 8.33333 25.8006 8.15773 25.4881 7.84517C25.1755 7.53261 24.9999 7.10869 24.9999 6.66666ZM34.9999 26.6667C35.4419 26.6667 35.8659 26.8423 36.1784 27.1548C36.491 27.4674 36.6666 27.8913 36.6666 28.3333V30C36.6666 31.3261 36.1398 32.5978 35.2021 33.5355C34.2644 34.4732 32.9927 35 31.6666 35H26.6666C26.2246 35 25.8006 34.8244 25.4881 34.5118C25.1755 34.1993 24.9999 33.7754 24.9999 33.3333C24.9999 32.8913 25.1755 32.4674 25.4881 32.1548C25.8006 31.8423 26.2246 31.6667 26.6666 31.6667H31.6666C32.1086 31.6667 32.5325 31.4911 32.8451 31.1785C33.1577 30.8659 33.3333 30.442 33.3333 30V28.3333C33.3333 27.8913 33.5088 27.4674 33.8214 27.1548C34.134 26.8423 34.5579 26.6667 34.9999 26.6667ZM14.9999 18.3333C14.5579 18.3333 14.134 18.5089 13.8214 18.8215C13.5088 19.134 13.3333 19.558 13.3333 20C13.3333 20.442 13.5088 20.8659 13.8214 21.1785C14.134 21.4911 14.5579 21.6667 14.9999 21.6667H15.0016C15.4436 21.6667 15.8675 21.4911 16.1801 21.1785C16.4927 20.8659 16.6683 20.442 16.6683 20C16.6683 19.558 16.4927 19.134 16.1801 18.8215C15.8675 18.5089 15.4436 18.3333 15.0016 18.3333H14.9999Z" fill="#292D32" />
                            <path d="M34.9998 20L31.6665 23.3334M26.6665 20H34.9998H26.6665ZM34.9998 20L31.6665 16.6667L34.9998 20Z" stroke="#3366FF" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center'>
                <div className="flipCalendar">
                    
                </div>
            </div>
        </div>

    )
}


