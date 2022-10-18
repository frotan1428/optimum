import React from 'react'

const ServicesItems = (props) => {
  return (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={props.delay}>
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <i className="fa fa-user-tie fa-2x" />
                    </div>
                    <a className="service-btn" href>
                      <i className="fa fa-link fa-2x" />
                    </a>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">{props.title}</h5>
                    <span>{props.desc}</span>
                  </div>
                </div>
         </div>
  )
}

export default ServicesItems