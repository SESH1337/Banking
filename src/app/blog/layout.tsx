import React, { ReactNode } from 'react'

type BlogLayoutProps = {
  children: React.ReactNode
}
const BlogLayout: React.FC<BlogLayoutProps> = function ({ children }) {
  return <div>{children}</div>
}

export default BlogLayout
