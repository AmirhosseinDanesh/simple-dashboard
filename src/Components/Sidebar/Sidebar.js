import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SBProfile from "./SBProfile/SBProfile";
import SBMenu from "./SBMenu/SBMenu";
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <nav className='d-md-flex col-2 col-md-3'>
      <div className='container ps-md-3 mt-2 activer'>
        <div className="sticky-top">
          <SBProfile />
          <SBMenu />
        </div>
      </div>
    </nav>

  );
}

