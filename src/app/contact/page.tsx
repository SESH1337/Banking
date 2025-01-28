import React from 'react'
import Image from 'next/image'

function ContactPage() {
  return (
    <div className="flex items-center gap-24 md:gap-10 lg:gap-24 flex-col md:flex-row">
      {/* Image Container */}
      <div className="flex-1 h-[500px] relative">
        <Image
          src="/contact.png"
          alt=""
          fill
          className="object-contain hidden md:block"
        />
      </div>

      {/* Form Container */}
      <div className="flex-1 mt-0 md:mt-[100px]">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-5 rounded-md border-none outline-none bg-bgSoft text-white"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5 rounded-md border-none outline-none bg-bgSoft text-white"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-5 rounded-md border-none outline-none bg-bgSoft text-white"
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Message"
            className="p-5 rounded-md border-none outline-none bg-bgSoft text-white"
          ></textarea>
          <button className="p-5 bg-[var(--btn)] text-[var(--text)] font-bold rounded-md border-none cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
