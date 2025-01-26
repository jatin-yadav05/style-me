import React from 'react'
import {input, output} from '../../utils'
const OwnModal = () => {
  return (
    <section className='h-full justify-between w-full  p-10 gap-10 flex flex-col'>

      <div className='h-[60%] w-full flex items-center justify-between  '>
        <img src={input} className='h-full w-[45%] object-cover object-top rounded-md' >
        </img>

        <img src={output} className='h-full w-[45%] object-cover object-top rounded-md'>
        </img>

      </div>

      <div className='text-xl'>
      Our project empowers users to upload their own pictures or 2D models and virtually try on clothes of their choice. It provides a personalized shopping experience, enabling users to visualize how outfits look on them before making a purchase.
      </div>
        
    </section>
  )
}

export default OwnModal