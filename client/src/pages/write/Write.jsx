import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [Data, setData] = useState([]);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.className;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {}
    }
    try {
      await axios
        .post("http://localhost:5000/api/posts", newPost)
        .then((response) => setData(response.data._id));
      
      window.location.replace("http://localhost:5000/api/posts" + Data);
      console.log(Data);
    } catch (error) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeformcontainer">
          <div className="writeformgroup">
            <label htmlFor="fileinput">
              <i class="writeicon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileinput"
              style={{ display: "none" }}
              onChange={(e) =>setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="title"
              className="writeinput"
              onChange={e =>setTitle(e.target.value)}
            />
          </div>
          <div className="writeformgroup">
            <textarea
              placeholder="tell your story..."
              type="text"
              className="writeinput writetext"
              onChange={e =>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writesubmit" type="submit">
            publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
