import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/nav'
import Mason from './pages/explore/mason'
import Electrician from './pages/explore/electrician'
import Painter from './pages/explore/painter'
import Carpenter from './pages/explore/carpenter'
import Roofer from './pages/explore/roofer'
import Plumber from './pages/explore/plumber'
import HandyHubber from './pages/handyHubber'
import Auth from './pages/auth'
import { AuthProvider } from './context/AuthContext'



export default function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/become-a-handyhubber" element={<HandyHubber />} />

          <Route path="/mason" element={<Mason />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/painter" element={<Painter />} />
          <Route path="/carpenter" element={<Carpenter />} />
          <Route path="/roofer" element={<Roofer />} />
          <Route path="/plumber" element={<Plumber />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
