import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './singlepost.css'

const Singlepost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post,setPost]=useState({})
  

  const getPost = async () => {
    await axios.get("http://localhost:5000/api/posts/" + path)
      .then(response => setPost(response.data))
    
  }

  useEffect(() => {
    getPost()
  },[path])

  


  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img className="singlepostimg" src={post.photo} alt="" />
        )}

        <h1 className="singleposttitle">
          {post.title}
          <div className="singlepostedit">
            <i class=" singleposticon far fa-edit"></i>
            <i class=" singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlepostdate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlepostdescription">{post.description}</p>
      </div>
    </div>
  );
}

export default Singlepost
