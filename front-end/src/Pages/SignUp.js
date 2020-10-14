import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import axios from "../axios";

function SignUpForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const createUser = async () => {
    if (confirmPasswordInput === passwordInput) {
      let res = await axios.post(`/users/create`, {
        email: emailInput,
        password: passwordInput,
      });
      setUser(res.data);
      history.push(`/myprofile/${res.data.user_id}`);
    } else {
      alert("password don't match, please try again");
    }
  };

  return (
    <div className="form_container">
      <h1>Sign Up</h1>
      <div>
        <label> Full Name</label>
        <input type="text" id="text" placeholder="Enter Name" />
        <label> Email address</label>
        <input
          type="email"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        We'll never share your email with anyone else.
      </div>
      <div>
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createUser} type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
