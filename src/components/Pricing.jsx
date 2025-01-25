import React from 'react';
import { useState } from 'react';
import {createRazorpay} from './Razorpay'
import { useNavigate } from 'react-router-dom';
const Planning = () => {
  const [packTime,setPackTime]=useState(true)
  const [payClick,setPayclick]=useState(false);
 const navigate=useNavigate();
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center mt-12 w-[100%] '>
        <div className='w-[31.5%] flex flex-col items-center '>
        <h1 className='text-6xl'>Plans and Pricing</h1>
        <h5 className='mt-3 tracking-widest'>Receive unlimited credits when youpay yearly,and</h5>
        <h5>save on your plan</h5>
        <div className='mt-6 flex gap-0 bg-[#27272a] rounded '> 
          <button className={`p-2 text-xl  m-1 rounded px-10 bg-${packTime?"[#1d1d1f]":""}`} onClick={()=>setPackTime(true)}>Monthly</button>
          <button className={`p-2 text-xl  m-1 rounded px-10 bg-${!packTime?"[#1d1d1f]":""}`} onClick={()=>setPackTime(false)}>Annual</button>
        </div>
        </div>
      </div>

  {packTime &&<div className='mt-11 flex gap-2 mx-56'>
        <div className=' hover:bg-[#27272a] border-[3px] transition-all duration-500 rounded border-[#27272a] h-[70vh] w-80'>
    <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Free</h2>
    <h1 className='text-5xl mt-5'>₹0</h1>
    <h3 className='text-lg mt-1 mb-4'>Per user/monthly,billed annually</h3>
    
    <div className='mt-5'>
    <h2 className='text-3xl mb-5' >For you hobby</h2>
    <ul style={{listStyle:"disc"}}>
      <li>Basic design tools</li>
      <li>Limited fabric and color options</li>
      <li>standard customer support</li>
      <li>Access to community forums</li>
    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-16 mr-6 p-2 text-lg hover:bg-[#121215]'>Get Started</button>
</div> 
</div>
        <div className='hover:bg-[#27272a] border-[3px] rounded transition-all duration-300 border-[#3f3f46] h-[70vh] w-80'>
        <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Pro</h2>
    <h1 className='text-5xl mt-5'>₹99</h1>
    <h3 className='text-lg mt-1 mb-2'>Per user/monthly,billed annually</h3>
    
    <div className='mt-4'>
    <h2 className='text-3xl mb-5' >For small business</h2>
    <ul style={{listStyle:"disc"}}>
      <li>Advanced design tools</li>
      <li>Unlimited fabric and color options</li>
      <li>Priority customer support</li>
      <li>Access to exclusive design templates</li>
      <li>High resolution 2D previews</li>
      <li>Feedback and adjustment tools</li>

    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-6 mr-6 p-2 text-lg hover:bg-[#121215]' onClick={()=>createRazorpay(99,navigate)}>Upgrade to Pro</button>
</div> 
          
        </div>
        <div className='bg-[#3f3f46] border-[3px] hover:bg-[#27272a] rounded transition-all duration-300 border-[#27272a] h-[70vh] w-80'>
        <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Enterprise</h2>
    <h1 className='text-5xl mt-5'>Custom</h1>
    <h3 className='text-lg mt-1 mb-2'>Per user/monthly,billed annually</h3>
    
    <div className='mt-4'>
    <h2 className='text-3xl mb-5' >For multiple teams</h2>
    <ul style={{listStyle:"disc"}}>
      <li>All pro features</li>
      <li>Custom branding options</li>
      <li>Dedicated account manager</li>
      <li>Enterprise-level support</li>
      <li>Custom integrations</li>
      <li>Bulk design options</li>

    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-6 mr-6 p-2 text-lg hover:bg-[#121215]'>Start with Enterprise</button>
</div> 
        </div>
      </div>}
      {!packTime &&<div className='mt-11 flex gap-2 mx-56'>
        <div className=' hover:bg-[#27272a] border-[3px] transition-all duration-500 rounded border-[#27272a] h-[70vh] w-80'>
    <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Free</h2>
    <h1 className='text-5xl mt-5'>₹0</h1>
    <h3 className='text-lg mt-1 mb-4'>Per user/monthly,billed annually</h3>
    
    <div className='mt-5'>
    <h2 className='text-3xl mb-5' >For you hobby</h2>
    <ul style={{listStyle:"disc"}}>
      <li>Basic design tools</li>
      <li>Limited fabric and color options</li>
      <li>standard customer support</li>
      <li>Access to community forums</li>
    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-16 mr-6 p-2 text-lg hover:bg-[#121215]'>Get Started</button>
</div> 
</div>
        <div className='hover:bg-[#27272a] border-[3px] rounded transition-all duration-300 border-[#3f3f46] h-[70vh] w-80'>
        <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Pro</h2>
    <h1 className='text-5xl mt-5'>₹1099</h1>
    <h3 className='text-lg mt-1 mb-2'>Per user/monthly,billed annually</h3>
    
    <div className='mt-4'>
    <h2 className='text-3xl mb-5' >For small business</h2>
    <ul style={{listStyle:"disc"}}>
      <li>Advanced design tools</li>
      <li>Unlimited fabric and color options</li>
      <li>Priority customer support</li>
      <li>Access to exclusive design templates</li>
      <li>High resolution 2D previews</li>
      <li>Feedback and adjustment tools</li>

    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-6 mr-6 p-2 text-lg hover:bg-[#121215]' onClick={()=>createRazorpay(1099,navigate)}>Upgrade to Pro </button>
</div> 
          
        </div>
        <div className='bg-[#3f3f46] border-[3px] hover:bg-[#27272a] rounded transition-all duration-300 border-[#27272a] h-[70vh] w-80'>
        <div className='flex flex-col mt-6 ml-7 '> 
    <h2 className='text-3xl my-2'>Enterprise</h2>
    <h1 className='text-5xl mt-5'>Custom</h1>
    <h3 className='text-lg mt-1 mb-2'>Per user/monthly,billed annually</h3>
    
    <div className='mt-4'>
    <h2 className='text-3xl mb-5' >For multiple teams</h2>
    <ul style={{listStyle:"disc"}}>
      <li>All pro features</li>
      <li>Custom branding options</li>
      <li>Dedicated account manager</li>
      <li>Enterprise-level support</li>
      <li>Custom integrations</li>
      <li>Bulk design options</li>

    </ul>
    </div>

    <button className='border-2 border-[#fff] rounded mt-6 mr-6 p-2 text-lg hover:bg-[#121215]'>Start with Enterprise</button>
</div> 
        </div>
      </div>}
    </div>

  );
};

export default Planning;


