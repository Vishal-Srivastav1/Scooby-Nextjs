"use client";
 import { Card,Button } from "flowbite-react";

function ServicesOption() {

    return (
        <>
                
<div className=" lg:mb-10  bg-[#fbfbfb] w-full items-center justify-center overflow-hidden transition-transform ">
       
       {/* Card 2*/} 


  <div className="">
    <h1 className="text-center lg:mt-24 mt-8 text-1xl lg:text-5xl  font-sans font-extrabold text-[#001d23] dark:text-white">
    Three Step And Enjoy Your Day.
     </h1>
</div> 
  
  <br />
  <br />
  <div className="flex mb-6 max-sm:flex-wrap max-md:flex-wrap w-full items-center justify-center overflow-hidden sticky  cursor-pointer">
    
    {/* card 1st */}
  <div className="w-full ml-6 mr-6 lg:ml-6 lg:mr-6 md:ml-1 md:mr-0 mb-8 lg:mb-0">
  <Card className=" bg-[#ffe1cf] hover:bg-[#ffe1cf]">
  <div className=" justify-end text-end items-end flex  translate-x-12"> 
       <span className=" text-1xl w-20 p-1  font-serif font-semibold mr-10 rounded-lg mb-4 bg-[#fbfbfb] text-[#ff6b55] hover:bg-[#ff6b55] hover:text-white ">Step &nbsp; &nbsp; &nbsp;</span>
        <span className=" text-3xl p-3 font-sans font-extrabold absolute rounded-full bg-[#fbfbfb] hover:bg-[#ff6b55] text-[#ff6b55] hover:text-white">01</span>

    </div>
        <div className="flex items-center justify-center text-center hover:w-16  hover:ml-28 ">
         <img src="img/icon/search2.svg" alt="" />
        </div>
        
      <h5 className=" cursor-text text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
      Select Service
      </h5>
      <p className=" cursor-text font-mono mb-6 tracking-tight justify-center items-center text-center text-gray-700 dark:text-gray-400">
         Read verified reviews by pet owners like you and choose a sitter who’s a great match for you .
      </p>
    </Card>
  </div>

    {/* End card 1st */}
   
   {/* Arrow-icon 1nd */}
<div className=" hidden lg:block">
<img className="p-4 w-20" src="img/icon/contact-title-vec.svg" alt="" />
</div>

    {/* card 2nd */}
<div className="w-full ml-6 mr-6 lg:ml-6 lg:mr-6 md:ml-1 md:mr-0 mb-8 lg:mb-0 ">
  <Card  className=" bg-[#e9f6fb] hover:bg-[#e9f6fb]">
  <div className=" justify-end text-end items-end flex  translate-x-12"> 
    <button className=" flex bg-[#0d6efd] hover:bg-[#ffc226] justify-end rounded-full">
       <span className=" text-1xl w-20 p-1  font-serif font-semibold mr-10 rounded-lg mt-3 bg-[#fbfbfb] text-[#97d2ec] hover:bg-[#97d2ec] hover:text-white ">Step &nbsp; &nbsp; &nbsp;</span>
        <span className=" text-3xl p-3 font-sans font-extrabold absolute rounded-full bg-[#fbfbfb] hover:bg-[#97d2ec] text-[#97d2ec] hover:text-white">02</span>
       </button>
        </div>
        <div className="flex items-center justify-center text-center hover:w-16  hover:ml-28 ">
         <img src="img/icon/appoinment2.svg " alt="" />
        </div>
        
      <h5 className="text-2xl font-bold text-center cursor-text tracking-tight text-gray-900 dark:text-white">
         Book Your Day
      </h5>
      <p className="font-mono mb-6 tracking-tight justify-center items-center text-center text-gray-700 dark:text-gray-400 cursor-text">
         Read verified reviews by pet owners like you and choose a sitter who’s a great match for you .
      </p>
    </Card>
  </div>
    {/* card 2nd End */}
 
 {/* 2nd Arrowicon */}
<div className=" hidden lg:block">
<img className="p-4 w-20" src="img/icon/contact-title-vec.svg" alt="" />
</div>

 {/* card 3rd */}
 <div className="w-full ml-6 mr-6 lg:ml-6 lg:mr-6 md:ml-1 md:mr-1 mb-8 lg:mb-0">
  <Card  className=" bg-[#cfedcf] hover:bg-[#cfedcf]">
  <div className=" justify-end text-end items-end flex  translate-x-12"> 
       <span className=" text-1xl w-20 p-1  font-serif font-semibold mr-10 rounded-lg mb-4 bg-[#fbfbfb] text-[#ff6b55] hover:bg-[#ff6b55] hover:text-white ">Step &nbsp; &nbsp; &nbsp;</span>
        <span className=" text-3xl p-3 font-sans font-extrabold absolute rounded-full bg-[#fbfbfb] hover:bg-[#ff6b55] text-[#ff6b55] hover:text-white">03</span>
    </div>
        <div className="flex items-center justify-center text-center hover:w-16  hover:ml-28 ">
         <img src="img/icon/relax2.svg " alt="" />
        </div>
        
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white cursor-text">
      Have Relax
      </h5>
      <p className="font-mono mb-6 tracking-tight justify-center items-center text-center text-gray-700 dark:text-gray-400 cursor-text">
         Read verified reviews by pet owners like you and choose a sitter who’s a great match for you .
      </p>
    </Card>
  </div>
    {/* card 3rd End */}

  </div>
</div>
        </>
    );
};
export default ServicesOption;