import React from 'react'
import { quotes } from '../assets'

export const FeedbackCard = ({ content, name, title, img }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] w-full lg:max-w-[370px] md:mr-10 mr-0 sm:mr-5 my-5 hover:bg-slate-900'>
        <img src={ quotes } alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{ content }</p>

        <div className='flex flex-row'>
            <img src={ img } alt={ name } className='w-[48px] h-[48px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-medium text-[20px] leading-[28px] text-white'>{ name }</h4>
                <p className='font-poppins font-mediumd text-[14px] leading-[20px] text-gray-400'>{ title }</p>
            </div>
        </div>

    </div>
)
