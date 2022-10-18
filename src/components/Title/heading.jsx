import React from 'react'

const Myheading = (props) => {
    const {delay, title, desc}= props;
  return (
    
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay={delay} style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">{title}</div>
              <h2 className="mb-5">{desc}</h2>
            </div>
  )
}

export default Myheading