'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  item: {
    path: string
    title: string
  }
}

export default function NavLink({ item }: NavLinkProps) {
  const pathName = usePathname()

  return (
    <div>
      <Link
        href={item.path}
        className={`min-w-[100px] px-3 py-1 rounded-[20px] font-medium text-center ${
          pathName === item.path && 'bg-text text-bg'
        }`}
      >
        {item.title}
      </Link>
    </div>
  )
}

// .container{
//   min-width: 100px;
//   padding: 10px;
//   border-radius: 20px;
//   font-weight: 500;
//   text-align: center;
// }

// .active{
//   background-color: var(--text);
//   color: var(--bg);
// }
