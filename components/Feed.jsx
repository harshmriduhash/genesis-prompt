'use client'

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
  return (<div className="mt-16 prompt_layout">
    {data.map((post) => {
      return <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
    })}
  </div>)
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])


  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearchPrompt =(e)=>{
    e.preventDefault();

    let newPosts = filterPost(searchText)
    setFilteredPosts(newPosts);
  }
  
  const filterPost = (text)=>{
    const regex = new RegExp(text,'i');// 'i' flag for case-insensitive
    
    return posts.filter((item)=>{
      return regex.test(item.creator.username) ||
      regex.test(item.tag) ||
      regex.test(item.prompt)
    }) 
  }

  const handleTagClick = (tag)=>{
    setSearchText(tag);

    let newPosts = filterPost(tag)
    setFilteredPosts(newPosts);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      console.log(data)
      setPosts(data)
      setFilteredPosts(data)
    }

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center" onSubmit={handleSearchPrompt}>
        <span className="relative w-full flex-center">
          <input type="text"
            placeholder="Search for a tag or a username"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="search_input peer" />
            <button className="black_btn mx-3" type="submit">Search</button>
        </span>
      </form>
      <PromptCardList
        data={filteredPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed