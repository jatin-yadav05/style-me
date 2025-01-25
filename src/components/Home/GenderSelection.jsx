import React from 'react'

import { maleModal, femaleModel } from '../../utils'
const GenderSelection = () => {
  return (
    <section className='w-full  h-full relative text-2xl text-gray-500 pr-10'>
    
    <div className='h-full flex items-start  gap-10 text-left'>
    <img src={maleModal} className='h-[60%]'></img>
    <div>StyleMe is inclusive and caters to everyone. Select your gender to get tailored recommendations.</div>
    </div>
   
    <div className='h-full flex gap-10 '>
    <img src={femaleModel} className='h-[60%] flex right-3 absolute bottom-2'></img>
    <div className='absolute bottom-[5%] w-[50%] text-balance '>Our platform aims to break down barriers and make fashion accessible to everyone, effortlessly. </div>
    </div>


    
      
    </section>
  )
}

export default GenderSelection