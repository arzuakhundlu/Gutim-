import React from 'react'

function CardBanner({member,date,text}) {
  return (
     <div className="p-[0_15px] bg-[url('./image/footer-banner-1.jpg.webp')]">
        <div className='footerBanner '>
            <h5 className='text-[#f15d44] text-[16px] font-[700] uppercase tracking-[2px]'>{member}</h5>
            <h2 className='text-white text-[40px] font-[600] mt-[30px] mb-[5px]'>{date}</h2>
            <p className='text-white font-[400] leading-[26px] mb-[42px]'>{text}</p>
            <button className='getStartedbtn'>Get Started</button>
        </div>
    </div>
  )
}

export default CardBanner