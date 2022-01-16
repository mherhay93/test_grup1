import "../register/register.css";

import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Register = () => {
  const [closeRegister, setCloseRegister] = useState(false);

  const closeRegisterClick = () => {
    setCloseRegister(!closeRegister);
  };

  return (
    <div className="register-container" onClick={closeRegisterClick}>
      <IoCloseOutline className="close" />
      <div className="register-title">
        <p>Account Register</p>
        <div>
          <p>Have an account?</p>
          <p>LOGIN NOW</p>
        </div>
      </div>
      <form className="register-form">
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="User Surname" />
        <input type="text" placeholder="User Nik" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat Password" />
        <button type="submit">LOGIN NOW</button>
      </form>
    </div>
  );
};

export default Register;
