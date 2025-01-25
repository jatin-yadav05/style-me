import React from 'react'
import axios from 'axios'
import { Currency } from 'lucide-react';
import { orderPayment } from '../../utils/userApi';
import { useState } from 'react';
function Razorpay() {
    let [responseid,setResponseId]=useState("");
    let [responseState,setResponseState]=useState([]);
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
      
          // Correctly assigning event handlers
          script.onload = () => {
            resolve(true);
          };
      
          script.onerror = () => {
            resolve(false);
          };
      
          document.body.appendChild(script);
        });
      };
      
    const createRazorpay=(amount)=>{
        let data=JSON.stringify({
            amount:amount*100,
            currency:"INR"

        })
        let config={
            method:"post",
            maxBodyLength:Infinity,
            url:orderPayment,
            headers:{
                'Content-Type':"application/json"
            }, 
            data:data
        }
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data))
            handleRazorpayScreen(response.data.amount)
        }).catch((e)=>{
            console.log(e);
        })
    }
    const handleRazorpayScreen=async (amount)=>{
         const res=await loadScript("https:/checkout.razorpay.com/v1/checkout.js");
        if(!res){
            alert("some error at razorpay screen")
            return;
        }
        const options={
            key:'rzp_test_0njIGQXDeCFffh',
            amount:amount,
            currency:"INR",
            name:"Style-me",
            description:"payment to style-me",
            handler:function(response){
                setResponseId(response.razorpay_payment_id)
            },
            prefill:{
                name:"Herish",
                email:"herishgarg@gmail.com"
            },
            theme:{
                color:"#F4C430"
            }
        }
        const paymentObject=new window.Razorpay(options);
        paymentObject.open()
    }
    const fetchPayment=async(e)=>{
e.preventDefault();
let passwordId=e.target.paymentId.value;
await axios.get(`http://localhost:4444/api/auth/payment/${passwordId}`).then((response)=>{
    console.log(response.data);
    setResponseState(response.data)
}).catch((e)=>{
    console.log(e)
})
    }
  return ( 
    <div className='bg-white text-black flex flex-col items-center'>
<button onClick={()=>createRazorpay(100)} className='border mt-2'>Payment of 100rs</button>
{responseid &&<p>{responseid}</p>}
<h1>This is payment verifiaction form</h1>
<form onSubmit={fetchPayment}>
    <input type="text" name="paymentId"/>
    <button type="submit" className='border '>Fetch Payment</button>
</form>
    </div>
  )
}

export default Razorpay