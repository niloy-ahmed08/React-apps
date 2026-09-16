import React from 'react'
import footerlogoo from '../assets/footerlogo.png'
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className=' pt-30 pb-7.5 bg-[url(./assets/footerbg.jpg)] bg-no-repeat bg-center bg-cover'>
      <div className="container">


        <div className='flex gap-17.5 justify-center pb-27 border-b border-[#FFFFFF1A] '>


          <div>
            <div >
            <img src={footerlogoo} alt="" className='w-44.75' />
            </div>
            <p className='text-[16px] leading-6 text-white mt-8 font-normal w-[310px]'>
              I break down complex user the experience
              problems the create integrity focused to
              solutions that’s connect.</p>
              <div className='flex gap-5 mt-8'>
                <IoLogoFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitterSquare />

              </div>
          </div>


             <div>
              <h1 className='text-[20px] leading-6 font-semibold uppercase text-white'>Legal Details</h1>
              <ul className='text-[15px] leading-5.5 font-normal mt-8.75 space-y-2 text-white'>
                <li>Policy Privacy</li>
                <li>Term & Conditions</li>
                  <li>Refund and Cancellation</li>
                  <li>Disclaimer</li>
              </ul>
             </div>



              <div>
              <h1 className='text-[20px] leading-6 font-semibold uppercase text-white'>Contact</h1>
              <ul className='text-[15px] leading-5.5 font-normal mt-8.75 space-y-2 text-white'>
                <li>hello-designer@gerold.com</li>
                <li>+01 123 654 8096</li>
                  <li>+01 123 654 8096</li>
                  
              </ul>
             </div>

             <div>
              <h1 className='text-xl font-semibold text-white leading-6 uppercase whitespace-nowrap'>
                Subscribe to <span className='block'>Newsletter!</span></h1>
                <div className='flex gap-2 items-center mt-5'>
                  <input type="text"  className='w-59.25 border-2 rounded-[60px] bg-white h-14.5 outline-none border-[#050709]'/>
                    <h1 className='w-15 h-15 rounded-full bg-black flex items-center justify-center'>
                      <MdArrowOutward className='text-xl text-white' />

                    </h1>
               </div>
             </div>



        </div>
            
            <div className='mt-8 flex gap-52.5 items-center justify-center'>

           <div className='flex gap-2 items-center'>
            <div className='w-2 h-2 rounded-[7px] bg-[#00FF2F] '>
           </div>
              <h1 className='text-sm font-semibold text-white leading-4'>AVAILABLE FOR FREELANCE</h1>
            </div>

              <ul className='text-sm font-normal text-white leading-6 flex gap-9 items-center'>
                <li>Work</li>
                <li>Services.</li>
                <li>Contact</li>
                <li>About.</li>
              </ul>

              <h1 className='text-sm font-semibold text-white leading-5'>©All rights reserved byThemeJunction</h1>


            </div>
      </div>
    </div>
  )
}

export default Footer
