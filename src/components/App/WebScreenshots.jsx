import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import screenshots from 'data/App/webScreenshots.json';

import "swiper/css";

const Screenshots = ({ rtl }) => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <>
    <section className="services portfolio style-4 pt-100">
      <div className="section-head text-center style-4 mb-50">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Testimonials </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            Some of the <span> Apps </span> <br /> we build.
          </h2>
      </div>

      <div className="screenshots style-4" data-scroll-index="4">
      <div className="screenshots-slider-web style-4">
        <div className="swiper-container">

      {/* <div className="img">
                      <img src={"/assets/img/screenshots/web1.png"} alt="" />
                    </div> */}
        </div>
        {
          loadSwiper && (
            <Swiper
              dir={rtl ? 'rtl' : 'ltr'}
              className="swiper-container"
              spaceBetween={10}
              slidesPerView={1}
              pagination={false}
              navigation={false}
              mousewheel={false}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 4000
              }}
              speed={1000}
              centeredSlides={true}
              breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 2,
                },
                1787: {
                    slidesPerView: 3,
                },
                1991: {
                    slidesPerView: 3,
                },
                11200: {
                    slidesPerView: 5,
                }
              }}
            >
              {
                screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <div className="img">
                      <img style={{height:'64%',width:'100%'}} src={screenshot} alt="" />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
        }
      </div>
      <img style={{height:'100%',width:'59%'}} src="/assets/img/screenshots/desktop.png" alt="" className="mob-desktop" />
      </div>
    </section>
     
    </>
  )
}

export default Screenshots