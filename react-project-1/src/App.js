import React, { useMemo } from "react";
import { useState } from "react";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/Posts/PostForm";
import "/home/fred/Projects/First-React-project/react-project-1/src/styles/App.css"
import Sel from "./components/UI/select/Sel";
import Inp from "./components/UI/input/Inp";
import Btn from "./components/UI/button/Btn";

function App() {
  // Posts List
  const [posts, setPosts] = useState([
    {title: "Aaa", id: 1, body: "ooo"},
    {title: "Bbb", id: 2, body: "hhh"},
    {title: "Ccc", id: 3, body: "ggg"},
  ])
  // Funсtion off adding posts
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Function off sorting posts
  const [selSort, setSelSort] = useState("")
  const sortPosts = (sort) => {
    setSelSort(sort)
  }



  const sortedPost = useMemo(() => {
    console.log("o")
    if(selSort) {
      return [...posts].sort((a, b) => a[selSort].localeCompare(b[selSort]))
    }
    return posts
  }, [selSort, posts])

  // Function off removing posts
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }

  // Function off search posts
  const [searchQuery, setSearchQuery] = useState()
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.includes(searchQuery))
  }, [searchQuery, sortedPost])

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <Sel
      onChange={sortPosts}
      options={[
        {value:"title", name:"by title"}, {value:"body", name:"by description"}
      ]}
      style={{marginTop:"5px"}}
      defaultValue="sort"

      value={selSort}
      // onChange={sort => setSelSort(sort)}
      />

      <Inp 
      value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)}
      placeholder="search" style={{width:"50%"}}/>
      <Btn style={{marginLeft:"5px"}}>Search</Btn>

      {posts.length !==0
      ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post List"}/>
      : <div style={{textAlign:"center"}}>Posts not found</div>
      }


    </div>
  );
}


export default App