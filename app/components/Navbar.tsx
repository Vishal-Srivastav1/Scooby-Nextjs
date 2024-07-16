"use client";
import Link from "next/link";
import React, { useState } from "react";
import {Dropdown,Accordion,Button,Popover,Tooltip} from "flowbite-react";
function Navbars() {
    
    const [isClick, setisClick] = useState(false);
    const [accordionOpen, setAccordianOpen]= useState(false);
      const toggle = ():void => {
       
            setisClick(!isClick);
      };
    return (
        <>
      <nav className="bg-white font-serif pt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
             <Link href="">
              <img src="img/header2-logo.svg" className="mr-3 h-6 sm:h-9" alt="Scooby Logo" />
              {/* <span className="self-center whitespace-nowrap text-xl font-semibold ">Flowbite React</span> */}
             </Link>
              </div>
            </div>
            <div className="hidden md:block">
    <div className="ml-4 flex items-center space-x-6 ">
               
        <div className="hidden lg:block">
        <img src="img/icon/h2-menu-active-icon.svg" className="ml-4 absolute mt-6" alt="" />
        <Dropdown label="Home" inline className="bg-white  text-black  mt-6 hover:block">
      <Link href="#"><Dropdown.Item className=" text-black hover:text-amber-800">Home one</Dropdown.Item>  </Link>
      <Link href="#"><Dropdown.Item className=" text-black hover:text-amber-800">Home Two</Dropdown.Item></Link>
      <Link href="#"><Dropdown.Item className=" text-black hover:text-amber-800">Home Three</Dropdown.Item></Link>
      </Dropdown> 
     </div>

     <div className="hidden lg:block">
     <Link href="#">About</Link>
     </div>
    

     <div className=" hidden lg:block">
     <Dropdown label="Services" inline className="bg-white text-black  mt-6 hover:block">
     <Link href="#">  <Dropdown.Item className="   text-black hover:text-amber-800">Daycare</Dropdown.Item>  </Link>
     <Link href="#">  <Dropdown.Item className="  text-black hover:text-amber-800">Grooming</Dropdown.Item></Link>
     <Link href="#">  <Dropdown.Item className="  text-black hover:text-amber-800">Bording</Dropdown.Item></Link>
     <Link href="#">  <Dropdown.Item className="  text-black hover:text-amber-800">Veterinary</Dropdown.Item></Link>
      </Dropdown> 
     </div>
                
     <div className="">
      <Dropdown label="Pages" inline className="bg-white text-black  mt-6 hover:block">
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Pricing Plan</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Our Team</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Gallery</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Faq</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Error</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Login</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Sign Up</Dropdown.Item></Link>
      </Dropdown> 
     </div>

     <div className="">
      <Dropdown label="Shop" inline className="bg-white text-black  mt-6 hover:block">
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Shop</Dropdown.Item>         </Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Shop Details</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Cart</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Check Out</Dropdown.Item></Link>
      </Dropdown> 
     </div>

     <div className="">
      <Dropdown label="Blog" inline className="bg-white text-black  mt-6 hover:block">
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Blog Grid</Dropdown.Item>          </Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Blog Grid SlideBar</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Blog Standard</Dropdown.Item></Link>
      <Link href="#"> <Dropdown.Item className="  text-black hover:text-amber-800">Blog Details</Dropdown.Item></Link>
      </Dropdown> 
     </div>

     <Link href="#">Contact</Link>

    <Tooltip content={ 
      <form action="">
              <div className="flex text-black bg-white w-64 border-white bg-transparent">
              <input className="bg-black text-white" type="text" id="search" name="search" placeholder="Your Search..." />
              <Button type="submit" className="bg-transparent mr-6 opacity-40 rounded-none text-black "> 
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              </Button>
              </div>
            </form> 
          } placement="bottom">
        <Button className="bg-transparent text-black hover:bg-white opacity-40">
        <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
        </Button>
      </Tooltip>


          <Link href="#">
          <button type="button" className="flex text-sm ring-1 ring-[#ff6b55] rin bg-white hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
            <svg className="w-9 h-7 mt-1 text-gray-800   hover:text-[#f6f6f6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 26 26">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
           </svg>

        </button>       
      </Link>

        <Link href="#">
        <button type="button" className="flex text-sm bg-white ring-1 ring-[#ff6b55] hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
        
        <svg className="w-9 h-8 mt-1 text-gray-800 hover:text-[#f6f6f6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 26 26">
        <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
        </svg>
        </button>
        </Link>
       
        <Link href="#">
        <button type="button" className="flex text-sm ring-1 ring-[#ff6b55] bg-white hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
        
         <svg className="w-9 h-8 mt-1 text-gray-800  hover:text-[#f6f6f6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 26 26">
         <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
           </svg>
           </button>
      </Link>

           

</div>
            </div>
            <div className="md:hidden  flex items-center">
              <button  onClick={toggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-black
              md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" 
              
               >
               
               {isClick ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"  stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
               ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
               )}
                </button>           
             </div>
          </div>
        </div>
        {isClick && (
                      
          <div className="md:hidden w-80 bg-white">
          
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
             
              {/* accodion start */}
      
              <Accordion collapseAll>
             <Accordion.Panel>
        <Accordion.Title>Home</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
              <a href="" className=" rounded-lg p-2 hover:mx-2">Home One</a>
                <a href="" className=" block p-2 hover:mx-2">Home Two</a>
                <a href="" className="block p-2 hover:mx-2">Home Three</a>
              </div>
        </Accordion.Content>
      </Accordion.Panel>
 
      <Accordion.Panel>
        <Accordion.Title>Service</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
              <Link href="" className=" block p-2 hover:mx-2">Daycare</Link>
              <Link href="" className=" block p-2 hover:mx-2">Grooming</Link>
              <Link href="" className="block p-2 hover:mx-2">Boarding</Link>
              <Link href="" className="block p-2 hover:mx-2">Veterinary</Link>
              </div>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Pages</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
        <Link href="" className=" rounded-lg p-2 hover:mx-2">Pricing Plan</Link>
        <Link href="" className=" block p-2 hover:mx-2">Our Team</Link>
        <Link href="" className="block p-2 hover:mx-2">Gallery</Link>
        <Link href="" className="block p-2 hover:mx-2">Faq</Link>
        <Link href="" className="block p-2 hover:mx-2">Error</Link>
        <Link href="" className="block p-2 hover:mx-2">Login</Link>
        <Link href="" className="block p-2 hover:mx-2">Sign Up</Link>
              </div>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Shop</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
        <Link href="" className=" rounded-lg p-2 hover:mx-2">Shop</Link>
        <Link href="" className=" block p-2 hover:mx-2">Shop Details</Link>
        <Link href="" className="block p-2 hover:mx-2">Cart</Link>
        <Link href="" className="block p-2 hover:mx-2">Check Out</Link>
              </div>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Blog</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
        <Link href="" className=" rounded-lg p-2 hover:mx-2">Blog Grid</Link>
        <Link href="" className=" block p-2 hover:mx-2">Block Grid Sidebar</Link>
        <Link href="" className="block p-2 hover:mx-2">Blog Standard</Link>
        <Link href="" className="block p-2 hover:mx-2">Blog Details</Link>
              </div>
        </Accordion.Content>
      </Accordion.Panel>
      
      
    </Accordion>

              {/* accordian new End */}

    <div className="items-center text-center ">  
              <div className="overflow-hidden  text-gray-500 dark:text-gray-400">
          <Link href="" className=" rounded-lg p-2 hover:mx-1">Contact Us</Link>
      </div>
      <div className="pt-4">
        <span>Click to Call</span>
        <h1 className="text-lg font-mono font-semibold">+1(541)754-3010</h1>
      </div>
      
        {/* icons */}

      <div className="overflow-hidden pt-2 flex ml-20 text-gray-500 dark:text-gray-400">
      <Link href="#">
          <button type="button" className="flex text-sm bg-white hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
            <svg className="w-9 h-8 mt-1 text-gray-800   hover:text-[#f6f6f6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 26 26">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
           </svg>

        </button>       
      </Link>

        <Link href="#">
        <button type="button" className="flex text-sm ml-4 bg-white hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
        <svg className="w-8 h-7 mt-1 text-gray-800 hover:text-[#f6f6f6]" width="16" height="13" viewBox="0 0 16 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6365 5.46266C15.6365 5.12721 15.3541 4.84336 15.0202 4.84336H13.274L10.5262 1.07601C10.2694 0.688956 9.75576 0.611544 9.39624 0.895386C9.01104 1.15342 8.934 1.6695 9.21648 2.03075L11.2452 
        4.84336H5.21036L7.2391 2.03075C7.52158 1.6695 7.44454 1.15342 7.05934 0.895386C6.69982 0.611544 6.18621 
        0.688956 5.92941 1.07601L3.18163 4.84336H1.46105C1.10153 4.84336 0.844727 5.12721 0.844727 5.46266V5.87552C0.844727 6.23677 1.10153 6.49481 1.46105 6.49481H1.66649L2.33418 11.2169C2.41122 11.8362 2.92482 
        12.2749 3.54115 12.2749H12.9144C13.5308 12.2749 14.0444 11.8362 14.1214 11.2169L14.8148 6.49481H15.0202C15.3541 6.49481 15.6365 6.23677 15.6365 5.87552V5.46266ZM8.85696 10.0041C8.85696 10.3654 8.57447 10.6234
         8.24063 10.6234C7.88111 10.6234 7.6243 10.3654 7.6243 10.0041V7.1141C7.6243 6.77865 7.88111 6.49481 8.24063 6.49481C8.57447 6.49481 8.85696 6.77865 8.85696 7.1141V10.0041ZM11.7331 10.0041C11.7331 10.3654 11.4507 
         10.6234 11.1168 10.6234C10.7573 10.6234 10.5005 10.3654 10.5005 10.0041V7.1141C10.5005 6.77865 10.7573 6.49481 11.1168 6.49481C11.4507 6.49481 11.7331 6.77865 11.7331 7.1141V10.0041ZM5.98077 10.0041C5.98077 10.3654 
         5.69829 10.6234 5.36445 10.6234C5.00492 10.6234 4.74812 10.3654 4.74812 10.0041V7.1141C4.74812 6.77865 5.00492 6.49481 5.36445 6.49481C5.69829 6.49481 5.98077 6.77865 5.98077 7.1141V10.0041Z" />
        </svg>
        </button>
        </Link>
       
        <Link href="#">
        <button type="button" className="flex text-sm ml-4 bg-white hover:bg-[#ff6b55]  rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"  aria-expanded="true">
        
         <svg className="w-9 h-8 mt-1 text-gray-800  hover:text-[#f6f6f6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 26 26">
         <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
           </svg>
           </button>
      </Link>

      </div>
         
      <div className="inline-flex items-center justify-center mt-3 text-center  ">
                <form action="">
            <input className="caret-transparent" type="text"  placeholder="Search here..."/>
            <Button className="font-semibold ml-14 mt-1 shadow-2xl " gradientDuoTone="redToYellow">Submit</Button>
            </form>
         </div>
     
    
      </div>
      
      {/* icon end */}
      
            </div>
          </div>
        )}
      </nav>
      </>
   

    );
};
 
export default Navbars;
