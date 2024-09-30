import "./Login.css";
// @ts-ignore
import assets from "../../assets/assets";
import { useState } from "react";

const Login = () => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login">
      <img className="login-logo" src={assets.logo_big} alt="logo" />
      <form action="" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" && (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
          />
        )}
        <input
          type="email"
          placeholder="email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
        />
        {currState === "Sign up" ? (
          <button type="submit">Sign Up</button>
        ) : (
          <button type="submit">Login now</button>
        )}

        {currState === "Sign up" && (
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to terms of use & privacy policy.</p>
          </div>
        )}
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign up")}>create here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
