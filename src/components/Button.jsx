import React from 'react'

export const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-3 px-6 bg-gradient-to-tr from-cyan-500 to-cyan-100 hover:from-cyan-300 hover:to-cyan-100 font-poppins font-medium text-[18px] rounded-sm transition-all cursor-pointer text-black ${styles}`}>
        Get Started
    </button>
  )
}
