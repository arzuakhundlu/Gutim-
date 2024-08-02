import React from 'react'
import Input from '../components/Input'
import icon1 from '../image/icon-1.png.webp';
import icon2 from '../image/icon-2.png.webp';
import icon3 from '../image/icon-3.png.webp';

function ContactSection() {
  return (
    <section className='container'>
        <div className='grid grid-cols-3 max-[990px]:grid-cols-1 max-[990px]:gap-[30px]'>
            <div >
                <h2 className='font-[600] mb-[47px] text-[#111111] text-[24px]'>CONTACTS US</h2>
                <ul className='flex flex-col gap-[16px]'>
                    <li className='flex  items-center'>
                        <div className='contacticon'>
                           <img src={icon1} />
                        </div>
                        <div>
                            <h4 className='text-[#bdbdbd] mb-[5px] text-[18px]'>Our Location</h4>
                            <p className='text-[#111111] text-[18px] mb-[0]'>60-49 Road 11378 New York</p>
                        </div>
                    </li>
                    <li className='flex  items-center'>
                        <div className='contacticon'>
                           <img src={icon2} />
                        </div>
                        <div>
                            <h4 className='text-[#bdbdbd] mb-[5px] text-[18px]'>Phone:</h4>
                            <p className='text-[#111111] text-[18px] mb-[0]'>+65 11.188.888</p>
                        </div>
                    </li>
                    <li className='flex  items-center'>
                        <div className='contacticon'>
                           <img src={icon3} />
                        </div>
                        <div>
                            <h4 className='text-[#bdbdbd] mb-[5px] text-[18px]'>Mail</h4>
                            <p className='text-[#111111] text-[18px] mb-[0]'>hellocolorlib@ gmail.com</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className='col-span-2'>
                <h2 className='ml-[15px] font-[600] mb-[47px] text-[#111111] text-[24px]'>LEAVE A COMMENT</h2>
                <div>
                    <form>
                        <div className='grid grid-cols-2 max-[530px]:grid-cols-1'>
                            <Input type='text' placeholder='Your name'/>
                            <Input type='text'placeholder='Your email'/>
                            <div className='col-span-2 max-[530px]:col-span-1  pr-[15px] pl-[15px]'>
                                <textarea placeholder='Your messages' className='text-[16px] h-[150px] mb-[42px] resize-none border border-[#ebebeb] outline-none pl-[20px] p-[20px] w-full'/>
                            </div>
                        </div>
                        <button className='sendMessagebtn'>Send messages</button>
                    </form>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection