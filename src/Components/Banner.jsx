
import React from 'react'
import Container from './Container'
import imgsliderfast from '../assets/slider.png'

const Banner = () => {
  return (
    <div className=' py-6 bg-[url(./assets/banner.png)] bg-no-repeat bg-center bg-cover'>
     <Container>

         <div className=" flex  ">
      {/* Vertical stripe texture on the right side */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 28px)',
        }}
      />

      {/* Rotated name label along the left edge */}
      <div className="hidden md:flex absolute left-6 top-0 bottom-0 items-center z-10">
        <span className="text-[#8a8680] tracking-[0.3em] text-xs uppercase [writing-mode:vertical-rl] rotate-180">
          My name is Robert
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column: copy */}
        <div>
          <span className="block text-[#8a8680] text-sm mb-6">1.0</span>

          <h1 className="text-[#f2ede4] font-normal text-6xl">
            Get your
           
            great design
          </h1>

          <p className="text-[#a39f97] text-lg max-w-xs mt-10 ">
            Hello, my name is Pattison and I am a UX/UI designer and
            front-end developer. I've been working as a developer for 9
            years and I know design inside out.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#a39f97] text-sm">hire me :)</span>
            <button
              aria-label="Contact me"
              className="w-14 h-14 rounded-full bg-[#c1694f] flex items-center justify-center hover:bg-[#a9573f] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f2ede4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-24">
            <div>
              <p className="text-[#f2ede4] text-4xl font-light">8</p>
              <p className="text-[#8a8680] text-xs leading-tight mt-1">
                Years
                <br />
                experience
              </p>
            </div>
            <div>
              <p className="text-[#f2ede4] text-4xl font-light">5</p>
              <p className="text-[#8a8680] text-xs leading-tight mt-1">
                Themeforest
                <br />
                awards
              </p>
            </div>
            <div>
              <p className="text-[#f2ede4] text-4xl font-light">60</p>
              <p className="text-[#8a8680] text-xs leading-tight mt-1">
                Projects
                <br />
                done
              </p>
            </div>
          </div>
        </div>

      </div>
        {/* Right column: portrait inside overlapping circles */}

        <div className='flex items-center gap-5'>

           <div className=' w-100 h-100 rounded-full bg-white mt-30'>

            <img src={imgsliderfast} alt=""  className='h-100 w-100 rounded-full'/>

           </div>


  <div className=' w-100 h-100 rounded-full bg-white mt-30'>

           </div>


        </div>





       

      {/* Slide indicator dots */}
    
    </div>

     </Container>
    </div>
  )
}

export default Banner
