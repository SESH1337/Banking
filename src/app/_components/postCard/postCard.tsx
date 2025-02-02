import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/app/blog/page'

type PostCardProps = {
  post: Post
}

export default function postCard({post}: PostCardProps) {
  return (
    <div className="flex flex-col gap-5 mb-5 mt-[90px]">
      <div className="flex">
        <div className="relative w-[90%] h-[400px]">
          <Image
            src="/bank-image.png"
            alt="bank image"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-[12px] rotate-[-90deg] m-auto">01.01.2025</span>
      </div>
      <div className="">
        <h1 className="w-[90%] text-[24px ] mb-[20px] font-bold">{post.title}</h1>
        <p className="w-[90%] font-md text-gray-300 mb-[20px]">{post.body}
        </p>
        <Link
          className="bg-blue-500 text-slate-100 font-md p-2"
          href={`/blog/${post.id}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}
