import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/nav'
import Mason from './pages/explore/mason'
import Electrician from './pages/explore/electrician'
import Painter from './pages/explore/painter'
import Carpenter from './pages/explore/carpenter'
import Roofer from './pages/explore/roofer'
import Plumber from './pages/explore/plumber'
import HandyHubber from './pages/handyHubberAuth'
import UserAuth from './pages/userAuth'
import { AuthContext, AuthProvider } from './context/AuthContext'
import UserProfile from './pages/userProfile'
import HandyHubberProfile from './pages/handyHubberProfile'
import HandyHubberRegister from './pages/handyHubberRegForm'


export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<UserLoginRoute />} />
          <Route path="/become-a-handyhubber" element={<HandyHubberLoginRoute />} />

          <Route path="/user-profile" element={<UserProfileRoute />} />
          <Route path="/handy-hubber-profile" element={<HandyHubberProfileRoute />} />
          <Route path="/register-form" element={<HandyHubberRegisterRoute />} />

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


//User
const UserProfileRoute = () => {
  const { user } = useContext(AuthContext)
  return user ? <UserProfile /> : <Navigate to="/auth" />
}

const UserLoginRoute = () => {
  const { user } = useContext(AuthContext)
  return !user ? <UserAuth /> : <Navigate to="/user-profile" />
}


//HandyHubber
const HandyHubberProfileRoute = () => {
  const { handyHubberUser } = useContext(AuthContext)
  return handyHubberUser ? <HandyHubberProfile /> : <Navigate to="/become-a-handyhubber" />
}

const HandyHubberRegisterRoute = () => {
  const { handyHubberUser } = useContext(AuthContext)
  return handyHubberUser ? <HandyHubberRegister /> : <Navigate to="/become-a-handyhubber" />
}

const HandyHubberLoginRoute = () => {
  const { handyHubberUser } = useContext(AuthContext)
  return !handyHubberUser ? <HandyHubber /> : <Navigate to="/handy-hubber-profile" />
}