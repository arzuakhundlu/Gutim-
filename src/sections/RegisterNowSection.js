import React from 'react'
import Input from '../components/Input'
import registerImg from '../image/register-pic.jpg.webp'

function RegisterNowSection() {
  return (
        <section className='container '>
            <div className=' registernow grid grid-cols-3  max-[990px]:grid-cols-1'>
                <div className='col-span-2 p-[50px_70px_60px_70px] max-[500px]:p-[20px_20px_20px_20px] bg-white'>
                    <h2 className='text-[40px] text-[#111111] font-[600] uppercase mb-[12px] text-center'>REGISTER NOW</h2>
                    <p className='text-[16px] text-[#6b6b6b] font[400] mb-[15px] text-center leading-[26px]'>The First 7 Day Trial Is Completely Free With The Teacher</p>
                    <form>
                        <div className='grid grid-cols-2 max-[990px]:grid-cols-1'>
                            <Input text='First Name' idname='name' type='text'/>
                            <Input text='Your email address' idname='email' type='email'/>
                            <Input text='Last Name' idname='last-name' type='text'/>
                            <Input text='Mobile No*' idname='mobile' type='number'/>
                        </div>
                        <button className='submitbtn'>Get Started</button>
                    </form>
                </div>
                <div>
                    <img className='h-full max-[990px]:w-full max-[990px]:mt-[20px]' src={registerImg}/>
                </div>
            </div>
        </section>

  )
}

export default RegisterNowSection