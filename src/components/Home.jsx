import React from 'react'
// import {  } from '../../utils'
import Hero from './Home/Hero'
import Features from './Home/Features'

function Home() {
    return (
        // <div></div>
        <>
            <div className='w-full bg-black h-content max-w-full '>


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