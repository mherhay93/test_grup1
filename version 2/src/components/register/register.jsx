import React, { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import "../register/register.css";

const Register = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [inRegister, setInRegister] = useState(false);

  // const [radioAdmin, setRadioAdmin] = useState(false)
  // const [radioUser, setRadioUser] = useState(false)

  const submitDataRegister = (data) => {
    fetch("http://localhost:8000/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        let counter = 0;
        for (let i in data) {
          res.map((item) => {
            if (
              data.userName === item.userName ||
              data.userSurname === item.userSurname ||
              data.userNik === item.userNik ||
              data.email === item.email ||
              data.password === item.password
            ) {
              counter++;
              console.log(counter);
              setInRegister(false);
            }
          });
        }
        if (counter === 0) {
          setInRegister(true);
          fetch("http://localhost:8000/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json;charset=utf-8",
            },
          });
        }
        counter = 0;
      });
  };

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
        <form
          className="register-form"
          onChange={handleSubmit(submitDataRegister)}
        >
          <input
            type="text"
            placeholder={t("User Name")}
            {...register("userName", {
              required: "This field is required",
            })}
          />
          {errors?.userName && (
            <span className="errorMessage">{errors?.userName?.message}</span>
          )}
          <input
            type="text"
            placeholder={t("User Surname")}
            {...register("userSurname", {
              required: "This field is required",
            })}
          />
          {errors?.userSurname && (
            <span className="errorMessage">{errors?.userSurname?.message}</span>
          )}
          <input
            type="text"
            placeholder={t("User_Nik")}
            {...register("userNik", {
              required: "This field is required",
              minLength: { value: 3, message: "enter at least 3 letters" },
            })}
          />
          {errors?.userNik && (
            <span className="errorMessage">{errors?.userNik?.message}</span>
          )}
          <input
            type="email"
            placeholder={t("Email_Address")}
            {...register("email", {
              required: "This field is required",
            })}
          />
          {errors?.email && (
            <span className="errorMessage">{errors?.email?.message}</span>
          )}
          <input
            type="password"
            placeholder={t("Password")}
            {...register("password", {
              required: "This field is required",
              minLength: { value: 3, message: "enter at least 3 letters" },
            })}
          />
          {errors?.password && (
            <span className="errorMessage">{errors?.password?.message}</span>
          )}
          <div className="checkBoxInput">
            <label>
              <input
                type="radio"
                className="adiminBox"
                name="admin"
              />
              {t("Admin")}
            </label>
            <label>
              <input
                type="radio"
                className="userBox"
                name="admin"
              />
              {t("User")}
            </label>
          </div>
          {inRegister ? (
            <Link to="/login" className="register_login_button_link">
              <button
                className="register_login_button"
                type="submit"
                disabled={!isValid}
              >
                {t("LOGIN NOW")}
              </button>
            </Link>
          ) : (
            <button
              className="register_login_button"
              type="submit"
              disabled={!isValid}
            >
              {t("LOGIN NOW")}
            </button>
          )}
        </form>
        {!inRegister ? (
          ""
        ) : (
          <span className="errorMessage">
            A user with such data is already registered in the system
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;

/* const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser] = useState("");
  const [userNik, setUserNik] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [adminRadioValue, setAdminRadioValue] = useState(true);
  const [userRadioValue, setUserRadioValue] = useState(false);

  const [repetitiveValue, setRepetitiveValue] = useState(false);
  const [errorIAccept, setErrorIAccept] = useState(false);
  const [errorNameUser, setErrorNameUser] = useState(false);
  const [errorSurnameUser, seteErrorSurnameUser] = useState(false);
  const [errorUserNik, setErrorUserNik] = useState(false);
  const [errorEmailAddress, setErrorEmailAddress] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorAdminRadioValue, setErrorAdminRadioValue] = useState(false);
  const [errorUserRadioValue, setErrorUserRadioValue] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
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
      (errorAdminRadioValue || errorUserRadioValue) &&
      errorIAccept &&
      !isDisabled
    ) {
      setIsDisabled(!isDisabled);
    } else if (
      !errorNameUser ||
      !errorSurnameUser ||
      !errorUserNik ||
      !errorEmailAddress ||
      !errorPassword ||
      !errorIAccept
    ) {
      setIsDisabled(false);
    }
  });

  const data = {
    userName: nameUser,
    userSurname: surnameUser,
    userNik: userNik,
    email: emailAddress,
    password: password,
    info: { admin: errorAdminRadioValue },
  };

  useEffect(() => {
   
  }, [errorIAccept, nameUser, surnameUser, userNik, emailAddress, password]);

  const submitData = () => {

  };*/
