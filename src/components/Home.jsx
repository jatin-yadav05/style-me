import React from 'react'
import { firstImage } from '../../utils'
import { NorthEastArrow } from '../../utils'
function Home() {
  return (
    // <div></div>
    <>
      <div className='w-full bg-black h-content '>
        <section className='flex w-full items-center h-[100vh] '>
  
          <div className='h-full w-[55%] text-white flex flex-col pt-20 gap-16 items-start '>
          <div className='text-6xl font-bold text-left w-200 relative  left-[15%] z-20 mix-blend-difference'>
              Create Your Own <span className='text-grey'>Unique Clothing Designs </span> Today
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

        <hr className='border border-white border-dotted'></hr>


        {/* Second Part */}
        <section>


        </section>

      </div>

    </>

  )
}

export default Home