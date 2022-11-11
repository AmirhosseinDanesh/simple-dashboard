import React from "react";
import SBProfile from "./SBProfile/SBProfile";
import SBMenu from "./SBMenu/SBMenu";
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <nav className='d-flex col-2 col-md-3'>
      <div className='ps-md-3 mt-2 activer w-100'>
        <div className="sticky-top">
          <SBProfile />
          <SBMenu />
        </div>
      </div>
    </nav>

  );
}

