import React, { useEffect } from 'react';
import './SBProfile.css';
import Image from "react-bootstrap/Image";


function SBProfile() {
    useEffect(() => {

        window.addEventListener("online", function () {
            document.querySelector("#profile_img_border").style.borderColor = "green"
        })

        window.addEventListener("offline", function () {
            document.querySelector("#profile_img_border").style.borderColor = "red"
        })

    }, [])
    return (
        <div className='d-flex justify-content-center justify-content-md-start'>
            <div className='nav_profile d-flex justify-content-between align-items-center py-3'>
                <div className='profile_img'>
                    <Image src='./pictures/nav/profile.png' alt="#" id='profile_img_border' className='rounded-circle  p-1' thumbnail />
                </div>
                <div className='profile_info'>
                    <h5 className='text-white'>Amir Danesh</h5>
                    <p className='text-white '>ID:2565987456</p>
                </div>
            </div>







        </div>
    );
}


export default SBProfile;