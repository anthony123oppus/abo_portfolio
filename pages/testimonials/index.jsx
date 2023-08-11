import React from "react";
import TestimonialSlider from "../../components/TestimonialSlider";
import Hero from '../../components/Hero';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/60 py-32 text-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <Circles />
      <div className='flex xl:hidden'>
        <Bulb />
      </div>
      <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[390px]'>
        <Hero />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h2 mb-6 mt-12 xl:mb-0'>What Clients <span className='text-accent'>says.</span>
        </motion.h2>
        {/* slider */}
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'>
        <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
