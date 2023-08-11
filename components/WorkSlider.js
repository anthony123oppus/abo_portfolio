import React from 'react';
import Image from 'next/image';
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 

// required modules
import { Pagination } from 'swiper';
//icons
import { BsArrowRight } from 'react-icons/bs';

// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/work1.png',
        },
        {
          title: 'title',
          path: '/work2.png',
        },
        {
          title: 'title',
          path: '/work3.png',
        },
        {
          title: 'title',
          path: '/work4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/work5.png',
        },
        {
          title: 'title',
          path: '/work6.png',
        },
        {
          title: 'title',
          path: '/work7.png',
        },
        {
          title: 'title',
          path: '/work8.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/work7.png',
          desc: 'this is my work',
        },
        {
          title: 'title',
          path: '/work5.png',
        },
        {
          title: 'title',
          path: '/work3.png',
        },
        {
          title: 'title',
          path: '/work8.png',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        <Image src={image.path} width={500} height={300} alt='' className='h-[115px] xl:h-[215px]' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 
                        group-hover:opacity-40 transition-all duration-700'></div>
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20
                        transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            <div className='delay-100'>LIVE</div>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default WorkSlider;


