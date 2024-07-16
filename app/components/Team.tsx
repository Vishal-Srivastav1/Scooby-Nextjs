"use client";
import { Carousel,Tooltip,Button } from "flowbite-react";
import Link from "next/link";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

function Team(){
    return (
        <>
        
          {/* --------------------------- */}
<div className=" ml-1  mr-1 justify-between items-center bg-[#fef8ef]  ">
   <div className="justify-end items-end flex">
   <img className=" absolute flex translate-y-52" src="img/bg/team/team-vector-1.png" alt="" />
    
   </div>
    <div className="">
    <h1 className="text-center mt-4 lg:p-10 lg:mb-12  text-2xl lg:text-5xl  font-sans font-extrabold text-[#001d23] dark:text-white">
    Our Best Working Team
     </h1>
</div>  

<Carousel indicators={true} slideInterval={4000} leftControl={true} rightControl={true} className="sm:h-96 max-sm:h-96 lg:h-96 w-full mb-16 overflow-hidden">
 <div className="grid h-auto grid-cols-4 lg:grid-cols-5  gap-2  justify-around">
     
     {/* 1st team card start*/}
     <div className="ml-4 md:ml rounded-lg bg-[#ffffff]  transition-transform max-sm:w-48 max-md:w-36 ">
      <div className=" translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-3.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-6">Jackson Mateo</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Veterinary Assistant</h5>
      </div>

      <div className=" hidden md:block absolute p-2  opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-3.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0 ">Jackson Mateo</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Veterinary Assistant</h5>
      </div>
      </div>
      {/* 1st team card End */}

      {/* 2nd team card start */}
      <div className=" hidden sm:block md:ml-4 ml-16 rounded-lg bg-[#ffffff]  transition-transform max-md:w-36">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-4.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Madison Ellie</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Groomer Manager</h5>
      </div>

      <div className="hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-4.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Madison Ellie</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Groomer Manager</h5>
      </div>
      </div>
      {/* 2nd team card End      */}
     
     {/* 3rd team card start */}
     <div className=" hidden sm:block md:ml-4 ml-20 rounded-lg bg-[#ffffff]  transition-transform max-md:w-36">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-2.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Scarlett Emily</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Kennel Assistant</h5>
      </div>

      <div className="hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-2.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Scarlett Emily</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Kennel Assistant</h5>
      </div>
      </div>
      {/* 3rd team card End      */}
 
  {/* 4th team card start */}
  <div className="md:ml-4 ml-24 rounded-lg bg-[#ffffff]  transition-transform max-sm:w-48 max-sm:ml-36 max-md:w-36 ">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-1.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Kash Preston</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Co-Founder</h5>
      </div>

      <div className=" hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-1.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Kash Preston</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Co-Founder</h5>
      </div>
      </div>
      {/* 4th team card End      */}
      


 {/* 5th team card start */}
 <div className="ml-4 hidden lg:block rounded-lg bg-[#ffffff]  transition-transform ">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md translate-x-3 -translate-y-3 hover:translate-x-4 hover:translate-y-24 " src="img/bg/team/h2-team-5.png" alt="..." />
      <h1 className="transition  translate-x-3 font-mono hover:-translate-y-56 text-2xl mt-2">Gorjona Hiller</h1>
      <h5 className="transition  mt-2 translate-x-3 mb-6 hover:-translate-y-52 text-[#f46f30]">Daycare Manager</h5>
      </div>

      <div className=" absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-5.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Gorjona Hiller</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Daycare Manager</h5>
      </div>
      </div>
      {/* 5th team card End      */}
       
    </div>


    {/* 2nd- carousel row------- */}
    <div className="grid h-auto grid-cols-4 lg:grid-cols-5  gap-2  justify-around ">
     
     {/* 1st team card start*/}
      <div className="ml-4 md:ml rounded-lg bg-[#ffffff]  transition-transform max-sm:w-48 max-md:w-36 ">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-3.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-6">Jackson Mateo</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Veterinary Assistant</h5>
      </div>

      <div className=" hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-3.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Jackson Mateo</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Veterinary Assistant</h5>
      </div>
      </div>
      {/* 1st team card End */}

      {/* 2nd team card start */}
      <div className=" hidden sm:block md:ml-4 ml-16 rounded-lg bg-[#ffffff]  transition-transform max-md:w-36">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-4.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Madison Ellie</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Groomer Manager</h5>
      </div>

      <div className="hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-4.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Madison Ellie</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Groomer Manager</h5>
      </div>
      </div>
      {/* 2nd team card End      */}
     
     {/* 3rd team card start */}
     <div className=" hidden sm:block md:ml-4 ml-20 rounded-lg bg-[#ffffff]  transition-transform max-md:w-36">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-2.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Scarlett Emily</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Kennel Assistant</h5>
      </div>

      <div className="hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-2.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Scarlett Emily</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Kennel Assistant</h5>
      </div>
      </div>
      {/* 3rd team card End      */}
 
  {/* 4th team card start */}
  <div className="md:ml-4 ml-24 rounded-lg bg-[#ffffff]  transition-transform max-sm:w-48 max-sm:ml-36  max-md:w-36 ">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md md:translate-x-3 md:-translate-y-3 md:hover:translate-x-4 md:hover:translate-y-24 " src="img/bg/team/h2-team-1.png" alt="..." />
      <h1 className="transition  md:translate-x-3 font-mono md:hover:-translate-y-56 md:text-2xl md:mt-2 mt-8">Kash Preston</h1>
      <h5 className="transition  mt-2 md:translate-x-3 mb-6 md:hover:-translate-y-52 text-[#f46f30]">Co-Founder</h5>
      </div>

      <div className=" hidden md:block absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-1.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Kash Preston</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Co-Founder</h5>
      </div>
      </div>
      {/* 4th team card End      */}
      


 {/* 5th team card start */}
 <div className="ml-4 hidden lg:block rounded-lg bg-[#ffffff]  transition-transform ">
      <div className="translate-y-2 ">
      <img className=" transition rounded-md translate-x-3 -translate-y-3 hover:translate-x-4 hover:translate-y-24 " src="img/bg/team/h2-team-5.png" alt="..." />
      <h1 className="transition  translate-x-3 font-mono hover:-translate-y-56 text-2xl mt-2">Gorjona Hiller</h1>
      <h5 className="transition  mt-2 translate-x-3 mb-6 hover:-translate-y-52 text-[#f46f30]">Daycare Manager</h5>
      </div>

      <div className=" absolute p-2 opacity-0 hover:opacity-100 bg-[#ffffff]  -translate-y-80 rounded-lg">
      <img className="w-56 rounded-md translate-x-3  translate-y-28 " src="img/bg/team/h2-team-5.png" alt="..." />
      <Tooltip className="translate-x-8 translate-y-14 w-28" content={
    <div className="flex ">
        <ul className="flex">
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaFacebookF/>
          </Link>
        </li>
        <li className="sticky  hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaTwitter/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <FaPinterestP/>
          </Link>
        </li>
        <li className="sticky hover:text-[#ff6b55] rounded-full p-1">
        <Link href="">
          <PiInstagramLogoThin/>
          </Link>
        </li>

        </ul>
    </div>
      } style="light" placement="right">
        <Button className=" rounded-se-full translate-x-8 translate-y-14">
            <IoShareSocialSharp/>
        </Button>
      </Tooltip>
      <h1 className="  translate-x-4 font-mono -translate-y-56 text-2xl mt-0">Gorjona Hiller</h1>
      <h5 className="  translate-x-4 mb-0 -translate-y-52 text-[#f46f30]">Daycare Manager</h5>
      </div>
      </div>
      {/* 5th team card End      */}
       
    </div>

    {/* 2nd end--- */}



    </Carousel>

    <div className="hidden lg:block w-full h-4 mb-24">

    </div>
    </div>

   
        </>
    );
};

export default Team;

