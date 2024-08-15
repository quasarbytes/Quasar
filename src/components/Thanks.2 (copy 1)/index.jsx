import React from 'react'

const NotFound = () => {
  return (
    <section className="erorr-page style-5">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="info">
                <div className="icon">
                  <img src="/assets/img/icons/rocket.png" alt="" />
                </div>
                <h2 className="mb-30"> Thank You! </h2>
                <p className="color-777"> for reaching out. Your message is important to us. We'll review it promptly and get back to you as soon as possible. We appreciate your patience while we work on addressing your inquiry. </p>
                <a href="/" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-40">
                  <span> <i className="fas fa-long-arrow-left me-2"></i> Back To Home </span>
                </a>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="img">
                <img style={{height:600,width:600}} src="/assets/img/thankYou4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound