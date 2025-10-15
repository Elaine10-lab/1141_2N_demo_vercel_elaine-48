import { useEffect, useState } from "react";


// import blogData_48 from '../assets/data/blogData.json';
import Blog_48 from "../components/Blog_48.jsx";

const api_url = 'http://localhost:5000/api/blog_48';

  const BlogNodePage_48 = () => {
  const [name, setName] = useState("黃子庭");
  const [id, setId] = useState("913410048");
  const [blogs_48, setBlogs_48] = useState([]);

  const fetchBlogFromNodeNodeServer = async()=>{
    try{
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs',data);
      setBlogs_48(data);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchBlogFromNodeNodeServer();
  },[]);


  return (
    <>
      <section className="blogs">
      <div className="section-title">
        <h2>blogs from node -- {name}, {id}</h2>
      </div>
      <div className="blogs-center">
        {blogs_48.map((item)=>{
          const {id, title, img, descrip, category} = item;
          return (<Blog_48 
            key={id} 
            id={id} 
            title={title} 
            img={img}
            descrip={descrip}
            category={category}
            />
          )
        }) }
        
      </div>
    </section>
    </>
  );
};

export default BlogNodePage_48;
