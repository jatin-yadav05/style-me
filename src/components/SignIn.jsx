import React, { useState } from 'react'
import './style.css'
import Input from './ui/Input'
import {AiOutlineLock,AiOutlineMail,AiFillUnlock} from 'react-icons/ai'
function SignIn() {
 const [typePassword,setTypePassword]=useState(true)
  return (
    <>
    <div  className="parent-container">
        <div className='child-container'>
      <h1>CREATE ACCOUNT</h1> 
        <div>
            <form>
            <Input placeholder="Username" type="text" className="mt-6"/>
            <Input placeholder="Email" type="email" className="mt-4"><AiOutlineMail/></Input>
            <Input placeholder="Password" type={typePassword?"password":"text"} className="mt-4" onClick={()=>setTypePassword(!typePassword)}>{typePassword?(<AiOutlineLock/>):(<AiFillUnlock/>)}</Input>
            <Input placeholder="Confirm-Password" type="password" className="mt-4"/>
            <input type="button" value="Create Account" className='w-80 border-[#A297CE] text-lg border p-3 mt-8 rounded active:bg-[#131019] cursor-pointer'/>
            </form>
        </div>
        </div>
    </div></>
  )
}

export default SignIn