import React from 'react'
import Carpenter from './pages/explore/carpenter'
import Electrician from './pages/explore/electrician'
import HandyHubber from './pages/handyHubberAuth'
import HandyHubberProfile from './pages/handyHubberProfile'
import HandyHubberRegister from './pages/handyHubberRegForm'
import Home from './pages/home'
import Mason from './pages/explore/mason'
import Navbar from './components/nav'
import Painter from './pages/explore/painter'
import Plumber from './pages/explore/plumber'
import Roofer from './pages/explore/roofer'
import UserAuth from './pages/userAuth'
import UserProfile from './pages/userProfile'
import { useAuthStore } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/footer'
import LinkOne from './pages/guideForYou/linkOne'
import LinkTwo from './pages/guideForYou/linkTwo'
import LinkThree from './pages/guideForYou/linkThree'
import ScrollToTop from './utliz/scrollToTop'
import { ModalProvider } from './context/modalContext'
import HandyModal from './pages/handyHubberAuth/components/modal'
import HubberStories from './pages/handyHubberAuth/components/hubberGrid/hubberStories'
import CompanyDetails from './pages/explore/exploreComponents/companyDetails'
import SearchResults from './pages/searchResults'


export default function App() {

  return (
    <ModalProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <HandyModal />
        <HubberStories />
        <Toaster position="top-right" toastOption={{duration: 1000}} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<UserLoginRoute />} />
          <Route path="/become-a-handyhubber" element={<HandyHubberLoginRoute />} />
          <Route path="/searchresults/:tag" element={<SearchResults />} />

          <Route path="/user-profile" element={<UserProfileRoute />} />
          <Route path="/handy-hubber-profile" element={<HandyHubberProfileRoute />} />
          <Route path="/register-form" element={<HandyHubberRegisterRoute />} />

          <Route path="/mason" element={<Mason />} />
          <Route path="/mason/:companyName" element={<CompanyDetails />} />

          <Route path="/electrician" element={<Electrician />} />
          <Route path="/electrician/:companyName" element={<CompanyDetails />} />

          <Route path="/painter" element={<Painter />} />
          <Route path="/painter/:companyName" element={<CompanyDetails />} />

          <Route path="/carpenter" element={<Carpenter />} />
          <Route path="/carpenter/:companyName" element={<CompanyDetails />} />

          <Route path="/roofer" element={<Roofer />} />
          <Route path="/roofer/:companyName" element={<CompanyDetails />} />

          <Route path="/plumber" element={<Plumber />} />
          <Route path="/plumber/:companyName" element={<CompanyDetails />} />

          <Route path="/guide-foryour-home-project-linkOne" element={<LinkOne />} />
          <Route path="/guide-foryour-home-project-linkTwo" element={<LinkTwo />} />
          <Route path="/guide-foryour-home-project-linkThree" element={<LinkThree />} />
        </Routes>
        <Footer />
      </Router>
    </ModalProvider>
  )
}


//User
const UserProfileRoute = () => {
  const { user } = useAuthStore()
  return user ? <UserProfile /> : <Navigate to="/auth" />
}

const UserLoginRoute = () => {
  const { user } = useAuthStore()
  return !user ? <UserAuth /> : <Navigate to="/user-profile" />
}


//HandyHubber
const HandyHubberProfileRoute = () => {
  const { handyHubberUser } = useAuthStore()
  return handyHubberUser ? <HandyHubberProfile /> : <Navigate to="/become-a-handyhubber" />
}

const HandyHubberRegisterRoute = () => {
  const { handyHubberUser } = useAuthStore()
  return handyHubberUser ? <HandyHubberRegister /> : <Navigate to="/register-form" />
}

const HandyHubberLoginRoute = () => {
  const { handyHubberUser } = useAuthStore()
  return !handyHubberUser ? <HandyHubber /> : <Navigate to="/handy-hubber-profile" />
}