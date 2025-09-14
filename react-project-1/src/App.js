import React from "react";
import { useState } from "react";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/Posts/PostForm";
import "/home/fred/Projects/First-React-project/react-project-1/src/styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    {title: "Javascript", id: 1, body: "description"},
    {title: "Javascript", id: 2, body: "description"},
    {title: "Javascript", id: 3, body: "description"},
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !==0
      ? <PostList remove={removePost} posts={posts} title={"Post List"}/>
      : <div style={{textAlign:"center"}}>Posts not found</div>
      }
    </div>
  );
}


export default App