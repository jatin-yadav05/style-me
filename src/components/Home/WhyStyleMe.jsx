
import React from 'react'
import { application1, application2, application3, application4 } from '../../utils'

const WhyStyleMe = () => {
  return (
    <section className='h-[120vh]  w-full my-24'>

     <h2 className='text-5xl px-20'>Why StyleMe?</h2>
     <div className='h-[80%] w-full flex justify-between px-[10vw] my-10  '>

        {/* text: */}
     <div className='w-[45%] h-full   border border-white  overflow-hidden'>
        <div className="texts min-h-full w-full text-center justify-center items-center flex flex-col gap-2">
            <h3 className='text-2xl'>Personal Wardrobe Design</h3>
            <div className=''>Create a wardrobe that is uniquely yours. Design custom clothing tailored to your personal style, body type and preferences.Whether it's casual wear, formal attire or special occassion outfits. StyleMe has you covered.</div>
        </div>

        <div className="texts min-h-full w-full ">
            <h3 className='text-2xl'>Fashion Designers and Brands</h3>
            <div>Empower your fashion brand with StyleMe's advanced tools.Design and prototype new collections, experiment with different styles, get real-time feedback from your community.Stay ahead of the competition with innovative designs.</div>
        </div>

        <div className="texts min-h-full w-full ">
            <h3 className='text-2xl'>Costume Design for Media</h3>
            <div>Bring your characters to life with custom-designed costumes for film, television and theater. Use StyleMe to create detailed and authentic costumes that perfectly match your creative vision. From historic pieces to futuristic attire, the possibilities are endless.</div>
        </div>

        <div className="texts min-h-full w-full last">
            <h3 className='text-2xl'>Educational Institutions</h3>
            <div>Integrate StyleMe into your fashion design curriculum.Provide students with hands-on experience in designing custom-clothing ,understanding fabric properties, and exploring different styles. Foster creativity and innovation in the next generation of fashion designers.</div>
        </div> 

       

     </div>

      {/* images: */}
     <div className='w-[45%]  flex justify-end items-center'>
        <div className='h-[90%] w-[80%] images overflow-hidden'>
          <img className='h-full w-full object-cover' src={application1}></img>
          <img className='h-full w-full object-cover' src={application2}></img>
          <img className='h-full w-full object-cover' src={application3}></img>
          <img className='h-full w-full object-cover' src={application4}></img>
        </div>

        
     </div>

     </div>


    </section>
  )
}

export default WhyStyleMe