import { Link } from "react-router-dom";
import "./login.css"
import { useRef, useState } from "react";
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";




const Login = () => {


  const userRef = useRef();
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)
  const [data,setData]=useState([])





  const Handlesubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", {
          username:userRef.current.value,
          password:passwordRef.current.value
        })
        .then((response) => setData(response.data));
      dispatch({ type: "LOGIN_SUCCESS",payload:data });
      
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  console.log(data);












  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform" onSubmit={Handlesubmit}>
        <label>Username</label>
        <input
          className="logininput"
          type="text"
          placeholder=" Enter Your Username...."
          ref={userRef}
        />
        <label>password</label>
        <input
          className="logininput"
          type="password"
          placeholder=" Enter Your Password...."
          ref={passwordRef}
        />
        <button className="loginbutton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginregisterbutton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login
