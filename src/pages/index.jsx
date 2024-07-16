import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav-7';
// import TopNav from 'components/Navbars/TopNav';
import SideMenu from 'components/ITCreative/SideMenu';
import Navbar from 'components/Navbars/ITCreativeNav';
// import Navbar from 'components/Navbars/AppNav';
import Header from 'components/ITCreative/Header';
import Features from 'components/ITCreative/Features';
import About from 'components/ITCreative/About';
import Services from 'components/ITCreative/Services';
import Projects from 'components/ITCreative/Projects';
import Testimonials from 'components/ITCreative/Testimonials';
// import ChooseUs from 'components/ITCreative/ChooseUs';
import Blog from 'components/ITCreative/Blog';
import ChatBanner from 'components/ITCreative/ChatBanner';
import Footer from 'components/ITCreative/Footer';
import navbarScrollEffect from "common/navbarScrollEffect";
import ChooseUs from 'components/Digital/ChooseUs';
import Integration from 'components/App/About/Integration.jsx'
import Screenshots from 'components/App/Screenshots';
import Modal from 'components/Modal/index.jsx'
import aboutData from 'data/App/about.json';
import FAQ from 'components/App/FAQ';
import Whatsapp from 'components/whatsapp'
const HomeItSolutions2 = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);
  return (
    <MainLayout>
      {/* <TopNav /> */}
      {/* <SideMenu /> */}
      {/* <Modal/> */}
      <Navbar navbarRef={navbarRef} />
      {/* <Navbar /> */}
      <Header />
      <main>
        <Features targetRef={navbarRef}/>
        <Screenshots />
        <section className={`about style-4`}>
          <Integration integrations={aboutData?.integrations}/>
        </section>
        {/* <Numbers/> */}
        {/* <About /> */}
        <Services />

        {/* <Projects /> */}
        <Testimonials />
        <FAQ />

        {/* <ChooseUs /> */}

        <ChatBanner />
      </main>
      <Footer />
      <Whatsapp/>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Quasar Bytes</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeItSolutions2;