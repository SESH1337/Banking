import Link from 'next/link'
import React from 'react'

export default function NotFoundError() {
  return (
    <div>
      <h1>This Page Not Found !</h1>
      <Link href="/">Return Home Page</Link>
    </div>
  )
}
