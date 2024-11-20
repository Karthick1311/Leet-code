import React from "react";
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login to your account</h2>
        <form>
          <input type="email" placeholder="Enter your mail ID" />
          <input type="password" placeholder="Enter password" />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="links">
          <a href="/forgot-password">Forgot password?</a>
          <p>Don’t have an account? <a href="/signup">Sign up </a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
