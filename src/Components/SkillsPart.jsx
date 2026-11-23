import React from 'react'
import Card from './Card'
import cardlog1 from '../assets/logocard.png'
import cardlogo2 from '../assets/cardlogo22.png'
import cardlogo3 from '../assets/cardlogo33.png'
import cardlogo4 from '../assets/cardlogo44.png'
import { motion } from 'framer-motion'

const SkillsPart = () => {

   const cards = [
  { title: 'Adobe AfterEffect', discription: 'Adobe After Effects is a\npowerful software application\nused motion graphics.', parsent: '92%', cardlogoo: cardlog1 },
  { title: 'Final Cut\nPro', discription: 'Professional video editing\nsoftware developed by Apple\nInc., designed.', parsent: '99%', cardlogoo: cardlogo2 },
  { title: 'iMovie\nFilm', discription: 'iMovie offers a range of\npowerful editing tools that\nallow users.', parsent: '98%', cardlogoo: cardlogo3 },
  { title: 'Hit Films\nExpress', discription: 'HitFilm Express is a free video\nediting and visual effects\nsoftware developed.', parsent: '78%', cardlogoo: cardlogo4 },
]


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}


  return (
    <div className='pb-40 pt-10 bg-backraund'>
      <div className="container">
        
         <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className='text-sm font-semibold text-primary leading-4 uppercase'
        >
          My Recent Work
        </motion.h1>
       

          <div className="mt-6 flex justify-between">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className='text-[45px] leading-13 font-semibold text-white'
          >
            MY Mastering Video
            <span className='block'>Editing Skills</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className='mt-7.5 text-white rounded-2xl w-44.75 h-12.5 text-sm font-semibold bg-[linear-gradient(90deg,#8750F7_0%,#2A1454_50%,#8750F7_100%)]'
          >
            Learn More
          </motion.button>

        </div>


          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className='mt-15 flex items-center gap-10 flex-wrap'
        >
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
            >
              <Card
                title={item.title}
                cardlogoo={item.cardlogoo}
                parsent={item.parsent}
                discription={item.discription}
              />
            </motion.div>
          ))}
        </motion.div>


   

      </div>
    </div>
  )
}

export default SkillsPart
