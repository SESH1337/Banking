'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import NavLink from './navLink/NavLink'

type LinkProps = {
  title: string
  path: string
}

const sesion = true
const isAdmin = true

const links: LinkProps[] = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
]

export default function Links() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-[10px]">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* Login, Logout Logic, + Admin Control Logic */}
        {sesion ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className="px-[5px] py-[5px] text-[15px] cursor-pointer font-bold text-black bg-white text-center">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <Image
        src="/Banking/menu.png"
        alt="menu icon"
        width={25}
        height={25}
        onClick={() => setOpen((prev) => !prev)}
        className="block cursor-pointer md:hidden"
      />

      {/* Mobile Menu Drawer */}
      {open && (
        <div
          className={`
            absolute
            top-[100px]
            right-0
            w-1/2
            h-[calc(100vh-100px)]
            bg-[var(--bg)]
            flex
            flex-col
            items-center
            justify-center
            gap-[10px]
            md:hidden
          `}
        >
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}
