import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
// import AbsoluteContainer from 'components/Navbars/AbsoluteContainer';
// import TopNav from 'components/Navbars/TopNav';
// import Navbar from 'components/Navbars/SaasNav';
// import ThankYouComp from 'components/Thanks';

const ThankYou = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      {/* <ThankYouComp /> */}
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Thank You</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default ThankYou;