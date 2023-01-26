import { Link } from "react-router-dom";
import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input
          className="logininput"
          type="email"
          placeholder=" Enter Your Email...."
        />
        <label>password</label>
        <input
          className="logininput"
          type="password"
          placeholder=" Enter Your Password...."
        />
        <button className="loginbutton">Login</button>
      </form>
      <button className="loginregisterbutton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login
