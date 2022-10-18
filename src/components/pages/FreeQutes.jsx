import React from 'react'
import BannerItems from '../banner/banner-item'

const FreeQutes = () => {
  return (
    <div>
         <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Navbar & Hero Start */}
        <BannerItems  title="Free Qoutes " item1="Home" item2="pages" item3="free Qoutes"/>
  
        {/* Navbar & Hero End */}
        {/* Quote Start */}
        <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Free Quote</div>
              <h2 className="mb-5">Request A Free Quote</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Financial Consultancy">
                          <option selected>Financial Consultancy</option>
                          <option value={1}>Strategy Consultancy</option>
                          <option value={2}>Tax Consultancy</option>
                        </select>
                        <label htmlFor="floatingSelect">Select A Service</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                        <label htmlFor="message">Comments</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Request Quote</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Quote End */}
       
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
    </div>
  )
}

export default FreeQutes