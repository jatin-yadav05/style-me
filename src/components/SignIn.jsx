import React, { useState } from 'react'
import './style.css'
import Input from './ui/Input'
import { AiOutlineLock, AiOutlineMail, AiFillUnlock } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { registerRoutes } from '../../utils/userApi'
import { Link } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from '../../utils/userApi'
function SignIn() {
  const [typePassword, setTypePassword] = useState(true)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const toastOptions = {
    position: "top-right",
    draggable: true,
    pauseOnHover: true,
    autoClose: "5000",
    theme: "dark"
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validation = () => {
    if (username.length <= 3) {
      toast.error("Username must be more than 3", toastOptions)
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be more than 8", toastOptions)
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email is not correect", toastOptions)
      return false;
    }
    if (password !== cpassword) {
      toast.error("Passowrd is not match", toastOptions)
      return false;
    }
    return true;

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
const GoogleSign=useGoogleLogin({
  onSuccess:responseGoogle,
  onError:responseGoogle,
  flow:"auth-code"
})
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (validation()) {
        const userData = {
          username,
          email,
          password
        }
        const response = await axios.post(registerRoutes, userData);
        if (!response.data.status) {
          return toast.error(response.data.msg, toastOptions)
        }
        toast.success(response.data.msg, toastOptions);
        setUsername("");
        setCpassword("");
        setPassword("");
        setEmail("")
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <div className="parent-container">
        <div className='child-container'>
          <h1>CREATE ACCOUNT</h1>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input placeholder="Username" type="text" className="mt-5" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder="Email" type="email" className="mt-3" value={email} onChange={(e) => setEmail(e.target.value)}><AiOutlineMail /></Input>
              <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} type={typePassword ? "password" : "text"} className="mt-3" onClick={() => setTypePassword(!typePassword)}>{typePassword ? (<AiOutlineLock />) : (<AiFillUnlock />)}</Input>
              <Input placeholder="Confirm-Password" onChange={(e) => setCpassword(e.target.value)} value={cpassword} type="password" className="mt-3" />
              <p className="text-gray-400 mt-4 text-sm">
                Already have an Account?{' '}
                <Link to='/login' className="text-[#A297CE] underline hover:text-[#C8B4E4] transition-all">
                  Login
                </Link>
              </p>
              <input type="submit" value="Create Account" className='w-80 border-[#A297CE] text-lg border p-3 mt-7 rounded active:bg-[#131019] cursor-pointer' />
            </form>
            <div className="mt-6 flex flex-col items-center">
              <button
                className="flex items-center justify-center w-80 bg-white text-black text-lg font-medium border border-gray-300 rounded-lg p-3 shadow hover:shadow-md transition-all"
                onClick={() =>GoogleSign()}
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

export default SignIn