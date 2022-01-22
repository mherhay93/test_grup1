import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "../register/register.css";
import { useTranslation } from 'react-i18next';



const Register = () => {

  const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser] = useState("");
  const [userNik, setUserNik] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const [errorNameUser, setErrorNameUser] = useState(false);
  const [errorSurnameUser, seteErrorSurnameUser] = useState(false);
  const [errorUserNik, setErrorUserNik] = useState(false);
  const [errorEmailAddress, setErrorEmailAddress] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (nameUser !== "" && errorNameUser !== true) {
      setErrorNameUser(!errorNameUser);
    }
    if (nameUser === "") {
      setErrorNameUser(false);
    }
    if (surnameUser !== "" && errorSurnameUser !== true) {
      seteErrorSurnameUser(!errorSurnameUser);
    }
    if (surnameUser === "") {
      seteErrorSurnameUser(false);
    }
    if (userNik !== "" && errorUserNik !== true) {
      setErrorUserNik(!errorUserNik);
    }
    if (userNik === "") {
      setErrorUserNik(false);
    }
    if (emailAddress !== "" && errorEmailAddress !== true) {
      setErrorEmailAddress(!errorEmailAddress);
    }
    if (emailAddress === "") {
      setErrorEmailAddress(false);
    }
    if (password !== "" && errorPassword !== true) {
      setErrorPassword(!errorPassword);
    }
    if (password === "") {
      setErrorPassword(false);
    }
    if (
      errorNameUser &&
      errorSurnameUser &&
      errorUserNik &&
      errorEmailAddress &&
      errorPassword &&
      !isDisabled
    ) {
      setIsDisabled(!isDisabled);
    } else if (
      !errorNameUser ||
      !errorSurnameUser ||
      !errorUserNik ||
      !errorEmailAddress ||
      !errorPassword
    ) {
      setIsDisabled(false);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

  useEffect(
    (data) => {
      data = {
        userName: nameUser,
        userSurname: surnameUser,
        userNik: userNik,
        email: emailAddress,
        password: password,
      };

      fetch("http://localhost:8000/users")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          let counter = 0;
          for (let i in data) {
            res.map((item) => {
              if (Object.values(item).includes(data[i]) && data[i] !== "") {
                counter++;
              }
            });
          }
          console.log(counter);
          if (counter === 0 && nameUser !== "") {
            fetch("http://localhost:8000/users", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-type": "application/json;charset=utf-8",
              },
            });
          }
          counter = 0;
          console.log(counter);
        });
    },
    [submit]
  );

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
          <input
            type="text"
            placeholder={t("User Name")}
            onChange={(e) => {
              setNameUser(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder={t("User Surname")}
            onChange={(e) => {
              setSurnameUser(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder={t("User_Nik" )}
            onChange={(e) => {
              setUserNik(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder={t("Email_Address")}
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder={t("Password" )}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="checkBoxInput">
            <label>
              <input type="checkbox" className="adiminBox" name="admin" />
              {t("Admin")}
            </label>
            <label>
              <input type="checkbox" className="userBox" name="admin" />
              {t("User")}
            </label>
          </div>
          <Link to="/admin" className="register_login_button_link">
            <button
              className="register_login_button"
              type="submit"
              onClick={handleSubmit}
              style={
                !isDisabled
                  ? { pointerEvents: "none", opacity: 0.4, color: "black" }
                  : { pointerEvents: "" }
              }
            >
             {t("LOGIN NOW")}
            </button>
          </Link>
          {!isDisabled && (
            <h6 style={{ color: "red" }}>
              Fill in all the fields in the correct format
            </h6>
          )}

        </form>
      </div>
    </div>
  );
};

export default Register;
