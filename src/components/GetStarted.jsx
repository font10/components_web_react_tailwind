import React from 'react';
import { styles } from '../style';
import { arrowUp } from '../assets';

export const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-teal-500 hover:bg-teal-300 p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary hover:bg-slate-900 hover:to-cyan-100 w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-tl from-cyan-50 to-cyan-500'>Get</span>
                </p>
                <img src={ arrowUp } alt="arrow Up" className='w-[23px] h-[23px] object-contain ml-1' />
            </div>
            
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                <span className='text-transparent bg-clip-text bg-gradient-to-tl from-cyan-50 to-cyan-500'>Started</span>
            </p>
        </div>
    </div>
  )
}
