
import React, { Component } from 'react'
import Card2 from '../components/cards/Card2'
import img5 from "../image/service/classes-5.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export class UnlimitedClassesSection extends Component {
  
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 564 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 564, min: 0 },
        items: 1
      }
    };
    return (
      <div className='container pt-[100px] '>
      <h2 className='text-[#111111] text-center text-[40px] font-[600]'>UNLIMITED CLASSES</h2>
      <div className='  gap-[30px] mt-[50px] w-full '>
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
              {
                [1,2,3,4,5,6,7].map((data, i)=>{
                  return(
                    <div key={i} className='flex flex-col gap-[30px] ml-[10px] mr-[10px]'>
                      <Card2 img={img5} title="Personal Training" text=" Cole Robertson" />
                      <Card2 img={img5} title="Personal Training" text=" Cole Robertson" />
                    </div>
                  )
                })
              }
       </Carousel>
      </div>
    </div>
    )
  }
}

export default UnlimitedClassesSection
