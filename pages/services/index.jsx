import Hero from '../../components/Hero';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/60 py-36 flex items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
    <Circles />
    <div className='flex xl:hidden'>
      <Bulb />
    </div>
    <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[390px]'>
      <Hero />
    </motion.div>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='items-center text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-4'>
          <motion.h2 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8 z-10 text-transparent bg-clip-text bg-gradient-to-tl from-[#330000] from-10% via-[#ff0000] via-50% to-[#330000] to-80%'>
            Services Offer:<span className='text-white'></span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 text-lg  max-w-[400px] mx-auto lg:mx-0'>
          In the realm of front-end enchantment, my services offer a gateway to extraordinary digital experiences.
          </motion.p>
        </div>
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[70%]'>
        {/* slider */}
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
  </div>
);
};

export default Services;
