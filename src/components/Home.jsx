import React from 'react'
// import {  } from '../../utils'
import Hero from './Home/Hero'
import Features from './Home/Features'
import Steps from './Home/Steps'
import Customer from './Home/Customer'
import StyleNow from './Home/StyleNow'
import Footer from './Footer'
import WhyStyleMe from './Home/WhyStyleMe'

function Home() {
    return (
        // <div></div>
        <>
            <div className='w-full  bg-black h-content max-w-full '>


                <Hero />

                <Features />

                <Steps/>

                <WhyStyleMe/>
                <Customer/>

                <StyleNow/>

                <Footer/>

            </div>

        </>

    )
}

export default Home