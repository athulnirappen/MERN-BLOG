import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder=" Enter Your Username...."
        />
        
        <label>Email</label>
        <input
          className="registerinput"
          type="email"
          placeholder=" Enter Your Email...."
        />
        <label>password</label>
        <input
          className="registerinput"
          type="password"
          placeholder=" Enter Your Password...."
        />
        <button className="registerbutton">register</button>
      </form>
      <button className="registerloginbutton"><Link className="link" to="/login">Login</Link></button>
    </div>
  );
};

export default Register;
