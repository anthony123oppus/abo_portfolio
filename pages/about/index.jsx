import React, {useState} from 'react';

import {motion} from 'framer-motion';

// Icons Import
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiArduino,
} from 'react-icons/si';

//  data
export const aboutData =  [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />, <SiAdobeillustrator />],
      },
      {
        title: 'Hardware Development',
        icons: [<SiArduino />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'IoT Programmer of the year  - Honoree',
        stage: '2022- 2023',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2017 - 2018',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - Hazong Company',
        stage: '2022 - 2023',
      },
      {
        title: 'Arduino Developer - MAM Team',
        stage: '2022 - 2023',
      },
      {
        title: 'Web Developer - Hazong.co Agency',
        stage: '2021 - 2022',
      },
      {
        title: 'On The Job Training - Sonsay Microsystem',
        stage: 'january 2018 - March 2018',
      },
      {
        title: 'Intern - Engineering Office',
        stage: 'july 2021 - August 2021',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelor of Science in Computer Science - BISU-Bilar Campus',
        stage: '2023',
      },
      {
        title: 'NCII in Computer System Servicing - Talibon, Bohol',
        stage: '2018',
      },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

// components
import Hero from '../../components/Hero';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='bg-primary/60 h-full'>
      <div className='h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 py-40 text-center xl:text-left'>
        <Circles />
        {/* avatar img */}
        <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[390px]'>
          <Hero />
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          <div className='flex-1 flex flex-col justify-center z-10'>
            <motion.h2 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h2 capitalize font-bold'>
              Captivating <span className='bg-gradient-to-br from-accent to-black text-transparent bg-clip-text'>stories</span> birth magnificent designs.
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.6)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0 xl:text-[19px]'>
              Collaboration is my secret ingredient for success. I revel in teamwork, where collective brilliance sparks fresh ideas and 
              pushes the boundaries of what's possible. Together, we'll create web experiences that are not only visually stunning but also
               deeply immersive and memorable.</motion.p>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 md:max-w-xl xl:max-w-none max-auto xl:mx-0'>
              <div className='flex flex-1 gap-x-6'>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-10xs xl:text-4xl mb-2 font-extrabold bg-gradient-to-bl from-accent to-black text-transparent bg-clip-text'>
                    <CountUp start={0} end={24} duration={5} /> +
                  </div>
                  <div className='text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Months of experience</div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-10xs xl:text-4xl mb-2 font-extrabold bg-gradient-to-bl from-accent to-black text-transparent bg-clip-text'>
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className='text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Client Satisfied</div>
                </div>
                <div className='relative flex-1'>
                  <div className='text-10xs xl:text-4xl mb-2 font-extrabold bg-gradient-to-bl from-accent to-black text-transparent bg-clip-text'>
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className='text-[10px] uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Project</div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-black after:transition-all after:duration-300'} 
                  cursor-pointer font-bold capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className='bg-white/20 backdrop-filter backdrop-blur-xl shadow-xl rounded-2xl h-[226px] xl:h-full py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:pl-5'>
              {aboutData[index].info.map((item, itemIndex)=> {
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className='text-2xl text-white'>
                          {icon}
                        </div>
                      );
                    })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
