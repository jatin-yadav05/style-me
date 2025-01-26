import React from 'react'
import { doubleSideArrow } from '../../utils'

const StyleNow = () => {
  return (
    <section className='h-[30vh]  flex items-center w-full'>

        <div className='flex flex-col px-12 text-2xl  w-[50%] gap-3'>
            <div>Start working on styles from today and increase your efficiency by <span className='text-3xl font-bold'>100%</span> </div>
            
        </div>

        <div className='flex flex-col gap-8 w-[50%]  items-center'>
            <img src={doubleSideArrow} className='w-[85%] '></img>
           
            <div className='flex w-full justify-center gap-5'>
            <button className='bg-grey px-3 py-2 rounded-sm'>Design</button>

            <button className='border border-white px-3 py-2 rounded-sm'>Learn more</button>
            </div>


        </div>
    </section>
  )
}

export default StyleNow