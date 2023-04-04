import React from 'react'
import { styles } from '../style.js'
import { discount, robot } from '../assets'
import { GetStarted } from './GetStarted'

export const Hero = () => {
    return (
        <section id="home" className={`flex sm:max-w-[1280px] mx-auto md:flex-row flex-col xl:px-16 2xl:px-0  ${styles.flexCenter} ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            
                <div className='flex flex-row items-center py-[4px] px-4 shadow-sm bg-gradient-to-r from-zinc-800 to-stone-950 rounded-[10px] mb-2'>
                    <img src={discount} alt="discount" className='w-[48px] h-[48px]' />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white font-poppins'>20%</span> Discount For {" "}
                        <span className='text-white font-poppin'> 1 Month</span> Account
                    </p>
                </div>


                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        <span className='md:text-2xl'>The Next</span> <br className='sm:block hidden' /> {" "}
                        <span className='text-gradient text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-cyan-100'>Generation</span> {" "} <br />
                    </h1>
                    <div className="md:flex md:justify-start md:items-start hidden md:mr-4 mr-10">
                        <GetStarted />
                    </div>
                </div>


                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <div className={`ss:flex flex md:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}


