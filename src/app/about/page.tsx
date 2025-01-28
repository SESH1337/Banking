import React from 'react'
import Image from 'next/image'

function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-[100px]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-blue-300 font-bold text-[20px]">About Agency</h2>
        <h1 className="text-6xl md:text-[54px] font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-lg md:text-[20px] font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-0">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-blue-300 text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-blue-300 text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-blue-300 text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative">
        <Image
          style={{
            clipPath:
              'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
          src="/bank-image.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default AboutPage
{
  /* <Image
src="/bank-image.png"
alt="Indroduction bank serverice image"
fill
className="object-contain"
/> */
}
