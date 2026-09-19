import React from 'react'
import nab from '../assets/logonab.png'
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className='py-5 bg-black'>
      <div className="container">

        <div className='flex items-center justify-between'>

          <div>
            <img src={nab} alt="" />
          </div>

          <ul className='flex gap-8 items-center text-lg  text-[#FFFFFF80] group'>
            <li className=' hover:text-white'>

              <NavLink to="/navitgateservice" end>
                SERVICE
              </NavLink>

            </li>
            <li className=' hover:text-white'>Works</li>
            <li className=' hover:text-white'>

              <NavLink to="/navitgehome" end>
                RESOME
              </NavLink>

            </li>
            <li className=' hover:text-white'>

              <NavLink to="/navitgateskill" end>
                Skill
              </NavLink>

            </li>
            <li className=' hover:text-white'>Testimonials</li>
            <li className=' hover:text-white'>Contact</li>
          </ul>

          <div className='flex gap-5 items-center'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitterSquare />

            <button className='py-3 px-6 bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] rounded-[999px]'>Lets Talk</button>

          </div>


        </div>

      </div>
    </div>
  )
}

export default NavBar
