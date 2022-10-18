import React from 'react'
import { Link } from 'react-router-dom'
import BannerItems from '../banner/banner-item'
import Myheading from '../Title/heading'
import AboutItems from './about-items'

const About = () => {
  return (
    <div className="container-xxl bg-white p-0">
    {/* Spinner Start
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Navbar & Hero Start */}

   <BannerItems  title="About us" item1="Home" item2="pages" item3="About"/>
    {/* Navbar & Hero End */}
    {/* About Start */}
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
            <img className="img-fluid" src="img/about.png" alt='about' />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About Us</div>
            <h2 className="mb-4">Award Wining Consultancy Agency For Your Business</h2>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
            <div className="row g-3 mb-4">
              <AboutItems  
              title="Financial Analaysis" 
              desc="Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"/>

              <AboutItems  
              title="Financial Analaysis" 
              desc="Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"/>
            </div>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
  </div>
  )
}

export default About