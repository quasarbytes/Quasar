import React, { useState } from "react";
// import { SVGIconList } from "../helper/SVGIconList";
import $ from "jquery";

const ModalAndToast = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [projectBudget, setProjectBudget] = useState("");
  const [projectDetail, setProjectDetail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  // const [projectBudgetError, setProjectBudgetError] = useState(false);
  const [projectDetailError, setProjectDetailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitFun = (e) => {
    if (loading) {
      return;
    }
    e.preventDefault();
    if (!name) {
      setNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!phone) {
      setPhoneError(true);
    } 
    // else if (!projectBudget) {
    //   setProjectBudgetError(true);
    // }
     else if (!projectDetail) {
      setProjectDetailError(true);
    } else {
      setLoading(true);
      $.ajax({
        type: "POST",
        url: "https://p0ol4bcq19.execute-api.ap-south-1.amazonaws.com/dev/connect/quasarConnect",
        data: $("#contact-form").serialize(),
        cache: false,
        crossDomain: true,
        success: function (data) {
          setLoading(false);
          if (data?.responseCode == 200) {
            $("#contact-form").trigger("reset");
            // location.href("/thanks.html")
            window.location.href = "/thanks";
          } else {
            $("#message_fail").modal("show");
            $("#message_sent").modal("show");
          }
        },
      });
    }
    // const { name, email,phone,projectBudget,projectDetail } = e.target;
    // alert(name)
    // $("#contact-form").trigger("reset");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (validateMobileNumber(value)) {
      setPhone(value);
      setPhoneError(false);
    } else {
      // setPhoneError(true);
    }
  };

  const validateMobileNumber = (number) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(number);
  };

  return (
    <>
      <div className="toast-container">
        <div className="toast">Form submitted successfully.</div>
      </div>
      <div className="modal-backdrop fade show"></div>
      <div
        class="modal fade bd-example-modal-lg show"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        style={{ display: "block", paddingRight: 0 }}
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Consult With Our Expert For Free
              </h5>
              <button
                type="button"
                className="btn close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <section id="contact-us" className="">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-form-area">
                        {/* <div
                    class="contact-left-content"
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <div class="tj-sec-heading">
                      <span class="sub-title">Get In touch</span>
                      <h2 class="sec-title">
                        Have any Project Plan In your Mind?
                      </h2>
                      <div class="desc">
                        <p>We Would Like To Hear From You Anytime</p>
                      </div>
                    </div>
                    <div class="comntact-list">
                      <div class="contact-icon">
                        <img src="assets/images/icon/phone.svg" alt="Icon" />
                      </div>
                      <div class="contact-header">
                        <span class="d-block">Contact us</span>
                        <a href="tel:+918005755753">+91 8005755753</a>
                      </div>
                    </div>
                    <div class="comntact-list">
                      <div class="contact-icon">
                        <img src="assets/images/icon/mail.svg" alt="Icon" />
                      </div>
                      <div class="contact-header">
                        <span class="d-block">Mail us 24/7</span>
                        <a href="mailto:hello@quasarbytes.com"
                          >hello@quasarbytes.com</a
                        >
                      </div>
                    </div>
                  </div> */}
                        <form
                          id="contact-form"
                          className="contact-form-box"
                          // data-sal="slide-left"
                          // data-sal-duration={1000}
                          // data-sal-delay={300}
                          onSubmit={submitFun}
                        >
                          {/* onsubmit="return validateForm(event)" */}
                          <div className="form-input">
                            {/* <label>Your Name</label> */}
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              required=""
                              placeholder="Name"
                              onChange={(e) => {
                                setName(e.target.value);
                                setNameError(false);
                              }}
                            />
                            {nameError && (
                              <label style={{color:'red',position:"absolute"}} id="name-error" class="error" for="name">
                                Please Enter Your Name.
                              </label>
                            )}
                          </div>
                          <div className="form-input">
                            {/* <label>Email Address</label> */}
                            <input
                              type="email"
                              className="form-control mt-30"
                              name="email"
                              id="email"
                              required=""
                              placeholder="Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(false);
                              }}
                            />
                            {emailError && (
                              <label style={{color:'red',position:"absolute"}}  id="name-error" class="error" for="name">
                                Please Enter Your Email.
                              </label>
                            )}
                          </div>
                          <div className="form-input">
                            {/* <label>Phone Number</label> */}
                            <input
                              type="text"
                              className="form-control mt-30"
                              name="phone"
                              id="phone"
                              required=""
                              placeholder="Phone Number"
                              value={phone}
                              // onChange={(e) => {
                              //   if (
                              //     /^(?:\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/.test(
                              //       e.target.value
                              //     ) ||
                              //     e.target.value == ""
                              //   ) {
                              //     // event.preventDefault();
                              //     setPhone(e.target.value);
                              //     setPhoneError(false);
                              //   }
                              // }}
                              onChange={handleChange}
                            />
                            {phoneError && (
                              <label style={{color:'red',position:"absolute"}}  id="name-error" class="error" for="name">
                                Please Enter Your Phone.
                              </label>
                            )}
                          </div>
                          {/* <div className="form-input"> */}
                            {/* <label>Project Budget</label> */}
                            {/* <input
                              type="text"
                              className="form__input"
                              name="projectBudget"
                              id="projectBudget"
                              required=""
                              placeholder="Project Budget"
                              value={projectBudget}
                              onChange={(e) => {
                                if (
                                  /^[0-9]*$/.test(e.target.value) ||
                                  e.target.value == ""
                                ) {
                                  // event.preventDefault();
                                  setProjectBudget(e.target.value);
                                  setProjectBudgetError(false);
                                }
                              }}
                            />
                            {projectBudgetError && (
                              <label id="name-error" class="error" for="name">
                                Please Enter Your Budget.
                              </label>
                            )} */}
                          {/* </div> */}
                          <div className="form-group">
                            {/* <label>Project Details</label> */}
                            <textarea
                              id="projectDetail"
                              name="projectDetail"
                              required=""
                              placeholder="Project Detail"
                              defaultValue={""}
                              onChange={(e) => {
                                setProjectDetail(e.target.value);
                                setProjectDetailError(false);
                              }}
                              className="form-control mt-30"
                              rows="5"
                            />
                            {projectDetailError && (
                              <label style={{color:'red',position:"absolute"}}  id="name-error" class="error" for="name">
                                Please Enter Project Detail.
                              </label>
                            )}
                          </div>
                          <div className="text-center mt-30 mb-30">
                            <button
                              // className="btn tj-primary-btn"
                              className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                              type="submit"
                            >
                              Submit Now
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="contact-section-shape">
                  <div className="contact-bg-shape shake-y">
                    <img src={SVGIconList.shape31} alt="Shape" />
                  </div>
                  <div className="contact-bg-shape1 pulse">
                    <img src={SVGIconList.shape32} alt="Shape" />
                  </div>
                  <div className="contact-bg-shape2 pulse">
                    <img src={SVGIconList.shape33} alt="Shape" />
                  </div>
                  <div className="contact-bg-shape3 shake-y">
                    <img src={SVGIconList.shape34} alt="Shape" />
                  </div>
                </div> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAndToast;
