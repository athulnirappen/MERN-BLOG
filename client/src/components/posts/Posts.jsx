import Post from "../post/Post"
import "./posts.css"

const Posts = ({items}) => {
  
  return (
    <div className="posts">
      
      {
        items.map(p => (
          <Post key={p._id} post={ p} />
        ))
          }
        
      
      
      
    </div>
  );
}

export default Posts
