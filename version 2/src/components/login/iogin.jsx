import "../login/login.css";
import { useTranslation } from 'react-i18next';


import { IoCloseOutline } from "react-icons/io5";

const Login = () => {

  const { t } = useTranslation();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">
          <p>{t("Account_Login")}</p>
        </div>
        <form className="login-form">
          <input type="text" placeholder={t("User_Nik")} />
          <input type="text" placeholder={t("Password")} />
          <button type="submit">{t("Login")}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
