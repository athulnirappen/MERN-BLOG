import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import axios from "axios";
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'

const Home = () => {
  const [items, setItems] = useState([])
  const [post,setPost]=useState([])

  useEffect(() => {
   axios
      .get("http://localhost:5000/api/posts")
        .then((response) => {
          setItems(response.data)
        })  
  }, [])
  
  useEffect(() => {
    if (items.length) {
      setPost(items)
    }
  }, [items])
  console.log(items);
  




  return (
    <>
      <Header />
      <div className="home">
        <Posts items={items}  />
        <Sidebar/>
      </div>
    </>
  );
}

export default Home
