import React from 'react';
import { styles } from '../style';
import { logo_components } from '../assets'
import { footerLinks, socialMedia } from '../constants';

export const Footer = () => {
    return (
        <section className={` ${styles.flexCenter} ${styles.paddingX} flex-col max-w-[1280px] 2xl:mx-auto`}>

            <div className={` ${styles.flexStart} lg:flex-row flex-col mb-8 w-full `}>

                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <div className='flex flex-row items-center'>
                        <img src={logo_components} alt="hoobank" className='w-[66px] h-[72px] object-contain' />
                        <span className='ml-4 text-3xl font-poppins font-semibold'>Components</span>
                    </div>
                    <p className={`${styles.paragraph} mt-4 lg:max-w-[600px] max-w-[310px] mb-5`}>A new way to make the payments easy, reliable and secure</p>
                    <div className="flex flex-row md:mt-0">
                            {socialMedia.map((social, index) => (
                                <img
                                    key={social.id}
                                    src={social.icon}
                                    alt={social.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                        }`}
                                    onClick={() => window.open(social.link)}
                                />
                            ))}
                        </div>
                    <div className="w-full flex justify-between items-start md:flex-col mt-8 flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                        <p className="font-poppins font-normal text-start text-[18px] leading-[27px] text-white">
                            Copyright Ⓒ 2022 HooBank. All Rights Reserved.
                        </p>

                        
                    </div>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap lg:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-400 hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                            }`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            


        </section>
    )
}
