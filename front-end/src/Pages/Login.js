import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async () => {
    //we still need to check if the user passwords matches the db, then continue with login
    const user = await handleLogin();
    setUser(user);
    history.push(`/profile/${user.id}`);
  };

  const handleLogin = async () => {
    return {
      email: emailInput,
      password: passwordInput,
      id: "example",
    };
  };

  return (
    <div className="form__container">
      <div className="email">
        <input
          placeholder="Email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div className="password">
        <input
          placeholder="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
