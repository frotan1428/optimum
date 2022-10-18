import React from 'react'
import ServicesItems from './services-items'

const ServiceItem = () => {
  return (
    <div>
         <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
              <h2 className="mb-5">We Provide Solutions On Your Business</h2>
            </div>
            <div className="row g-4">

             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             <ServicesItems 
                title="Business Research"  
                delay="0.6s"  
                desc="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."/>
             
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceItem