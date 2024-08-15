"use client";

import Link from "next/link";
import Image from "next/image";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer(){
    return(
        <>
    <div className="  bg-[#fff5ed] overflow-hidden">
            
    <Image width={1200} height={1000} className=" overflow-hidden absolute lg:h-96 flex min-h-full" src="/img/bg/footer-bg.png" alt="" />
          
    <div className=" absolute lg:text-center lg:justify-center items-center  lg:translate-x-96 translate-x-3   lg:translate-y-16 ">
    <Image width={80} height={80} className="hidden lg:block translate-x-80" src="/img/icon/footer-tt-vec.svg" alt="" />
    <h1 className="lg:text-center  mt-12 h-full  text-3xl lg:text-4xl  font-serif font-extrabold text-[#001d23] dark:text-white cursor-text">
    Want <span className="font-normal">To Keep</span>
     </h1>
    <h1 className="lg:text-center lg:mb-12 p-2 text-3xl lg:text-4xl flex flex-wrap font-serif font-extrabold text-[#001d23] dark:text-white">
    Your Pet In, <span className="font-normal">Our Center</span>?
     </h1>
     <div className="justify-center lg:text-center items-center  sticky ">
          <button className="mb-2 w-44 mt-6 rounded-lg bg-[#ff6b55] h-14 border-t-4 border-l-4 border-t-[#ef9685] border-l-[#ef9685]
           hover:bg-black hover:border-0 hover:duration-300 hover:border-r-4 hover:border-b-4 hover:border-r-white hover:border-b-white  text-white font-serif font-semibold text-lg sticky">
            Book Now
            </button>
          </div>
</div>  

 <div className="flex max-sm:translate-y-60   lg:p-20 p-4 max-md:flex-wrap lg:w-full lg:justify-between overflow-hidden sticky ">
    
    {/* 1st */}
    <div className=" font-serif p-6 lg:p-0">
    <h1 className="p-3 text-3xl font-serif font-semibold text-[#8a8a8a]">Contacts</h1>
     <div className=" size-full flex justify-start  sticky"> 
      <div>
      <Image width={25} height={25} className=" absolute  -translate-x-8 translate-y-6" src="/img/icon/phone-icon.svg" alt="" />
            <ul className="">
                <li className="p-1">
                    <a href="tel:+880 176 1111 456">+880 176 1111 456</a>
                </li>
                <li className="p-1 mb-2">
                <a href="tel:+880 170 1111 000">+880 170 1111 000</a>
                </li>
                <Image width={25} height={25} className="absolute  -translate-x-8 translate-y-5" src="/img/icon/envelope.svg" alt="" />
            
                <li className="p-1">
                    <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li className="p-1 mb-2">
                <a href="mailto:info@support.com">info@support.com</a>
                </li>

                <Image width={25} height={25} className="absolute  -translate-x-8 translate-y-4" src="/img/icon/location.svg" alt="" />
            
                <li className="p-1">
                    <a >168/170, Avenue 01, Mirpur</a>
                </li>
                <li className="p-1">
                <a >DOHS, Bangladesh</a>
                </li>
            
            </ul>
      </div>
 
     </div>
     </div>
     {/* 3 rd */}
    
    <div className="font-serif font-semibold mb-16 lg:mb-20">
    <h1 className="lg:p-4 p-1 text-3xl font-serif font-semibold text-[#8a8a8a] ">Opening Hours</h1>
     
    <div className=" w-full flex justify-end  sticky">
        
        <div className="mb-14">
            <h1 className="p-1">Mon - Fri: 9.00AM - 6.00PM</h1>
            <h1 className="p-1">Saturday: 9.00AM - 6.00PM</h1>
            <h1 className="p-1">Sunday: Closed</h1>

             {/* social icon */}
      <div className="  inset-0 flex rounded-full items-center justify-between p-4">
       <ul className="mt-8 flex h-full w-full justify-between">

        <li className="sticky hover:text-[#ff6b55] ">
          <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55]  text-center">.</li>

         <li className="sticky hover:text-[#ff6b55] ">
          <Link href="">
          <FaPinterestP/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55]  text-center">.</li>

        <li className="sticky hover:text-[#ff6b55] "> 
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>

        <li className="sticky hover:text-[#ff6b55]  text-center">.</li>

        <li className="sticky hover:text-[#ff6b55]">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>

       </ul>
     </div>
      {/* End Social icon */}
        </div>
     </div>
    </div>

         </div>

  <div className="flex justify-between p-8 sticky font-serif translate-y-8 lg:translate-y-0 bg-[#fff5ed] mt-6 lg:mt-0 overflow-hidden">
    <div className="text-sm">
       <h1>© 2023 Scooby Is Proudly Powered By 
        <a href="" className="ml-2">Egens Lab.</a>
       </h1>
    </div>

    <div className=" mr-8 sticky hidden lg:block  ">
        <div className=" text-xs flex ">
            <h1 className="mr-4"><a href=""> PRIVACY POLICY</a></h1>
           <h1 className="mr-4"> <a href="">TERMS & CONDITIONS</a></h1>
            <h1 className="mr-4"><a href="">SERVICES</a></h1>
           <h1> <a href=""> HELP</a></h1>
        </div>
    
    </div>
  </div>
   </div>
   
        </>
    )
}
export default Footer;
