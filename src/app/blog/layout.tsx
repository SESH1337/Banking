import React, { ReactNode } from 'react'

type BlogLayoutProps = {
  children: React.ReactNode
}
const BlogLayout: React.FC<BlogLayoutProps> = function ({ children }) {
  return (
    <div>
      <h2></h2>
      {children}
    </div>
  )
}

export default BlogLayout
