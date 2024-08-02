import React from 'react'
import CardBlog from '../components/cards/CardBlog'

function LatesBlog({title}) {
  return (
    <section className='container'>
        {
            title !=''  ? <h2 className='text-[#111111] text-center text-[40px] font-[600] uppercase mb-[55px]'>{title}</h2> :null
        }
        <div className='grid grid-cols-3 max-[990px]:grid-cols-2 max-[500px]:grid-cols-1'>
            <CardBlog category='#Gym' title='10 States At Risk of Rural Hospital Closures' date='February 17, 2019' />
            <CardBlog category='#Sport' title='Diver who helped save Thai soccer team' date='February 17, 2019' />
            <CardBlog category='#Gym' title='10 States At Risk of Rural Hospital Closures' date='February 17, 2019' />
        </div>
    </section>
  )
}

export default LatesBlog