import React from 'react'
import behinds from '../assets/behindimg.jpg'

const Behind = () => {
    return (
        <div className='py-40 bg-black'>
            <div className="container">

                <div className='flex gap-36.25  items-center justify-center '>

                    <div className=''>
                        <img src={behinds} alt="" />
                    </div>

                    <div className=''>

                        <h1 className='text-xs leading-4 uppercase font-semibold tracking-[2.4px] text-primary'>Behind the Pixels</h1>
                        <h2 className='text-[45px] leading-13.5 mt-6 w-[567px] text-white uppercase tracking-[-0.9px]'>Passionate On Digital
                            Marketer Focused on
                            Driving Results.</h2>
                        <p className='text-[16px] leading-7.5 text-[#FFFFFF99] font-normal w-[481px] mt-7 '>This encompasses a variety of strategies, including search
                            engine optimization (SEO), content marketing, social media
                            marketing, email marketing,.</p>

                            <div className='flex   items-center mt-10'>


                               <div className='p-8 bg-backraund w-41.25 border-r-4 border-[#FFFFFF24]'>
                                  <h1 className=' text-white text-[48px]  leading-12 font-bold tracking-[1.92px] '>30+</h1>
                                     <span className='text-[16px] leading-6 font-normal text-white'>Years of</span>
                                     <span className='text-[16px] leading-6 font-normal text-white'>Experience</span>
                               </div>


                              <div className='p-8 bg-backraund w-41.25 border-r-4 border-[#FFFFFF24]'>
                                  <h1 className=' text-white text-[48px]  leading-12 font-bold tracking-[1.92px] '>30+</h1>
                                     <span className='text-[16px] leading-6 font-normal text-white'>Project</span>
                                     <span className='text-[16px] leading-6 font-normal text-white block'>Completed</span>
                               </div>


                               <div className='p-8 bg-backraund w-41.25'>
                                  <h1 className=' text-white text-[48px]  leading-12 font-bold tracking-[1.92px] '>30+</h1>
                                     <span className='text-[16px] leading-6 font-normal text-white '>Successful</span>
                                     <span className='text-[16px] leading-6 font-normal text-white block'>Project</span>
                               </div>



                            </div>

                            <button className=' py-3 px-8 bg-[linear-gradient(90deg,#8750F7_0%,#2A1454_50%,#8750F7_100%)] text-white mt-8 rounded-3xl'>LEARN MORE</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Behind
