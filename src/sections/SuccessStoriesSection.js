import React, { Component } from 'react'
import LeftSvg from '../components/svg/LeftSvg'
import RightSvg from '../components/svg/RightSvg'
import userimg from "../image/testimonial-1.jpg.webp"
import quotoImg from "../image/quote-left.png.webp"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export class SuccessStoriesSection extends Component {
  render() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 564 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };
    return (
      <div className='bg-white container h-[636px] max-[900px]:h-auto max-[900px]:pb-[40px]'>
        <div className='bg-img-url h-[540px] max-[900px]:h-auto mt-[48px] pt-[50px]'>
            <h2 className='text-[#111111] text-center text-[40px] font-[600] '>SUCCESS STORIES</h2>
            <div className=' justify-between items-center gap-[50px] stories'>
          
            <Carousel 
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 2s"
              transitionDuration={2000}
              containerClass="carousel-container"
            //   deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              
            >
                <div className='w-full overflow-hidden'>
                    <div className='mt-[50px]'>
                        <p className='text-[22px] text-[#111111] text-center leading-[30px] mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                       <div className='flex justify-center flex-col items-center'>
                            <div className='relative'>
                                <img className='ml-[20px]' src={quotoImg} />
                                <img className='w-[120px] h-[120px] rounded-full relative top-[-30px]' src={userimg} />
                            </div>
                            <h3 className='text-[22px] font-[600] text-[#111111] mb-[8px]'>Patrick Cortez</h3>
                            <span  className='text-[#f15d44] text-[16px] font-[300]'>Leader</span>
                       </div>
                    </div>
                </div>

            </Carousel>
            </div>
        </div>
      </div>
    )
  }
}

export default SuccessStoriesSection
