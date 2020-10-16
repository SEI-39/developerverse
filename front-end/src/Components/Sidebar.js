import React from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButton uClear uLightGrayText";
    } else {
      e.target.className = "uButton uClear uLightGrayText uHover";
    }
  }

  return (
    <div className="sidebar__container uGray">
      <div className="sideFlex">
        <div className="sideTitle">
          <h2 className="uLightGrayText">&lt;Sidebar&#47;&gt;</h2>
        </div>
        <div className="sideListFlex">
          <div className="dashGrid">
            <hr className="dashLine"></hr>
            <h2 className="uLightGrayText">List</h2>
            <hr className="dashLine"></hr>
          </div>
          <div className="sideList uLightGrayText">
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">One Fish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Two Fish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Red Fish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Blue Fish</h3>
            </div>
          </div>
          <div className="dashGrid">
            <hr className="dashLine"></hr>
            <h2 className="uLightGrayText">Buttons</h2>
            <hr className="dashLine"></hr>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButton uClear uLightGrayText"
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
            >
              &lt;Log_out&#47;&gt;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
