import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
const ScrollDOwn = () => {
    return (
        <>
            <div className='p-10 w-196.5 bg-backraund border-2 border-primary '>
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
        </>
    )
}

export default ScrollDOwn
