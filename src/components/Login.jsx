import React, { useState } from 'react'
import './style.css'
import Input from './ui/Input'
import { AiOutlineLock, AiOutlineMail, AiFillUnlock } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { loginRoutes } from '../../utils/userApi'
import { Link } from 'react-router-dom'
import {useGoogleLogin} from '@react-oauth/google'
import { googleAuth } from '../../utils/userApi'
function Login() {
  const [typePassword, setTypePassword] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const toastOptions = {
    position: "top-right",
    draggable: true,
    pauseOnHover: true,
    autoClose: "5000",
    theme: "dark"
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validation = () => {
    if (!email) {
      toast.error("Email is required", toastOptions)
      return false;
    }
    if (!password) {
      toast.error("Password is required", toastOptions)
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email is not correct", toastOptions)
      return false;
    }
    return true;

  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (validation()) {
        const values = {
          email, password
        }
        const response = await axios.post(loginRoutes, values);
        if (!response.data.status) {
          return toast.error(response.data.msg, toastOptions)
        }
        toast.success(response.data.msg, toastOptions);
        setPassword("");
        setEmail("");
      }
    } catch (e) {
      console.error(e);
    }
  }
  const responseGoogle=async(authResult)=>{
    
    try{
      if(authResult['code']){

        const result=await googleAuth(authResult['code'])
        const {email,username,picture}=result.data.user
        console.log(result)
      }
    
    }catch(e){
      console.error("Error occurs"+e);
    }
  }
const GoogleLogin=useGoogleLogin({
  onSuccess:responseGoogle,
  onError:responseGoogle,
  flow:"auth-code"
})
  return (
    <>
      <div className="parent-container">
        <div className='child-container'>
          <h1>CREATE ACCOUNT</h1>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input placeholder="Email" type="email" className="mt-4" value={email} onChange={e => setEmail(e.target.value)}><AiOutlineMail /></Input>
              <Input placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} type={typePassword ? "password" : "text"} className="mt-4" onClick={() => setTypePassword(!typePassword)}>{typePassword ? (<AiOutlineLock />) : (<AiFillUnlock />)}</Input>
              <p className="text-gray-400 mt-4 text-sm">
                Don't have an Account?{' '}
                <Link to='/signin' className="text-[#A297CE] underline hover:text-[#C8B4E4] transition-all">
                  Register
                </Link>
              </p>
              <input type="submit" value="Login" className='w-80 border-[#A297CE] text-lg border p-3 mt-8 rounded active:bg-[#131019] cursor-pointer' />
            </form>
            <div className="mt-6 flex flex-col items-center">
              <button
                className="flex items-center justify-center w-80 bg-white text-black text-lg font-medium border border-gray-300 rounded-lg p-3 shadow hover:shadow-md transition-all"
                onClick={() =>GoogleLogin()}
              >
                <img
                  src="/icons/google.jpeg"
                  className="w-6 h-6 mr-3"
                />
                Continue with Google
              </button>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Login