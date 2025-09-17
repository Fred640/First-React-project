import React, { useState } from "react"
import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
    if(sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
        return posts
    }
    }, [sort, posts])

    return sortedPost
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => {
      if(query) {
        return post.title.includes(query)
      } else {return posts}
    })
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}