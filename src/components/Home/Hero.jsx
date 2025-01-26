import React, { useEffect, useRef } from 'react'
import { firstImage, checkbg, NorthEastArrow } from '../../utils/index.js'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Create Your Own <span class="text-white font-extrabold">Uni</span><span class="text-zinc-400">que</span> <span class="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Clothing Designs</span> <span class="text-white font-extrabold">Tod</span><span class="text-zinc-400">ay</span>'
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      cursorChar: '|',
      showCursor: true,
      smartBackspace: true
    };

    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section className='flex flex-col lg:flex-row max-w-full min-h-screen relative'>
      {/* Left Section */}
      <div className='w-full lg:w-[55%] text-white flex flex-col pt-10 lg:pt-20 gap-8 lg:gap-16 px-4 lg:px-0'>
        {/* Animated Text */}
        <div className='text-3xl md:text-5xl lg:text-6xl font-bold w-full lg:w-[120%] relative lg:left-[15%] z-20 tracking-tight'>
          <span ref={typedRef}></span>
        </div>

        {/* Background Pattern */}
        <div className='h-[30vh] absolute bottom-0 w-full lg:w-[50vw] overflow-hidden opacity-60'>
          <img 
            src={checkbg} 
            className='h-[600%] brightness-125 w-full object-cover mix-blend-overlay'
            alt="Background pattern"
          />
        </div>

        {/* Description */}
        <div className='font-medium text-sm md:text-md relative w-full lg:w-[80%] lg:left-[15%] z-20 text-zinc-300 leading-relaxed'>
          Unleash your creativity and design clothing that fits you perfectly. Our platform provides a personalised experience, allowing you to visualize and adjust your designs before finalizing.
        </div>

        {/* CTA Button */}
        <button className='group border-2 flex items-center gap-2 border-zinc-700 px-4 lg:px-6 py-3 lg:py-4 rounded-full relative lg:left-[15%] font-semibold hover:border-white hover:bg-white hover:text-black transition-all duration-300 z-20 w-fit'>
          <span className='text-zinc-300 group-hover:text-black transition-colors'>Get Started</span>
          <img 
            src={NorthEastArrow} 
            alt="Arrow" 
            className='w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity' 
          />
        </button>
      </div>

      {/* Right Section - Image */}
      <div className='w-full lg:w-[45%] h-[50vh] lg:h-full mt-8 lg:mt-0'>
        <div className='relative h-full w-full'>
          <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10'></div>
          <img 
            src={firstImage} 
            className='h-full w-full object-cover brightness-90'
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;