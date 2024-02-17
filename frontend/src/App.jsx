import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Navbar from './components/nav'
import Mason from './pages/explore/mason'
import Electrician from './pages/explore/electrician'
import Painter from './pages/explore/painter'
import Carpenter from './pages/explore/carpenter'
import Roofer from './pages/explore/roofer'
import Plumber from './pages/explore/plumber'


export default function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mason" element={<Mason />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/painter" element={<Painter />} />
        <Route path="/carpenter" element={<Carpenter />} />
        <Route path="/roofer" element={<Roofer />} />
        <Route path="/plumber" element={<Plumber />} />
      </Routes>
    </Router>
  )
}
