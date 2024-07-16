"use client";

import { Card,Carousel } from "flowbite-react";

function Customer(){
     return (
        <>
        
           <div className=" lg:mb-10   bg-[#ffffff] w-full items-center justify-center overflow-hidden transition-transform ">
       
    {/* Card 2*/} 
  <div className="">
    <h1 className="text-center lg:mt-12 mt-8 text-2xl lg:text-5xl  font-sans font-extrabold text-[#001d23] dark:text-white">
    What Our Customer Say
     </h1>
</div> 
  
  <br />
  <br />
  
  <div className="bg-[#f3f3f3]  mt-4 flex  mb-8 max-md:flex-wrap lg:w-full ml-4 lg:ml-0 mr-4 lg:mr4 rounded-lg justify-between overflow-hidden sticky cursor-pointer">
     <img src="" alt="" />
     {/* 1 st */}
     <div className=" w-full flex justify-center items-center sticky">
      <div className=" p-8 ">
        <div className="flex">
        <img src="img/icon/truspilot.svg" alt="" /> <span className="mt-3 ml-3 font-semibold">Rating</span>
        </div>
          <p className=""><span>⭐⭐⭐⭐⭐</span> 190 reviews</p>
      </div>
     </div>
    {/* 2 nd */}
     <div className="p-6 w-full flex justify-center items-center sticky"> 
     <img className=" absolute" src="img/icon/total-review-star.svg" alt="" />
      <h1 className="text-3xl font-extrabold">4.9</h1>
     </div>

     {/* 3 rd */}
     <div className=" w-full flex justify-center items-center lg:mr-8 sticky">
      <div className="p-8">
     
      {/* total-review-star.svg */}
        <div className="flex">
        <img src="img/icon/google.svg" alt="" /> <span className="mt-2 ml-3 font-semibold">Rating</span>
        </div>
          <p className=""><span>⭐⭐⭐⭐⭐</span> 390 reviews</p>
      </div>
     </div>

   </div>

   
    <div className="flex h-full mb-12 mt-16 max-sm:flex-wrap max-md:flex-wrap w-full items-center justify-center overflow-hidden sticky  cursor-pointer bg-[#fbfbfb]">
    
      {/* card 1st */}
      {/* h2-testimonial-vec-right.svg */}
      {/* h2-testimonial-vec-left.svg */}
      {/* left-quat.svg */}
      {/* right-quat.svg */}
    <div className="w-full ml-6 mr-6 lg:ml-6 lg:mr-6 md:ml-1 md:mr-0 mb-8 lg:mb-0 bg-[#ffffff]">
    
    <Card className="">
      
          <div className=" flex justify-between">
          <img className="" src="img/icon/left-quat.svg" alt="" />
            <img className=" sticky flex justify-end " src="img/icon/h2-testimonial-vec-right.svg" alt="" />
          </div>
        
        <h5 className=" cursor-text text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mt-2 mb-6">
        Sebastian Ethan
        </h5>
        <p className=" cursor-text font-mono tracking-tight justify-center items-center text-center text-gray-700 dark:text-gray-400 mb-2 mt-2">
        Pellentesque maximus augue orci, quisdal andosp Pellentesque maximus augue orci, quisoki congue Nullam egestas, nisi id mollis elementum.
        </p>
        <div className=" flex justify-between">
          <img className="" src="img/icon/h2-testimonial-vec-left.svg"  alt="" />
            <img className=" sticky flex justify-end " src="img/icon/right-quat.svg" alt="" />
          </div>
      </Card>
      <div className="flex justify-center items-center text-center">
              <img className="flex rounded-full p-6" src="img\bg\h2-testi-1.png" alt="" />
      </div>
    
    </div>

      {/* End card 1st */}

  {/* card 2nd */}
  
  <div className="w-full ml-6 mr-6 lg:ml-6 lg:mr-6 md:ml-1 md:mr-1 mb-8 lg:mb-0  ">
  
    <Card  className=" ">
    <div className=" flex justify-between">
          <img className="" src="img/icon/left-quat.svg" alt="" />
            <img className=" sticky flex justify-end " src="img/icon/h2-testimonial-vec-right.svg" alt="" />
      </div>
        <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white cursor-text mt-2 mb-6">
        Anthony Dylan
        </h5>
        <p className="font-mono tracking-tight justify-center items-center text-center text-gray-700 dark:text-gray-400 cursor-text mb-2 mt-2">
        Pellentesque maximus augue orci, quisdal andosp Pellentesque maximus augue orci, quisoki congue Nullam egestas, nisi id mollis elementum.
        </p>
        <div className=" flex justify-between">
          <img className="" src="img/icon/h2-testimonial-vec-left.svg"  alt="" />
            <img className=" sticky flex justify-end " src="img/icon/right-quat.svg" alt="" />
          </div>
      </Card>
      <div className="flex justify-center items-center text-center">
              <img className="flex rounded-full p-6" src="img\bg\h2-testi-2.png" alt="" />
            </div>
    
    </div>
  
      {/* card 2nd End */}
    

    </div>
  
</div>

        </>
     );
};
export default Customer;
