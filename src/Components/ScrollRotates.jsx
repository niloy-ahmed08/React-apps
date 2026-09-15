import React from 'react'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity'
const ScrollRotates = () => {
  return (
    <div className=''>
      
            <div className='  h-25 py-8  bg-primary rotate-2 mt-10  '>

                <ScrollVelocity

                    texts={
                        [

                            <>

                                <ul className='flex items-center gap-12 text-3xl '>
                                    <li>Design </li>
                                    <li>*</li>
                                    <li> Graphic</li>
                                    <li>*</li>
                                    <li>Motion</li>
                                    <li>*</li>
                                    <li>Development</li>
                                    <li>*</li>
                                    <li>Webflow</li>
                                    <li>*</li>
                                    <li>Graphic</li>
                                </ul>

                            </>

                        ]
                    }
                    velocity={100}
                    className="custom-class"

                />
            </div>



            <div className='-rotate-5 h-25 py-8 bg-backraund '>
                <ScrollVelocity
                    texts={
                        [

                            <>

                                <ul className='flex items-center gap-12 text-xl bg-backraund '>
                                    <li>Design </li>
                                    <li>*</li>
                                    <li> Graphic</li>
                                    <li>*</li>
                                    <li>Motion</li>
                                    <li>*</li>
                                    <li>Development</li>
                                    <li>*</li>
                                    <li>Webflow</li>
                                    <li>*</li>
                                    <li>Graphic</li>
                                </ul>

                            </>

                        ]}
                    velocity={60}
                    className=" custiom-class"
                />
            </div>
    </div>
  )
}

export default ScrollRotates
