import React, { useEffect, useState } from 'react'
import img from "../image/about-pic.jpg.webp"
import playImg from "../image/play.png.webp"
import ReadMoreBtn from '../components/ReadMoreBtn'
import VideoPlayer from '../components/VideoPlayer'
function StoryAboutSection({btnVisible=true,aboutText=""}) {
    const [videoVisible, setVideoVisible] = useState(false)
    useEffect(()=>{
        window.addEventListener("keydown", (e)=>{
            if(videoVisible){
                if(e.code == "Escape"){
                    setVideoVisible(false)
                }
            }
            
        })
    },[])
  return (
    <div className='container  pt-[100px] grid grid-cols-2 gap-[70px] max-[990px]:gap-[30px] items-center max-[990px]:grid-cols-1'>
     <div className='relative w-full h-[390px] flex justify-center items-center'>
        <img src={img} alt="Image" className='w-full h-full' />
        <button onClick={()=>setVideoVisible(!videoVisible)} className='absolute'>
            <img src={playImg} />
        </button>
     </div>
      <div>
        <h2 className='text-[#111111] text-[40px] mb-[25px] font-[700] uppercase'>Story About Us</h2>
        <p className='text-[#6b6b6b] text-[16px] font-[400] leading-[26px] flex flex-col gap-[10px] mb-[25px]'>
            <span>
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.
            </span>
            <span>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
            </span>
        </p>
        {
            btnVisible? <ReadMoreBtn />:null
        }
        {
            aboutText !=""? <div dangerouslySetInnerHTML={{__html:aboutText}}></div>   :null
        }
        
      </div>
      {videoVisible? <VideoPlayer />:null}
      
    </div>
  )
}

export default StoryAboutSection
