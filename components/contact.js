import React,  { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Image from "next/image";
// icons
import {HiArrowRight} from 'react-icons/hi2';

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { EarthCanvas } from "./canvas";



const FormContact = () => {

  const [state, handleSubmit] = useForm("xwkdlbka");
  const [ExitState, setShowSuccess] = useState({ succeeded: false, exited: false });

    const handleExitClick = () => {
        setShowSuccess(false);
    };
  if (state.succeeded && ExitState) {
      return (
        <div className=" flex justify-center items-end xl:items-center w-full h-[500px] xl:h-full">
          <div className="flex flex-col gap-6 xl:gap-10 justify-center items-center my-4 mt-2 xl:mt-0 h-[400px] xl:h-[500px] max-w-md xl:max-w-none xl:w-[600px] rounded-xl bg-white/20 backdrop-filter backdrop-blur-xl shadow-lg">
              <Image src={'/submitted.png'} width={150} height={150} alt="" />
              <h1 className="text-2xl px-10 xl:px-0 xl:text-3xl text-center">Message Successfully Submitted</h1>
              <button onClick={handleExitClick} 
                className='relative w-[185px] h-[40px] flex justify-center items-center bg-black/50 border-4 rounded-full xl:group-hover:bg-slate-800/80 hover:scale-110 transition-all duration-500'>Exit
                <HiArrowRight className='absolute right-4 text-2xl xl:group-hover:translate-x-2 transition-all duration-500' />
              </button>
          </div>
        </div>
      );
  }

  return (
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full mt-2 xl:bg-black/10 rounded-xl">
      <div className='absolute h-20 w-20 xl:h-40 xl:w-40 rounded-full bg-preview bg-cover rotate-90 top-[130px] right-2 xl:bottom-[525px] xl:left-[370px]'></div>
      <div className='absolute  xl:h-40 xl:w-40 rounded-full bg-active xl:bottom-[95px] xl:right-[410px]'></div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full max-w-[700px] bg-white/20 backdrop-filter backdrop-blur-xl shadow-lg px-2 pb-4 rounded-xl xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-xl xl:rounded-bl-xl xl:px-10 xl:pb-10'>
        <h2 className='h2 mb-6 mt-4 xl:mb-4'>
          Let's <span className='text-accent'>connect.</span>
        </h2>
        {/* slider */}
        <form onSubmit={handleSubmit} variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
            <input type='name' id='name' name='name' placeholder='name' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' required/>
            {/* <ValidationError
              prefix="Name" 
              field=""name
              errors={state.errors}
            /> */}
            <input type='email' id='email' name='email' placeholder='email' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' required/>
            {/* <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            /> */}
          </div>
          <input type='text' id="subject" name="subject" placeholder='subject' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' />
          {/* <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
            /> */}
          <textarea id='message' name='message' placeholder="message" className="text-black textarea rounded-xl bg-black/20 backdrop-filter backdrop-blur-xl" required></textarea>
          {/* <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            /> */}
          <div className='mx-auto xl:mx-0 group xl:hover:translate-x-2 transition-all duration-300'>
      <button type="submit" disabled={state.submitting}
        className='relative w-[185px] h-[40px] flex justify-center items-center bg-black/50 border-4 rounded-full xl:group-hover:bg-slate-800/80 hover:scale-110 transition-all duration-500'>Send
        <HiArrowRight className='absolute right-4 text-2xl xl:group-hover:translate-x-2 transition-all duration-500' />
      </button>
    </div>
        </form>
        </motion.div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex h-[539px] rounded-tr-xl rounded-br-xl shadow-xl w-full z-0 bg-gray-900'>
        <EarthCanvas/>
        </motion.div>
    </div>
  );
};

export default FormContact;
