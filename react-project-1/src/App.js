import React from "react";
import { useState } from "react";
import "/home/fred/Projects/example-projects/react-exaple-projects/New Folder/react-project-1/src/styles/App.css"
import "/home/fred/Projects/example-projects/react-exaple-projects/New Folder/react-project-1/src/styles/App.css"
import PostItem from "./components/Posts/PostItem";
import PostList from "./components/Posts/PostList";
import Btn from "./components/UI/button/Btn";
import Inp from "./components/UI/input/Inp"
import PostForm from "./components/Posts/PostForm";


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
      : <div>Posts not found</div>
      }
    </div>
  );
}


export default App