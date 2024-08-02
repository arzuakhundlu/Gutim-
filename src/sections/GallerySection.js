import React, { useEffect, useState } from 'react'
import gallery1 from '../image/gallery-1.jpg.webp';
import gallery2 from '../image/gallery-2.jpg.webp';
import gallery3 from '../image/gallery-3.jpg.webp';
import gallery4 from '../image/gallery-4.jpg.webp';
import gallery5 from '../image/gallery-5.jpg.webp';
import gallery7 from '../image/gallery-7.jpg.webp';

function GallerySection() {
  const [type, setType] = useState("");
  const [typeSlide, setTypeSlide] = useState("");
  useEffect(()=>{
    setTimeout(()=>{
      setTypeSlide(type)
    }, 500)
  }, [type])
  return (
    <section className='container'>
        <div>
            <ul className='list-none flex gap-[30px] flex-wrap justify-center text-[16px] font-[600] uppercase text-[#11111] mb-[55px] max-[500px]:gap-[20px]'>
                <button onClick={()=>setType("")} className={`cursor-pointer uppercase	${type == ""?"text-[#f15d44]":""}`}>ALL gallery</button>
                <button onClick={()=>setType(1)} className={`cursor-pointer uppercase	${type == 1?"text-[#f15d44]":""}`}>FITNESS</button>
                <button onClick={()=>setType(2)} className={`cursor-pointer uppercase	${type == 2?"text-[#f15d44]":""}`}>COACHING</button>
                <button onClick={()=>setType(3)} className={`cursor-pointer uppercase	${type == 3?"text-[#f15d44]":""}`}>EVENT</button>
                <button onClick={()=>setType(4)} className={`cursor-pointer uppercase	${type == 4?"text-[#f15d44]":""}`}>OTHER</button>
            </ul>

            <div className='grid grid-cols-4 gap-[10px] max-[990px]:grid-cols-1 gap-[30px]'>
                  {
                    typeSlide == "" || typeSlide == 1?
                    <div className={`col-span-2 max-[990px]:col-span-1 ${type == 1 || type == ""? "animate_in": type != "" && type != 1? "animate_out":""}`}>
                      <img src={gallery1} className='max-[990px]:w-full' />
                    </div>:null
                  }
                {
                   typeSlide == "" || typeSlide == 1 || typeSlide == 2?
                   <div className={`${ type == "" || type == 1 || type == 2? "animate_in": type != "" && type != 1? "animate_out":""}`}>
                    <img src={gallery2} className='max-[990px]:w-full' />
                  </div>:null
                }
               
                {
                  typeSlide == "" || typeSlide == 2?
                  <div className={`flex flex-col justify-between ${ type == "" || type == 2? "animate_in": type != "" && type != 1? "animate_out":""}`}>
                    <div>
                      <img src={gallery3} className='max-[990px]:w-full' />
                    </div>
                    <div>
                      <img src={gallery4} className='max-[990px]:w-full' />
                    </div>
                </div>:null
                }
               {
                typeSlide == "" || typeSlide == 4?
                <>
                  <div>
                    <img src={gallery5} className={`max-[990px]:w-full ${ type == "" || type == 4? "animate_in": type != "" && type != 1? "animate_out":""}`} />
                  </div>
                  <div>
                    <img src={gallery5} className={`max-[990px]:w-full ${ type == "" || type == 4? "animate_in": type != "" && type != 1? "animate_out":""}`}  />
                  </div>
                </>:null
               }
               {
                 typeSlide == "" || typeSlide == 3?
                 <div className='col-span-2 max-[990px]:col-span-1'>
                  <img src={gallery7}className={`max-[990px]:w-full ${ type == "" || type == 3? "animate_in": type != "" && type != 1? "animate_out":""}`}  />
                </div>:null
               }
               
            </div>
        </div>
    </section>
  )
}

export default GallerySection