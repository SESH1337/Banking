import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'

export type Post = {
  id: number
  title: string
  body: string
}

// Fetch post data based on slug
const getData = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res.ok) {
    throw new Error('Something went wrong...')
  }

  return res.json()
}

// Fetch list of slugs for dynamic paths
const fetchSlugsFromAPI = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return posts.map((post: Post) => post.id.toString()) // Return slugs (in this case, post IDs)
}

type SinglePostPageProps = {
  post: Post
}

// Get static paths for dynamic slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchSlugsFromAPI()

  const paths = slugs.map((slug: any) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false, // False ensures that if a user visits a path that isn't generated, they get a 404
  }
}

// Get static props for each post based on slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!
  const post = await getData(slug as string)

  return {
    props: { post },
  }
}

const SinglePostPage = ({ post }: SinglePostPageProps) => {
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
