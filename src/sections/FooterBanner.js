import React from 'react'
import CardBanner from '../components/cards/CardBanner'

function FooterBanner() {
  return (
    <div className='grid grid-cols-2 max-[1180px]:grid-cols-1'>
        <CardBanner member='New member' date='7 days for free' text='Complete the training sessions with us, surely you will be happy'/>
        <CardBanner member='CONTACT US' date='09 746 204' text='If you trust us on your journey they dark sex does not disappoint you!'/>
    </div>
  )
}

export default FooterBanner