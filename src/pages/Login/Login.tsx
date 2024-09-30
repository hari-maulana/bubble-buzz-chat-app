import "./Login.css";
// @ts-ignore
import assets from "../../assets/assets";

const Login = () => {
  return (
    <div className="login">
      <img className="login-logo" src={assets.logo_big} alt="logo" />
      <form action="" className="login-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="username"
          className="form-input"
          required
        />
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
        <button type="submit">Sign Up</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            Already have an account? <span>click here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
