import "./sidebar.css"

const Sidebar = () => {
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
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
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
