import "./admin.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Admin = () => {

  const { t } = useTranslation();

  return (
    <div>
      <form className="form-admin" action="" method="">
        <div className="form-admin-title">
          <p>{t("Add new event")}</p>
        </div>
        <div className="admin-container-inputs">
          <input className="eventTitle" placeholder={t("Event title")} />
          <input className="eventImage" placeholder={t("Image")} />
          <input className="eventDate" placeholder={t("Date: eg. 21 Feb")} />
          <input className="eventDate" placeholder={t("Time: eg. 16:00 - 19:30")} />
          <select>
            <option value="music">{t("Music")}</option>
            <option value="education">{t("Education")}</option>
            <option value="culture">{t("Culture")}</option>
            <option value="movie">{t("Movie")}</option>
            <option value="tourism">{t("Tourism")}</option>
          </select>
          <Link to="/events">
            <button className="formButtonAdmin" type="submit">
              {t("ADD Event")}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admin;
