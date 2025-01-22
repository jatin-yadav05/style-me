import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Generate from './components/Generate'
import Home from './components/Home'
import Planning from './components/planning'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App