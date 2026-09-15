import React from 'react'
import footerlogoo from '../assets/footerlogo.png'
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=' pt-30 pb-7.5 bg-[url(./assets/footerbg.jpg)] bg-no-repeat bg-center bg-cover'>
      <div className="container">


        <div className='flex gap-17.5 justify-center  '>


          <div>
            <div >
            <img src={footerlogoo} alt="" className='w-[179px]' />
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
              <h1 className='text-xl font-semibold text-white leading-6 uppercase whitespace-nowrap'>Subscribe to MyNewsletter!</h1>
             </div>



        </div>


      </div>
    </div>
  )
}

export default Footer
