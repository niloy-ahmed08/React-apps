import React from 'react'
import { FaAward } from "react-icons/fa";
import { SiCssdesignawards } from "react-icons/si";
import { BsAward } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";


const Award = () => {
  return (
  
       <div className='p-15 border-2 border-[#FFFFFF1A] bg-backraund'>
      
              <div className=' flex gap-[287px] justify-center border-b-2 border-[#FFFFFF1A] pb-13'>
      
      
              <div className='flex gap-10 '>
      
               <BsAward className='text-8xl text-white' />

  
               <div  className='text-white'>
                  <h1 className='text-[20px] leading-6 font-normal '>Bachelor of Design Award</h1>
                  <span className='text-sm leading-4 font-normal mt-4'>Best  of Design</span>
                  <p className='text-lg font-normal leading-7 mt-6'>
                    I'm winner of the world's most 
                      prestigious web designthat has more-
                      or-less normal awards in the fields.</p>
               </div>
              </div>
               <h1 className=' flex gap-4 items-center  text-xl text-white'>
                <FaRegCalendarCheck className='text-primary text-xl'/>
      
                2023-2025</h1>
              </div>
      
      
      
              <div className=' mt-12 flex gap-[287px] justify-center border-b-2 border-[#FFFFFF1A] pb-13'>
      
      
              <div className='flex gap-10 '>
      
               <SiCssdesignawards className='text-8xl text-gray-200' />

  
               <div  className='text-white'>
                  <h1 className='text-[20px] leading-6 font-normal '>Diploma in Multimedia AWARD</h1>
                  <span className='text-sm leading-4 font-normal mt-4'>Institute of Creative Arts</span>
                  <p className='text-lg font-normal leading-7 mt-6'>
                    I'm winner of the world's most 
                      prestigious web designthat has more-
                      or-less normal awards in the fields.</p>
               </div>
              </div>
               <h1 className=' flex gap-4 items-center  text-xl text-white'>
                <FaRegCalendarCheck className='text-primary text-xl'/>
      
                2022-2024</h1>
              </div>
      
      
      
      
               <div className=' mt-12 flex gap-[287px] justify-center border-b-2 border-[#FFFFFF1A] pb-13'>
      
      
              <div className='flex gap-10 '>
      
            <FaAward className='text-8xl text-white'/>
  
               <div  className='text-white'>
                  <h1 className='text-[20px] leading-6 font-normal '>Senior UI/UX Design Certification AWARd</h1>
                  <span className='text-sm leading-4 font-normal mt-4'>Design Academy</span>
                  <p className='text-lg font-normal leading-7 mt-6'>
                    I'm winner of the world's most 
                      prestigious web designthat has more-
                      or-less normal awards in the fields.</p>
               </div>
              </div>
               <h1 className=' flex gap-4 items-center  text-xl text-white'>
               

          <FaRegCalendarCheck className='text-primary text-xl'/>
                2023-2024</h1>
              </div>
      
      
          </div>
  )
}

export default Award
