import React from 'react'
import { ownVision } from '../../utils'

const Prompt = () => {
  return (
   <section>
       
       <div className='text-5xl m-10 text-center'>DREAM IT</div>

       <div className='flex items-center'>
       <img src={ownVision} className='w-[50%] h-[70%] brightness-50'>
       </img>
       
       <div className='flex flex-col items-center w-full px-10'>
       <div className='text-5xl m-10 '>WEAR IT</div>

       <div>
       Bring your fashion dreams to life with our intuitive design tools. Describe your clothing vision, and our advanced AI will generate a 2D representation of your design, allowing you to see your creation before it’s made.
       </div>
       </div>
       </div>
   </section>
  )
}

export default Prompt
