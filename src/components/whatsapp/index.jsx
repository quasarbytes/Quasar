import React from "react";
const WhatsAppBTN = () => {
  return (
    <div className="floating_btn">
      <a
        className="aNew"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=+918005755753&text=Hello, I've got a question."
      >
        <div className="contact_icon">
          <img style={{height:40,width:40}} src="/assets/img/whatsapp.png"/>
          {/* <i class="fab fa-whatsapp my-float"></i> */}
        </div>
      </a>
      {/* <p className="text_icon">Talk to us?</p> */}
    </div>
  );
};

export default WhatsAppBTN;
