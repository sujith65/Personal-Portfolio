import React from 'react'
import profilePic from '../src/assets/sujith.png'
import { HERO_CONTENT } from './constants'
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, x:-100 },
    visible:{
        opacity:1,x:0,
        transition:{
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childvariants = {
    hidden: { opacity : 0,x:-100 },
    visible: { opacity: 1,x:0, transition:{ duration:0.5 }}
}
export default function Hero(){
    return(
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <motion.img src={profilePic} alt ="sujith" className='border border-stone-900 rounded-3xl' width={650} height={650} initial = {{ x:100 , opacity:0 }}
                    animate = {{ x:0,opacity:1 }} transition = {{ duration:1,delay:1.5 }}/>
                </div>
                </div>
                <div className='w-full lg:w-1/2 mt-20'>
                <motion.div initial="hidden" animate="visible" variants={containerVariants}
                 className='flex flex-col items-center lg:items-start mt-10 ml-6'>
                    <motion.h2 variants={childvariants} className='pb-2 text-4xl tracking-tighter lg:text-6xl'>Sujith Guntamadugu</motion.h2>
                    <motion.span variants={childvariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent flex justify-center'>Web Developer</motion.span>
                <motion.p vaeiants={childvariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{HERO_CONTENT}</motion.p>
                <motion.a
  variants={childvariants}
  href='/Sujith_Resume2.pdf'
  target="_blank"
  rel="noopener"
  download
  className='bg-white rounded-full p-4 text-lg text-stone-800 mb-10'
>
  Download Resume
</motion.a>
                
                
                </motion.div>

                </div>
            </div>
            
        </div>
    )
}