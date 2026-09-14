import React from 'react'
import Card from './Card'
import cardlog1 from '../assets/logocard.png'
import cardlogo2 from '../assets/cardlogo22.png'
import cardlogo3 from '../assets/cardlogo33.png'
import cardlogo4 from '../assets/cardlogo44.png'


const SkillsPart = () => {
  return (
    <div className='pb-40 bg-backraund'>
      <div className="container">

        <h1 className='text-sm font-semibold text-primary leading-4 uppercase'>My Recent Work</h1>
        <div className=' mt-6 flex justify-between'>
          <h2 className='text-[45px] leading-13 font-semibold text-white '>MY Mastering Video
            <span className='block'>Editing Skills</span></h2>
          <button className=' mt-7.5 text-white rounded-2xl w-44.75 h-12.5  text-sm font-semibold bg-[linear-gradient(90deg,#8750F7_0%,#2A1454_50%,#8750F7_100%)]'>Learn More</button>
        </div>

        <div className='mt-15 flex items-center flex-wrap'>
          <Card
            title='Adobe AfterEffect'
            discription='Adobe After Effects is a
powerful software application
used motion graphics.'
            parsent='92%'
            cardlogoo={cardlog1}
          />
          <Card
            title='Final Cut
Pro'
            discription='Professional video editing
software developed by Apple
Inc., designed.'
            parsent='99%'
            cardlogoo={cardlogo2}
          />

          <Card
            title='iMovie
Film'
            discription='iMovie offers a range of
powerful editing tools that
allow users.'
            parsent='98%'
            cardlogoo={cardlogo3}
          />
          <Card
            title='Hit Films
Express'
            discription='HitFilm Express is a free video
editing and visual effects
software developed.'
            parsent='78%'
            cardlogoo={cardlogo4}
          />
        </div>

      </div>
    </div>
  )
}

export default SkillsPart
