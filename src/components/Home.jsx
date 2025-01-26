import React from 'react'
// import {  } from '../../utils'
import Hero from './Home/Hero'
import Features from './Home/Features'
import Steps from './Home/Steps'
import WhyStyleMe from './Home/WhyStyleMe'
import Customer from './Home/Customer'
import StyleNow from './Home/StyleNow'
import Footer from './Footer'
<<<<<<< HEAD



function Home() {
    return (
        // <div></div>
        <>
            <div className='w-full bg-black h-content max-w-full '>


                
=======

function Home() {
    return (
        <div className='w-full bg-black min-h-screen overflow-x-hidden'>
            <main className='flex flex-col'>
>>>>>>> 84b8da86fe03120ffc2a3f4a550e4effbe02ba68
                <Hero />
                <Features />
<<<<<<< HEAD

                <Steps/>

                <WhyStyleMe/>
                <Customer/>

                <StyleNow/>

                <Footer/> 

            </div>

        </>

=======
                <Steps />
                <WhyStyleMe />
                <Customer />
                <StyleNow />
                <Footer />
            </main>
        </div>
>>>>>>> 84b8da86fe03120ffc2a3f4a550e4effbe02ba68
    )
}

export default Home