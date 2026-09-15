import React from 'react'
import logodesign from '../assets/desinerlogo.png'
import logodesign2 from '../assets/interfacelogo.png.png'
import logodesign3 from '../assets/sflogo.png'
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { SiW3Schools } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";

const EducationExpr = () => {
  return (
     <div className='p-15 border-2 border-[#FFFFFF1A] bg-backraund'>
    
            <div className=' flex gap-[287px] justify-center border-b-2 border-[#FFFFFF1A] pb-13'>
    
    
            <div className='flex gap-10 '>
    
             <IoSchoolSharp className='text-8xl text-white' />

             <div  className='text-white'>
                <h1 className='text-[20px] leading-6 font-normal '>Bachelor of Design</h1>
                <span className='text-sm leading-4 font-normal mt-4'>University of Design</span>
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
    
             <SiW3Schools className='text-8xl text-primary'  />

             <div  className='text-white'>
                <h1 className='text-[20px] leading-6 font-normal '>Diploma in Multimedia</h1>
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
    
             <FaUserGraduate className='text-8xl text-primary' />

             <div  className='text-white'>
                <h1 className='text-[20px] leading-6 font-normal '>Senior UI/UX Design Certification</h1>
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

export default EducationExpr
