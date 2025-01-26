import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Generate from './components/Generate'
import Home from './components/Home'
import Pricing from './components/Pricing'
import SignIn from "./components/SignIn"
import {GoogleOAuthProvider} from '@react-oauth/google'
function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
let GoogleAuthWrapper=()=>{
  return(
    <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
    <Login></Login>
  </GoogleOAuthProvider>
  )
}
let GoogleAuthSign=()=>{
  return (
    <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
      <SignIn></SignIn>
    </GoogleOAuthProvider>
  )
}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/signin" element={<GoogleAuthSign />} />
      

      </Routes>
    </Router>
  )
}

export default App