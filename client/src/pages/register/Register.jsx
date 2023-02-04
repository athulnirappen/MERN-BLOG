import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [data,setData]=useState([])

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
       await axios
         .post("http://localhost:5000/api/auth/register", {
           username,
           email,
           password,
         })
        .then((response)=>setData(response.data));
      data && window.location.replace("/login")
      
    } catch (error) {
      setError(true)
    }
   
  };

  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform" onSubmit={HandleSubmit}>
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          value={username}
          placeholder=" Enter Your Username...."
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          className="registerinput"
          type="email"
          value={email}
          placeholder=" Enter Your Email...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          className="registerinput"
          type="password"
          value={password}
          placeholder=" Enter Your Password...."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerbutton" type="submit">
          register
        </button>
      </form>
      <button className="registerloginbutton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
     {error && <span style={{"marginTop":"10px","color":"blue"}}>Something went Wrong</span>}
    </div>
  );
};

export default Register;
