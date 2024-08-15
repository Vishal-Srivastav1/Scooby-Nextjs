"use client";

import Link from "next/link";
import Image from "next/image";
function ChooseUs(){

    return (
       <>
        {/* Start card */}
<div className=" bg-[#f5f2fc] w-full items-center justify-center overflow-hidden transition-transform ">
       
        {/* Card 2*/} 


   <div className="">
     <h1 className="text-center mt-16 text-4xl lg:text-6xl  tracking-tighter font-mono font-extrabold text-[#001d23] dark:text-white">
     Why Choose Us
      </h1>
      <div className="mt-8">
        
      <p className="text-center justify-center mx-16 text-2xl font-sans font-semibold text-[#253d4e]">
        Enjoy Your Holiday We Can Keep Them Happy <Link className="text-[#ff6b55] underline" href=" ">Your Pet Our Priority</Link> Happy Pets,
        </p>
        <p className="p-2 text-center justify-center mx-16 text-2xl font-sans font-semibold text-[#253d4e]">
             Happy Humans We Are The Best Of This Country We Are Always Ready For Your Pet.
        </p>

      </div>
        </div> 
   
   <br />
   <br />
   <div className="flex mb-6 max-sm:flex-wrap max-md:flex-wrap w-full items-center justify-center overflow-hidden transition-transform sticky ">
   
   <div className="">
   <Image width={45} height={45} className=" lg:mt-8 ml-6 lg:ml-4 " src="/img/icon/care2.svg" alt="bg" /> 
   <h1 className="font-extrabold ml-4 lg:ml-4 font-mono text-2xl mt-4">Personalized Care</h1>
   <h4 className="text-[#ff6b55] lg:mb-16 mb-8 ml-4 lg:ml-4">Pellentesque maximus augue orci,&nbsp; &nbsp; quis congue purus iaculison</h4>
   </div>

   <div className="">
   <Image width={45} height={45} className=" lg:mt-8 ml-6 lg:ml-0 " src="/img/icon/team2.svg" alt="bg" /> 
   <h1 className="font-extrabold ml-4 lg:ml-0 font-mono text-2xl mt-4">Trusted Team</h1>
   <h4 className="text-[#ff6b55] lg:mb-16 mb-8 ml-4 lg:ml-0">Pellentesque maximus augue orci,&nbsp; &nbsp; quis congue purus iaculison</h4>
   </div>

   <div className="">
   <Image width={45} height={45} className=" lg:mt-8 ml-6 lg:ml-0 " src="/img/icon/mind2.svg" alt="bg" /> 
   <h1 className="font-extrabold ml-4 lg:ml-0 font-mono text-2xl mt-4">Peace Of Mind</h1>
   <h4 className="text-[#ff6b55] ml-4 lg:ml-0 lg:mb-16 mb-8">Pellentesque maximus augue orci,&nbsp; &nbsp; quis congue purus iaculison</h4>
   </div>

   <div className="">
   <Image width={45} height={45} className=" lg:mt-8 ml-6 lg:ml-0 " src="/img/icon/care2.svg" alt="bg" /> 
   <h1 className="font-extrabold ml-4 lg:ml-0 font-mono text-2xl mt-4">Nice Environment</h1>
   <h4 className="text-[#ff6b55] lg:mb-16 ml-4 lg:ml-0 mb-3">Pellentesque maximus augue orci,&nbsp; &nbsp; quis congue purus iaculison</h4>
   </div>

   </div>

    {/*  choose images */}
   <div className="flex p-10 mt-4 mb-24 w-full items-center justify-between overflow-hidden transition-transform bg-[#fbfbfb]  sticky ">
  
  <p className="w-full flex justify-center">
  <Image width={110} height={110} className="" src="/img/icon/partner/arrow.svg" alt="bg" /> 
  </p>
  
   <p className="w-full max-sm:hidden">
   <Image width={110} height={110} className="" src="/img/icon/partner/avianca.svg" alt="bg" /> 
   </p>
   
   <p className="w-full lg:block md:block">
   <Image width={110} height={110} className="" src="/img/icon/partner/envato.svg" alt="bg" />
    </p> 
   
    <p className="w-full hidden lg:block">
    <Image width={110} height={110} className=" " src="/img/icon/partner/olinski.svg" alt="bg" />
    </p> 
   
    <p className="w-full hidden lg:block md:block">
    <Image width={110} height={110} className="" src="/img/icon/partner/ozgeo.svg" alt="bg" />
    </p> 
   
    <p className="w-full hidden lg:block">
    <Image width={110} height={110} className="" src="/img/icon/partner/xidex.svg" alt="bg" /> 
   </p>

   </div>
    {/* End choose images */}
     
    </div>
    
      {/* end card */}
       
       
       </>

    );
};
export default ChooseUs;