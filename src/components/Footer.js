import React, { Component } from 'react'
import SendSvg from './svg/SendSvg'
import HeartSvg from './svg/HeartSvg'
import FbSvg from './svg/FbSvg'
import TwitterSvg from './svg/TwitterSvg'
import InstSvg from './svg/InstSvg'
import WebSvg from './svg/WebSvg'

export class Footer extends Component {
  render() {
    return (
      <footer className='bg-[#111111] p-[60px_0] ' >
       <div className='container'>
            <div className='grid grid-cols-3 gap-[40px] container max-[1045px]:grid-cols-2 max-[650px]:grid-cols-1 '>
                <div className='flex flex-col gap-[20px] max-[650px]:items-center'>
                    <span className='text-[#f15d44] tyext-[16px]'>Phone</span>
                    <span className='text-[#fff] tyext-[16px]'>(123) 118 9999 - (123) 118 9999</span>
                </div>
                <div className='flex flex-col gap-[20px] max-[650px]:items-center'>
                    <span className='text-[#f15d44] tyext-[16px]'>Address</span>
                    <span className='text-[#fff] tyext-[16px]'>72 Kangnam, 45 Opal Point Suite 391</span>
                </div>
                <div className='flex flex-col gap-[20px] max-[650px]:items-center'>
                    <span className='text-[#f15d44] tyext-[16px]'>Email</span>
                    <span className='text-[#fff] tyext-[16px]'>contactcompany@Gutim.com</span>
                </div>
            </div>
            <div className='mt-[50px] max-[390px]:p-[20px] p-[45px] bg-[url("./image/footer-signup.jpg")] bg-no-repeat bg-cover flex justify-between max-[900px]:flex-col max-[900px]:gap-[20px] max-[900px]:items-center'>
                <div>
                    <h3 className='text-[24px] text-white font-[600]'>Subscribe To Our Mailing List</h3>
                    <p className='text-[14px] text-white'>Sign up to receive the latest information</p>
                </div>
                <div className='h-[46px] w-[340px] flex justify-between items-center pl-[1px] max-[390px]:w-[100%]'>
                    <input type='email' className='outline-none h-full w-full pl-[4px]' placeholder='Enter your email' />
                    <button className='bg_btn'>
                        <SendSvg />
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center mt-[30px] max-[1170px]:flex-col max-[1170px]:gap-[20px]'>
                <p className='flex items-center gap-[3px] text-white max-[710px]:flex-col'><span>© Copyright © 2024 All rights reserved |</span> <span className='inline-flex items-center gap-[10px] max-[390px]:flex-col'> This template is made with <HeartSvg /> by Colorlib</span></p>
               <div className='flex gap-[50px] max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-[20px]'>
                    <div className='flex items-center gap-[20px] '>
                        <a className='text-white' href='#'>Term&Use</a>
                        <a className='text-white'  href='#'>Privacy Policy</a>
                    </div>
                    <div className='sosial flex gap-[5px] items-center'>
                        <a className='bg-[#282828] w-[40px] h-[40px] rounded-full inline-flex justify-center items-center' href='#'>
                            <FbSvg color={"#fff"} />
                        </a>
                        <a className='bg-[#282828] w-[40px] h-[40px] rounded-full inline-flex justify-center items-center' href='#'>
                            <TwitterSvg color={"#fff"} />
                        </a>
                        <a className='bg-[#282828] w-[40px] h-[40px] rounded-full inline-flex justify-center items-center' href='#'>
                            <InstSvg color={"#fff"} />
                        </a>
                        <a className='bg-[#282828] w-[40px] h-[40px] rounded-full inline-flex justify-center items-center' href='#'>
                            <WebSvg color={"#fff"} />
                        </a>
                    </div>
               </div>
            </div>
       </div>
      </footer>
    )
  }
}

export default Footer