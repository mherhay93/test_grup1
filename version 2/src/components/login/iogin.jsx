import "../login/login.css";

import { IoCloseOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">
          <p>Account Login</p>
        </div>
        <form className="login-form">
          <input type="text" placeholder="User Nik" />
          <input type="text" placeholder="Password" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
