import React from 'react'


const BLogCard = ({videoimg,title,dates,discription}) => {
  return (
    <>
     
               <div className='w-104 rounded-[10px] border border-[#814CEC33] backdrop-blur-2xl p-4'>
                   <img src={videoimg} alt="" />
                      <ul className='text-lg flex gap-5 text-[#7A7A7A] leading-4 font-normal capitalize mt-10'>
                <li>{title}</li>
                .
                <li>{dates}</li>
               </ul>
               <h1 className='text-[24px] leading-8 font-semibold uppercase tracking-[0.48px] text-white mt-4.5'>
                {discription}
               </h1>
               </div>
 
    </>
  )
}

export default BLogCard
