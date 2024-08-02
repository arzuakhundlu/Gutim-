import React from 'react'

function SignUpBtn({txt="Sign Up Today", txtBlack=false}) {
  return (
    <a href='#' className={`text-[16px] font-[600] p-[0_12px]  ${txtBlack? "text-black":"text-white"} text-center flex justify-center text-center w-[160px] h-[46px] border-l-[#eb3c5a] border-l-[2px] border-r-[#f67831] border-r-[2px] inline-flex items-center  btn-bg`}>
       {txt}
    </a>
  )
}

export default SignUpBtn
