"use client";
import { Textarea, TextInput,Button,Accordion } from "flowbite-react";
import { TiMail } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import Image from "next/image";

function  Contact(){
   
    return(
        <>
       
    <div className="flex mb-10 mt-16 max-sm:flex-wrap max-md:flex-wrap w-full items-center justify-center overflow-hidden sticky  cursor-pointer">
        
        <img className=" absolute opacity-100 size-full" src="img/bg/h2-contact-area.png" alt="bg" />
   

    {/* div card 1st */}
       <div className="w-96">
       {/* <img className=" absolute w-96 h-full opacity-100 " src="img/bg/h2-contact-area.png" alt="bg" /> */}
      
      
      <div className="mt-3 flex ml-9 ">
      <Image width={150} height={150} className=" absolute lg:mt-14 mt-9 p-6" src="/img/icon/contact-title-vec.svg" alt="" />
      </div>
      <h5 className=" sticky lg:mt-8 mt-4 p-6 cursor-text text-5xl font-extrabold  font-mono  text-gray-900 dark:text-white">
      Contact
      </h5>

      <div className=" sticky max-w-96 flex justify-center">
       <form action="" className="mb-10">
             <ul className="mt-6">

                <ul className="flex p-3">
                <li className=" rounded-full mr-2">
                <TextInput className="w-44 rounded-md" type="text" icon={CiUser} placeholder="Enter your name" required />
                </li>
                <li className="">
                <TextInput className="w-44" id="email4" type="email" icon={TiMail} placeholder="Enter your email" required />
                </li>
                </ul>
                
                <li className="">
                <TextInput className=" w-96 p-2" type="text" placeholder="Subject" required />
                </li>

                <li className="p-2">
                <Textarea className="p-6" id="comment" placeholder="Leave a comment..." required rows={4} />
                </li>
             </ul>
             <Button className="flex ml-4 my-4 " type="submit" gradientDuoTone="purpleToPink">Submit</Button>


       </form>
      </div>

    
  </div>
    {/* div card 1st End */}
   

    {/* div card 2nd */}

  <div className=" sticky max-w-sm flex justify-center text-center ">
     {/* <img className=" absolute w-full h-full opacity-100  " src="img/bg/h2-contact-area.png" alt="bg" /> */}
      <div  className=" lg:p-10 p-8 md:p-6 -translate-y-10 ">
      <Image width={400} height={400} className=" sticky " src="/img/bg/h2-contact-img.png" alt="" />
    </div>
  </div>
    {/*div  card 2nd End */}


 {/*div card 3rd */}

 <div className="w-96">
         {/* <img className=" absolute w-96 h-full opacity-100 " src="img/bg/h2-contact-area.png" alt="bg" /> */}
      <div  className="">
      <div className="lg:mt-3 flex">
      <Image width={150} height={150} className=" absolute lg:mt-20 mt-6 p-6" src="/img/icon/contact-title-vec.svg" alt="" />
      </div>
      <h5 className=" sticky lg:mt-12 p-6 ml-3 cursor-text text-5xl font-extrabold  font-mono text-gray-900 dark:text-white">
       FAQ
      </h5>

     <div className=" sticky mt-6 lg:mb-16 mb-20">
     <Accordion collapseAll className=" border-0 ">
        {/* 1 */}
      <Accordion.Panel>
        <Accordion.Title className="hover:bg-transparent rounded-2xl">01. In Et Finibus Lectus. Donec Scelerisque Tortor?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal
           molestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna. Vivamus blandit,
          </p>
        </Accordion.Content>
      </Accordion.Panel>
     
     {/* 2 */}
      <Accordion.Panel>
        <Accordion.Title className="hover:bg-transparent rounded-2xl">02. Rhoncus Turpis Porta Non Curabitur Interdum?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal molestie vulputate 
          in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna. Vivamus blandit, 
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* 3 */}
      <Accordion.Panel>
        <Accordion.Title className="hover:bg-transparent rounded-2xl">03. Donec Ac Enim Vitae Ligula Ultrices Accum?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem 
          quis massal molestie vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna. Vivamus blandit,
           </p>
        </Accordion.Content>
      </Accordion.Panel>

       {/* 4 */}
      <Accordion.Panel>
        <Accordion.Title className="hover:bg-transparent rounded-2xl">04. Donec Ac Enim Vitae Ligula Ultrices Accum?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Pellentesque maximus augue orci, quis congue purus iaculis id. Maecenas eudocl lorem quis massal molestie 
          vulputate in sit amet diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin urna. Vivamus blandit,
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      
    </Accordion>

     </div>
  


    </div>
  </div>
   
    {/* div card 3rd End */}

  </div>



        </>
    );
}
export default Contact;
