"use client";
import Image from "next/image";
import Link from "next/link";
function Blogs(){
    return(
        <>

  <div className="w-full  lg:p-14">
       
         <h1 className="lg:text-5xl text-3xl font-serif tracking-tighter font-bold text-center mb-4">Our Newest Blogs</h1>

   <div className="bg-[#fbfbfb] mt-14 flex  mb-16 max-md:flex-wrap lg:w-full  rounded-lg justify-between items-center overflow-hidden sticky ">
    
           {/* 1st Blog */}
     <div className="w-full mb-6 md:mb-0 lg:mb-0  bg-[#fbfbfb] border-0 p-2 ">
       <Image width={400} height={400} src="/img/blog/blog4.png" alt="blog-1" className="size-full rounded-t-2xl p-3 transition-all ease-in-out hover:p-2" />
       
      <div className="">
        
        <p className="font-mono p-1 text-md text-gray-800 hover:text-[#f46f30] opacity-75"><span className="text-[#ff6b55] text-2xl font-extrabold">-</span> August 12, 2022 <span className="text-[#ff6b55] font-extrabold">|</span> Grooming</p>
      <h5 className="ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
        Donec Venenatis Exid Nibah Goramt Iaculisoni Or Clonal Interdum.</h5>
      <p className=" text-[#ff6b55] dark:text-gray-400 font-semibold mt-4 ml-4">
         <Link href="" className="text-lg hover:text-black">
          <span className="p-1 rounded-full border-2 hover:text-white hover:bg-black ">Re</span>ad More
         </Link>
       </p>
      </div>
    </div>
    {/* 1st Blog End */}
   
   {/* 2nd Blog */}
   <div className="w-full mb-6 md:mb-0 lg:mb-0  bg-[#fbfbfb] border-0 p-2">
        <Image width={400} height={400} src="/img/blog/blog5.png" alt="blog-1" className="size-full rounded-t-2xl p-3 transition-all ease-in-out hover:p-2" />
      
      <div className="">
        
        <p className="font-mono p-1 text-md text-gray-800 hover:text-[#f46f30] opacity-75"><span className="text-[#ff6b55] text-2xl font-extrabold">-</span> August 12, 2022 <span className="text-[#ff6b55] font-extrabold">|</span> Grooming</p>
      <h5 className="ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
        Donec Venenatis Exid Nibah Goramt Iaculisoni Or Clonal Interdum.</h5>
      <p className=" text-[#ff6b55] dark:text-gray-400 font-semibold mt-4 ml-4">
         <Link href="" className="text-lg hover:text-black">
          <span className="p-1 rounded-full border-2 hover:text-white hover:bg-black ">Re</span>ad More
         </Link>
       </p>
      </div>
    </div>
    {/* 2nd Blog End */}

   {/* 3rd Blog */}
  <div className="w-full mb-0 md:mb-0 lg:mb-0  bg-[#fbfbfb] border-0 p-2">
    <Image width={400} height={400} src="/img/blog/blog6.png" alt="blog-1" className="size-full rounded-t-2xl p-3 transition-all ease-in-out hover:p-2" />
       
      <div className="">
        
        <p className="font-mono p-1 text-md text-gray-800 hover:text-[#f46f30] opacity-75"><span className="text-[#ff6b55] text-2xl font-extrabold">-</span> August 12, 2022 <span className="text-[#ff6b55] font-extrabold">|</span> Grooming</p>
      <h5 className="ml-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
        Donec Venenatis Exid Nibah Goramt Iaculisoni Or Clonal Interdum.</h5>
      <p className=" text-[#ff6b55] dark:text-gray-400 font-semibold mt-4 ml-4">
         <Link href="" className="text-lg hover:text-black">
          <span className="p-1 rounded-full border-2 hover:text-white hover:bg-black ">Re</span>ad More
         </Link>
       </p>
      </div>
    </div>
    {/* 3rd Blog End */}
       </div>
        
          <p className="justify-center text-center items-center">
          <button className="mb-8 w-56 rounded-lg bg-[#ff6b55] h-12 border-t-4 border-l-4 border-t-[#ef9685] border-l-[#ef9685] hover:bg-black hover:border-0 hover:duration-300 hover:border-r-4 hover:border-b-4 hover:border-r-white hover:border-b-white  sticky text-white font-serif font-semibold text-lg">View All Blog</button>

          </p>
    </div>
        </>
    )

}
export default Blogs;