import React from 'react'
import clintes1 from '../assets/CLients1.png'
import clintes2 from '../assets/clintes2.png'
import clintes3 from '../assets/clintes3.png'

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  const Slider = SlickSlider.default || SlickSlider;
  import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const MyCLinTes = () => {



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='bg-[#FFFFFF1A] w-13 h-13 rounded-full flex items-center justify-center cursor-pointer absolute -top-25 right-45'
     
      onClick={onClick}
    >

        <FaArrowRightLong className='text-white' />

        </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=' bg-[#FFFFFF1A] w-13 h-13 rounded-full flex items-center justify-center cursor-pointer absolute right-65 -top-25 '
     
      onClick={onClick}
    >

        <FaArrowLeft className='text-white' />


         </div>
  );
}

    

      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,

 nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
        <div className='py-31.25 bg-backraund'>
            <div className="container">

                <h1 className='text-xs leading-4 font-semibold tracking-[0.24px] text-primary uppercase '>My Recent Work</h1>
                <h3 className='text-[45px] leading-13.5 text-white font-semibold tracking-[0.9px] uppercase mt-7 '>Recent work for
                    <span className=' block'>MY clients!</span></h3>


            </div>

                <div className=' mt-15 px-10'>
                    <Slider  {...settings}>

                    <div>
                        <img src={clintes1 } alt="" />
                    </div>

                    <div>
                        <img src={ clintes2} alt="" />
                    </div>



                    <div>
                        <img src={clintes3 } alt="" />
                    </div>


                          <div>
                        <img src={clintes1} alt="" />
                    </div>


                    
                        <div>
                        <img src={clintes3} alt="" />
                    </div>

                    </Slider>

                </div>

        </div>
    )
}

export default MyCLinTes
