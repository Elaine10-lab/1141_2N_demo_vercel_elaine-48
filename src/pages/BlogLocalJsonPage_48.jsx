import { useState } from "react";


import blogData_48 from '../assets/data/blogData.json';
import Blog_48 from "../components/Blog_48.jsx";

  const BlogLocalJsonPage_48 = () => {
  const [name, setName] = useState("黃子庭");
  const [id, setId] = useState("913410048");
  const [blogs_48, setBlogs_48] = useState(blogData_48);
  return (
    <>
      <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- {name}, {id}</h2>
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

export default BlogLocalJsonPage_48;
