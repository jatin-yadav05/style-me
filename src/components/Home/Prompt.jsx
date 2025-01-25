import React from 'react'
import { ownVision } from '../../utils'

const Prompt = () => {
  return (
    <section className='flex flex-col h-full w-full   py-12 gap-10'>

      <div className='text-5xl text-center'>DREAM IT</div>

      <div className='flex w-full h-[80%]'>
        <div className='w-full '>
          <img src={ownVision} className='w-full h-full object-cover brightness-50'>
          </img>
        </div>

        <div className='flex flex-col items-center w-full gap-10'>
          <div className='text-5xl'>WEAR IT</div>

          <div className='px-10 text-center'>
            Bring your fashion dreams to life with our intuitive design tools. Describe your clothing vision, and our advanced AI will generate a 2D representation of your design, allowing you to see your creation before it’s made.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prompt
