import React from 'react'

const NotFound= () => {
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
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl bg-primary page-header">
        <div className="container text-center">
          <h1 className="text-white animated zoomIn mb-3">Not Found</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">404</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    {/* Navbar & Hero End */}
    {/* 404 Start */}
    <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary" />
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href>Go Back To Home</a>
          </div>
        </div>
      </div>
    </div>
    {/* 404 End */}
   
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  )
}

export default NotFound