import { useState } from "react/cjs/react.development";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setPending] = useState(false);

    
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title,body,author};

      setPending(true);
      fetch('http://localhost:8000/blogs',{
          method : 'POST',
          headers : {"Content-Type":"application/json"},
          body : JSON.stringify(blog)
      })
      .then(()=>{
        console.log("New Blog Added");
        setPending(false);  
        setTitle('');
        setBody('');
      })
    };

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
                <p>{title}</p>
                <label >Blog body:</label>
                <textarea required value={body} onChange={(e)=>{
                    setBody(e.target.value)}}></textarea>
                <p>{body}</p>
                <label>Blog author:</label>
                <select value={author} onChange={(e)=>{
                   setAuthor(e.target.value);
                }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <p>{author}</p>
                
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding Blog......</button>}
            </form>
        </div>
     );
}
 
export default Create;