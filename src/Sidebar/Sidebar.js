import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SBProfile from "./SBProfile/SBProfile";
import SBMenu from "./SBMenu/SBMenu";


export default function sidebar() {
  return (
    <nav className='d-flex col-md-3'>
      <div className='container ps-md-3 mt-2'>
        <div className="sticky-top">
          <SBProfile />
          <SBMenu />
        </div>
      </div>
    </nav>

  );
}

