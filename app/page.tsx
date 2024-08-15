"use client";
import Link from "next/link";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
   <>
   <main className="">
   
    <div className=" mt-4 justify-center content-center flex overflow-hidden ">
    {/* Carousel button */}
     <div className=" max-sm:hidden flex inset-0  items-center justify-between p-4 dark:text-white">
      <div className="p-2">
      <button className="items-center block  transition-all w-4 h-4 bg-black rounded-full bg-opacity-30"></button>
      <button className="items-center p-2 transition-all w-4 h-4 bg-black rounded-full bg-opacity-30"></button>
      </div>
     </div>
      {/* End Carousel button */}
       

       {/* ----------------------------------------------- */}
             {/* Card page */} 
     <div className=" w-full  bg-[#f4ede6] lg:hidden max-lg:hidden max-sm:block ">
     <div className="bg-[#f4ede6] p-8 overflow-hidden">
   
   </div>
      <div className=" flex mt-0 mb-0 ml-7">
         <span className="font-mono font-light ml-12 mt-5 flex text-right absolute dark:text-white ">Your Pet Our Family</span>
         <img className="w-64 mr-26 opacity-80"  src="img/icon/hero2-text-vect.svg" alt="img" />
      </div>
    
     <h1 className="ml-7  sticky cursor-text mt-5 p-8 mb-4 flex-wrap text-6xl sm:text-5xl tracking-tighter font-mono font-extrabold text-[#001d23] dark:text-white">
      Your <span className="text-[#ff6b55] ">Pet</span> is Part Of Our Family.
      </h1>
    <div className="flex mb-2 bg-[#f4ede6] sticky overflow-hidden translate-x-6">
    <button type="submit" className=" w-44 h-12 mb-6 bg-[#ff6b55] tracking-tighter  hover:bg-black rounded-lg mr-6 text-white  
      border-t-4 border-l-4 border-t-[#ef9686] border-l-[#ef9686] hover:border-0 hover:duration-700 hover:border-r-4 hover:border-b-4 hover:border-r-[#f4ede6] hover:border-b-[#f4ede6] sticky font-serif font-semibold text-center
      ">Make a Reservation
     </button>
    
     <button type="submit" className=" w-32 h-12 mb-6 bg-[#001d23] tracking-tighter hover:bg-[#ff6b55] rounded-lg  text-white
        border-t-4 border-l-4 border-t-[#25373a]  border-l-[#25373a]  hover:border-0 hover:border-[#f4ede6] hover:duration-700 hover:border-r-4 hover:border-b-4 hover:border-r-[#f4ede6] hover:border-b-[#f4ede6] sticky font-serif font-semibold text-center
      ">About More
      </button>
     
     </div>
       <div className=" hidden md:block  lg:block bg-[#f4ede6] p-7 max-md:p-8 overflow-hidden">
   
       </div>
   </div>

   {/*  End Card Page */}

       {/* ------------ ----------------------------------- */}
  {/* Start card */}
   <div className="w-full h-full hidden lg:block max-lg:block max-sm:hidden ">
   {/* <img className=" absolute opacity-100" src="img/bg/h2-hero-bg.png" alt="bg" /> */}
       
    <Carousel indicators={false} slideInterval={50} leftControl={true} rightControl={true} className=" lg:h-96 sm:h-64 tr w-full md:mb-16 transition-transform">
      {/* 1st page start Carousel */}
  <div className="flex w-full items-center justify-center overflow-hidden transition-transform">
       <img className=" absolute opacity-100" src="img/bg/h2-hero-bg.png" alt="bg" />
    
        {/* Card 1 */} 
     <div className="w-full  bg-[#f4ede6]">
     <div className="bg-[#f4ede6] p-8 overflow-hidden">
   
   </div>
      <div className=" flex sm:mt-20 lg:mb-8 mb-2 lg:ml-8 p-8 lg:p-0">
         <span className="font-mono font-light translate-x-14 lg:translate-x-16 lg:translate-y-7 sm:-translate-y-6 flex mt-2 lg:mt-3 text-right absolute dark:text-white sm:text-xs md:text-lg ">Your Pet Our Family</span>
         <img className="lg:w-64 sm:w-34 sm:-translate-y-8 lg:translate-y-6 lg:mr-26 sm:translate-x-6 opacity-80"  src="img/icon/hero2-text-vect.svg" alt="img" />
      </div>
    
     <h1 className="ml-7 sticky -translate-y-8 md:translate-x-8 lg:translate-x-0 lg:-translate-y-0 cursor-text lg:mt-12 lg:p-8 lg:mb-8 flex-wrap lg:text-6xl md:text-3xl sm:text-2xl tracking-tighter font-mono font-extrabold text-[#001d23] dark:text-white ">
      Your <span className="text-[#ff6b55] ">Cat</span> <span className="text-[#ff6b55] hidden">Pet</span> is Part Of Our Family.
      </h1>
   
       <div className=" hidden md:block  lg:block bg-[#f4ede6] p-7 max-md:p-8 overflow-hidden">
   
       </div>
   </div>

   {/*  End 1st Card  */}


   {/* Card 2 */}
   <div className="rounded-none border-0 bg-[#f4ede6]  w-full">
   <div className=" flex mt-6">
         <img className="mb-3 md:p-12 lg:p-14  md:mb-8  md:translate-y-10  md:-translate-x-7 opacity-100"  src="img/bg/hero2-img-cat.png" alt="img" />
       </div>

    </div>
     
    </div>

    {/* 1st page End Carousel */}
      
     {/* ---------------------------------------------- */}

    {/* 2nd Page start Carousel */}
       <div className="flex w-full items-center justify-center overflow-hidden transition-transform">
       <img className=" absolute opacity-100" src="img/bg/h2-hero-bg.png" alt="bg" />
    
        {/* Card 1 */} 
     <div className="w-full  bg-[#f4ede6]">
     <div className="bg-[#f4ede6] p-8 overflow-hidden">
   
   </div>
      <div className=" flex sm:mt-20 lg:mb-8 mb-2 lg:ml-8 p-8 lg:p-0">
         <span className="font-mono font-light translate-x-14 lg:translate-x-16 lg:translate-y-7 sm:-translate-y-6 flex mt-2 lg:mt-3 text-right absolute dark:text-white sm:text-xs md:text-lg ">Your Pet Our Family</span>
         <img className="lg:w-64 sm:w-34 sm:-translate-y-8 lg:translate-y-6 lg:mr-26 sm:translate-x-6 opacity-80"  src="img/icon/hero2-text-vect.svg" alt="img" />
      </div>
    
     <h1 className="ml-7 sticky -translate-y-8 md:translate-x-8 lg:translate-x-0 lg:-translate-y-0 cursor-text lg:mt-12 lg:p-8 lg:mb-8 flex-wrap lg:text-6xl md:text-3xl sm:text-2xl tracking-tighter font-mono font-extrabold text-[#001d23] dark:text-white ">
      Your <span className="text-[#ff6b55]">Pet</span> is Part Of Our Family.
      </h1>
   
       <div className=" hidden md:block  lg:block bg-[#f4ede6] p-7 max-md:p-8 overflow-hidden">
   
       </div>
   </div>

   {/*  End 1st Card  */}


   {/* Card 2 */}
   <div className="rounded-none border-0 bg-[#f4ede6]  w-full">
   <div className=" flex mt-6">
         <img className="mb-3 md:p-12 lg:p-14  md:mb-8  md:translate-y-10  md:-translate-x-7 opacity-100"  src="img/bg/hero2-img.png" alt="img" />
       </div>

    </div>
     
    </div>

       {/* 2nd page End Carousel */}
    </Carousel>
    <div className="flex mb-8  bg-[#f4ede6] md:p-12 md:-translate-y-20   sticky overflow-hidden">
    <img className=" absolute opacity-100" src="img/bg/h2-hero-bg.png" alt="bg" />
    
      <button type="submit" className=" lg:-translate-y-10 ml-5 lg:ml-0 h-12 w-56 mt-4 mb-6 lg:mb-0 lg:mt-3 bg-[#ff6b55] tracking-tighter rounded-lg mr-6 text-white 
      border-t-4 border-l-4 border-t-[#ef9685] border-l-[#ef9685] hover:bg-black hover:border-0 hover:duration-700 hover:border-r-4 hover:border-b-4 hover:border-r-[#f4ede6] hover:border-b-[#f4ede6] sticky font-serif font-semibold text-center
      ">Make a Reservation</button>
      <button type="submit" className=" lg:-translate-y-10 lg:w-36 h-12 mt-4 lg:mt-3 mb-6 bg-[#001d23] tracking-tighter hover:bg-[#ff6b55] rounded-lg  text-white 
       border-t-4 border-l-4 border-t-[#25373a]  border-l-[#25373a]  hover:border-0 hover:border-[#f4ede6] hover:duration-700 hover:border-r-4 hover:border-b-4 hover:border-r-[#f4ede6] hover:border-b-[#f4ede6] sticky font-serif font-semibold text-center
      ">About More</button>
     </div>
     {/*black hover:bg-[#001d23] */}
     </div>
      {/* end card */}




      {/* social icon */}
      <div className=" max-sm:hidden inset-0 flex rounded-full items-center justify-between p-4">
       <ul className="p-2">

        <li className="sticky hover:text-[#ff6b55] mb-4">
          <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55] mb-6 text-center">.</li>

         <li className="sticky hover:text-[#ff6b55] mb-4">
          <Link href="">
          <FaPinterestP/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55] mb-6 text-center">.</li>

        <li className="sticky hover:text-[#ff6b55] mb-4"> 
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55] mb-6 text-center">.</li>

        <li className="sticky hover:text-[#ff6b55]">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>

       </ul>
     </div>
      {/* End Social icon */}
       
    </div>

   
    </main>
    </>


  );
}
