import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import axios from "../axios";

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

  return (
    <div className="form__container">
      <h1>LOGIN</h1>
      <div className="email">
        <input
          placeholder="Email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div className="password">
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={login} type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
