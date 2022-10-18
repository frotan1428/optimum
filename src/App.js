import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavbarList from './components/home/NavbarList'
import NotFound from './components/notfound/NotFound'
import Featuers from './components/pages/Featuers'
import FreeQutes from './components/pages/FreeQutes'
import Page from './components/pages/Page'
import Team from './components/pages/Team'
import Service from './components/service/Service'
import Testmonial from './components/testmonials/Testmonial'

const App = () => {
  return (
    <BrowserRouter>
    <NavbarList/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="page" element={<Page />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="testmonials" element={<Testmonial />} />
      <Route path="feature" element={<Featuers />} />
      <Route path="quote" element={<FreeQutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    
  )
}

export default App