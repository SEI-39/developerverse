import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./../Styles/Signup.css";

function SignUpForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const createUser = async () => {
    if (confirmPasswordInput === passwordInput) {
      let res = await axios
        .post(`/users/create`, {
          email: emailInput,
          password: passwordInput,
        })
        .catch((error) => {
          console.log(error);
        });
      if (res !== undefined) {
        setUser(res.data);
        history.push(`/myprofile/${res.data.user_id}`);
      } else {
        alert(`failed to create an account using the email: ${emailInput}`);
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
    <div className="form_container">
      <h2 className="uLightGrayText" style={{ paddingTop: "20px" }}>
        Sign up for a new account
      </h2>
      <hr
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          borderColor: "#f2ce18",
        }}
      ></hr>
      <h3 className="uLightGrayText">
        if (isDeveloper === true &amp;&amp; isMember === false) &#123; <br />
      </h3>
      <div className="uLineBox" style={{ marginTop: "20px" }}>
        <div className="fieldFlex" style={{ paddingTop: "20px" }}>
          <div className="signUpColumn">
            <div className="signUpFlex">
              <label>
                <h3 className="uYellowText">let Email = input("</h3>
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Your Email"
                className="uClear uLightGrayText signUpInput"
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <h3 className="uYellowText">");</h3>
            </div>
          </div>
        </div>

        <h3 className="uLightGrayText" style={{ padding: "10px" }}>
          console.log("DeveloperVerse will{" "}
          <span className="uYellowText">never</span> share your email with
          anyone else.");
        </h3>

        <div style={{ marginBottom: "20px" }}>
          <div class="signUpColumn">
            <div class="signUpFlex">
              <label htmlFor="exampleInputPassword1">
                {" "}
                <h3 className="uYellowText">let Password = input("</h3>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="uClear uLightGrayText signUpInput"
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <h3 className="uYellowText">", type="password");</h3>
            </div>
          </div>
          <div className="signUpColumn">
            <div className="signUpFlex">
              <label htmlFor="exampleInputPassword1">
                <h3 className="uYellowText">PasswordConfirm = input("</h3>
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="uClear uLightGrayText signUpInput"
                onChange={(e) => setConfirmPasswordInput(e.target.value)}
              />
              <h3 className="uYellowText">type="password");</h3>
            </div>
          </div>
        </div>
      </div>
      <h3 className="uLightGrayText" style={{ paddingTop: "20px" }}>
        const user = &#123; email: Email.hashInput(), password:
        Password.hashInput() &#125; <br />
      </h3>
      <div>
        <h2
          onMouseOver={buttonHover}
          onMouseLeave={buttonHover}
          onMouseDown={buttonClick}
          onClick={createUser}
          type="submit"
          className="uButton uGray uLightGrayText loginButton loginFlex"
        >
          Sign_Up(user);
        </h2>
      </div>
    </div>
  );
}

export default SignUpForm;
