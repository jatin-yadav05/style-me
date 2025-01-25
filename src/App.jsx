import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Generate from './components/Generate'
import Home from './components/Home'
import Planning from './components/planning'
import SignIn from "./components/SignIn"

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="font-jakarta">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App