import React, { useState } from 'react'
import Qualification from './Qualification'
import EducationExpr from './EducationExpr'
import Award from './Award'
import { motion, AnimatePresence } from "framer-motion";


const ScrollROtate = () => {

    const [show, setshow] = useState('qualification1')


    const Reandureingternary = ()=>{

    if (show == 'qualification1') {
        return <Qualification/>
        
    }

    if (show == 'qualification2') {
        return <EducationExpr/>
        
    }

    if (show == 'qualification3') {
        return <Award/>
    }



    }



    return (
        <div className=' pb-30 bg-backraund '>
{/* 
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

                                <ul className='flex items-center gap-12 text-xl '>
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
            </div> */}

            <div className="container">



                <h1 className='text-lg leading-4 tracking-[2px] text-primary font-normal mt-31.25 text-center '>Behind the Pixels</h1>

                <h2 className='text-[45px] leading-13.5 font-semibold tracking-[0.9px] text-white text-center mt-6'>MY Background and
                    <span className=' block'>Achievements</span>
                </h2>

                <div className='p-1   bg-primary flex  mt-15 rounded-[9999px] text-sm leading-5 font-bold w-85.75 mx-auto text-white justify-between items-center'>

                    <div onClick={() => setshow('qualification1')} className={` cursor-pointer py-2.5 px-2.5  rounded-[9999px] ${show == 'qualification1' && 'bg-black'} `}>Experiences</div>
                    <div onClick={() => setshow('qualification2')} className={` cursor-pointer py-2.5 px-2.5  rounded-[9999px] ${show == 'qualification2' && 'bg-black'}  `}>Education</div>
                    <div onClick={() => setshow('qualification3')} className={` cursor-pointer py-2.5 px-2.5  rounded-[9999px] ${show == 'qualification3' && 'bg-black!'}  `}>Awards</div>

                </div>






                <div className=' mt-12.5'>
                     <AnimatePresence mode="wait">
        <motion.div
            key={show}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >


                    {Reandureingternary()}
        </motion.div>
          </AnimatePresence>

                </div>


            </div>
        </div>
    )
}

export default ScrollROtate
