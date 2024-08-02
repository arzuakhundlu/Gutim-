import React, { Component } from 'react'
import SignUpBtn from '../header/SignUpBtn'

export class Card5 extends Component {
  render() {
    return (
      <div className='bg-white shadow pb-[50px]'>
        <div className='flex justify-center items-center p-[25px_0] card_header_bg'>
            <h3 className='text-white text-[24px] font-[600]'>Basic</h3>
        </div>
        <div className='flex flex-col items-center'>
            <h4 className='text-[#f15d44] text-[40px] font-[600] mt-[30px]'>$17<span className='text-[16px] text-[#6b6b6b] font-[400]'>/01 mo</span></h4>
            <ul className='flex flex-col items-center justify-center gap-[6px]'>
                <li>
                    <span className='text-[16px] text-[#6b6b6b] font-[400] text-center '>Duration</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#111111] font-[600] text-center mt-[10px]'>12 months</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#6b6b6b] font-[400] text-center '>Personal trainer</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#111111] font-[600] text-center mt-[10px]'>00 person</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#6b6b6b] font-[400] text-center '>Amount of people</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#111111] font-[600] text-center mt-[10px]'>01 person</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#6b6b6b] font-[400] text-center '>Number of visits</span>
                </li>
                <li>
                    <span className='text-[16px] text-[#111111] font-[600] text-center mt-[10px]'>Unlimited</span>
                </li>
            </ul>
            <div className='mt-[10px]'>
            <SignUpBtn txt="Start Now" txtBlack />
            </div>
        </div>
      </div>
    )
  }
}

export default Card5