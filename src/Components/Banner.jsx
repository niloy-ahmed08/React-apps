import React from 'react'
import CircularText from './CircularText/CircularText'
import circle from '../assets/circleimg.png'
import imgbanners from '../assets/imgbanner.png'
import shadowes from '../assets/shadow.png'
import icon from '../assets/heroicon.png'
import { FaArrowTurnUp } from "react-icons/fa6";
import ScrollVelocity from './ScrollVelocity/ScrollVelocity'
import imgone from '../assets/scrollone.png'
import imgtwo from '../assets/scrolltwo.png'
import three from '../assets/scrollthree.png'
import four from '../assets/scrollfour.png'
import imgfive from '../assets/scroll5.png'
import imgsix from '../assets/scrollsix.png'
import imgseven from '../assets/scrollseven.png'



const Banner = () => {
    return (
        <div className=' pt-17.75 bg-[#140C1C]'>
            <div className="container">

                <div className='flex justify-center gap-14'>
                    <h1 className=' text-[203px] leading-55.75  uppercase font-semibold text-white '>HELLO</h1>
                    <div className='w-70 h-70 relative'>

                        <CircularText
                            text='EXPEART / VIDEO EDITOR /'
                            onHover="speedUp"
                            spinDuration={20}
                            className="custom-class"
                        />
                        <img src={circle} alt="" className='w-33 h-33 rounded-full absolute top-9 left-8' />
                    </div>

                    <h1 className=' text-[203px] leading-55.75  uppercase font-semibold text-white '>MOTION</h1>

                </div>

                <div className='  flex gap-32 justify-between  '>
                    <div>
                    </div>
                    <div></div>
                    <div className='flex flex-1 justify-center relative '>
                        <img src={imgbanners} alt="" className='w-157.75' />

                        <div className=' text-lg p-5 flex flex-col justify-center items-center 
                          gap-3 font-normal leading-7 w-68.5 h-38 border-dashed
                           bg-white/10 py-2 px-8 backdrop-blur-sm isolate rounded-[10px] absolute top-36 -left-20'>
                            <span className='text-lg font-normal text-white block whitespace-nowrap text-center'> ✦ Awarded Creative
                            </span>

                            <span className=' block text-white whitespace-nowrap'>  Video Editor.</span>
                        </div>
                        <img src={icon} className='w-13 h-14 absolute top-71.5 -left-29.5 ' alt="" />
                        <span className='py-2 px-4 bg-primary w-15 h-5 rounded-2xl flex items-center
                         justify-center font-normal text-xs absolute top-84 -left-41 text-white'>Gerold</span>

                    </div>

                    <div className='mt-20 '>
                        <p className='  w-76 text-[16px] font-medium text-white leading-6 border-b border-white pb-7 '>
                            My role as a amplify tha
                            story through
                            my careful [Video Editor] selection of
                            footages, pacing, and visual style. My
                            keen attention to detail allows me to
                            enhance the mood.</p>

                        <div className='flex gap-29.5 items-center '>

                            <h5 className='text-[110px] leading-27.5 font-bold text-white mt-4'>12+
                                <span className='text-sm font-normal text-white block ml-28 mb-3 '>Years of Experience</span>
                            </h5>

                            <img src={shadowes} className='w-12 h-12 rounded-full ml-10  ' alt="" />
                        </div>
                        <div className='border-b border-white w-77.5 ml-5'></div>

                        <div className=' mt-3 relative w-25 h-25 rounded-full border border-[#FFFFFF14] flex items-center justify-center'>

                            <FaArrowTurnUp className='text-white' />
                            <span className='w-5 h-5 rounded-full bg-primary absolute bottom-0.5 '></span>

                        </div>

                    </div>
                </div>


            </div>
            <div className='flex items-center gap-4 my-10'>
                <span className='flex-1 h-px bg-white/20'></span>
                <h1 className=' leading-6 text-white font-semibold text-[14px]'><span className='text-primary'>100+</span> Trusted Clients Over the world</h1>
                <span className='flex-1 h-px bg-white/20'></span>
            </div>

            <div>

            </div>
            <ScrollVelocity
                texts={[

                    <div className=' flex gap-5'>
                        <img src={ imgone} alt="" />
                        <img src={imgtwo } alt="" />
                        <img src={three } alt="" />
                        <img src={ four} alt="" />
                        <img src={imgfive } alt="" />
                        <img src={ imgsix} alt="" />
                        <img src={imgseven } alt="" />
                    </div>

                ]}
                velocity={150}
                className="custom-scroll-text"
                numCopies={2}
                damping={75}
                stiffness={250}
            />

        </div>
    )
}

export default Banner
