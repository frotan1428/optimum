import React from 'react'

const FeatuersItem = (props) => {
   const  {delay,title,desc} = props;
  return (
    
        <div className="col-sm-6 wow fadeIn" data-wow-delay= {delay}>
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-cubes text-white" />
                  </div>
                  <h6 className="mb-0">{title}</h6>
                </div>
                <span>{desc}</span>
              </div>
    
  )
}

export default FeatuersItem