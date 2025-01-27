

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Layout from './Pages/LayoutPage'
import PageNotFound from './Components/Extra/PageNotFound'
import LandingPage from './Pages/Landing.Page'
import Navbar from './Components/Navbar/NavbarComponent'
import Loading from './Components/Extra/Loading'
const App: React.FC = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<LandingPage />} />
          <Route path="dashboard" element={<Navbar />} />
          <Route path="gym" element={<h2>"Helolo"</h2>} />
          <Route path="dancing" element={<h2> Dance </h2>} />
          <Route path="sad" element={<h1>About</h1>} />
          <Route path="muslim" element={<Loading />} />
          <Route path="hindu" element={<PageNotFound />} />
          <Route path="random" element={<PageNotFound />} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>

        <Route path="/virals" element={<h2>Nothing to Show </h2>} />
        <Route path="*" element={<PageNotFound />} />



      </Routes>
    </BrowserRouter>

  )
}

export default App
