import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useServerData } from "../../context/registerContext";

import "./user.css";

const User = () => {
  const { t } = useTranslation();
  const { dataInLogin } = useServerData();

  return (
    <div className="user-container">
      <div className="user-container-prof">
        <div>
          <p>{dataInLogin.userName}</p>
          <p>{dataInLogin.userSurname}</p>
          <p>{dataInLogin.userNik}</p>
        </div>
      </div>
      <div className="user-container-myevents-add">
        <div className="myEvents"></div>
      </div>
    </div>
  );
};

export default User;
