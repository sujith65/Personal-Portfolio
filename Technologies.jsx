import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y : -10 },
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

        }
    }
})



export default function Technologies(){
    return(
        <div className='pb-24'>
            <motion.h2 whileInView={{ opacity:1, y:0}} intial={{ opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>
Technologies
            </motion.h2>
            <motion.div whileInView={{ opacity:1, x:0}} intial={{ opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap place-content-center gap-5'>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}><FaHtml5 className='text-7xl text-orange-500 mt-4'/></motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><FaCss3Alt className='text-7xl text-blue-500' />
</motion.div>
<motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><TbBrandJavascript className='text-7xl text-amber-400'/>
</motion.div>
<motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><RiTailwindCssFill className='text-7xl text-blue-300'/></motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'>
<FaReact className='text-cyan-400 text-7xl '/>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><SiPython className='text-7xl text-[#3776AB]' /></motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><SiMysql className='text-8xl text-blue-500 '/></motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className='p-4'><DiMongodb className='text-7xl text-green-600'/></motion.div>
            </motion.div>
        </div>
     

     
    )
}