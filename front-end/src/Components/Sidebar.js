import React from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__container uGray">
      <div className="sideFlex">
        <div className="sideTitle">
          <h2 className="uLightGrayText">&lt;Sidebar&#47;&gt;</h2>
        </div>
        <div className="sideList">
          <div className="dashGrid">
            <hr className="dashLine"></hr>
            <h2 className="uLightGrayText">List</h2>
            <hr className="dashLine"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
