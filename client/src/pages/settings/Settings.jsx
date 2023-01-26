import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"


const Settings = () => {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
          <span className="settingsdeletetitle">Delete Account</span>
        </div>
        <form className="settingsform">
          <label>Profile picture</label>
          <div className="settingspp">
            <img
              src="https://images.pexels.com/photos/14443587/pexels-photo-14443587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
              alt=""
            />
            <label htmlFor="fileinput">
              <i className="settingsppicon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Athul" />
          <label>Email</label>
          <input type="email" placeholder="athul@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsbutton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings
