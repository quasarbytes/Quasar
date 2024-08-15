import React from 'react';
import MainLayout from 'layouts/Main';
import Header from 'components/ITCreative/Header';
import Features from 'components/ITCreative/Features';
import Services from 'components/ITCreative/Services';
import Navbar from 'components/Navbars/ITCreativeNav';
import Testimonials from 'components/ITCreative/Testimonials';
import ChatBanner from 'components/ITCreative/ChatBanner';
import Footer from 'components/ITCreative/Footer';
import navbarScrollEffect from "common/navbarScrollEffect";
import Integration from 'components/App/About/Integration.jsx'
import Screenshots from 'components/App/Screenshots';
import aboutData from 'data/App/about.json';
import FAQ from 'components/App/FAQ';
import Whatsapp from 'components/whatsapp';
import Team from 'components/App/Team.jsx'


const HomeItSolutions2 = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);
  return (
    <MainLayout>
      <Navbar navbarRef={navbarRef} />
      <Header secondaryPage={1}/>
      <main>
        <Features targetRef={navbarRef}/>
        <Screenshots />
        <section className={`about style-4`}>
          <Integration integrations={aboutData?.integrations}/>
        </section>
        <Services />
        <Team/>
        <Testimonials />
        <FAQ />
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