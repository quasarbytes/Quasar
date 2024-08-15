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
    <title>Privacy Policy - Quasar Bytes</title>
    <style>
        .page-container {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
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
<body class="page-container">
    <div class="content-container">
        <h1 class="main-title">Privacy Policy</h1>
        <p class="update-date"><strong>Last Updated: July 17, 2024</strong></p>
        <p class="text-content">At Quasar Bytes, we prioritize the privacy and security of our clients and users. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services, website, and applications.</p>
        
        <h2 class="section-title" id="information-we-collect">1. Information We Collect</h2>
        <p class="text-content">We may collect various types of information to provide and improve our services:</p>
        
        <h3 class="subsection-title">a. Personal Information:</h3>
        <ul class="text-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
        </ul>
        
        <h3 class="subsection-title">b. Non-Personal Information:</h3>
        <ul class="text-list">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring site</li>
            <li>Pages visited on our website</li>
            <li>Time and date of visits</li>
        </ul>
        
        <h3 class="subsection-title">c. Usage Data:</h3>
        <ul class="text-list">
            <li>Actions taken within our applications and services</li>
            <li>Time spent on each section of our website or application</li>
            <li>Error reports and performance data</li>
        </ul>

        <h3 class="subsection-title">d. Cookies and Similar Technologies:</h3>
        <ul class="text-list">
            <li>Session identifiers</li>
            <li>User preferences</li>
            <li>Authentication tokens</li>
        </ul>
        
        <h2 class="section-title" id="how-we-use-information">2. How We Use Your Information</h2>
        <p class="text-content">We utilize the collected information for a variety of purposes:</p>
        
        <h3 class="subsection-title">a. Service Delivery:</h3>
        <ul class="text-list">
            <li>To provide, operate, and maintain our services</li>
            <li>To process and fulfill orders, transactions, and requests</li>
            <li>To manage user accounts</li>
        </ul>
        
        <h3 class="subsection-title">b. Communication:</h3>
        <ul class="text-list">
            <li>To respond to your inquiries, comments, or questions</li>
            <li>To send administrative and promotional emails</li>
            <li>To notify you about changes to our services</li>
        </ul>
        
        <h3 class="subsection-title">c. Improvement and Personalization:</h3>
        <ul class="text-list">
            <li>To analyze usage patterns to improve our website and services</li>
            <li>To personalize your experience with our offerings</li>
            <li>To develop new products, services, and features</li>
        </ul>
        
        <h3 class="subsection-title">d. Security:</h3>
        <ul class="text-list">
            <li>To monitor and prevent any fraudulent or malicious activity</li>
            <li>To ensure the security of our systems and data</li>
            <li>To authenticate user identities</li>
        </ul>

        <h3 class="subsection-title">e. Legal Compliance:</h3>
        <ul class="text-list">
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To enforce our terms and conditions</li>
        </ul>


        <h2 class="section-title" id="data-retention">3. Data Retention</h2>
        <p class="text-content">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. This includes retaining data to comply with legal obligations, resolve disputes, and enforce our agreements.</p>

        <h2 class="section-title" id="data-sharing">4. Sharing Your Information</h2>
        <p class="text-content">Quasar Bytes does not sell, trade, or rent your personal information to third parties. However, we may share your data under the following circumstances:</p>
        
        <h3 class="subsection-title">a. Service Providers:</h3>
        <p class="text-content">We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These partners are obligated to keep your information confidential and use it solely for the services they provide to us.</p>
        
        <h3 class="subsection-title">b. Business Transfers:</h3>
        <p class="text-content">In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you via email and/or a prominent notice on our website of any such change in ownership.</p>

        <h3 class="subsection-title">c. Legal Obligations:</h3>
        <p class="text-content">We may disclose your information when required to comply with legal processes, enforce our site policies, or protect our or others' rights, property, or safety.</p>

        

        <h2 class="section-title" id="cookies">5. Cookies and Tracking Technologies</h2>
        <p class="text-content">We use cookies and similar tracking technologies to enhance your experience on our site. Cookies help us understand how users interact with our services and provide a more personalized experience.</p>
        <p class="text-content">You can choose to disable cookies through your browser settings. However, disabling cookies may affect the functionality and features of our services.</p>

        <h2 class="section-title" id="third-party-services">6. Third-Party Services</h2>
        <p class="text-content">Our services may integrate with third-party platforms and services. These third parties may collect information about you in accordance with their own privacy policies. We encourage you to review the privacy policies of any third-party services you interact with.</p>

        

        <h2 class="section-title" id="data-security">7. Data Security</h2>
        <p class="text-content">We implement a variety of security measures to ensure the safety of your personal information. These include encryption, firewalls, and secure servers. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</p>
        
        <h2 class="section-title" id="children-privacy">8. Children's Privacy</h2>
        <p class="text-content">Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently gathered such information, we will take steps to delete it promptly.</p>

        
        
        <h2 class="section-title" id="your-rights">9. Your Rights</h2>
        <p class="text-content">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
        
        <h3 class="subsection-title">a. Access:</h3>
        <p class="text-content">Request access to the personal data we hold about you.</p>
        
        <h3 class="subsection-title">b. Rectification:</h3>
        <p class="text-content">Request corrections to any inaccurate or incomplete personal data.</p>
        
        <h3 class="subsection-title">c. Deletion:</h3>
        <p class="text-content">Request the deletion of your personal data under certain conditions.</p>
        
        <h3 class="subsection-title">d. Restriction:</h3>
        <p class="text-content">Request the restriction of processing your personal data under certain circumstances.</p>

        <h3 class="subsection-title">e. Data Portability:</h3>
        <p class="text-content">Request a copy of your personal data in a structured, commonly used, and machine-readable format.</p>

        <h3 class="subsection-title">f. Objection:</h3>
        <p class="text-content">Object to the processing of your personal data under certain conditions.</p>

        <h3 class="subsection-title">g. Opt-Out of Communications:</h3>
        <p class="text-content">Unsubscribe from promotional emails by following the instructions provided in those emails.</p>

        <p class="text-content">To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.</p>

        

        <h2 class="section-title" id="third-party-links">10. Third-Party Links</h2>
        <p class="text-content">Our website and services may contain links to third-party sites. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review their privacy policies before providing them with any personal information.</p>
        
        <h2 class="section-title" id="policy-changes">11. Changes to This Privacy Policy</h2>
        <p class="text-content">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website with the updated date.</p>
        
        <h2 class="section-title" id="contact-us">12. Contact Us</h2>
        <p class="text-content">If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:</p>
        
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