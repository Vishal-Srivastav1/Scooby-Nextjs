"use client";
 import { Button, Carousel } from "flowbite-react";
import Link from "next/link";
 function Service() {
   return (
   <>
      
      <div className="flex h-full justify-center sticky lg:-translate-y-28 md:-translate-y-28 mb-16 overflow-hidden ">
       
     <Carousel indicators={false} slideInterval={2000} leftControl={true} rightControl={true} className="sm:h-96 max-sm:h-96 lg:h-96 sm:lg:h-96 justify-between    ">
         {/*--------- 1st Row Start---------- */}
         <div className="grid h-full   w-full lg:grid-cols-5 max-sm:grid-cols-1 sm:grid-cols-3  md:grid-cols-4 justify-between">
  
  {/* 1st card services */}
     <div className=" hidden md:block lg:block w-full h-full items-center justify-center text-center  ">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#f5f2fc] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/bording3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Boarding
 </Link>
 </h3>
  <p className="flex-wrap font-sans text-[#ff6b55] ">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 mb-4 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 "  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 1st card Services End */}

{/* 2nd card services */}
<div className="w-full h-full hidden md:block lg:block items-center justify-center text-center mb-10">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#fbfbfb] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/vetenary3.svg" alt="" />
    </div>  
<h3 className=" text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Vaterinary
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 "  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 2nd card Services End */}

{/* 3rd card services */}
<div className=" w-full h-full items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end opacity-15" src="img/bg/h2-services-title-rt.png" alt="bg" />
         </div>
     <div className=" bg-[#fef8ef] p-10 ">
       <div className="justify-center items-center text-center">
     <h1 className="font-mono  tracking-tighter font-extrabold text-4xl p-2 mt-11 ">See Our</h1>
      <h1 className="font-mono tracking-tighter font-extrabold text-4xl p-2 mt-2">All</h1>
      <img className=" absolute  hidden lg:block justify-items-start " src="img/icon/services-text-vect.svg" alt="bg" />
      <h1 className="font-mono tracking-tighter font-extrabold text-4xl p-4 mt-0 mb-12">Services.</h1>
      
    </div>  

  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start opacity-15" src="img/bg/h2-services-title-lb.png" alt="bg" />
 </div>
 <div className="flex  justify-center">        
 <Button className="p-1 w-48 font-mono font-extrabold" type="submit" gradientDuoTone="redToYellow">Book Your Day</Button>
  </div>
  </div>
  </div>
{/* 3rd card Services End */}

{/* 4th card services */}
<div className=" w-full h-full items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#f5f2fc] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/daycare3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Daycare
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1"  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 4th card Services End */}

{/* 5th card services */}
<div className="w-full h-full  items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#fcf1f1] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/grooming3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Grooming
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 transition-all"  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 5th card Services End */}


         </div>
        {/* ---------------1st Row End------------ */}

         {/*--------- 2nd Row Start---------- */}
   <div className="grid h-full   w-full lg:grid-cols-5 max-sm:grid-cols-1 sm:grid-cols-3  md:grid-cols-4 justify-between">
  
  {/* 1st card services */}
     <div className="w-full h-full items-center justify-center text-center  ">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#f5f2fc] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/bording3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Boarding
 </Link>
 </h3>
  <p className="flex-wrap font-sans text-[#ff6b55] ">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 mb-10 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 "  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 1st card Services End */}

{/* 2nd card services */}
<div className="w-full h-full  items-center justify-center text-center mb-10">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#fbfbfb] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/vetenary3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Vaterinary
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 "  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 2nd card Services End */}

{/* 3rd card services */}
<div className=" w-full h-full items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end opacity-15" src="img/bg/h2-services-title-rt.png" alt="bg" />
         </div>
     <div className=" bg-[#fef8ef] p-10 ">
       <div className="justify-center items-center text-center">
     <h1 className="font-mono  tracking-tighter font-extrabold text-4xl p-2 mt-11 ">See Our</h1>
      <h1 className="font-mono tracking-tighter font-extrabold text-4xl p-2 mt-2">All</h1>
      <img className=" absolute hidden lg:block justify-items-start " src="img/icon/services-text-vect.svg" alt="bg" />
      <h1 className="font-mono tracking-tighter font-extrabold text-4xl p-4 mt-0 mb-12">Services.</h1>
      
    </div>  

  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start opacity-15" src="img/bg/h2-services-title-lb.png" alt="bg" />
 </div>
 <div className="flex  justify-center">        
 <Button className="p-1 w-48 font-mono font-extrabold" type="submit" gradientDuoTone="redToYellow">Book Your Day</Button>
  </div>
  </div>
  </div>
{/* 3rd card Services End */}

{/* 4th card services */}
<div className=" w-full h-full items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#f5f2fc] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/daycare3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Daycare
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1"  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 4th card Services End */}

{/* 5th card services */}
<div className="w-full h-full  items-center justify-center text-center">
         <div className="flex justify-end ">
         <img className=" absolute flex  justify-end" src="img/bg/services-card-vec2.png" alt="bg" />
         </div>
     <div className=" bg-[#fcf1f1] p-12">
       <div className=" flex justify-center ">
       <img className=" mb-5" src="img/icon/grooming3.svg" alt="" />
    </div>  
<h3 className="text-3xl mb-4 font-sans font-medium tracking-tight text-gray-900 dark:text-white">
 <Link href="">
 Grooming
 </Link>
 </h3>
 <p className="flex-wrap font-sans text-[#ff6b55]">Pellentesque maximus augue orciquista uten  aliquet risus In hac  habitasse.</p>
  <div className="flex justify-start">
         <img className=" absolute flex justify-items-start" src="img/bg/services-card-vec2.png" alt="bg" />
 </div>
 <div className="mt-1 font-sans font-semibold ">        
   <Link className="flex items-center justify-center hover:ml-1 hover:mr-1 transition-all"  href="">More Details<img className="flex justify-end hover:ml-5 hover:mr-1 transition-all" src="img/icon/h2-btn-arrow.svg" alt="" />
   </Link>
  </div>
  </div>
  </div>
{/* 5th card Services End */}


   </div>
     {/* ---------------2nd Row End------------ */}
    </Carousel>
   </div>
{/* -----------------------------2nd----------------------------------------- */}
  
     
    
<br />
   </>

   );
      };

 export default Service;