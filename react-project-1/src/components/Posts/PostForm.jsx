import React, { useState } from "react";
import Inp from "../UI/input/Inp";
import Btn from "../UI/button/Btn";


const PostForm = ({create}) => {
    
    const [post, setPost] = useState({title:"", body:""})
    

  const addPost = (event) => {
    event.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title:"", body:""})
  }

    return(
      <form>
        <Inp 
        value={post.title}
        placeholder="Title"
        onChange={event => setPost({...post, title: event.target.value})}
        />
        <Inp 
        value={post.body}
        placeholder="Description"
        onChange={event => setPost({...post, body: event.target.value})}
        />
        <Btn style={{marginTop: "5px"}} onClick={addPost}>Add Post</Btn>
      </form>
    )
}

export default PostForm