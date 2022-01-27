import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useServerData } from "../../context/registerContext";

import "./upperNav.css";

import { useEffect } from "react";

const UpperNav = () => {
  const { t } = useTranslation();
  const { isLoginTrue } = useServerData();
  const { dataInLogin } = useServerData();
  const {setIsLoginTrue} = useServerData()

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
      {!isLoginTrue ? (
        <div>
          <Link to="/register">
            <span className="nav-register nav-info1">{t("Register")}</span>
          </Link>
          <span className="border-right"></span>
          <Link to="/login">
            <span className="nav-info2">{t("Login")}</span>
          </Link>
        </div>
      ) : (
        <>
          <Link
            style={{ marginLeft: "70%", color: "white" }}
            to={dataInLogin?.admin ? "/admin" : "/user"}
          >
            <span className="nav-register">{dataInLogin.userNik}</span>
          </Link>
          <Link to="/" style={{ color: "white" }}>
            <div
              className="nav-register"
              onClick={() => setIsLoginTrue(false)}
            >
              Exit
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default UpperNav;
