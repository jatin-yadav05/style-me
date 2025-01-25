import React from 'react'
import {checkbg} from '../../utils/index'
import Prompt from './Prompt.jsx'
import Fabric from './Fabric.jsx'
import GenderSelection from './GenderSelection.jsx'
import OwnModal from './OwnModal.jsx'



const Features = () => {
  return (
    <>
    <section className='relative border'>

    {/* <div className='h-[30vh]   absolute top-0  w-[40vw] overflow-hidden' >
          <img src={checkbg} className='h-[600%] brightness-150 w-full object-cover'></img>
    </div> */}

    <h2 className='text-center text-6xl my-10 w-full '>Features</h2>

        <div className='w-full h-[80vh]  flex items-center gap-10'>


            <div className='w-[50%] h-full text-3xl flex flex-col'>

                <ul className=''>
                    <li className='py-10 border-b border-t border-grey hover:bg-default-grey text-center'>Design with Your Vision</li>
                    <li className='py-10 border-b border-grey hover:bg-default-grey text-center  '>Fabric, Size & Color Customization</li>
                    <li className='py-10 border-b border-grey hover:bg-default-grey text-center'>Upload Your Own Models</li>
                    <li className='py-10 border-b border-grey hover:bg-default-grey text-center'>Gender Selection</li>
                </ul>
               
            </div>

            <div className='w-[50%] h-full'>
                {/* <Prompt/> */}
                {/* <Fabric/> */}
                <GenderSelection/>
                {/* <OwnModal/> */}
            </div>
        
        </div>

    </section>
    </>
  )
}

export default Features