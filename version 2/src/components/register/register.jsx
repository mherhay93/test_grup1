import "../register/register.css";
import { useTranslation } from 'react-i18next';


const Register = () => {

  const { t } = useTranslation();

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-title">
          <p>{t("Account Register")}</p>
          <div>
            <p>{t("Have an account?")}</p>
            <p>{t("LOGIN NOW")}</p>
          </div>
        </div>
        <form className="register-form">
          <input type="text" placeholder={t("User Name")} />
          <input type="text" placeholder={t("User Surname")} />
          <input type="text" placeholder={t("User_Nik" )}/>
          <input type="text" placeholder={t("Email_Address")} />
          <input type="text" placeholder={t("Password" )}/>
          <input type="text" placeholder={t("Repeat Password")} />
          <div className="checkBoxInput">
            <label><input type="checkbox" className="adiminBox" name="admin" />{t("Admin")}</label>
            <label><input type="checkbox" className="userBox" name="admin" />{t("User")}</label>
          </div>
          <button type="submit">{t("LOGIN NOW")}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
