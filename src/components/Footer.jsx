import React from 'react'
import { logo } from '../utils'
const Footer = () => {
  return (
    <section className='h-[55vh] bg-[#121215] mt-10 px-10 pt-10'>

     <div className='flex items-center justify-around h-[85%] w-full'>

    <img src={logo} className='h-[50%] '></img>

        <div className='flex flex-col w-[80%] gap-7 pb-10'>

            <div className='text-6xl tracking-widest text-center text-gray-400'>STYLE ME</div>

            <div className='flex justify-evenly'>

                {/* About Us */}
                <div className='flex flex-col gap-3'>
                    <div className='text-2xl'>About Us</div>

                    <div className='flex flex-col'>
                        <div>Team</div>

                    </div>

                </div>

                {/* Quick Links */}
                <div className='flex flex-col gap-3'>
                    <div className='text-2xl'>Quick Links</div>

                    <div className='flex flex-col'>
                        <div>Design</div>
                        <div>FAQ</div>
                        <div>Pricing</div>

                    </div>

                </div>

                {/* Support */}
                <div className='flex flex-col gap-3'>
                    <div className='text-2xl'>Support</div>

                    <div className='flex flex-col'>
                        <div>support@styleme.com</div>
                        <div>+1(234)567890</div>
                        <div>123 FashionAve,Style City</div>

                    </div>

                </div>


            </div>

        </div>

     </div>



     <hr className='bg-white border border-white '></hr>

     <div className='justify-between flex text-xs py-2'>
        <div>Copyright@ 2025 StyleMe</div>
        <div>Terms Of Service</div>
        <div>Back to Top</div>

     </div>
     
    </section>

  )
}

export default Footer