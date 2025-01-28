import React from 'react'
import PostCard from '../_components/postCard/postCard'

function BlogPage() {
  return (
    <div className="flex gap-[20px] flex-wrap">
      <div className="w-[30%] md:w-[45%] sm:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] md:w-[45%] sm:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] md:w-[45%] sm:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] md:w-[45%] sm:w-full">
        <PostCard />
      </div>
    </div>
  )
}

export default BlogPage
