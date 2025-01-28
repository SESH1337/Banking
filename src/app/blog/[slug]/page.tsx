import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/blog-img.avif" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/ideas.webp"
            alt=""
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

        <div className="flex gap-[100px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          sint, saepe illum sed nihil ratione dicta reiciendis alias cumque est?
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
