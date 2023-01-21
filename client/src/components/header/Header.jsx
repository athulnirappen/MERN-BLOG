import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlesm">React & Node</span>
        <span className="headertitlelg">Blog</span>
      </div>
      <img
        className="headerimg"
        src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
}

export default Header
