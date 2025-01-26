import React from 'react'
import {uploadModal, wardrobe, selectCategory, processing, givePrompt, garment} from '../../utils'
const Steps = () => {
  return (
    <section className='h-[150vh] w-full px-10 my-28 flex flex-col'>
        <div className='flex flex-col gap-5'>
        <h2 className='text-5xl'>Design your clothing with all the features</h2>
        <div className='text-2xl'>
            Our intuitive design process makes it easy for you to create custom clothing.Follow these steps to bring your vision to life.
        </div>

        <div className='flex w-full px-20 justify-between my-16 h-[100vh]'>
          {/* text */}
          <div className='w-[40%] border border-white flex flex-col items-center justify-center'>

            <div className='flex items-center gap-10'>
           
            </div>
             
          </div>

          {/* images */}
          <div className='w-[55%] h-[85%] border border-white'>
              
          </div>
        </div>


        </div>
    </section>
  )
}

export default Steps

