import React from 'react'
import ReadMoreBtn from '../components/ReadMoreBtn'

function HeaderSection() {
  return (
    <div className='header_section h-screen w-full'>
      <div className='container h-full flex flex-col justify-center gap-[0px]  '>
        <span className='text-[#f15d44] text-[14px]'>FITNESS ELEMENTS</span>
        <h1 className='text-white text-[72px] font-[500] max-[480px]:text-[42px] max-[480px]:font-[400]'>BMI CALCULATOR</h1>
        <p className='text-[16px] font-[400] text-white mb-[44px] max-w-[500px]'>Gutim comes packed with the user-friendly BMI Calculator
        shortcode which lets</p>
        <ReadMoreBtn />
      </div>
    </div>
  )
}

export default HeaderSection
