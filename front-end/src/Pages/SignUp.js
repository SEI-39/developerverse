import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";

function SignUpForm(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();



  const handleSubmit = async () => {
    const user = await handleSignUp();
    setUser(user);
    history.push(`/account/${user.id}`);
  } 
   const handleSignUp = async () => {
     return {
       email: emailInput,
       password: passwordInput,
       confirmPassword: confirmPasswordInput,
       id: "example",
     };
   };


  return (
    <div className="form_container">
      <h1>Sign Up</h1>
      
        <div>
          <label htmlFor="exampleInputEmail1">Full Name</label>
          <input type="text" id="text" placeholder="Enter Name" />
          <label htmlFor="exampleInputEmail1">Email address</label>
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
        <button onClick={handleSubmit} type="submit">
          Sign Up
        </button>
      </div>

    </div>
  );
}

export default SignUpForm;
