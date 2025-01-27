

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Layout from './Components/Layout'
import PageNotFound from './Components/PageNotFound'
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar/NavbarComponent'
import MusicTrack from './Components/Music/MusicTrack'
import Loading from './Components/Extra/Loading'
import ReelsBox from './Components/Reels/ReelsBox'
const App: React.FC = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<LandingPage />} />
          <Route path="dashboard" element={<Navbar />} />
          <Route path="gym" element={<h2>"Helolo"</h2>} />
          <Route path="dancing" element={<h2> Dance </h2>} />
          <Route path="sad" element={<MusicTrack />} />
          <Route path="muslim" element={<Loading />} />
          <Route path="hindu" element={<PageNotFound />} />
          <Route path="random" element={<PageNotFound />} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>

        <Route path="/virals" element={<ReelsBox />} />
        <Route path="*" element={<PageNotFound />} />



      </Routes>
    </BrowserRouter>

  )
}

export default App
