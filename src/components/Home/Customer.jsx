import React from 'react'
import { testimonialbg, manProfessional, femaleProfessional } from '../../utils'
// import {  } from '../../utils'

const Customer = () => {
  return (
    <section className='h-[80vh]  w-full flex flex-col gap-16'>
        <div className='flex flex-col items-center gap-3 w-full'>
       <h2 className='text-center text-4xl font-semibold tracking-wide'>Customer Testimonials</h2>
       <div className='h-1 w-[28%] bg-white rounded-full'></div>
       <div>What some of our users say about our app</div>
       </div>

       <div className='flex justify-around w-full'>
        
        <div className='relative h-[36vh] w-[30%] flex flex-col justify-end'>
        <div className='h-[90%]  w-full rounded-md  flex flex-col items-center gap-3 justify-end py-5'  style={{backgroundImage: `url(${testimonialbg})`}}>

        <div className='rounded-full h-16 w-16 top-0 bg-cover absolute border-grey border-4' style={{backgroundImage: `url(${manProfessional})`}}>
        </div>

            <div className='italic w-[65%] text-center'>"The process was so easy and fun! I can't wait to wear my creation!"</div>

            <div>
                <strong> Fashion Blogger |</strong> <span className='text-xs'>TheCompany </span>
            </div>
              
        </div>
        </div>

           
        <div className='relative h-[36vh] w-[30%] flex flex-col justify-end'>
        <div className='h-[90%]  w-full rounded-md  flex flex-col items-center gap-3 justify-end py-5'  style={{backgroundImage: `url(${testimonialbg})`}}>

        <div className='rounded-full h-16 w-16 top-0 bg-cover absolute border-grey border-4' style={{backgroundImage: `url(${femaleProfessional})`}}>
        </div>

            <div className='italic w-[65%] text-center'>"I never know that designing would be so enjoyable and I loved all the features."</div>

            <div>
                <strong> Graphic Designer |</strong> <span className='text-xs'>GraphicEra </span>
            </div>
              
        </div>
        </div>

       </div>
    </section>
  )
}

export default Customer