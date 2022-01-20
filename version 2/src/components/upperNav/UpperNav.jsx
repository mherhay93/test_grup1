import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


import "./upperNav.css";

const UpperNav = () => {

  const { t } = useTranslation();
  

  return (
    <div className="upper-nav">
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
        <Link to="/register">
          <span className="nav-register nav-info1">{t("Register")}</span>
        </Link>
        <span className="border-right"></span>
      <Link to = '/login'>  <span className="nav-info2">{t("Login")}</span></Link>
      </div>
    </div>
  );
};

export default UpperNav;
