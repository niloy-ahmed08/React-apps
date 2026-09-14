import React from 'react'
import wev from '../assets/wevicon.png'


const CardTwo = ({title}) => {
  return (
    <div className=' w-102.5 bg-black p-8 rounded-2xl backdrop-blur-2xl  '>

      
           <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center '>

                <img src={wev} alt="" />

           </div>

                <h1 className='mt-8.5 text-[30px] leading-9 text-white font-bold tracking-[0.6px]'>{title}</h1>
                <p className='text-[16px] mt-3.5 leading-6 text-[#FFFFFF99] font-normal'>Conducting qualitative and quantitative
research to understand user needs,
behaviors, and pain points. Utilizing
methods such as surveys, interviews, and
usability testing to actionable insights.</p>

         <ul className='flex flex-col mt-5.5 text-lg font-normal leading-6 gap-4 list-none text-white p-0'>
  <li className='before:content-["•"] before:mr-2'>UI/UX Design</li>
  <li className='before:content-["•"] before:mr-2'>Research</li>
  <li className='before:content-["•"] before:mr-2'>Mobile & Web App</li>
</ul>
    </div>
  )
}

export default CardTwo
