import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-[200px] mt-[75px]">
      <div className="flex flex-1 flex-col gap-[50px]">
        <h1 className="text-[70px]">What is banking as a service?</h1>
        <p className="text-[20px]">
          banking as a service is way for companies to partner with banks in
          order to make the bank's financial products
        </p>
        <div className="flex gap-[20px]">
          <Link href="./about">
            <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-md text-white bg-blue-600 text-[16px] font-medium">
              Learn more
            </button>
          </Link>
          <Link href="./contact">
            <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-white text-black text-[16px] font-medium">
              Contact
            </button>
          </Link>
        </div>

        <div className="relative w-[500px] h-[50px] grayscale">
          <Image src="/brands.png" alt="Contact us" fill className="" />
        </div>
      </div>
      <div className="flex-1 relative rounded-full clip-path-blob h-[350px] mt-[55px]">
        <Image
          style={{
            clipPath:
              'polygon(100% 100%, 0% 100% , 0.00% 34.12%, 2.00% 33.83%, 4.00% 32.96%, 6.00% 31.55%, 8.00% 29.65%, 10.00% 27.33%, 12.00% 24.66%, 14.00% 21.74%, 16.00% 18.68%, 18.00% 15.58%, 20.00% 12.56%, 22.00% 9.71%, 24.00% 7.15%, 26.00% 4.96%, 28.00% 3.21%, 30.00% 1.98%, 32.00% 1.31%, 34.00% 1.21%, 36.00% 1.69%, 38.00% 2.74%, 40.00% 4.32%, 42.00% 6.37%, 44.00% 8.82%, 46.00% 11.58%, 48.00% 14.56%, 50.00% 17.65%, 52.00% 20.73%, 54.00% 23.71%, 56.00% 26.47%, 58.00% 28.92%, 60.00% 30.97%, 62.00% 32.55%, 64.00% 33.60%, 66.00% 34.09%, 68.00% 33.99%, 70.00% 33.31%, 72.00% 32.08%, 74.00% 30.34%, 76.00% 28.15%, 78.00% 25.58%, 80.00% 22.74%, 82.00% 19.71%, 84.00% 16.61%, 86.00% 13.55%, 88.00% 10.63%, 90.00% 7.97%, 92.00% 5.64%, 94.00% 3.74%, 96.00% 2.33%, 98.00% 1.47%, 100.00% 1.18%)',
          }}
          src="./pig.gif"
          alt=""
          fill
          className=""
        />
      </div>
    </div>
  )
}
