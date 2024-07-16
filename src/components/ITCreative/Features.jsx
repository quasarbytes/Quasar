import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import features from 'data/ITCreative/features.json';
import ModalAndToast from 'components/Modal/index.jsx';
// import CountTo from '../CountTo';
// import numbers from 'data/DataAnalysis/numbers.json';

import "swiper/css";
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const Features = ({navbarRef}) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
    {showModal && <div style={{position:"absolute"}}>
      <ModalAndToast setShowModal={setShowModal} />
    </div>}
    <section ref={navbarRef} className="features style-7 section-padding">
      <div className="container about-us">
        <div className="section-head text-center style-4 mb-40">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Core Character </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            We're Your Total <br/><span> Tech </span> Solution.
          </h2>
          <br/>
          <p>
          Welcome to our innovation hub, where technology and creativity unite, and precision is woven into every pixel. We specialize in Web Application, Mobile Apps, Software, Databases, UI/UX, and analytics, tailoring solutions for business success.

Explore the vibrant landscape of innovation with us, where challenges evolve into triumphs, and opportunities eagerly await your curiosity.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="features-slider7">
          {
            load && (
              <Swiper
                spaceBetween={50}
                centeredSlides={true}
                speed={10000}
                autoplay={{
                  delay: 1
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  787: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  }
                }}
              >
                {
                  features.map((feature, index) => (
                    <SwiperSlide key={index}>
                      <a href="#" className="features-card style-7">
                        <div className="icon">
                          <img src={feature.image} alt="" />
                        </div>
                        <div className="info">
                          <p className="color-999"> #{feature.id} </p>
                          <h5> {feature.title.part1} <br /> {feature.title.part2} </h5>
                        </div>
                      </a>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )
          }
        </div>
        <div className="btns text-center mt-10">
          <a href="javascript:void(0)" onClick={()=>{setShowModal(true)}} className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
            <small> Learn More <i className="fas fa-long-arrow-alt-right"></i> </small>
          </a>
          {/* <a href="#0" className="btn btn-icon-circle rounded-pill bg-white fw-bold me-4">
            <small> Purchase Now <i className="fas fa-long-arrow-alt-right bg-light"></i> </small>
          </a> */}
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle rotate-center" />
    </section>
      </>
  )
}

export default Features