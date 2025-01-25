import React from 'react'
import {checkbg} from '../../utils/index'
import Prompt from './Prompt.jsx'


const Features = () => {
  return (
    <>
    <section className='relative'>

    {/* <div className='h-[30vh]   absolute top-0  w-[40vw] overflow-hidden' >
          <img src={checkbg} className='h-[600%] brightness-150 w-full object-cover'></img>
    </div> */}

    <h2 className='text-center text-6xl my-10 w-full '>Features</h2>

        <div className='w-full flex items-center'>


            <div className='w-[50%] text-3xl flex flex-col mt-10'>

                <ul className=''>
                    <li className='py-9 border-b border-t border-grey hover:bg-default-grey text-center'>Design with Your Vision</li>
                    <li className='py-9 border-b border-grey hover:bg-default-grey text-center  '>Fabric, Size & Color Customization</li>
                    <li className='py-9 border-b border-grey hover:bg-default-grey text-center'>Upload Your Own Models</li>
                    <li className='py-9 border-b border-grey hover:bg-default-grey text-center'>Gender Selection</li>
                </ul>
               
            </div>

            <div className='w-[50%]'>
                <Prompt/>
            </div>
        
        </div>

    </section>
    </>
  )
}

export default Features