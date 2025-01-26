import React from 'react'
import { fabricImg } from '../../utils'
const Fabric = () => {
    return (
        <section className='h-full max-w-[100%] justify-between p-10 flex flex-col'>
       
     

      <div className='relative'>
      <div className='text-7xl z-20 relative '>
        YOUR STYLE,
      </div>
      <img src={fabricImg} className='  top-[10%] grayscale-[0.75] flex justify-self-end w-36 right-[10%] absolute z-10  rotate-[-25deg]'>
      </img>

      <div className='text-7xl z-50 relative pl-32 mix-blend-difference'>
        YOUR WAY
      </div>
      </div>


            <div className='text-2xl'>
                Customize every detail of your clothing. Choose from a variety of fabrics, select the perfect size, and pick your favorite colors. Our platform offers endless customization options to ensure your garment is uniquely yours.Enjoy a seamless experience in creating a wardrobe that truly reflects your individuality.
            </div>
        </section>
    )
}

export default Fabric