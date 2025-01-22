import React from 'react'
import { firstImage, checkbg, NorthEastArrow } from '../../utils'
// import {  } from '../../utils'

function Home() {
  return (
    // <div></div>
    <>
      <div className='w-full bg-black h-content max-w-full '>
        <section className='flex max-w-full items-center h-[100vh] '>
  
          <div className='h-full w-[55%] text-white flex flex-col pt-20 gap-16 items-start '>
          <div className='text-6xl font-bold  w-[120%] relative  left-[15%] z-20 '>
              Create Your Own <span className='text-white'>Uni</span><span className='text-black'>que</span> 
              <span className='text-grey'> Clothing  Designs</span>
             <span className='text-white'>Tod</span><span className='text-black'>ay</span>
            </div>
        
            <div className='h-[30vh] absolute bottom-0 w-[50vw]' >
              <img src={checkbg} className='h-[600%] brightness-150 w-full object-cover'></img>
            </div>

            <div className='font-semibold text-md relative w-[80%] left-[15%]'>
              Unleash your creativity and design clothing that fits you perfectly. Our platform provides a personalised experience, allowing you to visualize and adjust your designs before finalizing.
            </div>

            <button className='border flex items-center gap-2 border-white px-6 py-4 rounded-full relative left-[15%] font-semibold'>
              <span>Get Started </span> <img src={NorthEastArrow} className='text-white'></img>
            </button>

          </div>
          <div className='h-full w-[45%]'>
            <img src={firstImage} className='h-[100%] w-[100%] object-cover brightness-75'>
            </img>
          </div>
        </section>

        {/* <hr className='border border-white border-dotted'></hr> */}


        {/* Second Part */}
        {/* <section>


        </section> */}

      </div>

    </>

  )
}

export default Home