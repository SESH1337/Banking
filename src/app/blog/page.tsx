import { type } from 'os'
import React from 'react'
import PostCard from '../_components/postCard/postCard'

export type Post = {
  id: number
  title: string
  body: string
}

const getData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Something went wrong...')
  }

  return res.json()
}

const BlogPage = async (): Promise<JSX.Element> => {
  const posts = await getData()

  return (
    <div className="flex gap-5 flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="w-[30%] md:w-[45%] sm:w-full">
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  )
}

export default BlogPage
