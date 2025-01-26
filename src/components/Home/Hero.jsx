import React from 'react'
import { firstImage, checkbg, NorthEastArrow } from '../../utils/index.js'

const Hero = () => {
  return (
    <>
      <section className='flex max-w-full items-center h-[100vh] '>
  
  <div className='h-full w-[55%] text-white flex flex-col pt-20 gap-16 items-center '>
  <div className='text-6xl font-bold pl-10  z-20 '>
      Create Your Own Unique
      <span className='text-grey'> Clothing  Designs  </span> Today
  </div>

    <div className='h-[30vh]  absolute bottom-0 w-[50vw] overflow-hidden' >
      <img src={checkbg} className='h-[600%] brightness-150 w-full object-cover'></img>
    </div>

    <div className='font-semibold text-md relative w-[80%]'>
      Unleash your creativity and design clothing that fits you perfectly. Our platform provides a personalised experience, allowing you to visualize and adjust your designs before finalizing.
    </div>

    <button className='border flex items-center gap-2 border-white px-6 py-4 rounded-full  font-semibold'>
      <span>Get Started </span> <img src={NorthEastArrow} className='text-white'></img>
    </button>

  </div>
  <div className='h-full w-[45%]'>
    <img src={firstImage} className='h-[100%] w-[100%] object-cover brightness-75'>
    </img>
  </div>
</section>
    </>
  )
}

export default Hero