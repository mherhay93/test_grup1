import { useEffect } from "react";
import { useState } from "react";
import "../login/login.css";

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">
          <p>Account Login</p>
        </div>
        <form className="login-form">
          <input type="text" placeholder="User Nik"/>
          <input type="password" placeholder="Password" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
