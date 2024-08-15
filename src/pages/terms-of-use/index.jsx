import React, { useEffect, useRef } from 'react';
import navbarScrollEffect from "common/navbarScrollEffect";
import MainLayout from 'layouts/Main';
import Thanks from 'components/Thanks';
import Whatsapp from 'components/whatsapp';
import Navbar from 'components/Navbars/ITCreativeNav';
import TopNav from 'components/Navbars/TopNav-7';
const Page404 = () => {
  const navbarRef = useRef(null);

 
  const htmlFile = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Use - Quasar Bytes</title>
    <style>
        .terms-container {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .content-container {
            // max-width: 800px;
            margin: 50px auto;
            padding: 20px 40px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .main-title {
            font-size: 2.5em;
            color: #2c3e50;
            margin-bottom: 20px;
            text-align: center;
        }
        .section-title {
            font-size: 1.8em;
            color: #34495e;
            margin-top: 30px;
        }
        .subsection-title {
            font-size: 1.4em;
            color: #16a085;
            margin-top: 20px;
        }
        .text-list {
            margin-left: 20px;
            list-style: disc;
        }
        .text-content {
            margin-bottom: 15px;
            text-align: justify;
        }
        .link {
            color: #2980b9;
            text-decoration: none;
        }
        .link:hover {
            text-decoration: underline;
        }
        .contact-info {
            margin-top: 30px;
            // text-align: center;
        }
        .contact-info .company-name {
            display: block;
            font-size: 1.2em;
            color: #2980b9;
        }
        .contact-info .contact-email,
        .contact-info .address {
            display: block;
            margin-top: 5px;
        }
        .back-to-top {
            text-align: right;
            margin-top: 20px;
        }
        .back-to-top a {
            font-size: 0.9em;
            color: #2980b9;
            text-decoration: none;
        }
        .back-to-top a:hover {
            text-decoration: underline;
        }
        .update-date {
            text-align: center;
            font-size: 0.9em;
            color: #7f8c8d;
            margin-top: 10px;
        }
    </style>
</head>
<body class="terms-container">
    <div class="content-container">
        <h1 class="main-title">Terms of Use</h1>
        <p class="update-date"><strong>Last Updated: July 17, 2024</strong></p>

        <p class="text-content">Welcome to Quasar Bytes! These terms and conditions outline the rules and regulations for the use of Quasar Bytes' website and services.</p>

        <h2 class="section-title">1. Acceptance of Terms</h2>
        <p class="text-content">By accessing this website, we assume you accept these terms and conditions. Do not continue to use Quasar Bytes if you do not agree to all of the terms and conditions stated on this page.</p>

        <h2 class="section-title">2. Use of Our Services</h2>
        <p class="text-content">Quasar Bytes provides various software development services. By using our services, you agree to comply with all applicable laws and regulations. You agree not to use our services for any unlawful or prohibited purposes.</p>

        <h2 class="section-title">3. Intellectual Property</h2>
        <p class="text-content">Unless otherwise stated, Quasar Bytes and/or its licensors own the intellectual property rights for all material on Quasar Bytes. All intellectual property rights are reserved. You may access this from Quasar Bytes for your own personal use subjected to restrictions set in these terms and conditions.</p>

        <h2 class="section-title">4. User Accounts</h2>
        <p class="text-content">To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.</p>

        <h2 class="section-title">5. Termination</h2>
        <p class="text-content">We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>

        <h2 class="section-title">6. Limitation of Liability</h2>
        <p class="text-content">In no event shall Quasar Bytes, nor any of its officers, directors, employees, or agents, be liable for anything arising out of or in any way connected with your use of this website or services, whether such liability is under contract, tort, or otherwise.</p>

        <h2 class="section-title">7. Governing Law</h2>
        <p class="text-content">These terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>

        <h2 class="section-title">8. Changes to These Terms</h2>
        <p class="text-content">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

        <h2 class="section-title">9. Contact Us</h2>
        <p class="text-content">If you have any questions about these Terms, please contact us at:</p>
          <div class="contact-info">
            <strong class="company-name">Quasar Bytes</strong>
            <a class="contact-email" href="mailto:hello@quasarbytes.com">hello@quasarbytes.com</a>
            <p class="address">Phone: +91 80057 55753</p>
        </div>
    </div>
</body>
</html>





  `;

  return (
    <MainLayout>
      <TopNav navbarRef={navbarRef} />
      <section className={`about style-4`}>

      <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
      </section>


      {/* <Thanks /> */}
      <Whatsapp/>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Privacy Policy</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default Page404;