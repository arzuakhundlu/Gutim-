import React, { Component } from 'react'
import UserSvg from '../svg/UserSvg';

export class Card2 extends Component {
  render() {
    const {img, title, text} =this.props;
    return (
      <div className='relative min-w-[360px] max-[450px]:min-w-[300px] max-[350px]:min-w-[270px]'>
        <img alt={title} src={img} className='w-full h-full min-w-full' />
        <div className='absolute bottom-0 bg-[#00000066] h-[75px] w-full p-[10px_0px_15px_30px]'>
            <h3 className='text-[22px] font-[600] text-white'>{title}</h3>
            <span className='inline-flex items-center text-white text-[14px] ml-[-4px]'><UserSvg /> {text}</span>
        </div>
      </div>
    )
  }
}

export default Card2
