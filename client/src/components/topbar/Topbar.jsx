import "./topbar.css"

const Topbar = () => {
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
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topimg"
          src="https://images.pexels.com/photos/1689608/pexels-photo-1689608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <i className="topiconsearch fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar
