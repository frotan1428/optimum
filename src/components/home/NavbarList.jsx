import React from 'react'
import { Link } from 'react-router-dom'

const NavbarList = () => {
  return (
    <div className="container-xxl bg-white p-0">
       <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <a href="index.html" className="navbar-brand p-0">
      <h1 className="m-0">Optimum Consultancy Services</h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <Link to="about" className="nav-item nav-link">About</Link>
        <Link to="service" className="nav-item nav-link">Service</Link>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0">
            <Link to="feature" className="dropdown-item">Features</Link>
            <Link to="quote" className="dropdown-item">Free Quote</Link>
            <Link to="team" className="dropdown-item">Our Team</Link>
            <Link to="testmonials" className="dropdown-item">Testimonial</Link>
            <Link to="*" className="dropdown-item">404 Page</Link>
          </div>
        </div>
        <Link to="contact" className="nav-item nav-link">Contact</Link>
      </div>
      <a href className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">Free Quote</a>
    </div>
  </nav>
  </div>
  </div>
  )
}

export default NavbarList