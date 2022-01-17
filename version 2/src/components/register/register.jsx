import "../register/register.css";

const Register = () => {
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
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="User Surname" />
          <input type="text" placeholder="User Nik" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Repeat Password" />
          <div className="checkBoxInput">
            <label><input type="checkbox" className="adiminBox" name="admin" />Admin</label>
            <label><input type="checkbox" className="userBox" name="admin" />User</label>
          </div>
          <button type="submit">LOGIN NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
