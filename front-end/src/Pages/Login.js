import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./../Styles/Login.css";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const login = async () => {
    let res = await axios
      .post(`/users/login`, {
        email: emailInput,
        password: passwordInput,
      })
      .catch((error) => {
        console.log(error);
      });

    if (res !== undefined) {
      if (res.data.email === emailInput) {
        setUser(res.data);
        history.push(`/myprofile/${res.data.user_id}`);
      }
    } else {
      alert("password and/or username not found, please try again");
    }
  };

  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButton uGray uWhiteText loginButton loginFlex";
    } else {
      e.target.className = "uButton uGray uHover loginButton loginFlex";
    }
  }

  function buttonClick(e) {
    e.target.className = "uButton uGray uClick loginButton loginFlex";
  }

  return (
    <div className="form__container">
      <h3 className="uLightGrayText" style={{ paddingBottom: "20px" }}>
        if (isDeveloper === true &amp;&amp; isLoggedIn === false) <br />
      </h3>
      <div className="uBox leftFlex">
        <div className="loginFlex">
          <h3 className="uYellowText">let Email = input("</h3>
          <input
            className="uClear uLightGrayText loginInput"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <h3 className="uYellowText">"),</h3>
        </div>
        <div className="loginFlex">
          <h3 className="uYellowText">Password = input("</h3>
          <input
            className="uClear uLightGrayText loginInput"
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <h3 className="uYellowText">");</h3>
        </div>
      </div>
      <h3 className="uLightGrayText" style={{ paddingTop: "20px" }}>
        const user = &#123; email: Email.hashInput(), password:
        Password.hashInput() &#125; <br />
      </h3>
      <div>
        <button
          className="uButton uGray uLightGrayText loginButton loginFlex"
          onMouseOver={buttonHover}
          onMouseLeave={buttonHover}
          onClick={login}
          onMouseDown={buttonClick}
          type="submit"
        >
          Login(user);
        </button>
      </div>
    </div>
  );
}

export default Login;
