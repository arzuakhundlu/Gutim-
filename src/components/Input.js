import React from 'react'

function Input({idname='', type , text='',placeholder=''}) {
  return (
    <div className='pr-[15px] pl-[15px]'>
        {
          text !='' ? <label className='text-[14px] text-[#9b9b9b] mb-[11px] inline-block' for={idname}>{text}</label> :null
        }
        <input placeholder={placeholder} className='text-[14px] pl-[20px] text-[#9b9b9b] border border-[#ebebeb] outline-none h-[46px] w-full mb-[18px]' type={type} id={idname}/>
    </div>
  )
}

export default Input