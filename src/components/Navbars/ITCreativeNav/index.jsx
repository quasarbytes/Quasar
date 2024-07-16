import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import navbarScrollEffect from "common/navbarScrollEffect";
import ModalAndToast from 'components/Modal/index.jsx'



const ITCreativeNav = () => {
  const navbarRef = useRef(null);
  const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  const toggleSideMenu = (e) => {
    e.preventDefault();

    document.querySelector('.side_menu_btn').classList.toggle('active');
    
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.toggle('show');
    side_overlay && side_overlay.classList.toggle('show');
  }

  const scrollToComponent = (id,height) => {
    const someid = document.querySelector('.'+id);
    const top = someid.getBoundingClientRect().top + window.scrollY - height;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  

  return (
    <>
      {showModal && <div style={{position:"absolute"}}>
        <ModalAndToast setShowModal={setShowModal} />
        </div>}
    <nav className="navbar navbar-expand-lg navbar-light style-7" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img 
          style={{height: 45,
            width: 250,
            marginLeft: -35}}
           src="/assets/img/logo22.png" alt="" />
        </a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link active 
              
              "
               href="#" id="navbarDropdown1" role="button"
                // data-bs-toggle="dropdown"
                 aria-expanded="false">
                Home
              </a>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/" className="dropdown-item">Landing Preview</Link></li>
                <li><Link to="/home-it-solutions2" className="dropdown-item"> Creative It Solutions</Link></li>
                <li><Link to="/home-data-analysis" className="dropdown-item"> Data Analysis</Link></li>
                <li><Link to="/home-app-landing" className="dropdown-item"> App Landing</Link></li>
                <li><Link to="/home-saas-technology" className="dropdown-item"> Saas Technology</Link></li>
                <li><Link to="/home-marketing-startup" className="dropdown-item"> Marketing Startup</Link></li>
                <li><Link to="/home-it-solutions" className="dropdown-item"> It Solution</Link></li>
                <li><Link to="/home-software-company" className="dropdown-item"> Software Company</Link></li>
                <li><Link to="/home-digital-agency" className="dropdown-item"> Digital Agency</Link></li>
                <li><Link to="/home-modren-shop" className="dropdown-item"> Modren Shop</Link></li>
              </ul> */}
            </li>
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link " 
              // href="#about-us"
               role="button"
                onClick={() => scrollToComponent('about-us',200)}
                // data-bs-toggle="dropdown"
                 aria-expanded="false">
                About Us
                {/* <small className="hot alert-danger text-danger">hot</small> */}
              </a>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/page-about-app" className="dropdown-item">about</Link></li>
                <li><Link to="/page-product-app" className="dropdown-item">product</Link></li>
                <li><Link to="/page-services-app" className="dropdown-item">services</Link></li>
                <li><Link to="/page-shop-app" className="dropdown-item">shop</Link></li>
                <li><Link to="/page-single-project-app" className="dropdown-item">single project</Link></li>
              </ul> */}
            </li>
            <li className="nav-item">
            <a className="nav-link " 
              // href="#about-us"
               role="button"
                onClick={() => scrollToComponent('our-service',150)}
                // data-bs-toggle="dropdown"
                 aria-expanded="false">
                Our Services
                {/* <small className="hot alert-danger text-danger">hot</small> */}
              </a>
              {/* <Link to="/page-portfolio-app" className="nav-link">
                Our Services
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link to="/page-blog-app" className="nav-link">
                Portfolio
              </Link> */}
              <a className="nav-link " 
              // href="#about-us"
               role="button"
                onClick={() => scrollToComponent('portfolio',150)}
                // data-bs-toggle="dropdown"
                 aria-expanded="false">
                Portfolio
                {/* <small className="hot alert-danger text-danger">hot</small> */}
              </a>
            </li>
            {/* <li className="nav-item">
              <Link to="/page-contact-app" className="nav-link">
                contact
              </Link>
            </li> */}
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              {/* <a href="#" className="me-4">
                <img src="/assets/img/icons/user.png" alt="" />
              </a> */}
               <a href="javascript:void(0)" onClick={()=>{setShowModal(true)}} className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
                <small> Contact Us <i className="fas fa-long-arrow-alt-right"></i> </small>
              </a>
              {/* <a href="#0" className="side_menu_btn" onClick={toggleSideMenu}>
                <img src="/assets/img/icons/4dots.png" alt="" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default ITCreativeNav