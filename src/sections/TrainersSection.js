import React, { Component } from 'react'
import Card3 from '../components/cards/Card3'
import tr1 from "../image/trainer/trainer-1.jpg.webp"
export class TrainersSection extends Component {
  render() {
    return (
      <div className='pt-[100px] bg-[#F5F5F5] mt-[100px] pb-[160px]'>
        <div className='container'>
         <h2 className='text-[#111111] text-center text-[40px] font-[600]'>EXPERT TRAINERS</h2>
         <div className='grid grid-cols-3 gap-[30px] mt-[50px] max-[990px]:grid-cols-2 max-[500px]:grid-cols-1'>
          <Card3 img={tr1} name="Patrick Cortez" position="Leader"  text="non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."/>
          <Card3 img={tr1} name="Patrick Cortez" position="Leader"  text="non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
          <Card3 img={tr1} name="Patrick Cortez" position="Leader"  text="non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
         </div>
        </div>
      </div>
    )
  }
}

export default TrainersSection
