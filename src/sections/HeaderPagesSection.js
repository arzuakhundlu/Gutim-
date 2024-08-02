import React from 'react'
import HomeSvg from '../components/svg/HomeSvg'
import RightSvg from '../components/svg/RightSvg'

function HeaderPagesSection({title}) {
  return (
    <div className='about_header_section h-[400px] flex justify-center items-center w-full flex-col'>
        
          <h2 className='text-white text-[60px] text-center font-[600] uppercase'>About</h2>
          <div className='flex items-center justify-center'>
           <HomeSvg/>
          <a href='#' className=' flex items-center'>
            <span className='text-white text-[16px] ml-[5px]'> Home</span>
          </a>
          <RightSvg width="24px" height='11px' color="white"/>
          <a href='#'>
            <span className='text-[16px] text-[#bdbdbd]'>{title}</span>
          </a>
          </div>

          
    </div>
  )
}

export default HeaderPagesSection