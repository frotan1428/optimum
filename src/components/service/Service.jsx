import React from 'react'
import ServiceItem from './Service-item'

const Service = () => {
  return (
    <div className="container-xxl bg-white p-0">
    {/* Spinner Start */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Navbar & Hero Start */}
    <div className="container-xxl position-relative p-0">
      
      <div className="container-xxl bg-primary page-header">
        <div className="container text-center">
          <h1 className="text-white animated zoomIn mb-3">Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* Navbar & Hero End */}
    {/* Service Start */}
    <ServiceItem/>
    {/* Service End */}
  </div>
    
  )
}

export default Service