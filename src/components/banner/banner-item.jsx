import React from 'react'
import { Link } from 'react-router-dom';

const BannerItems = (props) => {
    const {title, item1,item2,item3}= props;
  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl bg-primary page-header">
        <div className="container text-center">
          <h1 className="text-white animated zoomIn mb-3">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link className="text-white" to="/">{item1} </Link></li>
              <li className="breadcrumb-item"><Link className="text-white" to="/page">{item2}</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">{item3}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BannerItems