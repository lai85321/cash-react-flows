import "./signUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const { REACT_APP_HOST, REACT_APP_API_VERSION } = process.env;
const SignUp = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitSignUp = () => {
    const body = {
      provider: "native",
      name: username,
      email: email,
      password: password,
    };
    fetch(`${REACT_APP_HOST}/api/${REACT_APP_API_VERSION}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate("/account", { replace: true });
      });
  };
  return (
    <div className="signup-page">
      <div id="signup-container">
        <div className="signup">
          <h3 className="signup-title">Sign Up</h3>
          <div className="signup">
            <input
              type="text"
              id="fullname"
              value={username}
              placeholder="Your name"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="tab"></div>
            <input
              type="text"
              id="username"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <div className="tab"></div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div className="tab"></div>
            <button
              value="signUp"
              className="signup-submit"
              onClick={() => submitSignUp()}
            >
              Sign up
            </button>
          </div>
          <Link to="/signIn">
            <h5 className="switch-to-signin"> Sign in</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
