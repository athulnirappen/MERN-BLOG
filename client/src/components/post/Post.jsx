import "./post.css"
import {Link} from "react-router-dom"

const Post = ({post}) => {
  return (
    <div className="post">
      {post.photo && <img className="postimg" src={post.photo} alt="" />}

      <div className="postinfo">
        <div className="postcategory">
          {post.categories.map((c) => (
            <span className="postcate">{c.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="posttitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postdescription">{post.description}</p>
    </div>
  );
}

export default Post
