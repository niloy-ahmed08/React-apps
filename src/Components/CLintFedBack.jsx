import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

 
const CLintFedBack = () => {
    return (
        <div className='pb-30 bg-backraund'>
            <div className="container">

                <div className='flex gap-[125px] justify-center'>

                <div>
                <h1 className='text-xs leading-4 font-bold uppercase text-primary'>Clients feedback</h1>
                <h2 className='text-[45px] leading-12.5 font-semibold uppercase text-white mt-6.5'>
                    Let’s Hear From
                    <span className=' block'>
                        Dear Clients.
                    </span>
                </h2>

                <button className='py-4 px-8.75 rounded-[9999px] bg-[linear-gradient(90deg,#8750F7_0%,#2A1454_50%,#8750F7_100%)] text-sm leading-4 font-semibold mt-11 text-white'>Contact Me</button>

                </div>

                    <div className='p-10 w-[786px] bg-backraund border-2 border-primary '>
                        <div className=' flex justify-between items-center border-b-2 border-[#FFFFFF1A] pb-9.5'>

                       <div className='flex gap-10'>
                        <span className='w-13 h-13 rounded-full bg-white'></span>
                        <div className='text-white'>
                        <h1>Tim Bailey</h1>
                        <p>SEO Specialist, Theme Junction</p>
                        </div>
                       </div>

                        
                        <div className='flex gap-4'>
                            <MdOutlineStarPurple500 className=' text-primary text-2xl' />
                              <MdOutlineStarPurple500 className=' text-primary text-2xl' />
                               <MdOutlineStarPurple500 className=' text-primary text-2xl' />
                                <MdOutlineStarPurple500 className=' text-primary text-2xl' />
                                 <MdOutlineStarPurple500 className=' text-primary text-2xl' />
                        </div>


                        </div>

                        <p className='text-[20px] leading-7.5 font-normal text-[#FFFFFF99] mt-7'>“Taylor is a professional Designer really helps my business by providing
value to my business. Taylor is a professional Designer he really helps my
business by providing value to my business. Taylor is a professional.
Helps business providing value to my business. professional Designer he
really helps my business</p>

                    </div>

                </div>
            </div>
 
        </div>
    )
}

export default CLintFedBack
