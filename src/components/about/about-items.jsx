import React from 'react'

const AboutItems = (props) => {
  return (
    <div className="col-12 d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-user-tie text-white" />
                </div>
                <div className="ms-4">
                  <h6>{props.title}</h6>
                  <span>{props.desc}</span>
                </div>
              </div>
  )
}

export default AboutItems