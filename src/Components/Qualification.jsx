import React from 'react'
import logodesign from '../assets/desinerlogo.png'
import logodesign2 from '../assets/interfacelogo.png.png'
import logodesign3 from '../assets/sflogo.png'
import { FaRegCalendarCheck } from "react-icons/fa6";


const Qualification = () => {
  return (
    <div className='p-15 border-2 border-[#FFFFFF1A] bg-backraund'>

        <div className=' flex gap-[287px] justify-center border-b-2 border-[#FFFFFF1A] pb-13'>


        <div className='flex gap-10 '>

         <img src={logodesign} alt="" />
         <div  className='text-white'>
            <h1 className='text-[20px] leading-6 font-normal '>Senior Product Designer</h1>
            <span className='text-sm leading-4 font-normal mt-4'>VirtusLab</span>
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

         <img src={logodesign3} alt="" />
         <div  className='text-white'>
            <h1 className='text-[20px] leading-6 font-normal '>Senior Product Designer</h1>
            <span className='text-sm leading-4 font-normal mt-4'>Semiflat Studio</span>
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

         <img src={logodesign2} alt="" />
         <div  className='text-white'>
            <h1 className='text-[20px] leading-6 font-normal '>Senior User Interface Designer</h1>
            <span className='text-sm leading-4 font-normal mt-4'>Autentika</span>
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

export default Qualification
