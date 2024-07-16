import React from 'react';
import footerData from 'data/ITCreative/footer.json';

const Footer = () => {
  const scrollToComponent = (id,height) => {
    const someid = document.querySelector(id);
    const top = someid.getBoundingClientRect().top + window.scrollY - height;
    window.scrollTo({ top, behavior: 'smooth' });
  }


  return (
    <footer className="style-7">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-4 border-1 border-end brd-gray">
              <div className="info-logo">
                <a href="#" className="logo">
                  <img style={{height: 120, width: 230,marginLeft: -35,marginBottom:-40}} src="/assets/img/logo2.png" alt="" />
                </a>
                <div className="text">
                  { footerData.text }
                </div>
                <div className="social-links">
                  <a target="_blank" href="https://www.instagram.com/quasar.bytes">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/QuasarBytes">
                    {/* <i className="fab fa-twitter"></i> */}
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.51962 6.1948L13.8489 0H12.586L7.95861 5.37887L4.26275 0H0L5.58887 8.13379L0 14.63H1.26293L6.14957 8.94974L10.0527 14.63H14.3154L8.51929 6.1948H8.51962ZM1.71797 0.950725H3.65775L12.5866 13.7225H10.6468L1.71797 0.950725Z"
                        fill="#161616"
                      />
                    </svg>
                  </a>
                  <a target="_blank" href="https://wa.me/+918005755753?">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/quasar-bytes">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/people/Quasar-Bytes/61557077723259/?mibextid=ZbWKwL">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="links-side">
                <div className="row gx-5">
                  {/* <div className="col-lg-6">
                    <div className="links-group">
                      <h5>What We Do</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.links.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.links2.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="links-group">
                      <h5>More Pages</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.morePages.map((link, i) => (
                                <li key={i}>
                                  <a
                                  onClick={() => scrollToComponent(link.href,link?.height)}
                                   href={"javascript:void(0)"}
                                  >{ link.text }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className="links">
                            { 
                              footerData.morePages2.map((link, i) => (
                                <li key={i}>
                                  <a href={link.href}>{ link.text } { link.label && <small className="text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-2 lh-2"> { link.label } </small> }</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot bg-white p-3 rounded-pill text-center">
          <p> Copyright <a href="javascript:void(0)" className="fw-bold"> ©Quasar Bytes </a> - 2024 All Rights Reserved. </p>
        </div>
      </div>
      {/* <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave"> */}
    </footer>
  )
}

export default Footer