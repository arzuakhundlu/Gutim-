import React, { Component } from 'react'
import Card5 from '../components/cards/Card5'

export class MemberShipPlanSection extends Component {
  render() {
    return (
      <div className='pt-[100px] mb-[-150px]'>
        <h2 className='text-[#111111] text-center text-[40px] font-[600] '>MEMBERSHIP PLANS</h2>
        <div className='container pt-[50px]'>
            <div className='grid grid-cols-3 gap-[30px] max-[990px]:grid-cols-2 max-[500px]:grid-cols-1'>
              <Card5 />
              <Card5 />
              <Card5 />
            </div>
        </div>
      </div>
    )
  }
}

export default MemberShipPlanSection
