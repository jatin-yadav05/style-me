import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { application1, application2, application3, application4 } from '../../utils';

const WhyStyleMe = () => {
  const imagesRef = useRef(null);
  const textsRef = useRef(null);

  useEffect(() => {
    // Log the GSAP plugins to check if ScrollTrigger is registered
    console.log('GSAP plugins:', gsap.plugins);
    
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Ensure ScrollTrigger was successfully registered
    if (!gsap.plugins.ScrollTrigger) {
      console.error('ScrollTrigger plugin is not available. Please check your GSAP setup.');
      return;
    }

    // Get the reference elements
    const imagesElement = imagesRef.current;
    const textsElements = textsRef.current?.querySelectorAll('.texts');

    if (imagesElement && textsElements) {
      // Ensure that ScrollTrigger is correctly applied
      gsap.to(textsElements, {
        scrollTrigger: {
          trigger: imagesElement, // Use imagesElement as the trigger
          pin: true, // Pin the images section
          start: 'top top', // When `.images` top hits the top of the viewport
          end: 'bottom bottom', // When `.images` bottom hits the bottom of the viewport
          scrub: 1, // Smooth scroll animation
          markers: true, // Enable markers for debugging (remove in production)
          endTrigger: '.last', // End trigger element
        },
        y: '-300%', // Move texts upward
        ease: 'power1.inOut', // Smooth easing effect
      });
    } else {
      console.error('Error: Could not find the images or texts elements.');
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-[120vh] w-full my-24">
      <h2 className="text-5xl px-20">Why StyleMe?</h2>
      <div className="h-[80%] w-full flex justify-between px-[10vw] my-10">
        {/* Texts */}
        <div
          className="w-[45%] h-full border border-white overflow-hidden"
          ref={textsRef}
        >
          <div className="texts min-h-full w-full text-center justify-center items-center flex flex-col gap-2">
            <h3 className="text-2xl">Personal Wardrobe Design</h3>
            <div>
              Create a wardrobe that is uniquely yours. Design custom clothing
              tailored to your personal style, body type, and preferences.
              Whether it's casual wear, formal attire, or special occasion
              outfits, StyleMe has you covered.
            </div>
          </div>
          <div className="texts min-h-full w-full">
            <h3 className="text-2xl">Fashion Designers and Brands</h3>
            <div>
              Empower your fashion brand with StyleMe's advanced tools. Design
              and prototype new collections, experiment with different styles,
              and get real-time feedback from your community. Stay ahead of the
              competition with innovative designs.
            </div>
          </div>
          <div className="texts min-h-full w-full">
            <h3 className="text-2xl">Costume Design for Media</h3>
            <div>
              Bring your characters to life with custom-designed costumes for
              film, television, and theater. Use StyleMe to create detailed and
              authentic costumes that perfectly match your creative vision. From
              historic pieces to futuristic attire, the possibilities are
              endless.
            </div>
          </div>
          <div className="texts min-h-full w-full last">
            <h3 className="text-2xl">Educational Institutions</h3>
            <div>
              Integrate StyleMe into your fashion design curriculum. Provide
              students with hands-on experience in designing custom clothing,
              understanding fabric properties, and exploring different styles.
              Foster creativity and innovation in the next generation of fashion
              designers.
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="w-[45%] flex justify-end items-center">
          <div className="h-[90%] w-[80%] images overflow-hidden" ref={imagesRef}>
            <img
              className="h-full w-full object-cover"
              src={application1}
              alt="Application 1"
            />
            <img
              className="h-full w-full object-cover"
              src={application2}
              alt="Application 2"
            />
            <img
              className="h-full w-full object-cover"
              src={application3}
              alt="Application 3"
            />
            <img
              className="h-full w-full object-cover"
              src={application4}
              alt="Application 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStyleMe;
















// import React from 'react'
// import { application1, application2, application3, application4 } from '../../utils'

// const WhyStyleMe = () => {
//   return (
//     <section className='h-[120vh]  w-full my-24'>

//      <h2 className='text-5xl px-20'>Why StyleMe?</h2>
//      <div className='h-[80%] w-full flex justify-between px-[10vw] my-10  '>

//         {/* text: */}
//      <div className='w-[45%] h-full   border border-white  overflow-hidden'>
//         <div className="texts min-h-full w-full text-center justify-center items-center flex flex-col gap-2">
//             <h3 className='text-2xl'>Personal Wardrobe Design</h3>
//             <div className=''>Create a wardrobe that is uniquely yours. Design custom clothing tailored to your personal style, body type and preferences.Whether it's casual wear, formal attire or special occassion outfits. StyleMe has you covered.</div>
//         </div>

//         <div className="texts min-h-full w-full ">
//             <h3 className='text-2xl'>Fashion Designers and Brands</h3>
//             <div>Empower your fashion brand with StyleMe's advanced tools.Design and prototype new collections, experiment with different styles, get real-time feedback from your community.Stay ahead of the competition with innovative designs.</div>
//         </div>

//         <div className="texts min-h-full w-full ">
//             <h3 className='text-2xl'>Costume Design for Media</h3>
//             <div>Bring your characters to life with custom-designed costumes for film, television and theater. Use StyleMe to create detailed and authentic costumes that perfectly match your creative vision. From historic pieces to futuristic attire, the possibilities are endless.</div>
//         </div>

//         <div className="texts min-h-full w-full last">
//             <h3 className='text-2xl'>Educational Institutions</h3>
//             <div>Integrate StyleMe into your fashion design curriculum.Provide students with hands-on experience in designing custom-clothing ,understanding fabric properties, and exploring different styles. Foster creativity and innovation in the next generation of fashion designers.</div>
//         </div> 

       

//      </div>

//       {/* images: */}
//      <div className='w-[45%]  flex justify-end items-center'>
//         <div className='h-[90%] w-[80%] images overflow-hidden'>
//           <img className='h-full w-full object-cover' src={application1}></img>
//           <img className='h-full w-full object-cover' src={application2}></img>
//           <img className='h-full w-full object-cover' src={application3}></img>
//           <img className='h-full w-full object-cover' src={application4}></img>
//         </div>

        
//      </div>

//      </div>


//     </section>
//   )
// }

// export default WhyStyleMe