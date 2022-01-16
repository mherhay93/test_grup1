import "./upperNav.css";

import { useState } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import Register from "../register/register";

const UpperNav = () => {
  const [openRegister, setOpenRegister] = useState(false);

  const openRegisterClick = () => {
    setOpenRegister(!openRegister);
  };

const disabledClick = ()=>{
  if(!openRegister){setOpenRegister({disabled:true})}
}

  return (
    <div className="upper-nav">
      {openRegister && <Register />}
      <div>
        <span className="nav-info1">
          <AiFillMail className="nav-icon" />
          info@harmony.com
        </span>
        <span className="nav-info2">
          <AiFillPhone className="nav-icon" />
          100-2222-9999
        </span>
      </div>
      <div>
        <span className="nav-register nav-info1" onClick={openRegisterClick} onClick={disabledClick}>
          Register
        </span>
        <span className="border-right"></span>
        <span className="nav-info2">Login</span>
      </div>
    </div>
  );
};

export default UpperNav;
