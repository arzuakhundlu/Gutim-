import React, { Component } from 'react'
import bigImg from "../image/service/service-pic.jpg.webp"
import img1 from "../image/service/service-icon-1.png.webp"
import img2 from "../image/service/service-icon-2.png.webp"
import img3 from "../image/service/service-icon-3.png.webp"
import img4 from "../image/service/service-icon-4.png.webp"
import Card1 from '../components/cards/Card1'
export class TypesSection extends Component {
  render() {
    return (
      <div className='grid grid-cols-2 pt-[100px] max-[990px]:grid-cols-1'>
        <img className="w-full h-[660px]" src={bigImg} />
        <div className='grid grid-cols-2 max-[500px]:grid-cols-1'>
          <div className='bg-[#1e1e1e] w-full h-full grid grid-rows-2'>
            <Card1 img={img1} title="Strategies" text="Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes." />
            <Card1 img={img3} title="Workout" text="Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes." />
          </div>
          <div className='bg-[#141414] w-full h-full'>
            <Card1 img={img2} title="Yoga" text="Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes." />
            <Card1 img={img4} title="Weight Loss" text="Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes." />
          </div>
        </div>
      </div>
    )
  }
}

export default TypesSection
