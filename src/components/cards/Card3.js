import React, { Component } from 'react'
import FbSvg from '../svg/FbSvg';
import InstSvg from '../svg/InstSvg';
import TwitterSvg from '../svg/TwitterSvg';
import PinterestSvg from '../svg/PinterestSvg';

export class Card3 extends Component {
  render() {
    const {img, name, position, text} = this.props;
    return (
      <div className='bg-white h-[350px] relative max-[990px]:mb-[100px]'>
          <img src={img} alt={name} className='w-full h-full' />
          <div className='overflow-hidden h-[90px]  hover:translate-y-[30px] hover:h-[240px] transition-all 
                          duration-[0.5s] hover:duration-[0.5s] hover:transition-all p-[20px_30px_18px] 
                          bg-white shadow-[0px_3px_4px_0px_rgba(0,_0,_0,_0.15)] w-[84%] left-[8%] bottom-[-55px] 
                          absolute flex flex-col items-center hover:shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]'>
            <h3 className='text-[20px] font-[500] text-[#111111]'>{name}</h3>
            <span className='text-[#f15d44] text-[16px] font-[300]'>{position}</span>
            <p className='text-[#6b6b6b] text-[16px] text-center font-[400] leading-[26px] mt-[15px] mb-[15px]'>{text}</p>
            <div className='flex justify-center gap-[10px]'>
              <a className='hover_orange_svg' href='#'>
                <FbSvg />
              </a>
              <a className='hover_orange_svg' href='#'>
                <InstSvg />
              </a>
              <a className='hover_orange_svg' href='#'>
                <TwitterSvg />
              </a>
              <a className='hover_orange_svg' href='#'>
                <PinterestSvg />
              </a>
            </div>
          </div>
      </div>
    )
  }
}

export default Card3