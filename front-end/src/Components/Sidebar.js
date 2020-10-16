import React from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButtonSmall uClear uLightGrayText sideButton";
    } else {
      e.target.className =
        "uButtonSmall uClear uLightGrayText uHoverSmall sideButton";
    }
  }

  return (
    <div className="uGray sidebar__container ">
      <div className="sideFlex">
        <div className="listItem">
          <h4 className="uLightGrayText">&lt;Sidebar&#47;&gt;</h4>
        </div>
        <div className="sideListFlex">
          <div className="dashGrid">
            <hr className="uGray uGrayText"></hr>
            <h4 className="uLightGrayText">List</h4>
            <hr className="uGray uGrayText"></hr>
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
            <hr className="uGray uGrayText"></hr>
            <h4 className="uLightGrayText">Buttons</h4>
            <hr className="uGray uGrayText"></hr>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButtonSmall uClear uLightGrayText sideButton"
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
            >
              &lt;Log_out&#47;&gt;
            </h2>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButtonSmall uClear uLightGrayText sideButton"
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
            >
              &lt;Log_out&#47;&gt;
            </h2>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButtonSmall uClear uLightGrayText sideButton"
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
