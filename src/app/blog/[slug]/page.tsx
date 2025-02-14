// src/app/blog/[slug]/page.tsx
import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'

export type Post = {
  id: number
  title: string
  body: string
}

// Function to fetch post data by slug (post ID in this case)
const getData = async (slug: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if (!res.ok) {
    throw new Error('Something went wrong...')
  }
  return res.json()
}

// Function to fetch all post slugs
const fetchSlugsFromAPI = async (): Promise<string[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch slugs')
  }
  const posts = await res.json()
  // Return post IDs as strings to be used as slugs
  return posts.map((post: Post) => post.id.toString())
}

// This function generates the static params for each dynamic route
export async function generateStaticParams() {
  const slugs = await fetchSlugsFromAPI()
  return slugs.map((slug) => ({ slug }))
}

type PageProps = {
  params: {
    slug: string
  }
}

// The page component is async and fetches data directly
const SinglePostPage = async ({ params }: PageProps) => {
  const { slug } = params
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/blog-img.avif"
          alt="Blog image"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/ideas.webp"
            alt="Author"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className="font-md">Date</span>
          </div>
          <div className="flex gap-[10px] flex-col">
            <span className="font-bold text-gray-200">Published</span>
            <span className="font-md">01.01.2025</span>
          </div>
        </div>

        <div className="flex gap-[100px]">{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
