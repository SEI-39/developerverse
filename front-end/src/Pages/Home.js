import React from "react";
import "../Styles/Home.css";
import { Link, useHistory } from "react-router-dom";

function Home() {
  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButtonSmall uGray uLightGrayText";
    } else {
      e.target.className = "uButtonSmall uGray uLightGrayText uHoverSmall";
    }
  }

  return (
    <div>
      <div className="uLineBox uGray homeWelcome">
        <h2 className="uLightGrayText">Welcome to the Developer 'Verse!</h2>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            borderColor: "#f2ce18",
          }}
        ></hr>
        <p className="uGrayText">
          DeveloperVerse is a social networking website where users can share
          projects, photographs, and post links to their personal github pages.
          DeveloperVerse is also an online social gathering point, with a
          multitude of regular events ranging from casual meetups, to technical
          expos, occurring every week. We leverage the centralizing power of the
          internet to bring people closer together, to foster career building,
          personal growth, civic-mindedness, healthy debate, and friendships
          that can reach beyond the digital world.
        </p>
      </div>

      <hr className="uLineBox"></hr>

      <div className="homeGrid">
        <div className="rowFlexLeft">
          <div className="uLineBox imageBox pic1"></div>

          <div className="textFlexLeft">
            <div className="textchild uGray uBox uWhiteText">
              <p style={{ transform: "translate(30px,0px)", width: "90%" }}>
                Create an account, and start posting your personal projects!
              </p>
            </div>
            <div className="spacer">
              <div className="buttonBox">
                <Link to="/signup" className="button">
                  <h2
                    className="uButtonSmall uGray uLightGrayText"
                    onMouseOver={buttonHover}
                    onMouseLeave={buttonHover}
                  >
                    &lt;Sign_up&#47;&gt;
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rowFlexRight">
          <div className="uLineBox imageBox pic2"></div>

          <div className="textFlexRight">
            <div className="textchild uGray uBox uWhiteText">
              <p style={{ transform: "translate(30px,0px)", width: "90%" }}>
                Meet and connect with other developers and share your portfolios
              </p>
            </div>
            <div className="spacer">
              <div className="buttonBox">
                <Link to="/signup" className="button">
                  <h2
                    className="uButtonSmall uGray uLightGrayText"
                    onMouseOver={buttonHover}
                    onMouseLeave={buttonHover}
                  >
                    &lt;Explore&#47;&gt;
                  </h2>
                </Link>
                <Link
                  to="/signup"
                  className="button"
                  style={{ paddingTop: "10px" }}
                >
                  <h2
                    className="uButtonSmall uGray uLightGrayText"
                    onMouseOver={buttonHover}
                    onMouseLeave={buttonHover}
                  >
                    &lt;Discover&#47;&gt;
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rowFlexLeft">
          <div className="uLineBox imageBox pic3"></div>

          <div className="textFlexLeft">
            <div className="textchild uGray uBox uWhiteText">
              <p style={{ transform: "translate(30px,0px)", width: "90%" }}>
                Land your dream job with our online meet-and-greet events, held
                weekly, monthly, and yearly. Talk to recruiters, industry
                professionals, and friends in a relaxed setting.
              </p>
            </div>
            <div className="spacer">
              <div className="buttonBox">
                <Link to="/signup" className="button">
                  <h2
                    className="uButtonSmall uGray uLightGrayText"
                    onMouseOver={buttonHover}
                    onMouseLeave={buttonHover}
                  >
                    &lt;Get_hired&#47;&gt;
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
