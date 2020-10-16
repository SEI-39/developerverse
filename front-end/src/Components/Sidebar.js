import React from "react";
import "../Styles/Sidebar.css";

function Sidebar({ user }) {
  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButtonSmall uClear uLightGrayText sideButton";
    } else {
      e.target.className =
        "uButtonSmall uClear uLightGrayText sideButton uHoverSmall notAllowed ";
    }
  }

  return (
    <div className="uGray sidebar__container ">
      <div className="sideFlex">
        <div className="listItem">
          {user ? (
            <h4 className="uLightGrayText">&lt;{user.email}&#47;&gt;</h4>
          ) : (
            <h4 className="uLightGrayText">&lt;Sidebar&#47;&gt;</h4>
          )}
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
              <h3 className="uYellowText li">Example_OneFish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Example_TwoFish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Example_RedFish</h3>
            </div>
            <div className="listItem">
              <h2 className="li">$</h2>
              <h3 className="uYellowText li">Example_BlueFish</h3>
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
              &lt;Example_1&#47;&gt;
            </h2>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButtonSmall uClear uLightGrayText sideButton"
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
            >
              &lt;Example_2&#47;&gt;
            </h2>
          </div>
          <div className="listItem buttonItem">
            <h2
              className="uButtonSmall uClear uLightGrayText sideButton"
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
            >
              &lt;Example_3&#47;&gt;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
