import React, { useEffect, useRef } from 'react';
import navbarScrollEffect from "common/navbarScrollEffect";
import MainLayout from 'layouts/Main';
import Thanks from 'components/Thanks';
import Whatsapp from 'components/whatsapp';

const Page404 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Thanks />
      <Whatsapp/>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Quasar Bytes - Thank You</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default Page404;