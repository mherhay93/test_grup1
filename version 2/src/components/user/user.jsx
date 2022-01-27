import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "./user.css";

const User = () => {
  const { t } = useTranslation();

  return (
    <div className="user-container">
      <div className="user-container-prof">
        <div>
          <p>Name</p>
          <p>Surname</p>
          <p>Nikname</p>
        </div>
      </div>
      <div className="user-container-myevents-add">
        <div className="myEvents"></div>
      </div>
    </div>
  );
};

export default User;
