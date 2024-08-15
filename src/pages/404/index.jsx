import React, { useEffect, useRef } from 'react';
import navbarScrollEffect from "common/navbarScrollEffect";
import MainLayout from 'layouts/Main';
import NotFound from 'components/404';
import Whatsapp from 'components/whatsapp';

const Page404 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <NotFound />
      <Whatsapp/>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>404</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default Page404;