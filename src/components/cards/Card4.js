import React from 'react'

function Card4({countplus='' , count , title }) {
  return (
    <div>
        <h3 className='text-[72px]  text-white leading-[87px]'>{count}
        {
          countplus !='' ? <span dangerouslySetInnerHTML={{__html:countplus}}></span> : null
        }
        </h3>
        
        <p className='uppurcase text-white tracking-[2px] mb-[16px]'>{title}</p>
    </div>
  )
}

export default Card4