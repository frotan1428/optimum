import React from 'react'
import FeatuersItem from './featuers-item'

const FeatuersContent = () => {
  return (
    <div className="container-xxl py-6">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Features</div>
          <h2 className="mb-4">Why People Choose Us? We Are Trusted &amp; Award Wining Agency</h2>
          <p>Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
          <p>Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
          <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
        </div>
        <div className="col-lg-7">
          <div className="row g-5">
            <FeatuersItem  
            delay="0.1s"
            title="Best In Industry" 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />

          <FeatuersItem  
            delay="0.2s" 
            title="99% Success Rate" 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />
          <FeatuersItem  
            delay="0.3s" 
            title="Award wining " 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />
            <FeatuersItem  
            delay="0.4s" 
            title="100% Happy Client " 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />
             <FeatuersItem  
            delay="0.5s" 
            title="Professional Advisors" 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />
             <FeatuersItem  
            delay={0.6}
            title="24/7 Customer Support" 
            desc="Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatuersContent