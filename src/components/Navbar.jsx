import { useState } from 'react'
import { close, logo_components, menu } from '../assets'
import { navLinks } from '../constants'

import React from 'react'

export const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
  
    return (
      <nav className="lg:w-[1280px] mx-auto flex py-6 justify-between items-center z-[50]">
        <img src={logo_components} alt="hoobank" className="w-[32px] h-[32px] ml-5 md:ml-16 2xl:ml-0" />
        <span className='ml-4 font-poppins font-semibold'>Components</span>
  
        <ul className="list-none lg:flex hidden justify-end md:static items-center lg:pr-56 xl:pr-20 2xl:pr-8 md:pr-8 flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer hover:text-teal-400 text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
  
        <div className="lg:hidden flex flex-1 justify-end items-center z-[20]">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-9"
            onClick={() => setToggle(!toggle)}
          />
  
          <div
            className={`${
              !toggle ? "hidden" : "flex w-full pl-16"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end bg-gray-900 p-8 rounded-xl items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] cursor-pointer hover:text-cyan-300 ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

/* mr-32 lg:mr-48 xl:mr-24 2xl:mr-4 */