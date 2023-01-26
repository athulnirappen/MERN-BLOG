import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeimg"
        src="https://images.pexels.com/photos/14443587/pexels-photo-14443587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <form className="writeform">
        <div className="writeformcontainer">
          <div className="writeformgroup">
            <label htmlFor="fileinput">
              <i class="writeicon fas fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
            <input type="text" placeholder="title" className="writeinput"  />
          </div>
          <div className="writeformgroup">
            <textarea
              placeholder="tell your story..."
              type="text"
              className="writeinput writetext"
            ></textarea>
          </div>
          <button className="writesubmit">publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
