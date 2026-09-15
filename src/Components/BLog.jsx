import React from 'react'
import BLogCard from './BLogCard'
import video from '../assets/video.png'
import video22 from '../assets/video22.png'
import video33 from '../assets/video33.png'
const BLog = () => {
  return (
    <div className='pb-30 bg-backraund '>
      <div className="container">

            <h1 className='text-xs font-bold leading-4 tracking-[2.4px] text-primary text-center'>Behind the Pixels</h1>
             <h2 className='text-[45px] leading-13 font-semibold text-white uppercase text-center'>Read My Recent Blog</h2>
             
            <div className='flex gap-6 justify-center items-center mt-15'>

             <BLogCard
             dates='Nov 01, 2025'
             title='business'
             discription='The Role
                 of Technologyin Modern Log'
             videoimg={video}
             />

              <BLogCard
             dates='Aug 01, 2025'
             title='Development'
             discription='The Role of Technology
in Modern Log'
             videoimg={video33}
             />



              <BLogCard
             dates='Nov 01, 2025'
             title='Portfolio'
             discription='Digital Marketo to
Their New Office.'
             videoimg={video22}
             />

            </div>

      </div>
    </div>
  )
}

export default BLog
