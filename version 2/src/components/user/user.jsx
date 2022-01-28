import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "./user.css";

const User = () => {
  const { t } = useTranslation();

  return (
    <div className="user-container">
        <div className="user-header">User Profile</div>
      <div className="user-container-prof">
        <div className="user-info">
          <p className="user-name">Name</p>
          <p className="user-surname">Surname</p>
          <p className="user-nickname">Nickname</p>
        </div>
      </div>
      <div className="user-container-myevents-add">
        <div className="myEvents"></div>
      </div>
    </div>
  );
};

export default User;
