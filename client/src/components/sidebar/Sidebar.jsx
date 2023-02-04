import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {

  const [cats, setCats] = useState([])
  
  const getCats = async () => {
    await axios.get("http://localhost:5000/api/categories")
    .then(response=>setCats(response.data))
  }

  useEffect(() => {
    getCats()
  },[])

  // console.log(cats);


  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/14875465/pexels-photo-14875465.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          nulla a nunc mattis dictum. Praesent lacus lectus, vehicula id urna
          ac, tempus placerat nisi.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li key={c._id} className="sidebarlistitem">
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-square-facebook"></i>
          <i className="sidebaricon fa-brands fa-square-twitter"></i>
          <i className="sidebaricon fa-brands fa-square-pinterest"></i>
          <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
