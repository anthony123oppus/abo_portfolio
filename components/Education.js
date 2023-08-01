import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const EducationAttain = [
    {
      name: 'BISU',
      path: '/',
      icon: '/bisu-icon.png',
    },
    {
      name: 'BNHS',
      path: '/',
      icon: '/bisu-icon.png',
    },
    {
      name: 'DES',
      path: '/',
      icon: '/bisu-icon.png',
    },
  ]

const Education = () => {
  return (
    <div className='xl:flex xl:justify-center xl:items-center xl:h-[500px] xl:w-20'>
        <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:absolute xl:left-0 xl:h-[440px] xl:w-2 xl:bg-black/70 xl:gap-y-[190px] xl:rounded-xl'>
            <ul className='xl:bg-white xl:w-5 xl:h-6 xl:rounded-[50%]'></ul>
            <ul className='xl:bg-white xl:w-5 xl:h-6 xl:rounded-[50%]'></ul>
            <ul className='xl:bg-white xl:w-5 xl:h-6 xl:rounded-[50%]'></ul>
        </div>
        <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-[146px] ml-4'>
        {EducationAttain.map((link, index) => {
                return (
                      <Link 
                      className='justify-center items-center group hover:text-accent hover:border-accent hover:scale-110 xl:hover:translate-x-4 transition-all duration-300' 
                        href={link.path} 
                        key={index}
                      >
                        <Image src={link.icon} width={60} height={60} alt='' className='hidden xl:flex xl:bg-white xl:rounded-full border-2'/>
                        <div className='xl:opacity-0 xl:border-solid xl:border-r-white xl:border-r-8 xl:border-y-transparent
                         xl:border-y-[5px] xl:border-l-0 xl:absolute xl:bottom-[27.3px]  xl:-left-2 group-hover:opacity-[100%] group-hover:border-acccent'></div>
                      </Link>
                );
              })}
        </div>
    </div>
  );
}

export default Education