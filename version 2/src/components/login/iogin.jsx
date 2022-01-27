import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../login/login.css";
const Login = () => {
  const [dataUserServer, setDataUserServer] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [dataInLogin, setDataInLogin] = useState([]);

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDataUserServer(res)
      });
  }, []);
  console.log(dataInLogin);

  const submitDataLogin = (data) => { 
    let assistant;
    dataUserServer.map((item) => {
      if (
        data.userNik === item.userNik &&
        data.password === item.password
      ) {
        setDataInLogin(item);
        setIsLogin(true);
        assistant = item;
        console.log(1);
      }
    });
    if (
      assistant?.userNik?.length !== data?.userNik?.length &&
      assistant?.password?.length !== data?.password?.length
    ) {
      console.log(5);
      setIsLogin(false);
    }};

    console.log(dataInLogin);
let a = dataInLogin.id

console.log(a);
  return ( <form
    onChange={handleSubmit(submitDataLogin)}
    className="login-container"
  >
    <div className="login-box">
      <div className="login-title">
        <p>{t("Account_Login")}</p>
      </div>
      <div className="login-form">
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
          type="password"
          placeholder={t("Password")}
          {...register("password", {
            required: "This field is required",
            minLength: { value: 3, message: "enter at least 3 characters" },
          })}
        />
        {errors?.password && (
          <span className="errorMessage">{errors?.password?.message}</span>
        )}
        {isLogin ? (
          <Link className="login_button_link" to="/admin">
            <button type="submit" disabled={!isValid}>
              {t("Login")}
            </button>
          </Link>
        ) : (
          <button type="submit" disabled={!isValid}>
            {t("Login")}
          </button>
        )}
        {isLogin && !isValid ? (
          <span className="errorMessage">
            There is no registered user with such data in the system
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  </form>)
};

export default Login;
