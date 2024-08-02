import React, { Component } from 'react'

export class Card1 extends Component {
  render() {
    const {img, title, text} = this.props
    return (
      <div className='pt-[80px] pl-[70px] pr-[45px] pb-[50px] max-[700px]:pl-[20px] max-[700px]:pr-[20px] max-[700px]:pt-[20px] max-[700px]:pb-[20px] h-[330px] flex flex-col items-start gap-[36px]'>
        <img alt={title} src={img} />
        <h3 className='text-[22px] text-white font-[600]'>{title}</h3>
        <p className='text-[16px] font-[400] leading-[26px] text-white'>{text}</p>
      </div>
    )
  }
}

export default Card1
