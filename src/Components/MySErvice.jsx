import React from 'react'
import CardTwo from './CardTwo'
import { useNavigate } from 'react-router'


const MySErvice = () => {

  const navigate = useNavigate()
  return (
    <div className='py-[125px] bg-backraund'>

        <div className="container">

                <h1 className='text-xs leading-4 font-semibold tracking-[0.24px] text-primary uppercase text-center'>my services</h1>
                  <h3  className='text-[45px] leading-13.5 text-white font-semibold tracking-[0.9px] uppercase mt-7 text-center'>Here's how I can help!</h3>
        
                    <div className='flex gap-7.5 items-center justify-center mt-15'>
                     
                     <div onClick={()=>navigate('/webrelated')}>
                      <CardTwo
                      title='Web Development'
                      />
                      </div>

                      <div onClick={()=>navigate('/contentrelated')}>
                       <CardTwo
                       title='Content Writing'
                       />
                       </div>

                          <div onClick={()=>navigate('/uiuxrelated')}>
                       <CardTwo
                       title='UI/UX Design'
                       />
                       </div>
                       
                       
                    </div>

                    <button className='text-lg leading-4 font-bold py-6 px-135.5 rounded-2xl mx-auto block mt-7.5 text-white  bg-[linear-gradient(90deg,#8750F7_0%,#2A1454_50%,#8750F7_100%)]'>Let’s Contact with Me</button>
        
        
        </div>
      
    </div>
  )
}

export default MySErvice
