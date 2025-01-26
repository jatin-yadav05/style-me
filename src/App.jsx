import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Generate from './components/Generate'
import Home from './components/Home'
import Pricing from './components/Pricing'
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard"
import {GoogleOAuthProvider} from '@react-oauth/google'
import PreventPages from './components/PreventPages'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  let GoogleAuthWrapper = () => (
    <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
      <Login />
    </GoogleOAuthProvider>
  )

  let GoogleAuthSign = () => (
    <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
      <SignIn />
    </GoogleOAuthProvider>
  )

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/login" element={<GoogleAuthWrapper />} />
          <Route path="/signin" element={<GoogleAuthSign />} />
          <Route path="/dashboard" element={<PreventPages><Dashboard /></PreventPages>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App