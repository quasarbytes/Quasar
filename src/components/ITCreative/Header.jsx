import React from 'react';
import CountTo from '../CountTo';
import numbers from 'data/DataAnalysis/numbers.json';
import ModalAndToast from 'components/Modal/index.jsx';
const Header = ({secondaryPage}) => {
  const numbersSectionRef = React.useRef(null);
  const [position] = React.useState({ from: 200, to: 2750 });
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal && <div style={{position:"absolute"}}>
        <ModalAndToast setShowModal={setShowModal} />
      </div>}
      <header className="style-7">
        <div className="content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="info mt-5 mt-lg-0">
                  <div className="section-head style-4">
                    <div className="top-title">
                      <img src="/assets/img/line_l.png" alt="" />
                      <h5> Get Solid Solution </h5>
                    </div>
                  </div>
                  {
                    secondaryPage ==1?
                    <h1>
                    {/* Choose The <br />  */}
                    <span className="num"> #01 </span> <span className="text-grad"> APP</span>Development Company<br />
                  </h1>
                    :
                    secondaryPage ==2?
                    <h1>
                    <span className="num"> #01 </span> <span className="text-grad"> {"WEB"}</span>Development Company<br />
                  </h1>
                    :
                  <h1>
                    Choose The <br /> <span className="num"> #01 </span> <span className="text-grad"> IT Solutions</span><br />
                  </h1>
                  }
                  <div className="d-flex flex-wrap">
                    <a href="javascript:void(0)" onClick={()=>{setShowModal(true)}} className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4" >
                      <small> Get A Quote <i className="fas fa-long-arrow-alt-right"></i> </small>
                    </a>
                    {/* <div className="inf mt-3 mt-lg-0">
                      <p className="color-999"> Support Email </p>
                      <a href="mailto:hello@quasarbytes.com" className="fw-bold"> hello@quasarbytes.com </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img mt-4 mt-lg-0">
                  <img loading="eager" src="/assets/img/header/team4.png" alt="" />
                  <img src="/assets/img/header/head7_rock2.png" alt="" className="rock7 slide_up_down" />
                </div>
              </div>
              {/* <div className="col-12">
                <div className="sponsers mt-30">
                  <div className="title me-5 flex-shrink-0">
                    Happy <br /> <span className="fw-bold"> Sponsors </span>
                  </div>
                  <div className="sponsers-content">
                    <a href="#">
                      <img src="/assets/img/logos/18.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/assets/img/logos/19.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/assets/img/logos/20.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/assets/img/logos/21.png" alt="" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <img src="/assets/img/header/head7_bg.png" alt="" className="head7_bg slide_up_down" />
      </header>
      <section className="numbers style-8 pt-100">
      <div className="numbers-btm" ref={numbersSectionRef}>
        <div className="container">
          <div className="numbers-content">
            <div className="row">
              {
                numbers.map((number, idx) => (
                  <div className="col-lg-3" key={idx}>
                    <div className="number-card style-8 mt-4 mt-lg-0 wow fadeInUp">
                      <div className="icon">
                        <img src={number.image} alt="" />
                      </div>
                      <div className="inf">
                        <h3> <CountTo className="counter" from={0} to={number.value} speed={1500} position={position} /> { number.operator } </h3>
                        <p>{ number.title }</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header;