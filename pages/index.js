// next image
import React from "react";
import Image from "next/image";
import Link from 'next/link';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import ClientProfile from "../components/ClientProfile";
import Education from '../components/Education';

//framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <ParticlesContainer />
      
      {/* text */}
      <div className='text-center h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
           {/* education */}
          <div className='absolute translate-z-0 left-20 bottom-25'>
            <Education />
          </div>
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 font-bold z-0'>
            Hello, I'm  Anthony<br />
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-accent to-black'>Front End Developer</span>
          </motion.h1>
          <motion.p variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm text-xl z-0 xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          You can also use variant modifiers to target media queries like responsive breakpoints,
           dark mode, prefers-reduced-motion, and more. For example, use md:bg-green-500 to apply 
           the bg-green-500 utility at only medium screen sizes and above.
          </motion.p>
          <div className='flex xl:hidden'>
            <ProjectsBtn url='/work' text='My Project'/>
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn url='/work' text='My Project'/>
          </motion.div>
          <div className='flex justify-center items-center mt-10 xl:justify-start'>
            <ClientProfile />
          </div>
        </div>
      </div>

      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          <div className='bg-none xl:bg-explosion bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
          </div>
          
          <motion.div variants={fadeIn('up', 0.6)} initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease: 'easeInOut'}} className='w-full h-full max-w-[760px] max-h-[678px] absolute -bottom-32 lg:bottom-20 lg:right-[1%]'>
            <Avatar/>
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
