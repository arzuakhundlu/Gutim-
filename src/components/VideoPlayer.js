import React, { useEffect } from 'react'

function VideoPlayer() {

    useEffect(()=>{
        window.addEventListener("keypress", (e)=>{
            console.log(e.target)
        })
    },[])
  return (
    <div className='w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SlPhMPnQ58k?si=qs4-gXqruzfi0m5i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPlayer
