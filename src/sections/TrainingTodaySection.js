import React, { Component } from 'react'
import ReadMoreBtn from '../components/ReadMoreBtn'
import img from "../image/banner-person.png.webp"
export class TrainingTodaySection extends Component {
  render() {
    return (
      <div className='bg_img_url_2 w-full h-[672px] max-[990px]:h-auto'>
        <div className='container grid grid-cols-2 max-[990px]:p-[100px_50px_0_50px] items-center gap-[50px] h-full mb-[-40px] max-[990px]:grid-cols-1'>
          <div className=''>
            <h2 className='text-white text-[40px]  uppercase font-[500] mb-[20px]'>Get training today</h2>
            <p className='text-white text-[18px] leading-[30px] font-[300] mb-[50px]'>Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
            <ReadMoreBtn text="Contact Now" />
          </div>
          <div>
            <img className='mb-[-65px] max-[990px]:mb-0' src={img} />
          </div>
        </div>
      </div>
    )
  }
}

export default TrainingTodaySection
