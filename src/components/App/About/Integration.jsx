import React from 'react';

const Integration = ({ integrations, rtl }) => {
  return (
    <div className="integration pt-60" data-scroll-index="3">
      <div className="section-head text-center style-4">
        <small className="title_small">{ 'Works Can Contribute' }</small>
        <h2 className="mb-20">{ 'Technologies We' } <span>{ 'Work With' }</span> </h2>
        <p>{'Leveraging cutting-edge technologies to deliver innovative solutions, including mobile and web development to drive your business forward.' }</p>
      </div>
      <div className="container">
        <div className="content">
          {
            integrations.map((integration, index) => (
              <div className="img" key={index}>
                <img src={integration} alt="" className="mt-30" 
                style={{borderRadius:100}}
                />
              </div>
            ))
          }
        </div>
      </div>
      <img src="/assets/img/about/intg_back.png" alt="" className="intg-back" />
    </div>
  )
}

export default Integration