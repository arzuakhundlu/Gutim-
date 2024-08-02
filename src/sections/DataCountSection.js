import React from 'react'
import Card4 from '../components/cards/Card4'

function DataCountSection() {
  return (
    <section className='pt-[100px] mb-[100px]'>
      <div className='datacount container grid grid-cols-3 pb-[50px] max-[700px]:grid-cols-2 max-[520px]:grid-cols-1'>
          <Card4 title='Programs' count='98'/>
          <Card4 title='LOCATIONS' count='14'/>
          <Card4 title='MEMBERS' count='50'  countplus={`<span>k+</span>`}/>
          <Card4 title='COACHES' count='34'/>
      </div>
    </section>
  )
}

export default DataCountSection