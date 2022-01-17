import "./upperNav.css";

import { useState } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import Register from "../register/register";
import Login from "../login/iogin";

let disabl;

const UpperNav = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [disabled, setDisabled] = useState(openRegister);

  const openRegisterClick = () => {
    setOpenRegister(!openRegister);
    setDisabled(!disabled);
  };

  const openClickLogin = () => {
    setOpenLogin(!openLogin);
    setDisabled(!disabled);
  };

disabl = disabled

  return (
    <div className="upper-nav">
      {openRegister && <Register />}
      {openLogin && <Login />}
      <div
        style={{
          pointerEvents: disabled ? "none" : "initial",
        }}
      >
        <span className="nav-info1">
          <AiFillMail className="nav-icon" />
          info@harmony.com
        </span>
        <span className="nav-info2">
          <AiFillPhone className="nav-icon" />
          100-2222-9999
        </span>
      </div>
      <div
        style={{
          pointerEvents: disabled ? "none" : "initial",
        }}
      >
        <span className="nav-register nav-info1" onClick={openRegisterClick}>
          Register
        </span>
        <span className="border-right"></span>
        <span className="nav-info2" onClick={openClickLogin}>
          Login
        </span>
      </div>
    </div>
  );
};

export default UpperNav;
export {disabl};
