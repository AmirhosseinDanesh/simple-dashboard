import React from 'react';
import './SBProfile.css'



function SBProfile() {
    return (
        <div className='d-flex'>
            <div className='nav_profile d-flex justify-content-between align-items-center py-3'>
                <div className='profile_img'>
                    <img src={'./pictures/nav/profile.png'} alt="#" id='profile_img_border' className='rounded-circle  p-1' />
                </div>
                <div className='profile_info'>
                    <h5 className='text-white'>Amir Danesh</h5>
                    <p className='text-white '>ID:2565987456</p>
                </div>
            </div>
            <div className='canvas_btn'>
                
            </div>





            {
                window.addEventListener("online", function () {
                    document.querySelector("#profile_img_border").style.borderColor = "green"
                })
            }

            {
                window.addEventListener("offline", function () {
                    document.querySelector("#profile_img_border").style.borderColor = "red"
                })
            }


        </div>
    );
}


export default SBProfile;