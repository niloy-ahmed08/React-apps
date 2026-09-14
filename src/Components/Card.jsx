import React from 'react'

const Card = ({ cardlogoo, title, discription, parsent }) => {
    return (
        <div className=' w-76 bg-black pt-10 pb-10 pl-8 pr-8 mx-auto rounded-[25px]'>

            <div className='flex items-center gap-4.5'>

                <img src={cardlogoo} alt="" />
                <h1 className='text-[20px] font-normal leading-5 text-white'>{title}</h1>

            </div>

            <p className=' relative text[16px] leading-6 mt-4 text-white font-normal border-white border-b-4 pb-19'>
                {discription}

                <span className='text-lg text-white font-normal absolute  bottom-1  right-2'>{parsent}</span>
            </p>


        </div>
    )
}

export default Card
