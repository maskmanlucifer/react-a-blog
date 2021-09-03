import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  
  // runs on every render 
  // we can pass a dependency array to specify when useEffect will run
  
  const [isPending,setPending] = useState(true);

  const [error,setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
      .then((res)=>{
        if(!res.ok)
        {
          throw Error("could not fetch data for that resource");
        }
        return res.json()
      })
      .then((data)=>{
        setBlogs(data);
        setPending(false);
        setError(null);
      })
      .catch((err)=>{
        setError(err.message);
        setPending(false);
      });
    },1000);
    
  },[]);
  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;