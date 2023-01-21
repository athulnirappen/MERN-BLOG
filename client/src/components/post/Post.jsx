import "./post.css"

const Post = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/14958001/pexels-photo-14958001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <div className="postinfo">
        <div className="postcategory">
          <span className="postcate">Music</span>
          <span className="postcate">Life</span>
        </div>
        <span className="posttitle">It is a long established fact</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdescription">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy.Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy.Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy.Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy.
      </p>
    </div>
  );
}

export default Post
