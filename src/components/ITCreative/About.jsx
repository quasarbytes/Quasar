import React from 'react';
import aboutData from 'data/ITCreative/about.json';
import projects from 'data/Software/projects.json';
import { Link } from 'gatsby';

const About = () => {
  return (
    <section className="services portfolio style-7 pt-100">
      <div className="container">
      <div className="section-head text-center style-4 mb-50">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Testimonials </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            Some of the <span> Websites </span> <br /> we build.
          </h2>
      </div>
        <div className="content">
          <div className="row">
            {
              projects.map((project, i) => (
                <div className={i === 0 ? 'col-lg-7' : i === 1 ? 'col-lg-5' : 'col-lg-6'} key={i}>
                  <div className="project-card d-block mb-30 style-3">
                    <Link to="/page-single-project-5" className="img img-cover d-block">
                      <img src={project.image} alt="" />  
                    </Link>
                    <div className="info">
                      <h5 className="h5"><Link to="/page-single-project-5">{ project.title }</Link></h5>
                      <small className="small"><a href="#">{ project.description }</a></small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="top-wave" />
      <img src="/assets/img/about/about_s4_wave.png" alt="" className="bottom-wave" />
      <img src="/assets/img/about/about7_lines.png" alt="" className="bg-lines" />
    </section>
  )
}

export default About