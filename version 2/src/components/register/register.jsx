import { useState, useEffect } from "react";

import "../register/register.css";

const Register = () => {
  const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser] = useState("");
  const [userNik, setUserNik] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

  const controler = () => {};

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
              console.log(Object.values(item).includes(nameUser));
              if (nameUser !== "") {
                if (!Object.values(item).includes(nameUser)) {
                      counter++
                }
              }
            });
          }console.log(counter);
        });
    },
    [submit]
  );

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-title">
          <p>Account Register</p>
          <div>
            <p>Have an account?</p>
            <p>LOGIN NOW</p>
          </div>
        </div>
        <form className="register-form">
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) => {
              setNameUser(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="User Surname"
            onChange={(e) => {
              setSurnameUser(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="User Nik"
            onChange={(e) => {
              setUserNik(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="text" placeholder="Repeat Password" />
          <div className="checkBoxInput">
            <label>
              <input type="checkbox" className="adiminBox" name="admin" />
              Admin
            </label>
            <label>
              <input type="checkbox" className="userBox" name="admin" />
              User
            </label>
          </div>
          <button type="submit" onClick={handleSubmit}>
            LOGIN NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;


// fetch("http://localhost:8000/users", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json;charset=utf-8",
//   },
// });