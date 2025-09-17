import React, { useMemo } from "react";
import { useState } from "react";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/Posts/PostForm";
import "/home/fred/Projects/First-React-project/react-project-1/src/styles/App.css"
import Sel from "./components/UI/select/Sel";
import Inp from "./components/UI/input/Inp";
import Btn from "./components/UI/button/Btn";
import Modal from "./components/UI/myModal/Modal";
import { useSortedPosts } from "./hooks/usePosts";
import { usePosts } from "./hooks/usePosts";

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
    setModal(false)
  }

  // Function off removing posts
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }

  // Function off sorting posts
  const [selSort, setSelSort] = useState("")

  const sortPosts = (sort) => {
    setSelSort(sort)
  }
  


  // Modal window
  const [modal, setModal] = useState(false)

  const [searchQuery, setSearchQuery] = useState()

  const sortedAndSearchedPosts = usePosts(posts, selSort, searchQuery)



  // Function off search posts
  


  return (
    <div className="App">
      <Btn onClick={() => setModal(true)}>Create Post</Btn>
      <Modal visible={modal} setVisible={setModal}><PostForm create={createPost}/></Modal>
      

      <Sel
      onChange={sortPosts}
      value={selSort}
      options={[
        {value:"title", name:"by title"}, {value:"body", name:"by description"}
      ]}
      style={{marginTop:"5px"}}
      defaultValue="sort"

      
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