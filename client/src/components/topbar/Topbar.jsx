import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {

  const { user,dispatch } = useContext(Context);

  const HandleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-square-pinterest"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistitem" onClick={HandleLogout}>
            
              {user && "LOGOUT"}
            
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            className="topimg"
            src={user.profilepicture}
            alt=""
          />
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li className="toplistitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topiconsearch fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar
